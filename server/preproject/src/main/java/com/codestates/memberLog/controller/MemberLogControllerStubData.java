package com.codestates.memberLog.controller;
import com.codestates.memberLog.dto.MemberLogDto;
import com.codestates.memberLog.entity.MemberLog;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.Arrays;


@RestController
@RequestMapping("/logs")
@Validated
@Slf4j
public class MemberLogControllerStubData {

    @GetMapping("/list/{member-id}")
    public ResponseEntity getMemberLogs() {
        MemberLogDto.Response response1 =
                new MemberLogDto.Response(1, LocalDateTime.now(), MemberLog.LogActive.MEMBER_CREATED,
                        0,0,1);
        MemberLogDto.Response response2 =
                new MemberLogDto.Response(2, LocalDateTime.now(), MemberLog.LogActive.COMMENT_CREATED,
                        1,0,1);
        MemberLogDto.Response response3 =
                new MemberLogDto.Response(3, LocalDateTime.now(), MemberLog.LogActive.BOARD_CREATED,
                        1,1,1);

        return ResponseEntity.ok(Arrays.asList(response1, response2, response3));

    }

    @DeleteMapping("/{member-log-id}")
    public ResponseEntity deleteComment() {
        return ResponseEntity.noContent().build();
    }


}
