package com.codestates.comment.controller;

import com.codestates.board.entity.Board;
import com.codestates.board.service.BoardService;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.service.CommentService;
import com.codestates.dto.MultiResponseDto;
import com.codestates.dto.SingleResponseDto;
import com.codestates.utils.UriCreator;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pre/comments")
@Validated
@Slf4j
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    private final static String COMMENT_DEFAULT_URL = "/pre/comments";

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto commentDto, Model model) {
        Comment comment = commentService.createComment(mapper.commentPostDtoToComment(commentDto));
        URI location = UriCreator.createUri(COMMENT_DEFAULT_URL, comment.getCommentId());

        Long boardId = commentDto.getBoardId();
        commentService.updateBoardCmt(boardId);

        return ResponseEntity.created(location).build();
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
    public ResponseEntity getComments(@PathVariable("board-id") @Positive long boardId) {
        Page<Comment> pageComments = commentService.findComments(boardId);
        List<Comment> comments = pageComments.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.commentsToCommentResponseDtos(comments), pageComments), HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
