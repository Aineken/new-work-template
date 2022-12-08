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

export const NavLink = styled.div`
  font-size: ${(props) => (props.main ? "4rem" : "3rem")};
  font-weight: ${(props) => (props.main ? "500" : null)};
  line-height: 32px;
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  justify-content: ${(props) => (props.left ? "start" : "center")};
  align-items: center;
  color: ${(props) => (props.white ? "#fff" : "#F0E9D2")};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 3rem;
    line-height: 28px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
