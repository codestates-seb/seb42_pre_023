package com.codestates.memberLog.dto;

import com.codestates.member.entity.Member;
import com.codestates.memberLog.entity.MemberLog;
import lombok.AllArgsConstructor;
import lombok.Getter;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MemberLogDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        private LocalDateTime lastModifiedAt;
        private long boardId;
        private long commentId;

        @NotBlank
        private long memberId;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long MemberLogId;
        private LocalDateTime lastModifiedAt;
        private MemberLog.LogActive logActive;
        private long boardId;
        private long commentId;
        private long memberId;
    }
}
