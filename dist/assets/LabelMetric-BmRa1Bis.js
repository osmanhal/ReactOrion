import{A as T,J as U,ad as b}from"./index-BfC8i6jT.js";import"./enums-BRXbslMp.js";import{s as x,e as L,c as B}from"./Texture-Bq-Yp-pO.js";import{U as f,C as c}from"./enums-BlUEVwJR.js";import"./Program-C3FgCIV9.js";import{t as Y}from"./VertexElementDescriptor-BOD-G50G.js";import{i as R}from"./BoundingBox-Dn8AJClK.js";let d=class p{constructor(t,n,e,s,i,o,a){this.instanceId=t,this.textureKey=n,this.indexStart=e,this.indexCount=s,this.vertexStart=i,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new p(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,n,e,s,i,o,a,u){t.push(n),t.push(e),t.push(s),t.push(i),t.push(o),t.push(a),t.push(u)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const n=t.readInt32(),e=t.readInt32(),s=t.readInt32(),i=t.readInt32(),o=t.readInt32(),a=t.readInt32(),u=t.readInt32();return new p(n,e,s,i,o,a,u)}};d.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function S(r,t){if(t!==null){r.push(t.length);for(const n of t)n.serialize(r);return r}r.push(0)}function I(r,t,n){const e=r.readInt32(),s=new Array(e);for(let i=0;i<s.length;i++)s[i]=t.deserialize(r,n);return s}let P=class _{constructor(t,n){this.id=t,this.sortKey=n,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),S(t,this.records),t}static deserialize(t){const n=t.readInt32(),e=t.readF32(),s=new _(n,e);return s.records=I(t,d)??[],s}};P.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+d.byteSizeHint;const F=()=>U.getLogger("esri.views.2d.engine.webgl.Utils");function J(r){switch(r){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void F().error(new T("webgl-utils",`Unable to handle type ${r}`))}}function W(r){switch(r){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void F().error(new T("webgl-utils",`Unable to handle type ${r}`))}}function k(r){var n;const t={};for(const e in r){const s=r[e];let i=0;t[e]=s.map(o=>{const a=new Y(o.name,o.count,o.type,i,0,o.normalized||!1);return i+=o.count*x(o.type),a}),(n=t[e])==null||n.forEach(o=>o.stride=i)}return t}const v=r=>{const t=new Map;for(const n in r)for(const e of r[n])t.set(e.name,e.location);return t},C=r=>{const t={};for(const n in r){const e=r[n];t[n]=e!=null&&e.length?e[0].stride:0}return t},E=new Map,Q=(r,t)=>{if(!E.has(r)){const n=k(t),e={strides:C(n),bufferLayouts:n,attributes:v(t)};E.set(r,e)}return E.get(r)},Z=r=>r.includes("data:image/svg+xml");function tt(r){const t=[];for(let n=0;n<r.length;n++)t.push(r.charCodeAt(n));return t}function et(r,t,n){const e=new L(t.width,t.height);return e.dataType=t.dataType,t.depth&&(e.depth=t.depth),t.flipped&&(e.flipped=t.flipped),t.hasMipmap&&(e.hasMipmap=t.hasMipmap),e.internalFormat=t.internalFormat,t.isImmutable&&(e.isImmutable=t.isImmutable),t.isOpaque&&(e.isOpaque=t.isOpaque),t.maxAnisotropy&&(e.maxAnisotropy=t.maxAnisotropy),e.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(e.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(e.samplingMode=t.samplingMode),t.target&&(e.target=t.target),e.uniform=t.uniform,t.unpackAlignment&&(e.unpackAlignment=t.unpackAlignment),t.wrapMode&&(e.wrapMode=t.wrapMode),new B(r,e,n)}function nt(r){return"url"in r&&"urlHash"in r?{...r,url:""}:r}const M=new Float32Array(1),O=new Uint32Array(M.buffer);function z(r){return M[0]=r,O[0]}function rt(r,t){return 65535&r|t<<16}function y(r){const t=z(r),n=t>>>31;let e=t>>>23&255,s=8388607&t;return e-=127,e>15?n<<15|31744:e<-25?0:(e<-14&&(s+=8388608,s/=2**(-14-e),e=-15),e+=15,s/=8192,s=H(s,1023),n<<15|e<<10|s)}function H(r,t){const n=Math.floor(r),e=r-n;return n<t&&(e>.5||e===.5&&n%2==1)?n+1:n}function m(r){let t=r>>>15,n=r>>10&31,e=1023&r;return t=t?-1:1,n-=15,e/=1024,n>-15?e+=1:n=-14,t*2**n*e}function st(r){const t=r.map(({name:n,count:e,type:s})=>`${n}.${e}.${s}`).join(",");return b(t)}function l(r,t,n,e,s,i,o){if(r.primitiveName===t){for(const a in r)if(a===n){let u=e==null?void 0:e.readWithDefault(s,i,r[a]&&o);return r.type==="text"&&(u=u.toString()),void(r[a]=u)}}if("type"in r&&r.type!=null)switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(r.symbolLayers)for(const a of r.symbolLayers)l(a,t,n,e,s,i,o);break;case"CIMHatchFill":r.lineSymbol&&l(r.lineSymbol,t,n,e,s,i,o);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(r.type==="CIMVectorMarker"&&r.markerGraphics)for(const a of r.markerGraphics)l(a,t,n,e,s,i,o),l(a.symbol,t,n,e,s,i,o)}}const G=400;function it(r){const t=r.width;return r.effects!=null?G:Math.max(1.25*t,8)}function ot(r,t,n,e){const s=n.packPrecisionFactor??1;switch(n.type){case c.BYTE:if(n.count===1)r.setInt8(e+n.offset,t*s);else for(let i=0;i<n.count;i++){const o=i*Int8Array.BYTES_PER_ELEMENT;r.setInt8(e+n.offset+o,t[i]*s)}break;case c.UNSIGNED_BYTE:if(n.count===1)r.setUint8(e+n.offset,t*s);else for(let i=0;i<n.count;i++){const o=i*Uint8Array.BYTES_PER_ELEMENT;r.setUint8(e+n.offset+o,t[i]*s)}break;case c.SHORT:if(n.count===1)r.setInt16(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const o=i*Int16Array.BYTES_PER_ELEMENT;r.setInt16(e+n.offset+o,t[i]*s,!0)}break;case c.UNSIGNED_SHORT:if(n.count===1)r.setUint16(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(e+n.offset+o,t[i]*s,!0)}break;case c.INT:if(n.count===1)r.setInt32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const o=i*Int32Array.BYTES_PER_ELEMENT;r.setInt32(e+n.offset+o,t[i]*s,!0)}break;case c.UNSIGNED_INT:if(n.count===1)r.setUint32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const o=i*Uint32Array.BYTES_PER_ELEMENT;r.setUint32(e+n.offset+o,t[i]*s,!0)}break;case c.FLOAT:if(n.count===1)r.setFloat32(e+n.offset,t*s,!0);else for(let i=0;i<n.count;i++){const o=i*Float32Array.BYTES_PER_ELEMENT;r.setFloat32(e+n.offset+o,t[i]*s,!0)}break;case c.HALF_FLOAT:if(n.count===1)r.setUint16(e+n.offset,y(t*s),!0);else for(let i=0;i<n.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(e+n.offset+o,y(t[i]*s),!0)}}}function at(r,t,n){switch(t.type){case c.BYTE:{if(t.count===1)return r.getInt8(n+t.offset);const e=[];for(let s=0;s<t.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;e.push(r.getInt8(n+t.offset+i))}return e}case c.UNSIGNED_BYTE:{if(t.count===1)return r.getUint8(n+t.offset);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;e.push(r.getUint8(n+t.offset+i))}return e}case c.SHORT:{if(t.count===1)return r.getInt16(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;e.push(r.getInt16(n+t.offset+i,!0))}return e}case c.UNSIGNED_SHORT:{if(t.count===1)return r.getUint16(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;e.push(r.getUint16(n+t.offset+i,!0))}return e}case c.INT:{if(t.count===1)return r.getInt32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;e.push(r.getInt32(n+t.offset+i,!0))}return e}case c.UNSIGNED_INT:{if(t.count===1)return r.getUint32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;e.push(r.getUint32(n+t.offset+i,!0))}return e}case c.FLOAT:{if(t.count===1)return r.getFloat32(n+t.offset,!0);const e=[];for(let s=0;s<t.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;e.push(r.getFloat32(n+t.offset+i,!0))}return e}case c.HALF_FLOAT:{if(t.count===1)return m(r.getUint16(n+t.offset,!0));const e=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;e.push(m(r.getUint16(n+t.offset+i,!0)))}return e}}}class g{constructor(t,n,e,s,i,o,a,u,h=[]){this.entityTexel=t,this.anchorX=n,this.anchorY=e,this.directionX=s,this.directionY=i,this.maxScale=o,this.minScale=a,this.referenceBounds=u,this.bounds=h}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),S(t,this.bounds)}static deserialize(t){const n=t.readInt32(),e=t.readF32(),s=t.readF32(),i=t.readF32(),o=t.readF32(),a=t.readF32(),u=t.readF32(),h=t.readF32(),A=t.readF32(),w=t.readF32(),N=I(t,R)??[];return new g(n,e,s,i,o,a,u,{size:h,offsetX:A,offsetY:w},N)}}export{nt as M,et as T,st as a,Q as b,J as c,W as d,at as e,rt as f,ot as g,it as i,tt as j,I as n,l as o,g as r,P as s,d as t,Z as y};
