package com.codestates.member.dto;

import com.codestates.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String memberEmail;
        private String memberName;
        private String memberPwd;

    }

    @Getter
    public static class Patch {
        private long memberId;
        private String memberName;
        private String memberPwd;
        private Member.MemberGrade memberGrade;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

        @AllArgsConstructor
        @Getter
        public static class Response {
            private long memberId;
            private String memberEmail;
            private String memberName;
            private Member.MemberGrade memberGrade;

//            private String memberPwd;
        }
    }

