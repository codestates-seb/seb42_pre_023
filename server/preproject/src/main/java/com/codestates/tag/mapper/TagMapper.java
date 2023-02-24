package com.codestates.tag.mapper;

import com.codestates.tag.dto.TagDto;
import com.codestates.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {
    Tag tagPostToTag(TagDto.Post requestBody);
    Tag tagPatchToTag(TagDto.Patch requestBody);
    TagDto.Response tagToTagResponse(Tag tag);
    List<TagDto.Response> tagsToTagResponses(List<Tag> tags);
}

