import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Container,
  Div1,
  DivTable,
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

  const isLoading = useSelector((state) => state.posts.loading);

  const spinner = (
    <tr>
      <td>
        <Spinner />
      </td>
    </tr>
  );

  return (
    <Container>
      <Div1>
        <PostsTitle>User list</PostsTitle>

        <Link to="/register">
          <PostsButton> Add new</PostsButton>
        </Link>
      </Div1>

      <DivTable>
        <PostsTable>
          <TableHead>
            <TableRow>
              <HeadData className="fixed-side">ID</HeadData>
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
            {isLoading
              ? spinner
              : posts.map((post) => <Post key={post.id} post={post} />)}
          </TableBody>
        </PostsTable>
      </DivTable>
    </Container>
  );
}

export default Hero;
