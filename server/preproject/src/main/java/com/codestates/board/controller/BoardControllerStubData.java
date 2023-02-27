package com.codestates.board.controller;

import com.codestates.board.dto.BoardResponseDto;
import com.codestates.board.dto.BoardTagResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardControllerStubData {

    @PostMapping
    public ResponseEntity postBoard() {
        return ResponseEntity.created(URI.create("/boards/1")).build();
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard() {
        BoardResponseDto response =
                new BoardResponseDto(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 1, 1, 1, LocalDateTime.now(), List.of(new BoardTagResponseDto(1, "java")));
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{board-id}")
    public ResponseEntity getBoard() {
        BoardResponseDto response =
                new BoardResponseDto(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, LocalDateTime.now() , List.of(new BoardTagResponseDto(1, "java")));
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity getBoards() {
        BoardResponseDto response1 =
                new BoardResponseDto(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, LocalDateTime.now(), List.of(new BoardTagResponseDto(1, "java")));
        BoardResponseDto response2 =
                new BoardResponseDto(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, LocalDateTime.now(), List.of(new BoardTagResponseDto(1, "java")));
        return ResponseEntity.ok(Arrays.asList(response1, response2));
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard() {
        return ResponseEntity.noContent().build();
    }
}
