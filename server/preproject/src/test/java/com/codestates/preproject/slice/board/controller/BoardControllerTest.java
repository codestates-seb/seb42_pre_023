package com.codestates.preproject.slice.board.controller;

import com.codestates.board.dto.BoardPatchDto;
import com.codestates.board.dto.BoardPostDto;
import com.codestates.board.dto.BoardTagDto;
import com.codestates.board.entity.BoardTag;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
public class BoardControllerTest{
    @Autowired
    private MockMvc mvc;
    @Autowired
    private Gson gson;
    private ResultActions postResultActions;
    private BoardPostDto post;
    private MvcResult postResult;

    @BeforeEach
    public void init() throws Exception {
        this.post = new BoardPostDto(1L, "커밋이 안돼요", "커밋이 안됩니다.", 1, 1L, List.of(new BoardTagDto(1)));
        String content = gson.toJson(post);
        String url = "/boards";
        this.postResultActions = mvc.perform(
                    post(url)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

    }

    @Test
    public void postMember() throws Exception {
        this.postResultActions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/boards/1"))));
    }

    @Test
    void patchMember() throws Exception {
        long boardId = getResponseBoardId();

        BoardPatchDto patch = new BoardPatchDto(1L,1L, "커밋이 안돼요", "커밋이 안됩니다.", 1, 1L, List.of(new BoardTagDto(1L)));
        String content = gson.toJson(patch);
        String uri = "/boards/{board-id}";

        // when
        ResultActions actions =
                mvc.perform(patch(uri, boardId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.boardTitle").value(patch.getBoardTitle()));
    }

    @Test
    void getMember() throws Exception{
        long boardId = getResponseBoardId();
        String uri = "/boards/{board-id}";

        mvc.perform(get(uri, boardId).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.boardTitle").value(this.post.getBoardTitle()))
                .andExpect(jsonPath("$.boardContent").value(this.post.getBoardContent()));
    }

    @Test
    void getMembers() throws Exception{
        // postMember 하나 더 추가
        BoardPostDto post = new BoardPostDto(1L, "커밋이 안돼요", "커밋이 안됩니다.", 1, 1L, List.of(new BoardTagDto(1)));
        String content = gson.toJson(post);

//        ResultActions actions =
//                mockMvc.perform(
//                        post("/members")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );

        ResultActions actions =
                mvc.perform(
                        get("/boards")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );
        MvcResult result = actions
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    void deleteMember() throws Exception {
        long boardId = getResponseBoardId();
        String uri = "/boards/{board-id}";

        mvc.perform(delete(uri, boardId))
                .andExpect(status().isNoContent());
    }

    private long getResponseBoardId() {
        long boardId;
        String location = this.postResultActions.andReturn().getResponse().getHeader("Location");
        boardId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1));

        return boardId;
    }
}
