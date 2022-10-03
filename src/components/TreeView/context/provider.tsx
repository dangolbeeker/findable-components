import React, { useEffect, useState } from 'react';
import { Category, ContextProps, TreeViewContextValues } from '../types';

export const TreeViewContext = React.createContext<TreeViewContextValues>({
  selectedNodes: [],
  expandAll: false,
  showEmptyCats: false,
  selectMode: false,
  handleSelectNodeChange: () => {},
  handleSelectLeaf: () => {},
  handleMultiNodeSelect: () => {},
});

export const TreeViewContextProvider: React.FC<ContextProps> = ({
  children,
  expandAll,
  showEmptyCats,
  selectMode,
  handleSelection,
  onSelectDocument,
}) => {
  const [selectedNodes, setSelectedNodes] = useState<Category['code'][]>([]);

  useEffect(() => {
    handleSelection(selectedNodes);
  }, [selectedNodes, handleSelection]);

  useEffect(() => {
    if (!selectMode) {
      setSelectedNodes([]);
    }
  }, [selectMode]);

  function handleSelectNodeChange(nodeId: Category['code']) {
    if (selectedNodes.includes(nodeId)) {
      setSelectedNodes(selectedNodes.filter(n => n !== nodeId));
      return;
    }
    setSelectedNodes([...selectedNodes, nodeId]);
  }

  function handleMultiNodeSelect(
    nodeIds: Category['code'][],
    deselect?: boolean
  ) {
    if (!deselect) {
      setSelectedNodes([...new Set(selectedNodes.concat(nodeIds))]);
    } else {
      setSelectedNodes(selectedNodes.filter(node => !nodeIds.includes(node)));
    }
  }

  function handleSelectLeaf(nodeId: Category['code']) {
    onSelectDocument(nodeId);
  }

  return (
    <TreeViewContext.Provider
      value={{
        expandAll,
        showEmptyCats,
        selectMode,
        selectedNodes,
        handleSelectNodeChange,
        handleSelectLeaf,
        handleMultiNodeSelect,
      }}
    >
      {children}
    </TreeViewContext.Provider>
  );
};
