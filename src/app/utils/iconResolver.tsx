import {
  IconResolverProps,
  IconsResolver,
  IconsResolverTestId,
} from "@/types/IconsResolver";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export function iconResolver({
  icon,
  color,
  height,
  width,
}: IconResolverProps): JSX.Element | null {
  switch (icon) {
    case IconsResolver["threeDots"]:
      return (
        <ThreeDots
          color={color}
          height={height}
          width={width}
          data-testid={IconsResolverTestId}
        />
      );
    default:
      return null;
  }
}
