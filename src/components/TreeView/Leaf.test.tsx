import { render, screen } from "@testing-library/react";
import { Leaf } from ".";

describe("Leaf Component", () => {
  render(<Leaf code="1337" name="johnnytester" />);
});
