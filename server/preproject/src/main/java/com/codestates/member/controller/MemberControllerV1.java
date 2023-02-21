package com.codestates.member.controller;

import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.Arrays;

@RestController
@RequestMapping("/pre/members")
@Validated
@Slf4j
public class MemberControllerV1 {
    private final static String MEMBER_DEFAULT_URL = "/pre/members";
    private final MemberService memberService;

    private final MemberMapper mapper;

    public MemberControllerV1(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        member.setMemberGrade(Member.MemberGrade.MEMBER_NOMAL);

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL);

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.Patch requestBody) {


        MemberDto.Response response =
                new MemberDto.Response(1, "hgd@gmail.com", "홍길동", Member.MemberGrade.MEMBER_BRONZE, "asdf1234");
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
