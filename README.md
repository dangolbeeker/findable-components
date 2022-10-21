# Findable components

React components created for Findable AS applications based on [@Mantine](https://www.npmjs.com/package/@mantine/core)

## Install

```
# Yarn
yarn add @findable-no/findable-components

# NPM
npm install --save @findable-no/findable-components
```

## TreeView

![treeview_screenshot](/assets/images/treeview.png)

### Example

[Mockdata](https://github.com/findable-no/findable-components/blob/main/src/data/test-data.ts)

```
import { TreeView } from "@findable-no/findable-components"

type Category = {
	code: string;
	name: string;
	children?: Category[];
	isFile?: boolean;
};

<TreeView
	data={data as Category[]}
	handleSelection={function(selection: string[]): void {
	console.log(selection)
	//do something with the selection here
	}}
	onSelectDocument={function(selection: string): void {
	console.log(selection)
	//do something with the selection here
	}}
/>
```

### Properties

| Property         |       Type |   Default |                                                             Description |
| :--------------- | ---------: | --------: | ----------------------------------------------------------------------: |
| data             | Category[] | undefined |                                      The data the treeview will display |
| handleSelection  |   function | undefined |     The callback function which is called when selecting multiple nodes |
| onSelectDocument |   function | undefined |                                   The onClick function for "file" nodes |
| expandAll        |    boolean |     false |         Toggling this to true makes the tree view expand all "branches" |
| showEmptyCats    |    boolean |     false |                            Toggling this to true shows empty "branches" |
| selectMode       |    boolean |     false | Toggling this true make "branches" selectable. Used for handleSelection |

## License

```
MIT License

Copyright (c) 2022 Findable

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
