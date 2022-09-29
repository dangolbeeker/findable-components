import { Fragment } from "react";

import { Leaf, Branch, Leafs } from "./index";
import { checkIfFolders, countFiles, getFiles } from "./utils";
import { useTreeView } from "./context";
import type { Category } from "./types";

export const Tree = ({
  branches,
  border,
  overCheck,
}: {
  branches: Category[];
  border?: string;
  overCheck?: boolean;
}) => {
  const { showEmptyCats } = useTreeView();

  return (
    <Fragment>
      {branches?.map((branch) => {
        const { isFile, code, name, children } = branch;
        const count = countFiles(children, isFile);
        const allFiles = getFiles(children);
        const childrenAreFolders = checkIfFolders(children);

        if (!showEmptyCats && count < 1 && code.length > 1) return null;

        if (isFile) {
          return <Leaf code={code} name={name} key={code + name} />;
        }

        return (
          // <div key={code + name} border={border}>
          <div>
            <Branch
              count={count}
              name={name}
              code={code}
              allFiles={allFiles}
              overCheck={overCheck}
            >
              {({ overCheck }) => (
                <div>
                  {childrenAreFolders || children.length < 20 ? (
                    <Tree branches={children} overCheck={overCheck} />
                  ) : (
                    <Leafs leafs={children} />
                  )}
                </div>
              )}
            </Branch>
          </div>
        );
      })}
    </Fragment>
  );
};
