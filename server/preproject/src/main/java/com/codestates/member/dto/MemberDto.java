package com.codestates.member.dto;

import com.codestates.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{

        private String memberEmail;
        private String memberName;
        private String memberPwd;

    }

    @Getter
    public static class Patch{
        private long memberId;

        private String memberName;
        private String memberPwd;
        private Member.MemberGrade memberGrade;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }
}
