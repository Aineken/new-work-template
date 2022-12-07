import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllPosts } from "../../app/posts";
import {
  Container,
  Div1,
  PostDatas,
  PostItem,
  PostsContainer,
  PostsTitle,
  Spinner,
} from "../../styles/GlobalComponents";
import Post from "../Post/Post";
import { PostsButton } from "./HeroStyled";

function Hero({ setCurrentId }) {
  const posts = useSelector(selectAllPosts);
  return !posts.length ? (
    <Spinner />
  ) : (
    <Container>
      <Div1>
        <PostsTitle>User list</PostsTitle>

        <Link to="/register">
          <PostsButton> Add new</PostsButton>
        </Link>
      </Div1>

      <PostsContainer>
        <PostDatas>
          <PostItem>ID</PostItem>
          <PostItem>Name</PostItem>
          <PostItem>Username</PostItem>
          <PostItem>Email</PostItem>
          <PostItem>City</PostItem>
          <PostItem>Edit</PostItem>
          <PostItem>Delete</PostItem>
        </PostDatas>

        {posts.map((post) => (
          <Post key={post._id} setCurrentId={setCurrentId} post={post} />
        ))}
      </PostsContainer>
    </Container>
  );
}

export default Hero;
