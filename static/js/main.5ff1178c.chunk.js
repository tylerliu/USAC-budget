(this.webpackJsonpbudget_wc=this.webpackJsonpbudget_wc||[]).push([[0],{77:function(t,e,a){t.exports=a(99)},82:function(t,e,a){},83:function(t,e,a){},93:function(t,e){},99:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),c=(a(82),a(83),a(12)),l=a(13),s=a(24),u=a(20),d=a(19),h=(a(56),a(121)),f=a(71),b=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).callbacks={getWordTooltip:function(t){return"".concat(t.text," has $").concat(Math.round(100*t.value)/100," in the category.")},onWordClick:n.getCallback("onWordClick").bind(Object(s.a)(n)),onWordMouseOut:n.getCallback("onWordMouseOut").bind(Object(s.a)(n)),onWordMouseOver:n.getCallback("onWordMouseOver").bind(Object(s.a)(n))},n.options={fontFamily:"impact",fontSizes:[5,60],fontStyle:"normal",fontWeight:"normal",scale:"log",deterministic:!0,rotations:4,rotationAngles:[-45,90],transitionDuration:200},n.state={words:[{text:"Loading...",value:100}]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.dataLoader.addWordsCallback(this.setWords.bind(this))}},{key:"render",value:function(){return r.a.createElement(f.a,{style:this.props.style,callbacks:this.callbacks,words:this.state.words,options:this.options})}},{key:"getCallback",value:function(t){return function(e,a){var n=this,r="onWordMouseOut"!==t,o=a.target;Object(h.a)(o).on("click",(function(){r&&n.props.keywordList.addWord(e.text)})).transition().attr("background","white").attr("text-decoration",r?"underline":"none")}}},{key:"setWords",value:function(t){this.setState({words:t})}}]),a}(n.Component),m=a(100),p=a(122),k=a(123),v=a(124),y=a(125),g=a(126),O=a(127),E=a(128),j=a(134),w=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={records:[],order:"asc",orderBy:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.dataLoader.addRecordCallback(this.setRecords.bind(this))}},{key:"setRecords",value:function(t){this.setState({records:t,order:"asc",orderBy:null})}},{key:"handleRequestSort",value:function(t,e){var a=this.state.orderBy===e&&"asc"===this.state.order,n=this.state.orderBy===e&&"desc"===this.state.order;this.setState({order:a?"desc":"asc",orderBy:n?null:e})}},{key:"render",value:function(){return r.a.createElement(m.a,{style:this.props.style},r.a.createElement(p.a,{style:{height:"100%"}},r.a.createElement(k.a,{stickyHeader:!0,size:"small","aria-label":"Transaction Records"},r.a.createElement(W,{order:this.state.order,orderBy:this.state.orderBy,onRequestSort:this.handleRequestSort.bind(this)}),r.a.createElement(v.a,null,this.stableSort(this.state.records).map((function(t,e){return r.a.createElement(y.a,{key:e},r.a.createElement(g.a,null,new Date(1e3*t.date).toDateString()),r.a.createElement(g.a,null,t.department),r.a.createElement(g.a,null,t.description),r.a.createElement(g.a,null,t.amount))}))),r.a.createElement(O.a,{style:{position:"sticky",bottom:0,backgroundColor:"#fafafa",borderTop:1,borderTopColor:"#e0e0e0"}},r.a.createElement(y.a,null,r.a.createElement(g.a,null),r.a.createElement(g.a,null),r.a.createElement(g.a,{align:"right"},"Total: "),r.a.createElement(g.a,null,Math.round(100*this.state.records.reduce((function(t,e){return t+e.amount}),0))/100))))))}},{key:"getComparator",value:function(){var t=this,e=function(t,e,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0};return null===this.state.orderBy?null:"asc"===this.state.order?function(a,n){return e(a,n,t.state.orderBy)}:function(a,n){return-e(a,n,t.state.orderBy)}}},{key:"stableSort",value:function(t){var e=this.getComparator();if(null===e)return t;var a=t.map((function(t,e){return[t,e]}));return a.sort((function(t,a){var n=e(t[0],a[0]);return 0!==n?n:t[1]-a[1]})),a.map((function(t){return t[0]}))}}]),a}(n.Component),C=[{id:"date",label:"Date"},{id:"department",label:"Department"},{id:"description",label:"Description"},{id:"amount",label:"Amount"}],W=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"createSortHandler",value:function(t){var e=this;return function(a){return e.props.onRequestSort(a,t)}}},{key:"render",value:function(){var t=this;return r.a.createElement(E.a,null,r.a.createElement(y.a,null,C.map((function(e){return r.a.createElement(g.a,{key:e.id,sortDirection:t.props.orderBy===e.id&&t.props.order},r.a.createElement(j.a,{active:t.props.orderBy===e.id,direction:t.props.orderBy===e.id?t.props.order:"asc",onClick:t.createSortHandler(e.id)},e.label))}))))}}]),a}(n.Component),L=a(133),S=a(101),B=a(129),R=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).props.keywordList.addChangeCallback((function(){return n.reRender()})),n.state={tick:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e=this.props.keywordList.getList();return r.a.createElement(L.a,{separator:"-",style:this.props.style},r.a.createElement(B.a,{color:"textPrimary",onClick:function(){return t.props.keywordList.reset()}},"Transactions"),e.slice(0,-1).map((function(e){return r.a.createElement(B.a,{color:"textSecondary",onClick:function(){return t.props.keywordList.sliceWord(e)}},e)})),e.length>0?r.a.createElement(S.a,{color:"textPrimary"},e[e.length-1]):null)}},{key:"reRender",value:function(){this.setState({tick:this.state.tick+1})}}]),a}(n.Component),x=function(){function t(){Object(c.a)(this,t),this.list=[],this.callback=[]}return Object(l.a)(t,[{key:"addChangeCallback",value:function(t){this.callback.push(t)}},{key:"addWord",value:function(t){var e=this;this.list.includes(t)||(this.list.push(t),this.callback.forEach((function(t){return t(e.list)})))}},{key:"sliceWord",value:function(t){var e=this,a=this.list.indexOf(t);-1!==a&&(this.list=this.list.slice(0,a+1),this.callback.forEach((function(t){return t(e.list)})))}},{key:"reset",value:function(){var t=this;this.list=[],this.callback.forEach((function(e){return e(t.list)}))}},{key:"getList",value:function(){return this.list}}]),t}(),M=a(10),D=a(32),P=function(){function t(e,a){var n=this;Object(c.a)(this,t),Object.defineProperty(this,T,{writable:!0,value:null}),Object.defineProperty(this,_,{writable:!0,value:[]}),Object.defineProperty(this,q,{writable:!0,value:[]}),Object.defineProperty(this,A,{writable:!0,value:void 0}),fetch(e).then((function(t){return t.json()})).then((function(t){Object(M.a)(n,T)[T]=t,n.listChangeCallback()})),Object(M.a)(this,A)[A]=a,a.addChangeCallback((function(){return n.listChangeCallback()}))}return Object(l.a)(t,[{key:"listChangeCallback",value:function(){var t=this.getRecords(Object(M.a)(this,A)[A].getList());Object(M.a)(this,_)[_].forEach((function(e){return e(t)}));var e=this.getWordList(t);Object(M.a)(this,q)[q].forEach((function(t){return t(e)}))}},{key:"addRecordCallback",value:function(t){Object(M.a)(this,_)[_].push(t)}},{key:"addWordsCallback",value:function(t){Object(M.a)(this,q)[q].push(t)}},{key:"getRecords",value:function(t){return null===Object(M.a)(this,T)[T]?[{date:"",department:"",description:"Loading...",amount:""}]:null===t||t===[]?Object(M.a)(this,T)[T]:Object(M.a)(this,T)[T].filter((function(e){return t.map((function(t){return e.words.includes(t)})).reduce((function(t,e){return t&&e}),!0)}))}},{key:"getWordList",value:function(t){if(null===Object(M.a)(this,T)[T])return[{text:"Loading...",value:100}];var e={};t.forEach((function(t){t.words.forEach((function(a){void 0===e[a]?e[a]=t.amount:e[a]+=t.amount}))}));var a=[];for(var n in e)a.push({text:n,value:e[n]});return a.sort((function(t,e){return t.value-e.value})),a}}]),t}(),T=Object(D.a)("data"),_=Object(D.a)("records_callbacks"),q=Object(D.a)("words_callbacks"),A=Object(D.a)("keywordList"),H=a(130),z=a(131),J=a(132),$=a(70),F=a.n($);function I(){return r.a.createElement(H.a,{position:"sticky"},r.a.createElement(z.a,null,r.a.createElement(J.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(F.a,null)),r.a.createElement(S.a,{variant:"h6"},"USAC Budget/Spendings 2018-2019")))}var N=function(){var t=new x,e=new P("/expense_summary.json",t);return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(m.a,{variant:"outlined",className:"App",style:{margin:"0 10%"}},r.a.createElement(R,{style:{margin:10},keywordList:t}),r.a.createElement(b,{style:{width:"100%",height:"80vh"},keywordList:t,dataLoader:e}),r.a.createElement(w,{style:{height:"80vh"},dataLoader:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.5ff1178c.chunk.js.map