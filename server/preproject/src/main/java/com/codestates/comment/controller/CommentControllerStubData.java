package com.codestates.comment.controller;

import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.Arrays;
@RestController
@RequestMapping("/comments")
@Validated
public class CommentControllerStubData {

        @PostMapping
        public ResponseEntity postComment() {
            return ResponseEntity.created(URI.create("/comments/1")).build();

        }

        @PatchMapping("/{comment-id}")
        public ResponseEntity patchComment() {
            CommentResponseDto response =
                    new CommentResponseDto(1,1,1,
                            "댓글 작성테스트", LocalDateTime.now(), LocalDateTime.now());

            return ResponseEntity.ok(response);
        }

        @GetMapping("/{comment-id}")
        public ResponseEntity getComment() {
            CommentResponseDto response =
                    new CommentResponseDto(1,1,1,
                            "댓글 작성테스트", LocalDateTime.now(), LocalDateTime.now());
            return ResponseEntity.ok(response);
        }

        @GetMapping
        public ResponseEntity getComments() {
            CommentResponseDto response1 =
                    new CommentResponseDto(1,1,1,
                            "댓글 작성테스트", LocalDateTime.now(), LocalDateTime.now());
            CommentResponseDto response2 =
                    new CommentResponseDto(2,1,2,
                            "댓글 작성테스트", LocalDateTime.now(), LocalDateTime.now());

            return ResponseEntity.ok(Arrays.asList(response1, response2));
        }

        @DeleteMapping("/{comment-id}")
        public ResponseEntity deleteComment() {
            return ResponseEntity.noContent().build();
        }

}