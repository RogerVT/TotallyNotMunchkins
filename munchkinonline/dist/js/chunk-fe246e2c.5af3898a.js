(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe246e2c"],{"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("17c2"),o=a("9112");for(var s in r){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),i=a("ae40"),o=r("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,a){"use strict";var n=a("23e7"),r=a("5a34"),i=a("1d80"),o=a("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(i(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"44e7":function(t,e,a){var n=a("861d"),r=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5bd0":function(t,e,a){"use strict";var n=a("b21f"),r=a.n(n);r.a},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a81c:function(t,e,a){},ab13:function(t,e,a){var n=a("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},b21f:function(t,e,a){},b30e:function(t,e,a){"use strict";var n=a("a81c"),r=a.n(n);r.a},c66d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",[a("b-card",{attrs:{id:"profile",title:"Your Profile"}},[a("b-card-text",[t._v("Username: "+t._s(t.userData.name))]),a("b-card-text",[t._v("Email: "+t._s(t.userData.email))]),a("b-card-text",[t._v("Date Joined: "+t._s(t.userData.joined))])],1)],1),a("div",[a("b-card",{attrs:{id:"history",title:"Game History"}},[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.gameHistory,(function(t){return a("div",{key:t.id},[a("AccordionElement",{attrs:{entryData:t}})],1)})),0)])],1),a("div",[a("SiteButton",{attrs:{buttonData:t.buttonData},on:{"btn-click":function(e){return t.logOut()}}})],1)])},r=[],i=(a("d81d"),a("205f")),o=a("8aa5"),s=a.n(o),c=a("f043"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.entryData.id,expression:"entryData.id"}],staticClass:"button",attrs:{variant:"info"}},[t._v(t._s(t.entryData.data.room)+" - "+t._s(t.entryData.data.date))])],1),a("b-collapse",{attrs:{id:t.entryData.id,accordion:"game-history",role:"tabpanel"}},[a("b-card-body",t._l(t.elements,(function(e,n){return a("p",{key:n},[a("span",{class:e.pos},[t._v(t._s(e.pos)+". "+t._s(e.value))])])})),0)],1)],1)},l=[],d=(a("4160"),a("caad"),a("2532"),a("159b"),a("1947")),f=a("5843"),h={name:"AccordionElement",components:{BCard:i["a"],BButton:d["a"],BCollapse:f["a"]},data:function(){return{elements:[]}},created:function(){this.generatePositions()},props:["entryData"],methods:{generatePositions:function(){var t=this,e=this.entryData.data.usernames,a=this.entryData.data.winners;console.log(e,a),e.forEach((function(e,n){a.includes(e)?t.elements.push({value:e,pos:"1"}):t.elements.push({value:e,pos:"".concat(n+1)})}))}}},m=h,g=(a("b30e"),a("2877")),b=Object(g["a"])(m,u,l,!1,null,"7b775abc",null),v=b.exports,p=a("56d7"),y={name:"profile",components:{BCard:i["a"],AccordionElement:v,SiteButton:c["a"]},data:function(){return{userData:{name:"",email:"",joined:""},gameHistory:[],buttonData:{id:101,buttonText:"Log Out",eventName:"logout"}}},created:function(){var t=this;s.a.auth().onAuthStateChanged((function(e){e?t.getUserData(e):t.userData={name:"",email:"",joined:""}}))},methods:{logOut:function(){var t=this;""!=this.userData.email?s.a.auth().signOut().then((function(){s.a.auth().onAuthStateChanged((function(){t.$router.push("/")}))})):alert("You have not signed in")},getUserData:function(t){var e=this;p["userCollection"].where("email","==",t.email).limit(1).get().then((function(t){e.userData=t.docs[0].data(),e.getGameHistory()})).catch((function(t){console.log("Error loading user data: ",t)}))},getGameHistory:function(){var t=this;p["gameCollection"].where("emails","array-contains",this.userData.email).limit(10).get().then((function(e){t.gameHistory=e.docs.map((function(t){return{data:t.data(),id:t.id}}))})).catch((function(t){console.log("Error getting game data: ",t)}))}}},S=y,D=(a("5bd0"),Object(g["a"])(S,n,r,!1,null,"7a5edc68",null));e["default"]=D.exports},caad:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").includes,i=a("44d2"),o=a("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!s},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-fe246e2c.5af3898a.js.map