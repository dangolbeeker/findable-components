import { memo } from "react";
import memoize from "memoize-one";
import {
  FixedSizeList as List,
  areEqual,
  ListChildComponentProps,
} from "react-window";

import { useTreeView } from "./context";
import type { Category } from "./types";
import { Checkbox, Button } from "../";

export const Leaf = ({
  code,
  name,
}: {
  code: Category["code"];
  name: Category["name"];
}) => {
  const {
    selectMode,
    handleSelectNodeChange,
    selectedNodes,
    handleSelectLeaf,
  } = useTreeView();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 8 }}>
        {selectMode && (
          <Checkbox
            style={{ margin: 0, marginRight: 8 }}
            checked={!!selectedNodes.find((node) => node === code)}
            onChange={() => handleSelectNodeChange(code)}
          />
        )}
        <Button
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
          onClick={() => {
            handleSelectLeaf(code);
          }}
        >
          {name}
        </Button>
      </div>
    </div>
  );
};

const Row = memo(({ data, index, style }: ListChildComponentProps) => {
  const { items } = data;
  const item = items[index];

  return (
    <div style={style} key={item.code + item.name}>
      <Leaf code={item.code} name={item.name} />
    </div>
  );
}, areEqual);

const createItemData = memoize((items) => ({
  items,
}));

export const Leafs = ({ leafs }: { leafs: Category[] }) => (
  <div
    style={{ height: "100%", width: "100%", paddingBottom: 8 }}
    data-testid="leafs"
  >
    <List
      height={500}
      itemCount={leafs.length}
      itemData={createItemData(leafs)}
      itemSize={24}
      width="100%"
    >
      {Row}
    </List>
  </div>
);
