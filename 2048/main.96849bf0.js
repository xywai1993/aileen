parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"GqqL":[function(require,module,exports) {

},{}],"uc15":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"5XCH":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"qQ7E":[function(require,module,exports) {
var e=require("./_to-integer"),r=require("./_defined");module.exports=function(t){return function(n,i){var o,u,c=String(r(n)),d=e(i),a=c.length;return d<0||d>=a?t?"":void 0:(o=c.charCodeAt(d))<55296||o>56319||d+1===a||(u=c.charCodeAt(d+1))<56320||u>57343?t?c.charAt(d):o:t?c.slice(d,d+2):u-56320+(o-55296<<10)+65536}};
},{"./_to-integer":"uc15","./_defined":"5XCH"}],"bdh6":[function(require,module,exports) {
module.exports=!0;
},{}],"XFIe":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"dqAF":[function(require,module,exports) {
var e=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);
},{}],"5nCe":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"jFcs":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"5nCe"}],"jj57":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"w4mz":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"jj57"}],"h+XT":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],"hd3X":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"h+XT"}],"ItUS":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"jj57","./_global":"XFIe"}],"H2dS":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"hd3X","./_fails":"h+XT","./_dom-create":"ItUS"}],"eM+t":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"jj57"}],"YAFO":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"w4mz","./_ie8-dom-define":"H2dS","./_to-primitive":"eM+t","./_descriptors":"hd3X"}],"Irt8":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"/L7a":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"YAFO","./_property-desc":"Irt8","./_descriptors":"hd3X"}],"SAz4":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"qJpY":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"XFIe","./_core":"dqAF","./_ctx":"jFcs","./_hide":"/L7a","./_has":"SAz4"}],"rdPA":[function(require,module,exports) {
module.exports=require("./_hide");
},{"./_hide":"/L7a"}],"NhqS":[function(require,module,exports) {
module.exports={};
},{}],"XKlW":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"Gl4i":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"XKlW"}],"CDBu":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"Gl4i","./_defined":"5XCH"}],"Rwlq":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"uc15"}],"m+aK":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"uc15"}],"f1XA":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"CDBu","./_to-length":"Rwlq","./_to-absolute-index":"m+aK"}],"P3jJ":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"dqAF","./_global":"XFIe","./_library":"bdh6"}],"3j2j":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"HCCw":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"P3jJ","./_uid":"3j2j"}],"77jj":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"SAz4","./_to-iobject":"CDBu","./_array-includes":"f1XA","./_shared-key":"HCCw"}],"Nz1j":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"aZdp":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"77jj","./_enum-bug-keys":"Nz1j"}],"XCVD":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"YAFO","./_an-object":"w4mz","./_object-keys":"aZdp","./_descriptors":"hd3X"}],"441S":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"XFIe"}],"1GJS":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"w4mz","./_object-dps":"XCVD","./_enum-bug-keys":"Nz1j","./_shared-key":"HCCw","./_dom-create":"ItUS","./_html":"441S"}],"HNZL":[function(require,module,exports) {
var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
},{"./_shared":"P3jJ","./_uid":"3j2j","./_global":"XFIe"}],"tgN/":[function(require,module,exports) {
var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
},{"./_object-dp":"YAFO","./_has":"SAz4","./_wks":"HNZL"}],"9nBx":[function(require,module,exports) {
"use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
},{"./_object-create":"1GJS","./_property-desc":"Irt8","./_set-to-string-tag":"tgN/","./_hide":"/L7a","./_wks":"HNZL"}],"CaiI":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"5XCH"}],"6QD6":[function(require,module,exports) {
var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
},{"./_has":"SAz4","./_to-object":"CaiI","./_shared-key":"HCCw"}],"N9Lu":[function(require,module,exports) {
"use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_iterators"),u=require("./_iter-create"),o=require("./_set-to-string-tag"),s=require("./_object-gpo"),a=require("./_wks")("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",l="keys",q="values",y=function(){return this};module.exports=function(_,p,h,k,v,w,d){u(h,p,k);var x,b,g,j=function(e){if(!c&&e in I)return I[e];switch(e){case l:case q:return function(){return new h(this,e)}}return function(){return new h(this,e)}},m=p+" Iterator",A=v==q,F=!1,I=_.prototype,O=I[a]||I[f]||v&&I[v],P=O||j(v),z=v?A?j("entries"):P:void 0,B="Array"==p&&I.entries||O;if(B&&(g=s(B.call(new _)))!==Object.prototype&&g.next&&(o(g,m,!0),e||"function"==typeof g[a]||i(g,a,y)),A&&O&&O.name!==q&&(F=!0,P=function(){return O.call(this)}),e&&!d||!c&&!F&&I[a]||i(I,a,P),n[p]=P,n[m]=y,v)if(x={values:A?P:j(q),keys:w?P:j(l),entries:z},d)for(b in x)b in I||t(I,b,x[b]);else r(r.P+r.F*(c||F),p,x);return x};
},{"./_library":"bdh6","./_export":"qJpY","./_redefine":"rdPA","./_hide":"/L7a","./_iterators":"NhqS","./_iter-create":"9nBx","./_set-to-string-tag":"tgN/","./_object-gpo":"6QD6","./_wks":"HNZL"}],"TIm/":[function(require,module,exports) {
"use strict";var i=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(i){this._t=String(i),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})});
},{"./_string-at":"qQ7E","./_iter-define":"N9Lu"}],"BK6s":[function(require,module,exports) {
var r=require("./_an-object");module.exports=function(t,e,o,a){try{return a?e(r(o)[0],o[1]):e(o)}catch(e){var c=t.return;throw void 0!==c&&r(c.call(t)),e}};
},{"./_an-object":"w4mz"}],"uZGm":[function(require,module,exports) {
var r=require("./_iterators"),e=require("./_wks")("iterator"),t=Array.prototype;module.exports=function(o){return void 0!==o&&(r.Array===o||t[e]===o)};
},{"./_iterators":"NhqS","./_wks":"HNZL"}],"cwz0":[function(require,module,exports) {
"use strict";var e=require("./_object-dp"),r=require("./_property-desc");module.exports=function(t,i,o){i in t?e.f(t,i,r(0,o)):t[i]=o};
},{"./_object-dp":"YAFO","./_property-desc":"Irt8"}],"nkfP":[function(require,module,exports) {
var e=require("./_cof"),t=require("./_wks")("toStringTag"),n="Arguments"==e(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(e){}};module.exports=function(u){var o,c,i;return void 0===u?"Undefined":null===u?"Null":"string"==typeof(c=r(o=Object(u),t))?c:n?e(o):"Object"==(i=e(o))&&"function"==typeof o.callee?"Arguments":i};
},{"./_cof":"XKlW","./_wks":"HNZL"}],"H69A":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(o){if(null!=o)return o[e]||o["@@iterator"]||t[r(o)]};
},{"./_classof":"nkfP","./_wks":"HNZL","./_iterators":"NhqS","./_core":"dqAF"}],"VMQO":[function(require,module,exports) {
var r=require("./_wks")("iterator"),t=!1;try{var n=[7][r]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(r){}module.exports=function(n,e){if(!e&&!t)return!1;var u=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:u=!0}},o[r]=function(){return c},n(o)}catch(r){}return u};
},{"./_wks":"HNZL"}],"LatC":[function(require,module,exports) {
"use strict";var e=require("./_ctx"),r=require("./_export"),t=require("./_to-object"),i=require("./_iter-call"),o=require("./_is-array-iter"),u=require("./_to-length"),n=require("./_create-property"),a=require("./core.get-iterator-method");r(r.S+r.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(r){var l,c,f,q,_=t(r),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,s=0,g=a(_);if(d&&(y=e(y,v>2?arguments[2]:void 0,2)),null==g||h==Array&&o(g))for(c=new h(l=u(_.length));l>s;s++)n(c,s,d?y(_[s],s):_[s]);else for(q=g.call(_),c=new h;!(f=q.next()).done;s++)n(c,s,d?i(q,y,[f.value,s],!0):f.value);return c.length=s,c}});
},{"./_ctx":"jFcs","./_export":"qJpY","./_to-object":"CaiI","./_iter-call":"BK6s","./_is-array-iter":"uZGm","./_to-length":"Rwlq","./_create-property":"cwz0","./core.get-iterator-method":"H69A","./_iter-detect":"VMQO"}],"ES7z":[function(require,module,exports) {
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/_core").Array.from;
},{"../../modules/es6.string.iterator":"TIm/","../../modules/es6.array.from":"LatC","../../modules/_core":"dqAF"}],"LVSw":[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/array/from"),__esModule:!0};
},{"core-js/library/fn/array/from":"ES7z"}],"dAYW":[function(require,module,exports) {
var r=require("../../modules/_core"),i=r.JSON||(r.JSON={stringify:JSON.stringify});module.exports=function(r){return i.stringify.apply(i,arguments)};
},{"../../modules/_core":"dqAF"}],"ZBXG":[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/json/stringify"),__esModule:!0};
},{"core-js/library/fn/json/stringify":"dAYW"}],"vv5C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babel-runtime/core-js/array/from"),t=a(e),r=require("babel-runtime/core-js/json/stringify"),n=a(r);function a(e){return e&&e.__esModule?e:{default:e}}var o={deepClone:function(e){return JSON.parse((0,n.default)(e))},createArray:function(e){return(0,t.default)({length:e}).map(function(e,t){return t})},touchDirection:function(e,t,r){void 0===r&&(r=30);var n=0,a=0,o=0,u=0,i={dir:"",isTouch:!1},c=r;e.addEventListener("touchstart",function(e){i.isTouch=!1;var t=e.targetTouches[0];n=t.pageX,a=t.pageY},!1),e.addEventListener("touchmove",function(e){i.isTouch=!0;var t=e.targetTouches[0];o=t.pageX,u=t.pageY},!1),e.addEventListener("touchend",function(){var e=o-n,r=u-a;Math.abs(e)>Math.abs(r)?e<-c?i.dir="left":e>c&&(i.dir="right"):(r<-c&&(i.dir="top"),r>c&&(i.dir="bottom")),t(i)},!1)}};exports.default=o;
},{"babel-runtime/core-js/array/from":"LVSw","babel-runtime/core-js/json/stringify":"ZBXG"}],"+gvT":[function(require,module,exports) {
"use strict";require("./style.css");var n=require("./tool"),e=o(n);function o(n){return n&&n.__esModule?n:{default:n}}var t=4,u=4,a=20,r=0,c=document.querySelector("#replay"),l=document.querySelector("#canvas"),f=l.getContext("2d"),i=[],m=function(n,o){var t=E();f.fillStyle=t.backgroundColor,e.default.createArray(n).forEach(function(n){e.default.createArray(o).forEach(function(e){var o=s(n,e);f.fillRect(o.left,o.top,r,r)})})},d=function(n,e,o){var u=s(e,o),a=E(n),c=r/2;f.fillStyle=a.backgroundColor,f.fillRect(u.left,u.top,r,r),f.fillStyle=a.color,f.font=a.fontSize+"px serif";var l=f.measureText(String(n)).width;f.fillText(String(n),u.left+r/2-l/2,u.top+c+15),i[e*t+o].num=n},s=function(n,e){return{top:n*r+(n+1)*a,left:e*r+(e+1)*a}},p=function(){var n=document.documentElement.offsetWidth;console.log(n),r=Math.ceil((n-a*(u+1))/u),a=Math.floor((n-r*u)/5),console.log(r,a),l.width=n-2,l.height=n-2},v=function(n,o){i=[],e.default.createArray(n).forEach(function(n){e.default.createArray(o).forEach(function(e){i.push({num:"",row:n,col:e})})})},h=function(){var n=i.filter(function(n,e){return!n.num});if(!(n.length<=0)){var e=n[Math.floor(Math.random()*n.length)],o=Math.floor(100*Math.random())>50?2:4;d(o,e.row,e.col)}},g=function(){for(var n=!0,e=i.filter(function(n,e){return!n.num}),o=0;o<i.length;o++){var t=i[o],a=0===t.row?null:i[o-u].num,r=3===t.row?null:i[o+u].num,c=0===t.col?null:i[o-1].num,l=3===t.col?null:i[o+1].num,f=t.num;if(f===a||f===r||f===c||f===l){n=!1;break}}return 0===e.length&&n},b=function(){var n=function(){var n=[];return e.default.createArray(t).map(function(o){var u=e.default.deepClone(i);n.push(u.slice(o*t,(o+1)*t))}),console.log(e.default.deepClone(n)),n},o=function(){n().map(function(n){var o=0;n.map(function(n,u){if(n.num){var a=n.row*t+n.col;o&&(i[a-o].num=e.default.deepClone(n.num),i[a].num="")}else o++})})};o(),console.log(e.default.deepClone(i)),n().map(function(n){n.map(function(e,o){if(e.num){var u=e.row*t+e.col,a=n[o+1]?n[o+1]:null;a&&e.num===a.num&&i[u].num===e.num&&(i[u].num=2*e.num,i[u+1].num="")}})}),o(),console.log(i)},k=function(){var n=function(){var n=[];return e.default.createArray(t).map(function(o){var u=e.default.deepClone(i);n.push(u.slice(o*t,(o+1)*t))}),console.log(e.default.deepClone(n)),n},o=function(){n().map(function(n){var o=0;n.map(function(a,r){var c=n[u-r-1];if(c.num){var l=c.row*t+c.col;o&&(i[l+o].num=e.default.deepClone(c.num),i[l].num="")}else o++})})};o(),n().map(function(n){n.map(function(e,o){var a=n[u-o-1];if(a.num){var r=a.row*t+a.col,c=n[u-o-2]?n[u-o-2]:null;c&&a.num===c.num&&i[r].num===a.num&&(i[r].num=2*a.num,i[r-1].num="")}})}),o()},w=function(){var n=function(){var n=[];return e.default.deepClone(i).map(function(e,o){n[e.col]=n[e.col]?n[e.col]:[],n[e.col][e.row]=e}),console.log(n),n},o=function(){n().map(function(n){var o=0;n.map(function(n,u){if(n.num){var a=n.row*t+n.col;o&&(i[a-o*t].num=e.default.deepClone(n.num),i[a].num="")}else o++})})};o(),n().map(function(n){n.map(function(e,o){if(e.num){var u=e.row*t+e.col,a=n[o+1]?n[o+1]:null;a&&e.num===a.num&&i[u].num===e.num&&(i[u].num=2*e.num,i[u+t].num="")}})}),o()},C=function(){var n=function(){console.log(i);var n=[];return e.default.deepClone(i).map(function(e){n[e.col]=n[e.col]?n[e.col]:[],n[e.col][e.row]=e}),console.log(n),n},o=function(){n().map(function(n){var o=0;n.map(function(u,a){var r=n[t-a-1];if(r.num){var c=r.row*t+r.col;o&&(i[c+o*t].num=e.default.deepClone(r.num),i[c].num="")}else o++})})};o(),n().map(function(n){n.map(function(e,o){var u=n[t-o-1];if(u.num){var a=u.row*t+u.col,r=n[t-o-2]?n[t-o-2]:null;r&&u.num===r.num&&i[a].num===u.num&&(i[a].num=2*u.num,i[a-t].num="")}})}),o()},y=function(){g()?alert("你死了"):(f.clearRect(0,0,l.width,l.height),m(t,u),i.map(function(n){n.num&&d(n.num,n.row,n.col)}),h())},E=function(n){void 0===n&&(n="");var e="#eee4da",o="white",t=46;switch(n){case 2:e="#eee4da",o="#776e50";break;case 4:e="#ede0c8",o="#776e50";break;case 8:e="#f2b179";break;case 16:e="#f59563";break;case 32:e="#f67c5f";break;case 64:e="#f65e3b";break;case 128:e="#edcf72",t=32;break;case 256:e="#edcc61",t=32;break;case 512:e="#9c0",t=32;break;case 1024:e="#33b5e5",t=20;break;case 2048:e="#09c",t=20}return{backgroundColor:e,color:o,fontSize:t}},S=function(){f.clearRect(0,0,l.width,l.height),v(t,u),m(t,u),h()};p(),S(),e.default.touchDirection(l,function(n){if(console.log(n),n.isTouch){switch(n.dir){case"left":b();break;case"right":k();break;case"top":w();break;case"bottom":C()}y()}});var L={LEFT:37,UP:38,RIGHT:39,DOWN:40};document.addEventListener("keyup",function(n){switch(n.keyCode){case L.UP:w(),y();break;case L.RIGHT:k(),y();break;case L.DOWN:C(),y();break;case L.LEFT:b(),y()}}),document.addEventListener("touchstart",function(n){},!1),c.addEventListener("click",function(){S()},!1),l.addEventListener("touchstart",function(n){n.stopPropagation(),n.preventDefault()}),l.addEventListener("touchmove",function(n){n.stopPropagation(),n.preventDefault()}),l.addEventListener("touchend",function(n){n.stopPropagation(),n.preventDefault()});
},{"./style.css":"GqqL","./tool":"vv5C"}]},{},["+gvT"], null)
//# sourceMappingURL=main.96849bf0.map