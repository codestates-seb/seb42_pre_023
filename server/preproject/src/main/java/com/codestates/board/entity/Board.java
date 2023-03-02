package com.codestates.board.entity;

import com.codestates.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    private Long boardViews;

    @Column
    private Long boardLike;

    @Column
    private Long boardCmt;
}
