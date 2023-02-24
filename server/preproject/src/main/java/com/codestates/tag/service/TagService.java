package com.codestates.tag.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.tag.entity.Tag;
import com.codestates.tag.respository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Tag updateTag(Tag tag) {
        Tag findTag = findVerifiedTag(tag.getTagId());

        Optional.ofNullable(tag.getTagId())
                .ifPresent(tagId -> findTag.setTagId(tagId));
        Optional.ofNullable(tag.getTagName())
                .ifPresent(tagName -> findTag.setTagName(tagName));

        return tagRepository.save(findTag);
    }

    @Transactional(readOnly = true)
    public Tag findTag (long tagId) {
        return findVerifiedTag(tagId);
    }

    public List<Tag> findTags() {
        return tagRepository.findAll();
    }

    public void deleteTag(long tagId) {
        Tag tag = findVerifiedTag(tagId);

        tagRepository.delete(tag);
    }

    @Transactional(readOnly = true)
    public Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag =
                tagRepository.findById(tagId);
        Tag findTag =
                optionalTag.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
        return findTag;
    }

}
