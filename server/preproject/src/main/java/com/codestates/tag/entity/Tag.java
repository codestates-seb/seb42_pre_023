package com.codestates.tag.entity;

import com.codestates.audit.Auditable;
import com.codestates.board.entity.BoardTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column
    private String tagName;

    @OneToMany(mappedBy = "tag")
    private List<BoardTag> boardTags = new ArrayList<>();

    public void addBoardTag(BoardTag boardTag) {
        this.boardTags.add(boardTag);
        if (boardTag.getTag() != this) {
            boardTag.addTag(this);
        }
    }

    public Tag(Long tagId) {
        this.tagId = tagId;
    }

    public Tag(Long tagId, String tagName) {
        this.tagId = tagId;
        this.tagName = tagName;
    }
}
