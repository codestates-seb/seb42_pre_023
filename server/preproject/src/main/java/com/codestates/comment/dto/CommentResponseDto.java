package com.codestates.comment.dto;

import com.codestates.board.entity.Board;
import com.codestates.member.entity.Member;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;

    private long boardId;

    private long memberId;

    private String commentContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
