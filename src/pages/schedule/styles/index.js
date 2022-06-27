import styled from "styled-components";
import { Calendar } from "react-big-calendar";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const CalendarStyle = styled(Calendar)`
  width: 100vw;
  min-height: calc(100vh - 50px);
  @media (max-width: 700px) {
    > div {
      display: flex;
      flex-direction: column;
    }
    p {
      display: flex;
      flex-direction: column;
      font-size: 0.938rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5%;
  width: 100vw;
  height: 50px;
  margin: 0 100px 0px 100px;
  font-family: "Oswald";
  font-weight: 700;
  p {
    font-size: 1.4rem;
    color: var(--main-theme);
  }
  button {
    background-color: var(--main-theme);
    border: none;
    border-radius: 6px;
    color: var(--white-color);
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
  @media (max-width: 700px) {
  }
`;
