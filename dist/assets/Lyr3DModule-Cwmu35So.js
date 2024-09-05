function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-NWyvF3D0.js","assets/index-BfC8i6jT.js","assets/index-CKzvfSE0.css","assets/lyr3DWorker-DZe3F7YM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,fN as r}from"./index-BfC8i6jT.js";function _(){return new Promise(t=>i(()=>import("./lyr3DMain-NWyvF3D0.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function u(){return new Promise(t=>i(()=>import("./lyr3DWorker-DZe3F7YM.js"),__vite__mapDeps([3,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,_ as n};
