/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/SteamApplication.js":
/*!**************************************************!*\
  !*** ./src/forum/components/SteamApplication.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SteamApplication)
/* harmony export */ });
var SteamApplication = /*#__PURE__*/function () {
  function SteamApplication() {}

  var _proto = SteamApplication.prototype;

  _proto.linkDone = function linkDone(returnCode) {
    var alert;

    switch (returnCode) {
      case 'already_linked':
        app.modal.close();
        alert = app.alerts.show({
          type: 'error'
        }, app.translator.trans('nomiscz-auth-steam.forum.alerts.already_linked'));
        break;

      case 'already_used':
        alert = app.alerts.show({
          type: 'error'
        }, app.translator.trans('nomiscz-auth-steam.forum.alerts.already_used'));
        break;

      case 'done':
        app.modal.close();
        app.session.user.savePreferences();
        alert = app.alerts.show({
          type: 'success'
        }, app.translator.trans('nomiscz-auth-steam.forum.alerts.link_success'));
        break;

      case 'error':
        alert = app.alerts.show({
          type: 'error'
        }, app.translator.trans('nomiscz-auth-steam.forum.alerts.error'));
        break;
    }

    setTimeout(function () {
      app.alerts.dismiss(alert);
    }, 5000);
  };

  return SteamApplication;
}();



/***/ }),

/***/ "./src/forum/components/SteamLinkModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/SteamLinkModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SteamLinkModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var SteamLinkModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SteamLinkModal, _Modal);

  function SteamLinkModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SteamLinkModal.prototype;

  _proto.className = function className() {
    return 'AuthSteamLinkModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('nomiscz-auth-steam.forum.modals.link.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button LogInButton--steam',
      icon: 'fab fa-steam-symbol',
      loading: this.loading,
      disabled: this.loading,
      path: "/auth/" + name,
      onclick: function onclick() {
        return _this.showSteamLogin();
      }
    }, app.translator.trans('nomiscz-auth-steam.forum.buttons.login')))));
  };

  _proto.showSteamLogin = function showSteamLogin() {
    var width = 600;
    var height = 400;
    var $window = $(window);
    window.open(app.forum.attribute('apiUrl') + '/auth/steam/link', 'steamLinkPopup', "width=" + width + "," + ("height=" + height + ",") + ("top=" + ($window.height() / 2 - height / 2) + ",") + ("left=" + ($window.width() / 2 - width / 2) + ",") + 'status=no,scrollbars=no,resizable=no');
    this.loading = true;
  };

  return SteamLinkModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/SteamUnlinkModal.js":
/*!**************************************************!*\
  !*** ./src/forum/components/SteamUnlinkModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SteamUnlinkModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var SteamUnlinkModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SteamUnlinkModal, _Modal);

  function SteamUnlinkModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SteamUnlinkModal.prototype;

  _proto.className = function className() {
    return 'AuthSteamUnlinkModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.title');
  };

  _proto.content = function content() {
    var _this = this;

    var _app$session$user$dat = app.session.user.data.attributes.SteamAuth.providersCount,
        providersCount = _app$session$user$dat === void 0 ? 0 : _app$session$user$dat;
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group",
      id: "submit-button-group"
    }, m("h3", null, app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.info.confirm')), providersCount <= 1 ? m("p", {
      className: "SteamText--danger"
    }, m("i", {
      className: "fas fa-exclamation-triangle fa-fw"
    }), m("b", null, app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.info.no_providers'))) : '', m("br", null), m("div", {
      className: "ButtonGroup"
    }, m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'submit',
      className: 'Button SteamButton--danger',
      icon: 'fas fa-exclamation-triangle',
      loading: this.loading
    }, app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.buttons.confirm')), m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button Button--primary',
      icon: 'fas fa-exclamation-triangle',
      onclick: function onclick() {
        return _this.hide();
      },
      disabled: this.loading
    }, app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.buttons.cancel'))))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    var alert;
    e.preventDefault();
    this.loading = true;
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/auth/steam/unlink'
    }).then(function () {
      app.session.user.savePreferences();

      _this2.hide();

      alert = app.alerts.show({
        type: 'success'
      }, app.translator.trans('nomiscz-auth-steam.forum.alerts.unlink_success'));
    });
    setTimeout(function () {
      app.alerts.dismiss(alert);
    }, 5000);
  };

  return SteamUnlinkModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SteamApplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SteamApplication */ "./src/forum/components/SteamApplication.js");
/* harmony import */ var _components_SteamUnlinkModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SteamUnlinkModal */ "./src/forum/components/SteamUnlinkModal.js");
/* harmony import */ var _components_SteamLinkModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SteamLinkModal */ "./src/forum/components/SteamLinkModal.js");
/* harmony import */ var flarum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LogInButtons */ "flarum/components/LogInButtons");
/* harmony import */ var flarum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_LogInButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/LogInButton */ "flarum/components/LogInButton");
/* harmony import */ var flarum_components_LogInButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);









flarum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('nomiscz-auth-steam', function () {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'accountItems', function (items) {
    var _app$session$user$dat = (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.data.attributes.SteamAuth.isLinked),
        isLinked = _app$session$user$dat === void 0 ? false : _app$session$user$dat;
    items.add('linkSteam', m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
      className: "Button SteamButton--" + (isLinked ? 'danger' : 'success'),
      icon: 'fab fa-steam-symbol',
      path: "/auth/" + name,
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(isLinked ? _components_SteamUnlinkModal__WEBPACK_IMPORTED_MODULE_4__["default"] : _components_SteamLinkModal__WEBPACK_IMPORTED_MODULE_5__["default"]);
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("nomiscz-auth-steam.forum.buttons." + (isLinked ? 'unlink' : 'link'))));
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'items', function (items) {
    items.add('steam', m((flarum_components_LogInButton__WEBPACK_IMPORTED_MODULE_7___default()), {
      className: 'Button LogInButton--steam',
      icon: 'fab fa-steam-symbol',
      path: '/auth/steam'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('nomiscz-auth-steam.forum.buttons.login')));
  });
});
(flarum_app__WEBPACK_IMPORTED_MODULE_1___default().steam) = new _components_SteamApplication__WEBPACK_IMPORTED_MODULE_3__["default"]();

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/LogInButton":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/LogInButton']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LogInButton'];

/***/ }),

/***/ "flarum/components/LogInButtons":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/LogInButtons']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LogInButtons'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map