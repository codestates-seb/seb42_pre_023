package com.codestates.comment.service;

import com.codestates.comment.entity.Comment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CommentService {
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

}
