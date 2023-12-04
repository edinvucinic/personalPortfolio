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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: conic-gradient(\n    #eee ", "%,\n    transparent ", "%\n  );\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: loadingAnimation 1.5s infinite linear;\n  transform-origin: center;\n\n  @keyframes loadingAnimation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);

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
var CircleProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject6(), function (_ref) {
  var level = _ref.level;
  return level;
}, function (_ref2) {
  var level = _ref2.level;
  return level;
});
_c6 = CircleProgressBar;
var ProgressBarText = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject7());
_c7 = ProgressBarText;

var Skills = function Skills() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loaded = _useState[0],
      setLoaded = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // Simulating loading effect
    var timeout = setTimeout(function () {
      setLoaded(true);
    }, 1000);
    return function () {
      return clearTimeout(timeout);
    };
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
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CircleProgressBar, {
            level: skill.level / 100 * 360,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarText, {
              children: skill.level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, _this);
};

_s(Skills, "I8RUn14npbk54TheiKdNt4wCpsU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiQ2lyY2xlUHJvZ3Jlc3NCYXIiLCJsZXZlbCIsIlByb2dyZXNzQmFyVGV4dCIsIlNraWxscyIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJza2lsbHNEYXRhIiwibmFtZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUEsSUFBTUEsYUFBYSxHQUFHQyw4REFBSCxtQkFBbkI7S0FBTUQsYTtBQUlOLElBQU1FLEtBQUssR0FBR0QseURBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1DLGtCQUFrQixHQUFHRiwwREFBSCxvQkFBeEI7TUFBTUUsa0I7QUFLTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO01BQU1HLFE7QUFNTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFILG9CQUFoQjtNQUFNSSxVO0FBSU4sSUFBTUMsaUJBQWlCLEdBQUdMLDBEQUFILHFCQU1aO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBTlksRUFPTDtBQUFBLE1BQUdBLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQVBLLENBQXZCO01BQU1ELGlCO0FBMEJOLElBQU1FLGVBQWUsR0FBR1AsMkRBQUgsb0JBQXJCO01BQU1PLGU7O0FBS04sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFHbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMvQkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRnlCLEVBRXZCLElBRnVCLENBQTFCO0FBSUEsV0FBTztBQUFBLGFBQU1JLFlBQVksQ0FBQ0YsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsTUFBTUcsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLFFBQUksRUFBRSxNQUFSO0FBQWdCWCxTQUFLLEVBQUU7QUFBdkIsR0FEaUIsRUFFakI7QUFBRVcsUUFBSSxFQUFFLEtBQVI7QUFBZVgsU0FBSyxFQUFFO0FBQXRCLEdBRmlCLEVBR2pCO0FBQUVXLFFBQUksRUFBRSxZQUFSO0FBQXNCWCxTQUFLLEVBQUU7QUFBN0IsR0FIaUIsRUFJakI7QUFBRVcsUUFBSSxFQUFFLFVBQVI7QUFBb0JYLFNBQUssRUFBRTtBQUEzQixHQUppQixFQUtqQjtBQUFFVyxRQUFJLEVBQUUsU0FBUjtBQUFtQlgsU0FBSyxFQUFFO0FBQTFCLEdBTGlCLENBQW5CO0FBUUEsc0JBQ0UsOERBQUMsYUFBRDtBQUFBLDRCQUNFLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dVLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNkLDhEQUFDLFFBQUQ7QUFBQSxrQ0FDRSw4REFBQyxVQUFEO0FBQUEsc0JBQWFELEtBQUssQ0FBQ0Y7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGlCQUFEO0FBQW1CLGlCQUFLLEVBQUdFLEtBQUssQ0FBQ2IsS0FBTixHQUFjLEdBQWYsR0FBc0IsR0FBaEQ7QUFBQSxtQ0FDRSw4REFBQyxlQUFEO0FBQUEsd0JBQWtCYSxLQUFLLENBQUNiO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBZWMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbkNEOztHQUFNWixNOztNQUFBQSxNO0FBcUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwYmQ0MjFiMDNjY2EwOGYzN2E3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIC8qIFlvdXIgc2VjdGlvbiBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICAvKiBZb3VyIHNlY3Rpb24gdGl0bGUgc3R5bGVzICovXG5gO1xuXG5jb25zdCBQcm9ncmVzc0JhcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBTa2lsbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLmgzYFxuICAvKiBZb3VyIHNraWxsIHRpdGxlIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgQ2lyY2xlUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcbiAgICAjZWVlICR7KHsgbGV2ZWwgfSkgPT4gbGV2ZWx9JSxcbiAgICB0cmFuc3BhcmVudCAkeyh7IGxldmVsIH0pID0+IGxldmVsfSVcbiAgKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgbGluZWFyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG5cbiAgQGtleWZyYW1lcyBsb2FkaW5nQW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG5gO1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTaW11bGF0aW5nIGxvYWRpbmcgZWZmZWN0XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gICAgeyBuYW1lOiBcIkhUTUxcIiwgbGV2ZWw6IDkwIH0sXG4gICAgeyBuYW1lOiBcIkNTU1wiLCBsZXZlbDogODUgfSxcbiAgICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBsZXZlbDogODAgfSxcbiAgICB7IG5hbWU6IFwiUmVhY3QuanNcIiwgbGV2ZWw6IDc1IH0sXG4gICAgeyBuYW1lOiBcIk5leHQuanNcIiwgbGV2ZWw6IDcwIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VjdGlvbj5cbiAgICAgIDxUaXRsZT5Ta2lsbHM8L1RpdGxlPlxuICAgICAgPFByb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2tpbGxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8U2tpbGxUaXRsZT57c2tpbGwubmFtZX08L1NraWxsVGl0bGU+XG4gICAgICAgICAgICA8Q2lyY2xlUHJvZ3Jlc3NCYXIgbGV2ZWw9eyhza2lsbC5sZXZlbCAvIDEwMCkgKiAzNjB9PlxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJUZXh0Pntza2lsbC5sZXZlbH08L1Byb2dyZXNzQmFyVGV4dD5cbiAgICAgICAgICAgIDwvQ2lyY2xlUHJvZ3Jlc3NCYXI+XG4gICAgICAgICAgPC9Ta2lsbEJveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2dyZXNzQmFyV3JhcHBlcj5cbiAgICA8L1N0eWxlZFNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9