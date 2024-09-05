function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e,aM as d}from"./index-BfC8i6jT.js";import{t as o}from"./requestImageUtils-CYZi7VGK.js";let c=class{constructor(){this._candidateTiles=[]}schedule(a){this._candidateTiles.includes(a)||this._candidateTiles.push(a)}reshuffle(a){const i=[];for(const s of this._candidateTiles)a>0?(s.reshuffle(),a--):i.push(s);this._candidateTiles=i}};async function f(t){const a=e(()=>import("./mask-svg-cNit2NTT.js"),__vite__mapDeps([])),i=e(()=>import("./overlay-svg-DioSRl-7.js"),__vite__mapDeps([])),s=o((await a).default,{signal:t}),r=o((await i).default,{signal:t}),_={mask:await s,overlay:await r};return d(t),_}export{f as a,c as s};
