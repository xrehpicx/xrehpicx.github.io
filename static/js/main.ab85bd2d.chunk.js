(this["webpackJsonpxrehpicx.github.io"]=this["webpackJsonpxrehpicx.github.io"]||[]).push([[0],{33:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var r,i=t(0),c=t.n(i),a=t(25),o=t.n(a),s=(t(33),t(5)),l=t(7),u=t(6),h="",f="";window.data={accent:h,background:f};var p={colors:{main:{type:"dark",accent:"#29ffa6",background:"#000",text:"#ffffff"}}},d={colors:{main:{type:"light",accent:"#29ffa6",background:"#ffffff",text:"#000"}}};function m(n,e){switch(e.type){case"darkmode":return p;case"lightmode":return d;case"toggle":return"dark"===n.colors.main.type?d:p;default:return p}}var b=Object(s.b)(r||(r=Object(u.a)([" \n  body{\n    color: ",";\n    background: ",";\n    transition: color 100ms ease-out, background 100ms ease-out;\n  }\n"])),(function(n){return n.theme.colors.main.text}),(function(n){return h=n.theme.colors.main.accent,f=n.theme.colors.main.background,n.theme.colors.main.background}));var j=t(56),g=t(8),x=t.n(g),v=t(13),O=t(14),w=t.n(O),y="https://evve.herokuapp.com/api/";function k(){return(k=Object(v.a)(x.a.mark((function n(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.get(y+"notion/projects");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return(N=Object(v.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.get(y+"notion/");case 2:return n.abrupt("return",!!n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var _,C,z,S,W,E=t(15),F=t(1),I=s.c.div(_||(_=Object(u.a)(["\n  background: ",";\n  .gap {\n    pointer-events: none;\n    height: 91.5vh;\n  }\n  @media (max-width: 500px) {\n    .gap {\n      height: ","px;\n    }\n  }\n"])),(function(n){return n.theme.colors.main.background}),(function(n){return window.innerHeight-55}));function P(){var n=Object(i.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){(function(){return N.apply(this,arguments)})().then(r).catch((function(){return r(!1)}))}),[]),Object(F.jsxs)(I,{children:[Object(F.jsx)(U,{serverState:t}),Object(F.jsx)("div",{className:"gap"}),t?Object(F.jsx)(R,{}):Object(F.jsx)(G,{text:"waking up my server..."})]})}var T=s.c.div(C||(C=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  color: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .links a,\n  .subtitle1 {\n    opacity: 0.6;\n    @media (max-width: 500px) {\n      font-size: 1.5rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .big-message {\n    font-size: 4rem;\n    margin: 10px 0;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  .can {\n    font-size: 1.5rem;\n    font-weight: 400;\n    /* display: inline-block; */\n    min-width: 120px;\n    max-width: 130px;\n    overflow-y: hidden;\n    margin-left: 10px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 500px) {\n    .big-message {\n      font-size: 2.3rem;\n      margin: 10px 0;\n    }\n    .can {\n      margin-left: 6px;\n      margin-bottom: 4px;\n    }\n  }\n"])),(function(n){return n.theme.colors.main.accent}),(function(n){return n.theme.colors.main.accent})),B=["designer","developer","student"];function U(n){n.serverState;var e=Object(E.a)({interval:20}),t=e.result,r=e.dencrypt;return Object(i.useEffect)((function(){var n=0;setInterval((function(){var e=B[n];if(e)return r(" "+e),void(n+=1);r(" "+B[n=0])}),2e3)}),[r]),Object(F.jsx)(T,{children:Object(F.jsxs)("div",{children:[Object(F.jsx)(j.a.div,{animate:{y:0,opacity:.6},initial:{y:100,opacity:0},transition:{delay:.5},children:Object(F.jsx)("a",{target:"_blank",className:"subtitle1",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"xrehpicx"})}),Object(F.jsxs)(j.a.h1,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},className:"big-message",children:["Raj Sharma",!!t&&Object(F.jsx)(j.a.span,{initial:{minWidth:"0px",y:20,opacity:0},animate:{minWidth:"120px",y:0,opacity:1},className:"can",children:t})]}),Object(F.jsxs)(j.a.div,{className:"links",transition:{delay:.5},initial:{y:-100,opacity:0},animate:{y:0,opacity:.6},children:[Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]})]})})}var L=Object(s.c)(j.a.div)(z||(z=Object(u.a)(["\n  background: ",";\n  color: ",";\n  padding: 20px;\n\n  h4 {\n    opacity: 0.8;\n    user-select: none;\n  }\n\n  .works {\n    margin-top: 10px;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .links a {\n    opacity: 0.6;\n    @media (max-width: 500px) {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.colors.main.accent}),(function(n){return n.theme.colors.main.background}),(function(n){return n.theme.colors.main.background}));function R(){var n=Object(i.useState)([]),e=Object(l.a)(n,2),t=e[0],r=e[1],c=Object(i.useRef)(null);return Object(i.useEffect)((function(){(function(){return k.apply(this,arguments)})().then(r)}),[]),Object(F.jsx)(F.Fragment,{children:t.length?Object(F.jsxs)(L,{ref:c,initial:{y:100,opacity:0},animate:{y:0,opacity:1},children:[Object(F.jsx)("h4",{onClick:function(){var n;return null===(n=c.current)||void 0===n?void 0:n.scrollIntoView()},children:"My Works"}),Object(F.jsx)("div",{className:"works",children:t.map((function(n,e){return Object(F.jsx)(A,{project:n},window.btoa(n.title))}))}),Object(F.jsxs)("div",{className:"links",children:[Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]})]}):Object(F.jsx)(G,{text:"fetching works..."})})}var A=Object(s.c)((function(n){var e,t=n.project,r=n.className;return Object(F.jsxs)("div",{className:r,children:[Object(F.jsx)("h2",{onClick:Object.values(t.links).length?function(){return window.open(Object.values(t.links)[0])}:void 0,children:t.title}),Object(F.jsxs)("div",{className:"about-project",children:[t.props.description&&Object(F.jsx)("span",{className:"description",children:null===(e=t.props.description)||void 0===e?void 0:e.content}),Object(F.jsx)("span",{className:"status",children:t.props.status.name})]})]})}))(S||(S=Object(u.a)(["\n  margin: 10px 0;\n  opacity: ",";\n\n  h2 {\n    width: fit-content;\n    cursor: ",";\n    font-size: 2rem;\n  }\n  .about-project {\n    display: flex;\n    flex-direction: column;\n    margin-left: 5px;\n  }\n  .description {\n    font-weight: 600;\n  }\n  .status {\n    font-size: 0.8rem;\n  }\n"])),(function(n){return"discontinued"===n.project.props.status.name?.4:"In development"===n.project.props.status.name?.8:"Completed"===n.project.props.status.name?.6:void 0}),(function(n){return Object.values(n.project.links).length?"pointer":""}));var M=Object(s.c)(j.a.div)(W||(W=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n  opacity: 0.6;\n"])),(function(n){return n.theme.colors.main.accent}));function G(n){var e=n.text,t=Object(E.a)({interval:10}),r=t.result,c=t.dencrypt;return Object(i.useEffect)((function(){var n=null,t=setInterval((function(){c("xrehpicx"),n=setTimeout((function(){return c(e)}),10)}),1500);return function(){clearInterval(t),n&&clearTimeout(n)}}),[c,e]),Object(F.jsx)(M,{children:Object(F.jsx)("p",{children:r})})}var H=function(){var n=function(){var n=Object(i.useReducer)(m,p),e=Object(l.a)(n,2),t=e[0],r=e[1],c=Object(i.useCallback)((function(){console.log(r({type:"toggle"}))}),[]);return Object(i.useMemo)((function(){return{theme:t,Global:b,toggle:c}}),[t,c])}(),e=n.theme,t=n.Global;return function(n){Object(i.useEffect)((function(){n&&(console.clear(),console.log("%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/xrehpicx/xrehpicx.github.io","color:".concat(n.colors.main.accent,";font-size:2rem;"),"color:white;font-size:0.8rem;"))}),[n])}(e),Object(F.jsxs)(s.a,{theme:e,children:[Object(F.jsx)(t,{}),Object(F.jsx)(P,{})]})},J=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(H,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");K?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Q(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(e,n)}))}}(),J()}},[[54,1,2]]]);
//# sourceMappingURL=main.ab85bd2d.chunk.js.map