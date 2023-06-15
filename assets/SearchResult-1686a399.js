import{u as I,f as M,g as O,h as E,i as V,v as W,j as J,k as w,l as H,m as K,n as P,p as t,R as A,q as N,s as T,x as X,y as Y,z as Z,A as _,B as ee,C as te,L as se,H as ae,D as le,E as ue,F as re,G as q}from"./app-741565c8.js";const ne="search-pro-result-history",o=I(ne,[]),oe=()=>{const{resultHistoryCount:u}=q,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},ce=u=>{const c=E(),l=w(!1),h=ee([]);let i;const v=ue(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${q.worker}`,{}),i.addEventListener("message",({data:g})=>{h.value=g,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},q.delay);return P([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=M({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=te(),h=O(),i=E(),v=V(W),{addQueryHistory:d}=se(),{enabled:g,resultHistory:L,addResultHistory:C,removeResultHistory:Q}=oe(),f=J(u,"query"),{results:y,searching:j}=ce(f),r=w(0),a=w(0),D=H(()=>L.value.length>0),R=H(()=>y.value.length>0),$=H(()=>y.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:y.value.length-1,a.value=$.value.contents.length-1},U=()=>{r.value=r.value<y.value.length-1?r.value+1:0,a.value=0},z=()=>{a.value<$.value.contents.length-1?a.value=a.value+1:U()},B=()=>{a.value>0?a.value=a.value-1:F()},b=e=>e.map(s=>re(s)?s:t(s[0],s[1])),S=e=>{if(e.type==="custom"){const s=ae[e.index]||"$content",[p,m=""]=le(s)?s[i.value].split("$content"):s.split("$content");return b([p,...e.display,m])}return b(e.display)},k=()=>{r.value=0,a.value=0,c("updateQuery",""),c("close")};return K("keydown",e=>{if(R.value){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const s=$.value.contents[a.value];l.value.path!==s.path&&(d(u.query),C(s),h.push(s.path),k())}}}),P([r,a],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!D.value}],id:"search-pro-results"},f.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),L.value.map((e,s)=>t(A,{to:e.path,class:["search-pro-result-item",{active:a.value===s}],onClick:()=>{k()}},()=>[t(N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),Q(s)}},t(T))]))])):g?v.value.emptyHistory:v.value.emptyResult:j.value?t(X,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((n,G)=>{const x=m&&a.value===G;return t(A,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{d(u.query),C(n),k()}},()=>[n.type==="content"?null:t(n.type==="title"?Y:n.type==="heading"?Z:_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
