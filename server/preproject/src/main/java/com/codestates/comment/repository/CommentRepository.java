package com.codestates.comment.repository;

import com.codestates.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    Optional<Comment> findByBoardId(Long boardId);

    Optional<Comment> findAllByBoardId(Long boardId);



}
