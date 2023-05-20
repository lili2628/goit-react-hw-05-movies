import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 13px 20px;
  width: 300px;
  border-radius: 4px;

  font-size: 18px;
  color: #3d237f;

  box-shadow: #674ea7;
  border: 2px solid #250f5c;

  :focus {
    outline: 3px solid #674ea7;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 4px;
  border: 2px solid #250f5c;

  color: #3d237f;
  background-color: #d9d2e9;
  box-shadow: #b4a7d6;

  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus {
    color: #d9d2e9;
    background-color: #3d237f;
    outline: 3px solid #4c1130;
    box-shadow: 0px 0px 0px 6px #a64d79;
  }


`;