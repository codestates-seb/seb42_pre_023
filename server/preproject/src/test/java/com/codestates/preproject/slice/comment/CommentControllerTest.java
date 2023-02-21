package com.codestates.preproject.slice.comment;

import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.member.dto.MemberDto;
import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
public class CommentControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    public CommentControllerTest() throws Exception {
    }

    @Test
    public void postCommentTest() throws Exception{
        //given
        CommentPostDto post = new CommentPostDto(1, 2, "포스트 테스트");
        String content = gson.toJson(post);
        //when
        ResultActions actions =
                mockMvc.perform(
                        post("/comments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );
        //then
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/comments"))));

    }

    @Test
    void patchCommentTest() throws Exception {
        CommentPostDto post = new CommentPostDto(1,1,"댓글 작성테스트");
        String postContent = gson.toJson(post);

        ResultActions postActions =
                mockMvc.perform(
                        post("/comments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(postContent)
                );
        long commentId;
        String location = postActions.andReturn().getResponse().getHeader("Location");
        commentId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1));

        CommentPatchDto patch = new CommentPatchDto(commentId, "댓글 작성테스트");
        String Content = gson.toJson(patch);

        ResultActions patchActions =
                mockMvc.perform(
                        patch("/comments/" + commentId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(Content)
                );
        patchActions.andExpect(status().isOk())
                .andExpect(jsonPath("$.content").value(patch.getContent()));
    }

    @Test
    void getCommentTest() throws Exception {
        CommentPostDto post = new CommentPostDto(1,1,"댓글 작성테스트");
        String postContent = gson.toJson(post);

        ResultActions postActions =
                mockMvc.perform(
                        post("/comments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(postContent)
                );
        long commentId;
        String location = postActions.andReturn().getResponse().getHeader("Location");
        commentId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1));

        mockMvc.perform(
                        get("/comments/" + commentId)
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.boardId").value(post.getBoardId()))
                .andExpect(jsonPath("$.memberId").value(post.getMemberId()))
                .andExpect(jsonPath("$.content").value(post.getContent()));
    }

   @Test
    void getCommentsTest() throws Exception {
       CommentPostDto post1 = new CommentPostDto(1,1,"댓글 작성테스트");
       String postContent1 = gson.toJson(post1);

       CommentPostDto post2 = new CommentPostDto(1,2,"댓글 작성테스트");
       String postContent2 = gson.toJson(post2);

       ResultActions postActions1 =
               mockMvc.perform(
                       post("/comments")
                               .accept(MediaType.APPLICATION_JSON)
                               .contentType(MediaType.APPLICATION_JSON)
                               .content(postContent1)
               );

       ResultActions postActions2 =
               mockMvc.perform(
                       post("/comments")
                               .accept(MediaType.APPLICATION_JSON)
                               .contentType(MediaType.APPLICATION_JSON)
                               .content(postContent2)
               );

       MvcResult result = mockMvc.perform(
                       get("/comments")
                               .accept(MediaType.APPLICATION_JSON)
               )
               .andExpect(status().isOk())
               .andExpect(jsonPath("$").isArray())
               .andReturn();

       List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$");
       assertThat(list.size(), is(2));

   }

   @Test
    void deleteCommentsTest() throws Exception {
       CommentPostDto post = new CommentPostDto(1,1,"댓글 작성테스트");
       String postContent = gson.toJson(post);

       ResultActions postActions =
               mockMvc.perform(
                       post("/comments")
                               .accept(MediaType.APPLICATION_JSON)
                               .contentType(MediaType.APPLICATION_JSON)
                               .content(postContent)
               );
       long commentId;
       String location = postActions.andReturn().getResponse().getHeader("Location");
       commentId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1));

       mockMvc.perform(
                       delete("/comments/" + commentId)
                               .accept(MediaType.APPLICATION_JSON)
               )
               .andExpect(status().isNoContent());
   }
}
