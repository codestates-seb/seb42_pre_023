package com.codestates.memberLog.controller;

import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.entity.Comment;
import com.codestates.dto.MultiResponseDto;
import com.codestates.dto.SingleResponseDto;
import com.codestates.memberLog.dto.MemberLogDto;
import com.codestates.memberLog.entity.MemberLog;
import com.codestates.memberLog.mapper.MemberLogMapper;
import com.codestates.memberLog.service.MemberLogService;
import com.codestates.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pre/logs")
@Validated
@Slf4j
public class MemberLogController {
    private final MemberLogService memberLogService;
    private final MemberLogMapper mapper;
    private final static String COMMENT_DEFAULT_URL = "/pre/logs";

    public MemberLogController(MemberLogService memberLogService, MemberLogMapper mapper) {
        this.memberLogService = memberLogService;
        this.mapper = mapper;
    }

//    @PostMapping
//    public ResponseEntity postMemberLog(@Valid @RequestBody MemberLogDto.Post memberLogDto) {
//        MemberLog memberLog = memberLogService.createMemberLog(mapper.MemberLogPostDtoToMemberLog(memberLogDto));
//        URI location = UriCreator.createUri(COMMENT_DEFAULT_URL, memberLog.getMemberLogId());
//        return ResponseEntity.created(location).build();
//    }

    @GetMapping("/list/{member-id}")
    public ResponseEntity getMemberLogs(@PathVariable("member-id") @Positive long memberId) {
        Page<MemberLog> pageMemberLogs = memberLogService.findMemberLogs(memberId);
        List<MemberLog> memberLogs = pageMemberLogs.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.MemberLogsToMemberLogResponseDtos(memberLogs), pageMemberLogs), HttpStatus.OK);
    }

    @DeleteMapping("/{member-log-id}")
    public ResponseEntity deleteComment(@PathVariable("member-log-id") @Positive long memberLogId) {
        memberLogService.deleteMemberLog(memberLogId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
