import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "..";
import { IconsResolverTestId } from "@/types/IconsResolver";

const mockOnClick = jest.fn();

function renderComponent(label = "Label", props?: ButtonProps) {
  return {
    user: userEvent.setup(),
    ...render(<Button {...props}>{label}</Button>),
  };
}

describe("<Button />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    renderComponent();

    const button = screen.getByText("Label");

    expect(button).toBeInTheDocument();
  });

  it("should perform action on click", async () => {
    const { user } = renderComponent("", { onClick: mockOnClick });

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).toBeCalledTimes(1);

    await user.click(button);
    await user.click(button);
    expect(mockOnClick).toBeCalledTimes(3);
  });

  it("should be disabled", () => {
    renderComponent("", { disabled: true });

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should not allow onClick on disabled button", async () => {
    const { user } = renderComponent("", {
      onClick: mockOnClick,
      disabled: true,
    });

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockOnClick).toBeCalledTimes(0);
  });

  it("should render load icon when loading prop is true", () => {
    renderComponent("", {
      loading: true,
    });

    const loader = screen.getByRole(IconsResolverTestId);

    expect(loader).toBeInTheDocument();
  });

  it("should load correct load icon for given button variant", () => {
    renderComponent("", {
      loading: true,
      intent: "secondary",
    });
    const loader = screen.getByRole("button");

    const className = loader.getAttribute("class");

    expect(loader).toBeInTheDocument();
    expect(className).toContain("bg-secondary-theme text-black");
  });
});
