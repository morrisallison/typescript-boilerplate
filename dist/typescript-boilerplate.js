/*
 * @morrisallison/typescript-boilerplate v1.0.0
 * Copyright (c) Morris Allison III <author@morris.xyz> (http://morris.xyz). All rights reserved.
 * Released under the MIT license
 * @preserve
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('typescript-boilerplate', ['exports'], factory) :
	(factory((global.TypeScriptBoilerplate = {})));
}(this, (function (exports) { 'use strict';

function hello() {
    return 'Hello World!';
}
function insertDiv() {
    document.body.insertAdjacentHTML('beforeend', '<div></div>');
}

exports.hello = hello;
exports.insertDiv = insertDiv;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=typescript-boilerplate.js.map
