package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class CommentPatchDto {
    private long commentId;

    @NotBlank(message = "댓글에 내용을 입력해주세요.")
    private String commentContent;

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }
}
