package com.codestates.comment.service;

import com.codestates.board.entity.Board;
import com.codestates.board.service.BoardService;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.helper.CommentCalculator;
import com.codestates.member.service.MemberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CommentService {
    private final MemberService memberService;
    private final BoardService boardService;
    private final CommentRepository commentRepository;

    public CommentService(MemberService memberService, BoardService boardService, CommentRepository commentRepository) {
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

    public Comment updateComment(Comment Comment) {
//        Comment findComment = findVer

        return null;
    }

    public Comment findComment(long CommentId) {
        return null;
    }

    public List<Comment> findComments(long boardId) {
        return null;
    }

    public void deleteComment(long CommentId) {

    }

    private void verifyComment(Comment comment) {
        //회원 존재 확인
        memberService.findVerifiedMember(comment.getMemberId());
        //보드 존재 확인
        boardService.findVerifiedBoard(comment.getBoardId());
    }

    private Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    private void updateCommentCount(Comment comment) {
        Board board = boardService.findBoard(comment.getBoardId());
        long earnedCommentCount = CommentCalculator.addCommentCount();
        board.setBoardCmt(
                CommentCalculator.calculateCommentCount(board.getBoardCmt(), earnedCommentCount));
        boardService.updateBoard(board);
    }

//    private Comment findVerifiedComment()

}
