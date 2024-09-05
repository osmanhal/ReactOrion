import{bZ as g,b_ as k,ag as w,b$ as D,c0 as z,J as O,ah as G,c1 as S,c2 as _,c3 as F,aj as I,c4 as y}from"./index-BfC8i6jT.js";import{Z as P,N as E}from"./utils-DcLVAL7v.js";const Q="esri.widgets.Feature.support.featureUtils",h=()=>O.getLogger(Q),H=/href=(""|'')/gi,J=/(\{([^{\r\n]+)\})/g,B=/'/g,j=/^\s*expression\//i,K=/(\n)/gi,V=/[\u00A0-\u9999<>&]/gim,W=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,X=/^(?:mailto:|tel:)/,v="relationships/",N=G("short-date-short-time");function Ne(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function Ze({type:e,value:t,event:n}){try{return typeof t=="function"?t(n):t}catch(r){return void h().error("error",`An error occurred when calling the "${e}" function`,{error:r,graphic:n.graphic,value:t})}}function $e(e=""){if(e)return!X.test(e.trim().toLowerCase())}function Y(e){return!!e&&j.test(e)}function ee(e,t){if(!t||!Y(t)||!e)return;const n=t.replace(j,"").toLowerCase();return e.find(({name:r})=>r.toLowerCase()===n)}function Le(e,t){const n=ee(t,e==null?void 0:e.fieldName);return n?n.title||null:e?e.label||e.fieldName:null}function te(e,t){const n=t.get(e.toLowerCase());return`{${(n==null?void 0:n.fieldName)||e}}`}function ne(e){return e.replaceAll(H,"")}function x(e,t){const n=T(t,e);return n?n.name:e}function Ee(e,t){return e&&e.map(n=>x(n,t))}function T(e,t){return e&&typeof e.getField=="function"&&t?e.getField(t)??null:null}function A(e){return`${e}`.trim()}function je({attributes:e,globalAttributes:t,layer:n,text:r,expressionAttributes:i,fieldInfoMap:a}){return r?re({formattedAttributes:t,template:ue(r,{...t,...i,...e},n),fieldInfoMap:a}):""}function re({formattedAttributes:e,template:t,fieldInfoMap:n}){return A(ne(g(g(t,r=>te(r,n)),e)))}function ie(e,t,n=!1){const r=t[e];if(typeof r=="string"){const i="%27",a=(n?encodeURIComponent(r):r).replaceAll(B,i);t[e]=a}}function ae(e,t=!1){const n={...e};return Object.keys(n).forEach(r=>ie(r,n,t)),n}function oe(e,t,n){const r=(t=A(t))&&t[0]!=="{";return g(e,ae(n,r||!1))}function le(e,t){return e.replaceAll(J,(n,r,i)=>{const a=T(t,i);return a?`{${a.name}}`:r})}function ue(e,t,n){const r=le(e,n);return r&&r.replaceAll(W,(i,a,o)=>oe(i,a||o,t))}function se(e,t){if(typeof e=="string"&&t&&t.dateFormat==null&&(t.places!=null||t.digitSeparator!=null)){const n=Number(e);if(!isNaN(n))return n}return e}function fe(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene"||e.type==="sublayer")&&"when"in e}function ce(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function C(e){return fe(e)&&ce(e)}function ve(e){return!!e&&typeof e=="object"&&"sourceLayer"in e&&C(e.sourceLayer)}function de(e,t){var d;const{fieldInfos:n,fieldName:r,preventPlacesFormatting:i,layer:a,timeZone:o}=t,u=ye(n,r),l=T(a,r);if(u&&!F(r)){const f=l==null?void 0:l.type,c=(d=u.format)==null?void 0:d.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||c)return E(e,{format:c,fieldType:f,timeZoneOptions:{layerTimeZone:a&&"preferredTimeZone"in a?a.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!a||!("datesInUnknownTimezone"in a))&&!!a.datesInUnknownTimezone}})}const s=u==null?void 0:u.format;return typeof e=="string"&&F(r)&&s?pe(e,s):typeof(e=se(e,s))=="string"||e==null||s==null?q(e):I(e,i?{...y(s),minimumFractionDigits:0,maximumFractionDigits:20}:y(s))}function pe(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?b(e,",",", ",t):e.includes(";")?b(e,";","; ",t):e.includes(" ")?b(e," "," ",t):I(Number(e),y(t))}function b(e,t,n,r){return e.trim().split(t).map(i=>I(Number(i),y(r))).join(n)}function ye(e,t){if(e!=null&&e.length&&t)return e.find(n=>{var r;return((r=n.fieldName)==null?void 0:r.toLowerCase())===t.toLowerCase()})}function me({fieldName:e,graphic:t,layer:n}){if(R(e)||!n||typeof n.getFeatureType!="function")return null;const{typeIdField:r}=n;if(!r||e!==r)return null;const i=n.getFeatureType(t);return i?i.name:null}function be({fieldName:e,value:t,graphic:n,layer:r}){if(R(e)||!r||typeof r.getFieldDomain!="function")return null;const i=n&&r.getFieldDomain(e,{feature:n});return i&&i.type==="coded-value"?i.getName(t):null}function xe(e,t,n,r){const{creatorField:i,creationDateField:a,editorField:o,editDateField:u}=e;if(!t)return;const l=k(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r))&&!!r.datesInUnknownTimezone,n,N,"date"),s={...N,...l},d=t[u];if(typeof d=="number"){const c=t[o];return{type:"edit",date:w(d,s),user:c}}const f=t[a];if(typeof f=="number"){const c=t[i];return{type:"create",date:w(f,s),user:c}}return null}function Ae(e,t){const n=new Map;if(!e)return n;for(const r of e){if(!r.fieldName)continue;const i=x(r.fieldName,t);r.fieldName=i,n.set(i.toLowerCase(),r)}return n}function Ce(e){const t=[];if(!e)return t;const{fieldInfos:n,content:r}=e;return n&&t.push(...n),r&&Array.isArray(r)&&r.forEach(i=>{if(i.type==="fields"){const a=i==null?void 0:i.fieldInfos;a&&t.push(...a)}}),t}function qe(e){return e.replaceAll(V,t=>`&#${t.charCodeAt(0)};`)}function q(e){return typeof e=="string"?e.replaceAll(K,'<br class="esri-text-new-line" />'):e}function M(e){var f;const{value:t,fieldName:n,fieldInfos:r,fieldInfoMap:i,layer:a,graphic:o,timeZone:u}=e;if(t==null)return"";const l=be({fieldName:n,value:t,graphic:o,layer:a});if(l)return l;const s=me({fieldName:n,graphic:o,layer:a});if(s)return s;if(i.get(n.toLowerCase()))return de(t,{fieldInfos:r||Array.from(i.values()),fieldName:n,layer:a,timeZone:u});const d=(f=a==null?void 0:a.fieldsIndex)==null?void 0:f.get(n);return d&&(P(d)||S(d))?E(t,{fieldType:d.type,timeZoneOptions:{layerTimeZone:a&&"preferredTimeZone"in a?a.preferredTimeZone:null,viewTimeZone:u,datesInUnknownTimezone:!(!a||!("datesInUnknownTimezone"in a))&&!!a.datesInUnknownTimezone}}):q(t)}function Me({fieldInfos:e,attributes:t,layer:n,graphic:r,fieldInfoMap:i,relatedInfos:a,timeZone:o}){const u={};return a==null||a.forEach(l=>Te({attributes:u,relatedInfo:l,fieldInfoMap:i,fieldInfos:e,layer:n,timeZone:o})),t&&Object.keys(t).forEach(l=>{const s=t[l];u[l]=M({fieldName:l,fieldInfos:e,fieldInfoMap:i,layer:n,value:s,graphic:r,timeZone:o})}),u}async function ge(e,t){var d,f;const{layer:n,graphic:r,outFields:i,objectIds:a,returnGeometry:o,spatialReference:u}=e,l=a[0];if(typeof l!="number"&&typeof l!="string"){const c="Could not query required fields for the specified feature. The feature's ID is invalid.",m={layer:n,graphic:r,objectId:l,requiredFields:i};return h().warn(c,m),null}if(!((f=(d=D(n))==null?void 0:d.operations)!=null&&f.supportsQuery)){const c="The specified layer cannot be queried. The following fields will not be available.",m={layer:n,graphic:r,requiredFields:i,returnGeometry:o};return h().warn(c,m),null}const s=n.createQuery();return s.objectIds=a,s.outFields=i!=null&&i.length?i:[n.objectIdField],s.returnGeometry=!!o,s.returnZ=!!o,s.returnM=!!o,s.outSpatialReference=u,(await n.queryFeatures(s,t)).features[0]}async function he(e){var r;if(!((r=e.expressionInfos)!=null&&r.length))return!1;const t=await _(),{arcadeUtils:{hasGeometryFunctions:n}}=t;return n(e)}async function Re({graphic:e,popupTemplate:t,layer:n,spatialReference:r},i){if(!n||!t||(typeof n.load=="function"&&await n.load(i),!e.attributes))return;const a=n.objectIdField,o=e.attributes[a];if(o==null)return;const u=[o],l=await t.getRequiredFields(n.fieldsIndex),s=z(l,e),d=s?[]:l.includes(a)?l:[...l,a],f=t.returnGeometry||await he(t);if(s&&!f)return;const c=await ge({layer:n,graphic:e,outFields:d,objectIds:u,returnGeometry:f,spatialReference:r},i);c&&(c.geometry&&(e.geometry=c.geometry),c.attributes&&(e.attributes={...e.attributes,...c.attributes}))}function R(e=""){return!!e&&e.includes(v)}function Ie(e){return e?`${v}${e.layerId}/${e.fieldName}`:""}function Z({attributes:e,graphic:t,relatedInfo:n,fieldInfos:r,fieldInfoMap:i,layer:a,timeZone:o}){e&&t&&n&&Object.keys(t.attributes).forEach(u=>{const l=Ie({layerId:n.relation.id.toString(),fieldName:u}),s=t.attributes[u];e[l]=M({fieldName:l,fieldInfos:r,fieldInfoMap:i,layer:a,value:s,graphic:t,timeZone:o})})}function Te({attributes:e,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a}){var o,u;e&&t&&((o=t.relatedFeatures)==null||o.forEach(l=>Z({attributes:e,graphic:l,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a})),(u=t.relatedStatsFeatures)==null||u.forEach(l=>Z({attributes:e,graphic:l,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a})))}const $=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},U=({layer:e,method:t,query:n,definitionExpression:r})=>{var o,u;if(!((u=(o=e.capabilities)==null?void 0:o.query)!=null&&u.supportsCacheHint)||t==="attachments")return;const i=n.where!=null?n.where:null,a=n.geometry!=null?n.geometry:null;$(r)||$(i)||(a==null?void 0:a.type)==="extent"||n.resultType==="tile"||(n.cacheHint=!0)},Ue=({query:e,layer:t,method:n})=>{U({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},ke=({queryPayload:e,layer:t,method:n})=>{U({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function De(e,t,n){var r,i;return e&&t&&n?t.type==="sublayer"?p({layers:(r=t.layer)==null?void 0:r.sublayers,map:e,relatedLayer:t,relationship:n})||p({layers:(i=t.layer)==null?void 0:i.subtables,map:e,relatedLayer:t,relationship:n}):p({layers:e.allLayers,map:e,relatedLayer:t,relationship:n})||p({layers:e.allTables,map:e,relatedLayer:t,relationship:n}):null}function L(e,t){return e==null?void 0:e.allTables.find(n=>{var r;return n.type==="feature"&&n.layerId===t.id&&n.url===((r=t.layer)==null?void 0:r.url)})}function p({map:e,relationship:t,relationship:{relatedTableId:n},relatedLayer:r,layers:i}){var a;if(!i)return null;for(const o of i){if(o.type==="map-image"){const l=p({layers:o.sublayers,map:e,relatedLayer:r,relationship:t})||p({layers:o.subtables,map:e,relatedLayer:r,relationship:t});if(l)return l;continue}if(!C(o))continue;if(r.type==="sublayer"){if(o!==r&&o.id===n)return o.isTable?L(e,o):o;continue}const u=r.type==="scene"&&r.associatedLayer?r.associatedLayer.url:r.url;if(!u)return null;if(o.type!=="sublayer"){if(o!==r&&o.url===u&&o.layerId===n)return o}else if(o!==r&&((a=o.layer)==null?void 0:a.url)===u&&o.id===n)return o.isTable?L(e,o):o}return null}function ze(e){const t=e.getObjectId();return t!=null?`oid:${t}`:`uid:${e.uid}`}export{Le as C,je as D,Ze as E,ke as I,C as J,ve as K,Ne as L,ze as N,le as P,Ee as R,De as T,ye as Y,q as a,Ue as b,Re as c,R as d,Ce as i,xe as n,qe as o,x as q,Ae as r,ge as s,Me as u,$e as v,Y as x,re as z};
