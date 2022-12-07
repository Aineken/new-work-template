import React from "react";
import { PostDatas, PostItem } from "../../styles/GlobalComponents";

import { Button } from "./PostStyled";

function Post({ post, post: { id, name, username, email, address } }) {
  console.log(post);
  return (
    <PostDatas>
      <PostItem>{id}</PostItem>
      <PostItem>{name}</PostItem>
      <PostItem>{username}</PostItem>
      <PostItem>{email}</PostItem>
      <PostItem>{address.city}</PostItem>
      <PostItem>
        <Button>edit</Button>
      </PostItem>
      <PostItem>
        <Button alter>delete</Button>
      </PostItem>
    </PostDatas>
  );
}

export default Post;
