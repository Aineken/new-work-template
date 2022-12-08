import styled, { keyframes } from "styled-components";
export const MainContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 3rem 2rem;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #678983;
  border-radius: 5px;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  border-bottom: 2px solid #e6ddc4;
`;

export const PostsTitle = styled.h4`
  color: #f0e9d2;
  font-size: 30px;
  line-height: 34px;
  width: max-content;
  margin: 0 1em;
  padding: 0.25em 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  width: calc(100%-4rem);
  color: #000;
  border-radius: 5px;
  background-color: beige;
  margin: 1rem;
  padding: 2rem 1rem;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
`;

export const PostDatas = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 40px repeat(4, minmax(max-content, 1fr)) 100px 100px;

  /* gap: 0.5rem; */
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 20px repeat(4, minmax(max-content, 1fr)) 80px 80px;
  }
`;

export const PostItem = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;

  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    span {
      font-size: 14px;
    }
  }
`;
