package com.codestates.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoardPostDto {
    private long memberId;
    @NotBlank(message = "제목을 입력해주세요.")
    private String boardTitle;
    @NotBlank(message = "내용을 입력해주세요")
    private String boardContent;
    private int boardViews;
    private int boardLike;
    private int boardCmt;
    private String createdAt;
    private List<BoardTagDto> boardTags;
}
