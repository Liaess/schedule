import Modal from "react-modal";
import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";

export const ModalStyle = styled(Modal)`
  width: 90vw;
  height: 80vh;
  padding-top: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--main-theme);
  margin: 10vh auto;
  background-color: #fff;
  color: var(--main-theme);
  h2 {
    padding-bottom: 50px;
  }
`;

export const Form = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 50vw;
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
  margin-top: 10px;
  cursor: pointer;
`;

export const TextField = styled(MuiTextField)`
  width: 100%;
`;
