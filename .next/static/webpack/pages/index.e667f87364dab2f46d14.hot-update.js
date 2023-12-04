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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 120px;\n  height: 120px;\n\n  circle {\n    fill: none;\n    stroke: conic-gradient(#eee ", "%, transparent ", "%);\n    stroke-width: 10;\n    stroke-linecap: round;\n    transform: rotate(-90deg);\n    transform-origin: 50% 50%;\n    transition: stroke-dashoffset 0.5s;\n  }\n"]);

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



var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section(_templateObject());
_c = StyledSection;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h2(_templateObject2());
_c2 = Title;
var ProgressBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject3());
_c3 = ProgressBarWrapper;
var SkillBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject4());
_c4 = SkillBox;
var SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h3(_templateObject5());
_c5 = SkillTitle;
var CircleProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.svg(_templateObject6(), function (_ref) {
  var level = _ref.level;
  return level;
}, function (_ref2) {
  var level = _ref2.level;
  return level;
});
_c6 = CircleProgressBar;
var ProgressBarText = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span(_templateObject7());
_c7 = ProgressBarText;

var Skills = function Skills() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var circleProgressBars = document.querySelectorAll('svg circle');
    circleProgressBars.forEach(function (circle) {
      var level = circle.getAttribute("data-level");
      var radius = parseFloat(circle.getAttribute("r"));
      var circumference = 2 * Math.PI * radius;
      var offset = circumference - level / 100 * circumference;
      circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
      circle.style.strokeDashoffset = offset;
    });
  }, []);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CircleProgressBar, {
            level: skill.level / 100 * 360,
            viewBox: "0 0 100 100",
            "data-level": skill.level,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
              cx: "50",
              cy: "50",
              r: "40"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarText, {
            children: skill.level
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, _this);
};

_s(Skills, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c8 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "StyledSection");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "ProgressBarWrapper");
$RefreshReg$(_c4, "SkillBox");
$RefreshReg$(_c5, "SkillTitle");
$RefreshReg$(_c6, "CircleProgressBar");
$RefreshReg$(_c7, "ProgressBarText");
$RefreshReg$(_c8, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiQ2lyY2xlUHJvZ3Jlc3NCYXIiLCJsZXZlbCIsIlByb2dyZXNzQmFyVGV4dCIsIlNraWxscyIsInVzZUVmZmVjdCIsImNpcmNsZVByb2dyZXNzQmFycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaXJjbGUiLCJnZXRBdHRyaWJ1dGUiLCJyYWRpdXMiLCJwYXJzZUZsb2F0IiwiY2lyY3VtZmVyZW5jZSIsIk1hdGgiLCJQSSIsIm9mZnNldCIsInN0eWxlIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsInNraWxsc0RhdGEiLCJuYW1lIiwibWFwIiwic2tpbGwiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDhEQUFILG1CQUFuQjtLQUFNRCxhO0FBSU4sSUFBTUUsS0FBSyxHQUFHRCx5REFBSCxvQkFBWDtNQUFNQyxLO0FBSU4sSUFBTUMsa0JBQWtCLEdBQUdGLDBEQUFILG9CQUF4QjtNQUFNRSxrQjtBQUtOLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7TUFBTUcsUTtBQU1OLElBQU1DLFVBQVUsR0FBR0oseURBQUgsb0JBQWhCO01BQU1JLFU7QUFJTixJQUFNQyxpQkFBaUIsR0FBR0wsMERBQUgscUJBTVc7QUFBQSxNQUFHTSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FOWCxF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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgLyogWW91ciBzZWN0aW9uIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIC8qIFlvdXIgc2VjdGlvbiB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IFNraWxsQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNraWxsVGl0bGUgPSBzdHlsZWQuaDNgXG4gIC8qIFlvdXIgc2tpbGwgdGl0bGUgc3R5bGVzICovXG5gO1xuXG5jb25zdCBDaXJjbGVQcm9ncmVzc0JhciA9IHN0eWxlZC5zdmdgXG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcblxuICBjaXJjbGUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiBjb25pYy1ncmFkaWVudCgjZWVlICR7KHsgbGV2ZWwgfSkgPT4gbGV2ZWx9JSwgdHJhbnNwYXJlbnQgJHsoeyBsZXZlbCB9KSA9PiBsZXZlbH0lKTtcbiAgICBzdHJva2Utd2lkdGg6IDEwO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC41cztcbiAgfVxuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG5gO1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2lyY2xlUHJvZ3Jlc3NCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnIGNpcmNsZScpO1xuXG4gICAgY2lyY2xlUHJvZ3Jlc3NCYXJzLmZvckVhY2goKGNpcmNsZSkgPT4ge1xuICAgICAgY29uc3QgbGV2ZWwgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1sZXZlbFwiKTtcbiAgICAgIGNvbnN0IHJhZGl1cyA9IHBhcnNlRmxvYXQoY2lyY2xlLmdldEF0dHJpYnV0ZShcInJcIikpO1xuICAgICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChsZXZlbCAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlO1xuXG4gICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7Y2lyY3VtZmVyZW5jZX0gJHtjaXJjdW1mZXJlbmNlfWA7XG4gICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG9mZnNldDtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gICAgeyBuYW1lOiBcIkhUTUxcIiwgbGV2ZWw6IDkwIH0sXG4gICAgeyBuYW1lOiBcIkNTU1wiLCBsZXZlbDogODUgfSxcbiAgICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBsZXZlbDogODAgfSxcbiAgICB7IG5hbWU6IFwiUmVhY3QuanNcIiwgbGV2ZWw6IDc1IH0sXG4gICAgeyBuYW1lOiBcIk5leHQuanNcIiwgbGV2ZWw6IDcwIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VjdGlvbj5cbiAgICAgIDxUaXRsZT5Ta2lsbHM8L1RpdGxlPlxuICAgICAgPFByb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2tpbGxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8U2tpbGxUaXRsZT57c2tpbGwubmFtZX08L1NraWxsVGl0bGU+XG4gICAgICAgICAgICA8Q2lyY2xlUHJvZ3Jlc3NCYXIgbGV2ZWw9eyhza2lsbC5sZXZlbCAvIDEwMCkgKiAzNjB9IHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGRhdGEtbGV2ZWw9e3NraWxsLmxldmVsfT5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0MFwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9DaXJjbGVQcm9ncmVzc0Jhcj5cbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclRleHQ+e3NraWxsLmxldmVsfTwvUHJvZ3Jlc3NCYXJUZXh0PlxuICAgICAgICAgIDwvU2tpbGxCb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Qcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgPC9TdHlsZWRTZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==