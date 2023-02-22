package com.codestates.board.mapper;

import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    Board boardPostToBoard(BoardDto.Post requestBody);
    Board boardPatchToBoard(BoardDto.Patch requestBody);
    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.Response> boardsToBoardResponses(List<Board> boards);
}
