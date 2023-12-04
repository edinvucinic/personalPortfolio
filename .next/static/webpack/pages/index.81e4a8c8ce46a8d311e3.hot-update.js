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
    _this = undefined;

function _templateObject7() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: ", "%; /* Set the width based on the skill level */\n  height: 100%;\n  background-color: #3498db; /* Change color based on the technology */\n  border-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px; /* Adjust font size as needed */\n  transition: width 1s linear; /* Transition for the loading effect */\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 200px; /* Adjust width as needed */\n  height: 15px; /* Adjust height as needed */\n  background-color: #eee;\n  border-radius: 7px;\n  margin-bottom: 5px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  /* Your skill title styles */\n  margin-bottom: 5px;\n"]);

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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

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
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject6());
_c6 = ProgressBar;
var Progress = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject7(), function (_ref) {
  var level = _ref.level;
  return level;
});
_c7 = Progress;

var Skills = function Skills() {
  var skillsData = [{
    name: "HTML",
    level: 70
  }, {
    name: "CSS",
    level: 60
  }, {
    name: "JavaScript",
    level: 50
  }, {
    name: "React.js",
    level: 40
  }, {
    name: "Next.js",
    level: 30
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBar, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Progress, {
              level: skill.level,
              style: {
                width: "0%"
              },
              onMouseEnter: function onMouseEnter(e) {
                return e.target.style.width = "".concat(skill.level, "%");
              },
              onMouseLeave: function onMouseLeave(e) {
                return e.target.style.width = "".concat(skill.level, "%");
              },
              children: [skill.level, "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_c8 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "StyledSection");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "ProgressBarWrapper");
$RefreshReg$(_c4, "SkillBox");
$RefreshReg$(_c5, "SkillTitle");
$RefreshReg$(_c6, "ProgressBar");
$RefreshReg$(_c7, "Progress");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiUHJvZ3Jlc3NCYXIiLCJQcm9ncmVzcyIsImxldmVsIiwiU2tpbGxzIiwic2tpbGxzRGF0YSIsIm5hbWUiLCJtYXAiLCJza2lsbCIsImluZGV4Iiwid2lkdGgiLCJlIiwidGFyZ2V0Iiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxhQUFhLEdBQUdDLDhEQUFILG1CQUFuQjtLQUFNRCxhO0FBSU4sSUFBTUUsS0FBSyxHQUFHRCx5REFBSCxvQkFBWDtNQUFNQyxLO0FBSU4sSUFBTUMsa0JBQWtCLEdBQUdGLDBEQUFILG9CQUF4QjtNQUFNRSxrQjtBQU1OLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7TUFBTUcsUTtBQU1OLElBQU1DLFVBQVUsR0FBR0oseURBQUgsb0JBQWhCO01BQU1JLFU7QUFLTixJQUFNQyxXQUFXLEdBQUdMLDBEQUFILG9CQUFqQjtNQUFNSyxXO0FBV04sSUFBTUMsUUFBUSxHQUFHTiwwREFBSCxxQkFDSDtBQUFBLE1BQUdPLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQURHLENBQWQ7TUFBTUQsUTs7QUFZTixJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLE1BQU1DLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxRQUFJLEVBQUUsTUFBUjtBQUFnQkgsU0FBSyxFQUFFO0FBQXZCLEdBRGlCLEVBRWpCO0FBQUVHLFFBQUksRUFBRSxLQUFSO0FBQWVILFNBQUssRUFBRTtBQUF0QixHQUZpQixFQUdqQjtBQUFFRyxRQUFJLEVBQUUsWUFBUjtBQUFzQkgsU0FBSyxFQUFFO0FBQTdCLEdBSGlCLEVBSWpCO0FBQUVHLFFBQUksRUFBRSxVQUFSO0FBQW9CSCxTQUFLLEVBQUU7QUFBM0IsR0FKaUIsRUFLakI7QUFBRUcsUUFBSSxFQUFFLFNBQVI7QUFBbUJILFNBQUssRUFBRTtBQUExQixHQUxpQixDQUFuQjtBQVFBLHNCQUNFLDhEQUFDLGFBQUQ7QUFBQSw0QkFDRSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHRSxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw0QkFDZCw4REFBQyxRQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBLHNCQUFhRCxLQUFLLENBQUNGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxXQUFEO0FBQUEsbUNBQ0UsOERBQUMsUUFBRDtBQUNFLG1CQUFLLEVBQUVFLEtBQUssQ0FBQ0wsS0FEZjtBQUVFLG1CQUFLLEVBQUU7QUFBRU8scUJBQUssRUFBRTtBQUFULGVBRlQ7QUFHRSwwQkFBWSxFQUFFLHNCQUFDQyxDQUFEO0FBQUEsdUJBQVFBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVILEtBQWYsYUFBMEJGLEtBQUssQ0FBQ0wsS0FBaEMsTUFBUjtBQUFBLGVBSGhCO0FBSUUsMEJBQVksRUFBRSxzQkFBQ1EsQ0FBRDtBQUFBLHVCQUFRQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSCxLQUFmLGFBQTBCRixLQUFLLENBQUNMLEtBQWhDLE1BQVI7QUFBQSxlQUpoQjtBQUFBLHlCQU1HSyxLQUFLLENBQUNMLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQWVNLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0EvQkQ7O01BQU1MLE07QUFpQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODFlNGE4YzhjZTQ2YThkMzExZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgLyogWW91ciBzZWN0aW9uIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIC8qIFlvdXIgc2VjdGlvbiB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNraWxsQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNraWxsVGl0bGUgPSBzdHlsZWQuaDNgXG4gIC8qIFlvdXIgc2tpbGwgdGl0bGUgc3R5bGVzICovXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDIwMHB4OyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXG4gIGhlaWdodDogMTVweDsgLyogQWRqdXN0IGhlaWdodCBhcyBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgUHJvZ3Jlc3MgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBsZXZlbCB9KSA9PiBsZXZlbH0lOyAvKiBTZXQgdGhlIHdpZHRoIGJhc2VkIG9uIHRoZSBza2lsbCBsZXZlbCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSBjb2xvciBiYXNlZCBvbiB0aGUgdGVjaG5vbG9neSAqL1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7IC8qIEFkanVzdCBmb250IHNpemUgYXMgbmVlZGVkICovXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhcjsgLyogVHJhbnNpdGlvbiBmb3IgdGhlIGxvYWRpbmcgZWZmZWN0ICovXG5gO1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gICAgeyBuYW1lOiBcIkhUTUxcIiwgbGV2ZWw6IDcwIH0sXG4gICAgeyBuYW1lOiBcIkNTU1wiLCBsZXZlbDogNjAgfSxcbiAgICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBsZXZlbDogNTAgfSxcbiAgICB7IG5hbWU6IFwiUmVhY3QuanNcIiwgbGV2ZWw6IDQwIH0sXG4gICAgeyBuYW1lOiBcIk5leHQuanNcIiwgbGV2ZWw6IDMwIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VjdGlvbj5cbiAgICAgIDxUaXRsZT5Ta2lsbHM8L1RpdGxlPlxuICAgICAgPFByb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2tpbGxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8U2tpbGxUaXRsZT57c2tpbGwubmFtZX08L1NraWxsVGl0bGU+XG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXI+XG4gICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgIGxldmVsPXtza2lsbC5sZXZlbH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIwJVwiIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4gKGUudGFyZ2V0LnN0eWxlLndpZHRoID0gYCR7c2tpbGwubGV2ZWx9JWApfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IChlLnRhcmdldC5zdHlsZS53aWR0aCA9IGAke3NraWxsLmxldmVsfSVgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtza2lsbC5sZXZlbH0lXG4gICAgICAgICAgICAgIDwvUHJvZ3Jlc3M+XG4gICAgICAgICAgICA8L1Byb2dyZXNzQmFyPlxuICAgICAgICAgIDwvU2tpbGxCb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Qcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgPC9TdHlsZWRTZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==