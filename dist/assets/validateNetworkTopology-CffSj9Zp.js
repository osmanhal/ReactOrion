import{q as p,u as v,s as y,U as m,A as g}from"./index-BfC8i6jT.js";import{b as S}from"./UtilityNetwork--bZaYIGn.js";async function b(e,t,s){var l;const o=p(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n={...i,returnEdits:!0,f:"json"},r=v({...o.query,...n}),a=y(r,{...s,method:"post"}),c=`${o.path}/validateNetworkTopology`,{data:f}=await m(c,a),d=S.fromJSON(f);return d.serviceEdits=((l=d.serviceEdits)==null?void 0:l.map(u=>({layerId:u.id,editedFeatures:u.editedFeatures})))??[],d}async function J(e,t,s){if(!t.gdbVersion)throw new g("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=p(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n=y(o.query,{query:v({...i,returnEdits:!0,async:!0,f:"json"}),...s,method:"post"}),r=`${o.path}/validateNetworkTopology`,{data:a}=await m(r,n);return a?a.statusUrl:null}export{J as submitValidateNetworkTopologyJob,b as validateNetworkTopology};
