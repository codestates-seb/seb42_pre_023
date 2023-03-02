package com.codestates.comment.dto;

import com.codestates.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
public class CommentPostDto {

    @Positive
    private long boardId;

    @Positive
    private long memberId;

    @NotBlank(message = "댓글에 내용을 입력해주세요.")
    private String content;

}
