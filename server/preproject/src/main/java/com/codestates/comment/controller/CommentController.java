package com.codestates.comment.controller;

import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.service.CommentService;
import com.codestates.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.lang.reflect.Array;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/pre/comments")
@Validated
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto commentDto) {
        Comment comment = mapper.commentPostDtoToComment(commentDto);
        Comment response = commentService.createComment(comment);

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentPatchDto commentPatchDto) {
        commentPatchDto.setCommentId(commentId);
        Comment response = commentService.updateComment(mapper.commentPatchDtoToComment(commentPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive long commentId) {
        Comment response = commentService.findComment(commentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping("/list/{board-id}")
    public ResponseEntity getComments(@PathVariable("board-id") long boardId) {

        return null;
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment() {
        return ResponseEntity.noContent().build();
    }


}
