import styled from "styled-components";

export const Div2 = styled.div``;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  border-radius: 5px;
  margin-top: 30px;
  position: relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 2rem;
    margin: 0;
  }
`;

export const FormDiv = styled.div`
  display: grid;
  grid-template-columns: 150px 3fr;
  gap: 20px;
  margin-bottom: 30px;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    margin-bottom: 15px;
    gap: 0.5rem;
  }
`;

export const FormText = styled.p`
  font-size: 24px;
  line-height: 30px;
  color: #f0e9d2;
  display: grid;
  align-self: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 0;
  padding: 0.5rem 1rem;
  height: 40px;
  background-color: #fff;
  color: #000;
`;

export const Button = styled.button`
  font-size: 24px;
  line-height: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.alter ? "#EE6983" : "#367E18")};
  border: 2px solid ${(props) => (props.alter ? "#EE6983" : "#367E18")};
  color: #fff;
  margin-left: 3rem;
  padding: 0.25rem 1rem;
  height: 40px;
  :hover {
    background-color: #f8ffdb;
    transition: 0.7s;
    color: #000;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 24px;
  }
`;
