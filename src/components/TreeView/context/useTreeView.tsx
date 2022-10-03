import { useContext } from 'react';
import { TreeViewContext } from './provider';

export const useTreeView = () => useContext(TreeViewContext);
