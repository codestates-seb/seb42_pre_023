package com.codestates.member.service;

import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getMemberEmail());
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
//        if (member.isPresent())
//            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
