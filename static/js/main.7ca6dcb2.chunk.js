(this["webpackJsonpxrehpicx.github.io"]=this["webpackJsonpxrehpicx.github.io"]||[]).push([[0],{103:function(e,t,A){},111:function(e,t,A){"use strict";A.r(t);var c=A(3),n=A(1),a=A.n(n),s=A(25),i=A.n(s),o=(A(85),A(40)),g=A(16),l=A(127),r=A(130),B=A(70),j=A.n(B),w=(A(103),A(129)),d=A(75),D=A.n(d),O=A(73),b=A.n(O),h=A(74),u=A.n(h),C=A.p+"static/media/blue.cbca6f5c.jpg",m=A.p+"static/media/atria.bcb7328f.png",x=A.p+"static/media/cia.3bad3b3b.png",f=A.p+"static/media/dsc.cca56820.png";var v=function(){var e=Object(l.useSpring)({config:{mass:1,friction:10,damping:1,frequency:.6},from:{top:window.innerHeight/2-40,left:window.innerWidth/2-40,transform:"translate(-50%, -50%)",fontSize:"3rem"},top:0,left:0,transform:"translate(0,0)",fontSize:"2rem",delay:1e3}),t=Object(l.useSpring)({from:{opacity:0},opacity:1,delay:1500});return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("nav",{children:Object(c.jsx)("div",{className:"left",children:Object(c.jsx)(l.animated.p,{style:e,className:"name",children:"Raj"})})}),Object(c.jsx)(p,{fadeIn:t}),Object(c.jsx)(P,{fadeIn:t}),Object(c.jsx)(X,{fadeIn:t}),Object(c.jsx)(F,{fadeIn:t})]})})},H="https://evve.herokuapp.com/media";function p(e){var t=e.fadeIn,A=Object(n.useState)([]),a=Object(g.a)(A,2),s=a[0],i=a[1],B=Object(n.useState)(!1),w=Object(g.a)(B,2),d=w[0],D=w[1],O=Object(n.useState)({height:"50vh",overflow:"hidden"}),b=Object(g.a)(O,2),h=b[0],u=b[1],C=Object(l.useSpring)((function(){return{opacity:1,pointerEvents:"all"}})),m=Object(g.a)(C,2),x=m[0],f=m[1];return Object(n.useEffect)((function(){D(!0),j.a.get(H+"/works.json").then((function(e){i(e.data),D(!1)}))}),[]),Object(c.jsxs)(l.animated.div,{style:Object(o.a)(Object(o.a)({},t),h),className:"works",children:[Object(c.jsx)("p",{className:"work-title",children:"My Work"}),d?Object(c.jsx)(r.a,{}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("div",{className:"work-videos",children:s.map((function(e,t){return Object(c.jsx)(Q,{work:e,index:t},t)}))}),d?"":Object(c.jsx)(l.animated.div,{className:"shade",style:x,children:Object(c.jsx)("span",{onClick:function(e){u({height:"auto",overflow:"auto"}),f({opacity:0,pointerEvents:"none"})},children:"view all"})})]})}function Q(e){var t=e.work,A=e.index,n=Object(l.useSpring)({config:{mass:1,friction:1,damping:1,frequency:1},from:{opacity:0,transform:"translateY(50px) rotate(1deg)"},opacity:1,transform:"translateY(0) rotate(0)",delay:1500+100*A});return Object(c.jsxs)(l.animated.div,{style:n,className:"work",children:[Object(c.jsx)("div",{className:"cover-img",children:Object(c.jsx)("img",{src:H+t.image,alt:""})}),Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("span",{className:"title",onClick:function(){t.links&&(t.links.default?window.open(t.links.default.link):window.open(t.links.github.link))},children:t.title}),Object(c.jsx)("span",{className:"description",children:t.description}),Object(c.jsx)(J,{phase:t.phase}),t.links?Object(c.jsx)(y,{links:t.links}):""]})]})}function y(e){var t=e.links;return delete(t=Object(o.a)({},t)).default,Object(c.jsx)("div",{className:"more-info",children:Object.values(t).map((function(e,t){return e?Object(c.jsx)("img",{onClick:function(){return window.open(e.link)},className:"link-logo",src:e.logo,alt:"",style:{filter:e.link.includes("github.com")?"invert(1)":""}},t):""}))})}function J(e){var t=e.phase;return Object(c.jsxs)("div",{className:"dev-status",children:[Object(c.jsx)("div",{className:"indicator",style:{background:t.color}}),Object(c.jsx)("span",{style:{color:t.color},children:t.message})]})}var I="#81ff81",k="yellow",E="cyan";function L(){return Object(c.jsxs)("div",{className:"scales",children:[Object(c.jsxs)("div",{className:"scale",children:[Object(c.jsx)("div",{className:"dot",style:{background:E}}),Object(c.jsx)("span",{children:"learning"})]}),Object(c.jsxs)("div",{className:"scale",children:[Object(c.jsx)("div",{className:"dot",style:{background:k}}),Object(c.jsx)("span",{children:"can work with"})]}),Object(c.jsxs)("div",{className:"scale",children:[Object(c.jsx)("div",{className:"dot",style:{background:I}}),Object(c.jsx)("span",{children:"advanced/learning"})]})]})}var Y=[{color:I,text:"JavaScript"},{color:I,text:"React"},{color:I,text:"Nodejs"},{color:E,text:"Electronics and Communication"},{color:I,text:"expressjs"},{color:I,text:"Sketch"},{color:k,text:"Figma"},{color:k,text:"Adobe XD"},{color:k,text:"Logo Design"},{color:I,text:"html/css/scss"},{color:I,text:"material-ui/ant-design react"},{color:k,text:"fastjs"},{color:k,text:"tensorflow.js"}];function P(e){var t=e.fadeIn;return Object(c.jsxs)(l.animated.div,{className:"about",style:t,children:[Object(c.jsx)("div",{className:"profile-img",children:Object(c.jsx)("img",{src:C,alt:""})}),Object(c.jsxs)("div",{className:"in",children:[Object(c.jsx)("p",{className:"name",children:"Raj Sharma"}),Object(c.jsxs)("div",{className:"data",children:[Object(c.jsx)("p",{children:"20"}),Object(c.jsxs)("div",{className:"memberof",children:[Object(c.jsx)("img",{src:m,style:{width:"150px"},alt:"",className:"club"}),Object(c.jsx)("img",{src:x,alt:"",className:"club"}),Object(c.jsx)("img",{src:f,alt:"",className:"club"}),Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"club"})]})]})]})]})}function X(e){var t=e.fadeIn;return Object(c.jsxs)(l.animated.div,{style:t,className:"profile-data",children:[Object(c.jsx)("p",{className:"name",children:"Skills"}),Object(c.jsx)(L,{}),Object(c.jsx)("div",{className:"more-data",children:Y.map((function(e,t){return Object(c.jsx)(G,Object(o.a)({},e),t)}))})]})}function G(e){var t=e.color,A=e.text;return Object(c.jsxs)("div",{style:{padding:"2px 10px",paddingRight:"12px",paddingBottom:"3px",border:"1px solid ".concat(t),color:t,borderRadius:"20px",display:"flex",alignItems:"center"},children:[Object(c.jsx)("div",{style:{height:"10px",width:"10px",background:t,borderRadius:"50%",marginRight:"6px"}}),Object(c.jsx)("span",{children:A})]})}function T(e){var t=e.fadeIn;return Object(c.jsxs)(l.animated.div,{style:t,className:"socials",children:[Object(c.jsx)(w.a,{onClick:function(){return window.open("https://github.com/xrehpicx")},children:Object(c.jsx)(b.a,{style:{color:"white"}})}),Object(c.jsx)(w.a,{onClick:function(){return window.open("mailto:raj.fps2000@gmail.com?Subject=Help")},children:Object(c.jsx)(u.a,{style:{color:"white"}})}),Object(c.jsx)(w.a,{onClick:function(){return window.open("https://instagram.com/xrehpicx")},children:Object(c.jsx)(D.a,{style:{color:"white"}})})]})}function F(e){var t=e.fadeIn;return Object(c.jsxs)(l.animated.footer,{style:t,children:[Object(c.jsx)("h2",{children:"Contact"}),Object(c.jsx)(T,{})]})}var U=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(v,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,132)).then((function(t){var A=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;A(e),c(e),n(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()},85:function(e,t,A){}},[[111,1,2]]]);
//# sourceMappingURL=main.7ca6dcb2.chunk.js.map