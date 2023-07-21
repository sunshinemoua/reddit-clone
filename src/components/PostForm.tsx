import React from "react";
import "./PostForm.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as yup from "yup";
import { v4 as uuid } from "uuid";
import CommunityRules from "./CommunityRules";
import { addPost } from "../redux/postSlice";

type Inputs = {
  community: any;
  title: any;
  post: any;
  tags: any;
};

export const Posts: React.FC = () => {
  const posts = useAppSelector((state) => state.posts);
  console.log(posts);

  const mappedPosts = posts.map((post) => {
    return (
      <div key={uuid()} className="post-card">
        <div className="community">
          <img alt="community-icon" src="raccoon.jpeg" className="icon"></img>
          r/{post.community}
        </div>
        <div className="title">
          <h3>title: {post.title}</h3>
          {post.tags !== "" && <div className="tags">{post.tags}</div>}
        </div>
        <div className="post"> post: {post.post}</div>
      </div>
    );
  });
  return <div>{mappedPosts}</div>;
};

const PostForm: React.FC = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const postSchema = yup.object({
    community: yup.string().required(),
    title: yup.string().required(),
    post: yup.string().required(),
    tags: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addPost(data));
    reset();
  };

  return (
    <div className="post-form-wrapper">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="community">
            <input
              type="text"
              {...register("community")}
              placeholder="community"
            />
            {errors.community && <span>This is required</span>}
          </div>
          <div className="card">
            <input type="text" {...register("title")} placeholder="title" />
            {errors.title && <span>This is required</span>}
            <textarea {...register("post")} placeholder="post" rows={8} />
            {errors.post && <span>This is required</span>}
            <input type="text" {...register("tags")} placeholder="tags" />
            <input type="submit" />
          </div>
        </form>
        <Posts />
      </div>
    </div>
  );
};

export default PostForm;
