import{gL as n,J as m,iA as c,iB as f}from"./index-BfC8i6jT.js";import{M as h}from"./terrainUtils-BzcC3xJT.js";async function g(t,r,s){const e=t.layer;if(h(e)){const a=await e.fetchTile(r[0],r[1],r[2],s);if(n(s))throw m.getLogger(t).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),c();return a}let o=t.getTileUrl(r);f(e)&&e.refreshTimestamp&&(o+=`${o.includes("?")?"&":"?"}_ts=${e.refreshTimestamp}`);const i=t.hasMixedImageFormats?"image+type":"image";return s.requester.request(o,i,s)}export{g as i};
