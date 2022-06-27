import React, { useState } from "react";
import { InputInformation, MainPageLabel } from "./data/labels.js";
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

export default function Register() {
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const api = useApi();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (fetchData.password !== fetchData.confirmPassword) {
      return toast("Passwords don't match!");
    }
    setDisable(true);
    api.user
      .signUp(fetchData)
      .then((_res) => {
        setDisable(false);
        toast("Registration successfully completed!");
        navigate("/");
      })
      .catch((err) => {
        setDisable(false);
        if (err.response.status) {
          toast(err.response.data.error);
        }
        setFetchData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
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
              type={input.type}
              placeholder={input.placeholder}
              required
              autoComplete="true"
              value={fetchData[input.id]}
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
        <Link to={"/"}>
          <p>{MainPageLabel.switchPage}</p>
        </Link>
      </Form>
    </MainContainer>
  );
}
