import React from 'react';

var Button = function Button(props) {
  return React.createElement("button", Object.assign({}, props), " ", props.children);
};

var Checkbox = function Checkbox(props) {
  return React.createElement("div", null, React.createElement("input", Object.assign({
    type: "checkbox"
  }, props)), React.createElement("label", null, "label"));
};

export { Button, Checkbox };
//# sourceMappingURL=findable-components.esm.js.map
