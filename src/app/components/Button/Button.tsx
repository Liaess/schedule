import { iconResolver } from "@/utils/iconResolver";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(["flex justify-center items-center"], {
  variants: {
    intent: {
      primary: "bg-main-theme text-white",
      secondary: "bg-secondary-theme text-black",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylesProps;

export enum ButtonRoles {
  button = "button",
}

export const Button = ({
  loading,
  className,
  children,
  onClick,
  intent = "primary",
  ...props
}: ButtonProps) => {
  const isLoadingClass =
    "cursor-not-allowed opacity-90 no-animation hover:bg-primary";

  const intentStyle = buttonStyles({ intent });

  const icon = iconResolver({
    icon: "threeDots",
    color: intent === "primary" ? "#fff" : "#000",
    height: 15,
    width: 60,
  });

  return (
    <button
      {...props}
      role={ButtonRoles.button}
      className={clsx(intentStyle, loading && isLoadingClass, className)}
      onClick={onClick}
    >
      {loading ? icon : children}
    </button>
  );
};
