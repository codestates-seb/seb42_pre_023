package com.codestates.memberLog.service;

import com.codestates.board.service.BoardService;
import com.codestates.comment.service.CommentService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.memberLog.entity.MemberLog;
import com.codestates.memberLog.repository.MemberLogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class MemberLogService {
    private final MemberService memberService;
    private final BoardService boardService;
    private final CommentService commentService;
    private final MemberLogRepository memberLogRepository;

    public MemberLogService(MemberService memberService,
                            BoardService boardService,
                            CommentService commentService,
                            MemberLogRepository memberLogRepository) {
        this.memberService = memberService;
        this.boardService = boardService;
        this.commentService = commentService;
        this.memberLogRepository = memberLogRepository;
    }

    public MemberLog createMemberLog (MemberLog memberLog) {
        MemberLog savedMemberLog = saveMemberLog(memberLog);

        return savedMemberLog;
    }

    public Page<MemberLog> findMemberLogs(long memberId) {

        List<MemberLog> memberLogs = memberLogRepository.findAllByMemberId(memberId)
                .stream()
                .filter(memberLog -> memberLog.getMemberId() == memberId)
                .sorted(Comparator.comparing(MemberLog::getMemberLogId))
                .collect(Collectors.toList());

        return new PageImpl<>(memberLogs);
    }
    public void deleteMemberLog(long memberLogId){
        MemberLog memberLog = findVerifiedMemberLog(memberLogId);
        memberLogRepository.delete(memberLog);
    }

    private MemberLog saveMemberLog(MemberLog memberLog) {
        return memberLogRepository.save(memberLog);
    }

    private MemberLog findVerifiedMemberLog (long memberLogId) {
        Optional<MemberLog> optionalMemberLog = memberLogRepository.findById(memberLogId);
        MemberLog findMemberLog = optionalMemberLog.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findMemberLog;
    }
}
