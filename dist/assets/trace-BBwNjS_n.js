import{q as i,s as g,u as y,U as u}from"./index-BfC8i6jT.js";import{a as l}from"./UtilityNetwork--bZaYIGn.js";async function d(a,e,o){const t=i(a),r=e.toJSON();r.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(r.resultTypes=JSON.stringify(e.resultTypes));const n=g(t.query,{query:y({...r,f:"json"}),...o}),s=`${t.path}/trace`;return u(s,n).then(c=>p(c,e.outSpatialReference))}async function J(a,e,o){const t=i(a),r=e.toJSON();r.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(r.resultTypes=JSON.stringify(e.resultTypes));const n=g(t.query,{query:y({...r,async:!0,f:"json"}),...o}),s=`${t.path}/trace`,{data:c}=await u(s,n);return c.statusUrl}function p(a,e){const{data:o}=a,t=l.fromJSON(o.traceResults);return t.aggregatedGeometry&&e&&(t.aggregatedGeometry.line&&(t.aggregatedGeometry.line.spatialReference=e.clone()),t.aggregatedGeometry.multipoint&&(t.aggregatedGeometry.multipoint.spatialReference=e.clone()),t.aggregatedGeometry.polygon&&(t.aggregatedGeometry.polygon.spatialReference=e.clone())),t}export{J as submitTraceJob,d as trace};
