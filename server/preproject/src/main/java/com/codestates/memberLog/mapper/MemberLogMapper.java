package com.codestates.memberLog.mapper;

import com.codestates.memberLog.dto.MemberLogDto;
import com.codestates.memberLog.entity.MemberLog;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberLogMapper {
    MemberLog MemberLogPostDtoToMemberLog(MemberLogDto.Post memberLogPostDto);
    MemberLogDto.Response MemberLogToMemberLogResponseDto(MemberLog memberLog);
    List<MemberLogDto.Response> MemberLogsToMemberLogResponseDtos(List<MemberLog> memberLogs);
}


