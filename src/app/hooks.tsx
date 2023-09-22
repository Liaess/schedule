import { useState, FormEvent, ChangeEvent } from "react";

type FetchData = {
  email: string;
  "current-password": string;
};

type InputInformation = {
  id: number;
  name: keyof FetchData;
  type: "text" | "number" | "email" | "current-password";
  label: string;
  required: boolean;
};

export const inputInformation: InputInformation[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    label: "E-mail here",
    required: true,
  },
  {
    id: 2,
    name: "current-password",
    type: "current-password",
    label: "Password here",
    required: true,
  },
];

function useLogin() {
  const [fetchData, setFetchData] = useState<FetchData>({
    email: "",
    "current-password": "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    setFetchData({
      ...fetchData,
      [name]: event.currentTarget.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return {
    fetchData,
    inputInformation,
    handleChange,
    handleSubmit,
  };
}

export default useLogin;
