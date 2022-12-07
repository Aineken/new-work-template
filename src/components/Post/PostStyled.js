import styled from "styled-components";

export const PostContainer = styled.tr``;

export const PostData = styled.td`
  text-align: center;
`;

export const Button = styled.button`
  font-size: 24px;
  line-height: 30px;
  border-radius: 3px;
  background-color: ${(props) => (props.alter ? "#EE6983" : "#f2d388")};
  border: 2px solid ${(props) => (props.alter ? "#EE6983" : "#f2d388")};
  color: #fff;
  margin: auto;
  padding: 0.25rem 1rem;
  :hover {
    background-color: #002ead;
    transition: 0.7s;
  }
`;
