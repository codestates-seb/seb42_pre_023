package com.codestates.memberLog.repository;

import com.codestates.memberLog.entity.MemberLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberLogRepository extends JpaRepository<MemberLog, Long> {
    List<MemberLog> findAllByMemberId(Long memberId);
}
