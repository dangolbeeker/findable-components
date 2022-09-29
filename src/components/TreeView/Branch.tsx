import { useEffect, useState } from "react";

import { useTreeView } from "./context";
import type { Category } from "./types";
import { Button, Checkbox } from "../";

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
        style={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          background: "white",
          zIndex: 1,
          top: 0,
        }}
      >
        {selectMode && (
          <Checkbox
            style={{
              marginRight: 8,
            }}
            checked={checked}
            onChange={handleCheckos}
          />
        )}
        <Button
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <div>© </div>
          {branchName}
        </Button>
      </div>
      {expanded && <div>{children({ overCheck: checked })}</div>}
    </div>
  );
};
