(window["webpackJsonpreact-circular-slider"]=window["webpackJsonpreact-circular-slider"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(13),n(1)),s=n(6),l=n(7);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f="ontouchstart"in window,m={DOWN:f?"touchstart":"mousedown",UP:f?"touchend":"mouseup",MOVE:f?"touchmove":"mousemove"},g=function(e){var t=e.label,n=void 0===t?"Degrees":t,o=e.width,i=void 0===o?280:o,s=e.knobSize,u=void 0===s?36:s,f=e.knobRadius,g=void 0===f?12:f,p=e.knobColor,b=void 0===p?"#4e63ea":p,h=e.labelColor,v=void 0===h?"#272b77":h,w=e.progressColors,O=void 0===w?{from:"#80C3F3",to:"#4990E2"}:w,y=e.trackColor,E=void 0===y?"#DDDEFB":y,k=e.progressSize,F=void 0===k?6:k,x=e.trackSize,j=void 0===x?6:x,D=e.onChange,C=Object(a.useState)({mounted:!1,isDragging:!1,width:i,radius:i/2,degrees:0,knob:{radians:0,x:0,y:0},dashFullArray:0,dashFullOffset:0}),P=Object(l.a)(C,2),M=P[0],S=P[1],N=Object(a.useRef)(null),z=Object(a.useRef)(null),I=Object(a.useCallback)(function(){var e=N.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+t}},[]),A=Object(a.useCallback)(function(e){var t=M.radius,n=e+1.5708,a=(n>0?n:2*Math.PI+n)*(360/(2*Math.PI)),r=M.dashFullArray-a/360*M.dashFullArray;D(Math.round(a)),S(function(n){return d({},n,{dashFullOffset:r,degrees:Math.round(a),knob:{radians:e,x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})},[M.dashFullArray,M.radius,D]),B=Object(a.useCallback)(function(e){S(function(e){return d({},e,{isDragging:!0})})},[]),L=Object(a.useCallback)(function(e){if(e.preventDefault(),M.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var n=("touchmove"===e.type?t.pageX:e.pageX)-(I().left+M.radius),a=("touchmove"===e.type?t.pageY:e.pageY)-(I().top+M.radius),r=Math.atan2(a,n);A(r)}},[M.isDragging,M.radius,A,I]),T=function(e){S(function(e){return d({},e,{isDragging:!1})})};Object(a.useEffect)(function(){I();var e=z.current.getTotalLength();S(function(t){return d({},t,{mounted:!0,dashFullArray:e,dashFullOffset:e,radius:M.radius,knob:{radians:0,x:M.radius,y:0}})})},[I,M.radius]),Object(a.useEffect)(function(){if(M.isDragging)return window.addEventListener(m.MOVE,L,{passive:!1}),window.addEventListener(m.UP,T,{passive:!1}),function(){window.removeEventListener(m.MOVE,L),window.removeEventListener(m.UP,T)}},[M.isDragging,L]);var W=c.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1},knob:{position:"absolute",left:"-".concat(u/2,"px"),top:"-".concat(u/2,"px"),cursor:"grab",zIndex:3},svg:{position:"relative",zIndex:2},drag:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]},labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(v),zIndex:1},value:{fontSize:"4rem",marginBottom:"2rem"},description:{fontSize:"1rem",textTransform:"uppercase"}});return r.a.createElement("div",{className:Object(c.b)(W.circularSlider,M.mounted&&W.mounted),ref:N},r.a.createElement("svg",{width:"".concat(i,"px"),height:"".concat(i,"px"),viewBox:"0 0 ".concat(i," ").concat(i),overflow:"visible",className:Object(c.b)(W.svg)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:O.from}),r.a.createElement("stop",{offset:"100%",stopColor:O.to}))),r.a.createElement("circle",{strokeWidth:j,fill:"none",stroke:E,cx:i/2,cy:i/2,r:i/2}),r.a.createElement("path",{ref:z,strokeDasharray:M.dashFullArray,strokeDashoffset:M.dashFullOffset,strokeWidth:F,strokeLinecap:"round",fill:"none",stroke:"url(#gradient)",d:"\n                        M ".concat(i/2,", ").concat(i/2,"\n                        m 0, -").concat(i/2,"\n                        a ").concat(i/2,",").concat(i/2," 0 0,1 0,").concat(i,"\n                        a -").concat(i/2,",-").concat(i/2," 0 0,1 0,-").concat(i,"\n                    ")})),r.a.createElement("div",{style:{transform:"translate(".concat(M.knob.x,"px, ").concat(M.knob.y,"px)")},className:Object(c.b)(W.knob,M.isDragging&&W.drag,M.isDragging&&W.pause),onMouseDown:B,onTouchStart:B},r.a.createElement("svg",{width:"".concat(u,"px"),height:"".concat(u,"px"),viewBox:"0 0 ".concat(u," ").concat(u)},r.a.createElement("circle",{className:Object(c.b)(!M.isDragging&&W.animation),fill:b,fillOpacity:"0.2",stroke:"none",cx:u/2,cy:u/2,r:u/2}),r.a.createElement("circle",{fill:b,stroke:"none",cx:u/2,cy:u/2,r:g}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:u/4.5,height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:u/4.5,height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:u/4.5,height:"1"}))),r.a.createElement("div",{className:Object(c.b)(W.labels)},r.a.createElement("div",{className:Object(c.b)(W.description)},n),r.a.createElement("div",{className:Object(c.b)(W.value)},r.a.createElement("code",null,M.degrees,"\xb0"))))},p=function(){var e=c.a.create({wrapper:{marginTop:"4rem",textAlign:"center"}});return r.a.createElement("div",{className:Object(c.b)(e.wrapper)},r.a.createElement(g,{onChange:function(e){console.log(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.d897a623.chunk.js.map