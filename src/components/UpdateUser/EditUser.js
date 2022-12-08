import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

function EditUser({ currentId, setCurrentId }) {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  });

  const post = useSelector(({ posts }) =>
    currentId ? posts.posts.find((text) => text.id === currentId) : null
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(postData));
    setCurrentId(0);
    setPostData({
      name: "",
      username: "",
      email: "",
      address: {
        city: "",
      },
    });
    navigate("/", { state: false });
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
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
              type="text"
              name="name"
            />

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
            <Button type="submit">Submit</Button>
          </Div3>
        </Form>
      </Div2>
    </Container>
  );
}

export default EditUser;
