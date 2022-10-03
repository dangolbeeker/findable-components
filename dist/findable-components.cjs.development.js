'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button = function Button(props) {
  return React.createElement("button", Object.assign({}, props), " ", props.children);
};

var Checkbox = function Checkbox(props) {
  return React.createElement("div", null, React.createElement("input", Object.assign({
    type: "checkbox"
  }, props)), React.createElement("label", null, "label"));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
//# sourceMappingURL=findable-components.cjs.development.js.map
