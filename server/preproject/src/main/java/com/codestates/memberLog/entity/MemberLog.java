package com.codestates.memberLog.entity;

import com.codestates.audit.Auditable;
import com.codestates.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class MemberLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long MemberLogId;

    @Column(nullable = false)
    private LocalDateTime lastModifiedAt;

    @Enumerated(EnumType.STRING)
    private MemberLog.LogActive logActive = LogActive.MEMBER_CREATED;

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
        COMMENT_DELETED("댓글 삭제")
        ;

        @Getter
        private String active;

        LogActive(String active) {
            this.active = active;
        }
    }


}

