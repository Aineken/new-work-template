import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePost } from "../../app/posts";

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

function EditUser() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  });

  // if RESTapi worked properly, i could fetch data directly from an API
  // useEffect(() => {
  //   getOnePost(id).then(({ data }) => setPostData(data));
  // }, [id]);

  const post = useSelector(({ posts }) => {
    return id ? posts.posts.find((text) => text.id.toString() === id) : null;
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(postData));
    setPostData({
      name: "",
      username: "",
      email: "",
      address: {
        city: "",
      },
    });
    toast.info("Post has been edited!!!");
    navigate("/");
  };

  return (
    <Container>
      <Div1>
        <PostsTitle>Edit User</PostsTitle>
      </Div1>
      <Div2>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormDiv>
            <FormText>Name</FormText>
            <FormInput
              value={postData.name}
              onChange={handleInput}
              type="text"
              name="name"
            />

            <FormText>Username</FormText>
            <FormInput
              value={postData.username}
              name="username"
              type="text"
              onChange={handleInput}
              required
            />

            <FormText>Email</FormText>
            <FormInput
              value={postData.email}
              name="email"
              type="email"
              required
              onChange={handleInput}
            />

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
            <Button type="submit">Submit</Button>
          </Div3>
        </Form>
      </Div2>
    </Container>
  );
}

export default EditUser;
