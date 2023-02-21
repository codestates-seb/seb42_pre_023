package com.codestates.board.dto;


import com.codestates.audit.Auditable;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Data

public class BoardDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        private long memberId;
        @NotBlank(message = "제목을 입력해주세요.")
        private String boardTitle;
        @NotBlank(message = "내용을 입력해주세요")
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCommentId;
        private String createdAt;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long boardId;
        private long memberId;
        @NotBlank(message = "제목을 입력해주세요")
        private String boardTitle;
        @NotBlank(message = "내용을 입력해주세요")
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCmt;

        public void setBoardId(long boardId) {
            this.boardId = boardId;
        }
    }


    @Getter
    @AllArgsConstructor
    public static class Response {
        private long boardId;
        private long memberId;
        private String boardTitle;
        private String boardContent;
        private int boardViews;
        private int boardLike;
        private int boardCmt;
        private String createdAt;
    }
}