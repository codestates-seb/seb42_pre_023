package com.codestates.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class CommentPatchDto {
    private long commentId;

    @NotBlank(message = "댓글에 내용을 입력해주세요.")
    private String content;

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }
}
