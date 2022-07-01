import React, { useContext, useState } from "react";
import UserContext from "../../context/user";
import { InputInformation, MainPageLabel } from "./data/labels";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  ContainerText,
  Form,
  Button,
  TextField,
  InputGroup,
} from "./styles";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function Login() {
  const [disable, setDisable] = useState(false);
  const { setUserData } = useContext(UserContext);
  const api = useApi();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState({
    email: "",
    password: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    setDisable(true);
    api.user
      .signIn(fetchData)
      .then(({ data }) => {
        setDisable(false);
        setUserData(JSON.stringify(data));
        navigate("/schedule");
      })
      .catch((err) => {
        setDisable(false);
        setFetchData({
          email: "",
          password: "",
        });
        toast(err.response?.data?.error);
      });
  }

  return (
    <MainContainer>
      <ContainerText>
        <h1>{MainPageLabel.title}</h1>
        <h2>{MainPageLabel.subTitle.first}</h2>
        <h2>{MainPageLabel.subTitle.second}</h2>
      </ContainerText>
      <Form onSubmit={submitHandler}>
        {InputInformation.map((input) => (
          <InputGroup key={input.id}>
            <TextField
              value={fetchData[input.id]}
              type={input.type}
              label={input.label}
              required
              disabled={disable}
              onChange={(e) =>
                setFetchData({ ...fetchData, [input.id]: e.target.value })
              }
            />
          </InputGroup>
        ))}
        <Button disabled={disable}>
          {disable ? (
            <ThreeDots color="var(--white-color)" height={15} width={60} />
          ) : (
            `${MainPageLabel.buttonLabel}`
          )}
        </Button>
        <Link to={"/signup"}>
          <p>{MainPageLabel.switchPage}</p>
        </Link>
      </Form>
    </MainContainer>
  );
}
