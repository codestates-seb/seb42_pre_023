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
    private String boardTitle;
    private String boardContent;
    private List<BoardTagDto> boardTags;

    public void setBoardId(long boardId) {
        this.boardId = boardId;
    }
}
