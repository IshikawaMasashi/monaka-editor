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


function downloadProject(project, uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const zipFile = new jszip__WEBPACK_IMPORTED_MODULE_1__();
        let zipName = "wasm-project.zip";
        if (uri !== undefined) {
            zipName = `wasm-project-${uri}.zip`;
        }
        const queue = [];
        project.mapEachFile((f) => queue.push({ filePrefix: "", file: f }));
        while (queue.length > 0) {
            const { filePrefix, file } = queue.shift();
            const fileName = filePrefix + file.getName();
            if (file instanceof _models__WEBPACK_IMPORTED_MODULE_0__["Directory"]) {
                file.mapEachFile(f => queue.push({ filePrefix: fileName + "/", file: f }));
                zipFile.folder(fileName);
                continue;
            }
            zipFile.file(fileName, file.value);
        }
        yield zipFile
            .generateAsync({ type: "blob", mimeType: "application/zip" })
            .then((blob) => {
            // Creating <a> to programmatically click for downloading zip via blob's URL
            const link = document.createElement("a");
            link.download = zipName;
            link.href = URL.createObjectURL(blob);
            // A fix for making link clickable in Firefox
            // Explicity adding link to DOM for Firefox
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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