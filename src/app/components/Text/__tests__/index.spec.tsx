import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import { Text, TextProps, TextRoles } from "..";

function renderComponent({ variant, children, ...props }: TextProps) {
  return render(
    <Text variant={variant} {...props}>
      {children}
    </Text>
  );
}

describe("<Text />", () => {
  it("should render the component", () => {
    renderComponent({ variant: "md/normal/oswald" });

    const component = screen.getByRole(TextRoles.text);

    expect(component).toBeInTheDocument();
  });

  it("should render the component with the correct variant", () => {
    renderComponent({ variant: "sm/light/oswald" });

    const component = screen.getByRole(TextRoles.text);

    expect(component).toHaveClass("text-sm font-light");
  });

  it("should render the component with the correct children", () => {
    const randomText = faker.lorem.lines(1);
    renderComponent({
      variant: "md/normal/oswald",
      children: randomText,
    });

    const component = screen.getByRole(TextRoles.text);

    expect(component).toHaveTextContent(randomText);
  });

  it("should render the component with the correct className", () => {
    renderComponent({
      variant: "md/normal/oswald",
      className: "example-class",
    });

    const component = screen.getByRole(TextRoles.text);

    expect(component).toHaveClass("example-class");
  });
});
