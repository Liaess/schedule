import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import { InputType, InputTypeProps } from "..";

const onChangeMock = jest.fn();
const props: InputTypeProps = {
  label: "E-mail here",
  name: "email",
  value: "",
  onChange: onChangeMock,
  required: true,
  type: "email",
};

function renderComponent(props: InputTypeProps) {
  return {
    user: userEvent,
    ...render(<InputType {...props} />),
  };
}

describe("<InputType />", () => {
  it("should render the component", () => {
    renderComponent(props);

    const component = screen.getByRole("textbox");

    expect(component).toBeInTheDocument();
  });

  it("should render with correct label", () => {
    const mockLabel = faker.lorem.lines(1);

    renderComponent({ ...props, label: mockLabel });

    const component = screen.getAllByText(mockLabel);

    expect(component).toBeTruthy();
  });

  it("should render with correct name", () => {
    const mockName = faker.lorem.lines(1);

    renderComponent({ ...props, name: mockName });

    const component = screen.getByRole("textbox").getAttribute("name");

    expect(component).toBeTruthy();
  });
  it("should render input with type email", () => {
    renderComponent({ ...props, type: "email" });

    const input = screen.getByRole("textbox").getAttribute("type");

    expect(input).toBe("email");
  });

  it("should render input with type text", () => {
    renderComponent({ ...props, type: "text" });

    const input = screen.getByRole("textbox").getAttribute("type");

    expect(input).toBe("text");
  });

  it("should call onChange function when input value changes", async () => {
    const mockText = faker.internet.email();

    const { user } = renderComponent({ ...props, type: "email" });

    const input = screen.getByRole("textbox");

    await user.type(input, mockText);

    expect(onChangeMock).toHaveBeenCalledTimes(mockText.length);
  });
});
