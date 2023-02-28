package com.codestates.board.controller;

import com.codestates.board.dto.BoardPatchDto;
import com.codestates.board.dto.BoardPostDto;
import com.codestates.board.entity.Board;
import com.codestates.board.mapper.BoardMapper;
import com.codestates.board.repository.BoardRepository;
import com.codestates.board.service.BoardService;
import com.codestates.utils.UriCreator;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.dto.MultiResponseDto;
import com.codestates.dto.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/pre/boards")
@Validated
@Slf4j
public class BoardController {
    private final static String BOARD_DEFAULT_URL = "/pre/boards";
    private final BoardService boardService;
    private final BoardMapper mapper;
    private final BoardRepository boardRepository;

    public BoardController(BoardService boardService, BoardMapper mapper, BoardRepository boardRepository) {
        this.boardService = boardService;
        this.mapper = mapper;
        this.boardRepository = boardRepository;
    }

    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto requestBody) {
        Board board = mapper.boardPostToBoard(requestBody);

        Board createdBoard = boardService.createBoard(board);
        URI location = UriCreator.createUri(BOARD_DEFAULT_URL, createdBoard.getBoardId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(
            @PathVariable("board-id") @Positive long boardId,
            @Valid @RequestBody BoardPatchDto requestBody) {
        requestBody.setBoardId(boardId);

        Board board =
                boardService.updateBoard(mapper.boardPatchToBoard(requestBody, boardRepository));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponse(board)),
                HttpStatus.OK);
    }

    @GetMapping("/{board-id}")
    public ResponseEntity getBoard (
            @PathVariable("board-id") @Positive long boardId, Model model) {
        Board board = boardService.findBoard(boardId);
        boardService.updateBoardViews(boardId);
        model.addAttribute("board", board);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponse(board))
                , HttpStatus.OK);
    }

    @GetMapping("/boardLike/{board-id}")
    public ResponseEntity getBoardLike (
            @PathVariable("board-id") @Positive long boardId) {
        boardService.updateBoardLike(boardId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/members/{member-id}")
    public ResponseEntity getMemberBoards(@PathVariable("member-id") @Positive long memberId) {
        Page<Board> pageBoards = boardService.findMemberBoards(memberId);
        List<Board> boards = pageBoards.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.boardsToBoardResponses(boards), pageBoards), HttpStatus.OK);
    }

    @GetMapping("/tags/{tag-id}")
    public ResponseEntity getTagBoards(@PathVariable("tag-id") @Positive long tagId) {
        Page<Board> pageBoards = boardService.findTagBoards(tagId);
        List<Board> boards = pageBoards.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.boardsToBoardResponses(boards), pageBoards), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Board> pageBoards = boardService.findBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.boardsToBoardResponses(boards),
                        pageBoards),
                HttpStatus.OK);
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(
            @PathVariable("board-id") @Positive long boardId) {
        boardService.deleteBoard(boardId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
