import { createSlice } from "@reduxjs/toolkit";
import { loadPosts } from "../actions/post";
const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "하꼬지할꼬지",
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s",
      },
      createdAt: "2022-08-31T13:00:25.000Z",
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            id: 1,
            nickname: "nero",
            profileImage:
              "https://weverse-phinf.pstatic.net/MjAyMjA4MDRfMTUx/MDAxNjU5NTc1ODMzMzMy.GmmXDzaqn6TjOKbC3iNjvjbA5nn7AZJ2EAnrOIgptpEg.dRkV0DzRqk_kkSfbqkWFoUQ-0dorOh6-8BuGNukOGbMg.PNG/44060680316209887b7ddb13c-89d4-4074-b011-2a4b8a027c75.png?type=s92",
          },
          content: "우와 개정판이 나왔군요~",
          Refs: [
            {
              User: {
                nickname: "nero",
                profileImage:
                  "https://weverse-phinf.pstatic.net/MjAyMjA4MjdfMjk5/MDAxNjYxNTU5OTIxODg5.8dfNoVMllOqZeuuzeNYQkm2ibhUXXrTPSVdf2Q3yY_Eg.mQwb_hIlK1Okya0IGOsO39lumxZvaDYHmTvaAk5uOZIg.JPEG/Weverse_fe73e.jpg?type=s72",
              },
              id: 3,
              content: "대댓글입니다.",
            },
            {
              User: {
                nickname: "nero",
                profileImage:
                  "https://weverse-phinf.pstatic.net/MjAyMjA4MjdfMjk5/MDAxNjYxNTU5OTIxODg5.8dfNoVMllOqZeuuzeNYQkm2ibhUXXrTPSVdf2Q3yY_Eg.mQwb_hIlK1Okya0IGOsO39lumxZvaDYHmTvaAk5uOZIg.JPEG/Weverse_fe73e.jpg?type=s72",
              },
              id: 4,
              content: "도돗글입니다.",
            },
          ],
        },
        {
          User: {
            nickname: "hero",
            id: 2,
            profileImage:
              "https://weverse-phinf.pstatic.net/MjAyMjA4MDRfMTUx/MDAxNjU5NTc1ODMzMzMy.GmmXDzaqn6TjOKbC3iNjvjbA5nn7AZJ2EAnrOIgptpEg.dRkV0DzRqk_kkSfbqkWFoUQ-0dorOh6-8BuGNukOGbMg.PNG/44060680316209887b7ddb13c-89d4-4074-b011-2a4b8a027c75.png?type=s92",
          },
          content: "얼른 사고싶어요~",
          Refs: [
            {
              User: {
                nickname: "kero",
                profileImage:
                  "https://weverse-phinf.pstatic.net/MjAyMjA4MjdfMjk5/MDAxNjYxNTU5OTIxODg5.8dfNoVMllOqZeuuzeNYQkm2ibhUXXrTPSVdf2Q3yY_Eg.mQwb_hIlK1Okya0IGOsO39lumxZvaDYHmTvaAk5uOZIg.JPEG/Weverse_fe73e.jpg?type=s72",
              },
              id: 3,
              content:
                "대댓글입니당당구리1fjksnkjgnkjdgnkbndknbkjdnkbndgnbdnknbkdnkbndkjnbkjngdbndknbgnkdnknb.",
            },
          ],
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
let num = 2;
let dummyPost = {
  id: num,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "김동영",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s",
  },
  Images: [],
  Comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      console.log("first");
      num++;
      state.mainPosts = [dummyPost, ...state.mainPosts];
      dummyPost = { ...dummyPost, id: num };
    },
    addComment: (state, { payload }) => {
      let OB = {
        User: {
          nickname: "김동영",
          profileImage: "https://avatars.githubusercontent.com/u/62373865?v=4",
        },
        content: payload.value,
        Refs: [],
      };
      state.mainPosts[0].Comments = [...state.mainPosts[0].Comments, OB];
      console.log(state);
      // state
    },
    addReply: (state, { payload }) => {
      // console.log(state.mainPosts);
      // console.log(initialState.mainPosts[0]);
      // console.log(payload.value);
      // console.log(payload.index);
      let OB = {
        User: {
          nickname: "김동영",
          profileImage: "https://avatars.githubusercontent.com/u/62373865?v=4",
        },
        id: 3,
        content: payload.value,
      };
      state.mainPosts[0].Comments[payload.index - 1].Refs = [
        ...state.mainPosts[0].Comments[payload.index - 1].Refs,
        OB,
      ];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.pending, (state) => {
        console.log("pending");
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log("fulfilled");
      })
      .addCase(loadPosts.rejected, (state, action) => {}),
});

export const { addPost, addComment, addReply } = postSlice.actions;
export default postSlice.reducer;
