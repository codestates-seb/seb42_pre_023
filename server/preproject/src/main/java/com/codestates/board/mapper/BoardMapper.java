package com.codestates.board.mapper;

import com.codestates.board.dto.BoardPatchDto;
import com.codestates.board.dto.BoardPostDto;
import com.codestates.board.dto.BoardResponseDto;
import com.codestates.board.dto.BoardTagResponseDto;
import com.codestates.board.entity.Board;
import com.codestates.board.entity.BoardTag;
import com.codestates.board.repository.BoardRepository;
import com.codestates.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    List<BoardResponseDto> boardsToBoardResponses(List<Board> boards);

    default Board boardPatchToBoard(BoardPatchDto requestBody, @Autowired BoardRepository boardRepository) {
        Board board = boardRepository.findById(requestBody.getBoardId())
                .orElseThrow(() -> new EntityNotFoundException("Board not found with id: " + requestBody.getBoardId()));
        if (requestBody.getMemberId() != null) {
            board.setMemberId(requestBody.getMemberId());
        }
        if (requestBody.getBoardTitle() != null) {
            board.setBoardTitle(requestBody.getBoardTitle());
        }
        if (requestBody.getBoardContent() != null) {
            board.setBoardContent(requestBody.getBoardContent());
        }
        if (requestBody.getBoardViews() != null) {
            board.setBoardViews(requestBody.getBoardViews());
        }
        if (requestBody.getBoardLike() != null) {
            board.setBoardLike(requestBody.getBoardLike());
        }
        if (requestBody.getBoardCmt() != null) {
            board.setBoardCmt(requestBody.getBoardCmt());
        }
        if (requestBody.getBoardTags() != null) {
            List<BoardTag> boardTags = requestBody.getBoardTags().stream()
                    .map(boardTagDto -> {
                        BoardTag boardTag = new BoardTag();
                        Tag tag = new Tag();
                        tag.setTagId(boardTagDto.getTagId());
                        boardTag.addBoard(board);
                        boardTag.addTag(tag);
                        return boardTag;
                    }).collect(Collectors.toList());
            board.setBoardTags(boardTags);
        }
        return board;
    }

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
