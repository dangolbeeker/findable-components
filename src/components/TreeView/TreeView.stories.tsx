import { Meta, Story } from "@storybook/react";

import { testdata, testfiles } from "./test-data";

import { TreeView, Branch, Leaf, Leafs } from "./index";
import type { Category, TreeViewProps } from "./types";

export default {
  title: "Tree view",
} as Meta;

const TreeViewTemplate = ({
  expandAll,
  showEmptyCats,
  selectMode,
}: TreeViewProps) => {
  return (
    <TreeView
      data={testdata as Category[]}
      expandAll={expandAll}
      showEmptyCats={showEmptyCats}
      selectMode={selectMode}
      handleSelection={(selection) => console.log(selection)}
      onSelectDocument={(nodeId) => alert(nodeId)}
    />
  );
};

export const TreeViewComponent: Story<TreeViewProps> = TreeViewTemplate.bind(
  {}
);

TreeViewComponent.args = {
  expandAll: false,
  showEmptyCats: false,
  selectMode: false,
};

export const BranchComponent = () => {
  return (
    <Branch
      count={1337}
      name="johnnytester"
      code="1337"
      allFiles={["testfile", "testfile2"]}
    >
      {() => null}
    </Branch>
  );
};

export const LeafsComponent = () => {
  return <Leafs leafs={testfiles} />;
};

export const LeafComponent = () => {
  return <Leaf code="1337" name="johnnytester" />;
};
