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
  var data = (0,C_Users_evuci_OneDrive_Desktop_portfolio_website_main_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 120px;\n  height: 120px;\n\n  circle {\n    fill: none;\n    stroke: conic-gradient(\n      #eee ", "%,\n      transparent ", "%\n    );\n    stroke-width: 10;\n    stroke-linecap: round;\n    transform: rotate(-90deg);\n    transform-origin: 50% 50%;\n    transition: stroke-dashoffset 0.5s;\n  }\n"]);

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
    var circleProgressBars = document.querySelectorAll("svg circle");
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
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarWrapper, {
      children: skillsData.map(function (skill, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
            children: skill.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
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
              lineNumber: 85,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBarText, {
            children: skill.level
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbiIsInN0eWxlZCIsIlRpdGxlIiwiUHJvZ3Jlc3NCYXJXcmFwcGVyIiwiU2tpbGxCb3giLCJTa2lsbFRpdGxlIiwiQ2lyY2xlUHJvZ3Jlc3NCYXIiLCJsZXZlbCIsIlByb2dyZXNzQmFyVGV4dCIsIlNraWxscyIsInVzZUVmZmVjdCIsImNpcmNsZVByb2dyZXNzQmFycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaXJjbGUiLCJnZXRBdHRyaWJ1dGUiLCJyYWRpdXMiLCJwYXJzZUZsb2F0IiwiY2lyY3VtZmVyZW5jZSIsIk1hdGgiLCJQSSIsIm9mZnNldCIsInN0eWxlIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsInNraWxsc0RhdGEiLCJuYW1lIiwibWFwIiwic2tpbGwiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDhEQUFILG1CQUFuQjtLQUFNRCxhO0FBSU4sSUFBTUUsS0FBSyxHQUFHRCx5REFBSCxvQkFBWDtNQUFNQyxLO0FBSU4sSUFBTUMsa0JBQWtCLEdBQUdGLDBEQUFILG9CQUF4QjtNQUFNRSxrQjtBQUtOLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7TUFBTUcsUTtBQU1OLElBQU1DLFVBQVUsR0FBR0oseURBQUgsb0JBQWhCO01BQU1JLFU7QUFJTixJQUFNQyxpQkFBaUIsR0FBR0wsMERBQUgscUJBT1Y7QUFBQSxNQUFHTSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FQVSxFQVFIO0FBQUEsTUFBR0EsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBUkcsQ0FBdkI7TUFBTUQsaUI7QUFrQk4sSUFBTUUsZUFBZSxHQUFHUCwyREFBSCxvQkFBckI7TUFBTU8sZTs7QUFLTixJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUEzQjtBQUVBRixzQkFBa0IsQ0FBQ0csT0FBbkIsQ0FBMkIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3JDLFVBQU1SLEtBQUssR0FBR1EsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFlBQXBCLENBQWQ7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQ0gsTUFBTSxDQUFDQyxZQUFQLENBQW9CLEdBQXBCLENBQUQsQ0FBekI7QUFDQSxVQUFNRyxhQUFhLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWNKLE1BQXBDO0FBQ0EsVUFBTUssTUFBTSxHQUFHSCxhQUFhLEdBQUlaLEtBQUssR0FBRyxHQUFULEdBQWdCWSxhQUEvQztBQUVBSixZQUFNLENBQUNRLEtBQVAsQ0FBYUMsZUFBYixhQUFrQ0wsYUFBbEMsY0FBbURBLGFBQW5EO0FBQ0FKLFlBQU0sQ0FBQ1EsS0FBUCxDQUFhRSxnQkFBYixHQUFnQ0gsTUFBaEM7QUFDRCxLQVJEO0FBU0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLE1BQU1JLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxRQUFJLEVBQUUsTUFBUjtBQUFnQnBCLFNBQUssRUFBRTtBQUF2QixHQURpQixFQUVqQjtBQUFFb0IsUUFBSSxFQUFFLEtBQVI7QUFBZXBCLFNBQUssRUFBRTtBQUF0QixHQUZpQixFQUdqQjtBQUFFb0IsUUFBSSxFQUFFLFlBQVI7QUFBc0JwQixTQUFLLEVBQUU7QUFBN0IsR0FIaUIsRUFJakI7QUFBRW9CLFFBQUksRUFBRSxVQUFSO0FBQW9CcEIsU0FBSyxFQUFFO0FBQTNCLEdBSmlCLEVBS2pCO0FBQUVvQixRQUFJLEVBQUUsU0FBUjtBQUFtQnBCLFNBQUssRUFBRTtBQUExQixHQUxpQixDQUFuQjtBQVFBLHNCQUNFLDhEQUFDLGFBQUQ7QUFBQSw0QkFDRSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHbUIsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ2QsOERBQUMsUUFBRDtBQUFBLGtDQUNFLDhEQUFDLFVBQUQ7QUFBQSxzQkFBYUQsS0FBSyxDQUFDRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsaUJBQUQ7QUFDRSxpQkFBSyxFQUFHRSxLQUFLLENBQUN0QixLQUFOLEdBQWMsR0FBZixHQUFzQixHQUQvQjtBQUVFLG1CQUFPLEVBQUMsYUFGVjtBQUdFLDBCQUFZc0IsS0FBSyxDQUFDdEIsS0FIcEI7QUFBQSxtQ0FLRTtBQUFRLGdCQUFFLEVBQUMsSUFBWDtBQUFnQixnQkFBRSxFQUFDLElBQW5CO0FBQXdCLGVBQUMsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVNFLDhEQUFDLGVBQUQ7QUFBQSxzQkFBa0JzQixLQUFLLENBQUN0QjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUEsV0FBZXVCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EzQ0Q7O0dBQU1yQixNOztNQUFBQSxNO0FBNkNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxYzI0MDQ4ODMwMzRlZWY1ZWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIC8qIFlvdXIgc2VjdGlvbiBzdHlsZXMgKi9cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICAvKiBZb3VyIHNlY3Rpb24gdGl0bGUgc3R5bGVzICovXG5gO1xuXG5jb25zdCBQcm9ncmVzc0JhcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBTa2lsbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLmgzYFxuICAvKiBZb3VyIHNraWxsIHRpdGxlIHN0eWxlcyAqL1xuYDtcblxuY29uc3QgQ2lyY2xlUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuc3ZnYFxuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG5cbiAgY2lyY2xlIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogY29uaWMtZ3JhZGllbnQoXG4gICAgICAjZWVlICR7KHsgbGV2ZWwgfSkgPT4gbGV2ZWx9JSxcbiAgICAgIHRyYW5zcGFyZW50ICR7KHsgbGV2ZWwgfSkgPT4gbGV2ZWx9JVxuICAgICk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuNXM7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2dyZXNzQmFyVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzO1xuYDtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNpcmNsZVByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmcgY2lyY2xlXCIpO1xuXG4gICAgY2lyY2xlUHJvZ3Jlc3NCYXJzLmZvckVhY2goKGNpcmNsZSkgPT4ge1xuICAgICAgY29uc3QgbGV2ZWwgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1sZXZlbFwiKTtcbiAgICAgIGNvbnN0IHJhZGl1cyA9IHBhcnNlRmxvYXQoY2lyY2xlLmdldEF0dHJpYnV0ZShcInJcIikpO1xuICAgICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChsZXZlbCAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlO1xuXG4gICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7Y2lyY3VtZmVyZW5jZX0gJHtjaXJjdW1mZXJlbmNlfWA7XG4gICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG9mZnNldDtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gICAgeyBuYW1lOiBcIkhUTUxcIiwgbGV2ZWw6IDkwIH0sXG4gICAgeyBuYW1lOiBcIkNTU1wiLCBsZXZlbDogODUgfSxcbiAgICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBsZXZlbDogODAgfSxcbiAgICB7IG5hbWU6IFwiUmVhY3QuanNcIiwgbGV2ZWw6IDc1IH0sXG4gICAgeyBuYW1lOiBcIk5leHQuanNcIiwgbGV2ZWw6IDcwIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VjdGlvbj5cbiAgICAgIDxUaXRsZT5Ta2lsbHM8L1RpdGxlPlxuICAgICAgPFByb2dyZXNzQmFyV3JhcHBlcj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2tpbGxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8U2tpbGxUaXRsZT57c2tpbGwubmFtZX08L1NraWxsVGl0bGU+XG4gICAgICAgICAgICA8Q2lyY2xlUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgbGV2ZWw9eyhza2lsbC5sZXZlbCAvIDEwMCkgKiAzNjB9XG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgICAgIGRhdGEtbGV2ZWw9e3NraWxsLmxldmVsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICA8L0NpcmNsZVByb2dyZXNzQmFyPlxuICAgICAgICAgICAgPFByb2dyZXNzQmFyVGV4dD57c2tpbGwubGV2ZWx9PC9Qcm9ncmVzc0JhclRleHQ+XG4gICAgICAgICAgPC9Ta2lsbEJveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2dyZXNzQmFyV3JhcHBlcj5cbiAgICA8L1N0eWxlZFNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9