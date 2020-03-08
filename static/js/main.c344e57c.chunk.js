(this.webpackJsonphacktech=this.webpackJsonphacktech||[]).push([[0],{229:function(e,a,t){e.exports=t(454)},234:function(e,a,t){},454:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),i=(t(234),t(13)),o=t(180),m=t.n(o),u=t(195),s=t(194),d=t.n(s),b=t(193),E=t.n(b),p=t(484),f=t(486),h=t(488),g=t(489),y=t(487),v=t(485),O=t(473),j=t(20),C=Object(O.a)((function(e){return{graphContainer:{display:"flex",flexDirection:"column",margin:20},graphTitle:{marginLeft:"auto",marginRight:"auto"}}}));function x(e){var a=e.data,t=e.dataKey,n=C();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:n.tableContainer},l.a.createElement(j.c,{width:600,height:300,data:a},l.a.createElement(j.b,{type:"monotone",dataKey:t,stroke:"#8884d8"}),l.a.createElement(j.a,{stroke:"#ccc"}),l.a.createElement(j.e,{dataKey:"time"}),l.a.createElement(j.f,null),l.a.createElement(j.d,null))))}var w=t(475),S=t(477),k=Object(O.a)((function(e){return{tableContainer:{display:"flex"},tableStyle:{flex:2}}}));function T(e){var a=e.data,t=k();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Temperature Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement(x,{className:t.tableStyle,data:a,dataKey:"temperature"})),l.a.createElement(S.a,{item:!0,md:5},"weewoo"))))}var K=Object(O.a)((function(e){return{tableContainer:{display:"flex"},tableStyle:{flex:2}}}));function N(e){var a=e.data,t=K();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Altitude Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement(x,{className:t.tableStyle,data:a,dataKey:"altitude"})),l.a.createElement(S.a,{item:!0,md:5},"weewoo"))))}var F=t(478),z=t(479),A=t(480),D=t(481),G=t(482),P=t(483),B=Object(O.a)((function(e){return{tableContainer:{maxHeight:450,overflowY:"auto"},tableStyle:{flex:2},graphContainer:{display:"flex",flexDirection:"column",margin:20},graphTitle:{marginLeft:"auto",marginRight:"auto"}}}));function I(e){var a=e.data,t=B();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"CO2 Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement("div",{className:t.graphContainer},l.a.createElement(j.c,{width:600,height:300,data:a},l.a.createElement(j.b,{type:"monotone",dataKey:"CO2",stroke:"#8884d8"}),l.a.createElement(j.a,{stroke:"#ccc"}),l.a.createElement(j.e,{dataKey:"time"}),l.a.createElement(j.f,null),l.a.createElement(j.d,null)))),l.a.createElement(S.a,{item:!0,md:5},l.a.createElement(F.a,{className:t.tableContainer},l.a.createElement(z.a,{stickyHeader:!0},l.a.createElement(A.a,null,l.a.createElement(D.a,null,l.a.createElement(G.a,null,"Time"),l.a.createElement(G.a,null,"CO2 (Parts per million)"))),l.a.createElement(P.a,null,a.map((function(e){return l.a.createElement(D.a,null,l.a.createElement(G.a,null,e.time),l.a.createElement(G.a,null,e.CO2))})))))))))}var V=Object(O.a)((function(e){return{tableContainer:{display:"flex"},tableStyle:{flex:2}}}));function H(e){var a=e.data,t=V();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Humidity Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement(x,{className:t.tableStyle,data:a,dataKey:"humidity"})),l.a.createElement(S.a,{item:!0,md:5},"weewoo"))))}var L=Object(O.a)((function(e){return{tableContainer:{display:"flex"},tableStyle:{flex:2}}}));function R(e){var a=e.data,t=L();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Pressure Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement(x,{className:t.tableStyle,data:a,dataKey:"pressure"})),l.a.createElement(S.a,{item:!0,md:5},"weewoo"))))}var U=Object(O.a)((function(e){return{tableContainer:{display:"flex"},tableStyle:{flex:2}}}));function J(e){var a=e.data,t=U();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"TVOC Graph"),l.a.createElement(w.a,null,l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:7},l.a.createElement(x,{className:t.tableStyle,data:a,dataKey:"TVOC"})),l.a.createElement(S.a,{item:!0,md:5},"weewoo"))))}var W=Object(O.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"85%",height:"85%",top:"5%",left:"5%",overflowY:"auto"},tableContainer:{display:"flex"},tableStyle:{flex:2},root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function Y(e){var a=e.children,t=e.value,n=e.index,r=Object(u.a)(e,["children","value","index"]);return l.a.createElement(p.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},r),t===n&&l.a.createElement(f.a,{p:3},a))}function X(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}function q(e){var a=e.data,t=W(),r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],m=c[1],u=Object(n.useState)(0),s=Object(i.a)(u,2),b=s[0],p=s[1],f=Object(n.useState)([]),O=Object(i.a)(f,2),j=O[0],C=O[1],x=Object(n.useState)([]),w=Object(i.a)(x,2),S=w[0],k=w[1],K=Object(n.useState)([]),F=Object(i.a)(K,2),z=F[0],A=F[1],D=Object(n.useState)([]),G=Object(i.a)(D,2),P=G[0],B=G[1],V=Object(n.useState)([]),L=Object(i.a)(V,2),U=L[0],q=L[1],$=Object(n.useState)([]),_=Object(i.a)($,2),M=_[0],Q=_[1];Object(n.useEffect)((function(){if(a[0]){var e=a[0].Time,t=a.map((function(a){return{altitude:a.Altitude,time:a.Time-e}}));C(t);var n=a.map((function(a){return{CO2:a.CO2,time:a.Time-e}}));k(n);var l=a.map((function(a){return{humidity:a.Humidity,time:a.Time-e}}));A(l);var r=a.map((function(a){return{pressure:a.Pressure,time:a.Time-e}}));B(r);var c=a.map((function(a){return{TVOC:a.TVOC,time:a.Time-e}}));q(c);var i=a.map((function(a){return{temperature:a.Temperature,time:a.Time-e}}));Q(i)}}),[a]);var Z=Object(n.useState)(0),ee=Object(i.a)(Z,2),ae=ee[0];ee[1];return l.a.createElement("div",null,l.a.createElement(E.a,{style:{transform:"rotate(".concat(ae,"deg)")}}),l.a.createElement(d.a,{style:{fontSize:50},color:"secondary",onClick:function(){m(!0)}}),l.a.createElement(h.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:o,onClose:function(){m(!1)}},l.a.createElement("div",{className:t.paper},l.a.createElement("h2",null,"Beacon 123"),l.a.createElement("div",{className:t.root},l.a.createElement(g.a,{position:"static",color:"default"},l.a.createElement(y.a,{value:b,onChange:function(e,a){p(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},l.a.createElement(v.a,Object.assign({label:"Altitude"},X(0))),l.a.createElement(v.a,Object.assign({label:"CO2"},X(1))),l.a.createElement(v.a,Object.assign({label:"Humidity"},X(2))),l.a.createElement(v.a,Object.assign({label:"Pressure"},X(3))),l.a.createElement(v.a,Object.assign({label:"TVOC"},X(4))),l.a.createElement(v.a,Object.assign({label:"Temperature"},X(5))))),l.a.createElement(Y,{value:b,index:0},l.a.createElement(N,{data:j})),l.a.createElement(Y,{value:b,index:1},l.a.createElement(I,{data:S})),l.a.createElement(Y,{value:b,index:2},l.a.createElement(H,{data:z})),l.a.createElement(Y,{value:b,index:3},l.a.createElement(R,{data:P})),l.a.createElement(Y,{value:b,index:4},l.a.createElement(J,{data:U})),l.a.createElement(Y,{value:b,index:5},l.a.createElement(T,{data:M}))))))}var $=t(89),_=t.n($);_.a.initializeApp({apiKey:"AIzaSyCxkOPS5DqnXak4ecDbuPrNKJ-fK4Xc868",authDomain:"hacktech2020-88888.firebaseapp.com",databaseURL:"https://hacktech2020-88888.firebaseio.com",projectId:"hacktech2020-88888",storageBucket:"hacktech2020-88888.appspot.com",messagingSenderId:"562008011322",appId:"1:562008011322:web:ff933e53757c12fd84fb03"});_.a.database();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){_.a.database().ref("Data").on("value",(function(e){var a=e.val();r(a)}))}),[]),l.a.createElement("div",{style:{position:"absolute",top:"10%",left:"5%",height:"80%",width:"90%"}},l.a.createElement(m.a,{bootstrapURLKeys:{key:"AIzaSyBWSzeSPr_5zD53xEs0CU0UTOVYsOb6FvA"},defaultCenter:{lat:59.95,lng:30.33},options:{scrollwheel:!1},heatmapLibrary:!0,heatmap:{positions:[{lat:59.95,lng:30.33,weight:2},{lat:60,lng:30.5,weight:1}],options:{radius:300,opacity:.6}},zoom:11},l.a.createElement(q,{lat:59.95,lng:30.33,data:Object.values(t)})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[229,1,2]]]);
//# sourceMappingURL=main.c344e57c.chunk.js.map