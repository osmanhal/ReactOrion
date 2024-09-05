import{v as w,y as M,z as D,W as p,J as g,ba as C,jJ as v,U as R,O as m}from"./index-BfC8i6jT.js";import{d as J,u as y,m as L}from"./ILyr3DWasmPerSceneView-vPx4somd.js";import{h as I}from"./WorkerHandle-CXxGr93G.js";import{n as V}from"./Lyr3DModule-Cwmu35So.js";import{R as W}from"./elevationInfoUtils-Dkzy2V0O.js";import{e as F}from"./makeScheduleFunction-CggzEh3c.js";class P extends I{constructor(t){super("Lyr3DWorker","process",{process:i=>i.inputs},t,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var o,n;(function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"})(o||(o={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(n||(n={}));let b=class extends p{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=n.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(o.Lifetime),this._debugFlags.add(o.Jobs),this._debugFlags.add(o.Renderables)}_debugLog(e,t,i,r=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const s=r?`[js] ${i}`:`${i}`;t===n.Critical||t===n.Error?g.getLogger(this).error(s):t===n.Warning&&g.getLogger(this).warn(s),g.getLogger(this).info(s)}}initialize(){this._debugLevel>n.Warning&&(g.getLogger(this).level="info"),this._debugLog(o.Lifetime,n.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([C(()=>{var e;return(e=this.view.state)==null?void 0:e.contentCamera},()=>this._updateWasmCamera())]),this._pulseTaskHandle=v({preRender:()=>this._pulseTask()})}destroy(){var t;this._debugLog(o.Lifetime,n.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach(i=>{i.abortController.abort()}),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then(()=>{var i;(i=this._worker)==null||i.destroy(),this._worker=null}),(t=this._pulseTaskHandle)==null||t.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(o.Lifetime,n.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),J)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(o.Lifetime,n.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return t===0&&(this._debugLog(o.Lifetime,n.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,n.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,n.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t)}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(o.Lifetime,n.Error,this._wasmNotLoaded),[])}onRenderableEvicted(e,t,i){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,n.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(o.Lifetime,n.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=V().then(e=>{var _,c,f;this._lyr3DMain=e,this._lyr3DMainPromise=null;const t=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),i=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),r=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),s=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),l=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),h=this.view.viewingMode==="global",a=(_=this.view.renderSpatialReference)!=null&&_.isWebMercator?3857:((c=this.view.renderSpatialReference)==null?void 0:c.wkid)??-1,u=(f=this.view.heightModelInfo)==null?void 0:f.heightModel,d=!u||u==="gravity-related-height";return this._lyr3DMain.initialize_lyr3d_wasm(l,t,i,r,s,h,d,a,this._debugLevel)?(this._worker=new P(F(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(o.Lifetime,n.Critical,"Lyr3d Main WASM failed to initialize",!1))}).catch(e=>{this._debugLog(o.Lifetime,n.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)})),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach(s=>{e+=s.layerView.usedMemory,t+=s.layerView.unloadedMemory}),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,r=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,r,i.maxMemory),this._layers.forEach(s=>{s.needFrame===!0&&(s.needFrame=!1,s.layerView.updatingFlagChanged())})}}_incrementJobCount(e){e.outstandingJobCount+=1,e.outstandingJobCount===1&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,e.outstandingJobCount===0&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===1&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===0&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(o.Jobs,n.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const r=t.data.byteLength,s=this._lyr3DMain._malloc(r);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,s,r).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,s,r),this._lyr3DMain._free(s)}this._decrementJobCount(e)}_getRequestPromises(e,t,i){const r=[];for(const s of e){const l=new URL(s),h=l.searchParams.get("session");h?this._session=h:!this._session||l.origin===i.origin&&l.pathname===i.pathname||l.searchParams.append("session",this._session),r.push(R(l.toString(),t).then(a=>a.data))}return r}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},s={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},l=new URL(t.layerView.layer.url),h=this._getRequestPromises(e.urls,r,l);Promise.all(h).then(a=>(s.inputs=a,this._worker.invoke(s,i))).then(a=>a).catch(a=>(m(a)?this._debugLog(o.Jobs,n.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,n.Error,`job ${e.jobId} failed with error ${a}.`),{status:y.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]})).then(a=>{if(a.status===y.Failed)this._onJobFailed(t,a,e);else if(a.status===y.Succeeded)this._onJobSucceeded(t,a,e);else if(a.status===y.MissingInputs){const u=this._getRequestPromises(a.missingInputUrls,r,l);Promise.all(u).then(d=>{s.jobDescJson=a.jobDescJson,a.originalInputs?s.inputs=a.originalInputs:s.inputs=[],s.isMissingResourceCase=!0;for(const _ of d)s.inputs.push(_);return this._worker.invoke(s,i)}).then(d=>{d.status===y.Failed?this._onJobFailed(t,d,e):d.status===y.Succeeded&&this._onJobSucceeded(t,d,e)}).catch(d=>{this._decrementJobCount(t),m(d)?this._debugLog(o.Jobs,n.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,n.Error,`job ${e.jobId} failed with error2 ${d}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)})}})}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const r=t.data.slice();t.data=r}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then(r=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,r.memUsageBytes),this._decrementRenderableCount(i)}).catch(r=>{m(r)||this._debugLog(o.Renderables,n.Error,`createRenderable failed with error ${r}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)}))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const s=r.layerView,l=[],h=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let a=0;a<i;++a)l.push(h[a]);for(let a=0;a<i;++a)s.freeRenderable(l[a])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const s=this._layers.get(e);if(!s)return;const l=s.layerView,h=[],a=[],u=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let _=0;_<r;++_)h.push(u[_]),a.push(d[_]===1);l.setRenderableVisibility(h,a,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return L;const i=this._lyr3DMain.get_next_layer_id(),r=new AbortController;this._layers.set(i,{layerView:e,abortController:r,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const s=W(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,i,s)?(this._updateWasmCamera(),i):(this._layers.delete(i),L)}_updateWasmCamera(){var d;const e=(d=this.view.state)==null?void 0:d.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:s,far:l,fovY:h}=e,a=[e.viewport[2],e.viewport[3]],u=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:s,far:l,fov:h,aspectRatio:u,viewport:a})}};w([M({constructOnly:!0})],b.prototype,"view",void 0),b=w([D("esri.layers.Lyr3DWasmPerSceneView")],b);const $=b;export{$ as default};
