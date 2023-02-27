package com.codestates.board.mapper;

import com.codestates.board.dto.BoardPatchDto;
import com.codestates.board.dto.BoardPostDto;
import com.codestates.board.dto.BoardResponseDto;
import com.codestates.board.dto.BoardTagResponseDto;
import com.codestates.board.entity.Board;
import com.codestates.board.entity.BoardTag;
import com.codestates.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPatchToBoard(BoardPatchDto requestBody);
    List<BoardResponseDto> boardsToBoardResponses(List<Board> boards);

    default Board boardPostToBoard(BoardPostDto boardPost) {
        Board board = new Board();
        board.setMemberId(boardPost.getMemberId());
        board.setBoardTitle(boardPost.getBoardTitle());
        board.setBoardContent(boardPost.getBoardContent());
        board.setBoardViews(boardPost.getBoardViews());
        board.setBoardLike(boardPost.getBoardLike());
        board.setBoardCmt(boardPost.getBoardCmt());

        List<BoardTag> boardTags = boardPost.getBoardTags().stream()
                .map(boardTagDto -> {
                    BoardTag boardTag = new BoardTag();
                    Tag tag = new Tag();
                    tag.setTagId(boardTagDto.getTagId());
                    boardTag.addBoard(board);
                    boardTag.addTag(tag);
                    return boardTag;
                }).collect(Collectors.toList());
        board.setBoardTags(boardTags);

        return board;
    }

    default BoardResponseDto boardToBoardResponse(Board board){
        List<BoardTag> boardTags = board.getBoardTags();

        BoardResponseDto boardResponseDto = new BoardResponseDto();
        boardResponseDto.setBoardId(board.getBoardId());
        boardResponseDto.setMemberId(board.getMemberId());
        boardResponseDto.setBoardTitle(board.getBoardTitle());
        boardResponseDto.setBoardContent(board.getBoardContent());
        boardResponseDto.setBoardViews(board.getBoardViews());
        boardResponseDto.setBoardLike(board.getBoardLike());
        boardResponseDto.setBoardCmt(board.getBoardCmt());
        boardResponseDto.setBoardContent(board.getBoardContent());
        boardResponseDto.setBoardContent(board.getBoardContent());
        boardResponseDto.setCreatedAt(board.getCreatedAt());
        boardResponseDto.setBoardTags(
                boardTagsToBoardTagResponse(boardTags)
        );

        return boardResponseDto;
    }

    default List<BoardTagResponseDto> boardTagsToBoardTagResponse (
            List<BoardTag> boardTags) {
        return boardTags
                .stream()
                .map(boardTag -> BoardTagResponseDto
                        .builder()
                        .tagId(boardTag.getTag().getTagId())
                        .tagName(boardTag.getTag().getTagName())
                        .build())
                .collect(Collectors.toList());
    }
}
