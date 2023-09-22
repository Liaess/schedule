import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { HTMLProps } from "react";

const textStyles = cva([], {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "8xl": "text-8xl",
    },
    weight: {
      light: "font-light",
      normal: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    font: {
      oswald: "font-oswald",
      passionOne: "font-passion",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  },
});

type TextStylesProps = VariantProps<typeof textStyles>;

interface Variant extends Omit<TextStylesProps, "size" | "weight"> {
  variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<
    TextStylesProps["weight"]
  >}/${NonNullable<TextStylesProps["font"]>}`;
}

export type TextProps = Variant & HTMLProps<HTMLDivElement>;

export enum TextRoles {
  text = "text",
}

export function Text({ variant, children, className, ...props }: TextProps) {
  const [size, weight, font] = variant.split("/") as [
    TextStylesProps["size"],
    TextStylesProps["weight"],
    TextStylesProps["font"]
  ];

  return (
    <div
      role={TextRoles.text}
      className={clsx(textStyles({ size, weight, font }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
