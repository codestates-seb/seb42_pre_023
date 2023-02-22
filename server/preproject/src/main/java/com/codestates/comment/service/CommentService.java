package com.codestates.comment.service;

import com.codestates.board.service.BoardService;
import com.codestates.comment.entity.Comment;
import com.codestates.member.service.MemberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CommentService {
    private final MemberService memberService;
    private final BoardService boardService;
    private final CommentService commentService;

    public CommentService(MemberService memberService,
                          BoardService boardService, CommentService commentService) {
        this.memberService = memberService;
        this.boardService = boardService;
        this.commentService = commentService;
    }

    public Comment createComment (Comment comment) {

        return null;
    }

    public Comment updateComment(Comment Comment) {
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

    }

}
