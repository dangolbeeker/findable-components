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
      {/* <div display="flex" alignItems="center" paddingLeft={majorScale(1)}> */}
      <div>
        {selectMode && (
          <Checkbox
          // margin={0}
          // marginRight={majorScale(1)}
          // checked={!!selectedNodes.find((node) => node === code)}
          // onChange={() => handleSelectNodeChange(code)}
          />
        )}
        <Button
          // appearance="minimal"
          // paddingLeft="none"
          // width="100%"
          // display="flex"
          // justifyContent="flex-start"
          // iconBefore={!selectMode ? DocumentIcon : null}
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
