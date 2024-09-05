function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{en as xe,em as nt,cs as it,jl as je,aC as It,A as at,J as Pt,L as Xe,dN as Mt,ep as f,fE as Oe,fs as y,fB as q,eu as dr,aa as st,fx as N,fw as P,fz as qe,iv as k,eQ as ot,m_ as Pe,eA as ae,v as pe,es as Me,ey as mr,eB as se,E as hr,fA as fr,fD as pr,op as vr,fk as gr,eD as Le,qr as _r,jA as Tr,eO as Ar,lJ as xr,lH as Sr,lI as $r,g1 as br,jK as Er,ev as yr,ew as Rr,si as dt,eC as Lt,aE as Nt,oh as mt,_ as wr,fN as Cr,P as Ir,hg as ht,pg as Pr,fo as me,qt as he,aM as ft,qE as Mr,iL as Lr,iA as Nr,gA as Fr}from"./index-BfC8i6jT.js";import{a as W,b as Dr,h as b,s as Ve,g as M,i as re,c as Or,f as ze,e as Ft,o as Dt,d as Ot,k as ce,t as zr}from"./Matrix4PassUniform-BH4JqvtO.js";import{o,n as He}from"./interfaces-B8ge7Jg9.js";import{a as S}from"./BindType-BmZEZMMh.js";import{s as V}from"./Util-D9KK83cB.js";import{E as Hr,R as B,O as F,X as pt,I as A,c as z,G as te,L as ie,D as Ke}from"./enums-BlUEVwJR.js";import{d as Ur,c as ve,a as Vr,e as Br}from"./Texture-Bq-Yp-pO.js";import{e as T}from"./VertexAttribute-BnAa5VW0.js";import{a as Gr,t as Wr,N as G,u as ge}from"./basicInterfaces-wONHx_SN.js";import{r as _e,t as kr}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{o as jr,r as Xr,t as qr}from"./doublePrecisionUtils-B0owpBza.js";import{t as Kr,l as Qr}from"./Indices-Bl02GO-3.js";import{r as zt,e as fe,t as Yr,h as Jr}from"./Material-CL7oq3ds.js";import{d as Zr}from"./triangle-B-TmEFJd.js";import{l as Ht,o as en}from"./renderState-yUi34s5A.js";import{t as tn}from"./requestImageUtils-CYZi7VGK.js";function na(e,t=!1){return e<=xe?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function ia(e){return nt(e)?e.length<xe?e:new Float32Array(e):e.length<xe?Array.from(e):e}function aa(e){return(nt(e)?e.length:e.byteLength/8)<=xe?Array.from(e):new Float32Array(e)}function sa(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}var I;function rn(e,t){switch(t.textureCoordinateType){case I.Default:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case I.Compressed:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case I.Atlas:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:it(t.textureCoordinateType);case I.None:return void e.vertex.code.add(o`void forwardTextureCoordinates() {}`);case I.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(I||(I={}));let Ut=class extends W{constructor(t,r){super(t,"vec2",S.Pass,(n,i,a)=>n.setUniform2fv(t,r(i,a)))}};function la(e){e.include(Dr),e.code.add(o`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function nn(e){e.uniforms.add(new Ut("zProjectionMap",(t,r)=>an(r.camera))),e.code.add(o`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(o`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(o`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function an(e){const t=e.projectionMatrix;return je(sn,t[14],t[10])}const sn=It();function on(e){e.uniforms.add(new b("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function ln(e){e.uniforms.add(new b("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function ca(e){on(e.fragment),ln(e.fragment),e.fragment.code.add(o`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}let cn=class extends W{constructor(t,r){super(t,"vec4",S.Pass,(n,i,a)=>n.setUniform4fv(t,r(i,a)))}};const un=()=>Pt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Vt=class{constructor(){this._includedModules=new Map}include(t,r){this._includedModules.has(t)?this._includedModules.get(t):(this._includedModules.set(t,r),t(this.builder,r))}},ma=class extends Vt{constructor(){super(...arguments),this.vertex=new vt,this.fragment=new vt,this.attributes=new hn,this.varyings=new fn,this.extensions=new Qe,this.constants=new Bt,this.outputs=new Je}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(t){const r=this.extensions.generateSource(t),n=this.attributes.generateSource(t),i=this.varyings.generateSource(t),a=t==="vertex"?this.vertex:this.fragment,s=a.uniforms.generateSource(),c=a.code.generateSource(),l=t==="vertex"?vn:pn,d=this.constants.generateSource().concat(a.constants.generateSource()),u=this.outputs.generateSource(t);return`#version 300 es
${r.join(`
`)}

${l}

${d.join(`
`)}

${s.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${u.join(`
`)}

${c.join(`
`)}`}generateBindPass(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[S.Pass];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[S.Pass];s&&r.set(a.name,s)});const n=Array.from(r.values()),i=n.length;return(a,s)=>{for(let c=0;c<i;++c)n[c](t,a,s)}}generateBindDraw(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[S.Draw];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[S.Draw];s&&r.set(a.name,s)});const n=Array.from(r.values()),i=n.length;return(a,s,c)=>{for(let l=0;l<i;++l)n[l](t,a,s,c)}}},dn=class{constructor(t){this._stage=t,this._entries=new Map}add(...t){for(const r of t)this._add(r);return this._stage}get(t){return this._entries.get(t)}_add(t){if(t!=null){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new at(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else un().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(t=>t.arraySize!=null?`uniform ${t.type} ${t.name}[${t.arraySize}];`:`uniform ${t.type} ${t.name};`)}get entries(){return Array.from(this._entries.values())}},mn=class{constructor(t){this._stage=t,this._entries=new Array}add(t){return this._entries.push(t),this._stage}generateSource(){return this._entries}},vt=class extends Vt{constructor(){super(...arguments),this.uniforms=new dn(this),this.code=new mn(this),this.constants=new Bt}get builder(){return this}},hn=class{constructor(){this._entries=new Array}add(t,r){this._entries.push([t,r])}generateSource(t){return t==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},fn=class{constructor(){this._entries=new Map}add(t,r){this._entries.has(t)&&V(this._entries.get(t)===r),this._entries.set(t,r)}generateSource(t){const r=new Array;return this._entries.forEach((n,i)=>r.push(t==="vertex"?`out ${n} ${i};`:`in ${n} ${i};`)),r}},Qe=class Ye{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Ye.ALLOWLIST_VERTEX:Ye.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(n=>r.includes(n)).map(n=>`#extension ${n} : enable`)}};Qe.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Qe.ALLOWLIST_VERTEX=[];let Je=class Ze{constructor(){this._entries=new Map}add(t,r,n=0){const i=this._entries.get(n);i?V(i.name===t&&i.type===r,`Fragment shader output location ${n} occupied`):this._entries.set(n,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Ze.DEFAULT_NAME,type:Ze.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((n,i)=>r.push(`layout(location = ${i}) out ${n.type} ${n.name};`)),r}};Je.DEFAULT_TYPE="vec4",Je.DEFAULT_NAME="fragColor";let Bt=class v{constructor(){this._entries=new Set}add(t,r,n){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=v._numberToFloatStr(n);break;case"int":i=v._numberToIntStr(n);break;case"bool":i=n.toString();break;case"vec2":i=`vec2(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])})`;break;case"vec3":i=`vec3(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])},                            ${v._numberToFloatStr(n[2])})`;break;case"vec4":i=`vec4(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])},                            ${v._numberToFloatStr(n[2])},                            ${v._numberToFloatStr(n[3])})`;break;case"ivec2":i=`ivec2(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])})`;break;case"ivec3":i=`ivec3(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])},                             ${v._numberToIntStr(n[2])})`;break;case"ivec4":i=`ivec4(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])},                             ${v._numberToIntStr(n[2])},                             ${v._numberToIntStr(n[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(n,a=>v._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${i};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const pn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,vn=`precision highp float;
precision highp sampler2D;`;let Ce=class extends W{constructor(t,r){super(t,"sampler2D",S.Pass,(n,i,a)=>n.bindTexture(t,r(i,a)))}},Aa=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Sa=class{constructor(t,r,n){this.release=n,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=Xe(this._program),this._pipeline=this._configuration=null}reload(t){Xe(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return Hr.TRIANGLES}getPipeline(t,r,n){return this._pipeline}initializeConfiguration(t,r){}},ba=class{constructor(t,r,n){this._context=t,this._locations=n,this._textures=new Map,this._freeTextureUnits=new Mt({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),n),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Ur()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((r==null?void 0:r.glName)==null){const i=this._textures.get(t);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(t)),null}let n=this._textures.get(t);return n==null?(n=this._allocTextureUnit(r),this._textures.set(t,n)):n.texture=r,this._context.useProgram(this),this.setUniform1i(t,n.unit),this._context.bindTexture(r,n.unit),n.unit}rebindTextures(){var t;this._context.useProgram(this),this._textures.forEach((r,n)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(n,r.unit)}),(t=this._fragmentUniforms)==null||t.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};var gt,_t;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(gt||(gt={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(_t||(_t={}));const Ne=16;function ya(e){return Math.ceil(e/Ne)*Ne}function Ra(e){return Math.floor(e/Ne)*Ne}function gn(e,t){let a=e.width*e.height;if(a<4096)return e instanceof ImageData?Gt(e):e;let s=e.width,c=e.height;do s=Math.ceil(s/2),c=Math.ceil(c/2),a=s*c;while(a>1048576||t!=null&&(s>t||c>t));return lt(e,s,c)}function _n(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const n=t/r;return lt(e,Math.round(e.width*n),Math.round(e.height*n))}function lt(e,t,r){if(e instanceof ImageData)return lt(Gt(e),t,r);const n=document.createElement("canvas");return n.width=t,n.height=r,n.getContext("2d").drawImage(e,0,0,n.width,n.height),n}function Gt(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new at("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}function wa(e,t=!0){e.attributes.add(T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(o`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Tn(e){e.fragment.code.add(o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function An(e,t){switch(e.include(rn,t),t.textureCoordinateType){case I.Default:case I.Compressed:return void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case I.Atlas:return e.include(Tn),void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:it(t.textureCoordinateType);case I.None:case I.COUNT:return}}let Ca=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(t,r){return this._technique=this._techniques.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return Gr.LOADED}};var C;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(C||(C={}));function Pa(e,t){const r=e.fragment,n=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===C.Normal&&n&&e.include(An,t),t.pbrMode!==C.Schematic)if(t.pbrMode!==C.Disabled){if(t.pbrMode===C.Normal){r.code.add(o`vec3 mrr;
vec3 emission;
float occlusion;`);const i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===S.Pass?new Ce("texMetallicRoughness",a=>a.textureMetallicRoughness):new Ve("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(o`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===S.Pass?new Ce("texEmission",a=>a.textureEmissive):new Ve("texEmission",a=>a.textureEmissive)),r.code.add(o`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===S.Pass?new Ce("texOcclusion",a=>a.textureOcclusion):new Ve("texOcclusion",a=>a.textureOcclusion)),r.code.add(o`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o`float getBakedOcclusion() { return 1.0; }`),i===S.Pass?r.uniforms.add(new b("emissionFactor",a=>a.emissiveFactor),new b("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new M("emissionFactor",a=>a.emissiveFactor),new M("mrrFactors",a=>a.mrrFactors)),r.code.add(o`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?o`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?o`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?o`applyEmission(${t.hasEmissiveTextureTransform?o`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?o`applyOcclusion(${t.hasOcclusionTextureTransform?o`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(o`float getBakedOcclusion() { return 1.0; }`);else r.code.add(o`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Wt(e){e.vertex.code.add(o`const float PI = 3.141592653589793;`),e.fragment.code.add(o`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}let Ma=class extends W{constructor(t,r){super(t,"bool",S.Pass,(n,i,a)=>n.setUniform1b(t,r(i,a)))}};function Na(e){e.code.add(o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Fa(e,t){if(!t.multipassEnabled)return;e.fragment.include(nn),e.fragment.uniforms.add(new Ce("terrainDepthTexture",(n,i)=>{var a;return(a=i.multipassTerrain.depth)==null?void 0:a.attachment}));const r=t.occlusionPass;e.fragment.code.add(o`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?o`return fragmentDepth < linearDepth && depth < 1.0;`:o`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}let Da=class{constructor(){this.cullAboveGround=!1}};var Tt;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",e[e.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VIEWSHED=22]="VIEWSHED",e[e.VOXEL=23]="VOXEL",e[e.MAX_SLOTS=24]="MAX_SLOTS"})(Tt||(Tt={}));var Q;(function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"})(Q||(Q={}));let xn=class{constructor(t=f()){this.intensity=t}},Sn=class{constructor(t=f(),r=Oe(.57735,.57735,.57735)){this.intensity=t,this.direction=r}},et=class{constructor(t=f(),r=Oe(.57735,.57735,.57735),n=!0,i=1,a=1){this.intensity=t,this.direction=r,this.castShadows=n,this.specularStrength=i,this.environmentStrength=a}},kt=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function $n(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]*t[n];return r}function Be(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]*t;return r}function ne(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]+t[n];return r}function jt(e){return(e+1)*(e+1)}function bn(e){return st(Math.floor(Math.sqrt(e)-1),0,2)}function Xt(e,t,r){const n=e[0],i=e[1],a=e[2],s=r||[];return s.length=jt(t),t>=0&&(s[0]=.28209479177),t>=1&&(s[1]=.4886025119*n,s[2]=.4886025119*a,s[3]=.4886025119*i),t>=2&&(s[4]=1.09254843059*n*i,s[5]=1.09254843059*i*a,s[6]=.31539156525*(3*a*a-1),s[7]=1.09254843059*n*a,s[8]=.54627421529*(n*n-i*i)),s}function En(e,t){const r=jt(e),n=t||{r:[],g:[],b:[]};n.r.length=n.g.length=n.b.length=r;for(let i=0;i<r;i++)n.r[i]=n.g[i]=n.b[i]=0;return n}function yn(e,t){const r=bn(t.r.length);for(const n of e)dr(tt,n.direction),Xt(tt,r,D),$n(D,Ie),Be(D,n.intensity[0],Z),ne(t.r,Z),Be(D,n.intensity[1],Z),ne(t.g,Z),Be(D,n.intensity[2],Z),ne(t.b,Z);return t}function Rn(e,t){Xt(tt,0,D);for(const r of e)t.r[0]+=D[0]*Ie[0]*r.intensity[0]*4*Math.PI,t.g[0]+=D[0]*Ie[0]*r.intensity[1]*4*Math.PI,t.b[0]+=D[0]*Ie[0]*r.intensity[2]*4*Math.PI;return t}function wn(e,t,r,n){En(t,n),y(r.intensity,0,0,0);let i=!1;const a=Cn,s=In,c=Pn;a.length=0,s.length=0,c.length=0;for(const l of e)l instanceof et&&!i?(q(r.direction,l.direction),q(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,i=!0):l instanceof et||l instanceof Sn?a.push(l):l instanceof xn?s.push(l):l instanceof kt&&c.push(l);yn(a,n),Rn(s,n);for(const l of c)ne(n.r,l.r),ne(n.g,l.g),ne(n.b,l.b)}const Cn=[],In=[],Pn=[],D=[0],Z=[0],tt=f(),Ie=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let At=class{constructor(){this.color=f(),this.intensity=1}},Mn=class{constructor(){this.direction=f(),this.ambient=new At,this.diffuse=new At}};const Ln=.4;let Wa=class{constructor(){this._shOrder=2,this._legacy=new Mn,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new kt,this._mainLight=new et(f(),Oe(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(t){wn(t,this._shOrder,this._mainLight,this._sphericalHarmonics),q(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,N(this._legacy.diffuse.color,this._mainLight.intensity,r),q(Se,this._legacy.diffuse.color),N(Se,Se,Ln*this.globalFactor),P(this._legacy.ambient.color,this._legacy.ambient.color,Se)}copyFrom(t){this._sphericalHarmonics.r=Array.from(t.sh.r),this._sphericalHarmonics.g=Array.from(t.sh.g),this._sphericalHarmonics.b=Array.from(t.sh.b),q(this._mainLight.direction,t.mainLight.direction),q(this._mainLight.intensity,t.mainLight.intensity),this._mainLight.castShadows=t.mainLight.castShadows,this._mainLight.specularStrength=t.mainLight.specularStrength,this._mainLight.environmentStrength=t.mainLight.environmentStrength,this.globalFactor=t.globalFactor,this.noonFactor=t.noonFactor}lerpLighting(t,r,n){if(qe(this._mainLight.intensity,t.mainLight.intensity,r.mainLight.intensity,n),this._mainLight.environmentStrength=k(t.mainLight.environmentStrength,r.mainLight.environmentStrength,n),this._mainLight.specularStrength=k(t.mainLight.specularStrength,r.mainLight.specularStrength,n),q(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=k(t.globalFactor,r.globalFactor,n),this.noonFactor=k(t.noonFactor,r.noonFactor,n),t.sh.r.length===r.sh.r.length)for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=k(t.sh.r[i],r.sh.r[i],n),this._sphericalHarmonics.g[i]=k(t.sh.g[i],r.sh.g[i],n),this._sphericalHarmonics.b[i]=k(t.sh.b[i],r.sh.b[i],n);else for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=r.sh.r[i],this._sphericalHarmonics.g[i]=r.sh.g[i],this._sphericalHarmonics.b[i]=r.sh.b[i]}};const Se=f();let Nn=class extends W{constructor(t,r){super(t,"mat4",S.Draw,(n,i,a)=>n.setUniformMatrix4fv(t,r(i,a)))}};function Xa(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",ot):e.uniforms.add(new M("cameraPosition",(r,n)=>y(qt,n.camera.viewInverseTransposeMatrix[3]-r.origin[0],n.camera.viewInverseTransposeMatrix[7]-r.origin[1],n.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function qa(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new re("proj",(n,i)=>i.camera.projectionMatrix),new Nn("view",(n,i)=>Pe(xt,i.camera.viewMatrix,n.origin)),new M("localOrigin",n=>n.origin));const r=n=>y(qt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new re("proj",(n,i)=>i.camera.projectionMatrix),new re("view",(n,i)=>Pe(xt,i.camera.viewMatrix,r(i))),new b("localOrigin",(n,i)=>r(i)))}const xt=ae(),qt=f();function Fn(e){e.uniforms.add(new re("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function Ka(e){e.uniforms.add(new Or("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}let rt=class extends kr{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};pe([_e()],rt.prototype,"instancedDoublePrecision",void 0),pe([_e()],rt.prototype,"hasModelTransformation",void 0);const St=se();function Ya(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new re("model",a=>a.modelTransformation??Me)),e.vertex.uniforms.add(new ze("normalLocalOriginFromModel",a=>(mr(St,a.modelTransformation??Me),St)))),t.instanced&&n&&(e.attributes.add(T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.INSTANCEMODEL,"mat3"),e.attributes.add(T.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;n&&(i.include(Ft,t),i.uniforms.add(new M("viewOriginHi",(a,s)=>jr(y($e,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),$e)),new M("viewOriginLo",(a,s)=>Xr(y($e,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),$e)))),i.code.add(o`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===Dt.Normal&&(Fn(i),i.code.add(o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const $e=f();let Ge=class extends rt{};pe([_e({constValue:!0})],Ge.prototype,"hasSliceHighlight",void 0),pe([_e({constValue:!1})],Ge.prototype,"hasSliceInVertexProgram",void 0),pe([_e({constValue:S.Pass})],Ge.prototype,"pbrTextureBindType",void 0);function Dn(e){e.attributes.add(T.POSITION,"vec3"),e.vertex.code.add(o`vec3 positionModel() { return position; }`)}function On(e,t){e.include(Dn);const r=e.vertex;r.include(Ft,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new b("transformWorldFromViewTH",n=>n.transformWorldFromViewTH),new b("transformWorldFromViewTL",n=>n.transformWorldFromViewTL),new ze("transformViewFromCameraRelativeRS",n=>n.transformViewFromCameraRelativeRS),new re("transformProjFromView",n=>n.transformProjFromView),new Ot("transformWorldFromModelRS",n=>n.transformWorldFromModelRS),new M("transformWorldFromModelTH",n=>n.transformWorldFromModelTH),new M("transformWorldFromModelTL",n=>n.transformWorldFromModelTL)),r.code.add(o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new b("transformWorldFromViewTL",n=>n.transformWorldFromViewTL)),r.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let zn=class extends He{constructor(){super(...arguments),this.transformWorldFromViewTH=f(),this.transformWorldFromViewTL=f(),this.transformViewFromCameraRelativeRS=se(),this.transformProjFromView=ae()}},Hn=class extends He{constructor(){super(...arguments),this.transformWorldFromModelRS=se(),this.transformWorldFromModelTH=f(),this.transformWorldFromModelTL=f()}};function Un(e){if(e.length<xe)return Array.from(e);if(nt(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return hr(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}let Vn=class Kt{constructor(t,r,n){this.primitiveIndices=t,this._numIndexPerPrimitive=r,this.position=n,this._children=void 0,V(t.length>=1),V(n.size===3||n.size===4);const{data:i,size:a,indices:s}=n;V(s.length%this._numIndexPerPrimitive==0),V(s.length>=t.length*this._numIndexPerPrimitive);const c=t.length;let l=a*s[this._numIndexPerPrimitive*t[0]];j.clear(),j.push(l);const d=Oe(i[l],i[l+1],i[l+2]),u=fr(d);for(let h=0;h<c;++h){const p=this._numIndexPerPrimitive*t[h];for(let R=0;R<this._numIndexPerPrimitive;++R){l=a*s[p+R],j.push(l);let $=i[l];d[0]=Math.min($,d[0]),u[0]=Math.max($,u[0]),$=i[l+1],d[1]=Math.min($,d[1]),u[1]=Math.max($,u[1]),$=i[l+2],d[2]=Math.min($,d[2]),u[2]=Math.max($,u[2])}}this.bbMin=d,this.bbMax=u;const m=qe(f(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-d[0],u[1]-d[1]),u[2]-d[2]);let E=this.radius*this.radius;for(let h=0;h<j.length;++h){l=j.at(h);const p=i[l]-m[0],R=i[l+1]-m[1],$=i[l+2]-m[2],Y=p*p+R*R+$*$;if(Y<=E)continue;const oe=Math.sqrt(Y),le=.5*(oe-this.radius);this.radius=this.radius+le,E=this.radius*this.radius;const J=le/oe;m[0]+=p*J,m[1]+=R*J,m[2]+=$*J}this.center=m,j.clear()}getChildren(){if(this._children||pr(this.bbMin,this.bbMax)<=1)return this._children;const t=qe(f(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,n=new Uint8Array(r),i=new Array(8);for(let u=0;u<8;++u)i[u]=0;const{data:a,size:s,indices:c}=this.position;for(let u=0;u<r;++u){let m=0;const E=this._numIndexPerPrimitive*this.primitiveIndices[u];let h=s*c[E],p=a[h],R=a[h+1],$=a[h+2];for(let Y=1;Y<this._numIndexPerPrimitive;++Y){h=s*c[E+Y];const oe=a[h],le=a[h+1],J=a[h+2];oe<p&&(p=oe),le<R&&(R=le),J<$&&($=J)}p<t[0]&&(m|=1),R<t[1]&&(m|=2),$<t[2]&&(m|=4),n[u]=m,++i[m]}let l=0;for(let u=0;u<8;++u)i[u]>0&&++l;if(l<2)return;const d=new Array(8);for(let u=0;u<8;++u)d[u]=i[u]>0?new Uint32Array(i[u]):void 0;for(let u=0;u<8;++u)i[u]=0;for(let u=0;u<r;++u){const m=n[u];d[m][i[m]++]=this.primitiveIndices[u]}this._children=new Array;for(let u=0;u<8;++u)d[u]!==void 0&&this._children.push(new Kt(d[u],this._numIndexPerPrimitive,this.position));return this._children}static prune(){j.prune()}};const j=new Mt({deallocator:null});function Bn(e,t){if(!e)return!1;const{size:r,data:n,indices:i}=e;y(t,0,0,0),y(w,0,0,0);let a=0,s=0;for(let c=0;c<i.length-2;c+=3){const l=i[c]*r,d=i[c+1]*r,u=i[c+2]*r;y(_,n[l],n[l+1],n[l+2]),y(O,n[d],n[d+1],n[d+2]),y(be,n[u],n[u+1],n[u+2]);const m=Zr(_,O,be);m?(P(_,_,O),P(_,_,be),N(_,_,1/3*m),P(t,t,_),a+=m):(P(w,w,_),P(w,w,O),P(w,w,be),s+=3)}return(s!==0||a!==0)&&(a!==0?(N(t,t,1/a),!0):s!==0&&(N(t,w,1/s),!0))}function Gn(e,t){if(!e)return!1;const{size:r,data:n,indices:i}=e;y(t,0,0,0);let a=-1,s=0;for(let c=0;c<i.length;c++){const l=i[c]*r;a!==l&&(t[0]+=n[l],t[1]+=n[l+1],t[2]+=n[l+2],s++),a=l}return s>1&&N(t,t,1/s),s>0}function Wn(e,t,r){if(!e)return!1;y(r,0,0,0),y(w,0,0,0);let n=0,i=0;const{size:a,data:s,indices:c}=e,l=c.length-1,d=l+(t?2:0);for(let u=0;u<d;u+=2){const m=u<l?u+1:0,E=c[u<l?u:l]*a,h=c[m]*a;_[0]=s[E],_[1]=s[E+1],_[2]=s[E+2],O[0]=s[h],O[1]=s[h+1],O[2]=s[h+2],N(_,P(_,_,O),.5);const p=vr(_,O);p>0?(P(r,r,N(_,_,p)),n+=p):n===0&&(P(w,w,_),i++)}return n!==0?(N(r,r,1/n),!0):i!==0&&(N(r,w,1/i),!0)}const _=f(),O=f(),be=f(),w=f();let kn=class{constructor(t){this.channel=t,this.id=gr()}};function jn(e,t){return e==null&&(e=[]),e.push(t),e}function Xn(e,t){if(e==null)return null;const r=e.filter(n=>n!==t);return r.length===0?null:r}function rs(e,t,r,n,i){Ee[0]=e.get(t,0),Ee[1]=e.get(t,1),Ee[2]=e.get(t,2),qr(Ee,X,3),r.set(i,0,X[0]),n.set(i,0,X[1]),r.set(i,1,X[2]),n.set(i,1,X[3]),r.set(i,2,X[4]),n.set(i,2,X[5])}const Ee=f(),X=new Float32Array(6);let ns=class Qt extends zt{constructor(t,r,n=null,i=fe.Mesh,a=null,s=-1){super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=a,this.edgeIndicesLength=s,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[c,l]of r)this._attributes.set(c,{...l,indices:Kr(l.indices)}),c===T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(c).indices.length:this.edgeIndicesLength)}instantiate(t={}){const r=new Qt(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((n,i)=>{n.exclusive=!1,r._attributes.set(i,n)}),r._boundingInfo=this._boundingInfo,r.transformation=t.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(t){let r=this._attributes.get(t);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:Un(r.data)},this._attributes.set(t,r)),r}setAttributeData(t,r){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:r})}get indexCount(){const t=this._attributes.values().next().value.indices;return(t==null?void 0:t.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===fe.Mesh?this._computeAttachmentOriginTriangles(t):this.type===fe.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(this._transformation!=null&&Le(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const r=this.attributes.get(T.POSITION);return Bn(r,t)}_computeAttachmentOriginLines(t){const r=this.attributes.get(T.POSITION);return Wn(r,qn(this.material.parameters,r),t)}_computeAttachmentOriginPoints(t){const r=this.attributes.get(T.POSITION);return Gn(r,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(T.POSITION);if(!t||t.indices.length===0)return null;const r=this.type===fe.Mesh?3:1;V(t.indices.length%r==0,"Indexing error: "+t.indices.length+" not divisible by "+r);const n=Qr(t.indices.length/r);return new Vn(n,r,t)}get transformation(){return this._transformation??Me}set transformation(t){this._transformation=t&&t!==Me?_r(t):null}addHighlight(){const t=new kn(Wr.Highlight);return this.highlights=jn(this.highlights,t),t}removeHighlight(t){this.highlights=Xn(this.highlights,t)}};function qn(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}var x,$t;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(x||(x={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}($t||($t={}));class ct{constructor(t){this.field=t}}let Kn=class extends ct{constructor(t){super(t),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[x.Undefined,x.Undefined,x.Undefined]}},Qn=class extends ct{constructor(t){super(t),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},Yn=class extends ct{constructor(t){super(t),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}};class Jn{}function ue(e){return e!=null}function ee(e){return typeof e=="number"}function Ue(e){return typeof e=="string"}function Zn(e){return e==null||Ue(e)}function g(e,t){e&&e.push(t)}function ei(e,t,r,n=ae()){const i=e||0,a=t||0,s=r||0;return i!==0&&xr(n,n,-i/180*Math.PI),a!==0&&Sr(n,n,a/180*Math.PI),s!==0&&$r(n,n,s/180*Math.PI),n}function H(e,t,r,n,i){var c;const a=e.minSize,s=e.maxSize;if(e.useSymbolValue){const l=n.symbolSize[r];return t.minSize[r]=l,t.maxSize[r]=l,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=x.DefinedSize,!0}if(ue(e.field))return ue(e.stops)?e.stops.length===2&&ee(e.stops[0].size)&&ee(e.stops[1].size)?(bt(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=x.DefinedSize,!0):(g(i,"Could not convert size info: stops only supported with 2 elements"),!1):ee(a)&&ee(s)&&ue(e.minDataValue)&&ue(e.maxDataValue)?(bt(a,s,e.minDataValue,e.maxDataValue,t,r),t.type[r]=x.DefinedSize,!0):e.valueUnit==="unknown"?(g(i,"Could not convert size info: proportional size not supported"),!1):dt[e.valueUnit]!=null?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/dt[e.valueUnit],t.type[r]=x.DefinedSize,!0):(g(i,"Could not convert size info: scale-dependent size not supported"),!1);if(!ue(e.field)){if((c=e.stops)!=null&&c[0]&&ee(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=x.DefinedSize,!0;if(ee(a))return t.minSize[r]=a,t.maxSize[r]=a,t.offset[r]=a,t.factor[r]=0,t.type[r]=x.DefinedSize,!0}return g(i,"Could not convert size info: unsupported variant of sizeInfo"),!1}function bt(e,t,r,n,i,a){const s=Math.abs(n-r)>0?(t-e)/(n-r):0;i.minSize[a]=s>0?e:t,i.maxSize[a]=s>0?t:e,i.offset[a]=e-r*s,i.factor[a]=s}function ti(e,t,r,n){if(e.normalizationField||e.valueRepresentation)return g(n,"Could not convert size info: unsupported property"),null;if(!Zn(e.field))return g(n,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return g(n,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new Kn(e.field);let i;switch(e.axis){case"width":return i=H(e,t.size,0,r,n),i?t:null;case"height":return i=H(e,t.size,2,r,n),i?t:null;case"depth":return i=H(e,t.size,1,r,n),i?t:null;case"width-and-depth":return i=H(e,t.size,0,r,n),i&&H(e,t.size,1,r,n),i?t:null;case null:case void 0:case"all":return i=H(e,t.size,0,r,n),i=i&&H(e,t.size,1,r,n),i=i&&H(e,t.size,2,r,n),i?t:null;default:return g(n,`Could not convert size info: unknown axis "${e.axis}""`),null}}function ri(e,t,r){for(let i=0;i<3;++i){let a=t.unitInMeters;e.type[i]===x.DefinedSize&&(a*=t.modelSize[i],e.type[i]=x.DefinedScale),e.minSize[i]=e.minSize[i]/a,e.maxSize[i]=e.maxSize[i]/a,e.offset[i]=e.offset[i]/a,e.factor[i]=e.factor[i]/a}let n;if(e.type[0]!==x.Undefined)n=0;else if(e.type[1]!==x.Undefined)n=1;else{if(e.type[2]===x.Undefined)return g(r,"No size axis contains a valid size or scale"),!1;n=2}for(let i=0;i<3;++i)e.type[i]===x.Undefined&&(e.minSize[i]=e.minSize[n],e.maxSize[i]=e.maxSize[n],e.offset[i]=e.offset[n],e.factor[i]=e.factor[n],e.type[i]=e.type[n]);return!0}function Et(e,t,r){e[4*t]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function ni(e,t,r){if(e.normalizationField)return g(r,"Could not convert color info: unsupported property"),null;if(Ue(e.field)){if(!e.stops)return g(r,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return g(r,"Could not convert color info: too many color stops"),null;t.color=new Qn(e.field);const n=e.stops;for(let i=0;i<8;++i){const a=n[Math.min(i,n.length-1)];t.color.values[i]=a.value,Et(t.color.colors,i,a.color)}}}else{if(!(e.stops&&e.stops.length>=0))return g(r,"Could not convert color info: no field and no colors/stops"),null;{const n=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)t.color.values[i]=1/0,Et(t.color.colors,i,n)}}return t}function ii(e,t,r){if(e.normalizationField)return g(r,"Could not convert opacity info: unsupported property"),null;if(Ue(e.field)){if(!e.stops)return g(r,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return g(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new Yn(e.field);const n=e.stops;for(let i=0;i<8;++i){const a=n[Math.min(i,n.length-1)];t.opacity.values[i]=a.value,t.opacity.opacityValues[i]=a.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return g(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const n=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)t.opacity.values[i]=1/0,t.opacity.opacityValues[i]=n}}return t}function We(e,t,r){const n=r===2&&e.rotationType==="arithmetic";t.offset[r]=n?90:0,t.factor[r]=n?-1:1,t.type[r]=1}function ai(e,t,r){if(!Ue(e.field))return g(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return g(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return We(e,t.rotation,0),t;case"roll":return We(e,t.rotation,1),t;case null:case void 0:case"heading":return We(e,t.rotation,2),t;default:return g(r,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}let os=class{constructor(t,r=[1,1,1],n=[1,1,1],i=1,a=[0,0,0],s=[1,1,1],c=[0,0,0]){this.supports=t,this.modelSize=r,this.symbolSize=n,this.unitInMeters=i,this.anchor=a,this.scale=s,this.rotation=c}};function Yt(e,t,r){if(!e)return null;const n=e.reduce((i,a)=>{if(!i)return i;if(a.valueExpression)return g(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(a.type){case"size":return t.supports.size?ti(a,i,t,r):i;case"color":return t.supports.color?ni(a,i,r):i;case"opacity":return t.supports.opacity?ii(a,i,r):null;case"rotation":return t.supports.rotation?ai(a,i,r):i;default:return null}},new Jn);return!(e.length>0&&n)||n.size||n.color||n.opacity||n.rotation?n!=null&&n.size&&!ri(n.size,t,r)?null:n:null}let si=class{constructor(t,r,n){this.visualVariables=t,this.materialParameters=r,this.requiresShaderTransformation=n}};function us(e,t){if(!e||Yr.TESTS_DISABLE_FAST_UPDATES)return null;const r=Yt(e.visualVariables,t);return r?new si(r,Zt(r,t),!!r.size):null}function ds(e,t,r){if(!t||!e)return!1;const n=e.visualVariables,i=Yt(t.visualVariables,r);return!!i&&!!(ye(n.size,i.size,"size")&&ye(n.color,i.color,"color")&&ye(n.rotation,i.rotation,"rotation")&&ye(n.opacity,i.opacity,"opacity"))&&(e.visualVariables=i,e.materialParameters=Zt(i,r),e.requiresShaderTransformation=!!i.size,!0)}function ye(e,t,r){if(!!e!=!!t||e&&e.field!==(t==null?void 0:t.field))return!1;if(e&&r==="rotation"){const n=e,i=t;for(let a=0;a<3;a++)if(n.type[a]!==i.type[a]||n.offset[a]!==i.offset[a]||n.factor[a]!==i.factor[a])return!1}return!0}class Jt extends He{constructor(t){super(),this.vvSize=(t==null?void 0:t.size)??null,this.vvColor=(t==null?void 0:t.color)??null,this.vvOpacity=(t==null?void 0:t.opacity)??null}}function Zt(e,t){const r=new Jt(e);return r.vvSize&&(r.vvSymbolAnchor=t.anchor,Tr(Te),ei(t.rotation[2],t.rotation[0],t.rotation[1],Te),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||se(),Ar(r.vvSymbolRotationMatrix,Te)),r}function ms(e,t,r){if(!e.vvSize)return r;br(U,r);const n=e.vvSymbolRotationMatrix;Er(Te,n[0],n[1],n[2],0,n[3],n[4],n[5],0,n[6],n[7],n[8],0,0,0,0,1),yr(U,U,Te);for(let i=0;i<3;++i){const a=e.vvSize.offset[i]+t[0]*e.vvSize.factor[i];yt[i]=st(a,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return Rr(U,U,yt),Pe(U,U,e.vvSymbolAnchor),U}function hs(e,t,r){if(!t.vvSize)return y(e,1,1,1),e;for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+r[0]*t.vvSize.factor[n];e[n]=st(i,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return e}function fs(e,t){const r=e==null?0:t.attributes[e];return typeof r=="number"&&isFinite(r)?r:0}const U=ae(),yt=f(),Te=ae();let ps=class extends He{constructor(t){super(),this.slicePlaneLocalOrigin=t}};function gs(e,t){er(e,t,new b("slicePlaneOrigin",(r,n)=>ir(t,r,n)),new b("slicePlaneBasis1",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis1)}),new b("slicePlaneBasis2",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis2)}))}function _s(e,t){er(e,t,new M("slicePlaneOrigin",(r,n)=>ir(t,r,n)),new M("slicePlaneBasis1",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis1)}),new M("slicePlaneBasis2",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis2)}))}function er(e,t,...r){if(!t.hasSlicePlane){const s=o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(s),void e.fragment.code.add(s)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const n=o`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?o`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(n),e.fragment.code.add(n),e.fragment.code.add(a)}function tr(e,t,r){return e.instancedDoublePrecision?y(oi,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function rr(e,t){return e!=null?Lt(De,t.origin,e):t.origin}function nr(e,t,r){return e.hasSliceTranslatedView?t!=null?Pe(li,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function ir(e,t,r){if(r.slicePlane==null)return ot;const n=tr(e,t,r),i=rr(n,r.slicePlane),a=nr(e,n,r);return a!=null?Le(De,i,a):i}function Fe(e,t,r,n){if(n==null||r.slicePlane==null)return ot;const i=tr(e,t,r),a=rr(i,r.slicePlane),s=nr(e,i,r);return s!=null?(P(de,n,a),Le(De,a,s),Le(de,de,s),Lt(de,de,De)):n}const oi=f(),De=f(),de=f(),li=ae();function Ts(e,t){const r=t.output===Dt.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),n?e.attributes.add(T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(o`
     void forwardObjectAndLayerIdColor() {
      ${r?n?o`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o``} }`),e.fragment.code.add(o`
      void outputObjectAndLayerIdColor() {
        ${r?o`fragColor = objectAndLayerIdColorVarying;`:o``} }`)}let ci=class extends W{constructor(t,r,n){super(t,"vec4",S.Pass,(i,a,s)=>i.setUniform4fv(t,r(a,s)),n)}},ui=class extends W{constructor(t,r,n){super(t,"float",S.Pass,(i,a,s)=>i.setUniform1fv(t,r(a,s)),n)}},Ss=class extends Jt{constructor(){super(...arguments),this.renderOccluded=Jr.Occlude,this.isDecoration=!1}};const ke=8;function bs(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new b("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new b("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new b("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new b("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new ze("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new b("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",ke),r.uniforms.add(new ui("vvColorValues",i=>i.vvColor.values,ke),new ci("vvColorColors",i=>i.vvColor.colors,ke)),r.code.add(o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(o`vec4 vvColor() { return vec4(1.0); }`)}const Es=.1,ys=.001,Rs=Ht(B.SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA),di=Ht(B.ONE,B.ZERO,B.ONE,B.ONE_MINUS_SRC_ALPHA);function ws(e){return e===Q.FrontFace?null:di}function Cs(e){return e===Q.FrontFace?en:null}const Is=5e5,mi={factor:-1,units:-2};function Ps(e){return e?mi:null}function Ms(e,t=F.LESS){return e===Q.NONE||e===Q.FrontFace?t:F.LEQUAL}function Ls(e){return e===Q.ColorAlpha?{buffers:[pt.COLOR_ATTACHMENT0,pt.COLOR_ATTACHMENT1]}:null}function Ns(e,t){switch(t.normalType){case ce.Attribute:case ce.Compressed:e.include(zr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ot("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ze("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case ce.Ground:e.include(On,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(o`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?o`normalize(vPositionWorldCameraRelative);`:o`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case ce.ScreenDerivative:e.vertex.code.add(o`void forwardNormal() {}`);break;default:it(t.normalType);case ce.COUNT:}}let Fs=class extends zn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=se()}};class Os extends Hn{constructor(){super(...arguments),this.transformNormalGlobalFromModel=se(),this.toMapSpace=Nt()}}const zs={func:F.LESS},Hs={func:F.ALWAYS},Us={mask:255},Vs={mask:0},Bs=e=>({function:{func:F.NOTEQUAL,ref:e,mask:e},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.KEEP}}),Gs=e=>({function:{func:F.ALWAYS,ref:e,mask:e},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE}}),Ws={function:{func:F.ALWAYS,ref:G.OutlineVisualElementMask,mask:G.OutlineVisualElementMask},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.ZERO}},ks={function:{func:F.ALWAYS,ref:G.OutlineVisualElementMask,mask:G.OutlineVisualElementMask},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE}},js={function:{func:F.EQUAL,ref:G.OutlineVisualElementMask,mask:G.OutlineVisualElementMask},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.KEEP}},Xs={function:{func:F.NOTEQUAL,ref:G.OutlineVisualElementMask,mask:G.OutlineVisualElementMask},operation:{fail:A.KEEP,zFail:A.KEEP,zPass:A.KEEP}};let qs=class extends W{constructor(t,r){super(t,"int",S.Pass,(n,i,a)=>n.setUniform1i(t,r(i,a)))}};const Qs=3e5,Ys=5e5;function Js(e){e.fragment.uniforms.add(new cn("projInfo",(t,r)=>hi(r.camera))),e.fragment.uniforms.add(new Ut("zScale",(t,r)=>fi(r.camera))),e.fragment.code.add(o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function hi(e){const t=e.projectionMatrix;return t[11]===0?mt(Rt,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):mt(Rt,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const Rt=Nt();function fi(e){return e.projectionMatrix[11]===0?je(wt,0,1):je(wt,1,0)}const wt=It();function pi(e){const t=e.fragment.code;t.add(o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Zs(e,t){const r=e.fragment.code;e.include(Wt),t.pbrMode!==C.Normal&&t.pbrMode!==C.Schematic&&t.pbrMode!==C.Simplified&&t.pbrMode!==C.TerrainWithWater||(r.add(o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==C.Normal&&t.pbrMode!==C.Schematic||(e.include(pi),r.add(o`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function eo(e,t){const r=e.fragment.code;e.include(Wt),r.add(o`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(o`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(o`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(o`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(o`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}function vi(){return Ct??(Ct=(async()=>{const e=await wr(()=>import("./basis_transcoder-B40h2JNH.js"),__vite__mapDeps([])),t=await e.default({locateFile:r=>Cr(`esri/libs/basisu/${r}`)});return t.initializeBasis(),t})()),Ct}let Ct;var K;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(K||(K={}));let L=null,Re=null;async function ar(){return Re==null&&(Re=vi(),L=await Re),Re}function gi(e,t){if(L==null)return e.byteLength;const r=new L.BasisFile(new Uint8Array(e)),n=or(r)?sr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),n}function _i(e,t){if(L==null)return e.byteLength;const r=new L.KTX2File(new Uint8Array(e)),n=lr(r)?sr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),n}function sr(e,t,r,n,i){const a=Vr(t?z.COMPRESSED_RGBA8_ETC2_EAC:z.COMPRESSED_RGB8_ETC2),s=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*n*a*s)}function or(e){return e.getNumImages()>=1&&!e.isUASTC()}function lr(e){return e.getFaces()>=1&&e.isETC1S()}async function Ti(e,t,r){L==null&&(L=await ar());const n=new L.BasisFile(new Uint8Array(r));if(!or(n))return null;n.startTranscoding();const i=cr(e,t,n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),(a,s)=>n.getImageTranscodedSizeInBytes(0,a,s),(a,s,c)=>n.transcodeImage(c,0,a,s,0,0));return n.close(),n.delete(),i}async function Ai(e,t,r){L==null&&(L=await ar());const n=new L.KTX2File(new Uint8Array(r));if(!lr(n))return null;n.startTranscoding();const i=cr(e,t,n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),(a,s)=>n.getImageTranscodedSizeInBytes(a,0,0,s),(a,s,c)=>n.transcodeImage(c,a,0,0,s,0,-1,-1));return n.close(),n.delete(),i}function cr(e,t,r,n,i,a,s,c){const{compressedTextureETC:l,compressedTextureS3TC:d}=e.capabilities,[u,m]=l?n?[K.ETC2_RGBA,z.COMPRESSED_RGBA8_ETC2_EAC]:[K.ETC1_RGB,z.COMPRESSED_RGB8_ETC2]:d?n?[K.BC3_RGBA,z.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[K.BC1_RGB,z.COMPRESSED_RGB_S3TC_DXT1_EXT]:[K.RGBA32,te.RGBA],E=t.hasMipmap?r:Math.min(1,r),h=[];for(let p=0;p<E;p++)h.push(new Uint8Array(s(p,u))),c(p,u,h[p]);return t.internalFormat=m,t.hasMipmap=h.length>1,t.samplingMode=t.hasMipmap?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,t.width=i,t.height=a,new ve(e,t,{type:"compressed",levels:h})}const we=()=>Pt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),xi=542327876,Si=131072,$i=4;function ut(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function bi(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Ei=ut("DXT1"),yi=ut("DXT3"),Ri=ut("DXT5"),wi=31,Ci=0,Ii=1,Pi=2,Mi=3,Li=4,Ni=7,Fi=20,Di=21;function Oi(e,t,r){const n=zi(r,t.hasMipmap??!1);if(n==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:s,height:c}=n;return t.samplingMode=i.levels.length>1?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=s,t.height=c,new ve(e,t,i)}function zi(e,t){const r=new Int32Array(e,0,wi);if(r[Ci]!==xi)return we().error("Invalid magic number in DDS header"),null;if(!(r[Fi]&$i))return we().error("Unsupported format, must contain a FourCC code"),null;const n=r[Di];let i,a;switch(n){case Ei:i=8,a=z.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case yi:i=16,a=z.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ri:i=16,a=z.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return we().error("Unsupported FourCC code:",bi(n)),null}let s=1,c=r[Li],l=r[Mi];(3&c||3&l)&&(we().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let m,E;r[Pi]&Si&&t!==!1&&(s=Math.max(1,r[Ni]));let h=r[Ii]+4;const p=[];for(let R=0;R<s;++R)E=(c+3>>2)*(l+3>>2)*i,m=new Uint8Array(e,h,E),p.push(m),h+=E,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:d,height:u}}class to extends zt{get parameters(){return this._parameters}constructor(t,r){super(),this._data=t,this.type=fe.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ir,this._parameters={...Ui,...r},this._startPreload(t)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(t){t!=null&&(t instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(t,r),this._startPreloadVideoElement(t)):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(ht(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const n=()=>{t.removeEventListener("canplay",n),t.play()};t.addEventListener("canplay",n)}}}_startPreloadImageElement(t){Pr(t.src)||ht(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}_createDescriptor(t){const r=new Br;return r.wrapMode=this._parameters.wrap??Ke.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?t.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var t;return((t=this._glTexture)==null?void 0:t.usedMemory)||Hi(this._data,this._parameters)}load(t){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ve(t,this._createDescriptor(t),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(t,r):r instanceof Image?this._loadFromImageElement(t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r):(me(r)||he(r))&&this._parameters.encoding===ge.DDS_ENCODING?this._loadFromDDSData(t,r):(me(r)||he(r))&&this._parameters.encoding===ge.KTX2_ENCODING?this._loadFromKTX2(t,r):(me(r)||he(r))&&this._parameters.encoding===ge.BASIS_ENCODING?this._loadFromBasis(t,r):he(r)?this._loadFromPixelData(t,r):me(r)?this._loadFromPixelData(t,new Uint8Array(r)):null)}_frameUpdate(t,r){return this._glTexture==null||t.readyState<Ae.HAVE_CURRENT_DATA||r===t.currentTime?r:(this._glTexture.setData(t),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),t.currentTime)}_loadFromDDSData(t,r){return this._glTexture=Oi(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>Ai(t,this._createDescriptor(t),r).then(n=>(this._glTexture=n,n)))}_loadFromBasis(t,r){return this._loadAsync(()=>Ti(t,this._createDescriptor(t),r).then(n=>(this._glTexture=n,n)))}_loadFromPixelData(t,r){V(this._parameters.width>0&&this._parameters.height>0);const n=this._createDescriptor(t);return n.pixelFormat=this._parameters.components===1?te.LUMINANCE:this._parameters.components===3?te.RGB:te.RGBA,n.width=this._parameters.width??0,n.height=this._parameters.height??0,this._glTexture=new ve(t,n,r),this._glTexture}_loadFromURL(t,r){return this._loadAsync(async n=>{const i=await tn(r,{signal:n});return ft(n),this._loadFromImage(t,i)})}_loadFromImageElement(t,r){return r.complete?this._loadFromImage(t,r):this._loadAsync(async n=>{const i=await Mr(r,r.src,!1,n);return ft(n),this._loadFromImage(t,i)})}_loadFromVideoElement(t,r){return r.readyState>=Ae.HAVE_CURRENT_DATA?this._loadFromImage(t,r):this._loadFromVideoElementAsync(t,r)}_loadFromVideoElementAsync(t,r){return this._loadAsync(n=>new Promise((i,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Fr(d)},c=()=>{r.readyState>=Ae.HAVE_CURRENT_DATA&&(s(),i(this._loadFromImage(t,r)))},l=u=>{s(),a(u||new at("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Lr(n,()=>l(Nr()))}))}_loadFromImage(t,r){let n=r;if(!(n instanceof HTMLVideoElement)){const{maxTextureSize:s}=t.parameters;n=this._parameters.downsampleUncompressed?gn(n,s):_n(n,s)}const i=ur(n);this._parameters.width=i.width,this._parameters.height=i.height;const a=this._createDescriptor(t);return a.pixelFormat=this._parameters.components===3?te.RGB:te.RGBA,a.width=i.width,a.height=i.height,this._glTexture=new ve(t,a,n),this._glTexture}_loadAsync(t){const r=new AbortController;this._loadingController=r;const n=t(r.signal);this._loadingPromise=n;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===n&&(this._loadingPromise=null)};return n.then(i,i),n}unload(){if(this._glTexture=Xe(this._glTexture),this._loadingController!=null){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}function Hi(e,t){if(e==null)return 0;if(me(e)||he(e))return t.encoding===ge.KTX2_ENCODING?_i(e,!!t.mipmap):t.encoding===ge.BASIS_ENCODING?gi(e,!!t.mipmap):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ur(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}function ur(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Ae;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Ae||(Ae={}));const Ui={wrap:{s:Ke.REPEAT,t:Ke.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};export{Ya as $,Rs as A,C as B,qs as C,rn as D,Tt as E,bs as F,Ns as G,Ts as H,ns as I,An as J,wa as K,nn as L,Js as M,to as N,mi as O,_s as P,Ys as Q,gt as R,Qs as S,Ln as T,Zs as U,Wt as V,on as W,ln as X,ca as Y,Ma as Z,Dn as _,qa as a,Pa as a0,Fs as a1,Ms as a2,Us as a3,ks as a4,Ws as a5,Ps as a6,Os as a7,Is as a8,Wa as a9,os as aA,rs as aB,ms as aC,sa as aD,ke as aE,ci as aF,la as aG,et as aH,Sn as aI,Bs as aJ,Tn as aK,gs as aL,Gs as aM,Vn as aN,Da as aa,aa as ab,kn as ac,jn as ad,Xn as ae,eo as af,ui as ag,Ka as ah,Hs as ai,Xs as aj,Vs as ak,js as al,zs as am,Ss as an,ya as ao,Ra as ap,_t as aq,xn as ar,ps as as,Nn as at,zn as au,Hn as av,hs as aw,fs as ax,us as ay,ds as az,cn as b,Fa as c,I as d,Na as e,Xa as f,Q as g,ys as h,Aa as i,ba as j,ws as k,Cs as l,Ge as m,Ca as n,ma as o,Fn as p,Ut as q,Sa as r,Ls as s,na as t,Ce as u,On as v,gn as w,Es as x,ar as y,ia as z};
