package com.codestates.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 16, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String password;

    public enum MemberGrade {
        MEMBER_NOMAL("일반등급"),
        MEMBER_BRONZE("브론즈"),
        MEMBER_SILVER("실버"),
        MEBER_GOLD("골드");

        @Getter
        private String grade;

        MemberGrade(String grade){
            this.grade = grade;
        }
    }
}
