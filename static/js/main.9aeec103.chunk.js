(this["webpackJsonpxrehpicx.github.io"]=this["webpackJsonpxrehpicx.github.io"]||[]).push([[0],{58:function(e){e.exports=JSON.parse('{"version":"1.1.1"}')},72:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(33),a=t.n(c),o=(t(72),t(6)),s=t(18),l=t(8),u=t(30),d=t.n(u),h=t(39),b=t(40),m=t.n(b),j="https://evve.herokuapp.com/api/";function f(){return(f=Object(h.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(j+"notion/projects");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,m.a.get(j+"notion/");case 3:return e.t1=!!e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g,x=t(58),O=t(23),w=t(109),v=t(66),y={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"dark",accent:"#29ffa6",background:"#000",text:"#ffffff"}}},k={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"light",accent:"#141825",background:"#ececec",text:"#000"}}};window.data={accent:"",background:""};var N=Object(o.b)(g||(g=Object(l.a)([" \n  body{\n    color: ",";\n    background: ",";\n    transition: background 300ms ease-out;\n  }\n"])),(function(e){return e.theme.colors.main.text}),(function(e){return window.data.accent=e.theme.colors.main.accent,window.data.background=e.theme.colors.main.background,e.theme.colors.main.background}));function C(e,n){switch(n.type){case"darkmode":return y;case"lightmode":return k;case"updatehw":return e.height=window.innerHeight,e.width=window.innerWidth,Object(v.a)({},e);case"toggle":return"dark"===e.colors.main.type?k:y;default:return y}}var W=window.matchMedia("(prefers-color-scheme: dark)");var z=t(2),S=Object(r.createContext)({});function E(e){var n,t=e.children,i=function(){var e=Object(r.useReducer)(C,localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")||""):W.matches?y:k),n=Object(s.a)(e,2),t=n[0],i=n[1];Object(r.useEffect)((function(){var e=function(){return i({type:"updatehw"})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var c=Object(r.useCallback)((function(){i({type:"toggle"})}),[]);return Object(r.useEffect)((function(){var e=null,n=setTimeout((function(){c(),e=setTimeout((function(){return c()}),800)}),2e3);return function(){clearTimeout(n),e&&clearTimeout(e)}}),[c]),Object(r.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(t))}),[t]),Object(r.useMemo)((function(){return{theme:t,Global:N,toggle:c,dispatch:i}}),[t,c])}();return n=i.theme,Object(r.useEffect)((function(){n&&(console.clear(),console.log("%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/xrehpicx/xrehpicx.github.io","color:".concat(n.colors.main.accent,";font-size:2rem;background:").concat(n.colors.main.background),"color:".concat(n.colors.main.text,";font-size:0.8rem;background:").concat(n.colors.main.background)))}),[n]),Object(z.jsx)(S.Provider,{value:{themer:i},children:t})}var H,M,T,_,I=t(64),F=t.n(I),B=t(65),J=t.n(B),L=t(62),P=t(110);var R=o.c.div(H||(H=Object(l.a)(["\n  --dim: ",";\n  font-weight: 400;\n  height: 100vh;\n  z-index: 0;\n  display: flex;\n  color: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n  transition: all 300ms ease-out;\n\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .links a,\n  .subtitle1 {\n    opacity: var(--dim);\n    @media (max-width: 500px) {\n      font-size: 1.5rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .big-message {\n    font-size: 4rem;\n    margin: 10px 0;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  .can {\n    font-size: 1.5rem;\n    font-weight: 400;\n    min-width: 120px;\n    max-width: 130px;\n    overflow-y: hidden;\n    margin-left: 10px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 500px) {\n    .big-message {\n      font-size: 2.3rem;\n      margin: 10px 0;\n      cursor: grabbing;\n    }\n    .can {\n      margin-left: 6px;\n      margin-bottom: 4px;\n    }\n  }\n"])),(function(e){return"light"===e.theme.colors.main.type?1:.6}),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.accent})),X=["designer","developer","student"];function Y(e){e.serverState;var n=Object(O.a)({interval:20}),t=n.result,i=n.dencrypt;Object(r.useEffect)((function(){var e=0;setInterval((function(){var n=X[e];if(n)return i(" "+n),void(e+=1);i(" "+X[e=0])}),2e3)}),[i]);var c=function(e){var n=e.angle,t=void 0===n?10:n,i=e.divider,c=void 0===i?30:i,a=Object(r.useState)(!1),o=Object(s.a)(a,2),l=o[0],u=o[1],d=Object(L.a)(0),h=Object(L.a)(0),b=Object(P.a)(d,[-window.innerWidth,window.innerWidth],[-window.innerWidth/c,window.innerWidth/c]),m=Object(P.a)(h,[-window.innerHeight,window.innerHeight],[-window.innerHeight/c,window.innerHeight/c]),j=Object(P.a)(d,[-window.innerWidth,window.innerWidth],[-window.innerWidth/c,window.innerWidth/c]),f=Object(P.a)(h,[-window.innerHeight,window.innerHeight],[-window.innerHeight/c,window.innerHeight/c]),p=Object(L.a)(200),g=Object(L.a)(200),x=Object(P.a)(h,[0,400],[t,-t]),O=Object(P.a)(d,[0,400],[-t,t]),w=Object(r.useCallback)((function(e){if(window.innerWidth>500){u(!0),d.set(e.clientX-window.innerWidth/2),h.set(e.clientY-window.innerHeight/2);var n=e.currentTarget.getBoundingClientRect();return p.set(e.clientX-n.left),void g.set(e.clientY-n.top)}u(!1)}),[d,p,h,g]);return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>500?u(!0):u(!1)}))}),[]),Object(r.useMemo)((function(){return{style:l?{x:b,y:m,rotateX:x,rotateY:O,xshadow:j,yshadow:f}:void 0,handleMouse:w}}),[b,m,x,O,w,l,j,f])}({}),a=c.style,o=c.handleMouse;return Object(z.jsxs)(R,{onMouseMove:o,children:[Object(z.jsx)(U,{}),Object(z.jsxs)(w.a.div,{style:a,drag:!!a,dragConstraints:{left:0,right:0,top:0,bottom:0},children:[Object(z.jsx)(w.a.div,{animate:{y:0,opacity:.6},initial:{y:100,opacity:0},transition:{delay:.5},children:Object(z.jsx)("a",{target:"_blank",className:"subtitle1",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"xrehpicx"})}),Object(z.jsxs)(w.a.h1,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,textShadow:"10px 10px 2px 2px white"},className:"big-message",children:["Raj Sharma",!!t&&Object(z.jsx)(w.a.span,{initial:{minWidth:"0px",y:20,opacity:0},animate:{minWidth:"120px",y:0,opacity:1},className:"can",children:t})]}),Object(z.jsxs)(w.a.div,{className:"links",transition:{delay:.5},initial:{y:-100,opacity:0},animate:{y:0,opacity:.6},children:[Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]})]})]})}var D,G=Object(o.c)(w.a.div)(M||(M=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding: 20px;\n\n  svg {\n    display: block;\n  }\n"]))),K=Object(o.c)(Object(w.a)(F.a))(T||(T=Object(l.a)(["\n  cursor: pointer;\n"]))),Q=Object(o.c)(Object(w.a)(J.a))(_||(_=Object(l.a)(["\n  cursor: pointer;\n"])));function U(){var e=Object(r.useContext)(S).themer,n=e.theme,t=e.toggle;return Object(z.jsx)(G,{children:Object(z.jsx)(w.a.div,{whileTap:{scale:2},onTap:function(){return t()},className:"theme-toggle",children:"dark"===n.colors.main.type?Object(z.jsx)(K,{}):Object(z.jsx)(Q,{})})})}var q,V=Object(o.c)(w.a.div)(D||(D=Object(l.a)(['\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ',";\n\n  opacity: 0.6;\n"])),(function(e){return e.failed?"red":e.theme.colors.main.accent}));function $(e){var n=e.text,t=e.failed,i=Object(O.a)({interval:10}),c=i.result,a=i.dencrypt;return Object(r.useEffect)((function(){var e=null,t=setInterval((function(){a("xrehpicx"),e=setTimeout((function(){return a(n)}),10)}),1500);return function(){clearInterval(t),e&&clearTimeout(e)}}),[a,n]),Object(z.jsx)(V,{failed:t,children:Object(z.jsx)("p",{children:t||c})})}function A(e){var n=e.text,t=e.className,i=e.interval,c=e.style,a=Object(O.a)({interval:i||10}),o=a.result,s=a.dencrypt;return Object(r.useEffect)((function(){var e=null,t=setInterval((function(){s("x"),e=setTimeout((function(){return s(n)}),i||10)}),1500);return function(){clearInterval(t),e&&clearTimeout(e)}}),[s,n,i]),Object(z.jsx)(w.a.p,{style:c,className:t,children:o})}var Z,ee=Object(o.c)((function(e){var n,t=e.project,r=e.className;return Object(z.jsxs)("div",{className:r,children:[Object(z.jsx)("h2",{onClick:Object.values(t.links).length?function(){return window.open(Object.values(t.links)[0])}:void 0,children:t.title}),Object(z.jsxs)("div",{className:"about-project",children:[t.props.description&&Object(z.jsx)("span",{className:"description",children:null===(n=t.props.description)||void 0===n?void 0:n.content}),Object(z.jsx)("span",{className:"status",children:t.props.status.name})]})]})}))(q||(q=Object(l.a)(["\n  margin: 10px 0;\n  z-index: 10;\n  opacity: ",";\n  transition: background 500ms ease-out;\n\n  h2 {\n    width: fit-content;\n    cursor: ",";\n    font-size: 2rem;\n  }\n  .about-project {\n    display: flex;\n    flex-direction: column;\n    margin-left: 5px;\n  }\n  .description {\n    font-weight: 600;\n  }\n  .status {\n    font-size: 0.8rem;\n  }\n"])),(function(e){return"discontinued"===e.project.props.status.name?"light"===e.theme.colors.main.type?.6:.4:"In development"===e.project.props.status.name?"light"===e.theme.colors.main.type?.9999:.8:"Completed"===e.project.props.status.name?"light"===e.theme.colors.main.type?.8:.6:void 0}),(function(e){return Object.values(e.project.links).length?"pointer":""}));var ne,te,re,ie,ce=Object(o.c)(w.a.div)(Z||(Z=Object(l.a)(["\n  background: ",";\n  color: ",";\n  padding: 20px;\n  z-index: 100;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  h4 {\n    opacity: ",";\n    user-select: none;\n    cursor: pointer;\n  }\n\n  .works {\n    margin-top: 10px;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n    margin-right: 10px;\n  }\n  .links {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .links a {\n    opacity: ",";\n    @media (max-width: 500px) {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}),(function(e){return"light"===e.theme.colors.main.type?1:.8}),(function(e){return e.theme.colors.main.background}),(function(e){return"light"===e.theme.colors.main.type?1:.6}));function ae(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(r.useRef)(null),a=Object(r.useState)(""),o=Object(s.a)(a,2),l=o[0],u=o[1];return Object(r.useEffect)((function(){(function(){return f.apply(this,arguments)})().then(i).catch((function(){u("request failed")}))}),[]),Object(z.jsx)(z.Fragment,{children:t.length?Object(z.jsxs)(ce,{ref:c,initial:{y:100,opacity:0},animate:{y:0,opacity:1},children:[Object(z.jsx)("h4",{onClick:function(){var e;return null===(e=c.current)||void 0===e?void 0:e.scrollIntoView()},children:"My Works"}),Object(z.jsx)("div",{className:"works",children:t.map((function(e,n){return Object(z.jsx)(ee,{project:e},window.btoa(e.title))}))}),Object(z.jsxs)("div",{className:"links",children:[Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:raj.fps2000@gmail.com",children:"email"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/xrehpicx",children:"instagram"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w",children:"youtube"}),Object(z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xrehpicx",children:"github"})]})]}):Object(z.jsx)($,{failed:l,text:"fetching works..."})})}var oe=Object(o.c)(w.a.div)(ne||(ne=Object(l.a)(["\n  background: ",";\n  .gap {\n    pointer-events: none;\n    height: 91.5vh;\n  }\n  @media (max-width: 500px) {\n    .gap {\n      height: ","px;\n    }\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return(e.theme.height||window.innerHeight)-55})),se=Object(o.c)(A)(te||(te=Object(l.a)(['\n  text-align: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0.5;\n  margin: 6px;\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n']))),le=Object(o.c)(w.a.div)(re||(re=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    margin: 10px;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background})),ue=Object(o.c)(A)(ie||(ie=Object(l.a)(["\n  margin-bottom: 20px;\n"])));function de(){var e=Object(r.useState)(0),n=Object(s.a)(e,2),t=n[0],i=n[1];Object(r.useEffect)((function(){(function(){return p.apply(this,arguments)})().then(i).catch((function(){return i(-1)}))}),[]);var c=Object(L.a)(0),a=Object(P.a)(c,[0,100],["blur(0px)","blur(10px)"]),o=Object(P.a)(c,[0,100],[0,50]),l=Object(P.a)(c,[0,100],[0,1]),u=Object(P.a)(c,[0,100],[0,10]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(le,{style:{height:o},className:"refresh-menu",children:Object(z.jsx)(ue,{style:{opacity:l,y:u},text:"release to reload"})}),Object(z.jsxs)(oe,{style:{y:c,filter:a},drag:"y",onDragEnd:function(){var e=o.get();e<=50&&e>40&&window.location.reload()},dragConstraints:{top:0,bottom:0},children:[Object(z.jsx)(Y,{serverState:t}),Object(z.jsx)("div",{className:"gap"}),t>0?Object(z.jsx)(ae,{}):Object(z.jsx)($,{failed:t<0?"failed to get works":"",text:"waking up my server..."}),Object(z.jsx)(se,{text:"v"+x.version}),Object(z.jsx)(se,{text:"designed and built by ofc...me",interval:20})]})]})}function he(){var e=Object(r.useContext)(S).themer,n=e.theme,t=e.Global;return Object(z.jsxs)(o.a,{theme:n,children:[Object(z.jsx)(t,{}),Object(z.jsx)(de,{})]})}function be(){return Object(z.jsx)(E,{children:Object(z.jsx)(he,{})})}var me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,111)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(z.jsx)(i.a.StrictMode,{children:Object(z.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),me()}},[[97,1,2]]]);
//# sourceMappingURL=main.9aeec103.chunk.js.map