import{lg as u,gQ as d,gR as _,fs as x,ep as O}from"./index-BfC8i6jT.js";import{a as g}from"./Object3DVisualElement-CRBtGAtS.js";import{q as z,o as S,s as G}from"./RenderGeometry-BYg-7xwk.js";import{t as m}from"./DoubleArray-CZhUFo5d.js";import{e as p}from"./basicInterfaces-wONHx_SN.js";import{h as y}from"./Material-CL7oq3ds.js";import{w as v}from"./RenderObject-7dW_PzsM.js";function E(a,e,r,n,l){const t=m(3*a.length),h=m(t.length);a.forEach((s,c)=>{t[3*c]=s[0],t[3*c+1]=s[1],t[3*c+2]=s.length>2?s[2]:0});const o=z(t,e,0,h,0,t,0,t.length/3,r,n,l),i=o!=null;return{numVertices:a.length,position:t,mapPositions:h,projectionSuccess:i,sampledElevation:o}}class F extends g{constructor(e){super(e),this.view=null,this._renderOccluded=y.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=u([1,127/255,0,1]),this._size=11,this._outlineColor=u([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){d(e,this._color)||(_(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){d(e,this._outlineColor)||(_(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,screenSizeScale:this.size,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const e=this.vertices;if(e==null||e.length===0)return[];const r=.5,n=.5,l=E(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,S.fromElevationInfo(this.elevationInfo)),t=[],h=l.numVertices,o=l.position;for(let i=0;i<h;++i){const s=x(P,o[3*i],o[3*i+1],o[3*i+2]),c=f(this._vertexMaterial,r,s),M=f(this._vertexOutlineMaterial,n,s);t.push({vertexGeometry:c,vertexOutlineGeometry:M})}return t}createGeometries(e){const r=this._createRenderGeometries();for(const{vertexGeometry:n,vertexOutlineGeometry:l}of r)e.addGeometry(n),e.addGeometry(l)}createExternalResources(){this._vertexMaterial=new v({...this._vertexMaterialParameters,writeDepth:!0,cullFace:p.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new v({...this._vertexOutlineMaterialParameters,forceTransparentMode:!0,writeDepth:!0,cullFace:p.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const P=O();function f(a,e,r){return G(a,e,16,16,{offset:r})}export{F as d};
