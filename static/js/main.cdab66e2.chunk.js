(this.webpackJsonpinstgramreels=this.webpackJsonpinstgramreels||[]).push([[0],{48:function(e,a,t){e.exports=t(73)},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(53),t(26)),s=(t(54),t(55),t(56),t(33)),i=t.n(s),m=t(38),u=t.n(m);function d(){return r.a.createElement("div",{className:"videoHeader"},r.a.createElement(i.a,null),r.a.createElement("h3",null,"Reels"),r.a.createElement(u.a,null))}t(62);var v=t(89),p=t(88),E=t(40),f=t.n(E),g=t(39),h=t(28),b=t.n(h),N=t(41),S=t.n(N),k=t(42),_=t.n(k),F=t(43),w=t.n(F),z=t(44),j=t.n(z);function I(e){var a=e.channel,t=e.avatarSrc,n=e.song,l=e.likes,c=e.shares;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter_text"},r.a.createElement(v.a,{src:t}),r.a.createElement("h3",null,a," . ",r.a.createElement(p.a,null," follow"))),r.a.createElement("div",{className:"videoFooter_ticker"},r.a.createElement(f.a,{className:"videoFooter_icon"}),r.a.createElement(g.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n))}))),r.a.createElement("div",{className:"videoFooter_actions"},r.a.createElement("div",{className:"videoFooter_actions_left"},r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement(S.a,{fontSize:"large"}),r.a.createElement(_.a,{fontSize:"large"}),r.a.createElement(w.a,{fontSize:"large"})),r.a.createElement("div",{className:"videoFooter_actions_right"},r.a.createElement("div",{className:"videoFooter_stat"},r.a.createElement(b.a,null),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"videoFooter_stat"},r.a.createElement(j.a,null),r.a.createElement("p",null,c)))))}function O(e){var a=e.channel,t=e.avatarSrc,l=e.song,c=e.url,s=e.likes,i=e.shares,m=Object(n.useState)(!1),u=Object(o.a)(m,2),v=u[0],p=u[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"videoCard"},r.a.createElement(d,null),r.a.createElement("video",{className:"video_player",ref:E,onClick:function(){v?(E.current.pause(),p(!1)):(E.current.play(),p(!0))},src:c,alt:"IG Reel Video",loop:!0}),r.a.createElement(I,{channel:a,avatarSrc:t,song:l,likes:s,shares:i}))}var y=t(45),R=t.n(y).a.initializeApp({apiKey:"AIzaSyCzAugumsGd3Drf2NRO-WT5Vsk7YJzNDz8",authDomain:"instareels-a39bf.firebaseapp.com",databaseURL:"https://instareels-a39bf.firebaseio.com",projectId:"instareels-a39bf",storageBucket:"instareels-a39bf.appspot.com",messagingSenderId:"332046456912",appId:"1:332046456912:web:f5c303ed6f49d15dcc5955",measurementId:"G-MFV6HE19NS"}).firestore();var x=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){R.collection("reels").onSnapshot((function(e){l(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_top"},r.a.createElement("img",{className:"app_logo",src:"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/instalogo.png?alt=media&token=2e9b19ed-2e2c-462b-9d7b-5e8b418d6912",alt:"logo"}),r.a.createElement("h1",null,"Reels")),r.a.createElement("div",{className:"app_videos"},t.map((function(e){var a=e.channel,t=e.avatarSrc,n=e.song,l=e.url,c=e.likes,o=e.shares;return r.a.createElement(O,{channel:a,avatarSrc:t,song:n,url:l,likes:c,shares:o})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.cdab66e2.chunk.js.map