(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(26),s=n.n(i),l=(n(34),n(9)),r=n(10),j=n(12),o=n(11),b=(n(35),n(1)),d=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"header-wrapper",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("a",{href:"/",children:"Netflix"})}),Object(b.jsxs)("ul",{className:"right-section",children:[Object(b.jsx)("li",{children:"Login"}),Object(b.jsx)("li",{className:"button",children:"Start your free trail"})]})]})})}}]),n}(c.Component),u=(n(37),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer-wrapper",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("ul",{className:"footer-links",children:[Object(b.jsx)("li",{children:"Home |"}),Object(b.jsx)("li",{children:"Terms and Conditions |"}),Object(b.jsx)("li",{children:"Privacy Policy |"}),Object(b.jsx)("li",{children:" Collection Statement |"}),Object(b.jsx)("li",{children:"Help |"}),Object(b.jsx)("li",{children:"Manage Account"})]}),Object(b.jsx)("p",{children:"Copyright \xa9 2016 Netflix streming. All Rights Reserved."}),Object(b.jsxs)("div",{className:"footer-bottom-links",children:[Object(b.jsxs)("ul",{className:"social-links",children:[Object(b.jsx)("li",{}),Object(b.jsx)("li",{}),Object(b.jsx)("li",{})]}),Object(b.jsxs)("ul",{className:"app-download",children:[Object(b.jsx)("li",{}),Object(b.jsx)("li",{}),Object(b.jsx)("li",{})]})]})]})})}}]),n}(c.Component)),h=(n(38),n(27)),O=n.n(h),x=n(28),p=n(2),f=a.a.lazy((function(){return n.e(4).then(n.bind(null,68))})),m=a.a.lazy((function(){return n.e(3).then(n.bind(null,70))})),v=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={compeleteData:[]},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then((function(t){e.setState({compeleteData:t.data.entries})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.compeleteData,"this.state.compeleteData"),Object(b.jsxs)("div",{className:"App-wrapper",children:[Object(b.jsx)(d,{}),Object(b.jsx)(x.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(p.a,{exact:!0,path:"/netflix-clone",render:function(){return Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsx)(m,{compeleteData:e.state.compeleteData})})}}),Object(b.jsx)(p.a,{exact:!0,path:"/series",render:function(){return Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsx)(f,{dataType:"series",compeleteData:e.state.compeleteData})})}}),Object(b.jsx)(p.a,{exact:!0,path:"/movie",render:function(){return Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsx)(f,{dataType:"movies",compeleteData:e.state.compeleteData})})}})]})}),Object(b.jsx)(u,{})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[65,1,2]]]);
//# sourceMappingURL=main.d4b284fb.chunk.js.map