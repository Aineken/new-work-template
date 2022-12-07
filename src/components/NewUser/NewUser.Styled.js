import styled from "styled-components";

export const Div2 = styled.div`
  border-top: 1px solid #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  margin-top: 30px;
`;

export const FormDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 4fr;
  gap: 30px;
  margin-bottom: 30px;
`;

export const FormText = styled.p`
  font-size: 24px;
  line-height: 30px;
  color: #000;
`;

export const FormInput = styled.input`
  width: 100%;
`;
