/** @preserve
  * package: example-code-dom v1.0.2
  * file: dist/example-code-dom.umd.js
  * homepage: https://github.com/zenflow/example-code/tree/master/packages/example-code-dom#readme
  * license: MIT
  **/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.exampleCodeDom = {})));
}(this, (function (exports) { 'use strict';

  function enhanceElement(element) {
    if (String(element.tagName).toUpperCase() !== 'CODE') {
      throw new TypeError('element must be a <code> element');
    }
    element.classList.contains('executable') && element.classList.contains('js') && executableJs(element);
  }

  function executableJs(element) {
    var code = element.dataset.compiledCode || element.innerHTML;

    element.prepend(Object.assign(document.createElement('button'), {
      innerHTML: '▶',
      style: 'float: right',
      onclick: function onclick() {
        eval(code); // eslint-disable-line no-eval
      }
    }));
  }

  function enhanceAll() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.querySelectorAll('code')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        enhanceElement(element);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  exports.enhanceElement = enhanceElement;
  exports.enhanceAll = enhanceAll;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=example-code-dom.umd.js.map
