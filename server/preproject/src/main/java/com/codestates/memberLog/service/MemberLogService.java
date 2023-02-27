package com.codestates.memberLog.service;

import com.codestates.board.entity.Board;
import com.codestates.board.repository.BoardRepository;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import com.codestates.member.service.MemberService;
import com.codestates.memberLog.entity.MemberLog;
import com.codestates.memberLog.repository.MemberLogRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class MemberLogService {
    private final MemberLogRepository memberLogRepository;
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    public MemberLogService(MemberLogRepository memberLogRepository,
                            MemberRepository memberRepository,
                            BoardRepository boardRepository,
                            CommentRepository commentRepository) {

        this.memberLogRepository = memberLogRepository;
        this.memberRepository = memberRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public MemberLog createMemberLog (Member member) {
        MemberLog memberLog = new MemberLog();
        memberLog.setMemberId(member.getMemberId());
        memberLog.setLastModifiedAt(LocalDateTime.now());

        return memberLog;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public MemberLog createBoardLog (Board board) {
        MemberLog memberLog = new MemberLog();
        memberLog.setMemberId(board.getMemberId());
        memberLog.setBoardId(board.getBoardId());
        memberLog.setLastModifiedAt(LocalDateTime.now());

        return memberLog;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public MemberLog createCommentLog (Comment comment) {
        MemberLog memberLog = new MemberLog();
        memberLog.setMemberId(comment.getMemberId());
        memberLog.setBoardId(comment.getBoardId());
        memberLog.setCommentId(comment.getCommentId());
        memberLog.setLastModifiedAt(LocalDateTime.now());

        return memberLog;
    }

    @Transactional(readOnly = true)
    public Page<MemberLog> findMemberLogs(long memberId) {
        findVerifiedMember(memberId);
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

    @Transactional(propagation = Propagation.REQUIRED)
    public MemberLog saveMemberLog(MemberLog memberLog) {
        return memberLogRepository.save(memberLog);
    }

    private MemberLog findVerifiedMemberLog (long memberLogId) {
        Optional<MemberLog> optionalMemberLog = memberLogRepository.findById(memberLogId);
        MemberLog findMemberLog = optionalMemberLog.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.LOG_NOT_FOUND));

        return findMemberLog;
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

}
