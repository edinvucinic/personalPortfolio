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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: ", "%; /* Set the width based on the skill level */\n  height: 100%;\n  background-color: #3498db; /* Change color based on the technology */\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px; /* Adjust font size as needed */\n  transition: width 1s linear; /* Transition for the loading effect */\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 200px; /* Adjust width as needed */\n  height: 30px; /* Double the height */\n  background-color: #eee;\n  border-radius: 15px;\n  margin-bottom: 20px; /* Increased space between bars */\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  /* Your skill title styles */\n  margin-bottom: 10px;\n"]);

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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px; /* Adjust the padding as needed */\n"]);

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

var animateProgressBar = function animateProgressBar(progressBar, level) {
  var width = 0;
  var iterations = 0;

  var animate = function animate() {
    width++;
    progressBar.style.width = "".concat(width, "%");
    progressBar.innerText = "".concat(width, "%");

    if (width >= level) {
      width = 0;
      iterations++;
      if (iterations >= 6) return;
    }

    requestAnimationFrame(animate);
  };

  animate();
};

var Skills = function Skills() {
  _s();

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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(function (progressBar) {
      var level = parseInt(progressBar.getAttribute("data-level"));
      animateProgressBar(progressBar, level);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBar, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Progress, {
              className: "progress-bar",
              "data-level": skill.level,
              style: {
                width: "0%"
              },
              children: "0%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiUHJvZ3Jlc3NCYXIiLCJQcm9ncmVzcyIsImxldmVsIiwiYW5pbWF0ZVByb2dyZXNzQmFyIiwicHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsIml0ZXJhdGlvbnMiLCJhbmltYXRlIiwic3R5bGUiLCJpbm5lclRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJTa2lsbHMiLCJza2lsbHNEYXRhIiwibmFtZSIsInVzZUVmZmVjdCIsInByb2dyZXNzQmFycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0EsSUFBTUEsYUFBYSxHQUFHQyw4REFBSCxtQkFBbkI7S0FBTUQsYTtBQUlOLElBQU1FLEtBQUssR0FBR0QseURBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1DLGtCQUFrQixHQUFHRiwwREFBSCxvQkFBeEI7TUFBTUUsa0I7QUFPTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO01BQU1HLFE7QUFNTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFILG9CQUFoQjtNQUFNSSxVO0FBS04sSUFBTUMsV0FBVyxHQUFHTCwwREFBSCxvQkFBakI7TUFBTUssVztBQVdOLElBQU1DLFFBQVEsR0FBR04sMERBQUgscUJBQ0g7QUFBQSxNQUFHTyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FERyxDQUFkO01BQU1ELFE7O0FBWU4sSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWNGLEtBQWQsRUFBd0I7QUFDakQsTUFBSUcsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkYsU0FBSztBQUNMRCxlQUFXLENBQUNJLEtBQVosQ0FBa0JILEtBQWxCLGFBQTZCQSxLQUE3QjtBQUNBRCxlQUFXLENBQUNLLFNBQVosYUFBMkJKLEtBQTNCOztBQUNBLFFBQUlBLEtBQUssSUFBSUgsS0FBYixFQUFvQjtBQUNsQkcsV0FBSyxHQUFHLENBQVI7QUFDQUMsZ0JBQVU7QUFDVixVQUFJQSxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDdEI7O0FBQ0RJLHlCQUFxQixDQUFDSCxPQUFELENBQXJCO0FBQ0QsR0FWRDs7QUFXQUEsU0FBTztBQUNSLENBZkQ7O0FBaUJBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLFFBQUksRUFBRSxNQUFSO0FBQWdCWCxTQUFLLEVBQUU7QUFBdkIsR0FEaUIsRUFFakI7QUFBRVcsUUFBSSxFQUFFLEtBQVI7QUFBZVgsU0FBSyxFQUFFO0FBQXRCLEdBRmlCLEVBR2pCO0FBQUVXLFFBQUksRUFBRSxZQUFSO0FBQXNCWCxTQUFLLEVBQUU7QUFBN0IsR0FIaUIsRUFJakI7QUFBRVcsUUFBSSxFQUFFLFVBQVI7QUFBb0JYLFNBQUssRUFBRTtBQUEzQixHQUppQixFQUtqQjtBQUFFVyxRQUFJLEVBQUUsU0FBUjtBQUFtQlgsU0FBSyxFQUFFO0FBQTFCLEdBTGlCLENBQW5CO0FBUUFZLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixDQUFyQjtBQUVBRixnQkFBWSxDQUFDRyxPQUFiLENBQXFCLFVBQUNkLFdBQUQsRUFBaUI7QUFDcEMsVUFBTUYsS0FBSyxHQUFHaUIsUUFBUSxDQUFDZixXQUFXLENBQUNnQixZQUFaLENBQXlCLFlBQXpCLENBQUQsQ0FBdEI7QUFDQWpCLHdCQUFrQixDQUFDQyxXQUFELEVBQWNGLEtBQWQsQ0FBbEI7QUFDRCxLQUhEO0FBSUQsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNFLDhEQUFDLGFBQUQ7QUFBQSw0QkFDRSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHVSxVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw0QkFDZCw4REFBQyxRQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBLHNCQUFhRCxLQUFLLENBQUNUO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxXQUFEO0FBQUEsbUNBQ0UsOERBQUMsUUFBRDtBQUNFLHVCQUFTLEVBQUMsY0FEWjtBQUVFLDRCQUFZUyxLQUFLLENBQUNwQixLQUZwQjtBQUdFLG1CQUFLLEVBQUU7QUFBRUcscUJBQUssRUFBRTtBQUFULGVBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBZWtCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F2Q0Q7O0dBQU1aLE07O01BQUFBLE07QUF5Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzlhZjMwYjg0MmYxN2FiN2VhNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgLyogWW91ciBzZWN0aW9uIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIC8qIFlvdXIgc2VjdGlvbiB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4OyAvKiBBZGp1c3QgdGhlIHBhZGRpbmcgYXMgbmVlZGVkICovXG5gO1xuXG5jb25zdCBTa2lsbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLmgzYFxuICAvKiBZb3VyIHNraWxsIHRpdGxlIHN0eWxlcyAqL1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjAwcHg7IC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgaGVpZ2h0OiAzMHB4OyAvKiBEb3VibGUgdGhlIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBJbmNyZWFzZWQgc3BhY2UgYmV0d2VlbiBiYXJzICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgUHJvZ3Jlc3MgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBsZXZlbCB9KSA9PiBsZXZlbH0lOyAvKiBTZXQgdGhlIHdpZHRoIGJhc2VkIG9uIHRoZSBza2lsbCBsZXZlbCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSBjb2xvciBiYXNlZCBvbiB0aGUgdGVjaG5vbG9neSAqL1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBsaW5lYXI7IC8qIFRyYW5zaXRpb24gZm9yIHRoZSBsb2FkaW5nIGVmZmVjdCAqL1xuYDtcblxuY29uc3QgYW5pbWF0ZVByb2dyZXNzQmFyID0gKHByb2dyZXNzQmFyLCBsZXZlbCkgPT4ge1xuICBsZXQgd2lkdGggPSAwO1xuICBsZXQgaXRlcmF0aW9ucyA9IDA7XG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgd2lkdGgrKztcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3dpZHRofSVgO1xuICAgIHByb2dyZXNzQmFyLmlubmVyVGV4dCA9IGAke3dpZHRofSVgO1xuICAgIGlmICh3aWR0aCA+PSBsZXZlbCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gNikgcmV0dXJuO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn07XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgY29uc3Qgc2tpbGxzRGF0YSA9IFtcbiAgICB7IG5hbWU6IFwiSFRNTFwiLCBsZXZlbDogNzAgfSxcbiAgICB7IG5hbWU6IFwiQ1NTXCIsIGxldmVsOiA2MCB9LFxuICAgIHsgbmFtZTogXCJKYXZhU2NyaXB0XCIsIGxldmVsOiA1MCB9LFxuICAgIHsgbmFtZTogXCJSZWFjdC5qc1wiLCBsZXZlbDogNDAgfSxcbiAgICB7IG5hbWU6IFwiTmV4dC5qc1wiLCBsZXZlbDogMzAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtYmFyXCIpO1xuXG4gICAgcHJvZ3Jlc3NCYXJzLmZvckVhY2goKHByb2dyZXNzQmFyKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IHBhcnNlSW50KHByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZShcImRhdGEtbGV2ZWxcIikpO1xuICAgICAgYW5pbWF0ZVByb2dyZXNzQmFyKHByb2dyZXNzQmFyLCBsZXZlbCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTZWN0aW9uPlxuICAgICAgPFRpdGxlPlNraWxsczwvVGl0bGU+XG4gICAgICA8UHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICAgICB7c2tpbGxzRGF0YS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTa2lsbEJveCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxTa2lsbFRpdGxlPntza2lsbC5uYW1lfTwvU2tpbGxUaXRsZT5cbiAgICAgICAgICAgIDxQcm9ncmVzc0Jhcj5cbiAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICBkYXRhLWxldmVsPXtza2lsbC5sZXZlbH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIwJVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAwJVxuICAgICAgICAgICAgICA8L1Byb2dyZXNzPlxuICAgICAgICAgICAgPC9Qcm9ncmVzc0Jhcj5cbiAgICAgICAgICA8L1NraWxsQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgIDwvU3R5bGVkU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdLCJzb3VyY2VSb290IjoiIn0=