import{v as i,y as n,z as v,A as g,aM as x,bv as E,bw as l}from"./index-BfC8i6jT.js";import{i as b}from"./timeSupport-OHicj2My.js";import{p as D}from"./popupUtils-6OYxcFTS.js";const T=m=>{let t=class extends m{constructor(){super(...arguments),this.view=null}get timeExtent(){var e;return b(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:a}=this;if(!e)throw new g("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:c}=a,p=D(a,s);if(!c||p==null)return[];const y=await p.getRequiredFields();x(s);const r=new E;r.timeExtent=this.timeExtent,r.geometry=e,r.outFields=y,r.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:u}=this.view,h=this.view.type==="2d"?new l(o,o,u):new l(.5*o,.5*o,u),{returnTopmostRaster:w,showNoDataRecords:d}=p.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},R={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:h,showNoDataRecords:d,signal:s==null?void 0:s.signal};return a.queryVisibleRasters(r,R).then(f=>f)}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return i([n()],t.prototype,"layer",void 0),i([n()],t.prototype,"suspended",void 0),i([n({readOnly:!0})],t.prototype,"timeExtent",null),i([n()],t.prototype,"view",void 0),t=i([v("esri.views.layers.ImageryLayerView")],t),t};export{T as m};
