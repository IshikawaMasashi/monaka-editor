(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/utils/download.ts":
/*!*******************************!*\
  !*** ./src/utils/download.ts ***!
  \*******************************/
/*! exports provided: downloadProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadProject", function() { return downloadProject; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function downloadProject(project, uri) {
    return __awaiter(this, void 0, void 0, function () {
        var zipFile, zipName, queue, _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    zipFile = new jszip__WEBPACK_IMPORTED_MODULE_1__();
                    zipName = "wasm-project.zip";
                    if (uri !== undefined) {
                        zipName = "wasm-project-" + uri + ".zip";
                    }
                    queue = [];
                    project.mapEachFile(function (f) { return queue.push({ filePrefix: "", file: f }); });
                    _loop_1 = function () {
                        var _a = queue.shift(), filePrefix = _a.filePrefix, file = _a.file;
                        var fileName = filePrefix + file.getName();
                        if (file instanceof _models__WEBPACK_IMPORTED_MODULE_0__["Directory"]) {
                            file.mapEachFile(function (f) {
                                return queue.push({ filePrefix: fileName + "/", file: f });
                            });
                            zipFile.folder(fileName);
                            return "continue";
                        }
                        zipFile.file(fileName, file.value);
                    };
                    while (queue.length > 0) {
                        _loop_1();
                    }
                    return [4 /*yield*/, zipFile
                            .generateAsync({ type: "blob", mimeType: "application/zip" })
                            .then(function (blob) {
                            // Creating <a> to programmatically click for downloading zip via blob's URL
                            var link = document.createElement("a");
                            link.download = zipName;
                            link.href = URL.createObjectURL(blob);
                            // A fix for making link clickable in Firefox
                            // Explicity adding link to DOM for Firefox
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map