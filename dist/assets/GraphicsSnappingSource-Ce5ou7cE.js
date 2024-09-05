import{W as v,aM as c,cX as S,c8 as y,ba as w,cZ as b,iX as k,f0 as E,eM as F,bH as C,dn as P,dm as $,fe as A,eY as G,v as a,y as l,z as H,fP as I,iY as R}from"./index-BfC8i6jT.js";import{t as O}from"./memoize-DsJmrG76.js";import{a as x}from"./normalizeUtilsSync-DWkgqXC-.js";import{o as z}from"./featureConversionUtils-CGYMoz5K.js";import{e as Z}from"./OptimizedFeature-7juV2tZm.js";import{m as M}from"./FeatureStore-Ci6iiFLw.js";import{$ as L}from"./QueryEngine-C5OQs_3q.js";import{y as W}from"./elevationInfoUtils-Dkzy2V0O.js";import{J as m}from"./utils-C2H3A1uw.js";import{i as J,y as N}from"./SnappingManager-D5q8LYBJ.js";import{o as j,i as q}from"./queryEngineUtils-BMv5yqeX.js";import{i as g,r as T,n as _}from"./symbologySnappingCandidates-B_v11YKB.js";import{I as U}from"./Scheduler-DSoCN6Hr.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./BoundsStore-CY_gwab2.js";import"./PooledRBush-BiSyGNoC.js";import"./timeSupport-B4kKaZSt.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-Buta7wlw.js";import"./centroid-DdLmOD72.js";import"./WhereClause-DO2CUFym.js";import"./TimeOnly-CuAeZtPD.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DD7XBH1B.js";import"./utils-DcLVAL7v.js";import"./utils-BTyVq-Fk.js";import"./ClassBreaksDefinition-CFCBLk51.js";import"./SnappingCandidate-O5eRSE6e.js";import"./cimSymbolUtils-DS1Fp96D.js";import"./projectVectorToVector-C51LtB8f.js";import"./projectPointToVector-C0Qwzs7z.js";import"./geodesicUtils-BOUsTR0r.js";import"./plane-ByuX_NXR.js";import"./mathUtils-DIiwy5h7.js";import"./sphere-BgvJtIjV.js";import"./geometry2dUtils-DBhp7z2_.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./keybindings-yv7BPnkG.js";import"./layerViewUtils-D2JqIDZ8.js";import"./geodesicLengthMeasurementUtils-Dk04A7GV.js";import"./quantityUtils-B2xRWNSM.js";import"./geometryEngine-s82Uc-OG.js";import"./geometryEngineBase-hNmXf8AX.js";import"./hydrated-CC1UoCrK.js";import"./VertexSnappingCandidate-Bavo3tLf.js";import"./PointSnappingHint-DG5oOaY6.js";import"./debugFlags-CX6JgPmI.js";const f="graphics-collections";let n=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return g();const o=async(r,s)=>(await I(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(r,s);return g(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:o})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",o=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&o?_(o,async(r,s)=>{const p=await e.whenLayerView(t);return c(s),p.queryForSymbologySnapping({candidates:r,spatialReference:e.spatialReference},s)}):_()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new S,this._memoizedMakeGetGroundElevation=O(q)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const o of i)this._addMany(o.graphics.toArray()),this.addHandles([o.on("graphic-update",r=>this._onGraphicUpdate(r)),this._updatingHandles.addOnCollectionChange(()=>o.graphics,r=>this._onGraphicsChanged(r))],f)},y);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{W(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),w(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),y),b(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:o}}=e,r=await k(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const s=this._memoizedMakeGetGroundElevation(this.view,o),p=r.flat().map(d=>j(d,s));return J(i,p),p}async _fetchCandidatesForSource(e,t,i){var u;const o=N(t,((u=this.view)==null?void 0:u.type)??"2d"),r=await e.queryEngine.executeQueryForSnapping(o,i);c(i);const s=await this._snappingElevationAligner.alignCandidates(r.candidates,t.coordinateHelper.spatialReference,i);c(i);const p=await this._symbologySnappingFetcher.fetch(s,i);c(i);const d=p.length===0?s:[...s,...p];return this._snappingElevationFilter.filter(o,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const o of e)o.geometry!=null&&(this._needsInitializeProjection(o.geometry.spatialReference)?(t.push(o.geometry.spatialReference),i.set(o.uid,o)):this._add(o));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=E(async s=>{await F(e.map(p=>({source:p,dest:this.spatialReference})),{signal:s}),this._markLoadedSpatialReferences(e);for(const[,p]of t)this._add(p)});this._updatingHandles.addPromise(i.promise);const o={task:i,graphics:t},r=()=>R(this._pendingAdds,o);i.promise.then(r,r),this._pendingAdds.push(o)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=C.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const o=this._createOptimizedFeature(e.uid,t);o!=null&&(i.featureStore.add(o),m(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!P(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=$(x(t),this.spatialReference);if(!i)return null;const o=this._ensureGeometryHasZ(i),r=z(o,this._hasZ,!1);return new Z(r,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=o=>{for(;o.length<3;)o.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(o=>o.forEach(t));break;case"polygon":i.rings.forEach(o=>o.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=A.toJSON(e),i=this._hasZ,o=new M({geometryType:t,hasZ:i,hasM:!1});return{featureStore:o,queryEngine:new L({featureStore:o,fieldsIndex:G.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:U.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),m(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:o,multipoint:r}=this._sources,s=[];return t!=null&&s.push(e(t)),i!=null&&s.push(e(i)),o!=null&&s.push(e(o)),r!=null&&s.push(e(r)),s}};a([l()],n.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],n.prototype,"layerSource",void 0),a([l({constructOnly:!0})],n.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],n.prototype,"view",void 0),a([l({readOnly:!0})],n.prototype,"updating",null),a([l({readOnly:!0})],n.prototype,"availability",void 0),a([l()],n.prototype,"_hasZ",null),a([l()],n.prototype,"_snappingElevationAligner",null),a([l()],n.prototype,"_snappingElevationFilter",null),a([l()],n.prototype,"_symbologySnappingFetcher",null),a([l()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),n=a([H("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const h="OBJECTID";export{n as GraphicsSnappingSource};
