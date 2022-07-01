import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
  font-family: "Passion One";
  font-weight: 700;
  color: var(--white-color);
  h1 {
    font-size: 6.625rem;
    letter-spacing: 0.05em;
  }
  h2 {
    font-family: "Oswald";
    font-size: 2.5rem;
    padding-top: 10px;
  }
  @media (max-width: 800px) {
    min-height: 30%;
    align-items: center;
    padding: 0px;
    h1 {
      font-size: 4.75rem;
      padding-top: 15px;
    }
    h2 {
      font-weight: 700;
      font-size: 1.438rem;
    }
    h2:last-child {
      padding-bottom: 25px;
    }
  }
  @media (max-width: 455px) {
    h1 {
      font-size: 2.75rem;
      padding-top: 15px;
    }
  }
`;

export const Form = styled.form`
  width: 55%;
  background-color: var(--secondary-theme);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Oswald";
  color: var(--secondary-theme);
  p {
    padding-top: 20px;
    color: var(--main-theme);
    font-size: 1.3rem;
    border-bottom: 1px solid var(--main-theme);
  }
  @media (max-width: 800px) {
    width: 100%;
    min-height: 70%;
    justify-content: start;
    padding-top: 40px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const TextField = styled(MuiTextField)`
  width: 80%;
  input {
    color: var(--black-color);
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 45px;
  background-color: var(--main-theme);
  border-radius: 6px;
  font-family: "Oswald";
  font-weight: 700;
  color: var(--white-color);
  font-size: 1.688rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
