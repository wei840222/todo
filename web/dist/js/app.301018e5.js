(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"168279d9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0047":function(e,t,n){"use strict";n("b66d")},1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["F"])("router-view");return Object(r["y"])(),Object(r["f"])(i)}var o=n("5530"),c=n("6c02"),i=n("dd2f"),u=n("365c"),s=n("31a8"),f=n("ad17"),l=n("a012"),d=n("957f"),b=n("d2f5"),p=n("b070"),O=n("d703"),g=n("f4db"),j=n("f685"),v=n("fd32"),m=n.n(v),h={setup:function(){var e=Object(c["c"])();m.a.init({liffId:"1656247924-eX5ZOvN0"}).then((function(){m.a.isLoggedIn()?"true"===window.sessionStorage.getItem("liffRefresh")&&(window.sessionStorage.removeItem("liffRefresh"),e.go()):(window.sessionStorage.setItem("liffRefresh","true"),m.a.login())}));var t=new i["a"]((function(e,t){return e.setContext((function(e){var t=e.headers,n=void 0===t?{}:t;return{headers:Object(o["a"])(Object(o["a"])({},n),{},{Authorization:m.a.isLoggedIn()?m.a.getAccessToken():null})}})),t(e)})),n=new u["a"]({link:Object(s["a"])((function(e){var t=e.query,n=Object(p["e"])(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),new b["a"]({uri:"wss://tinychats.herokuapp.com/graphql",options:{reconnect:!0}}),Object(f["a"])([t,Object(O["a"])({useGETForHashedQueries:!0,sha256:g["sha256"]}),Object(l["a"])({uri:"https://tinychats.herokuapp.com/graphql"})])),cache:new d["a"]});Object(r["A"])(j["a"],n)}};n("8edc");h.render=a;var y=h,w=(n("d3b7"),n("3ca3"),n("ddb0"),Object(r["M"])("data-v-44034ec4"));Object(r["B"])("data-v-44034ec4");var x=Object(r["g"])("Loading..."),M=Object(r["h"])("div",{id:"message-end"},null,-1),k=Object(r["g"])("send");Object(r["z"])();var S,L,_,C,P=w((function(e,t,n,a,o,c){var i=Object(r["F"])("van-loading"),u=Object(r["F"])("van-cell"),s=Object(r["F"])("van-button"),f=Object(r["F"])("van-field");return Object(r["y"])(),Object(r["f"])(r["a"],null,[a.currentUserLoading||a.listMessagesLoading?(Object(r["y"])(),Object(r["f"])(i,{key:0,style:{"text-align":"center","margin-top":"10px"}},{default:w((function(){return[x]})),_:1})):(Object(r["y"])(!0),Object(r["f"])(r["a"],{key:1},Object(r["E"])(a.messages,(function(e,t){return Object(r["y"])(),Object(r["f"])(u,{key:e.id,title:e.text},null,8,["title"])})),128)),(Object(r["y"])(!0),Object(r["f"])(r["a"],null,Object(r["E"])(a.messagesCreated,(function(e,t){return Object(r["y"])(),Object(r["f"])(u,{key:e.id,title:e.text},null,8,["title"])})),128)),M,Object(r["h"])(f,{class:"fixedbutton",modelValue:a.createMessageState,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.createMessageState=e})},{button:w((function(){return[Object(r["h"])(s,{size:"small",loading:a.createMessageLoading,onClick:a.createMessage},{default:w((function(){return[k]})),_:1},8,["loading","onClick"])]})),_:1},8,["modelValue"])],64)})),U=n("8785"),A=n("5184"),I=n("f672"),q=Object(A["a"])(S||(S=Object(U["a"])(["\n  query currentUser {\n    currentUser {\n      id\n      name\n      avatarUrl\n    }\n  }\n"]))),E=Object(A["a"])(L||(L=Object(U["a"])(["\n  query listMessages {\n    messages {\n      id\n      text\n      createdAt\n      user {\n        id\n        name\n        avatarUrl\n      }\n    }\n  }\n"]))),F=Object(A["a"])(_||(_=Object(U["a"])(["\n  mutation createMessage($text: String!) {\n    createMessage(input: { text: $text }) {\n      id\n      text\n      createdAt\n      user {\n        id\n        name\n        avatarUrl\n      }\n    }\n  }\n"]))),T=Object(A["a"])(C||(C=Object(U["a"])(["\n  subscription onMessageCreated {\n    messageCreated {\n      id\n      text\n      createdAt\n      user {\n        id\n        name\n        avatarUrl\n      }\n    }\n  }\n"]))),z={name:"Home",setup:function(){var e=Object(j["c"])(q),t=e.loading,n=Object(j["c"])(E),a=n.result,o=n.loading,c=n.onResult,i=Object(j["d"])(a,[],(function(e){return e.messages})),u=Object(r["D"])([]),s=Object(r["D"])(""),f=Object(j["b"])(F,(function(){return{variables:{text:s.value}}})),l=f.mutate,d=f.loading,b=f.onDone;b((function(){return s.value=""}));var p=Object(j["e"])(T),O=p.result;return Object(r["K"])(O,(function(e){u.value.push(JSON.parse(JSON.stringify(e.messageCreated))),Object(I["a"])("#message-end")}),{lazy:!0}),c((function(){return Object(I["a"])(window.innerHeight)})),{currentUserLoading:t,listMessagesLoading:o,messages:i,messagesCreated:u,createMessageState:s,createMessage:l,createMessageLoading:d}}};n("0047");z.render=P,z.__scopeId="data-v-44034ec4";var D=z,H=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],J=Object(c["a"])({history:Object(c["b"])("/"),routes:H}),R=J,N=n("b970"),V=(n("157a"),function(e){return e.use(N["a"])}),$=Object(r["e"])(y);V($),$.use(R).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"8edc":function(e,t,n){"use strict";n("f7a1")},9:function(e,t){},b66d:function(e,t,n){},f7a1:function(e,t,n){}});
//# sourceMappingURL=app.301018e5.js.map