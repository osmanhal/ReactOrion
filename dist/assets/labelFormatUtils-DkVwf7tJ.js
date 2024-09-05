import{ae as w,af as g,ag as h,ah as v,ai as y,aj as b,ak as x,al as $,am as E,A as f,J as A,an as F}from"./index-BfC8i6jT.js";const p=()=>A.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},j={getAttribute:(r,t)=>r.field(t)};async function Z(r,t,c){if(!r||!r.symbol||!t)return d;const s=r.where,o=x(r);let a;if(o.type==="arcade"){const e=await $(o.expression,c,t);if(e==null)return d;a={type:"arcade",evaluate(u,n){try{const l="attributes"in u?e.repurposeFeature(u):u;l.contextTimeZone=n??null;const i=e.evaluate({$view:{timeZone:n},$feature:l},e.services);if(i!=null)return i.toString()}catch(l){p().error(new f("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:l,feature:u,expression:o}))}return null},needsHydrationToEvaluate:()=>F(o.expression)==null}}else a={type:"simple",evaluate:e=>o.expression.replaceAll(/{[^}]*}/g,u=>{const n=u.slice(1,-1),l=t.get(n);if(!l)return u;let i=null;return"attributes"in e?e&&e.attributes&&(i=e.attributes[l.name]):i=e.field(l.name),i==null?"":T(i,l)})};if(s){let e;try{e=await E(s,t)}catch(n){return p().error(new f("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:s,error:n})),d}const u=a.evaluate;a.evaluate=(n,l)=>{const i="attributes"in n?void 0:j;try{if(e.testFeature(n,i))return u(n,l)}catch(m){p().error(new f("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:s,feature:n,error:m}))}return null}}return a}function T(r,t){if(r==null)return"";const c=t.domain;if(c){if(c.type==="codedValue"||c.type==="coded-value"){const o=r;for(const a of c.codedValues)if(a.code===o)return a.name}else if(c.type==="range"){const{max:o,min:a}=w(t),e=+r;if(a!=null&&o!=null&&a<=e&&e<=o)return c.name}}let s=r;return g(t)?s=h(s,v("short-date")):y(t)&&(s=b(+s)),s||""}export{T as g,Z as w};
