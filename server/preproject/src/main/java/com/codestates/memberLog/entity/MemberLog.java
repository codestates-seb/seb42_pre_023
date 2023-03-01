package com.codestates.memberLog.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class MemberLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberLogId;

    @Column(nullable = false)
    private LocalDateTime lastModifiedAt;

    @Enumerated(EnumType.STRING)
    private LogActive logActive = LogActive.MEMBER_CREATED;

    @Column
    private long boardId;

    @Column
    private long commentId;

    @Column(nullable = false)
    private long memberId;

    public enum LogActive {
        MEMBER_CREATED("회원 가입"),
        MEMBER_MODIFIED("회원 정보 수정"),
        MEMBER_DELETED("회원 탈퇴"),
        BOARD_CREATED("게시글 작성"),
        BOARD_MODIFIED("게시글 수정"),
        BOARD_DELETED("게시글 삭제"),
        COMMENT_CREATED("댓글 작성"),
        COMMENT_MODIFIED("댓글 수정"),
        COMMENT_DELETED("댓글 삭제"),
        VIEWS_ADD("게시글 조회")
        ;

        @Getter
        private String active;

        LogActive(String active) {
            this.active = active;
        }
    }


}

