(this["webpackJsonpxrehpicx.github.io"]=this["webpackJsonpxrehpicx.github.io"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(41),a=t.n(c),o=(t(80),t(8)),s=t(22),l=t(10),u=t(38),d=t.n(u),h=t(47),m=t(48),b=t.n(m),j="https://evve.herokuapp.com/api/";function p(){return(p=Object(h.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j+"notion/projects");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,b.a.get(j+"notion/");case 3:return e.t1=!!e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x,g=t(66),w=t(29),O=t(117),v=t(119),y=t(74),k={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"dark",accent:"#29ffa6",background:"#000",text:"#ffffff"}}},N={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"light",accent:"#141825",background:"#ececec",text:"#000"}}};window.data={accent:"",background:""};var C=Object(o.b)(x||(x=Object(l.a)([" \n  body{\n    color: ",";\n    background: ",";\n    transition: background 300ms ease-out;\n  }\n"])),(function(e){return e.theme.colors.main.text}),(function(e){return window.data.accent=e.theme.colors.main.accent,window.data.background=e.theme.colors.main.background,e.theme.colors.main.background}));function W(e,n){switch(n.type){case"darkmode":return k;case"lightmode":return N;case"updatehw":return e.height=window.innerHeight,e.width=window.innerWidth,Object(y.a)({},e);case"toggle":return"dark"===e.colors.main.type?N:k;default:return k}}var z=window.matchMedia("(prefers-color-scheme: dark)");var S=t(2),E=Object(r.createContext)({});function H(e){var n,t=e.children,i=function(){var e=Object(r.useReducer)(W,localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")||""):z.matches?k:N),n=Object(s.a)(e,2),t=n[0],i=n[1];Object(r.useEffect)((function(){var e=function(){return i({type:"updatehw"})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var c=Object(r.useCallback)((function(){i({type:"toggle"})}),[]);return Object(r.useEffect)((function(){var e=null,n=setTimeout((function(){c(),e=setTimeout((function(){return c()}),800)}),2e3);return function(){clearTimeout(n),e&&clearTimeout(e)}}),[c]),Object(r.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(t))}),[t]),Object(r.useMemo)((function(){return{theme:t,Global:C,toggle:c,dispatch:i}}),[t,c])}();return n=i.theme,Object(r.useEffect)((function(){n&&(console.clear(),console.log("%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/xrehpicx/xrehpicx.github.io","color:".concat(n.colors.main.accent,";font-size:2rem;background:").concat(n.colors.main.background),"color:".concat(n.colors.main.text,";font-size:0.8rem;background:").concat(n.colors.main.background)))}),[n]),Object(S.jsx)(E.Provider,{value:{themer:i},children:t})}var M,T,_,I,F=t(72),B=t.n(F),J=t(73),L=t.n(J),P=t(70),R=t(118);var X=Object(o.c)(O.a.div)(M||(M=Object(l.a)(["\n  --dim: ",";\n  font-weight: 400;\n  height: 100vh;\n  z-index: 0;\n  display: flex;\n  color: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n  transition: all 300ms ease-out;\n\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .links a,\n  .subtitle1 {\n    opacity: var(--dim);\n    line-height: 1.8rem;\n    @media (max-width: 500px) {\n      font-size: 1.5rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .big-message {\n    font-size: 4rem;\n    margin: 10px 0;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  .can {\n    font-size: 1.5rem;\n    font-weight: 400;\n    min-width: 120px;\n    max-width: 130px;\n    overflow-y: hidden;\n    margin-left: 10px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 500px) {\n    .big-message {\n      font-size: 2.3rem;\n      margin: 10px 0;\n      cursor: grabbing;\n    }\n    .can {\n      margin-left: 6px;\n      margin-bottom: 4px;\n    }\n  }\n"])),(function(e){return"light"===e.theme.colors.main.type?1:.6}),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.accent})),Y=["designer","developer","student"];function G(e){e.serverState,e.extras;var n=Object(w.a)({interval:20}),t=n.result,i=n.dencrypt;Object(r.useEffect)((function(){var e=0;setInterval((function(){var n=Y[e];if(n)return i(" "+n),void(e+=1);i(" "+Y[e=0])}),2e3)}),[i]);var c=function(e){var n=e.angle,t=void 0===n?10:n,i=e.divider,c=void 0===i?30:i,a=Object(r.useState)(!1),o=Object(s.a)(a,2),l=o[0],u=o[1],d=Object(P.a)(0),h=Object(P.a)(0),m=Object(R.a)(d,[-window.innerWidth,window.innerWidth],[-window.innerWidth/c,window.innerWidth/c]),b=Object(R.a)(h,[-window.innerHeight,window.innerHeight],[-window.innerHeight/c,window.innerHeight/c]),j=Object(R.a)(d,[-window.innerWidth,window.innerWidth],[-window.innerWidth/c,window.innerWidth/c]),p=Object(R.a)(h,[-window.innerHeight,window.innerHeight],[-window.innerHeight/c,window.innerHeight/c]),f=Object(P.a)(200),x=Object(P.a)(200),g=Object(R.a)(h,[0,400],[t,-t]),w=Object(R.a)(d,[0,400],[-t,t]),O=Object(r.useCallback)((function(e){if(window.innerWidth>500){u(!0),d.set(e.clientX-window.innerWidth/2),h.set(e.clientY-window.innerHeight/2);var n=e.currentTarget.getBoundingClientRect();return f.set(e.clientX-n.left),void x.set(e.clientY-n.top)}u(!1)}),[d,f,h,x]);return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>500?u(!0):u(!1)}))}),[]),Object(r.useMemo)((function(){return{style:l?{x:m,y:b,rotateX:g,rotateY:w,xshadow:j,yshadow:p}:void 0,handleMouse:O}}),[m,b,g,w,O,l,j,p])}({}),a=c.style,o=c.handleMouse;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(X,{onMouseMove:o,children:Object(S.jsxs)(O.a.div,{style:a,children:[Object(S.jsx)(O.a.div,{animate:{y:0,opacity:.6},initial:{y:100,opacity:0},transition:{delay:.5},children:Object(S.jsx)("a",{target:"_blank",className:"subtitle1",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"xrehpicx"})}),Object(S.jsxs)(O.a.h1,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,textShadow:"10px 10px 2px 2px white"},className:"big-message",children:["Raj Sharma",!!t&&Object(S.jsx)(O.a.span,{initial:{minWidth:"0px",y:20,opacity:0},animate:{minWidth:"120px",y:0,opacity:1},className:"can",children:t})]}),Object(S.jsxs)(O.a.div,{className:"links",transition:{delay:.5},initial:{y:-100,opacity:0},animate:{y:0,opacity:.999},children:[Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]}),Object(S.jsx)(D,{})]})})})}var K,Q=Object(o.c)(O.a.div)(T||(T=Object(l.a)(["\n  display: flex;\n  /* justify-content: flex-end; */\n  /* width: 100%; */\n  /* padding: 20px; */\n"]))),U=Object(o.c)(Object(O.a)(B.a))(_||(_=Object(l.a)(["\n  cursor: pointer;\n  margin-top: 10px;\n  user-select: none;\n"]))),q=Object(o.c)(Object(O.a)(L.a))(I||(I=Object(l.a)(["\n  cursor: pointer;\n  margin-top: 10px;\n  user-select: none;\n"])));function D(){var e=Object(r.useContext)(E).themer,n=e.theme,t=e.toggle;return Object(S.jsx)(Q,{children:Object(S.jsx)(O.a.div,{whileTap:{scale:2},onTap:function(){return t()},className:"theme-toggle",children:Object(S.jsx)(v.a,{children:"dark"===n.colors.main.type?Object(S.jsx)(U,{exit:{opacity:0,x:-10}}):Object(S.jsx)(q,{exit:{opacity:0,x:-10}})})})})}var V,$=Object(o.c)(O.a.div)(K||(K=Object(l.a)(['\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ',";\n\n  opacity: 0.6;\n"])),(function(e){return e.failed?"red":e.theme.colors.main.accent}));function A(e){var n=e.text,t=e.failed,i=Object(w.a)({interval:10}),c=i.result,a=i.dencrypt;return Object(r.useEffect)((function(){var e=null,t=setInterval((function(){a("xrehpicx"),e=setTimeout((function(){return a(n)}),10)}),1500);return function(){clearInterval(t),e&&clearTimeout(e)}}),[a,n]),Object(S.jsx)($,{failed:t,children:Object(S.jsx)("p",{children:t||c})})}var Z,ee=Object(o.c)((function(e){var n,t=e.project,r=e.className;return Object(S.jsxs)("div",{className:r,children:[Object(S.jsx)("h2",{onClick:Object.values(t.links).length?function(){return window.open(Object.values(t.links)[0])}:void 0,children:t.title}),Object(S.jsxs)("div",{className:"about-project",children:[t.props.description&&Object(S.jsx)("span",{className:"description",children:null===(n=t.props.description)||void 0===n?void 0:n.content}),Object(S.jsx)("span",{className:"status",children:t.props.status.name})]})]})}))(V||(V=Object(l.a)(["\n  margin: 10px 0;\n  z-index: 10;\n  opacity: ",";\n  transition: background 500ms ease-out;\n\n  h2 {\n    width: fit-content;\n    cursor: ",";\n    font-size: 2rem;\n  }\n  .about-project {\n    display: flex;\n    flex-direction: column;\n    margin-left: 5px;\n  }\n  .description {\n    font-weight: 600;\n  }\n  .status {\n    font-size: 0.8rem;\n  }\n"])),(function(e){return"discontinued"===e.project.props.status.name?"light"===e.theme.colors.main.type?.6:.4:"In development"===e.project.props.status.name?"light"===e.theme.colors.main.type?.9999:.8:"Completed"===e.project.props.status.name?"light"===e.theme.colors.main.type?.8:.6:void 0}),(function(e){return Object.values(e.project.links).length?"pointer":""}));var ne,te,re=Object(o.c)(O.a.div)(Z||(Z=Object(l.a)(["\n  background: ",";\n  color: ",";\n  padding: 20px;\n  z-index: 100;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  h4 {\n    opacity: ",";\n    user-select: none;\n    cursor: pointer;\n  }\n\n  .works {\n    margin-top: 10px;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .links a {\n    opacity: ",";\n    @media (max-width: 500px) {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}),(function(e){return"light"===e.theme.colors.main.type?1:.8}),(function(e){return e.theme.colors.main.background}),(function(e){return"light"===e.theme.colors.main.type?1:.6}));function ie(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(r.useRef)(null),a=Object(r.useState)(""),o=Object(s.a)(a,2),l=o[0],u=o[1];return Object(r.useEffect)((function(){(function(){return p.apply(this,arguments)})().then(i).catch((function(){u("request failed")}))}),[]),Object(S.jsx)(S.Fragment,{children:t.length?Object(S.jsxs)(re,{ref:c,initial:{y:100,opacity:0},animate:{y:0,opacity:1},children:[Object(S.jsx)("h4",{className:"works-title",onClick:function(){var e;return null===(e=c.current)||void 0===e?void 0:e.scrollIntoView()},children:"My Works"}),Object(S.jsx)("div",{className:"works",children:t.map((function(e,n){return Object(S.jsx)(ee,{project:e},window.btoa(e.title))}))}),Object(S.jsxs)("div",{className:"links",children:[Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]})]}):Object(S.jsx)(A,{failed:l,text:"fetching works..."})})}var ce=Object(o.c)(O.a.div)(ne||(ne=Object(l.a)(["\n  background: ",";\n  .gap {\n    pointer-events: none;\n    height: 91.5vh;\n  }\n  @media (max-width: 500px) {\n    .gap {\n      height: ","px;\n    }\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return(e.theme.height||window.innerHeight)-55})),ae=Object(o.c)((function(e){var n=e.text,t=e.className,i=e.interval,c=e.style,a=Object(w.a)({interval:i||10}),o=a.result,s=a.dencrypt;return Object(r.useEffect)((function(){var e=null,t=setInterval((function(){s("x"),e=setTimeout((function(){return s(n)}),i||10)}),1500);return function(){clearInterval(t),e&&clearTimeout(e)}}),[s,n,i]),Object(S.jsx)(O.a.p,{style:c,className:t,children:o})}))(te||(te=Object(l.a)(['\n  text-align: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0.5;\n  margin: 6px;\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n'])));function oe(){var e=Object(r.useState)(0),n=Object(s.a)(e,2),t=n[0],i=n[1];Object(r.useEffect)((function(){(function(){return f.apply(this,arguments)})().then(i).catch((function(){return i(-1)}))}),[]);var c=Object(P.a)(0);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(ce,{drag:"x",dragConstraints:{left:0,right:0},style:{x:c},children:[Object(S.jsx)(G,{serverState:t}),Object(S.jsx)(O.a.div,{className:"gap"}),t>0?Object(S.jsx)(ie,{}):Object(S.jsx)(A,{failed:t<0?"failed to get works":"",text:"waking up my server..."}),Object(S.jsx)(ae,{text:"v"+g.version}),Object(S.jsx)(ae,{text:"designed and built by ofc...me",interval:20})]})})}function se(){var e=Object(r.useContext)(E).themer,n=e.theme,t=e.Global;return Object(S.jsxs)(o.a,{theme:n,children:[Object(S.jsx)(t,{}),Object(S.jsx)(oe,{})]})}function le(){return Object(S.jsx)(H,{children:Object(S.jsx)(se,{})})}var ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,120)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ue()},66:function(e){e.exports=JSON.parse('{"version":"1.1.9"}')},80:function(e,n,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.21c07183.chunk.js.map