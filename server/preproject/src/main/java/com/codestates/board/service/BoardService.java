package com.codestates.board.service;

import com.codestates.board.entity.Board;
import com.codestates.board.repository.BoardRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.repository.MemberRepository;
import com.codestates.memberLog.entity.MemberLog;
import com.codestates.memberLog.service.MemberLogService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    private final MemberLogService memberLogService;
    public BoardService(BoardRepository boardRepository, MemberRepository memberRepository, MemberLogService memberLogService) {
        this.boardRepository = boardRepository;
        this.memberRepository = memberRepository;
        this.memberLogService = memberLogService;
    }

    public Board createBoard(Board board) {
        Board savedBoard = saveBoard(board);

        MemberLog memberLog = memberLogService.createBoardLog(board);
        memberLog.setLogActive(MemberLog.LogActive.BOARD_CREATED);
        memberLogService.saveMemberLog(memberLog);

        return savedBoard;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Board updateBoard(Board board) {
        Board findBoard = findVerifiedBoard(board.getBoardId());
        Optional.ofNullable(board.getMemberId())
                .ifPresent(memberId -> findBoard.setMemberId(memberId));
        Optional.ofNullable(board.getBoardTitle())
                .ifPresent(boardTitle -> findBoard.setBoardTitle(boardTitle));
        Optional.ofNullable(board.getBoardContent())
                .ifPresent(boardContent -> findBoard.setBoardContent(boardContent));
        Optional.ofNullable(board.getBoardLike())
                .ifPresent(boardLike -> findBoard.setBoardLike(boardLike));
        Optional.ofNullable(board.getBoardCmt())
                .ifPresent(boardCmt -> findBoard.setBoardCmt(boardCmt));

        MemberLog memberLog = memberLogService.createBoardLog(findBoard);
        memberLog.setLogActive(MemberLog.LogActive.BOARD_MODIFIED);
        memberLogService.saveMemberLog(memberLog);

        Board savedBoard = saveBoard(board);
        return savedBoard;
    }

    @Transactional(readOnly = true)
    public Board findBoard (long boardId) {
        return findVerifiedBoard(boardId);
    }

    public Page<Board> findBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size,
                Sort.by("boardId").descending()));
    }

    public void deleteBoard(long boardId) {
        Board board = findVerifiedBoard(boardId);

        MemberLog memberLog = memberLogService.createBoardLog(board);
        memberLog.setLogActive(MemberLog.LogActive.BOARD_DELETED);
        memberLogService.saveMemberLog(memberLog);

        boardRepository.delete(board);
    }

    @Transactional(readOnly = true)
    public Board findVerifiedBoard(long boardId) {
        Optional<Board> optionalBoard =
                boardRepository.findById(boardId);
        Board findBoard =
                optionalBoard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }

    @Transactional
    public int updateBoardViews(Long boardId) {
        return boardRepository.updateBoardViews(boardId);
    }

    private Board saveBoard(Board board) {
        return boardRepository.save(board);
    }
}