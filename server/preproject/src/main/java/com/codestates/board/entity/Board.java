package com.codestates.board.entity;

import com.codestates.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Board extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String boardTitle;

    @Column(length = 1000, nullable = false)
    private String boardContent;

    @Column
    private Integer boardViews;

    @Column
    private Integer boardLike;

    @Column
    private Long boardCmt;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<BoardTag> boardTags = new ArrayList<>();

    public void addBoardTag(BoardTag boardTag) {
        this.boardTags.add(boardTag);
        if (boardTag.getBoard() != this) {
            boardTag.addBoard(this);
        }
    }

    public Board(Long boardId) {
        this.boardId = boardId;
    }
}
