import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createPost } from "../../app/posts";


import { Container, Div1, PostsTitle } from "../../styles/GlobalComponents";
import {
  Button,
  Div2,
  Div3,
  Form,
  FormDiv,
  FormInput,
  FormText,
} from "./UserStyled";
import store  from "../../app/store";
import { table } from "../../utils/constants";

function NewUser() {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const {
    posts: { posts },
  } = store.getState();

  let myId = table;
  posts.forEach((post) => {
    myId = myId.filter((num) => num !== post.id);
  });

  // for (let i = 0; i < posts.length; i++) {
  //   myId = myId.filter((num) => num !== posts[i].id);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    toast.success("Post created succesfully");
    navigate("/");
  };

  return (
    <Container>
      <Div1>
        <PostsTitle>New User</PostsTitle>
      </Div1>
      <Div2>
        <Form
          autoComplete="off"
          onSubmit={handleSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <FormDiv>
            <FormText>Name</FormText>
            <FormInput
              value={postData.name}
              onChange={handleInput}
              type="text"
              name="name"
            />
          </FormDiv>
          <FormDiv>
            <FormText>Username</FormText>
            <FormInput
              value={postData.username}
              name="username"
              type="text"
              onChange={handleInput}
              required
            />
          </FormDiv>
          <FormDiv>
            <FormText>Email</FormText>
            <FormInput
              value={postData.email}
              name="email"
              type="email"
              required
              onChange={handleInput}
            />
          </FormDiv>
          <FormDiv>
            <FormText>City</FormText>
            <FormInput
              value={postData.address.city}
              name="city"
              type="text"
              onChange={(e) => {
                setPostData({ ...postData, address: { city: e.target.value } });
              }}
            />
          </FormDiv>
          <Div3>
            <Link to="/">
              <Button alter>Cancel</Button>
            </Link>
            <Button
              type="submit"
              onClick={() => {
                setPostData({ ...postData, id: myId[0] });
              }}
            >
              Submit
            </Button>
          </Div3>
        </Form>
      </Div2>
    </Container>
  );
}

export default NewUser;
