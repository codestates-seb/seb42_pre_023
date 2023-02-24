package com.codestates.member.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import com.codestates.memberLog.entity.MemberLog;
import com.codestates.memberLog.service.MemberLogService;
import com.codestates.utils.CustomAuthorityUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    private final MemberLogService memberLogService;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, MemberLogService memberLogService, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.memberLogService = memberLogService;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getMemberEmail());

        String encryptedPassword = passwordEncoder.encode(member.getMemberPwd());
        member.setMemberPwd(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getMemberEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        MemberLog memberLog = memberLogService.createMemberLog(member);
        memberLog.setLogActive(MemberLog.LogActive.MEMBER_CREATED);
        memberLogService.saveMemberLog(memberLog);

        return savedMember;
    }

    protected void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByMemberEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getMemberName())
                .ifPresent(memberName -> findMember.setMemberName(memberName));
        Optional.ofNullable(member.getMemberGrade())
                .ifPresent(memberGrade -> findMember.setMemberGrade(memberGrade));
        String encryptedPassword;
        if (member.getMemberPwd() != null) {
            encryptedPassword = passwordEncoder.encode(member.getMemberPwd());
            Optional.ofNullable(member.getMemberPwd())
                    .ifPresent(
                            memberPwd -> findMember.setMemberPwd(encryptedPassword)
                    );
        }
        MemberLog memberLog = memberLogService.createMemberLog(findMember);
        memberLog.setLogActive(MemberLog.LogActive.MEMBER_MODIFIED);
        memberLogService.saveMemberLog(memberLog);

        return memberRepository.save(findMember);

    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public void deletemember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        MemberLog memberLog = memberLogService.createMemberLog(findMember);
        memberLog.setLogActive(MemberLog.LogActive.MEMBER_DELETED);
        memberLogService.saveMemberLog(memberLog);
        memberRepository.delete(findMember);
    }

    //왜 필요한지 모르겠음 일단 대기
//    public Member findMember(long memberId) {
//        return findVerifiedMember(memberId);
//    }
}
