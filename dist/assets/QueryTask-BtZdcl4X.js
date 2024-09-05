function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/meshFeatureSet-DtBj_XFb.js","assets/index-BfC8i6jT.js","assets/index-CKzvfSE0.css","assets/Mesh-lqzZlCsM.js","assets/MeshComponent-D498mY_W.js","assets/imageUtils-BfjLvT3i.js","assets/MeshVertexAttributes-BD2PtWGl.js","assets/MeshLocalVertexSpace-DZNf3szf.js","assets/meshVertexSpaceUtils-CcfLNHym.js","assets/triangulationUtils-en0lWBIB.js","assets/earcut-BrWrA6nz.js","assets/DoubleArray-CZhUFo5d.js","assets/Indices-Bl02GO-3.js","assets/plane-ByuX_NXR.js","assets/mathUtils-DIiwy5h7.js","assets/deduplicate-DD1J6YAH.js","assets/projection-PKkfrDjd.js","assets/spatialReferenceEllipsoidUtils-6vOoKuZD.js","assets/computeTranslationToOriginAndRotation-DK7GzGeb.js","assets/BufferView-DcMGflLe.js","assets/vec3-DSC46DgP.js","assets/vec4-CDid__v2.js","assets/projectPointToVector-C0Qwzs7z.js","assets/vertexSpaceConversion-Bg4vy5id.js","assets/External-DUpZJXYU.js","assets/executeRelationshipQuery-RKLjGxCI.js","assets/query-Ct_ioWiz.js","assets/pbfQueryUtils-BfYlzyKp.js","assets/pbf-W1xbSZIX.js","assets/OptimizedGeometry-vU5jWBvU.js","assets/OptimizedFeature-7juV2tZm.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryAttachments-C6mg9w5G.js","assets/AttachmentInfo-rwMSayzj.js","assets/executeTopFeaturesQuery-BB4Yb3gk.js","assets/queryTopFeatures-ASPYtVx_.js","assets/executeForTopIds-DKJ4XQf8.js","assets/executeForTopExtents-C-cA0mNb.js","assets/executeForTopCount-Q67Za7hg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as _,bv as S,bm as A,v as n,y as l,j6 as D,z as T,W as N,b6 as j,R as Q,bF as P,fP as p,_ as u,bA as f,bB as h,A as y,cU as q}from"./index-BfC8i6jT.js";import{s as $,a as L}from"./executeForIds-CQINWF9R.js";import{x as z}from"./query-Ct_ioWiz.js";import{a as J}from"./executeQueryJSON-BvKan1w-.js";import{n as U}from"./executeQueryPBF-CJnhAefY.js";async function C(e,t,r){const o=_(e),i=await z(o,S.from(t),{...r}),s=i.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:A.fromJSON(s)}}let a=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return j(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,i=Q("featurelayer-pbf-statistics"),s=!o||i;let d;if(this.pbfSupported&&s)try{d=await U(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&s||(d=await J(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return P.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-DtBj_XFb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return $(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return L(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./index-BfC8i6jT.js").then(i=>i.vx),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-RKLjGxCI.js"),__vite__mapDeps([25,1,2,26,27,28,29,30,31]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./index-BfC8i6jT.js").then(i=>i.vx),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-RKLjGxCI.js"),__vite__mapDeps([25,1,2,26,27,28,29,30,31]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(u(()=>import("./queryAttachments-C6mg9w5G.js"),__vite__mapDeps([32,1,2,26,27,28,29,30,31,33])),t),s=_(this.url);return i(s,await(this.queryAttachmentsSupported?r(s,e,t):o(s,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-BB4Yb3gk.js"),__vite__mapDeps([34,1,2,35,26,27,28,29,30,31])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-DKJ4XQf8.js"),__vite__mapDeps([36,1,2,35,26,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-C-cA0mNb.js"),__vite__mapDeps([37,1,2,35,26,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-Q67Za7hg.js"),__vite__mapDeps([38,1,2,35,26,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,s=f("model/gltf-binary",o)??h("glb",o),d=f("model/gltf+json",o)??h("gltf",o);for(const c of i){if(c===s){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new y("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!q(t.outSpatialReference,this.sourceSpatialReference))throw new y("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:b,translationX:x,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:v,rotationX:V,rotationY:E,rotationZ:I,rotationDeg:w}=r.transformFieldRoles;t.outFields.push(c,m,b,x,F,O,g,R,v,V,E,I,w)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([T("esri.layers.graphics.sources.support.QueryTask")],a);const B=a;export{B as x};
