package com.codestates.board.dto;

import com.codestates.board.entity.BoardTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BoardPatchDto {
    private Long boardId;
    private Long memberId;
    @NotBlank(message = "제목을 입력해주세요")
    private String boardTitle;
    @NotBlank(message = "내용을 입력해주세요")
    private String boardContent;
    private Integer boardViews;
    private Integer boardLike;
    private Long boardCmt;
    private List<BoardTagDto> boardTags;

    public void setBoardId(long boardId) {
        this.boardId = boardId;
    }
}
