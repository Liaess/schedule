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
}: IconResolverProps) {
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
