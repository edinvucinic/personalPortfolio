self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\evuci\\OneDrive\\Desktop\\portfolio_website-main\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;

function _templateObject6() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: absolute;\n  top: -8px;\n  left: ", ";\n  transform: translateX(-50%);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #3498db;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", ";\n  background-color: #3498db;\n  border-radius: 4px;\n  transition: width 1s ease-in-out;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  width: 100%;\n  height: 20px;\n  background-color: #ddd;\n  border-radius: 4px;\n  margin-bottom: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-bottom: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ProgressBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject());
_c = ProgressBarWrapper;
var SkillBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject2());
_c2 = SkillBox;
var SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h3(_templateObject3());
_c3 = SkillTitle;
var ProgressContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject4());
_c4 = ProgressContainer;
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject5(), function (_ref) {
  var level = _ref.level;
  return "".concat(level, "%");
});
_c5 = ProgressBar;
var Loader = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject6(), function (_ref2) {
  var level = _ref2.level;
  return "".concat(level, "%");
});
_c6 = Loader;

var Skills = function Skills() {
  var skillsData = [{
    name: "HTML",
    level: 90
  }, {
    name: "CSS",
    level: 85
  }, {
    name: "JavaScript",
    level: 80
  }, {
    name: "React.js",
    level: 75
  }, {
    name: "Next.js",
    level: 70
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionTitle, {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBar, {
              level: skill.level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {
              level: skill.level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_c7 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "ProgressBarWrapper");
$RefreshReg$(_c2, "SkillBox");
$RefreshReg$(_c3, "SkillTitle");
$RefreshReg$(_c4, "ProgressContainer");
$RefreshReg$(_c5, "ProgressBar");
$RefreshReg$(_c6, "Loader");
$RefreshReg$(_c7, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwic3R5bGVkIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiUHJvZ3Jlc3NDb250YWluZXIiLCJQcm9ncmVzc0JhciIsImxldmVsIiwiTG9hZGVyIiwiU2tpbGxzIiwic2tpbGxzRGF0YSIsIm5hbWUiLCJtYXAiLCJza2lsbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsMERBQUgsbUJBQXhCO0tBQU1ELGtCO0FBTU4sSUFBTUUsUUFBUSxHQUFHRCwwREFBSCxvQkFBZDtNQUFNQyxRO0FBUU4sSUFBTUMsVUFBVSxHQUFHRix5REFBSCxvQkFBaEI7TUFBTUUsVTtBQUlOLElBQU1DLGlCQUFpQixHQUFHSCwwREFBSCxvQkFBdkI7TUFBTUcsaUI7QUFTTixJQUFNQyxXQUFXLEdBQUdKLDBEQUFILHFCQUtOO0FBQUEsTUFBR0ssS0FBSCxRQUFHQSxLQUFIO0FBQUEsbUJBQWtCQSxLQUFsQjtBQUFBLENBTE0sQ0FBakI7TUFBTUQsVztBQVdOLElBQU1FLE1BQU0sR0FBR04sMERBQUgscUJBR0Y7QUFBQSxNQUFHSyxLQUFILFNBQUdBLEtBQUg7QUFBQSxtQkFBa0JBLEtBQWxCO0FBQUEsQ0FIRSxDQUFaO01BQU1DLE07O0FBV04sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsUUFBSSxFQUFFLE1BQVI7QUFBZ0JKLFNBQUssRUFBRTtBQUF2QixHQURpQixFQUVqQjtBQUFFSSxRQUFJLEVBQUUsS0FBUjtBQUFlSixTQUFLLEVBQUU7QUFBdEIsR0FGaUIsRUFHakI7QUFBRUksUUFBSSxFQUFFLFlBQVI7QUFBc0JKLFNBQUssRUFBRTtBQUE3QixHQUhpQixFQUlqQjtBQUFFSSxRQUFJLEVBQUUsVUFBUjtBQUFvQkosU0FBSyxFQUFFO0FBQTNCLEdBSmlCLEVBS2pCO0FBQUVJLFFBQUksRUFBRSxTQUFSO0FBQW1CSixTQUFLLEVBQUU7QUFBMUIsR0FMaUIsQ0FBbkI7QUFRQSxzQkFDRSw4REFBQyxPQUFEO0FBQUEsNEJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0JBQUQ7QUFBQSxnQkFDR0csVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ2QsOERBQUMsUUFBRDtBQUFBLGtDQUNFLDhEQUFDLFVBQUQ7QUFBQSxzQkFBYUQsS0FBSyxDQUFDRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsaUJBQUQ7QUFBQSxvQ0FDRSw4REFBQyxXQUFEO0FBQWEsbUJBQUssRUFBRUUsS0FBSyxDQUFDTjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsTUFBRDtBQUFRLG1CQUFLLEVBQUVNLEtBQUssQ0FBQ047QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFlTyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBYUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0ExQkQ7O01BQU1MLE07QUE0Qk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWQzNmYzZTBlOGMyYjVhZWE0N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBQcm9ncmVzc0JhcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgU2tpbGxCb3ggPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLmgzYFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5gO1xuXG5jb25zdCBQcm9ncmVzc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHsoeyBsZXZlbCB9KSA9PiBgJHtsZXZlbH0lYH07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XG5gO1xuXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogJHsoeyBsZXZlbCB9KSA9PiBgJHtsZXZlbH0lYH07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuYDtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCBza2lsbHNEYXRhID0gW1xuICAgIHsgbmFtZTogXCJIVE1MXCIsIGxldmVsOiA5MCB9LFxuICAgIHsgbmFtZTogXCJDU1NcIiwgbGV2ZWw6IDg1IH0sXG4gICAgeyBuYW1lOiBcIkphdmFTY3JpcHRcIiwgbGV2ZWw6IDgwIH0sXG4gICAgeyBuYW1lOiBcIlJlYWN0LmpzXCIsIGxldmVsOiA3NSB9LFxuICAgIHsgbmFtZTogXCJOZXh0LmpzXCIsIGxldmVsOiA3MCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8U2VjdGlvblRpdGxlPlNraWxsczwvU2VjdGlvblRpdGxlPlxuICAgICAgPFByb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2tpbGxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8U2tpbGxUaXRsZT57c2tpbGwubmFtZX08L1NraWxsVGl0bGU+XG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb250YWluZXI+XG4gICAgICAgICAgICAgIDxQcm9ncmVzc0JhciBsZXZlbD17c2tpbGwubGV2ZWx9PjwvUHJvZ3Jlc3NCYXI+XG4gICAgICAgICAgICAgIDxMb2FkZXIgbGV2ZWw9e3NraWxsLmxldmVsfT48L0xvYWRlcj5cbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250YWluZXI+XG4gICAgICAgICAgPC9Ta2lsbEJveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdLCJzb3VyY2VSb290IjoiIn0=