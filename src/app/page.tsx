"use client";

import { Text } from "@/components/Text";
import { HOME_LABEL } from "@/constants/homelabel";

import useLogin from "./hooks";
import { InputType } from "@/components/InputText";
import { Button } from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  const { fetchData, inputInformation, handleChange, handleSubmit } =
    useLogin();

  return (
    <main className="flex flex-col md:flex-row bg-main-theme h-screen">
      <div className="lg:w-3/6 w-full md:h-full h-3/6 text-white flex flex-col justify-center items-center md:items-start md:pl-24 md:text-left text-center">
        <Text variant="8xl/bold/passionOne">{HOME_LABEL.title}</Text>
        <Text variant="2xl/bold/passionOne">
          {HOME_LABEL.description.first}
        </Text>
        <Text variant="2xl/bold/passionOne">
          {HOME_LABEL.description.second}
        </Text>
      </div>
      <form
        className="lg:w-3/6 w-full h-full flex flex-col gap-3 justify-center items-center bg-secondary-theme"
        onSubmit={handleSubmit}
      >
        {inputInformation.map((input) => (
          <InputType
            className="w-4/5"
            key={input.id}
            name={input.name}
            type={input.type}
            label={input.label}
            required={input.required}
            value={fetchData[input.name]}
            onChange={handleChange}
          />
        ))}
        <Button
          //TODO: replace with loading
          loading={false}
          intent={"primary"}
          className="w-4/5 h-11 rounded-md border-none"
        >
          <Text className="text-white" variant="2xl/bold/oswald">
            {HOME_LABEL.buttonLabel}
          </Text>
        </Button>
        <Link href={"/signup"}>
          <Text
            className="text-main-theme underline cursor-pointer"
            variant="xl/bold/oswald"
          >
            {HOME_LABEL.switchPage}
          </Text>
        </Link>
      </form>
    </main>
  );
}
