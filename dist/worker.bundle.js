!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./dist/",t(t.s=808)}({808:function(e,n,t){"use strict";t.r(n);var i=t(88),r=function(e,n,t,i){return new(t||(t=Promise))((function(r,a){function o(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((i=i.apply(e,n||[])).next())}))};function a(){return r(this,void 0,void 0,(function*(){"undefined"==typeof Binaryen&&importScripts("https://cdn.rawgit.com/AssemblyScript/binaryen.js/v48.0.0-nightly.20180624/index.js")}))}function o(){return r(this,void 0,void 0,(function*(){"undefined"==typeof wabt&&(self.global=self,importScripts("https://cdn.rawgit.com/AssemblyScript/wabt.js/v1.0.0-nightly.20180421/index.js"))}))}let s=null;function l(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.readBinary(new Uint8Array(e));return n.optimize(),Promise.resolve(n.emitBinary())}))}function d(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.readBinary(new Uint8Array(e));return Promise.resolve(n.validate())}))}function u(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.readBinary(new Uint8Array(e)),t=Binaryen.print;let i="";return Binaryen.print=e=>{i+=e+"\n"},n.runPasses(["print-call-graph"]),Binaryen.print=t,Promise.resolve(i)}))}function m(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.readBinary(new Uint8Array(e));return n.optimize(),Promise.resolve(n.emitAsmjs())}))}function c(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.readBinary(new Uint8Array(e));return Promise.resolve(n.emitText())}))}function y(e){return r(this,void 0,void 0,(function*(){yield a();const n=Binaryen.parseText(e);return Promise.resolve(n.emitBinary())}))}function f(e){return r(this,void 0,void 0,(function*(){yield o();const n=wabt.readWasm(e,{readDebugNames:!0});return n.generateNames(),n.applyNames(),Promise.resolve(n.toText({foldExprs:!1,inlineExport:!0}))}))}function p(e){return r(this,void 0,void 0,(function*(){yield o();const n=wabt.parseWat("test.wat",e);return n.resolveNames(),n.validate(),Promise.resolve(n.toBinary({log:!0,write_debug_names:!0}).buffer)}))}function h(e){return r(this,void 0,void 0,(function*(){let n;yield function(){return r(this,void 0,void 0,(function*(){s||(importScripts("../lib/twiggy_wasm_api.js"),yield wasm_bindgen("../lib/twiggy_wasm_api_bg.wasm"),s={Items:wasm_bindgen.Items,Top:wasm_bindgen.Top,Paths:wasm_bindgen.Paths,Monos:wasm_bindgen.Monos,Dominators:wasm_bindgen.Dominators})}))}();const t=s.Items.parse(new Uint8Array(e));let i="# Twiggy Analysis\n\nTwiggy is a code size profiler, learn more about it [here](https://github.com/rustwasm/twiggy).\n\n";n=s.Top.new();const a=JSON.parse(t.top(n));i+="## Top\n\n",i+="| Shallow Bytes | Shallow % | Item |\n",i+="| ------------: | --------: | :--- |\n";let o=0;a.forEach(e=>{e.shallow_size_percent>=.1?i+=`| ${e.shallow_size} | ${e.shallow_size_percent.toFixed(2)} | \`${e.name}\` |\n`:o++}),o&&(i+=`\n### Note:\n${o} items had a shallow size percent less than 0.1 and were not listed above.\n`),i+="\n\n## Dominators\n\n",i+="| Retained Bytes | Retained % | Dominator Tree |\n",i+="| ------------: | --------: | :--- |\n";return o=0,n=s.Dominators.new(),function e(n,t){let r="";for(let e=0;e<t-1;e++)r+="   ";t&&(r+="⤷ "),i+=`| ${n.retained_size} | ${n.retained_size_percent.toFixed(2)} | \`${r+n.name}\` |\n`,n.children&&n.children.forEach(n=>{n.retained_size_percent>=.1?e(n,t+1):o++})}(JSON.parse(t.dominators(n)),0),o&&(i+=`\n### Note:\n${o} items had a retained size percent less than 0.1 and were not listed above.\n`),Promise.resolve(i)}))}onmessage=e=>{const n={[i.a.OptimizeWasmWithBinaryen]:l,[i.a.ValidateWasmWithBinaryen]:d,[i.a.CreateWasmCallGraphWithBinaryen]:u,[i.a.ConvertWasmToAsmWithBinaryen]:m,[i.a.DisassembleWasmWithBinaryen]:c,[i.a.AssembleWatWithBinaryen]:y,[i.a.DisassembleWasmWithWabt]:f,[i.a.AssembleWatWithWabt]:p,[i.a.TwiggyWasm]:h}[e.data.command];!function(e,n){if(!e)throw new Error(n)}(n,`Command ${e.data.command} not found.`),function(e,n){r(this,void 0,void 0,(function*(){const t={id:e.id,payload:null,success:!0};try{t.payload=yield n(e.payload)}catch(e){t.payload={message:e.message},t.success=!1}postMessage(t,void 0)}))}(e.data,n)}},88:function(e,n,t){"use strict";var i;t.d(n,"a",(function(){return i})),function(e){e[e.OptimizeWasmWithBinaryen=0]="OptimizeWasmWithBinaryen",e[e.ValidateWasmWithBinaryen=1]="ValidateWasmWithBinaryen",e[e.CreateWasmCallGraphWithBinaryen=2]="CreateWasmCallGraphWithBinaryen",e[e.ConvertWasmToAsmWithBinaryen=3]="ConvertWasmToAsmWithBinaryen",e[e.DisassembleWasmWithBinaryen=4]="DisassembleWasmWithBinaryen",e[e.AssembleWatWithBinaryen=5]="AssembleWatWithBinaryen",e[e.DisassembleWasmWithWabt=6]="DisassembleWasmWithWabt",e[e.AssembleWatWithWabt=7]="AssembleWatWithWabt",e[e.TwiggyWasm=8]="TwiggyWasm"}(i||(i={}))}});