(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,n,t){e.exports=t(31)},28:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(3),s=t(8),l=t(17),u=t(18),d=(t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29);var f=t(5),b=t(6),p=t(9),g=t(7),m=t(10),E=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"searchfield",placeholder:"search robots",onChange:e.barChange,className:"pa3 ba b--green bg-lightest-blue"}))},v=function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))},w=function(e){var n=e.robots.map((function(e,n){return r.a.createElement(v,{key:n,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,n)},O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},R=function(e){function n(){var e;return Object(f.a)(this,n),(e=Object(p.a)(this,Object(g.a)(n).call(this))).state={error:!1},e}return Object(m.a)(n,e),Object(b.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("h1",null,"Oops, something went wrong!"):this.props.children}}]),n}(r.a.Component),y=(t(30),function(e){function n(){return Object(f.a)(this,n),Object(p.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRobotsRequest()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.isPending,o=e.robots,a=e.onSearchChange,i=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(E,{barChange:a}),r.a.createElement("br",null),r.a.createElement(O,null,r.a.createElement(R,null,r.a.createElement(w,{robots:i}))))}}]),n}(r.a.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRobotsRequest:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(y),j={searchField:""},C={isPending:"",robots:[],error:""},k=Object(c.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:n.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:n.payload});default:return e}}}),_=Object(l.createLogger)(),T=Object(c.d)(k,Object(c.a)(u.a,_));i.a.render(r.a.createElement(s.a,{store:T}," ",r.a.createElement(S,null)," "),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobofriendsApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/RobofriendsApp","/service-worker.js");d?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.60ac595f.chunk.js.map