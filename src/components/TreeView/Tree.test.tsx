import { render, screen } from "@testing-library/react";
import { Tree } from ".";
import { testdata } from "./test-data";

describe("Tree Component", () => {
  render(<Tree branches={testdata} />);
});
