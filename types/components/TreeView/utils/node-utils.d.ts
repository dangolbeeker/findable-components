import type { Category } from "../types";
/**
 * Util for looping through all children to get total count of files
 * @param children - The children nodes
 * @param isFile - The value for knowing if a node is a file or folder
 * @returns Total number of files
 */
export declare const countFiles: (children: Category["children"], isFile?: Category["isFile"]) => number;
/**
 * Util for checking if children are folders
 * @param nodes - The children nodes
 * @returns true if unable to find node with isFile = true
 */
export declare function checkIfFolders(nodes: Category[]): boolean;
/**
 * Util for getting all file codes in a flattened array
 * @param nodes - The children nodes
 * @returns flat array with all file codes
 */
export declare const getFiles: (nodes: Category[]) => Category["code"][];
