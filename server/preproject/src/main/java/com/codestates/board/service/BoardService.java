package com.codestates.board.service;

import com.codestates.board.entity.Board;
import com.codestates.board.repository.BoardRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
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

    public BoardService(BoardRepository boardRepository, MemberRepository memberRepository) {
        this.boardRepository = boardRepository;
        this.memberRepository = memberRepository;
    }

    public Board createBoard(Board board) {
        verifyExistsMember(board.getMemberId());

        return boardRepository.save(board);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Board updateBoard(Board board) {
        Board findBoard = findVerifiedBoard(board.getBoardId());
        verifyExistsMember(board.getMemberId());

        Optional.ofNullable(board.getMemberId())
                .ifPresent(memberId -> findBoard.setMemberId(memberId));
        Optional.ofNullable(board.getBoardTitle())
                .ifPresent(boardTitle -> findBoard.setBoardTitle(boardTitle));
        Optional.ofNullable(board.getBoardContent())
                .ifPresent(boardContent -> findBoard.setBoardContent(boardContent));
        Optional.ofNullable(board.getBoardViews())
                .ifPresent(boardViews -> findBoard.setBoardViews(boardViews));
        Optional.ofNullable(board.getBoardLike())
                .ifPresent(boardLike -> findBoard.setBoardLike(boardLike));
        Optional.ofNullable(board.getBoardCmt())
                .ifPresent(boardCmt -> findBoard.setBoardCmt(boardCmt));

        return boardRepository.save(findBoard);
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

    private void verifyExistsMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}