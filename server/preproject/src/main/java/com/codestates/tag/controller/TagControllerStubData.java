package com.codestates.tag.controller;

import com.codestates.tag.dto.TagDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Arrays;

@RestController
@RequestMapping("/tags")
public class TagControllerStubData {

    @PostMapping
    public ResponseEntity postTag() {
        return ResponseEntity.created(URI.create("/tags/1")).build();
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag() {
        TagDto.Response response =
                new TagDto.Response(1,"java");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag() {
        TagDto.Response response =
                new TagDto.Response(1,"java");
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity getTags() {
        TagDto.Response response1 =
                new TagDto.Response(1,"java");
        TagDto.Response response2 =
                new TagDto.Response(1,"java");
        return ResponseEntity.ok(Arrays.asList(response1, response2));
    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteTag() {
        return ResponseEntity.noContent().build();
    }
}

