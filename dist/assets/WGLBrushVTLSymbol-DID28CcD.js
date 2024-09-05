import{dD as tt,ax as Y,ac as et,ab as it}from"./index-BfC8i6jT.js";import{r as at}from"./vec4f32-CjrfB-0a.js";import{Y as w,$ as H,Z as q}from"./definitions-ByNBSgP9.js";import{c as nt}from"./BufferObject-CLFFt1Oe.js";import{L as k,O,E as N,F as rt,C as b}from"./enums-BlUEVwJR.js";import{o as ot}from"./VertexArrayObject-DJNUJ_t_.js";import{r as G,l as A,n as B}from"./StyleDefinition-BK3ROBTO.js";import{e as Q}from"./config-MDUrh2eL.js";let $=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(a,e){}draw(a,e,t){}drawMany(a,e,t){for(const n of e)n.visible&&this.draw(a,n,t)}},Ut=class extends ${constructor(){super(...arguments),this._color=at(1,0,0,1),this._patternMatrix=tt(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(a,e){const{context:t,painter:n,requestRender:l,allowDelayedRender:_}=a;this._loadWGLResources(a);const f=a.displayLevel,o=a.styleLayer,U=o.backgroundMaterial,d=n.vectorTilesMaterialManager,P=o.getPaintValue("background-color",f),p=o.getPaintValue("background-opacity",f),S=o.getPaintValue("background-pattern",f),y=S!==void 0,v=1|window.devicePixelRatio,M=a.spriteMosaic;let x,E;const c=v>H?2:1,g=this._programOptions;g.pattern=y;const r=d.getMaterialProgram(t,U,g);if(!_||l==null||r.compiled){if(t.bindVAO(this._vao),t.useProgram(r),y){const i=M.getMosaicItemPosition(S,!0);if(i!=null){const{tl:u,br:m,page:s}=i;x=m[0]-u[0],E=m[1]-u[1];const T=M.getPageSize(s);T!=null&&(M.bind(t,k.LINEAR,s,w),r.setUniform4f("u_tlbr",u[0],u[1],m[0],m[1]),r.setUniform2fv("u_mosaicSize",T),r.setUniform1i("u_texture",w))}r.setUniform1f("u_opacity",p)}else{const i=P[3]*p;this._color[0]=i*P[0],this._color[1]=i*P[1],this._color[2]=i*P[2],this._color[3]=i,r.setUniform4fv("u_color",this._color)}r.setUniform1f("u_depth",o.z||0);for(const i of e){if(r.setUniform1f("u_coord_range",i.rangeX),r.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),y){const u=Math.max(2**(Math.round(f)-i.key.level),1),m=c*i.width*u,s=m/Y(x),T=m/Y(E);this._patternMatrix[0]=s,this._patternMatrix[4]=T,r.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(O.EQUAL,0,255),t.drawArrays(N.TRIANGLE_STRIP,0,4)}}else l()}_loadWGLResources(a){if(this._vao)return;const{context:e,styleLayer:t}=a,n=t.backgroundMaterial,l=new Int8Array([0,0,1,0,0,1,1,1]),_=nt.createVertex(e,rt.STATIC_DRAW,l),f=new ot(e,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:_});this._vao=f}};class Pt extends ${constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(a,e){const{context:t,displayLevel:n,requiredLevel:l,state:_,painter:f,spriteMosaic:o,styleLayerUID:U,requestRender:d,allowDelayedRender:P}=a;if(!e.some(r=>{var i;return((i=r.layerData.get(U))==null?void 0:i.circleIndexCount)??!1}))return;const p=a.styleLayer,S=p.circleMaterial,y=f.vectorTilesMaterialManager,v=1.2,M=p.getPaintValue("circle-translate",n),x=p.getPaintValue("circle-translate-anchor",n),E=this._programOptions,c=y.getMaterialProgram(t,S,E);if(P&&d!=null&&!c.compiled)return void d();t.useProgram(c),c.setUniformMatrix3fv("u_displayMat3",x===G.VIEWPORT?_.displayMat3:_.displayViewMat3),c.setUniform2fv("u_circleTranslation",M),c.setUniform1f("u_depth",p.z),c.setUniform1f("u_antialiasingWidth",v);let g=-1;for(const r of e){if(!r.layerData.has(U))continue;r.key.level!==g&&(g=r.key.level,S.setDataUniforms(c,n,p,g,o));const i=r.layerData.get(U);if(!i.circleIndexCount)continue;i.prepareForRendering(t);const u=i.vao;u!=null&&(t.bindVAO(u),c.setUniformMatrix3fv("u_dvsMat3",r.transforms.displayViewScreenMat3),l!==r.key.level?t.setStencilFunction(O.EQUAL,r.stencilRef,255):t.setStencilFunction(O.GREATER,255,255),t.drawElements(N.TRIANGLES,i.circleIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i.circleIndexStart),r.triangleCount+=i.circleIndexCount/3)}}}const X=1/65536;class vt extends ${constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(a,e){const{displayLevel:t,renderPass:n,spriteMosaic:l,styleLayerUID:_}=a;let f=!1;for(const c of e)if(c.layerData.has(_)){const g=c.layerData.get(_);if(g.fillIndexCount>0||g.outlineIndexCount>0){f=!0;break}}if(!f)return;const o=a.styleLayer,U=o.getPaintProperty("fill-pattern"),d=U!==void 0,P=d&&U.isDataDriven;let p;if(d&&!P){const c=U.getValue(t);p=l.getMosaicItemPosition(c,!0)}const S=!d&&o.getPaintValue("fill-antialias",t);let y=!0,v=1;if(!d){const c=o.getPaintProperty("fill-color"),g=o.getPaintProperty("fill-opacity");if(!(c!=null&&c.isDataDriven)&&!(g!=null&&g.isDataDriven)){const r=o.getPaintValue("fill-color",t);v=o.getPaintValue("fill-opacity",t)*r[3],v>=1&&(y=!1)}}if(y&&n==="opaque")return;const M=o.getPaintValue("fill-translate",t),x=o.getPaintValue("fill-translate-anchor",t);(y||n!=="translucent")&&this._drawFill(a,_,o,e,M,x,d,p,P);const E=!o.hasDataDrivenOutlineColor&&o.outlineUsesFillColor&&v<1;S&&n!=="opaque"&&!E&&this._drawOutline(a,_,o,e,M,x)}_drawFill(a,e,t,n,l,_,f,o,U){if(f&&!U&&o==null)return;const{context:d,displayLevel:P,state:p,painter:S,pixelRatio:y,spriteMosaic:v,requestRender:M,allowDelayedRender:x}=a,E=t.fillMaterial,c=S.vectorTilesMaterialManager,g=y>H?2:1,r=this._fillProgramOptions;r.pattern=f;const i=c.getMaterialProgram(d,E,r);if(x&&M!=null&&!i.compiled)return void M();if(d.useProgram(i),o!=null){const{page:m}=o,s=v.getPageSize(m);s!=null&&(v.bind(d,k.LINEAR,m,w),i.setUniform2fv("u_mosaicSize",s),i.setUniform1i("u_texture",w))}i.setUniformMatrix3fv("u_displayMat3",_===G.VIEWPORT?p.displayMat3:p.displayViewMat3),i.setUniform2fv("u_fillTranslation",l),i.setUniform1f("u_depth",t.z+X);let u=-1;for(const m of n){if(!m.layerData.has(e))continue;m.key.level!==u&&(u=m.key.level,E.setDataUniforms(i,P,t,u,v));const s=m.layerData.get(e);if(!s.fillIndexCount)continue;s.prepareForRendering(d);const T=s.fillVAO;if(T!=null){if(d.bindVAO(T),i.setUniformMatrix3fv("u_dvsMat3",m.transforms.displayViewScreenMat3),d.setStencilFunction(O.EQUAL,m.stencilRef,255),f){const h=Math.max(2**(Math.round(P)-m.key.level),1),R=m.rangeX/(g*m.width*h);i.setUniform1f("u_patternFactor",R)}if(U){const h=s.patternMap;if(!h)continue;for(const[R,D]of h){const z=v.getPageSize(R);z!=null&&(v.bind(d,k.LINEAR,R,w),i.setUniform2fv("u_mosaicSize",z),i.setUniform1i("u_texture",w),d.drawElements(N.TRIANGLES,D[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D[0]))}}else d.drawElements(N.TRIANGLES,s.fillIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*s.fillIndexStart);m.triangleCount+=s.fillIndexCount/3}}}_drawOutline(a,e,t,n,l,_){const{context:f,displayLevel:o,state:U,painter:d,pixelRatio:P,spriteMosaic:p,requestRender:S,allowDelayedRender:y}=a,v=t.outlineMaterial,M=d.vectorTilesMaterialManager,x=.75/P,E=this._outlineProgramOptions,c=M.getMaterialProgram(f,v,E);if(y&&S!=null&&!c.compiled)return void S();f.useProgram(c),c.setUniformMatrix3fv("u_displayMat3",_===G.VIEWPORT?U.displayMat3:U.displayViewMat3),c.setUniform2fv("u_fillTranslation",l),c.setUniform1f("u_depth",t.z+X),c.setUniform1f("u_outline_width",x);let g=-1;for(const r of n){if(!r.layerData.has(e))continue;r.key.level!==g&&(g=r.key.level,v.setDataUniforms(c,o,t,g,p));const i=r.layerData.get(e);if(i.prepareForRendering(f),!i.outlineIndexCount)continue;const u=i.outlineVAO;u!=null&&(f.bindVAO(u),c.setUniformMatrix3fv("u_dvsMat3",r.transforms.displayViewScreenMat3),f.setStencilFunction(O.EQUAL,r.stencilRef,255),f.drawElements(N.TRIANGLES,i.outlineIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i.outlineIndexStart),r.triangleCount+=i.outlineIndexCount/3)}}}class xt extends ${constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(a,e){const{context:t,displayLevel:n,state:l,painter:_,pixelRatio:f,spriteMosaic:o,styleLayerUID:U,requestRender:d,allowDelayedRender:P}=a;if(!e.some(h=>{var R;return((R=h.layerData.get(U))==null?void 0:R.lineIndexCount)??!1}))return;const p=a.styleLayer,S=p.lineMaterial,y=_.vectorTilesMaterialManager,v=p.getPaintValue("line-translate",n),M=p.getPaintValue("line-translate-anchor",n),x=p.getPaintProperty("line-pattern"),E=x!==void 0,c=E&&x.isDataDriven;let g,r;if(E&&!c){const h=x.getValue(n);g=o.getMosaicItemPosition(h)}let i=!1;if(!E){const h=p.getPaintProperty("line-dasharray");if(r=h!==void 0,i=r&&h.isDataDriven,r&&!i){const R=h.getValue(n),D=p.getDashKey(R,p.getLayoutValue("line-cap",n));g=o.getMosaicItemPosition(D)}}const u=1/f,m=this._programOptions;m.pattern=E,m.sdf=r;const s=y.getMaterialProgram(t,S,m);if(P&&d!=null&&!s.compiled)return void d();if(t.useProgram(s),s.setUniformMatrix3fv("u_displayViewMat3",l.displayViewMat3),s.setUniformMatrix3fv("u_displayMat3",M===G.VIEWPORT?l.displayMat3:l.displayViewMat3),s.setUniform2fv("u_lineTranslation",v),s.setUniform1f("u_depth",p.z),s.setUniform1f("u_antialiasing",u),g&&g!=null){const{page:h}=g,R=o.getPageSize(h);R!=null&&(o.bind(t,k.LINEAR,h,w),s.setUniform2fv("u_mosaicSize",R),s.setUniform1i("u_texture",w))}let T=-1;for(const h of e){if(!h.layerData.has(U))continue;h.key.level!==T&&(T=h.key.level,S.setDataUniforms(s,n,p,T,o));const R=2**(n-T)/f;s.setUniform1f("u_zoomFactor",R);const D=h.layerData.get(U);if(!D.lineIndexCount)continue;D.prepareForRendering(t);const z=D.vao;if(z!=null){if(t.bindVAO(z),s.setUniformMatrix3fv("u_dvsMat3",h.transforms.displayViewScreenMat3),t.setStencilFunction(O.EQUAL,h.stencilRef,255),c||i){const F=D.patternMap;if(!F)continue;for(const[I,C]of F){const L=o.getPageSize(I);L!=null&&(o.bind(t,k.LINEAR,I,w),s.setUniform2fv("u_mosaicSize",L),s.setUniform1i("u_texture",w),t.drawElements(N.TRIANGLES,C[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else t.drawElements(N.TRIANGLES,D.lineIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.lineIndexStart);h.triangleCount+=D.lineIndexCount/3}}}}const st=256/360,lt=1/Math.LN2;function ct(V,a){return(V%=a)>=0?V:V+a}function j(V){return ct(V*st,256)}function It(V){return Math.log(V)*lt}const ut=1/65536;class St extends ${constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=et()}dispose(){}drawMany(a,e){const t=a.styleLayer;this._drawIcons(a,t,e),this._drawText(a,t,e)}_drawIcons(a,e,t){const{context:n,displayLevel:l,painter:_,spriteMosaic:f,state:o,styleLayerUID:U,requestRender:d,allowDelayedRender:P}=a,p=e.iconMaterial,S=_.vectorTilesMaterialManager;let y,v=!1;for(const s of t)if(s.layerData.has(U)&&(y=s.layerData.get(U),y.iconPerPageElementsMap.size>0)){v=!0;break}if(!v)return;const M=e.getPaintValue("icon-translate",l),x=e.getPaintValue("icon-translate-anchor",l);let E=e.getLayoutValue("icon-rotation-alignment",l);E===A.AUTO&&(E=e.getLayoutValue("symbol-placement",l)===B.POINT?A.VIEWPORT:A.MAP);const c=E===A.MAP,g=e.getLayoutValue("icon-keep-upright",l)&&c,r=y.isIconSDF,i=this._iconProgramOptions;i.sdf=r;const u=S.getMaterialProgram(n,p,i);if(P&&d!=null&&!u.compiled)return void d();n.useProgram(u),u.setUniformMatrix3fv("u_displayViewMat3",E===A.MAP?o.displayViewMat3:o.displayMat3),u.setUniformMatrix3fv("u_displayMat3",x===G.VIEWPORT?o.displayMat3:o.displayViewMat3),u.setUniform2fv("u_iconTranslation",M),u.setUniform1f("u_depth",e.z),u.setUniform1f("u_mapRotation",j(o.rotation)),u.setUniform1f("u_keepUpright",g?1:0),u.setUniform1f("u_level",10*l),u.setUniform1i("u_texture",w),u.setUniform1f("u_fadeDuration",Q/1e3);let m=-1;for(const s of t){if(!s.layerData.has(U)||(s.key.level!==m&&(m=s.key.level,p.setDataUniforms(u,l,e,m,f)),y=s.layerData.get(U),y.iconPerPageElementsMap.size===0))continue;y.prepareForRendering(n),y.updateOpacityInfo();const T=y.iconVAO;if(T!=null){n.bindVAO(T),u.setUniformMatrix3fv("u_dvsMat3",s.transforms.displayViewScreenMat3),u.setUniform1f("u_time",(performance.now()-y.lastOpacityUpdate)/1e3);for(const[h,R]of y.iconPerPageElementsMap)this._renderIconRange(a,u,R,h,s)}}}_renderIconRange(a,e,t,n,l){const{context:_,spriteMosaic:f}=a;this._spritesTextureSize[0]=f.getWidth(n)/4,this._spritesTextureSize[1]=f.getHeight(n)/4,e.setUniform2fv("u_mosaicSize",this._spritesTextureSize),f.bind(_,k.LINEAR,n,w),this._setStencilState(a,l),_.drawElements(N.TRIANGLES,t[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3}_drawText(a,e,t){const{context:n,displayLevel:l,glyphMosaic:_,painter:f,pixelRatio:o,spriteMosaic:U,state:d,styleLayerUID:P,requestRender:p,allowDelayedRender:S}=a,y=e.textMaterial,v=f.vectorTilesMaterialManager;let M,x=!1;for(const L of t)if(L.layerData.has(P)&&(M=L.layerData.get(P),M.glyphPerPageElementsMap.size>0)){x=!0;break}if(!x)return;const E=e.getPaintProperty("text-opacity");if(E&&!E.isDataDriven&&E.getValue(l)===0)return;const c=e.getPaintProperty("text-color"),g=!c||c.isDataDriven||c.getValue(l)[3]>0,r=e.getPaintProperty("text-halo-width"),i=e.getPaintProperty("text-halo-color"),u=(!r||r.isDataDriven||r.getValue(l)>0)&&(!i||i.isDataDriven||i.getValue(l)[3]>0);if(!g&&!u)return;const m=24/8;let s=e.getLayoutValue("text-rotation-alignment",l);s===A.AUTO&&(s=e.getLayoutValue("symbol-placement",l)===B.POINT?A.VIEWPORT:A.MAP);const T=s===A.MAP,h=e.getLayoutValue("text-keep-upright",l)&&T,R=.8*m/o;this._glyphTextureSize||(this._glyphTextureSize=it(_.width/4,_.height/4));const D=e.getPaintValue("text-translate",l),z=e.getPaintValue("text-translate-anchor",l),F=this._sdfProgramOptions,I=v.getMaterialProgram(n,y,F);if(S&&p!=null&&!I.compiled)return void p();n.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",s===A.MAP?d.displayViewMat3:d.displayMat3),I.setUniformMatrix3fv("u_displayMat3",z===G.VIEWPORT?d.displayMat3:d.displayViewMat3),I.setUniform2fv("u_textTranslation",D),I.setUniform1f("u_depth",e.z+ut),I.setUniform2fv("u_mosaicSize",this._glyphTextureSize),I.setUniform1f("u_mapRotation",j(d.rotation)),I.setUniform1f("u_keepUpright",h?1:0),I.setUniform1f("u_level",10*l),I.setUniform1i("u_texture",q),I.setUniform1f("u_antialiasingWidth",R),I.setUniform1f("u_fadeDuration",Q/1e3);let C=-1;for(const L of t){if(!L.layerData.has(P)||(L.key.level!==C&&(C=L.key.level,y.setDataUniforms(I,l,e,C,U)),M=L.layerData.get(P),M.glyphPerPageElementsMap.size===0))continue;M.prepareForRendering(n),M.updateOpacityInfo();const W=M.textVAO;if(W==null)continue;n.bindVAO(W),I.setUniformMatrix3fv("u_dvsMat3",L.transforms.displayViewScreenMat3),this._setStencilState(a,L);const K=(performance.now()-M.lastOpacityUpdate)/1e3;I.setUniform1f("u_time",K),M.glyphPerPageElementsMap.forEach((Z,J)=>{this._renderGlyphRange(n,Z,J,_,I,u,g,L)})}}_renderGlyphRange(a,e,t,n,l,_,f,o){n.bind(a,k.LINEAR,t,q),_&&(l.setUniform1f("u_halo",1),a.drawElements(N.TRIANGLES,e[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),o.triangleCount+=e[1]/3),f&&(l.setUniform1f("u_halo",0),a.drawElements(N.TRIANGLES,e[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),o.triangleCount+=e[1]/3)}_setStencilState(a,e){const{context:t,is3D:n,stencilSymbols:l}=a;if(t.setStencilTestEnabled(!0),l)return t.setStencilWriteMask(255),void t.setStencilFunction(O.ALWAYS,e.stencilRef,255);t.setStencilWriteMask(0),n?t.setStencilFunction(O.EQUAL,e.stencilRef,255):t.setStencilFunction(O.GREATER,255,255)}}export{St as d,It as e,vt as f,Pt as n,xt as s,$ as t,Ut as u};
