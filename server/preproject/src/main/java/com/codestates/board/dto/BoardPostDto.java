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
    @NotBlank(message = "작성자를 정해주세요.")
    private long memberId;
    @NotBlank(message = "제목을 입력해주세요.")
    private String boardTitle;
    @NotBlank(message = "내용을 입력해주세요")
    private String boardContent;
    private int boardViews;
    private int boardLike;
    private long boardCmt;
    private List<BoardTagDto> boardTags;
}
