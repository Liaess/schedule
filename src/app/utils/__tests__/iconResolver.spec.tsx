import { iconResolver } from "../iconResolver";

describe("iconResolver", () => {
  it("should return with correct data-testid", () => {
    const icon = iconResolver({
      icon: "threeDots",
    });

    expect(icon?.props["data-testid"]).toEqual("status");
  });

  it("should return with correct icon", () => {
    const icon = iconResolver({
      icon: "threeDots",
    });

    expect(icon?.type).toBeInstanceOf(Function);
  });

  it("should return with correct color", () => {
    const icon = iconResolver({
      icon: "threeDots",
      color: "#000000",
    });

    expect(icon?.props.color).toEqual("#000000");
  });

  it("should return with correct height", () => {
    const icon = iconResolver({
      icon: "threeDots",
      height: 100,
    });

    expect(icon?.props.height).toEqual(100);
  });

  it("should return with correct width", () => {
    const icon = iconResolver({
      icon: "threeDots",
      width: 100,
    });

    expect(icon?.props.width).toEqual(100);
  });

  it("should return with null", () => {
    const icon = iconResolver({
      icon: null!,
    });

    expect(icon).toEqual(null);
  });
});
