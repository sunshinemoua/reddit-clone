import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Post {
  community: string;
  title: string;
  post: string;
  tags?: string;
}

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const newPost = action.payload;
      return [newPost, ...state];
      // if i want to mutate state directly by adding more to post obj, then i have to use createReducer
    },
  },
});

export const selectPosts = (state: RootState) => state.posts.values;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
