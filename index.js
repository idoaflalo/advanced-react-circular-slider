module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){e.exports=n(4)()},function(e,t){e.exports=require("react")},function(e,t,n){(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(t=n(7)(!1)).push([e.i,"@keyframes pulse {\n\t0% {\n\t\ttransform: scale(1);\n\t}\n\t50% {\n\t\ttransform: scale(0.8);\n\t}\n\t100% {\n\t\ttransform: scale(1);\n\t}\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(0),l=n.n(c);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e,t){switch(t.type){case"init":case"setKnobPosition":return u({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return u({},e,{},t.payload);default:throw new Error}};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){var e=d(Object(r.useState)(!0),2),t=e[0],n=e[1];return Object(r.useEffect)((function(){n(!1)}),[]),t};n(6);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=o.a.forwardRef((function(e,t){var n=e.isDragging,r=e.knobPosition,a=e.knobColor,i=e.knobSize,c=e.hideKnob,l=e.onMouseDown,s=e.onMouseUp,u=e.trackSize,f=e.children,p={knob:{position:"absolute",left:"-".concat(i/2-u/2,"px"),top:"-".concat(i/2-u/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return o.a.createElement("div",{ref:t,style:v({transform:"translate(".concat(r.x,"px, ").concat(r.y,"px)")},p.knob,{},n&&p.dragging,{},c&&p.hide),onMouseDown:function(){return l},onTouchStart:l,onTouchEnd:s},o.a.createElement("svg",{ref:t,width:"".concat(i,"px"),height:"".concat(i,"px"),viewBox:"0 0 ".concat(i," ").concat(i)},o.a.createElement("circle",{style:v({},p.animation,{},n&&p.pause),fill:a,fillOpacity:"0.2",stroke:"none",cx:i/2,cy:i/2,r:i/2}),o.a.createElement("circle",{fill:a,stroke:"none",cx:i/2,cy:i/2,r:2*i/3/2}),f||o.a.createElement("svg",{width:"".concat(i,"px"),height:"".concat(i,"px"),viewBox:"0 0 36 36"},o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}));h.propTypes={isDragging:l.a.bool,knobPosition:l.a.object,knobColor:l.a.string,knobRadius:l.a.number,knobSize:l.a.number,trackSize:l.a.number,children:l.a.element,onMouseDown:l.a.func};var O=h;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){var t=e.labelColor,n=e.labelBottom,r=e.labelFontSize,a=e.valueFontSize,i=e.appendToValue,c=e.prependToValue,l=e.verticalOffset,s=e.hideLabelValue,u=e.label,f={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(a),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(l,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:k({},f.labels,{},s&&f.hide)},n||o.a.createElement("div",{style:{fontSize:r}},u),o.a.createElement("div",{style:k({},f.value,{},!n&&f.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:f.prepended},c),(null==u?void 0:u.value)||u,o.a.createElement("span",{style:f.appended},i))),n&&o.a.createElement("div",{style:{fontSize:r}},u))};S.propTypes={label:c.any,labelColor:l.a.string,labelBottom:l.a.bool,labelFontSize:l.a.string,valueFontSize:l.a.string,appendToValue:l.a.string,prependToValue:l.a.string,verticalOffset:l.a.string,hideLabelValue:l.a.bool};var P=S,x=function(e){var t=e.width,n=e.limit,r=(e.max,e.label),a=e.labelColor,i=e.labelFontSize,c=e.labelOffset,l=e.activedlabelColor,s=e.direction,u=e.strokeDasharray,f=e.strokeDashoffset,p=e.progressColorFrom,d=e.progressColorTo,b=e.trackColor,y=e.doubleLineColor,m=e.progressSize,v=e.trackSize,g=e.svgFullPath,h=e.radiansOffset,O=e.progressLineCap,j=e.offsetAngle,k=e.data,w=e.activedItem,S=e.onLableClick,P={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(h,"rad) ").concat(-1===s?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"},label:{transform:"translateY(20px)"},text:{textAnchor:"middle",fontSize:i,fill:a,cursor:"pointer"},activedTitle:{fill:l,transition:"all 0.6s ease-in-out"}},x=v/2,E=u*(360-n)/360,C=t/2+c,D=k?n/k.length:1;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:P.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:r,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:p}),o.a.createElement("stop",{offset:"100%",stopColor:d}))),o.a.createElement("path",{className:"progress-line",style:P.path,strokeDasharray:u,strokeDashoffset:E,strokeWidth:v,stroke:b,strokeLinecap:O,fill:"none",d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-x,"\n            a ").concat(t/2-x,",").concat(t/2-x," 0 0,1 0,").concat(t-2*x,"\n            a -").concat(t/2-x,",-").concat(t/2-x," 0 0,1 0,-").concat(t-2*x,"\n        ")}),o.a.createElement("path",{style:P.path,strokeDasharray:u*(t/2)/C,strokeDashoffset:f*(t/2)/C,strokeWidth:m,strokeLinecap:O,fill:"none",stroke:y,d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-m,"\n            a ").concat(t/2-m,",").concat(t/2-m," 0 0,1 0,").concat(t-2*m,"\n            a -").concat(t/2-m,",-").concat(t/2-m," 0 0,1 0,-").concat(t-2*m,"\n        ")}),o.a.createElement("path",{style:P.path,ref:g,strokeDasharray:u,strokeDashoffset:f,strokeWidth:m,strokeLinecap:"round"!==O?"butt":"round",fill:"none",stroke:"url(#".concat(r,")"),d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-x,"\n            a ").concat(t/2-x,",").concat(t/2-x," 0 0,1 0,").concat(t-2*x,"\n            a -").concat(t/2-x,",-").concat(t/2-x," 0 0,1 0,-").concat(t-2*x,"\n        ")}),o.a.createElement("path",{id:"myTextPath",d:"\n          M ".concat(C,",").concat(C," m ").concat(-C,", 0  \n          A ").concat(C,",").concat(C," 0 0 1 0,").concat(C," \n          A ").concat(C,",").concat(C," 0 0 1 -").concat(C,",0 \n          A ").concat(C,",").concat(C," 0 0 1 0,-").concat(C," \n          A ").concat(C,",").concat(C," 0 0 1 0,").concat(C,"\n        "),transform:"translate(".concat(t/2,",").concat(t/2,")"),fill:"none",stroke:"none"}),o.a.createElement("text",{style:P.text},null==k?void 0:k.map((function(e,t){return o.a.createElement("textPath",{xlinkHref:"#myTextPath",startOffset:"".concat((D*t+D/2-j)/3.6,"%"),key:t},o.a.createElement("tspan",{style:t===w&&P.activedTitle||{},onClick:function(){return S(t)}},e.value))}))))};x.propTypes={width:l.a.number,label:l.a.string,direction:l.a.number,svgFullPath:l.a.object,strokeDasharray:l.a.number,strokeDashoffset:l.a.number,progressColorFrom:l.a.string,progressColorTo:l.a.string,progressLineCap:l.a.string,progressSize:l.a.number,trackColor:l.a.string,trackSize:l.a.number,radiansOffset:l.a.number};var E=x;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},L=function(e,t){return A[e]+t/180*Math.PI},R=function(e){return e<0?-1:1},V=function(e){return e*Math.PI/180},_=function(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n},B=function(e){var t=e.label,n=void 0===t?"SERVICES":t,a=e.width,c=void 0===a?280:a,l=e.direction,s=void 0===l?1:l,u=e.min,f=void 0===u?0:u,d=e.max,b=void 0===d?360:d,m=e.limit,v=void 0===m?360:m,g=e.offsetAngle,h=void 0===g?0:g,j=e.knobColor,k=void 0===j?"#4e63ea":j,w=e.knobSize,S=void 0===w?36:w,x=e.knobPosition,C=void 0===x?"top":x,F=e.hideKnob,z=void 0!==F&&F,I=e.knobDraggable,A=void 0===I||I,B=e.knobEl,U=void 0===B?null:B,W=e.labelBottom,K=void 0!==W&&W,Y=e.labelColor,N=void 0===Y?"#272b77":Y,X=e.labelFontSize,q=void 0===X?"1rem":X,H=e.labelOffset,$=void 0===H?20:H,G=e.activedlabelColor,J=void 0===G?"#c54a1b":G,Q=e.valueFontSize,Z=void 0===Q?"3rem":Q,ee=e.appendToValue,te=void 0===ee?"":ee,ne=e.prependToValue,re=void 0===ne?"":ne,oe=e.verticalOffset,ae=void 0===oe?"1.5rem":oe,ie=e.hideLabelValue,ce=void 0!==ie&&ie,le=e.progressColorFrom,se=void 0===le?"#80C3F3":le,ue=e.progressColorTo,fe=void 0===ue?"#4990E2":ue,pe=e.progressSize,de=void 0===pe?8:pe,be=e.trackColor,ye=void 0===be?"#DDDEFB":be,me=e.trackSize,ve=void 0===me?8:me,ge=e.doubleLineColor,he=void 0===ge?"#DDDEFB":ge,Oe=e.data,je=void 0===Oe?[]:Oe,ke=e.dataIndex,we=void 0===ke?0:ke,Se=e.progressLineCap,Pe=void 0===Se?"round":Se,xe=e.renderLabelValue,Ee=void 0===xe?null:xe,Ce=e.onChange,De=void 0===Ce?function(e){}:Ce,Fe=c-2*$,Te={mounted:!1,isDragging:!1,contentWidth:Fe,radius:Fe/2,knobPosition:C,label:0,data:je,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},Me=Object(r.useRef)(null),ze=Object(r.useRef)(null),Ie=Object(r.useRef)(null),Ae=Object(r.useRef)(0),Le=(Object(r.useRef)(!1),y()),Re=M(Object(r.useReducer)(p,Te),2),Ve=Re[0],_e=Re[1],Be=M(o.a.useState(null),2),Ue=Be[0],We=Be[1],Ke=M(o.a.useState(null),2),Ye=Ke[0],Ne=Ke[1],Xe=Object(r.useRef)(null),qe=Object(r.useCallback)((function(e){var t=Ve.radius-ve/2,n=e+L(C,h),r=(n>0?n:2*Math.PI+n)*(360/(2*Math.PI));if("bottom"===C&&r>v)return!0;if("top"===C&&r<360-v)return r=360-v,!0;var o=r/360*Ve.dashFullArray;r=-1===R(s)?360-r:r,Ae.current=r;var a=Ve.data.length/360,i=Math.round(r*a),c=Math.floor(r*je.length/v);We(c),Ve.data[i]!==Ve.label&&De(Ve.data[i]),_e({type:"setKnobPosition",payload:{dashFullOffset:-1===R(s)?o:Ve.dashFullArray-o,label:Ve.data[i],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[h,v,Ve.dashFullArray,Ve.radius,Ve.data,Ve.label,C,ve,s,De]),He=function(){Xe.current=!0,_e({type:"onMouseDown",payload:{isDragging:!0}})},$e=function(){Xe.current=!1,_e({type:"onMouseUp",payload:{isDragging:!1}}),setTimeout((function(){Ne(Math.random())}),200)},Ge=Object(r.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Xe.current){var n;t&&e.preventDefault(),"touchmove"===e.type&&(n=e.changedTouches[0]);var r=function(e){var t,n,r,o,a,c,l,s,u=e.current.getBoundingClientRect(),f=!Le&&((null!==(t=null===i.a||void 0===i.a?void 0:i.a.pageXOffset)&&void 0!==t?t:0)||(null!==(n=null===(r=document)||void 0===r||null===(o=r.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==n?n:0)),p=!Le&&((null!==(a=null===i.a||void 0===i.a?void 0:i.a.pageYOffset)&&void 0!==a?a:0)||(null!==(c=null===(l=document)||void 0===l||null===(s=l.documentElement)||void 0===s?void 0:s.scrollTop)&&void 0!==c?c:0));return{top:u.top+p,left:u.left+f}},o=("touchmove"===e.type?n.pageX:e.pageX)-(r(Me).left+Ve.radius),a=("touchmove"===e.type?n.pageY:e.pageY)-(r(Me).top+Ve.radius),c=Math.atan2(a,o);qe(c)}}),[Ve.radius,qe,Le]);Object(r.useEffect)((function(){Me.current.addEventListener("touchmove",(function(e){Ge(e,!0)}),{passive:!1}),_e({type:"init",payload:{mounted:!0,data:Ve.data.length?T(Ve.data):T(_(f,b)),dashFullArray:Ie.current.getTotalLength?Ie.current.getTotalLength():0}})}),[b,f]),Object(r.useEffect)((function(){var e=null===Ue?we:Ue,t=Ve.data.length,n=e>t-1?t-1:e;if(t){var r=v/t,o=V(r)/2;_e({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-L(Ve.knobPosition,h),offset:o}});var a=R(s)*n*r,i=V(a)-L(Ve.knobPosition,h);return qe(i+o*R(s))}}),[Ve.dashFullArray,Ve.knobPosition,Ve.data.length,we,s,Ye]);var Je=n.replace(/[\W_]/g,"_"),Qe={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in",margin:"".concat($+25,"px"),maxWidth:"".concat(c,"px")},value:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},mounted:{opacity:1}};return o.a.createElement("div",{style:D({},Qe.circularSlider,{},Ve.mounted&&Qe.mounted),ref:Me,onMouseDown:He,onMouseMove:function(e){return Ge(e)},onMouseUp:function(){return $e()},onMouseLeave:function(){return $e()},onTouchMove:Ge},o.a.createElement(E,{width:Fe,limit:v,max:b,label:Je,labelOffset:$,direction:s,strokeDasharray:Ve.dashFullArray,strokeDashoffset:Ve.dashFullOffset||100,svgFullPath:Ie,progressSize:de,progressColorFrom:se,progressColorTo:fe,progressLineCap:Pe,doubleLineColor:he,trackColor:ye,trackSize:ve,radiansOffset:Ve.radians,offsetAngle:h,labelColor:N,labelFontSize:q,activedlabelColor:J,data:je,activedItem:Ue,onLableClick:function(e){We(e),Ne(Math.random())}}),A&&o.a.createElement(O,{ref:ze,isDragging:Ve.isDragging,knobPosition:{x:Ve.knob.x,y:Ve.knob.y},knobSize:S,knobColor:k,trackSize:ve,hideKnob:z,onMouseDown:He,onMouseUp:$e},U),Ee?o.a.createElement("div",{style:Qe.value},Ee):o.a.createElement(P,{label:n,labelColor:N,labelBottom:K,labelFontSize:q,verticalOffset:ae,valueFontSize:Z,appendToValue:te,prependToValue:re,hideLabelValue:ce,value:Ve.label}))};B.propTypes={label:c.any,width:l.a.number,direction:l.a.number,min:l.a.number,max:l.a.number,knobColor:l.a.string,knobPosition:l.a.string,hideKnob:l.a.bool,knobDraggable:l.a.bool,knobEl:l.a.element,labelColor:l.a.string,labelBottom:l.a.bool,labelFontSize:l.a.string,valueFontSize:l.a.string,appendToValue:l.a.string,renderLabelValue:l.a.element,prependToValue:l.a.string,verticalOffset:l.a.string,hideLabelValue:l.a.bool,progressLineCap:l.a.string,progressColorFrom:l.a.string,progressColorTo:l.a.string,progressSize:l.a.number,trackColor:l.a.string,trackSize:l.a.number,data:l.a.array,dataIndex:l.a.number,onChange:l.a.func};t.default=B}]);