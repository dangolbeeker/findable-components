import { ReactNode } from "react";
export declare type Category = {
    code: string;
    name: string;
    children: Category[];
    isFile?: boolean;
};
export interface TreeViewProps {
    data: Category[];
    handleSelection: (selection: Category["code"][]) => void;
    onSelectDocument: (selection: Category["code"]) => void;
    expandAll?: boolean;
    showEmptyCats?: boolean;
    selectMode?: boolean;
}
export interface TreeViewContextValues {
    selectedNodes: Category["code"][];
    expandAll?: boolean;
    showEmptyCats?: boolean;
    selectMode?: boolean;
    handleSelectNodeChange: (selectedNode: Category["code"]) => void;
    handleSelectLeaf: (selectedNode: Category["code"]) => void;
    handleMultiNodeSelect: (selectedNodes: Category["code"][], deselect?: boolean) => void;
}
export interface ContextProps extends Omit<TreeViewContextValues, "selectedNodes" | "handleSelectNodeChange" | "handleSelectLeaf" | "handleMultiNodeSelect"> {
    children: ReactNode;
    handleSelection: (selection: Category["code"][]) => void;
    onSelectDocument: (selection: Category["code"]) => void;
}
