import{P as y,gQ as o,gR as c,fs as C,fw as R,fx as w,eK as v,gS as P,dT as D,ep as f}from"./index-BfC8i6jT.js";import{r as d,t as b}from"./vec4f32-CjrfB-0a.js";import{t as E}from"./DoubleArray-CZhUFo5d.js";import{e as G}from"./projectVectorToVector-C51LtB8f.js";import{i as S}from"./elevationInfoUtils-Dkzy2V0O.js";import{t as A}from"./EngineVisualElement-Bg7brjUA.js";import{c as $}from"./Laserlines.glsl-OZfEMRog.js";import{z as u,m as I,o as M}from"./RenderGeometry-BYg-7xwk.js";import{l as j,b as _,p as W}from"./lineStippleUtils-DdOUX39J.js";import{h as l}from"./Material-CL7oq3ds.js";import{e as T}from"./VertexAttribute-BnAa5VW0.js";class J extends A{constructor(e){super(e),this._attachmentOrigin=G(0,0,0,null),this._attachmentOriginDirty=!0,this.events=new y,this._geometry=null,this._width=1,this._color=d(1,0,1,1),this._innerWidth=0,this._innerColor=d(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._falloff=0,this._elevationInfo=null,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=l.OccludeAndTransparentStencil,this._attachmentOrigin.spatialReference=e.view.spatialReference,this._laserline=new $({view:e.view,isDecoration:e.isDecoration}),this.applyProperties(e),this.attached=e.attached??!0}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:p,recreateGeometry:(t,r)=>{t.geometries.length=0,this._recreateGeometry(r,t.material,t.geometries)}}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:p,recreateGeometry:t=>{t.geometries=this._createRenderGeometriesDraped(t.material),this._attachmentOriginChanged()}}}get _laserlineAttached(){return this.attached&&this.visible&&this._laserlineStyle!=null&&!this.isDraped&&this.laserlineEnabled}onAttachedChange(e){this._laserline.attached=this._laserlineAttached,e&&this._attachmentOriginChanged()}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){o(e,this._color)||(c(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){o(e,this._innerColor)||(c(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=e!=null!=(this._stipplePattern!=null);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e&&this._stippleOffColor&&o(e,this._stippleOffColor)||(this._stippleOffColor=e?b(e):null,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,e!=null&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get attachmentOrigin(){var r;if(!this._attachmentOriginDirty)return this._attachmentOrigin;const e=(r=this.object3dResources.resources)==null?void 0:r.geometries;if(!e||e.length===0)return null;C(a,0,0,0);let t=0;for(const i of e)i.computeAttachmentOrigin(m)&&(R(a,a,m),t++);return t===0?null:(w(a,a,1/t),this.view.renderCoordsHelper.fromRenderCoords(a,this._attachmentOrigin),this._attachmentOriginDirty=!1,this._attachmentOrigin)}_updateMaterial(){this.object3dResources.resources!=null&&this.object3dResources.resources.material.setParameters(this._materialParameters),this.drapedResources.resources!=null&&this.drapedResources.resources.material.setParameters(this._materialParameters)}get _isClosed(){return this.geometry!=null&&this.geometry.type==="polygon"}get _materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration}}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===l.OccludeAndTransparentStencil?l.OccludeAndTransparent:this._renderOccluded}_recreateGeometry(e,t,r){this._createRenderGeometries(t,r);for(const i of r)e.addGeometry(i);this._attachmentOriginChanged()}_attachmentOriginChanged(){this._attachmentOriginDirty=!0,this.events.emit("attachment-origin-changed")}_createObject3DResources(e){const t=new u(this._materialParameters),r=new Array;return this._recreateGeometry(e,t,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_createDrapedResources(){const e=new u(this._materialParameters);return{material:e,geometries:this._createRenderGeometriesDraped(e)}}_createRenderGeometriesDraped(e){const{geometry:t,view:r}=this,i=r.basemapTerrain.spatialReference;return t==null||i==null?[]:j(t,i).lines.map(({position:s})=>{const n={overlayInfo:{spatialReference:i,renderCoordsHelper:r.renderCoordsHelper},attributeData:{position:s},removeDuplicateStartEnd:this._isClosed};return new I(_(e,n))})}calculateMapBounds(e){if(this.object3dResources.resources==null)return!1;const t=this.view.renderCoordsHelper;for(const r of this.object3dResources.resources.geometries){const i=r.attributes.get(T.POSITION),s=E(i.data.length);v(i.data,t.spatialReference,0,s,this.view.spatialReference,0,i.data.length/3),P(e,s)}return!0}_createRenderGeometries(e,t){const r=this.geometry;if(r==null)return;const i=W(r,this.view.elevationProvider,this.view.renderCoordsHelper,M.fromElevationInfo(this.elevationInfo??new D({mode:S(r,null)}))),s=new Array;for(const{position:n,mapPositions:g}of i.lines){const O={mapPositions:g,attributeData:{position:n},removeDuplicateStartEnd:this._isClosed};t.push(_(e,O)),s.push(n)}this._laserline.pathVerticalPlane=s}}function p(h){h.geometries=[]}const m=f(),a=f();export{J as w};
