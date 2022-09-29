import { render, screen } from "@testing-library/react";
import { TreeView } from ".";
import { testdata } from "./test-data";

describe("TreeView Component", () => {
  render(
    <TreeView
      data={testdata}
      handleSelection={function (selection: string[]): void {
        // console.log({ selection });
      }}
      onSelectDocument={function (selection: string): void {
        // console.log({ selection });
      }}
    />
  );
});
