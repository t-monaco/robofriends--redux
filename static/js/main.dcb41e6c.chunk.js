(this["webpackJsonprobofriends-redux"]=this["webpackJsonprobofriends-redux"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(5),a=n.n(i),s=n(3),l=n(4),u=n(16),d=n(17),h=(n(28),n(29),function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5 ",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:o})]})]})}),b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(h,{name:t[n].name,id:t[n].id,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2 ",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",boder:"1px solid black",height:"800px"},children:e.children})},O=n(6),g=n(7),p=n(9),v=n(8),w=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(O.a)(this,n),(r=t.call(this)).state={hasError:!1},r}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),n}(o.Component),x=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{className:"f1",children:"ROBOFRIENDS"})})}}]),n}(o.Component),m=(n(30),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",k=function(){return function(e){var t;e({type:y}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}};var C=function(){var e=Object(s.c)((function(e){return e.searchRobots.searchField})),t=Object(s.c)((function(e){return e.requestRobots.robots})),n=Object(s.c)((function(e){return e.requestRobots.isPending})),c=Object(s.c)((function(e){return e.requestRobots.error})),i=Object(s.b)(),a=t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}));return Object(o.useEffect)((function(){i(k())}),[i]),c?Object(r.jsx)("h1",{className:"tc",children:"Ooops, something went wrong."}):n?Object(r.jsx)("h1",{className:"tc",children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(x,{}),Object(r.jsx)(j,{searchChange:function(e){return i((t=e.target.value,{type:m,payload:t}));var t}}),Object(r.jsx)(f,{children:Object(r.jsx)(w,{children:Object(r.jsx)(b,{robots:a})})})]})},R=n(2),N={searchField:""},L={isPending:!1,robots:[],error:""},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=Object(u.createLogger)(),W=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object(R.a)(Object(R.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case E:return Object(R.a)(Object(R.a)({},e),{},{robots:t.payload,isPending:!1});case S:return Object(R.a)(Object(R.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),_=Object(l.d)(W,Object(l.a)(d.a,U));a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:_,children:Object(r.jsx)(C,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends--redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends--redux","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.dcb41e6c.chunk.js.map