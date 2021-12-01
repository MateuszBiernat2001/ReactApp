import styled from "styled-components";

const Button = styled.button`
  position: relative;
  height:33px;
  width: 80px;
  background-color: ${({theme}) => theme.primary};
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 40px;
  font-family: 'Montserrat';
  bottom: 15px;
  left: 70%;
`;

export default Button;