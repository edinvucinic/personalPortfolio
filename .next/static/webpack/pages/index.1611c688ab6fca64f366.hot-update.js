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
var CircleProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject6(), function (_ref) {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CircleProgressBar, {
            level: skill.level / 100 * 360,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarText, {
              children: skill.level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiQ2lyY2xlUHJvZ3Jlc3NCYXIiLCJsZXZlbCIsIlByb2dyZXNzQmFyVGV4dCIsIlNraWxscyIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJza2lsbHNEYXRhIiwibmFtZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw4REFBSCxtQkFBbkI7S0FBTUQsYTtBQUlOLElBQU1FLEtBQUssR0FBR0QseURBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1DLGtCQUFrQixHQUFHRiwwREFBSCxvQkFBeEI7TUFBTUUsa0I7QUFLTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO01BQU1HLFE7QUFNTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFILG9CQUFoQjtNQUFNSSxVO0FBSU4sSUFBTUMsaUJBQWlCLEdBQUdMLDBEQUFILHFCQU1aO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBTlksRUFPTDtBQUFBLE1BQUdBLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQVBLLENBQXZCO01BQU1ELGlCO0FBMEJOLElBQU1FLGVBQWUsR0FBR1AsMkRBQUgsb0JBQXJCO01BQU1PLGU7O0FBS04sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFHbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMvQkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRnlCLEVBRXZCLElBRnVCLENBQTFCO0FBSUEsV0FBTztBQUFBLGFBQU1JLFlBQVksQ0FBQ0YsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsTUFBTUcsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLFFBQUksRUFBRSxNQUFSO0FBQWdCWCxTQUFLLEVBQUU7QUFBdkIsR0FEaUIsRUFFakI7QUFBRVcsUUFBSSxFQUFFLEtBQVI7QUFBZVgsU0FBSyxFQUFFO0FBQXRCLEdBRmlCLEVBR2pCO0FBQUVXLFFBQUksRUFBRSxZQUFSO0FBQXNCWCxTQUFLLEVBQUU7QUFBN0IsR0FIaUIsRUFJakI7QUFBRVcsUUFBSSxFQUFFLFVBQVI7QUFBb0JYLFNBQUssRUFBRTtBQUEzQixHQUppQixFQUtqQjtBQUFFVyxRQUFJLEVBQUUsU0FBUjtBQUFtQlgsU0FBSyxFQUFFO0FBQTFCLEdBTGlCLENBQW5CO0FBUUEsc0JBQ0UsOERBQUMsYUFBRDtBQUFBLDRCQUNFLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dVLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNkLDhEQUFDLFFBQUQ7QUFBQSxrQ0FDRSw4REFBQyxVQUFEO0FBQUEsc0JBQWFELEtBQUssQ0FBQ0Y7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGlCQUFEO0FBQW1CLGlCQUFLLEVBQUdFLEtBQUssQ0FBQ2IsS0FBTixHQUFjLEdBQWYsR0FBc0IsR0FBaEQ7QUFBQSxtQ0FDRSw4REFBQyxlQUFEO0FBQUEsd0JBQWtCYSxLQUFLLENBQUNiO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBZWMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbkNEOztHQUFNWixNOztNQUFBQSxNO0FBcUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2MTFjNjg4YWI2ZmNhNjRmMzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAvKiBZb3VyIHNlY3Rpb24gc3R5bGVzICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgLyogWW91ciBzZWN0aW9uIHRpdGxlIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgU2tpbGxCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU2tpbGxUaXRsZSA9IHN0eWxlZC5oM2BcbiAgLyogWW91ciBza2lsbCB0aXRsZSBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IENpcmNsZVByb2dyZXNzQmFyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXG4gICAgI2VlZSAkeyh7IGxldmVsIH0pID0+IGxldmVsfSUsXG4gICAgdHJhbnNwYXJlbnQgJHsoeyBsZXZlbCB9KSA9PiBsZXZlbH0lXG4gICk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuXG4gIEBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzO1xuYDtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2ltdWxhdGluZyBsb2FkaW5nIGVmZmVjdFxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBza2lsbHNEYXRhID0gW1xuICAgIHsgbmFtZTogXCJIVE1MXCIsIGxldmVsOiA5MCB9LFxuICAgIHsgbmFtZTogXCJDU1NcIiwgbGV2ZWw6IDg1IH0sXG4gICAgeyBuYW1lOiBcIkphdmFTY3JpcHRcIiwgbGV2ZWw6IDgwIH0sXG4gICAgeyBuYW1lOiBcIlJlYWN0LmpzXCIsIGxldmVsOiA3NSB9LFxuICAgIHsgbmFtZTogXCJOZXh0LmpzXCIsIGxldmVsOiA3MCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNlY3Rpb24+XG4gICAgICA8VGl0bGU+U2tpbGxzPC9UaXRsZT5cbiAgICAgIDxQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgICAgIHtza2lsbHNEYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNraWxsQm94IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFNraWxsVGl0bGU+e3NraWxsLm5hbWV9PC9Ta2lsbFRpdGxlPlxuICAgICAgICAgICAgPENpcmNsZVByb2dyZXNzQmFyIGxldmVsPXsoc2tpbGwubGV2ZWwgLyAxMDApICogMzYwfT5cbiAgICAgICAgICAgICAgPFByb2dyZXNzQmFyVGV4dD57c2tpbGwubGV2ZWx9PC9Qcm9ncmVzc0JhclRleHQ+XG4gICAgICAgICAgICA8L0NpcmNsZVByb2dyZXNzQmFyPlxuICAgICAgICAgIDwvU2tpbGxCb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Qcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgPC9TdHlsZWRTZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==