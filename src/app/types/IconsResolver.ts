export enum IconsResolver {
  "threeDots" = "threeDots",
}

export const IconsResolverTestId = "status";

export type IconResolverProps = {
  icon: keyof typeof IconsResolver;
  color?: string;
  height?: number;
  width?: number;
};
