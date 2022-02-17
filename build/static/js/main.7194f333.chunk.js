(this["webpackJsonpadvanced-react-circular-slider"]=this["webpackJsonpadvanced-react-circular-slider"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(8),r=a.n(l),c=a(1),i=a(6),s=a(2),d=a(3),u=a.n(d),f=(a(15),function(){var e=Object(o.useState)(!0),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){n(!1)}),[]),a}),p=(a(16),function(e){var t=e.knobRef,a=e.isDragging,o=e.knobPosition,l=e.knobColor,r=e.knobSize,i=e.hideKnob,s=e.onMouseDown,d=e.onMouseUp,u=e.children,f={knob:{position:"absolute",left:"-".concat(r/2,"px"),top:"-".concat(r/2,"px"),cursor:"grab",zIndex:20},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return n.a.createElement("div",{style:Object(c.a)(Object(c.a)(Object(c.a)({transform:"translate(".concat(o.x,"px, ").concat(o.y,"px)")},f.knob),a&&f.dragging),i&&f.hide),onMouseUp:d,onMouseDown:s,onTouchStart:s,onTouchEnd:d},n.a.createElement("svg",{ref:t,width:"".concat(r,"px"),height:"".concat(r,"px"),viewBox:"0 0 ".concat(r," ").concat(r)},n.a.createElement("circle",{style:Object(c.a)(Object(c.a)({},f.animation),a&&f.pause),fill:l,fillOpacity:"0.2",stroke:"none",cx:r/2,cy:r/2,r:r/2}),n.a.createElement("circle",{fill:l,stroke:"none",cx:r/2,cy:r/2,r:2*r/3/2}),u||n.a.createElement("svg",{width:"".concat(r,"px"),height:"".concat(r,"px"),viewBox:"0 0 36 36"},n.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),n.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),n.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}),b=a(9),v=[[".25","F"],[".10","s"],[".20","J"],[".30","u"],[".33","C"],[".40","K"],[".50","A"],[".60","L"],[".66","D"],[".70","y"],[".75","H"],[".80","M"],[".90","{"],[".83","S"],[".14","U"],[".28","V"],[".42","W"],[".57","X"],[".71","Y"],[".85","Z"],[".12","b"],[".37","d"],[".62","f"],[".87","h"],[".11","j"],[".22","k"],[".44","m"],[".55","n"],[".77","p"],[".88","q"]];function m(e){return Math.floor(e)}function h(e){if(!e)return null;var t,a=e.toFixed(2),o=Object(b.a)(v);try{for(o.s();!(t=o.n()).done;){var n=Object(s.a)(t.value,2),l=n[0],r=n[1];if(a.endsWith(l))return r}}catch(c){o.e(c)}finally{o.f()}return null}var g=function(e){var t=e.labelColor,a=e.secondaryLabelColor,o=e.labelBottom,l=e.labelFontFamily,r=e.labelFontSize,i=e.valueFontSize,s=e.appendToValue,d=e.prependToValue,u=e.verticalOffset,f=e.hideLabelValue,p=e.selected,b=e.labelTop,v={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",userSelect:"none",color:t,fontFamily:l,zIndex:1},value:{fontSize:"".concat(i),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(u,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},secondaryText:{color:a,fontSize:r},hide:{display:"none"},mainLabel:{fontFamily:"Fraction",display:"flex",alignItems:"center"},fraction:{fontSize:"calc(".concat(i," + 2rem)"),padding:"0 2px"}},g=m(null===p||void 0===p?void 0:p.value),y=h(null===p||void 0===p?void 0:p.value);return n.a.createElement("div",{style:Object(c.a)(Object(c.a)({},v.labels),f&&v.hide)},n.a.createElement("div",{style:v.secondaryText},b),n.a.createElement("div",{style:Object(c.a)(Object(c.a)({},v.value),!o&&v.bottomMargin)},n.a.createElement("code",null,n.a.createElement("span",{style:v.prepended},d),y?n.a.createElement("span",{style:v.mainLabel},0===g&&y?"":g,n.a.createElement("span",{style:v.fraction},y)):n.a.createElement("span",{style:v.mainLabel},n.a.createElement("span",{style:v.fraction},"\u200e"),null===p||void 0===p?void 0:p.value,n.a.createElement("span",{style:v.fraction},"\u200e")),void 0!==(null===p||void 0===p?void 0:p.value)&&n.a.createElement("span",{style:v.appended},s))),n.a.createElement("div",{style:v.secondaryText},o))},y=function(e,t){switch(t.type){case"init":case"setKnobPosition":case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object(c.a)(Object(c.a)({},e),t.payload);default:throw new Error}},F=function(e){var t=e.width,a=e.limit,o=e.label,l=(e.labelColor,e.roundLabelColor),r=e.roundLabelFontSize,i=(e.labelFontSize,e.labelOffset),s=e.activeLabelColor,d=e.direction,u=e.strokeDasharray,f=e.strokeDashoffset,p=e.progressColorFrom,b=e.progressColorTo,v=e.trackColor,g=e.doubleLineColor,y=e.doubleLineType,F=e.progressSize,k=e.trackSize,x=e.svgFullPath,E=e.radiansOffset,O=e.progressLineCap,C=e.offsetAngle,L=e.data,M=e.activedItem,S=void 0===M?0:M,j=e.onLableClick,T={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(E,"rad) ").concat(-1===d?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"},doubleLine:{transform:"rotate(".concat(E,"rad) ").concat(-1===d?"scale(-0.9, 0.9)":"scale(0.9, 0.9)"),transformOrigin:"center center"},label:{transform:"translateY(20px)"},text:{textAnchor:"middle",fontSize:r,fill:l,cursor:"pointer",userSelect:"none",fontFamily:"Fraction",transform:"rotate(180deg)",transformOrigin:"center"},title:{opacity:.2,transition:"all 0.3s ease-out"},activedTitle:{fill:s,fontWeight:"bold",opacity:1,fontSize:"calc(".concat(r," + 0.2rem)")}},D=n.a.useRef(null),z=k/2,w=k,P=2.5*k,A=u*(360-a)/360,I=t/2+i,B=L?a/L.length:1,R=function(e,t){var o,n=(null===(o=e.current)||void 0===o?void 0:o.getTotalLength())||100;return"track"===t?n*(360-a)/360:"progress"===t?n*f/u:n};return n.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:T.svg},n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:o,x1:"100%",x2:"0%"},n.a.createElement("stop",{offset:"0%",stopColor:p}),n.a.createElement("stop",{offset:"100%",stopColor:b}))),n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"doubleCircle",x1:"100%",x2:"0%"},n.a.createElement("stop",{offset:"0%",stopColor:"rgba(67, 255, 131, 0.54)"}),n.a.createElement("stop",{offset:"25.88%",stopColor:"#43FF83"}),n.a.createElement("stop",{offset:"54.01%",stopColor:"#FFF854"}),n.a.createElement("stop",{offset:"79.01%",stopColor:"#FF7878"}),n.a.createElement("stop",{offset:"100%",stopColor:"#FF3737"}))),n.a.createElement("path",{className:"background-circle",style:T.path,strokeDasharray:u,strokeDashoffset:A,strokeWidth:1,stroke:void 0,strokeLinecap:O,fill:"transparent",d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-P,"\n            a ").concat(t/2-P,",").concat(t/2-P," 0 0,1 0,").concat(t-2*P,"\n            a -").concat(t/2-P,",-").concat(t/2-P," 0 0,1 0,-").concat(t-2*P,"\n        ")}),g&&n.a.createElement("path",{className:"double-track",ref:D,style:T.path,strokeDasharray:R(D,void 0),strokeDashoffset:R(D,y),strokeWidth:k,stroke:"gradiant"===g?"url(#doubleCircle)":g||void 0,strokeLinecap:O,fill:"none",d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-w,"\n            a ").concat(t/2-w,",").concat(t/2-w," 0 0,1 0,").concat(t-2*w,"\n            a -").concat(t/2-w,",-").concat(t/2-w," 0 0,1 0,-").concat(t-2*w,"\n        ")}),n.a.createElement("path",{className:"track-line",style:T.path,strokeDasharray:u,strokeDashoffset:A,strokeWidth:k,stroke:v,strokeLinecap:O,fill:"none",d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-z,"\n            a ").concat(t/2-z,",").concat(t/2-z," 0 0,1 0,").concat(t-2*z,"\n            a -").concat(t/2-z,",-").concat(t/2-z," 0 0,1 0,-").concat(t-2*z,"\n        ")}),n.a.createElement("path",{style:T.path,ref:x,strokeDasharray:u,strokeDashoffset:f,strokeWidth:F,strokeLinecap:"round"!==O?"butt":"round",fill:"none",stroke:"url(#".concat(o,")"),d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-z,"\n            a ").concat(t/2-z,",").concat(t/2-z," 0 0,1 0,").concat(t-2*z,"\n            a -").concat(t/2-z,",-").concat(t/2-z," 0 0,1 0,-").concat(t-2*z,"\n        ")}),n.a.createElement("path",{id:"circularLabels",d:"\n          M ".concat(I,",").concat(I," m ").concat(-I,", 0  \n          A ").concat(I,",").concat(I," 0 0 1 0,").concat(I," \n          A ").concat(I,",").concat(I," 0 0 1 -").concat(I,",0 \n          A ").concat(I,",").concat(I," 0 0 1 0,-").concat(I," \n          A ").concat(I,",").concat(I," 0 0 1 0,").concat(I,"\n        "),transform:"translate(".concat(t/2,",").concat(t/2,")"),fill:"none",stroke:"none"}),null===L||void 0===L?void 0:L.map((function(e,t,a){var o=a.length,l=m(e.value),r=h(e.value);return e.showLabel?n.a.createElement("text",{style:Object(c.a)(Object(c.a)({},T.text),{},{transform:"rotate(".concat(B*t+B/2-C,"deg)")}),key:e.key},n.a.createElement("textPath",{href:"#circularLabels",startOffset:"".concat((B*((o-1)/2)+B/2-C)/3.6,"%"),style:Object(c.a)(Object(c.a)({},T.title),S&&t===S-1&&T.activedTitle),onClick:function(){return j(t+1)}},r?n.a.createElement("tspan",null,0===l&&r?"":l,r):n.a.createElement("tspan",null,e.value))):null})))},k=360,x={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},E=function(e,t){return x[e]+t/180*Math.PI},O=function(e){return e<0?-1:1},C=function(e){return e*Math.PI/180},L=function(e){var t=e.width,a=void 0===t?280:t,l=e.direction,r=void 0===l?1:l,d=e.min,b=void 0===d?0:d,v=e.max,m=void 0===v?360:v,h=e.step,x=void 0===h?.1:h,L=e.labelStep,M=void 0===L?1:L,S=e.limit,j=void 0===S?360:S,T=e.offsetAngle,D=void 0===T?0:T,z=e.knobColor,w=void 0===z?"#0076BA":z,P=e.knobSize,A=void 0===P?60:P,I=e.knobPosition,B=void 0===I?"top":I,R=e.hideKnob,V=void 0!==R&&R,W=e.knobDraggable,K=void 0===W||W,U=e.knobEl,Y=void 0===U?null:U,N=e.labelTop,X=void 0===N?"Demo":N,J=e.labelBottom,G=void 0===J?"":J,_=e.labelColor,q=void 0===_?"#2597D7":_,H=e.secondaryLabelColor,Z=void 0===H?"#c0c0c0":H,Q=e.roundLabelFontSize,$=void 0===Q?"2rem":Q,ee=e.roundLabelColor,te=void 0===ee?"#272b77":ee,ae=e.labelFontFamily,oe=void 0===ae?'"Segoe UI", "Roboto"':ae,ne=e.labelFontSize,le=void 0===ne?"1.5rem":ne,re=e.labelOffset,ce=void 0===re?20:re,ie=e.activeLabelColor,se=void 0===ie?"#0076ba":ie,de=e.valueFontSize,ue=void 0===de?"4rem":de,fe=e.appendToValue,pe=void 0===fe?"":fe,be=e.prependToValue,ve=void 0===be?"":be,me=e.verticalOffset,he=void 0===me?"1.5rem":me,ge=e.hideLabelValue,ye=void 0!==ge&&ge,Fe=e.progressColorFrom,ke=void 0===Fe?"#54BFFD":Fe,xe=e.progressColorTo,Ee=void 0===xe?"#0378BC":xe,Oe=e.progressSize,Ce=void 0===Oe?16:Oe,Le=e.trackColor,Me=void 0===Le?"#CFE0F4":Le,Se=e.trackSize,je=void 0===Se?20:Se,Te=e.doubleLineColor,De=void 0===Te?null:Te,ze=e.doubleLineType,we=void 0===ze?"progress":ze,Pe=e.data,Ae=void 0===Pe?[]:Pe,Ie=e.dataIndex,Be=void 0===Ie?1:Ie,Re=e.magentTolerance,Ve=void 0===Re?10:Re,We=e.progressLineCap,Ke=void 0===We?"round":We,Ue=e.renderLabelValue,Ye=void 0===Ue?null:Ue,Ne=e.onChange,Xe=void 0===Ne?function(e){}:Ne,Je=a-2*ce,Ge={mounted:!1,isDragging:!1,contentWidth:Je,radius:Je/2,knobPosition:B,label:0,data:Ae,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},_e=Object(o.useRef)(null),qe=Object(o.useRef)(null),He=Object(o.useRef)(null),Ze=Object(o.useRef)(0),Qe=Object(o.useRef)(void 0),$e=f(),et=Object(o.useReducer)(y,Ge),tt=Object(s.a)(et,2),at=tt[0],ot=tt[1],nt=n.a.useState(null),lt=Object(s.a)(nt,2),rt=lt[0],ct=lt[1],it=n.a.useState(null),st=Object(s.a)(it,2),dt=st[0],ut=st[1],ft=Object(o.useCallback)((function(e){var t,a,o;if(at.dashFullArray){var n=e+E(B,D),l=(n>0?n:2*Math.PI+n)*(k/(2*Math.PI));if(!rt&&l>j){if(l=0,void 0!==Qe.current)return;Qe.current=!1}else{if("bottom"===B&&l>j)return void(l=j);if("top"===B&&l<360-j)return void(l=360-j)}var c=l+j-D;c=c>360?c-360:c;var i=He.current.getPointAtLength(c*at.dashFullArray/360);i.x=Math.round(i.x),i.y=Math.round(i.y);var s=l/k*at.dashFullArray;l=-1===O(r)?k-l:l,Ze.current=l;var d=at.data.length/j,u=l*d,f=Math.ceil(u),p=Math.max(f/d-1/d/2,0);Math.abs(p-l)<=Ve&&(null===(t=at.data[f-1])||void 0===t?void 0:t.showLabel)?(c=(c=p+j-D)>360?c-360:c,(i=He.current.getPointAtLength(c*at.dashFullArray/360)).x=Math.round(i.x),i.y=Math.round(i.y),s=p/k*at.dashFullArray,l=-1===O(r)?k-p:p,ct(f)):ct(0),qe.current.style="transform: rotate(".concat(l+D,"deg);"),(null===(a=at.data[f-1])||void 0===a?void 0:a.key)!==(null===(o=at.label)||void 0===o?void 0:o.key)&&Xe(at.data[f-1]),ot({type:"setKnobPosition",payload:{dashFullOffset:-1===O(r)?s:(at.dashFullArray||He.current.getTotalLength())-s,label:at.data[f-1],knob:{x:i.x,y:i.y}}})}else ut(Math.random())}),[D,j,at.dashFullArray,at.radius,at.data,at.label,B,je,r,Xe]),pt=function(){Qe.current=!0,ot({type:"onMouseDown",payload:{isDragging:!0}})},bt=function(e){Qe.current&&vt(e),Qe.current=!1,ot({type:"onMouseUp",payload:{isDragging:!1}})},vt=Object(o.useCallback)((function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Qe.current){a&&e.preventDefault();var o=null===(t=e.changedTouches)||void 0===t?void 0:t[0],n=function(e){var t,a,o,n,l,r,c,i,s=e.current.getBoundingClientRect(),d=!$e&&((null!==(t=null===u.a||void 0===u.a?void 0:u.a.pageXOffset)&&void 0!==t?t:0)||(null!==(a=null===(o=document)||void 0===o||null===(n=o.documentElement)||void 0===n?void 0:n.scrollLeft)&&void 0!==a?a:0)),f=!$e&&((null!==(l=null===u.a||void 0===u.a?void 0:u.a.pageYOffset)&&void 0!==l?l:0)||(null!==(r=null===(c=document)||void 0===c||null===(i=c.documentElement)||void 0===i?void 0:i.scrollTop)&&void 0!==r?r:0));return{top:s.top+f,left:s.left+d}},l=(o?o.pageX:e.pageX)-(n(_e).left+at.radius),r=(o?o.pageY:e.pageY)-(n(_e).top+at.radius),c=Math.atan2(r,l);ft(c)}}),[at.radius,ft,$e]);Object(o.useEffect)((function(){var e=at.data.length?Object(i.a)(at.data):Object(i.a)(function(e,t,a,o){for(var n=[],l=e;+l.toFixed(2)<=t;l+=a){var r=+l.toFixed(2);n.push({key:r.toString(),value:r,showLabel:r%o===0})}return n}(b,m,x,M)),t=Object(s.a)(e,1)[0];ot({type:"init",payload:{mounted:!0,data:e,label:t,dashFullArray:He.current.getTotalLength?He.current.getTotalLength():0}})}),[m,b]),Object(o.useEffect)((function(){var e=null===rt?Be:rt,t=at.data.length,a=e>t?t:e;if(t){var o=j/t,n=C(o)/2;ot({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-E(at.knobPosition,D),offset:n}});var l=O(r)*a*o,c=C(l)-E(at.knobPosition,D);return ft(a?c-n*O(r):c)}}),[at.dashFullArray,at.knobPosition,at.data.length,Be,r,dt]);var mt=X.replace(/[\W_]/g,"_"),ht={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 0.2s ease-in",margin:"".concat(ce+25,"px"),maxWidth:"".concat(a,"px")},value:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:3},mounted:{opacity:1,touchAction:"none"}};return n.a.createElement("div",{style:Object(c.a)(Object(c.a)({},ht.circularSlider),at.mounted&&ht.mounted),ref:_e,onMouseMove:vt,onMouseUp:bt,onMouseDown:pt,onMouseLeave:bt,onTouchMove:vt,onTouchStart:pt,onTouchEnd:bt},n.a.createElement(F,{width:Je,limit:j,label:mt,labelOffset:ce,direction:r,strokeDasharray:at.dashFullArray,strokeDashoffset:at.dashFullOffset||100,svgFullPath:He,progressSize:Ce,progressColorFrom:ke,progressColorTo:Ee,progressLineCap:Ke,doubleLineColor:De,doubleLineType:we,trackColor:Me,trackSize:je,radiansOffset:at.radians,offsetAngle:D,labelColor:q,roundLabelColor:te,roundLabelFontSize:$,labelFontSize:le,activeLabelColor:se,data:at.data,activedItem:rt,onLableClick:function(e){ct(e),ut(Math.random())}}),K&&n.a.createElement(p,{knobRef:qe,isDragging:at.isDragging,knobPosition:{x:at.knob.x,y:at.knob.y},knobSize:A>je?A:je,knobColor:w,trackSize:je,hideKnob:V,onMouseDown:pt,onMouseUp:bt},Y),Ye?n.a.createElement("div",{style:ht.value},Ye):n.a.createElement(g,{labelTop:X,labelColor:q,secondaryLabelColor:Z,labelBottom:G,labelFontFamily:oe,labelFontSize:le,verticalOffset:he,valueFontSize:ue,appendToValue:pe,prependToValue:ve,hideLabelValue:ye,selected:at.label}))},M=function(){return n.a.createElement("div",{style:{padding:"2rem"}},n.a.createElement(L,{labelTop:"Spoons",labelBottom:"TBSP",width:300,min:1,max:4,step:.05,labelStep:.5,onChange:console.log}))};r.a.render(n.a.createElement(M,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7194f333.chunk.js.map