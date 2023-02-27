package com.codestates.board.repository;

import com.codestates.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Modifying
    @Query("update Board b set b.boardViews = b.boardViews + 1 where b.boardId = :id")
    Integer updateBoardViews(@Param("id") Long id);
}
