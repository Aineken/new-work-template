import styled, { keyframes } from "styled-components";
export const MainContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
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
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  background-color: #fff5e4;
  border-radius: 5px;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const PostsTitle = styled.h4`
  color: #ee6983;
  font-size: 30px;
  line-height: 34px;
  width: max-content;
  margin: 0 1em;
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
  color: #000;
  border-radius: 1rem;
  border: 1px solid #000;
  background-color: beige;
  margin: 1rem;
  padding: 2rem 1rem;
`;

export const PostDatas = styled.div`
  display: grid;
  grid-template-columns: 60px repeat(4, minmax(max-content, 1fr)) 120px 120px;
  width: 100%;
  gap: 0.5rem;
  border-bottom: 1px solid black;
`;

export const PostItem = styled.div`
  display: grid;
  width: 100%;
  padding: 0.5rem;

  justify-content: center;
  align-items: center;
`;
