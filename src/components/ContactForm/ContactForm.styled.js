import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 15px;
  border: 1px solid black;
  width: 300px;
  background-color: #d3e29d;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  color: white;
  background-color: #8ab446;
  border-radius: 10px;
  border: 1px solid green;
  font-weight: 500;

  &:hover {
    background-color: #778d45;
  }
`;
