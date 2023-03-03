package com.codestates.board.repository;

import com.codestates.board.entity.Board;
import com.codestates.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Modifying
    @Query("UPDATE Board b SET b.boardViews = b.boardViews + 1 WHERE b.boardId = :id")
    Integer updateBoardViews(@Param("id") Long id);

    @Query(value = "SELECT ml.memberLogId FROM MemberLog ml WHERE ml.boardId = :id AND ml.memberId = :member AND ml.logActive = 'VIEWS_ADD'")
    Integer findBoardViewsCheck(@Param("id") Long id, @Param("member") Long member);

    @Modifying
    @Query("update Board b set b.boardCmt = b.boardCmt where b.boardId = :id")
    Integer updateBoardCmt(@Param("id") Long id);

    @Modifying
    @Query("update Board b set b.boardLike = b.boardLike + 1 where b.boardId = :id")
    Integer updateBoardLike(@Param("id") Long id);

    List<Board> findAllByMemberId(Long memberId);

    @Query(value = "SELECT * FROM board WHERE board_id IN (SELECT board_id FROM board_tag WHERE tag_id = :id)", nativeQuery = true)
    List<Board> findBoardByTagId(@Param("id") Long id);
}
