import { render, screen } from "@testing-library/react";
import { Leafs } from ".";
import { testfiles } from "./test-data";

describe("Leafs Component", () => {
  render(<Leafs leafs={testfiles} />);
});
