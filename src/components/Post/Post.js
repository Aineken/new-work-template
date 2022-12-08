import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../app/posts";
import { PostItem } from "../../styles/GlobalComponents";
import Modal from "./Modal/Modal";

import { Button } from "./PostStyled";

function Post({ setCurrentId, post: { id, name, username, email, address } }) {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const setChange = (id) => {
    console.log(id);
    setCurrentId(id);
    navigate("/edit", { state: false });
  };

  const dispatch = useDispatch();

  const deleteBut = (deleteId) => {
    dispatch(deletePost(deleteId));
    setActive(false);
  };

  return (
    <>
      <PostItem>
        <span>{id}</span>
      </PostItem>
      <PostItem>
        <span>{name || "n/a"}</span>
      </PostItem>
      <PostItem>
        <span>{username}</span>
      </PostItem>
      <PostItem>
        <span>{email}</span>
      </PostItem>
      <PostItem>
        <span>{address.city || "n/a"}</span>
      </PostItem>
      <PostItem>
        <Button onClick={() => setChange(id)}>Edit</Button>
      </PostItem>
      <PostItem>
        <Button onClick={() => setActive(true)} alter>
          Delete
        </Button>
        <Modal
          active={active}
          hideModal={() => setActive(false)}
          title="Delete"
          footer={
            <Button onClick={() => deleteBut(id)} alter>
              Delete
            </Button>
          }
        >
          Do you really want to delete the user?
        </Modal>
      </PostItem>
    </>
  );
}

export default Post;
