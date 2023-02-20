package com.codestates.board.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;

public class BoardDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long memberId;
        private String boardTitle;
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCmt;
        private String created_at;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long boardId;
        private long memberId;
        private String boardTitle;
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCmt;

        public void setBoardId(long boardId) {
            this.boardId = boardId;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long boardId;
        private long memberId;
        private String boardTitle;
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCmt;
        private String created_at;
    }
}