import{A as c,h3 as u,h4 as a,aZ as p}from"./index-BfC8i6jT.js";function d(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function h(e,r){if(e==null)return null;if(!d(e))return new c("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return y(e,r);case"unique-value":return f(e,r);case"class-breaks":return m(e,r);case"dictionary":case"heatmap":return null}return null}function i(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){const s=n.map(t=>t.details.symbol.type||t.details.symbol.declaredClass).filter(t=>!!t);s.sort();const l=[];return s.forEach((t,o)=>{o!==0&&t===s[o-1]||l.push(t)}),new c("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${l.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function y(e,r){const n={...u,...r,cimFallbackEnabled:!0};return i(e,a(e.symbol,n).error)}function f(e,r){var t;const n={...u,...r,cimFallbackEnabled:!0},s=(t=e.uniqueValueInfos)==null?void 0:t.map(o=>a(o.symbol,n).error).filter(p),l=a(e.defaultSymbol,n);return l.error&&(s==null||s.unshift(l.error)),i(e,s)}function m(e,r){const n={...u,...r,cimFallbackEnabled:!0},s=e.classBreakInfos.map(t=>a(t.symbol,n).error).filter(p),l=a(e.defaultSymbol,n);return l.error&&s.unshift(l.error),i(e,s)}export{h as s,d as t};
