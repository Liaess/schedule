import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function ErrorMessage() {
  const navigate = useNavigate();

  return (
    <Main>
      <h1>Nothing here, are you lost? 🤔</h1>
      <button onClick={() => navigate("/")}>Move back</button>
    </Main>
  );
}

const Main = styled.main`
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  h1 {
    font-size: 30px;
  }
  button {
    font-family: 'Ubuntu', sans-serif;
    background-color: var(--secondary-theme);
    border: none;
    border-radius: 6px;
    color: var(--white-color);
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
`;
