package com.codestates.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoardResponseDto {
    private long boardId;
    private long memberId;
    private String boardTitle;
    private String boardContent;
    private int boardViews;
    private int boardLike;
    private int boardCmt;
    private LocalDateTime createdAt;
    private List<BoardTagResponseDto> boardTags;
}
