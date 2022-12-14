import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 100px;
  font-size: 24px;
  line-height: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.alter ? "#EE6983" : "#f2d388")};
  border: 2px solid ${(props) => (props.alter ? "#EE6983" : "#f2d388")};
  color: #fff;
  margin: auto;
  padding: 0.25rem 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.background1};
    transition: 0.7s;
    border: 2px solid ${(props) => props.theme.colors.background1};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 24px;
  }
`;
