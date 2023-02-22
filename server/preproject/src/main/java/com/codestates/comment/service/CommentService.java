package com.codestates.comment.service;

import com.codestates.board.entity.Board;
import com.codestates.board.service.BoardService;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.helper.CommentCalculator;
import com.codestates.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class CommentService {
    private final MemberService memberService;
    private final BoardService boardService;
    private final CommentRepository commentRepository;

    public CommentService(MemberService memberService,
                          BoardService boardService, CommentRepository commentRepository) {
        this.memberService = memberService;
        this.boardService = boardService;
        this.commentRepository = commentRepository;
    }

    public Comment createComment (Comment comment) {
        verifyComment(comment);
        Comment savedComment = saveComment(comment);
        updateCommentCount(savedComment);


        return savedComment;
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getCommentContent())
                .ifPresent(content -> findComment.setCommentContent(content));
        Optional.ofNullable(comment.getCreatedAt())
                .ifPresent(time -> findComment.setCreatedAt(time));

        return commentRepository.save(findComment);
    }

    public Comment findComment(long commentId) {
        return findVerifiedComment(commentId);
    }

    public Page<Comment> findComments(long boardId) {

        List<Comment> comments = commentRepository.findAllByBoardId(boardId)
                .stream()
                .filter(comment -> comment.getBoardId() == boardId)
                .sorted(Comparator.comparing(Comment::getCommentId))
                .collect(Collectors.toList());

        return new PageImpl<>(comments);

    }

    public void deleteComment(long commentId) {
        Comment comment = findVerifiedComment(commentId);
        commentRepository.delete(comment);

    }

    private void verifyComment(Comment comment) {
        //회원 존재 확인
        memberService.findVerifiedMember(comment.getMemberId());
        //보드 존재 확인
        boardService.findVerifiedBoard(comment.getBoardId());
    }

    private Comment saveComment(Comment comment) {
        comment.setCreatedAt(LocalDateTime.now());
        return commentRepository.save(comment);
    }

    private void updateCommentCount(Comment comment) {
        Board board = boardService.findBoard(comment.getBoardId());
        long earnedCommentCount = CommentCalculator.addCommentCount();
        board.setBoardCmt(
                CommentCalculator.calculateCommentCount(board.getBoardCmt(), earnedCommentCount));
        boardService.updateBoard(board);
    }

    private Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findComment;
    }

}
