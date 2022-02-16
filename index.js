module.exports=function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=require("react")},function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(2))},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),l=o(0),r=o.n(l);o(3);var i=()=>{const[e,t]=Object(l.useState)(!0);return Object(l.useEffect)(()=>{t(!1)},[]),e};o(4);var s=({knobRef:e,isDragging:t,knobPosition:o,knobColor:a,knobSize:n,hideKnob:l,onMouseDown:i,onMouseUp:s,children:c})=>{const u={knob:{position:"absolute",left:`-${n/2}px`,top:`-${n/2}px`,cursor:"grab",zIndex:20},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return r.a.createElement("div",{style:Object.assign(Object.assign(Object.assign({transform:`translate(${o.x}px, ${o.y}px)`},u.knob),t&&u.dragging),l&&u.hide),onMouseUp:s,onMouseDown:i,onTouchStart:i,onTouchEnd:s},r.a.createElement("svg",{ref:e,width:n+"px",height:n+"px",viewBox:`0 0 ${n} ${n}`},r.a.createElement("circle",{style:Object.assign(Object.assign({},u.animation),t&&u.pause),fill:a,fillOpacity:"0.2",stroke:"none",cx:n/2,cy:n/2,r:n/2}),r.a.createElement("circle",{fill:a,stroke:"none",cx:n/2,cy:n/2,r:2*n/3/2}),c||r.a.createElement("svg",{width:n+"px",height:n+"px",viewBox:"0 0 36 36"},r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))};const c=[[".25","F"],[".10","s"],[".20","J"],[".30","u"],[".33","C"],[".40","K"],[".50","A"],[".60","L"],[".66","D"],[".70","y"],[".75","H"],[".80","M"],[".90","{"],[".83","S"],[".14","U"],[".28","V"],[".42","W"],[".57","X"],[".71","Y"],[".85","Z"],[".12","b"],[".37","d"],[".62","f"],[".87","h"],[".11","j"],[".22","k"],[".44","m"],[".55","n"],[".77","p"],[".88","q"]];function u(e){return Math.floor(e)}function d(e){if(!e)return null;const t=e.toFixed(2);for(const[e,o]of c)if(t.endsWith(e))return o;return null}var f=({labelColor:e,secondaryLabelColor:t,labelBottom:o,labelFontFamily:a,labelFontSize:n,valueFontSize:l,appendToValue:i,prependToValue:s,verticalOffset:c,hideLabelValue:f,selected:p,labelTop:b})=>{const m={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",userSelect:"none",color:e,fontFamily:a,zIndex:1},value:{fontSize:""+l,position:"relative"},bottomMargin:{marginBottom:`calc(${c})`},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},secondaryText:{color:t,fontSize:n},hide:{display:"none"},mainLabel:{fontFamily:"Fraction",display:"flex",alignItems:"center"},fraction:{fontSize:`calc(${l} + 2rem)`,padding:"0 2px"}},g=u(null==p?void 0:p.value),h=d(null==p?void 0:p.value);return r.a.createElement("div",{style:Object.assign(Object.assign({},m.labels),f&&m.hide)},r.a.createElement("div",{style:m.secondaryText},b),r.a.createElement("div",{style:Object.assign(Object.assign({},m.value),!o&&m.bottomMargin)},r.a.createElement("code",null,r.a.createElement("span",{style:m.prepended},s),h?r.a.createElement("span",{style:m.mainLabel},0===g&&h?"":g,r.a.createElement("span",{style:m.fraction},h)):r.a.createElement("span",{style:m.mainLabel},r.a.createElement("span",{style:m.fraction},"‎"),null==p?void 0:p.value,r.a.createElement("span",{style:m.fraction},"‎")),void 0!==(null==p?void 0:p.value)&&r.a.createElement("span",{style:m.appended},i))),r.a.createElement("div",{style:m.secondaryText},o))};var p=(e,t)=>{switch(t.type){case"init":case"setKnobPosition":return Object.assign(Object.assign({},e),t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object.assign(Object.assign({},e),t.payload);default:throw new Error}};var b=({width:e,limit:t,label:o,labelColor:a,roundLabelColor:n,roundLabelFontSize:l,labelFontSize:i,labelOffset:s,activeLabelColor:c,direction:f,strokeDasharray:p,strokeDashoffset:b,progressColorFrom:m,progressColorTo:g,trackColor:h,doubleLineColor:y,doubleLineType:v,progressSize:F,trackSize:k,svgFullPath:$,radiansOffset:x,progressLineCap:O,offsetAngle:E,data:C,activedItem:L=0,onLableClick:M})=>{const S={svg:{position:"relative",zIndex:2},path:{transform:`rotate(${x}rad) ${-1===f?"scale(-1, 1)":"scale(1, 1)"}`,transformOrigin:"center center"},doubleLine:{transform:`rotate(${x}rad) ${-1===f?"scale(-0.9, 0.9)":"scale(0.9, 0.9)"}`,transformOrigin:"center center"},label:{transform:"translateY(20px)"},text:{textAnchor:"middle",fontSize:l,fill:n,cursor:"pointer",userSelect:"none",fontFamily:"Fraction",transform:"rotate(180deg)",transformOrigin:"center"},title:{opacity:.2,transition:"all 0.3s ease-out"},activedTitle:{fill:c,fontWeight:"bold",opacity:1,fontSize:`calc(${l} + 0.2rem)`}},j=r.a.useRef(null),w=k/2,T=k,D=2.5*k,z=p*(360-t)/360,P=e/2+s,A=C?t/C.length:1,I=(e,o)=>{var a;const n=(null===(a=e.current)||void 0===a?void 0:a.getTotalLength())||100;return"track"===o?n*(360-t)/360:"progress"===o?n*b/p:n};return r.a.createElement("svg",{width:e+"px",height:e+"px",viewBox:`0 0 ${e} ${e}`,overflow:"visible",style:S.svg},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:o,x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:m}),r.a.createElement("stop",{offset:"100%",stopColor:g}))),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"doubleCircle",x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:"rgba(67, 255, 131, 0.54)"}),r.a.createElement("stop",{offset:"25.88%",stopColor:"#43FF83"}),r.a.createElement("stop",{offset:"54.01%",stopColor:"#FFF854"}),r.a.createElement("stop",{offset:"79.01%",stopColor:"#FF7878"}),r.a.createElement("stop",{offset:"100%",stopColor:"#FF3737"}))),r.a.createElement("path",{className:"background-circle",style:S.path,strokeDasharray:p,strokeDashoffset:z,strokeWidth:1,stroke:void 0,strokeLinecap:O,fill:"transparent",d:`\n            M ${e/2}, ${e/2}\n            m 0, -${e/2-D}\n            a ${e/2-D},${e/2-D} 0 0,1 0,${e-2*D}\n            a -${e/2-D},-${e/2-D} 0 0,1 0,-${e-2*D}\n        `}),y&&r.a.createElement("path",{className:"double-track",ref:j,style:S.path,strokeDasharray:I(j,void 0),strokeDashoffset:I(j,v),strokeWidth:k,stroke:"gradiant"===y?"url(#doubleCircle)":y||void 0,strokeLinecap:O,fill:"none",d:`\n            M ${e/2}, ${e/2}\n            m 0, -${e/2-T}\n            a ${e/2-T},${e/2-T} 0 0,1 0,${e-2*T}\n            a -${e/2-T},-${e/2-T} 0 0,1 0,-${e-2*T}\n        `}),r.a.createElement("path",{className:"track-line",style:S.path,strokeDasharray:p,strokeDashoffset:z,strokeWidth:k,stroke:h,strokeLinecap:O,fill:"none",d:`\n            M ${e/2}, ${e/2}\n            m 0, -${e/2-w}\n            a ${e/2-w},${e/2-w} 0 0,1 0,${e-2*w}\n            a -${e/2-w},-${e/2-w} 0 0,1 0,-${e-2*w}\n        `}),r.a.createElement("path",{style:S.path,ref:$,strokeDasharray:p,strokeDashoffset:b,strokeWidth:F,strokeLinecap:"round"!==O?"butt":"round",fill:"none",stroke:`url(#${o})`,d:`\n            M ${e/2}, ${e/2}\n            m 0, -${e/2-w}\n            a ${e/2-w},${e/2-w} 0 0,1 0,${e-2*w}\n            a -${e/2-w},-${e/2-w} 0 0,1 0,-${e-2*w}\n        `}),r.a.createElement("path",{id:"circularLabels",d:`\n          M ${P},${P} m ${-P}, 0  \n          A ${P},${P} 0 0 1 0,${P} \n          A ${P},${P} 0 0 1 -${P},0 \n          A ${P},${P} 0 0 1 0,-${P} \n          A ${P},${P} 0 0 1 0,${P}\n        `,transform:`translate(${e/2},${e/2})`,fill:"none",stroke:"none"}),null==C?void 0:C.map((e,t,{length:o})=>{const a=u(e.value),n=d(e.value);return e.showLabel?r.a.createElement("text",{style:Object.assign(Object.assign({},S.text),{transform:`rotate(${A*t+A/2-E}deg)`}),key:e.key},r.a.createElement("textPath",{href:"#circularLabels",startOffset:(A*((o-1)/2)+A/2-E)/3.6+"%",style:Object.assign(Object.assign({},S.title),L&&t===L-1&&S.activedTitle),onClick:()=>M(t+1)},n?r.a.createElement("tspan",null,0===a&&n?"":a,n):r.a.createElement("tspan",null,e.value))):null}))};const m={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},g=(e,t)=>m[e]+t/180*Math.PI,h=e=>e<0?-1:1,y=e=>e*Math.PI/180,v=(e,t,o,a)=>{const n=[];for(let l=e;+l.toFixed(2)<=t;l+=o){const e=+l.toFixed(2);n.push({key:e.toString(),value:e,showLabel:e%a==0})}return n};t.default=({width:e=280,direction:t=1,min:o=0,max:a=360,step:c=.1,labelStep:u=1,limit:d=360,offsetAngle:m=0,knobColor:F="#0076BA",knobSize:k=60,knobPosition:$="top",hideKnob:x=!1,knobDraggable:O=!0,knobEl:E=null,labelTop:C="Demo",labelBottom:L="",labelColor:M="#2597D7",secondaryLabelColor:S="#c0c0c0",roundLabelFontSize:j="2rem",roundLabelColor:w="#272b77",labelFontFamily:T='"Segoe UI", "Roboto"',labelFontSize:D="1.5rem",labelOffset:z=20,activeLabelColor:P="#0076ba",valueFontSize:A="4rem",appendToValue:I="",prependToValue:B="",verticalOffset:R="1.5rem",hideLabelValue:V=!1,progressColorFrom:W="#54BFFD",progressColorTo:K="#0378BC",progressSize:U=16,trackColor:_="#CFE0F4",trackSize:Y=20,doubleLineColor:N=null,doubleLineType:X="progress",data:q=[],dataIndex:G=1,magentTolerance:H=10,progressLineCap:J="round",renderLabelValue:Z=null,onChange:Q=(e=>{})})=>{const ee=e-2*z,te={mounted:!1,isDragging:!1,contentWidth:ee,radius:ee/2,knobPosition:$,label:0,data:q,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},oe=Object(l.useRef)(null),ae=Object(l.useRef)(null),ne=Object(l.useRef)(null),le=Object(l.useRef)(0),re=Object(l.useRef)(void 0),ie=i(),[se,ce]=Object(l.useReducer)(p,te),[ue,de]=r.a.useState(null),[fe,pe]=r.a.useState(null),be=Object(l.useCallback)(e=>{var o,a,n;if(!se.dashFullArray)return void pe(Math.random());const l=e+g($,m);let r=(l>0?l:2*Math.PI+l)*(360/(2*Math.PI));if(!ue&&r>d){if(r=0,void 0!==re.current)return;re.current=!1}else{if("bottom"===$&&r>d)return void(r=d);if("top"===$&&r<360-d)return void(r=360-d)}let i=r+d-m;i=i>360?i-360:i;let s=ne.current.getPointAtLength(i*se.dashFullArray/360);s.x=Math.round(s.x),s.y=Math.round(s.y);let c=r/360*se.dashFullArray;r=-1===h(t)?360-r:r,le.current=r;const u=se.data.length/d,f=r*u;let p=Math.ceil(f);const b=Math.max(p/u-1/u/2,0);Math.abs(b-r)<=H&&(null===(o=se.data[p-1])||void 0===o?void 0:o.showLabel)?(i=b+d-m,i=i>360?i-360:i,s=ne.current.getPointAtLength(i*se.dashFullArray/360),s.x=Math.round(s.x),s.y=Math.round(s.y),c=b/360*se.dashFullArray,r=-1===h(t)?360-b:b,de(p)):de(0),ae.current.style=`transform: rotate(${r+m}deg);`,(null===(a=se.data[p-1])||void 0===a?void 0:a.key)!==(null===(n=se.label)||void 0===n?void 0:n.key)&&Q(se.data[p-1]),ce({type:"setKnobPosition",payload:{dashFullOffset:-1===h(t)?c:(se.dashFullArray||ne.current.getTotalLength())-c,label:se.data[p-1],knob:{x:s.x,y:s.y}}})},[m,d,se.dashFullArray,se.radius,se.data,se.label,$,Y,t,Q]),me=()=>{re.current=!0,ce({type:"onMouseDown",payload:{isDragging:!0}})},ge=e=>{re.current&&he(e),re.current=!1,ce({type:"onMouseUp",payload:{isDragging:!1}})},he=Object(l.useCallback)((e,t=!1)=>{var o;if(!re.current)return;t&&e.preventDefault();const a=null===(o=e.changedTouches)||void 0===o?void 0:o[0],l=e=>{var t,o,a,l,r,i;const s=e.current.getBoundingClientRect(),c=!ie&&((null!==(t=null===n.a||void 0===n.a?void 0:n.a.pageXOffset)&&void 0!==t?t:0)||(null!==(a=null===(o=null===document||void 0===document?void 0:document.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==a?a:0)),u=!ie&&((null!==(l=null===n.a||void 0===n.a?void 0:n.a.pageYOffset)&&void 0!==l?l:0)||(null!==(i=null===(r=null===document||void 0===document?void 0:document.documentElement)||void 0===r?void 0:r.scrollTop)&&void 0!==i?i:0));return{top:s.top+u,left:s.left+c}},r=(a?a.pageX:e.pageX)-(l(oe).left+se.radius),i=(a?a.pageY:e.pageY)-(l(oe).top+se.radius),s=Math.atan2(i,r);be(s)},[se.radius,be,ie]);Object(l.useEffect)(()=>{const e=se.data.length?[...se.data]:[...v(o,a,c,u)],[t]=e;ce({type:"init",payload:{mounted:!0,data:e,label:t,dashFullArray:ne.current.getTotalLength?ne.current.getTotalLength():0}})},[a,o]),Object(l.useEffect)(()=>{let e=null===ue?G:ue;const o=se.data.length,a=e>o?o:e;if(o){const e=d/o,n=y(e)/2;ce({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-g(se.knobPosition,m),offset:n}});const l=h(t)*a*e,r=y(l)-g(se.knobPosition,m);return be(a?r-n*h(t):r)}},[se.dashFullArray,se.knobPosition,se.data.length,G,t,fe]);const ye=C.replace(/[\W_]/g,"_"),ve={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in",margin:z+25+"px",maxWidth:e+"px"},value:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:3},mounted:{opacity:1,touchAction:"none"}};return r.a.createElement("div",{style:Object.assign(Object.assign({},ve.circularSlider),se.mounted&&ve.mounted),ref:oe,onMouseMove:he,onMouseUp:ge,onMouseDown:me,onMouseLeave:ge,onTouchMove:he,onTouchStart:me,onTouchEnd:ge},r.a.createElement(b,{width:ee,limit:d,label:ye,labelOffset:z,direction:t,strokeDasharray:se.dashFullArray,strokeDashoffset:se.dashFullOffset||100,svgFullPath:ne,progressSize:U,progressColorFrom:W,progressColorTo:K,progressLineCap:J,doubleLineColor:N,doubleLineType:X,trackColor:_,trackSize:Y,radiansOffset:se.radians,offsetAngle:m,labelColor:M,roundLabelColor:w,roundLabelFontSize:j,labelFontSize:D,activeLabelColor:P,data:se.data,activedItem:ue,onLableClick:e=>{de(e),pe(Math.random())}}),O&&r.a.createElement(s,{knobRef:ae,isDragging:se.isDragging,knobPosition:{x:se.knob.x,y:se.knob.y},knobSize:k>Y?k:Y,knobColor:F,trackSize:Y,hideKnob:x,onMouseDown:me,onMouseUp:ge},E),Z?r.a.createElement("div",{style:ve.value},Z):r.a.createElement(f,{labelTop:C,labelColor:M,secondaryLabelColor:S,labelBottom:L,labelFontFamily:T,labelFontSize:D,verticalOffset:R,valueFontSize:A,appendToValue:I,prependToValue:B,hideLabelValue:V,selected:se.label}))}}]);