import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deletePost } from "../../app/posts";

import { BodyData, TableRow } from "../../styles/GlobalComponents";
import Modal from "./Modal/Modal";

import { Button } from "./PostStyled";

function Post({ post: { id, name, username, email, address } }) {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const setChange = (id) => {
    navigate(`/edit/${id}`);
  };

  const dispatch = useDispatch();

  const deleteBut = (deleteId) => {
    dispatch(deletePost(deleteId));
    toast.warning("Post has been deleted!!!");
    setActive(false);
  };

  return (
    <TableRow>
      <BodyData className="fixed-side">{id}</BodyData>
      <BodyData>{name || "n/a"}</BodyData>
      <BodyData>{username}</BodyData>
      <BodyData>{email}</BodyData>
      <BodyData>{address.city || "n/a"}</BodyData>
      <BodyData>
        <Button onClick={() => setChange(id)}>Edit</Button>
      </BodyData>
      <BodyData>
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
      </BodyData>
    </TableRow>
  );
}

export default Post;
