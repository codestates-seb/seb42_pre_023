package com.codestates.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BoardPatchDto {
    private long boardId;
    private long memberId;
    @NotBlank(message = "제목을 입력해주세요")
    private String boardTitle;
    @NotBlank(message = "내용을 입력해주세요")
    private String boardContent;
    private int boardViews;
    private int boardLike;
    private int boardCmt;

    public void setBoardId(long boardId) {
        this.boardId = boardId;
    }
}
