package com.codestates.tag.service;

import com.codestates.board.entity.Board;
import com.codestates.board.entity.BoardTag;
import com.codestates.board.repository.BoardRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.tag.entity.Tag;
import com.codestates.tag.respository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TagService {
    private final TagRepository tagRepository;

    private final BoardRepository boardRepository;

    public TagService(TagRepository tagRepository, BoardRepository boardRepository) {
        this.tagRepository = tagRepository;
        this.boardRepository = boardRepository;
    }

    @PostConstruct
    private void defaultData() {
        List<Tag> tags = List.of(new Tag(1L, "java"), new Tag(2L, "python"), new Tag(3L, "spring"),
                new Tag(4L, "javascript"), new Tag(5L, "css"), new Tag(6L, "php"), new Tag(7L, "reactjs"));
        tagRepository.saveAll(tags);

        List<Board> boards = List.of(new Board(1L, 1L, "이 에러 짜증나요.", "에러 분석해주세요.",
                        1, 1, 0, List.of(new BoardTag(1L ,new Tag(3L), new Board(1L)),  new BoardTag(2L, new Tag(2L), new Board(1L)))),
                new Board(2L, 1L, "git pull을 사용하면 에러가 떠요.", "도와주세요.",
                        3, 6, 0, List.of(new BoardTag(3L, new Tag(1L), new Board(2L)))));
        boardRepository.saveAll(boards);
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
