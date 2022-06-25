import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { InputInformation, MainPageLabel } from "./data/labels.js";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  ContainerText,
  Form,
  Button,
  InputGroup,
} from "./styles";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [disable, setDisable] = useState(false);
  const api = useApi();
  const navigate = useNavigate();

  function submitHandler(data) {
    if (data.password !== data.confirmPassword) {
      return toast("Passwords don't match!");
    }
    setDisable(true);
    api.user
      .signUp(data)
      .then((_res) => {
        setDisable(false);
        toast("Registration successfully completed!");
        navigate("/login");
      })
      .catch((err) => {
        setDisable(false);
        if (err.response.status) {
          toast(err.response.data.error);
        }
        reset({
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
        <Link to={"/"}>
          <p>{MainPageLabel.switchPage}</p>
        </Link>
      </Form>
    </MainContainer>
  );
}
