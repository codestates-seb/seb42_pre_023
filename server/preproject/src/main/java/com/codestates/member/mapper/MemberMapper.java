package com.codestates.member.mapper;

import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    MemberDto.Response memberToMemberResponseDto(Member member);

    Member memberPathchDtoToMember(MemberDto.Patch requestBody);

    List<MemberDto.Response> membersToMembersToMemberResponseDtos(List<Member> members);
}
