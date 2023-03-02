package com.codestates.comment.dto;

import com.codestates.board.entity.Board;
import com.codestates.member.entity.Member;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;
    @Setter(AccessLevel.NONE)
    private long boardId;

    @Setter(AccessLevel.NONE)
    private long memberId;

    private String content;
    private LocalDateTime createdAt;

    public void setBoardId(Board board) {
        this.boardId = board.getBoardId();
    }

    public void setMemberId(Member member) {
        this.memberId = member.getMemberId();
    }

}
