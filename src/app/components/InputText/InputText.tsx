import { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { HTMLAttributes } from "react";

export type InputTypeProps = HTMLAttributes<HTMLInputElement> & {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  disabled?: boolean;
  required: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function InputType({
  className,
  name,
  value,
  label,
  required,
  type,
  onChange,
}: InputTypeProps) {
  return (
    <TextField
      className={className}
      data-testid="input"
      value={value}
      label={label}
      required={required}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
}
