package com.codestates.member.dto;

import com.codestates.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String memberEmail;
        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String memberName;
        @Size(min =6, max =16,message = "6~16자리 입력해주세요.")
        private String memberPwd;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;
        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String memberName;
        @Size(min =6, max =16,message = "6~16자리 입력해주세요.")
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
            private String memberPwd;
            public String getMemberGrade() {
                return memberGrade.getGrade();
            }
        }
    }

