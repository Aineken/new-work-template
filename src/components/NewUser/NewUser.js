import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../actions/posts";
import { Container, Div1, PostsTitle } from "../../styles/GlobalComponents";
import { Div2, Form, FormDiv, FormInput, FormText } from "./NewUser.Styled";

function NewUser({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
  });
  const post = useSelector(({ posts }) =>
    currentId ? posts.posts.find((text) => text._id === currentId) : null
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPosts(postData));
    } else {
      dispatch(updatePost(postData));
    }
  };
  return (
    <Container>
      <Div1>
        <PostsTitle>New User</PostsTitle>
      </Div1>
      <Div2>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormDiv>
            <FormText>Name</FormText>
            <FormInput value={post.name} type="text" name="name" required />
          </FormDiv>
          <FormDiv>
            <FormText>Username</FormText>
            <FormInput value={post.username} name="username" type="text" />
          </FormDiv>
          <FormDiv>
            <FormText>Email</FormText>
            <FormInput value={post.email} name="email" type="email" required />
          </FormDiv>
          <FormDiv>
            <FormText>City</FormText>
            <FormInput value={post.name} name="city" type="text" required />
          </FormDiv>
        </Form>
      </Div2>
    </Container>
  );
}

export default NewUser;
