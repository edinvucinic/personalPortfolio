self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\evuci\\OneDrive\\Desktop\\portfolio_website-main\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject7() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 24px;\n  color: #333;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #eee;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  /* Your skill title styles */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  /* Your section title styles */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  /* Your section styles */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.section(_templateObject());
_c = StyledSection;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h2(_templateObject2());
_c2 = Title;
var ProgressBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject3());
_c3 = ProgressBarWrapper;
var SkillBox = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject4());
_c4 = SkillBox;
var SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h3(_templateObject5());
_c5 = SkillTitle;
var CircleProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject6());
var ProgressBarText = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject7());
_c6 = ProgressBarText;

var Skills = function Skills() {
  _s();

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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var circleProgressBars = document.querySelectorAll(".circle-progress-bar");
    circleProgressBars.forEach(function (circle) {
      var level = circle.getAttribute("data-level");
      var circumference = 2 * Math.PI * circle.r.baseVal.value;
      var offset = circumference - level / 100 * circumference;
      circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
      circle.style.strokeDashoffset = circumference;
      circle.style.transition = "stroke-dashoffset 1.5s ease-in-out";
      setTimeout(function () {
        circle.style.strokeDashoffset = offset;
      }, 100);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            className: "circle-progress-bar",
            width: "120",
            height: "120",
            "data-level": skill.level / 100 * 360,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
              className: "progress",
              cx: "60",
              cy: "60",
              r: "54",
              fill: "none",
              stroke: "#3498db",
              strokeWidth: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarText, {
            children: [skill.level, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_s(Skills, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c7 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "StyledSection");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "ProgressBarWrapper");
$RefreshReg$(_c4, "SkillBox");
$RefreshReg$(_c5, "SkillTitle");
$RefreshReg$(_c6, "ProgressBarText");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiQ2lyY2xlUHJvZ3Jlc3NCYXIiLCJQcm9ncmVzc0JhclRleHQiLCJTa2lsbHMiLCJza2lsbHNEYXRhIiwibmFtZSIsImxldmVsIiwidXNlRWZmZWN0IiwiY2lyY2xlUHJvZ3Jlc3NCYXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNpcmNsZSIsImdldEF0dHJpYnV0ZSIsImNpcmN1bWZlcmVuY2UiLCJNYXRoIiwiUEkiLCJyIiwiYmFzZVZhbCIsInZhbHVlIiwib2Zmc2V0Iiwic3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwidHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJtYXAiLCJza2lsbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLGFBQWEsR0FBR0MsOERBQUgsbUJBQW5CO0tBQU1ELGE7QUFJTixJQUFNRSxLQUFLLEdBQUdELHlEQUFILG9CQUFYO01BQU1DLEs7QUFJTixJQUFNQyxrQkFBa0IsR0FBR0YsMERBQUgsb0JBQXhCO01BQU1FLGtCO0FBS04sSUFBTUMsUUFBUSxHQUFHSCwwREFBSCxvQkFBZDtNQUFNRyxRO0FBTU4sSUFBTUMsVUFBVSxHQUFHSix5REFBSCxvQkFBaEI7TUFBTUksVTtBQUlOLElBQU1DLGlCQUFpQixHQUFHTCwwREFBSCxvQkFBdkI7QUFZQSxJQUFNTSxlQUFlLEdBQUdO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QUE0RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjFkZTEyYWE5Y2I2Y2NjMzkzMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAvKiBZb3VyIHNlY3Rpb24gc3R5bGVzICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgLyogWW91ciBzZWN0aW9uIHRpdGxlIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgU2tpbGxCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU2tpbGxUaXRsZSA9IHN0eWxlZC5oM2BcbiAgLyogWW91ciBza2lsbCB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IENpcmNsZVByb2dyZXNzQmFyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzO1xuYDtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCBza2lsbHNEYXRhID0gW1xuICAgIHsgbmFtZTogXCJIVE1MXCIsIGxldmVsOiA5MCB9LFxuICAgIHsgbmFtZTogXCJDU1NcIiwgbGV2ZWw6IDg1IH0sXG4gICAgeyBuYW1lOiBcIkphdmFTY3JpcHRcIiwgbGV2ZWw6IDgwIH0sXG4gICAgeyBuYW1lOiBcIlJlYWN0LmpzXCIsIGxldmVsOiA3NSB9LFxuICAgIHsgbmFtZTogXCJOZXh0LmpzXCIsIGxldmVsOiA3MCB9LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2lyY2xlUHJvZ3Jlc3NCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmNpcmNsZS1wcm9ncmVzcy1iYXJcIlxuICAgICk7XG5cbiAgICBjaXJjbGVQcm9ncmVzc0JhcnMuZm9yRWFjaCgoY2lyY2xlKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IGNpcmNsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxldmVsXCIpO1xuICAgICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogY2lyY2xlLnIuYmFzZVZhbC52YWx1ZTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAobGV2ZWwgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcblxuICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke2NpcmN1bWZlcmVuY2V9ICR7Y2lyY3VtZmVyZW5jZX1gO1xuICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBjaXJjdW1mZXJlbmNlO1xuICAgICAgY2lyY2xlLnN0eWxlLnRyYW5zaXRpb24gPSBcInN0cm9rZS1kYXNob2Zmc2V0IDEuNXMgZWFzZS1pbi1vdXRcIjtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNlY3Rpb24+XG4gICAgICA8VGl0bGU+U2tpbGxzPC9UaXRsZT5cbiAgICAgIDxQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgICAgIHtza2lsbHNEYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNraWxsQm94IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFNraWxsVGl0bGU+e3NraWxsLm5hbWV9PC9Ta2lsbFRpdGxlPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtcHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMjBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxuICAgICAgICAgICAgICBkYXRhLWxldmVsPXsoc2tpbGwubGV2ZWwgLyAxMDApICogMzYwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICAgIGN4PVwiNjBcIlxuICAgICAgICAgICAgICAgIGN5PVwiNjBcIlxuICAgICAgICAgICAgICAgIHI9XCI1NFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMzNDk4ZGJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJUZXh0Pntza2lsbC5sZXZlbH0lPC9Qcm9ncmVzc0JhclRleHQ+XG4gICAgICAgICAgPC9Ta2lsbEJveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2dyZXNzQmFyV3JhcHBlcj5cbiAgICA8L1N0eWxlZFNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9