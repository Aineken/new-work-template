import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../app/posts";
import { Spinner } from "../../styles/GlobalComponents";
import Post from "../Post/Post";
import { PostsContainer } from "./HeroStyled";

function Hero({ setCurrentId }) {
  const posts = useSelector(selectAllPosts);
  return !posts.length ? (
    <Spinner />
  ) : (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post._id} setCurrentId={setCurrentId} post={post} />
      ))}
    </PostsContainer>
  );
}

export default Hero;
