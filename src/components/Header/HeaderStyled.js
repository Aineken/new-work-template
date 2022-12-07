import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const NavLink = styled.a`
  font-size: ${(props) => (props.main ? "4rem" : "3rem")};
  font-weight: ${(props) => (props.main ? "500" : null)};
  line-height: 32px;
  display: flex;
  width: 100%;

  justify-content: ${(props) => (props.left ? "start" : "center")};
  align-items: center;
  color: ${(props) => (props.white ? "#fff" : "rgba(255, 255, 255, 0.75)")};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
