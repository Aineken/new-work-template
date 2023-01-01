import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { selectLoading } from "../../app/loading";

import {
  Container,
  Div1,
  HeadData,
  PostsTable,
  PostsTitle,
  Spinner,
  TableBody,
  TableHead,
  TableRow,
} from "../../styles/GlobalComponents";
import Post from "../Post/Post";
import { PostsButton } from "./HeroStyled";

function Hero() {
  const [sorted, setSorted] = useState(0);

  const { noSort, asc, desc } = {
    noSort: sorted % 3 === 0,
    asc: sorted % 3 === 1,
    desc: sorted % 3 === 2,
  };

  const sortFunction = (posts) => {
    return [...posts.posts].sort((a, b) => {
      const first = a.username.toLowerCase();
      const second = b.username.toLowerCase();

      if (first > second) return (asc && 1) || (desc && -1);
      if (second > first) return (asc && -1) || (desc && 1);
      return 0;
    });
  };

  const posts = useSelector(({ posts }) =>
    asc || desc ? sortFunction(posts) : posts.posts
  );

  const isLoading = useSelector(selectLoading);

  return (
    <Container>
      <Div1>
        <PostsTitle>User list</PostsTitle>

        <Link to="/register">
          <PostsButton> Add new</PostsButton>
        </Link>
      </Div1>

      <PostsTable>
        <TableHead>
          <TableRow>
            <HeadData>ID</HeadData>
            <HeadData>Name</HeadData>
            <HeadData onClick={() => setSorted((prev) => prev + 1)}>
              <span className="headerBold" style={{ marginRight: ".5rem" }}>
                Username
              </span>
              {noSort && <span>⏺️</span>}
              {asc && <span>🔼</span>}
              {desc && <span>🔽</span>}
            </HeadData>
            <HeadData>Email</HeadData>
            <HeadData>City</HeadData>
            <HeadData>Edit</HeadData>
            <HeadData>Delete</HeadData>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading ? (
            <Spinner />
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </TableBody>
      </PostsTable>
    </Container>
  );
}

export default Hero;
