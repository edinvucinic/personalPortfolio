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

  var animateProgressBar = function animateProgressBar(progressBar, level) {
    var width = 0;
    var interval = setInterval(function () {
      if (width >= level) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = "".concat(width, "%");
        progressBar.innerText = "".concat(width, "%");
      }
    }, 10);
  };

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
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
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
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiUHJvZ3Jlc3NCYXIiLCJQcm9ncmVzcyIsImxldmVsIiwiU2tpbGxzIiwic2tpbGxzRGF0YSIsIm5hbWUiLCJhbmltYXRlUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0JhciIsIndpZHRoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSIsImlubmVyVGV4dCIsInVzZUVmZmVjdCIsInByb2dyZXNzQmFycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0EsSUFBTUEsYUFBYSxHQUFHQyw4REFBSCxtQkFBbkI7S0FBTUQsYTtBQUlOLElBQU1FLEtBQUssR0FBR0QseURBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1DLGtCQUFrQixHQUFHRiwwREFBSCxvQkFBeEI7TUFBTUUsa0I7QUFPTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO01BQU1HLFE7QUFNTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFILG9CQUFoQjtNQUFNSSxVO0FBS04sSUFBTUMsV0FBVyxHQUFHTCwwREFBSCxvQkFBakI7TUFBTUssVztBQVdOLElBQU1DLFFBQVEsR0FBR04sMERBQUgscUJBQ0g7QUFBQSxNQUFHTyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FERyxDQUFkO01BQU1ELFE7O0FBWU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsUUFBSSxFQUFFLE1BQVI7QUFBZ0JILFNBQUssRUFBRTtBQUF2QixHQURpQixFQUVqQjtBQUFFRyxRQUFJLEVBQUUsS0FBUjtBQUFlSCxTQUFLLEVBQUU7QUFBdEIsR0FGaUIsRUFHakI7QUFBRUcsUUFBSSxFQUFFLFlBQVI7QUFBc0JILFNBQUssRUFBRTtBQUE3QixHQUhpQixFQUlqQjtBQUFFRyxRQUFJLEVBQUUsVUFBUjtBQUFvQkgsU0FBSyxFQUFFO0FBQTNCLEdBSmlCLEVBS2pCO0FBQUVHLFFBQUksRUFBRSxTQUFSO0FBQW1CSCxTQUFLLEVBQUU7QUFBMUIsR0FMaUIsQ0FBbkI7O0FBUUEsTUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWNMLEtBQWQsRUFBd0I7QUFDakQsUUFBSU0sS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDLFVBQUlGLEtBQUssSUFBSU4sS0FBYixFQUFvQjtBQUNsQlMscUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELGFBQUs7QUFDTEQsbUJBQVcsQ0FBQ0ssS0FBWixDQUFrQkosS0FBbEIsYUFBNkJBLEtBQTdCO0FBQ0FELG1CQUFXLENBQUNNLFNBQVosYUFBMkJMLEtBQTNCO0FBQ0Q7QUFDRixLQVIyQixFQVF6QixFQVJ5QixDQUE1QjtBQVNELEdBWEQ7O0FBYUFNLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixDQUFyQjtBQUVBRixnQkFBWSxDQUFDRyxPQUFiLENBQXFCLFVBQUNYLFdBQUQsRUFBaUI7QUFDcEMsVUFBTUwsS0FBSyxHQUFHaUIsUUFBUSxDQUFDWixXQUFXLENBQUNhLFlBQVosQ0FBeUIsWUFBekIsQ0FBRCxDQUF0QjtBQUNBZCx3QkFBa0IsQ0FBQ0MsV0FBRCxFQUFjTCxLQUFkLENBQWxCO0FBQ0QsS0FIRDtBQUlELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRSw4REFBQyxhQUFEO0FBQUEsNEJBQ0UsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0JBQUQ7QUFBQSxnQkFDR0UsVUFBVSxDQUFDaUIsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNkLDhEQUFDLFFBQUQ7QUFBQSxrQ0FDRSw4REFBQyxVQUFEO0FBQUEsc0JBQWFELEtBQUssQ0FBQ2pCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxXQUFEO0FBQUEsbUNBQ0UsOERBQUMsUUFBRDtBQUNFLHVCQUFTLEVBQUMsY0FEWjtBQUVFLDRCQUFZaUIsS0FBSyxDQUFDcEIsS0FGcEI7QUFHRSxtQkFBSyxFQUFFO0FBQUVNLHFCQUFLLEVBQUU7QUFBVCxlQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQWVlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0FwREQ7O0dBQU1wQixNOztNQUFBQSxNO0FBc0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxMzNhMzIyYTY3YzM2NTFmZTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgLyogWW91ciBzZWN0aW9uIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIC8qIFlvdXIgc2VjdGlvbiB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4OyAvKiBBZGp1c3QgdGhlIHBhZGRpbmcgYXMgbmVlZGVkICovXG5gO1xuXG5jb25zdCBTa2lsbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLmgzYFxuICAvKiBZb3VyIHNraWxsIHRpdGxlIHN0eWxlcyAqL1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjAwcHg7IC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgaGVpZ2h0OiAzMHB4OyAvKiBEb3VibGUgdGhlIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBJbmNyZWFzZWQgc3BhY2UgYmV0d2VlbiBiYXJzICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgUHJvZ3Jlc3MgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBsZXZlbCB9KSA9PiBsZXZlbH0lOyAvKiBTZXQgdGhlIHdpZHRoIGJhc2VkIG9uIHRoZSBza2lsbCBsZXZlbCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSBjb2xvciBiYXNlZCBvbiB0aGUgdGVjaG5vbG9neSAqL1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBsaW5lYXI7IC8qIFRyYW5zaXRpb24gZm9yIHRoZSBsb2FkaW5nIGVmZmVjdCAqL1xuYDtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCBza2lsbHNEYXRhID0gW1xuICAgIHsgbmFtZTogXCJIVE1MXCIsIGxldmVsOiA3MCB9LFxuICAgIHsgbmFtZTogXCJDU1NcIiwgbGV2ZWw6IDYwIH0sXG4gICAgeyBuYW1lOiBcIkphdmFTY3JpcHRcIiwgbGV2ZWw6IDUwIH0sXG4gICAgeyBuYW1lOiBcIlJlYWN0LmpzXCIsIGxldmVsOiA0MCB9LFxuICAgIHsgbmFtZTogXCJOZXh0LmpzXCIsIGxldmVsOiAzMCB9LFxuICBdO1xuXG4gIGNvbnN0IGFuaW1hdGVQcm9ncmVzc0JhciA9IChwcm9ncmVzc0JhciwgbGV2ZWwpID0+IHtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHdpZHRoID49IGxldmVsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGgrKztcbiAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aH0lYDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuaW5uZXJUZXh0ID0gYCR7d2lkdGh9JWA7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1iYXJcIik7XG5cbiAgICBwcm9ncmVzc0JhcnMuZm9yRWFjaCgocHJvZ3Jlc3NCYXIpID0+IHtcbiAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQocHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1sZXZlbFwiKSk7XG4gICAgICBhbmltYXRlUHJvZ3Jlc3NCYXIocHJvZ3Jlc3NCYXIsIGxldmVsKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNlY3Rpb24+XG4gICAgICA8VGl0bGU+U2tpbGxzPC9UaXRsZT5cbiAgICAgIDxQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgICAgIHtza2lsbHNEYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNraWxsQm94IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFNraWxsVGl0bGU+e3NraWxsLm5hbWV9PC9Ta2lsbFRpdGxlPlxuICAgICAgICAgICAgPFByb2dyZXNzQmFyPlxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtbGV2ZWw9e3NraWxsLmxldmVsfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjAlXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDAlXG4gICAgICAgICAgICAgIDwvUHJvZ3Jlc3M+XG4gICAgICAgICAgICA8L1Byb2dyZXNzQmFyPlxuICAgICAgICAgIDwvU2tpbGxCb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Qcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgPC9TdHlsZWRTZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==