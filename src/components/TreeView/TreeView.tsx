import "./styles/treeview.css";
import { TreeViewContext, TreeViewContextProvider } from "./context";
import { Tree } from "./index";
import type { TreeViewProps } from "./types";

export const TreeView = ({ data, ...props }: TreeViewProps) => {
  return (
    <TreeViewContextProvider {...props}>
      <TreeViewContext.Consumer>
        {() => (
          <div className="custom-tree-grid" data-testid="tree-view">
            <Tree branches={data} border="1px solid #D8DAE5" />
          </div>
        )}
      </TreeViewContext.Consumer>
    </TreeViewContextProvider>
  );
};
