package com.codestates.board.entity;

import com.codestates.audit.Auditable;
import com.codestates.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class BoardTag extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardTagId;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    public void addBoard(Board board) {
        this.board = board;
        if (!this.board.getBoardTags().contains(this)) {
            this.board.getBoardTags().add(this);
        }
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!this.tag.getBoardTags().contains(this)) {
            this.tag.addBoardTag(this);
        }
    }
}
