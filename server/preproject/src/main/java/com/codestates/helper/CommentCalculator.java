package com.codestates.helper;

import com.codestates.comment.entity.Comment;

public class CommentCalculator {
    public static long calculateCommentCount(long nowCount, long addCount) {
        return nowCount + addCount;
    }

    public static long addCommentCount() {
        return 1;
    }
}
