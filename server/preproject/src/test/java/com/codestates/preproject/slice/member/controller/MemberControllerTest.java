package com.codestates.preproject.slice.member.controller;

import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@Transactional
@SpringBootTest
@AutoConfigureMockMvc
class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;

    private MemberDto.Post post;

    @Test
    @BeforeEach
    void postMemberTest() throws Exception {
        post = new MemberDto.Post("hgd@gmail.com", "홍길동","asdf1234");

        String content = gson.toJson(post);

        ResultActions actions =
                mockMvc.perform(
                        post("/members")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/members"))));
    }

    @Test
    void patchMemberTest() throws Exception {
        MemberDto.Patch patch = new MemberDto.Patch(
                1L, "hgd@gmail.com", "홍길동", "asdf1234", Member.MemberGrade.MEMBER_BRONZE);
        String content = gson.toJson(patch);

        ResultActions actions =
                mockMvc.perform(
                        patch("/members/1")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );
        MvcResult result = actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.memberEmail").value(patch.getMemberEmail()))
                .andExpect(jsonPath("$.memberName").value(patch.getMemberName()))
                .andExpect(jsonPath("$.memberGrade").value(patch.getMemberGrade().getGrade()))
                .andDo(print())
                .andReturn();
    }

    @Test
    void getMemberTest() throws Exception {

        long memberId = 1;

        mockMvc.perform(
                get("/members/"+ memberId)
                        .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.memberEmail").value(post.getMemberEmail()))
                .andExpect(jsonPath("$.memberName").value(post.getMemberName()))
                .andExpect(jsonPath("$.memberGrade").value("브론즈"));
    }

    @Test
    void getMembersTest() throws Exception {
        // postMember 하나 더 추가
        MemberDto.Post post = new MemberDto.Post("hgd2@gmail.com", "김길동","qwer1234");
        String content = gson.toJson(post);

//        ResultActions actions =
//                mockMvc.perform(
//                        post("/members")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );

        ResultActions actions =
               mockMvc.perform(
                get("/members")
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
        long memberId = 1;
        ResultActions actions =
                mockMvc.perform(
                        delete("/members/"+memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );
        MvcResult result = actions
                .andExpect(status().isNoContent())
                .andDo(print())
                .andReturn();

    }
}