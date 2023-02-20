package com.codestates.member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/members")
public class MemberController {

    @PostMapping
    public ResponseEntity postMember() {
        return ResponseEntity.created(null).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember() {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember() {
        return ResponseEntity.ok(null);
    }

    @GetMapping
    public ResponseEntity getMembers() {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember() {
        return ResponseEntity.noContent().build();
    }
}
