package com.codestates.tag.controller;

import com.codestates.tag.dto.TagDto;
import com.codestates.tag.entity.Tag;
import com.codestates.tag.mapper.TagMapper;
import com.codestates.tag.service.TagService;
import com.codestates.utils.UriCreator;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.dto.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/pre/tags")
@Validated
@Slf4j
public class TagController {
    private final static String TAG_DEFAULT_URL = "/pre/tags";
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postTag(@Valid @RequestBody TagDto.Post requestBody) {
        Tag tag = mapper.tagPostToTag(requestBody);

        Tag createdTag = tagService.createTag(tag);
        URI location = UriCreator.createUri(TAG_DEFAULT_URL, createdTag.getTagId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag(
            @PathVariable("tag-id") @Positive long tagId,
            @Valid @RequestBody TagDto.Patch requestBody) {
        requestBody.setTagId(tagId);

        Tag tag =
                tagService.updateTag(mapper.tagPatchToTag(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tagToTagResponse(tag)),
                HttpStatus.OK);
    }

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(
            @PathVariable("tag-id") @Positive long tagId) {
        Tag tag = tagService.findTag(tagId);
        return new ResponseEntity<>(
                mapper.tagToTagResponse(tag)
                , HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();
        return new ResponseEntity<>(mapper.tagsToTagResponses(tags), HttpStatus.OK);
    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteTag(
            @PathVariable("tag-id") @Positive long tagId) {
        tagService.deleteTag(tagId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

