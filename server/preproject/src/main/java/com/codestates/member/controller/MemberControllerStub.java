package com.codestates.member.controller;

import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Arrays;

@RestController
@RequestMapping("/members")
public class MemberControllerStub {

    @PostMapping
    public ResponseEntity postMember() {
        return ResponseEntity.created(URI.create("/members/1")).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember() {
        MemberDto.Response response =
                new MemberDto.Response(1,"hgd@gmail.com", "홍길동", Member.MemberGrade.MEMBER_BRONZE, "asdf1234");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember() {
        MemberDto.Response response =
                new MemberDto.Response(1, "hgd@gmail.com", "홍길동", Member.MemberGrade.MEMBER_BRONZE, "asdf1234");
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity getMembers() {
        MemberDto.Response response1 =
                new MemberDto.Response(1, "hgd@gamail.com", "홍길동", Member.MemberGrade.MEMBER_NOMAL, "asdf1234");
        MemberDto.Response response2 =
                new MemberDto.Response(2, "hgd2@gmail.com", "김길동", Member.MemberGrade.MEMBER_NOMAL, "qwer1234");
        return ResponseEntity.ok(Arrays.asList(response1, response2));
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember() {
        return ResponseEntity.noContent().build();
    }
}
