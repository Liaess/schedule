import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useContext, useState } from "react";
import UserContext from "../../context/user";
import { InputInformation, MainPageLabel } from "./data/labels";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import {
  MainContainer,
  ContainerText,
  Form,
  Button,
  InputGroup,
} from "./styles";
import useApi from "../../hooks/useApi";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [disable, setDisable] = useState(false);
  const api = useApi();

  function submitHandler(data) {
    setDisable(true);
    api.user.signIn(data).then(({ data }) => {
      setDisable(false);
      // setUserData(data.token);
    });
  }

  return (
    <MainContainer>
      <ContainerText>
        <h1>{MainPageLabel.title}</h1>
        <h2>{MainPageLabel.subTitle.first}</h2>
        <h2>{MainPageLabel.subTitle.second}</h2>
      </ContainerText>
      <Form onSubmit={handleSubmit(submitHandler)}>
        {InputInformation.map((input, index) => (
          <InputGroup key={index}>
            <input
              id={input.id}
              type={input.type}
              disabled={disable}
              placeholder={input.placeholder}
              {...register(`${input.htmlFor}`, { required: input.error })}
            ></input>
            <ErrorMessage
              errors={errors}
              name={input.htmlFor}
              render={({ message }) => <span>{message}</span>}
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
