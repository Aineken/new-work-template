import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
import { MdOutlineSortByAlpha } from "react-icons/md";

function Hero({ setCurrentId }) {
  const [sorted, setSorted] = useState(0);

  const posts = useSelector(({ posts }) =>
    sorted % 3 === 1
      ? [...posts.posts].sort((a, b) => {
          if (a.username.toLowerCase() > b.username.toLowerCase()) {
            return 1;
          } else if (b.username.toLowerCase() > a.username.toLowerCase()) {
            return -1;
          } else {
            return 0;
          }
        })
      : sorted % 3 === 2
      ? [...posts.posts].sort((a, b) => {
          if (b.username.toLowerCase() > a.username.toLowerCase()) {
            return 1;
          } else if (a.username.toLowerCase() > b.username.toLowerCase()) {
            return -1;
          } else {
            return 0;
          }
        })
      : posts.posts
  );

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
          <PostItem>
            <span>ID</span>
          </PostItem>
          <PostItem>
            <span>Name</span>
          </PostItem>
          <PostItem style={{ display: "flex" }}>
            <span>Username</span>
            <MdOutlineSortByAlpha
              onClick={() => setSorted((prev) => prev + 1)}
              style={{ marginLeft: ".5rem" }}
              size={25}
            />
          </PostItem>
          <PostItem>
            <span>Email</span>
          </PostItem>
          <PostItem>
            <span>City</span>
          </PostItem>
          <PostItem>
            <span>Edit</span>
          </PostItem>
          <PostItem>
            <span>Delete</span>
          </PostItem>

          {posts.map((post, idx) => {
            return <Post key={idx} setCurrentId={setCurrentId} post={post} />;
          })}
        </PostDatas>
      </PostsContainer>
    </Container>
  );
}

export default Hero;
