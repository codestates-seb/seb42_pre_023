package com.codestates.memberLog.dto;

import com.codestates.memberLog.entity.MemberLog;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.LocalDateTime;

public class MemberLogDto {
    @AllArgsConstructor
    @Getter
    public static class Response {
        private long memberLogId;
        private LocalDateTime lastModifiedAt;
        private MemberLog.LogActive logActive;
        private long boardId;
        private long commentId;
        private long memberId;
    }
}
