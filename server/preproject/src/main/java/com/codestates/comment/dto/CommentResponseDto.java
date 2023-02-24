package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;

    private long boardId;

    private long memberId;

    private String commentContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
