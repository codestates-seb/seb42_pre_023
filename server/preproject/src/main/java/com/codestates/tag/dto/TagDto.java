package com.codestates.tag.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;

public class TagDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        @NotBlank(message = "태그의 이름을 정해주세요.")
        private String tagName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long tagId;
        @NotBlank(message = "태그의 이름을 정해주세요.")
        private String tagName;
        public void setTagId(long tagId) {
            this.tagId = tagId;
        }
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private long tagId;
        private String tagName;
    }
}