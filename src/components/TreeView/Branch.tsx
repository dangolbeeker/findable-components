import { useEffect, useState } from "react";

import { useTreeView } from "./context";
import type { Category } from "./types";
import { Button, Checkbox } from "../";

const defaultColor = "#696F8C";
const emptyColor = " #8F95B2";

export const Branch = ({
  count,
  name,
  code,
  overCheck,
  allFiles,
  children,
}: {
  count: number;
  name: Category["name"];
  code: Category["code"];
  overCheck?: boolean;
  allFiles: Category["code"][];
  children: React.FC<{ overCheck: boolean }>;
}) => {
  const { expandAll, selectMode, handleMultiNodeSelect } = useTreeView();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(Boolean(overCheck));

  function handleCheckos() {
    setChecked(!checked);
    handleMultiNodeSelect(allFiles, checked);
  }

  useEffect(() => {
    if (code.length > 2 && code !== "custom") return;
    setExpanded(Boolean(expandAll));
  }, [expandAll, setExpanded, code]);

  useEffect(() => {
    if (!selectMode) {
      setChecked(false);
    }
  }, [selectMode]);

  useEffect(() => {
    setChecked(Boolean(overCheck));
  }, [overCheck]);

  let branchName = `${code} · ${name} (${count})`;
  if (["+", "-", "custom"].includes(code) || code.startsWith("FND"))
    branchName = `${name} (${count})`;

  return (
    <div>
      <div
      // display="flex"
      // alignItems="center"
      // position="sticky"
      // className="sticky-background"
      // zIndex={1}
      // top={0}
      >
        {selectMode && (
          <Checkbox
          // margin={0}
          // marginRight={8}
          // checked={checked}
          // onChange={handleCheckos}
          />
        )}
        <Button
          // appearance="minimal"
          // paddingLeft="none"
          // width="100%"
          // display="flex"
          // justifyContent="flex-start"
          // fontWeight={700}
          // iconBefore={
          //   !selectMode ? (
          //     !expanded ? (
          //       <div>foldercloseicon</div>
          //     ) : (
          //       // <FolderCloseIcon
          //       //   color={count > 0 ? defaultColor : emptyColor}
          //       // />
          //       <div>folderopenicon</div>

          //       // <FolderOpenIcon color={count > 0 ? defaultColor : emptyColor} />
          //     )
          //   ) : null
          // }
          onClick={() => setExpanded(!expanded)}
        >
          {branchName}
        </Button>
      </div>
      {expanded && <div>{children({ overCheck: checked })}</div>}
    </div>
  );
};
