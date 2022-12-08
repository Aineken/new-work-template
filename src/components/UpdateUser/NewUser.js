import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost } from "../../app/posts";

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

function NewUser({ newId, setNewId }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
    console.log("submit");
    setNewId((prev) => prev + 1);
    navigate("/", { state: false });
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
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
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
              onChange={(e) =>
                setPostData({ ...postData, username: e.target.value })
              }
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
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </FormDiv>
          <FormDiv>
            <FormText>City</FormText>
            <FormInput
              value={postData.address.city}
              name="city"
              type="text"
              onChange={(e) =>
                setPostData({ ...postData, address: { city: e.target.value } })
              }
            />
          </FormDiv>
          <Div3>
            <Link to="/">
              <Button alter>Cancel</Button>
            </Link>
            <Button
              type="submit"
              onClick={() => setPostData({ ...postData, id: newId })}
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
