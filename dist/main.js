/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    font-family: 'Courier New', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
}

button,
dialog {
    appearance: none;
    font-family: inherit;
    font-size: 100%;
}

.selected {
    background-color: lightgrey;
}

button:hover {
    background-color: #4287F5 !important;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,kKAAkK;IAClK,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["body {\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    font-family: 'Courier New', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nbutton,\ndialog {\n    appearance: none;\n    font-family: inherit;\n    font-size: 100%;\n}\n\n.selected {\n    background-color: lightgrey;\n}\n\nbutton:hover {\n    background-color: #4287F5 !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dominitialization.js":
/*!**********************************!*\
  !*** ./src/dominitialization.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeContent: () => (/* binding */ initializeContent),
/* harmony export */   initializeDialog: () => (/* binding */ initializeDialog),
/* harmony export */   initializeSidebar: () => (/* binding */ initializeSidebar)
/* harmony export */ });
/* harmony import */ var _inputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs.js */ "./src/inputs.js");


function initializeSidebar() {
    const body = document.querySelector('body');
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.style.gridColumn = '1/2';
    sidebar.style.backgroundColor = 'lightgrey';
    
    const sidebarHeading = document.createElement('div');
    sidebarHeading.textContent = 'Projects';
    sidebarHeading.style.fontSize = '3rem'
    sidebarHeading.style.fontWeight = 'bold';
    sidebar.appendChild(sidebarHeading);

    const sidebarBody = document.createElement('div');
    sidebarBody.classList.add('sidebar-body');
    sidebarBody.style.display = "grid";
    sidebarBody.style.paddingTop = "20px";
    sidebarBody.style.gridTemplateColumns = "1fr";
    sidebar.append(sidebarBody);

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = "+";
    addProjectButton.style.width = "100%";
    addProjectButton.style.fontSize = "2rem";
    addProjectButton.style.border = "none";
    addProjectButton.style.backgroundColor = "inherit";
    addProjectButton.addEventListener("click", () => {
        const newProjectDialog = document.querySelector(".ProjectDialog");
        newProjectDialog.showModal();
    });

    sidebar.append(addProjectButton);

    body.appendChild(sidebar);
}

function initializeContent() {
    const body = document.querySelector('body'); 

    const content = document.createElement('div');
    content.classList.add('content');
    content.style.gridColumn = '2/3';
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "20px";
    
    body.appendChild(content);
}

function initializeFormButtons(className) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.justifyContent = "center";
    
    const submitButton = document.createElement('button')
    submitButton.classList.add('sub');
    submitButton.classList.add(className);
    submitButton.textContent = "Submit";
    buttonContainer.appendChild(submitButton);
    
    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancel');
    cancelButton.classList.add(className);
    cancelButton.textContent = "Cancel";
    buttonContainer.appendChild(cancelButton);

    return buttonContainer;
}

function createNewForm(formID) {
    const newForm = document.createElement('form');
    newForm.id = formID;
    newForm.style.display = "flex";
    newForm.style.alignItems = "center";
    newForm.style.justifyContent = "center";
    newForm.style.flexDirection = "column";
    newForm.style.gap = "10px";

    return newForm;
}

function initializeProjectDialog() {
    const body = document.querySelector("body");
    const newProjectDialog = document.createElement('dialog');
    newProjectDialog.classList.add('ProjectDialog');
    const newProjectForm = createNewForm("projectform");

    const inputContainer = document.createElement("div");
    
    const title = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.TitleInput('titleProject');
    inputContainer.appendChild(title.newLabel);
    inputContainer.appendChild(title.newInput);

    newProjectForm.appendChild(inputContainer);

    const buttonContainer = initializeFormButtons("project-button");

    newProjectForm.appendChild(buttonContainer);

    newProjectDialog.appendChild(newProjectForm);

    body.appendChild(newProjectDialog);
}

function initializeTDDialog() {
    const body = document.querySelector("body");
    const newTDDialog = document.createElement('dialog');
    newTDDialog.classList.add('TDDialog');
    const newTDForm = createNewForm("tdform")

    const inputContainer = document.createElement('div');
    inputContainer.style.display = "flex";
    inputContainer.style.alignItems = "center";
    inputContainer.style.gap = "10px";

    const title = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.TitleInput('title');
    inputContainer.appendChild(title.newLabel);
    inputContainer.appendChild(title.newInput);

    const description = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.DescriptionInput('description');
    description.newInput.for = newTDForm.id;
    inputContainer.appendChild(description.newLabel);
    inputContainer.appendChild(description.newInput);

    const dueDate = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.DueDateInput('dueDate');
    inputContainer.appendChild(dueDate.newLabel);
    inputContainer.appendChild(dueDate.newInput);

    const priority = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.PriorityInput('priority');
    priority.newInput.for = newTDForm.id;
    inputContainer.appendChild(priority.newLabel);
    inputContainer.appendChild(priority.newInput);

    newTDForm.appendChild(inputContainer);

    const buttonContainer = initializeFormButtons("td-button");

    newTDForm.appendChild(buttonContainer);

    newTDDialog.appendChild(newTDForm);

    body.appendChild(newTDDialog);
}

function initializeDeleteProjectDialog() {
    const body = document.querySelector("body");
    const newDeleteDialog = document.createElement('dialog');
    newDeleteDialog.classList.add('DeleteDialog');
    const deleteForm = createNewForm("deleteform");

    const deletePrompt = document.createElement('div');
    deletePrompt.textContent = "Are you sure you would like to delete this project? Doing so will delete all elements of this project."
    deleteForm.appendChild(deletePrompt);
    
    const buttonContainer = initializeFormButtons("delete-button");
    deleteForm.appendChild(buttonContainer);

    newDeleteDialog.appendChild(deleteForm);

    body.appendChild(newDeleteDialog);
}

function initializePriorityChangeDialog() {
    const body = document.querySelector("body");
    const changePriorityDialog = document.createElement('dialog');
    changePriorityDialog.classList.add('PriorityDialog');
    const changePriorityForm = createNewForm("priorityform");

    const inputContainer = document.createElement("div");

    const priority = _inputs_js__WEBPACK_IMPORTED_MODULE_0__.PriorityInput("priorityChange");
    priority.newInput.for = changePriorityForm.id;
    inputContainer.appendChild(priority.newLabel);
    inputContainer.appendChild(priority.newInput);

    changePriorityForm.appendChild(inputContainer);
    
    const buttonContainer = initializeFormButtons("priority-button");

    changePriorityForm.appendChild(buttonContainer);

    changePriorityDialog.appendChild(changePriorityForm);

    body.appendChild(changePriorityDialog);
}

function initializeDialog() {
    initializeProjectDialog();
    initializeTDDialog();
    initializeDeleteProjectDialog();
    initializePriorityChangeDialog();
}



/***/ }),

/***/ "./src/dommanipulation.js":
/*!********************************!*\
  !*** ./src/dommanipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   refreshSidebar: () => (/* binding */ refreshSidebar),
/* harmony export */   reloadProjects: () => (/* binding */ reloadProjects),
/* harmony export */   setProjectFormButtonEvents: () => (/* binding */ setProjectFormButtonEvents),
/* harmony export */   setTDFormButtonEvents: () => (/* binding */ setTDFormButtonEvents),
/* harmony export */   writeProjectToDOM: () => (/* binding */ writeProjectToDOM)
/* harmony export */ });
/* harmony import */ var _tdobjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tdobjects.js */ "./src/tdobjects.js");
/* harmony import */ var _inputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs.js */ "./src/inputs.js");
const projects = [];



function reloadProjects(projectsReloaded) {
    for (let project of JSON.parse(projectsReloaded)) {
        addProject(_tdobjects_js__WEBPACK_IMPORTED_MODULE_0__.Project(project.title, project.selected, project.toDoList));
    }
    for (let project of projects) {
        if (project.selected) {
            refreshSidebar();
            setTDFormButtonEvents(project);
            writeProjectToDOM(project);
        }
    }
}

function addProject(project) {
    projects.push(project);
}

function removeProject(index) {
    projects.splice(index, 1);
}

function makeNewTDCard(td, project, index) {
    
    const newTDCard = document.createElement('div');
    newTDCard.style.gridColumn = '1/2';
    newTDCard.style.display = "grid";
    newTDCard.style.alignItems = "center";
    newTDCard.style.gridTemplateColumns = "auto min-content auto min-content";
    newTDCard.style.gap = "10px";
    newTDCard.style.textAlign = "center";
    newTDCard.style.borderRadius = "12px";
    newTDCard.style.padding = "10px";
    newTDCard.style.position = "relative";

    const testButton = document.createElement('div');
    testButton.style.width = "1%";
    testButton.style.height = "100%";
    testButton.style.position = "absolute";
    testButton.style.backgroundColor = "inherit";
    newTDCard.appendChild(testButton);

    const priorityDialog = document.querySelector(".PriorityDialog");

    testButton.addEventListener("click", () => {
        setPriorityFormButtonEvents(project, index);
        priorityDialog.showModal();
    });

    const cardTitle = document.createElement('div');
    cardTitle.style.gridColumn = "1/2";
    cardTitle.textContent = `Title: ${td.title}`;
    newTDCard.appendChild(cardTitle);

    const cardDescription = document.createElement('button');
    cardDescription.style.gridColumn = "2/3";
    cardDescription.style.backgroundColor = "inherit";
    cardDescription.style.border = "none";
    cardDescription.textContent = `Description`;
    newTDCard.appendChild(cardDescription);

    const expandedDescription = document.createElement('div');
    expandedDescription.textContent = `${td.description}`;
    expandedDescription.style.gridColumn = "1/5";
    expandedDescription.style.display = "none";

    cardDescription.addEventListener("click", () => {
        if (expandedDescription.style.display === "none") {
            expandedDescription.style.display = "";
        } else {
            expandedDescription.style.display = "none";
        }
    })

    const cardDueDate = document.createElement('div');
    cardDueDate.style.gridColumn = "3/4";
    cardDueDate.textContent = `Due Date: ${td.dueDate}`;
    newTDCard.appendChild(cardDueDate);

    if (td.priority == "high") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, red 1%, lightgrey 1%)";
    } else if (td.priority == "medium") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, goldenrod 1%, lightgrey 1%)";
    } else if (td.priority == "low") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, green 1%, lightgrey 1%)";
    }

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "resolve";
    check.style.gridColumn = "4/5";

    let timeoutCheck;

    check.addEventListener("click", () => {
        if (check.checked) {
            timeoutCheck = setTimeout(() => {
                project.removeToDo(index);
                writeProjectToDOM(project);
            }, 3000);
        } else {
            clearTimeout(timeoutCheck)
        };
    });

    newTDCard.appendChild(check);

    newTDCard.appendChild(expandedDescription);

    return newTDCard;
}

function writeProjectToDOM(project) {
    const container = document.querySelector('.content');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const title = document.createElement('div');
    title.textContent = project.title;
    title.style.fontSize = "2rem";
    title.style.fontWeight = "bold";
    title.style.padding = "10px";
    container.appendChild(title);

    const TDContainer = document.createElement('div');
    TDContainer.style.width = "100%";
    TDContainer.style.boxSizing = "border-box";
    TDContainer.style.display = "grid";
    TDContainer.style.gridTemplateColumns = "1fr";
    TDContainer.style.padding = "10px";
    TDContainer.style.gap = "5px";

    for (let i = 0; i < project.toDoList.length; i++) {
        const td = project.toDoList[i];
        const newTDCard = makeNewTDCard(td, project, i);
        TDContainer.appendChild(newTDCard);
    }

    container.appendChild(TDContainer);

    const addButton = document.createElement('button');
    addButton.style.width = '60px'
    addButton.style.height = '60px'
    addButton.textContent = '+';
    addButton.style.fontSize = '48px';
    addButton.style.borderRadius = '50%';
    addButton.style.border = "none";
    addButton.style.backgroundColor = "inherit";
    addButton.style.marginLeft = "10px";
    addButton.addEventListener('click', () => {
        const newTDDialog = document.querySelector(".TDDialog");
        newTDDialog.showModal();
    });

    container.appendChild(addButton);
}

function setProjectFormButtonEvents() {
    const newProjectDialog = document.querySelector(".ProjectDialog");
    const newProjectForm = document.querySelector("#projectform");

    const projectButtons = document.querySelectorAll(".project-button");

    projectButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            button.addEventListener("click", (event) => {
                const projectTitle = document.querySelector("#titleProject");
                if (projectTitle.validity.valueMissing) {
                    projectTitle.setCustomValidity("Must enter a title");
                    projectTitle.reportValidity();
                } else {
                    const formValues = new FormData(newProjectForm);
                    addProject(_tdobjects_js__WEBPACK_IMPORTED_MODULE_0__.Project(formValues.get("titleProject")));
                    _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(newProjectForm);
                    refreshSidebar();
                    newProjectDialog.close();
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            button.addEventListener("click", (event) => {
                _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(newProjectForm);
                newProjectDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setTDFormButtonEvents(project) {
    const newTDDialog = document.querySelector(".TDDialog");
    const newTDForm = document.querySelector('#tdform');
    const TDButtons = document.querySelectorAll(".td-button");

    TDButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => { 
                const titleInput = document.querySelector("#title");
                const dateInput = document.querySelector("#dueDate");
                const priorityInput = document.querySelector("#priority");
                if (titleInput.validity.valueMissing) {
                    titleInput.setCustomValidity("Must enter a title");
                    titleInput.reportValidity();
                } else if (dateInput.validity.valueMissing) {
                    titleInput.setCustomValidity("");
                    dateInput.setCustomValidity("Must input a date");
                    dateInput.reportValidity();
                } else if (priorityInput.value === "--Please choose an option--" || priorityInput.value === "") {
                    titleInput.setCustomValidity("");
                    dateInput.setCustomValidity("");
                    priorityInput.setCustomValidity("Must choose a priority level");
                    priorityInput.reportValidity();
                } else {
                    event.preventDefault();
                    const formValues = new FormData(newTDForm);
                    project.addToDo(_tdobjects_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(formValues.get('title'),
                                    formValues.get('description'),
                                    formValues.get('dueDate'),
                                    formValues.get("priority")));
                    _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(newTDForm);
                    writeProjectToDOM(project);
                    newTDDialog.close();
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(newTDForm);
                newTDDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setDeleteFormButtonEvents(index) {
    const deleteDialog = document.querySelector(".DeleteDialog");
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                if (projects[index].selected) {
                    projects[0].selected = true;
                }
                removeProject(index);
                deleteDialog.close();
                refreshSidebar();
                writeProjectToDOM(projects[0]);
                event.preventDefault();
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                deleteDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setPriorityFormButtonEvents(project, index) {
    const priorityDialog = document.querySelector(".PriorityDialog");
    const priorityForm = document.querySelector("#priorityform");
    const priorityButtons = document.querySelectorAll(".priority-button");

    priorityButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                const priorityChange = document.querySelector("#priorityChange");
                if (priorityChange.value === "--Please choose an option--" || priorityChange.value === "") {
                    priorityChange.setCustomValidity("Must choose a priority level");
                    priorityChange.reportValidity();
                } else {
                    const formValues = new FormData(priorityForm);
                    project.toDoList[index].priority = formValues.get("priorityChange");
                    _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(priorityForm);
                    priorityDialog.close();
                    writeProjectToDOM(project);
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                _inputs_js__WEBPACK_IMPORTED_MODULE_1__.resetForm(priorityForm);
                priorityDialog.close();
                event.preventDefault();
            });
        }
    });
} 

function resetButtonColors() {
    for (let i = 0; i < projects.length; i++) {
        projects[i].selected = false;
    }
}

function refreshSidebar() {
    const sidebarBody = document.querySelector('.sidebar-body');
    
    while (sidebarBody.hasChildNodes()) {
        sidebarBody.removeChild(sidebarBody.firstChild);
    }

    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement('div');
        newProject.style.display = "flex";
        const deleteProject = document.createElement('button');
        deleteProject.style.backgroundColor = "inherit";
        const selectProject = document.createElement('button');
        selectProject.style.backgroundColor = "inherit";
        selectProject.style.flex = "1 1 auto";

        deleteProject.textContent = "X";
        deleteProject.style.border = "none";
        deleteProject.style.fontSize = "1.5rem";
        selectProject.textContent = projects[i].title;
        selectProject.style.border = "none";
        selectProject.style.fontSize = "1.5rem";
        
        if (projects[i].selected) {
            newProject.style.backgroundColor = "slategrey";
        } else {
            newProject.style.backgroundColor = "inherit";
        }

        const deleteDialog = document.querySelector(".DeleteDialog");
        deleteProject.addEventListener("click", () => {
            setDeleteFormButtonEvents(i);
            deleteDialog.showModal();
        });
        if (i > 0) {
            newProject.appendChild(deleteProject);
        }

        selectProject.addEventListener("click", () => {
            resetButtonColors();
            projects[i].selected = true;
            refreshSidebar();
            writeProjectToDOM(projects[i]);
            setTDFormButtonEvents(projects[i]);
        });
        newProject.appendChild(selectProject);

        sidebarBody.appendChild(newProject); 
    }
}



/***/ }),

/***/ "./src/inputs.js":
/*!***********************!*\
  !*** ./src/inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescriptionInput: () => (/* binding */ DescriptionInput),
/* harmony export */   DueDateInput: () => (/* binding */ DueDateInput),
/* harmony export */   PriorityInput: () => (/* binding */ PriorityInput),
/* harmony export */   TitleInput: () => (/* binding */ TitleInput),
/* harmony export */   resetForm: () => (/* binding */ resetForm)
/* harmony export */ });
const Input = (inputID, elementType) => {

    const newLabel = document.createElement('label');
    newLabel.for = inputID;

    const newInput = document.createElement(elementType);
    newInput.id = inputID;
    newInput.name = inputID;

    return { newLabel, newInput };
}

const TitleInput = (inputID) => {
    const inputPair = Input(inputID, 'input');

    inputPair.newLabel.textContent = 'Title: ';
    inputPair.newInput.type = 'text';
    inputPair.newInput.required = 'true';
    inputPair.newInput.maxLength = '20';

    return inputPair;    
}

const DescriptionInput = (inputID) => {
    const inputPair = Input(inputID, 'textarea');

    inputPair.newLabel.textContent = 'Description: ';
    
    return inputPair;
}

const DueDateInput = (inputID) => {
    const inputPair = Input(inputID, 'input');
    
    inputPair.newLabel.textContent = 'Due Date: ';
    inputPair.newInput.type = 'date';
    inputPair.newInput.required = 'true';

    return inputPair;
}

const PriorityInput = (inputID) => {
    const inputPair = Input(inputID, 'select');

    inputPair.newLabel.textContent = 'Priority: ';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "--Please choose an option--";
    inputPair.newInput.appendChild(defaultOption);
    
    const high = document.createElement('option');
    high.value = "high";
    high.textContent = "High";
    inputPair.newInput.appendChild(high);

    const medium = document.createElement('option');
    medium.value = "medium";
    medium.textContent = "Medium";
    inputPair.newInput.appendChild(medium);

    const low = document.createElement('option');
    low.value = "low";
    low.textContent = "Low";
    inputPair.newInput.appendChild(low);

    return inputPair;
}

function resetForm(form) {
    const formElements = Array.from(form.elements);
    for (let element of formElements) {
        element.value ="";
    }
}



/***/ }),

/***/ "./src/tdobjects.js":
/*!**************************!*\
  !*** ./src/tdobjects.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
const ToDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority, completed: false};
}

const Project = (title, selected, toDoList = []) => {
    const addToDo = (td) => {
        toDoList.push(td);
    };
    const removeToDo = (index) => {
        toDoList.splice(index, 1);
    };
    return {title, toDoList, addToDo, removeToDo, selected};
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dommanipulation.js */ "./src/dommanipulation.js");
/* harmony import */ var _dominitialization_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dominitialization.js */ "./src/dominitialization.js");
/* harmony import */ var _tdobjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tdobjects.js */ "./src/tdobjects.js");





function initializeDOMElements() {
    _dominitialization_js__WEBPACK_IMPORTED_MODULE_2__.initializeDialog();
    _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.setProjectFormButtonEvents();
    _dominitialization_js__WEBPACK_IMPORTED_MODULE_2__.initializeSidebar();
    _dominitialization_js__WEBPACK_IMPORTED_MODULE_2__.initializeContent();

    const reloadedProjects = localStorage.getItem("projects");
    if (!reloadedProjects) {
        const defaultProject = _tdobjects_js__WEBPACK_IMPORTED_MODULE_3__.Project('Default', true);
        _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.addProject(defaultProject);
        _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.refreshSidebar();
        _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.setTDFormButtonEvents(defaultProject);
        _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.writeProjectToDOM(defaultProject);
    } else {
        _dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.reloadProjects(reloadedProjects);
    }
}

window.addEventListener("DOMContentLoaded", initializeDOMElements);

window.addEventListener("beforeunload", () => {
    localStorage.setItem("projects", JSON.stringify(_dommanipulation_js__WEBPACK_IMPORTED_MODULE_1__.projects));
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDbUM7QUFDTjtBQUNOOztBQUU1QztBQUNBLElBQUksbUVBQXdCO0FBQzVCLElBQUksMkVBQTBDO0FBQzlDLElBQUksb0VBQXlCO0FBQzdCLElBQUksb0VBQXlCOztBQUU3QjtBQUNBO0FBQ0EsK0JBQStCLGtEQUFpQjtBQUNoRCxRQUFRLDJEQUEwQjtBQUNsQyxRQUFRLCtEQUE4QjtBQUN0QyxRQUFRLHNFQUFxQztBQUM3QyxRQUFRLGtFQUFpQztBQUN6QyxNQUFNO0FBQ04sUUFBUSwrREFBOEI7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9EQUFvRCx5REFBd0I7QUFDNUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kb21pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZG9tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rkb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYnV0dG9uLFxuZGlhbG9nIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODdGNSAhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtLQUFrSztJQUNsSyxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbixcXG5kaWFsb2cge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg3RjUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIElucHV0cyBmcm9tICcuL2lucHV0cy5qcyc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaWRlYmFyKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIHNpZGViYXIuc3R5bGUuZ3JpZENvbHVtbiA9ICcxLzInO1xuICAgIHNpZGViYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSc7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFySGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgc2lkZWJhckhlYWRpbmcuc3R5bGUuZm9udFNpemUgPSAnM3JlbSdcbiAgICBzaWRlYmFySGVhZGluZy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRpbmcpO1xuXG4gICAgY29uc3Qgc2lkZWJhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm9keS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvZHknKTtcbiAgICBzaWRlYmFyQm9keS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgc2lkZWJhckJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuICAgIHNpZGViYXJCb2R5LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjFmclwiO1xuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJCb2R5KTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0RGlhbG9nXCIpO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGVudCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpOyBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnN0eWxlLmdyaWRDb2x1bW4gPSAnMi8zJztcbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb250ZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIGNvbnRlbnQuc3R5bGUuZ2FwID0gXCIyMHB4XCI7XG4gICAgXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZvcm1CdXR0b25zKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBidXR0b25Db250YWluZXIuc3R5bGUuZ2FwID0gXCIxMHB4XCI7XG4gICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWInKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3Rm9ybShmb3JtSUQpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uaWQgPSBmb3JtSUQ7XG4gICAgbmV3Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbmV3Rm9ybS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBuZXdGb3JtLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBuZXdGb3JtLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIG5ld0Zvcm0uc3R5bGUuZ2FwID0gXCIxMHB4XCI7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ1Byb2plY3REaWFsb2cnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZU5ld0Zvcm0oXCJwcm9qZWN0Zm9ybVwiKTtcblxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IElucHV0cy5UaXRsZUlucHV0KCd0aXRsZVByb2plY3QnKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZS5uZXdMYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUubmV3SW5wdXQpO1xuXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gaW5pdGlhbGl6ZUZvcm1CdXR0b25zKFwicHJvamVjdC1idXR0b25cIik7XG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgbmV3UHJvamVjdERpYWxvZy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaWFsb2cpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVEREaWFsb2coKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IG5ld1RERGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgbmV3VEREaWFsb2cuY2xhc3NMaXN0LmFkZCgnVEREaWFsb2cnKTtcbiAgICBjb25zdCBuZXdUREZvcm0gPSBjcmVhdGVOZXdGb3JtKFwidGRmb3JtXCIpXG5cbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBpbnB1dENvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBpbnB1dENvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjEwcHhcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gSW5wdXRzLlRpdGxlSW5wdXQoJ3RpdGxlJyk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUubmV3TGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlLm5ld0lucHV0KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gSW5wdXRzLkRlc2NyaXB0aW9uSW5wdXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24ubmV3SW5wdXQuZm9yID0gbmV3VERGb3JtLmlkO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLm5ld0xhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5uZXdJbnB1dCk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gSW5wdXRzLkR1ZURhdGVJbnB1dCgnZHVlRGF0ZScpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUubmV3TGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUubmV3SW5wdXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBJbnB1dHMuUHJpb3JpdHlJbnB1dCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5uZXdJbnB1dC5mb3IgPSBuZXdUREZvcm0uaWQ7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkubmV3TGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Lm5ld0lucHV0KTtcblxuICAgIG5ld1RERm9ybS5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBpbml0aWFsaXplRm9ybUJ1dHRvbnMoXCJ0ZC1idXR0b25cIik7XG5cbiAgICBuZXdUREZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIG5ld1RERGlhbG9nLmFwcGVuZENoaWxkKG5ld1RERm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG5ld1RERGlhbG9nKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURlbGV0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IG5ld0RlbGV0ZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIG5ld0RlbGV0ZURpYWxvZy5jbGFzc0xpc3QuYWRkKCdEZWxldGVEaWFsb2cnKTtcbiAgICBjb25zdCBkZWxldGVGb3JtID0gY3JlYXRlTmV3Rm9ybShcImRlbGV0ZWZvcm1cIik7XG5cbiAgICBjb25zdCBkZWxldGVQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVQcm9tcHQudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgdGhpcyBwcm9qZWN0PyBEb2luZyBzbyB3aWxsIGRlbGV0ZSBhbGwgZWxlbWVudHMgb2YgdGhpcyBwcm9qZWN0LlwiXG4gICAgZGVsZXRlRm9ybS5hcHBlbmRDaGlsZChkZWxldGVQcm9tcHQpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGluaXRpYWxpemVGb3JtQnV0dG9ucyhcImRlbGV0ZS1idXR0b25cIik7XG4gICAgZGVsZXRlRm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgbmV3RGVsZXRlRGlhbG9nLmFwcGVuZENoaWxkKGRlbGV0ZUZvcm0pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChuZXdEZWxldGVEaWFsb2cpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJpb3JpdHlDaGFuZ2VEaWFsb2coKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgY2hhbmdlUHJpb3JpdHlEaWFsb2cuY2xhc3NMaXN0LmFkZCgnUHJpb3JpdHlEaWFsb2cnKTtcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eUZvcm0gPSBjcmVhdGVOZXdGb3JtKFwicHJpb3JpdHlmb3JtXCIpO1xuXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBJbnB1dHMuUHJpb3JpdHlJbnB1dChcInByaW9yaXR5Q2hhbmdlXCIpO1xuICAgIHByaW9yaXR5Lm5ld0lucHV0LmZvciA9IGNoYW5nZVByaW9yaXR5Rm9ybS5pZDtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eS5uZXdMYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkubmV3SW5wdXQpO1xuXG4gICAgY2hhbmdlUHJpb3JpdHlGb3JtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBpbml0aWFsaXplRm9ybUJ1dHRvbnMoXCJwcmlvcml0eS1idXR0b25cIik7XG5cbiAgICBjaGFuZ2VQcmlvcml0eUZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNoYW5nZVByaW9yaXR5RGlhbG9nLmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5Rm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5RGlhbG9nKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURpYWxvZygpIHtcbiAgICBpbml0aWFsaXplUHJvamVjdERpYWxvZygpO1xuICAgIGluaXRpYWxpemVURERpYWxvZygpO1xuICAgIGluaXRpYWxpemVEZWxldGVQcm9qZWN0RGlhbG9nKCk7XG4gICAgaW5pdGlhbGl6ZVByaW9yaXR5Q2hhbmdlRGlhbG9nKCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVTaWRlYmFyLCBpbml0aWFsaXplQ29udGVudCwgaW5pdGlhbGl6ZURpYWxvZyB9OyIsImNvbnN0IHByb2plY3RzID0gW107XG5pbXBvcnQgKiBhcyBURE9iamVjdHMgZnJvbSBcIi4vdGRvYmplY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBJbnB1dHMgZnJvbSBcIi4vaW5wdXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbG9hZFByb2plY3RzKHByb2plY3RzUmVsb2FkZWQpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIEpTT04ucGFyc2UocHJvamVjdHNSZWxvYWRlZCkpIHtcbiAgICAgICAgYWRkUHJvamVjdChURE9iamVjdHMuUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnNlbGVjdGVkLCBwcm9qZWN0LnRvRG9MaXN0KSk7XG4gICAgfVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJlZnJlc2hTaWRlYmFyKCk7XG4gICAgICAgICAgICBzZXRUREZvcm1CdXR0b25FdmVudHMocHJvamVjdCk7XG4gICAgICAgICAgICB3cml0ZVByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdURENhcmQodGQsIHByb2plY3QsIGluZGV4KSB7XG4gICAgXG4gICAgY29uc3QgbmV3VERDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VERDYXJkLnN0eWxlLmdyaWRDb2x1bW4gPSAnMS8yJztcbiAgICBuZXdURENhcmQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIG5ld1REQ2FyZC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBuZXdURENhcmQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiYXV0byBtaW4tY29udGVudCBhdXRvIG1pbi1jb250ZW50XCI7XG4gICAgbmV3VERDYXJkLnN0eWxlLmdhcCA9IFwiMTBweFwiO1xuICAgIG5ld1REQ2FyZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIG5ld1REQ2FyZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcbiAgICBuZXdURENhcmQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgIG5ld1REQ2FyZC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgIGNvbnN0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0QnV0dG9uLnN0eWxlLndpZHRoID0gXCIxJVwiO1xuICAgIHRlc3RCdXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgdGVzdEJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0ZXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgIG5ld1REQ2FyZC5hcHBlbmRDaGlsZCh0ZXN0QnV0dG9uKTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcmlvcml0eURpYWxvZ1wiKTtcblxuICAgIHRlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2V0UHJpb3JpdHlGb3JtQnV0dG9uRXZlbnRzKHByb2plY3QsIGluZGV4KTtcbiAgICAgICAgcHJpb3JpdHlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGUuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8yXCI7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RkLnRpdGxlfWA7XG4gICAgbmV3VERDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYXJkRGVzY3JpcHRpb24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG4gICAgY2FyZERlc2NyaXB0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgIGNhcmREZXNjcmlwdGlvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb25gO1xuICAgIG5ld1REQ2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZXhwYW5kZWREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4cGFuZGVkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0ZC5kZXNjcmlwdGlvbn1gO1xuICAgIGV4cGFuZGVkRGVzY3JpcHRpb24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS81XCI7XG4gICAgZXhwYW5kZWREZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBjYXJkRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGV4cGFuZGVkRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRlZERlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjYXJkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREdWVEYXRlLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjMvNFwiO1xuICAgIGNhcmREdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RkLmR1ZURhdGV9YDtcbiAgICBuZXdURENhcmQuYXBwZW5kQ2hpbGQoY2FyZER1ZURhdGUpO1xuXG4gICAgaWYgKHRkLnByaW9yaXR5ID09IFwiaGlnaFwiKSB7XG4gICAgICAgIG5ld1REQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmVkIDElLCBsaWdodGdyZXkgMSUpXCI7XG4gICAgfSBlbHNlIGlmICh0ZC5wcmlvcml0eSA9PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIG5ld1REQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ29sZGVucm9kIDElLCBsaWdodGdyZXkgMSUpXCI7XG4gICAgfSBlbHNlIGlmICh0ZC5wcmlvcml0eSA9PSBcImxvd1wiKSB7XG4gICAgICAgIG5ld1REQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JlZW4gMSUsIGxpZ2h0Z3JleSAxJSlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrLmlkID0gXCJyZXNvbHZlXCI7XG4gICAgY2hlY2suc3R5bGUuZ3JpZENvbHVtbiA9IFwiNC81XCI7XG5cbiAgICBsZXQgdGltZW91dENoZWNrO1xuXG4gICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRpbWVvdXRDaGVjayA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9EbyhpbmRleCk7XG4gICAgICAgICAgICAgICAgd3JpdGVQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0Q2hlY2spXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBuZXdURENhcmQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgbmV3VERDYXJkLmFwcGVuZENoaWxkKGV4cGFuZGVkRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG5ld1REQ2FyZDtcbn1cblxuZnVuY3Rpb24gd3JpdGVQcm9qZWN0VG9ET00ocHJvamVjdCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICB3aGlsZSAoY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG4gICAgdGl0bGUuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIHRpdGxlLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgVERDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBURENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIFREQ29udGFpbmVyLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIFREQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBURENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnJcIjtcbiAgICBURENvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgVERDb250YWluZXIuc3R5bGUuZ2FwID0gXCI1cHhcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b0RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZCA9IHByb2plY3QudG9Eb0xpc3RbaV07XG4gICAgICAgIGNvbnN0IG5ld1REQ2FyZCA9IG1ha2VOZXdURENhcmQodGQsIHByb2plY3QsIGkpO1xuICAgICAgICBURENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdURENhcmQpO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChURENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24uc3R5bGUud2lkdGggPSAnNjBweCdcbiAgICBhZGRCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJzYwcHgnXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9ICc0OHB4JztcbiAgICBhZGRCdXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgYWRkQnV0dG9uLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIGFkZEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcbiAgICBhZGRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VEREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRERGlhbG9nXCIpO1xuICAgICAgICBuZXdURERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0Rm9ybUJ1dHRvbkV2ZW50cygpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0RGlhbG9nXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Zm9ybVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInN1YlwiKSkge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlUHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFRpdGxlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJNdXN0IGVudGVyIGEgdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBuZXcgRm9ybURhdGEobmV3UHJvamVjdEZvcm0pO1xuICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0KFRET2JqZWN0cy5Qcm9qZWN0KGZvcm1WYWx1ZXMuZ2V0KFwidGl0bGVQcm9qZWN0XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIElucHV0cy5yZXNldEZvcm0obmV3UHJvamVjdEZvcm0pO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbFwiKSkge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBJbnB1dHMucmVzZXRGb3JtKG5ld1Byb2plY3RGb3JtKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFRERm9ybUJ1dHRvbkV2ZW50cyhwcm9qZWN0KSB7XG4gICAgY29uc3QgbmV3VEREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRERGlhbG9nXCIpO1xuICAgIGNvbnN0IG5ld1RERm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZGZvcm0nKTtcbiAgICBjb25zdCBUREJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRkLWJ1dHRvblwiKTtcblxuICAgIFREQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3QnV0dG9uLCBidXR0b24pO1xuICAgICAgICAgICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiTXVzdCBlbnRlciBhIHRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIk11c3QgaW5wdXQgYSBkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgPT09IFwiLS1QbGVhc2UgY2hvb3NlIGFuIG9wdGlvbi0tXCIgfHwgcHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJNdXN0IGNob29zZSBhIHByaW9yaXR5IGxldmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IG5ldyBGb3JtRGF0YShuZXdUREZvcm0pO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvRG8oVERPYmplY3RzLlRvRG8oZm9ybVZhbHVlcy5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMuZ2V0KCdkdWVEYXRlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLmdldChcInByaW9yaXR5XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIElucHV0cy5yZXNldEZvcm0obmV3VERGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RERGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbFwiKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3QnV0dG9uID0gYnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdCdXR0b24sIGJ1dHRvbik7XG4gICAgICAgICAgICBuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIElucHV0cy5yZXNldEZvcm0obmV3VERGb3JtKTtcbiAgICAgICAgICAgICAgICBuZXdURERpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXREZWxldGVGb3JtQnV0dG9uRXZlbnRzKGluZGV4KSB7XG4gICAgY29uc3QgZGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EZWxldGVEaWFsb2dcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ1dHRvblwiKTtcblxuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdCdXR0b24gPSBidXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0J1dHRvbiwgYnV0dG9uKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW2luZGV4XS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZURpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgd3JpdGVQcm9qZWN0VG9ET00ocHJvamVjdHNbMF0pO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FuY2VsXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdCdXR0b24gPSBidXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0J1dHRvbiwgYnV0dG9uKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5Rm9ybUJ1dHRvbkV2ZW50cyhwcm9qZWN0LCBpbmRleCkge1xuICAgIGNvbnN0IHByaW9yaXR5RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcmlvcml0eURpYWxvZ1wiKTtcbiAgICBjb25zdCBwcmlvcml0eUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5Zm9ybVwiKTtcbiAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvblwiKTtcblxuICAgIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3QnV0dG9uLCBidXR0b24pO1xuICAgICAgICAgICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5Q2hhbmdlLnZhbHVlID09PSBcIi0tUGxlYXNlIGNob29zZSBhbiBvcHRpb24tLVwiIHx8IHByaW9yaXR5Q2hhbmdlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hhbmdlLnNldEN1c3RvbVZhbGlkaXR5KFwiTXVzdCBjaG9vc2UgYSBwcmlvcml0eSBsZXZlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDaGFuZ2UucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0gbmV3IEZvcm1EYXRhKHByaW9yaXR5Rm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9Eb0xpc3RbaW5kZXhdLnByaW9yaXR5ID0gZm9ybVZhbHVlcy5nZXQoXCJwcmlvcml0eUNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRzLnJlc2V0Rm9ybShwcmlvcml0eUZvcm0pO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB3cml0ZVByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FuY2VsXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdCdXR0b24gPSBidXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0J1dHRvbiwgYnV0dG9uKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgSW5wdXRzLnJlc2V0Rm9ybShwcmlvcml0eUZvcm0pO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5RGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59IFxuXG5mdW5jdGlvbiByZXNldEJ1dHRvbkNvbG9ycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzW2ldLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWZyZXNoU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWJvZHknKTtcbiAgICBcbiAgICB3aGlsZSAoc2lkZWJhckJvZHkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5LnJlbW92ZUNoaWxkKHNpZGViYXJCb2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgICAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNlbGVjdFByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XG4gICAgICAgIHNlbGVjdFByb2plY3Quc3R5bGUuZmxleCA9IFwiMSAxIGF1dG9cIjtcblxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3R5bGUuZm9udFNpemUgPSBcIjEuNXJlbVwiO1xuICAgICAgICBzZWxlY3RQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIHNlbGVjdFByb2plY3Quc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIHNlbGVjdFByb2plY3Quc3R5bGUuZm9udFNpemUgPSBcIjEuNXJlbVwiO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmV5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EZWxldGVEaWFsb2dcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldERlbGV0ZUZvcm1CdXR0b25FdmVudHMoaSk7XG4gICAgICAgICAgICBkZWxldGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNldEJ1dHRvbkNvbG9ycygpO1xuICAgICAgICAgICAgcHJvamVjdHNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaFNpZGViYXIoKTtcbiAgICAgICAgICAgIHdyaXRlUHJvamVjdFRvRE9NKHByb2plY3RzW2ldKTtcbiAgICAgICAgICAgIHNldFRERm9ybUJ1dHRvbkV2ZW50cyhwcm9qZWN0c1tpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuXG4gICAgICAgIHNpZGViYXJCb2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpOyBcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0LCB3cml0ZVByb2plY3RUb0RPTSwgc2V0UHJvamVjdEZvcm1CdXR0b25FdmVudHMsIHNldFRERm9ybUJ1dHRvbkV2ZW50cywgcmVmcmVzaFNpZGViYXIsIHByb2plY3RzIH07IiwiY29uc3QgSW5wdXQgPSAoaW5wdXRJRCwgZWxlbWVudFR5cGUpID0+IHtcblxuICAgIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdMYWJlbC5mb3IgPSBpbnB1dElEO1xuXG4gICAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBuZXdJbnB1dC5pZCA9IGlucHV0SUQ7XG4gICAgbmV3SW5wdXQubmFtZSA9IGlucHV0SUQ7XG5cbiAgICByZXR1cm4geyBuZXdMYWJlbCwgbmV3SW5wdXQgfTtcbn1cblxuY29uc3QgVGl0bGVJbnB1dCA9IChpbnB1dElEKSA9PiB7XG4gICAgY29uc3QgaW5wdXRQYWlyID0gSW5wdXQoaW5wdXRJRCwgJ2lucHV0Jyk7XG5cbiAgICBpbnB1dFBhaXIubmV3TGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgaW5wdXRQYWlyLm5ld0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRQYWlyLm5ld0lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgIGlucHV0UGFpci5uZXdJbnB1dC5tYXhMZW5ndGggPSAnMjAnO1xuXG4gICAgcmV0dXJuIGlucHV0UGFpcjsgICAgXG59XG5cbmNvbnN0IERlc2NyaXB0aW9uSW5wdXQgPSAoaW5wdXRJRCkgPT4ge1xuICAgIGNvbnN0IGlucHV0UGFpciA9IElucHV0KGlucHV0SUQsICd0ZXh0YXJlYScpO1xuXG4gICAgaW5wdXRQYWlyLm5ld0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIFxuICAgIHJldHVybiBpbnB1dFBhaXI7XG59XG5cbmNvbnN0IER1ZURhdGVJbnB1dCA9IChpbnB1dElEKSA9PiB7XG4gICAgY29uc3QgaW5wdXRQYWlyID0gSW5wdXQoaW5wdXRJRCwgJ2lucHV0Jyk7XG4gICAgXG4gICAgaW5wdXRQYWlyLm5ld0xhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnO1xuICAgIGlucHV0UGFpci5uZXdJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0UGFpci5uZXdJbnB1dC5yZXF1aXJlZCA9ICd0cnVlJztcblxuICAgIHJldHVybiBpbnB1dFBhaXI7XG59XG5cbmNvbnN0IFByaW9yaXR5SW5wdXQgPSAoaW5wdXRJRCkgPT4ge1xuICAgIGNvbnN0IGlucHV0UGFpciA9IElucHV0KGlucHV0SUQsICdzZWxlY3QnKTtcblxuICAgIGlucHV0UGFpci5uZXdMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiLS1QbGVhc2UgY2hvb3NlIGFuIG9wdGlvbi0tXCI7XG4gICAgaW5wdXRQYWlyLm5ld0lucHV0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuICAgIFxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgaGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIGlucHV0UGFpci5uZXdJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bS52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgbWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBpbnB1dFBhaXIubmV3SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvdy52YWx1ZSA9IFwibG93XCI7XG4gICAgbG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBpbnB1dFBhaXIubmV3SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIHJldHVybiBpbnB1dFBhaXI7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKTtcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGZvcm1FbGVtZW50cykge1xuICAgICAgICBlbGVtZW50LnZhbHVlID1cIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGl0bGVJbnB1dCwgRGVzY3JpcHRpb25JbnB1dCwgRHVlRGF0ZUlucHV0LCBQcmlvcml0eUlucHV0LCByZXNldEZvcm0gfTsiLCJjb25zdCBUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZDogZmFsc2V9O1xufVxuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCwgdG9Eb0xpc3QgPSBbXSkgPT4ge1xuICAgIGNvbnN0IGFkZFRvRG8gPSAodGQpID0+IHtcbiAgICAgICAgdG9Eb0xpc3QucHVzaCh0ZCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICByZXR1cm4ge3RpdGxlLCB0b0RvTGlzdCwgYWRkVG9EbywgcmVtb3ZlVG9Ebywgc2VsZWN0ZWR9O1xufVxuXG5leHBvcnQgeyBUb0RvLCBQcm9qZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBET01NYW5pcHVsYXRpb24gZnJvbSBcIi4vZG9tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBET01Jbml0IGZyb20gXCIuL2RvbWluaXRpYWxpemF0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBURE9iamVjdHMgZnJvbSBcIi4vdGRvYmplY3RzLmpzXCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVET01FbGVtZW50cygpIHtcbiAgICBET01Jbml0LmluaXRpYWxpemVEaWFsb2coKTtcbiAgICBET01NYW5pcHVsYXRpb24uc2V0UHJvamVjdEZvcm1CdXR0b25FdmVudHMoKTtcbiAgICBET01Jbml0LmluaXRpYWxpemVTaWRlYmFyKCk7XG4gICAgRE9NSW5pdC5pbml0aWFsaXplQ29udGVudCgpO1xuXG4gICAgY29uc3QgcmVsb2FkZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKCFyZWxvYWRlZFByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gVERPYmplY3RzLlByb2plY3QoJ0RlZmF1bHQnLCB0cnVlKTtcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgICAgICBET01NYW5pcHVsYXRpb24ucmVmcmVzaFNpZGViYXIoKTtcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnNldFRERm9ybUJ1dHRvbkV2ZW50cyhkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi53cml0ZVByb2plY3RUb0RPTShkZWZhdWx0UHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbG9hZFByb2plY3RzKHJlbG9hZGVkUHJvamVjdHMpO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVET01FbGVtZW50cyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KERPTU1hbmlwdWxhdGlvbi5wcm9qZWN0cykpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=