package com.codestates.board.controller;

import com.codestates.board.dto.BoardDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Arrays;

@RestController
@RequestMapping("/boards")
public class BoardControllerStub {

    @PostMapping
    public ResponseEntity postBoard() {
        return ResponseEntity.created(URI.create("/boards/1")).build();
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard() {
        BoardDto.Response response =
                new BoardDto.Response(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 1, 1, 1, "2023-11-22 12:32:32.433");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{board-id}")
    public ResponseEntity getBoard() {
        BoardDto.Response response =
                new BoardDto.Response(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, "2023-11-22 12:32:32.433");
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity getBoards() {
        BoardDto.Response response1 =
                new BoardDto.Response(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, "2023-11-22 12:32:32.433");
        BoardDto.Response response2 =
                new BoardDto.Response(1,1, "커밋이 안돼요", "커밋이 안됩니다.", 0, 0, 0, "2023-11-22 12:32:32.433");
        return ResponseEntity.ok(Arrays.asList(response1, response2));
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard() {
        return ResponseEntity.noContent().build();
    }
}
