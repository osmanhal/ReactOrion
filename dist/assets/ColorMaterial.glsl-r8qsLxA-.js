function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{jl as ie,nA as Te,gc as ut,aC as ft,_ as $e,f$ as ht,v as u,eO as _e,fs as Z,eD as W,eq as pe,eC as vt,fx as N,ex as gt,fB as L,fy as G,fV as mt,aa as Ot,fw as J,ao as Ee,lg as bt,eo as yt,fv as xt,ep as I,aE as ze,eB as De,eA as Re,fE as St,fF as ue,lL as Pt,R as Ie,u0 as Ct,tb as At,nB as wt,gP as Tt,oh as $t,iJ as _t,lM as Et,mX as zt,ja as Dt,lJ as Rt,lH as It,lI as jt,bS as Ft,ot as Vt,ov as Nt,ou as Lt}from"./index-BfC8i6jT.js";import{x as Mt}from"./BufferView-DcMGflLe.js";import{a as je,f as Ut,b as R,p as Bt,ah as Fe,Z as Ht,c as Ve,u as Ne,o as Le,P as Me,e as Ue,F as Be,H as He,q as fe,h as q,x as he,g as A,i as Ge,r as We,j as qe,k as ke,s as Ye,m as Xe,E as $,aw as Gt,A as Wt,a2 as qt,a3 as kt,a4 as Yt,a5 as Xt,a6 as Zt,a8 as Jt,n as Qt,an as Kt}from"./Texture-1xthaLvE.js";import{O as Ze,c as Je,t as eo,s as to,f as oo,b as ve,o as ao,h as io}from"./Material-CL7oq3ds.js";import{H as Qe}from"./InterleavedLayout-D5nIvpjN.js";import{c as B,b as ro,o as b,w as Q,j as K,m as ee,q as so}from"./Matrix4PassUniform-BH4JqvtO.js";import{s as Ke,f as no,g as et,t as lo,h as co,j as po,u as uo,l as fo,b as ho,O as vo,S as go,k as ge,y as me,R as mo,p as Oo,o as bo,e as yo,a as xo,r as So}from"./VertexColor.glsl-DMQrT1G9.js";import{s as Po}from"./Util-D9KK83cB.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";import{R as Oe,O as Co,E as be,f as Ao}from"./enums-BlUEVwJR.js";import{s as wo,o as tt,S as ot,_ as at,h as To}from"./renderState-yUi34s5A.js";import{r as f}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{e as re}from"./projectVectorToVector-C51LtB8f.js";import{o as $o,x as _o}from"./hydratedFeatures-Dp0VykK3.js";import{e as se}from"./basicInterfaces-wONHx_SN.js";import"./BindType-BmZEZMMh.js";import{o as c}from"./interfaces-B8ge7Jg9.js";import{N as ye,P as Eo,Q as zo,S as Do,T as Ro,U as Io,V as jo}from"./RenderGeometry-BYg-7xwk.js";import"./floatRGBA-BcMV1NFr.js";import"./Texture-Bq-Yp-pO.js";function Fo(t){return t instanceof Float32Array&&t.length>=16}function Vo(t){return Array.isArray(t)&&t.length>=16}function No(t){return Fo(t)||Vo(t)}const it=.5;function Lo(t,e){t.include(Ke),t.attributes.add(h.POSITION,"vec3"),t.attributes.add(h.NORMAL,"vec3"),t.attributes.add(h.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;je(o,e),Ut(o,e),o.uniforms.add(new R("viewport",(a,i)=>i.camera.fullViewport),new B("polygonOffset",a=>a.shaderPolygonOffset),new B("cameraGroundRelative",(a,i)=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&no(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(c`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(c`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?c.float(0):c`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Bt(o),e.draped||(o.uniforms.add(new B("perDistancePixelRatio",(a,i)=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),o.code.add(c`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.float(it)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Fe(o),e.hasScreenSizePerspective&&et(o),o.code.add(c`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?c`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":c`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let Mo=class{constructor(){this.factor=new xe,this.factorAlignment=new xe}};class xe{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function ne(t){t.uniforms.add(new Ht("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(c`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(c`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Uo(t,e){const{vertex:o,fragment:a}=t;o.include(ne),e.multipassEnabled&&t.varyings.add("depth","float"),o.code.add(c`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Ve,e),a.code.add(c`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?c`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function Bo(t){t.vertex.uniforms.add(new B("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ye.Occluded?1:o.hudRenderStyle===ye.NotOccluded?0:.75),new R("viewport",(e,o)=>o.camera.fullViewport),new Ne("hudVisibilityTexture",(e,o)=>{var a;return(a=o.hudVisibility)==null?void 0:a.getTexture()})),t.vertex.include(ne),t.vertex.code.add(c`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function rt(t){const e=new Le,o=t.signedDistanceFieldEnabled;if(e.include(Lo,t),e.include(Me,t),t.occlusionPass)return e.include(Uo,t),e;const{vertex:a,fragment:i}=e;e.include(Ke),i.include(ro),i.include(Ue),e.include(Be,t),e.include(He,t),e.include(Bo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),a.uniforms.add(new R("viewport",(s,v)=>v.camera.fullViewport),new fe("screenOffset",(s,v)=>ie(st,2*s.screenOffset[0]*v.camera.pixelRatio,2*s.screenOffset[1]*v.camera.pixelRatio)),new fe("anchorPosition",s=>H(s)),new R("materialColor",s=>s.color)),Fe(a),o&&(a.uniforms.add(new R("outlineColor",s=>s.outlineColor)),i.uniforms.add(new R("outlineColor",s=>Se(s)?s.outlineColor:Te),new B("outlineSize",s=>Se(s)?s.outlineSize:0))),t.pixelSnappingEnabled&&a.include(ne),t.hasScreenSizePerspective&&(lo(a),et(a)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.COLOR,"vec4"),e.attributes.add(h.SIZE,"vec2"),e.attributes.add(h.FEATUREATTRIBUTE,"vec4"),a.code.add(c`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?c`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=c`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,l=t.pixelSnappingEnabled?o?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;a.code.add(c`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===b.ObjectAndLayerIdColor?c`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${c.float(q)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.float(q)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${l}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?c`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),i.uniforms.add(new Ne("tex",s=>s.texture));const n=t.debugDrawLabelBorder?c`(isBorder > 0.0 ? 0.0 : ${c.float(he)})`:c.float(he),p=c`
    ${t.debugDrawLabelBorder?c`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?c`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:c`
      vec2 samplePos = vtc;
      `}

    ${o?c`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?c`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case b.Color:t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),i.code.add(c`
        void main() {
          ${p}
          ${t.transparencyPassType===A.FrontFace?"fragColor.rgb /= fragColor.a;":""}
          ${t.transparencyPassType===A.ColorAlpha?"fragAlpha = fragColor.a;":""}
        }`);break;case b.ObjectAndLayerIdColor:i.code.add(c`
        void main() {
          ${p}
          outputObjectAndLayerIdColor();
        }`);break;case b.Highlight:i.constants.add("occludedHighlightFlag","vec4",co),i.constants.add("unoccludedHighlightFlag","vec4",po),i.code.add(c`
        void main() {
          ${p}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function Se(t){return t.outlineColor[3]>0&&t.outlineSize>0}function H(t,e=st){return t.textureIsSignedDistanceField?Ho(t.anchorPosition,t.distanceFieldBoundingBox,e):ut(e,t.anchorPosition),e}function Ho(t,e,o){e!=null?ie(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):ie(o,0,0)}const st=ft(),Go=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"}));let nt=class lt extends We{initializeConfiguration(e,o){o.spherical=e.viewingMode===ht.Global}initializeProgram(e){return new qe(e.rctx,lt.shader.get().build(this.configuration),Ze)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,a=e===A.NONE,i=e===A.FrontFace,r=this.configuration.hasPolygonOffset?Wo:null,l=o.draped?null:(a||i)&&o.output!==b.Highlight&&(o.depthEnabled||o.occlusionPass)?tt:null;return ot({blending:o.output===b.Color||o.output===b.Highlight?a?qo:ke(e):null,depthTest:o.draped?null:{func:Co.LEQUAL},depthWrite:l,drawBuffers:Ye(e),colorWrite:at,polygonOffset:r})}get primitiveType(){return this.configuration.occlusionPass?be.POINTS:be.TRIANGLES}};nt.shader=new Ge(Go,()=>$e(()=>Promise.resolve().then(()=>va),void 0));const Wo={factor:0,units:-4},qo=wo(Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);class g extends Xe{constructor(){super(...arguments),this.output=b.Color,this.transparencyPassType=A.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}u([f({count:b.COUNT})],g.prototype,"output",void 0),u([f({count:A.COUNT})],g.prototype,"transparencyPassType",void 0),u([f()],g.prototype,"screenCenterOffsetUnitsEnabled",void 0),u([f()],g.prototype,"spherical",void 0),u([f()],g.prototype,"occlusionTestEnabled",void 0),u([f()],g.prototype,"signedDistanceFieldEnabled",void 0),u([f()],g.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),u([f()],g.prototype,"vvSize",void 0),u([f()],g.prototype,"vvColor",void 0),u([f()],g.prototype,"hasVerticalOffset",void 0),u([f()],g.prototype,"hasScreenSizePerspective",void 0),u([f()],g.prototype,"debugDrawLabelBorder",void 0),u([f()],g.prototype,"hasSlicePlane",void 0),u([f()],g.prototype,"hasPolygonOffset",void 0),u([f()],g.prototype,"depthEnabled",void 0),u([f()],g.prototype,"pixelSnappingEnabled",void 0),u([f()],g.prototype,"draped",void 0),u([f()],g.prototype,"multipassEnabled",void 0),u([f()],g.prototype,"cullAboveGround",void 0),u([f()],g.prototype,"occlusionPass",void 0),u([f()],g.prototype,"objectAndLayerIdColorInstanced",void 0),u([f({constValue:!0})],g.prototype,"hasSliceInVertexProgram",void 0),u([f({constValue:!1})],g.prototype,"hasVvInstancing",void 0);class Na extends Je{constructor(e){super(e,new aa),this._configuration=new g,this.produces=new Map([[$.HUD_MATERIAL,o=>Q(o)&&!this.parameters.drawInSecondSlot],[$.LABEL_MATERIAL,o=>Q(o)&&this.parameters.drawInSecondSlot],[$.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[$.DRAPED_MATERIAL,o=>Q(o)]])}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===$.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===b.Color&&(this._configuration.debugDrawLabelBorder=!!eo.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,a,i,r,l){if(!(a.options.selectionMode&&a.options.hud&&e.visible&&a.point))return;const n=this.parameters,p=a.point,s=a.camera;let{scaleX:v,scaleY:O}=this._getScreenScale(e);v*=s.pixelRatio,O*=s.pixelRatio,_e(oe,o),e.attributes.has(h.FEATUREATTRIBUTE)&&Xo(oe);const d=e.attributes.get(h.POSITION),x=e.attributes.get(h.SIZE),w=e.attributes.get(h.NORMAL),T=e.attributes.get(h.CENTEROFFSETANDDISTANCE);Po(d.size>=3);const j=H(n),D=this.parameters.centerOffsetUnits==="screen";for(let m=0;m<d.data.length/d.size;m++){const _=m*d.size;Z(S,d.data[_],d.data[_+1],d.data[_+2]),W(S,S,o);const F=m*x.size;E[0]=x.data[F]*v,E[1]=x.data[F+1]*O,W(S,S,s.viewMatrix);const V=m*T.size;if(Z(C,T.data[V],T.data[V+1],T.data[V+2]),!D&&(S[0]+=C[0],S[1]+=C[1],C[2]!==0)){const X=C[2];pe(C,S),vt(S,S,N(C,C,X))}const Y=m*w.size;if(Z(U,w.data[Y],w.data[Y+1],w.data[Y+2]),Pe(U,oe,s,ae),this._applyVerticalOffsetTransformationView(S,ae,s,te),s.applyProjection(S,P),P[0]>-1){D&&(C[0]||C[1])&&(P[0]+=C[0]*s.pixelRatio,C[1]!==0&&(P[1]+=to(C[1],te.factorAlignment)*s.pixelRatio),s.unapplyProjection(P,S)),P[0]+=this.parameters.screenOffset[0]*s.pixelRatio,P[1]+=this.parameters.screenOffset[1]*s.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),oo(E,te.factor,E);const X=ea*s.pixelRatio;let le=0;if(n.textureIsSignedDistanceField&&(le=n.outlineSize*s.pixelRatio/2),Ce(p,P[0],P[1],E,X,le,n,j)){const ce=a.ray;if(W(Ae,S,gt(Jo,s.viewMatrix)),P[0]=p[0],P[1]=p[1],s.unprojectFromRenderScreen(P,S)){const M=I();L(M,ce.direction);const de=1/G(M);N(M,M,de),l(mt(ce.origin,S)*de,M,-1,!0,1,Ae)}}}}}intersectDraped(e,o,a,i,r,l){const n=e.attributes.get(h.POSITION),p=e.attributes.get(h.SIZE),s=this.parameters,v=H(s);let{scaleX:O,scaleY:d}=this._getScreenScale(e);O*=e.screenToWorldRatio,d*=e.screenToWorldRatio;const x=ta*e.screenToWorldRatio;for(let w=0;w<n.data.length/n.size;w++){const T=w*n.size,j=n.data[T],D=n.data[T+1],m=w*p.size;E[0]=p.data[m]*O,E[1]=p.data[m+1]*d;let _=0;s.textureIsSignedDistanceField&&(_=s.outlineSize*e.screenToWorldRatio/2),Ce(i,j,D,E,x,_,s,v)&&r(l.dist,l.normal,-1,!1)}}createBufferWriter(){return new ra(this)}_updateScaleInfo(e,o,a){const i=this.parameters;i.screenSizePerspective!=null?ve(a,o,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),i.screenSizePerspectiveAlignment!=null?ve(a,o,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,a,i,r,l,n){const p=Pe(o,a,r,ae);return this._applyVerticalGroundOffsetView(e,p,r,n),this._applyVerticalOffsetTransformationView(n,p,r,l),this._applyPolygonOffsetView(n,p,i[3],r,n),this._applyCenterOffsetView(n,i,n),n}applyShaderOffsetsNDC(e,o,a,i,r){return this._applyCenterOffsetNDC(e,o,a,i),r!=null&&L(r,i),this._applyPolygonOffsetNDC(i,o,a,i),i}_applyPolygonOffsetView(e,o,a,i,r){const l=i.aboveGround?1:-1;let n=Math.sign(a);n===0&&(n=l);const p=l*n;if(this.parameters.shaderPolygonOffset<=0)return L(r,e);const s=Ot(Math.abs(o.cosAngle),.01,1),v=1-Math.sqrt(1-s*s)/s/i.viewport[2];return N(r,e,p>0?v:1/v),r}_applyVerticalGroundOffsetView(e,o,a,i){const r=G(e),l=a.aboveGround?1:-1,n=a.computeRenderPixelSizeAtDist(r)*it,p=N(S,o.normal,l*n);return J(i,e,p),i}_applyVerticalOffsetTransformationView(e,o,a,i){var s;const r=this.parameters;if(!((s=r.verticalOffset)!=null&&s.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const v=G(e);this._updateScaleInfo(i,v,o.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const l=G(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,p=ao(a,l,r.verticalOffset,o.cosAngle,n);return this._updateScaleInfo(i,l,o.cosAngle),N(o.normal,o.normal,p),J(e,e,o.normal)}_applyCenterOffsetView(e,o,a){const i=this.parameters.centerOffsetUnits!=="screen";return a!==e&&L(a,e),i&&(a[0]+=o[0],a[1]+=o[1],o[2]&&(pe(U,a),J(a,a,N(U,U,o[2])))),a}_applyCenterOffsetNDC(e,o,a,i){const r=this.parameters.centerOffsetUnits!=="screen";return i!==e&&L(i,e),r||(i[0]+=o[0]/a.fullWidth*2,i[1]+=o[1]/a.fullHeight*2),i}_applyPolygonOffsetNDC(e,o,a,i){const r=this.parameters.shaderPolygonOffset;if(e!==i&&L(i,e),r){const l=a.aboveGround?1:-1,n=l*Math.sign(o[3]);i[2]-=(n||l)*r}return i}createGLMaterial(e){return new ko(e)}calculateRelativeScreenBounds(e,o,a=Ee()){return Yo(this.parameters,e,o,a),a[2]=a[0]+e[0],a[3]=a[1]+e[1],a}_getScreenScale(e){const o=e.attributes.get(h.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const a=bt(o.data,Ko),[i,r]=Gt(Qo,this.parameters,a);return{scaleX:i,scaleY:r}}}class ko extends uo{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(nt,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function Yo(t,e,o,a){a[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*o,a[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*o}function Pe(t,e,o,a){return No(e)&&(e=_e(Zo,e)),yt(a.normal,t,e),W(a.normal,a.normal,o.viewInverseTransposeMatrix),a.cosAngle=xt(ct,oa),a}function Xo(t){const e=t[0],o=t[1],a=t[2],i=t[3],r=t[4],l=t[5],n=t[6],p=t[7],s=t[8],v=1/Math.sqrt(e*e+o*o+a*a),O=1/Math.sqrt(i*i+r*r+l*l),d=1/Math.sqrt(n*n+p*p+s*s);return t[0]=e*v,t[1]=o*v,t[2]=a*v,t[3]=i*O,t[4]=r*O,t[5]=l*O,t[6]=n*d,t[7]=p*d,t[8]=s*d,t}function Ce(t,e,o,a,i,r,l,n){let p=e-i-(n[0]>0?a[0]*n[0]:0),s=p+a[0]+2*i,v=o-i-(n[1]>0?a[1]*n[1]:0),O=v+a[1]+2*i;const d=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&d!=null&&(p+=a[0]*d[0],v+=a[1]*d[1],s-=a[0]*(1-d[2]),O-=a[1]*(1-d[3]),p-=r,s+=r,v-=r,O+=r),t[0]>p&&t[0]<s&&t[1]>v&&t[1]<O}const te=new Mo,S=I(),U=I(),P=ze(),ct=I(),Ae=I(),oe=De(),Zo=De(),Jo=Re(),C=I(),Qo=I(),Ko=ze(),ae={normal:ct,cosAngle:0},ea=1,ta=2,E=[0,0],oa=St(0,0,1);class aa extends fo{constructor(){super(...arguments),this.renderOccluded=io.Occlude,this.isDecoration=!1,this.color=ue(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=Pt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ue(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const dt=Qe().vec3f(h.POSITION).vec3f(h.NORMAL).vec2f(h.UV0).vec4u8(h.COLOR).vec2f(h.SIZE).vec4f(h.CENTEROFFSETANDDISTANCE).vec4f(h.FEATUREATTRIBUTE),ia=dt.clone().vec4u8(h.OBJECTANDLAYERIDCOLOR);class ra{constructor(e){this._material=e,this.vertexBufferLayout=Ie("enable-feature:objectAndLayerId-rendering")?ia:dt}elementCount(e){return 6*e.attributes.get(h.POSITION).indices.length}write(e,o,a,i,r){var D;ho(a.attributes.get(h.POSITION),e,i.position,r,6),vo(a.attributes.get(h.NORMAL),o,i.normal,r,6);const l=a.attributes.get(h.UV0).data;let n,p,s,v;if(l==null||l.length<4){const m=this._material.parameters;n=0,p=0,s=m.texCoordScale[0],v=m.texCoordScale[1]}else n=l[0],p=l[1],s=l[2],v=l[3];s=Math.min(1.99999,s+1),v=Math.min(1.99999,v+1);let O=a.attributes.get(h.POSITION).indices.length,d=r;const x=i.uv0;for(let m=0;m<O;++m)x.set(d,0,n),x.set(d,1,p),d++,x.set(d,0,s),x.set(d,1,p),d++,x.set(d,0,s),x.set(d,1,v),d++,x.set(d,0,s),x.set(d,1,v),d++,x.set(d,0,n),x.set(d,1,v),d++,x.set(d,0,n),x.set(d,1,p),d++;go(a.attributes.get(h.COLOR),4,i.color,r,6);const{data:w,indices:T}=a.attributes.get(h.SIZE);O=T.length;const j=i.size;d=r;for(let m=0;m<O;++m){const _=w[2*T[m]],F=w[2*T[m]+1];for(let V=0;V<6;++V)j.set(d,0,_),j.set(d,1,F),d++}if(a.attributes.get(h.CENTEROFFSETANDDISTANCE)?ge(a.attributes.get(h.CENTEROFFSETANDDISTANCE),i.centerOffsetAndDistance,r,6):me(i.centerOffsetAndDistance,r,6*O),a.attributes.get(h.FEATUREATTRIBUTE)?ge(a.attributes.get(h.FEATUREATTRIBUTE),i.featureAttribute,r,6):me(i.featureAttribute,r,6*O),a.objectAndLayerIdColor!=null){const m=(D=a.attributes.get(h.POSITION))==null?void 0:D.indices;if(m){const _=m.length,F=i.getField(h.OBJECTANDLAYERIDCOLOR,Mt);mo(a.objectAndLayerIdColor,F,_,r,6)}}}}function La(t,e){if(t.type==="point")return z(t,e,!1);if($o(t))switch(t.type){case"extent":return z(t.center,e,!1);case"polygon":return z(t.centroid,e,!1);case"polyline":return z(we(t),e,!0);case"mesh":return z(t.origin,e,!1)}else switch(t.type){case"extent":return z(sa(t),e,!0);case"polygon":return z(na(t),e,!0);case"polyline":return z(we(t),e,!0)}}function we(t){const e=t.paths[0];if(!e||e.length===0)return null;const o=Ct(e,At(e)/2);return re(o[0],o[1],o[2],t.spatialReference)}function sa(t){return re(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function na(t){const e=t.rings[0];if(!e||e.length===0)return null;const o=wt(t.rings,!!t.hasZ);return re(o[0],o[1],o[2],t.spatialReference)}function z(t,e,o){const a=o?t:_o(t);return e&&t?Tt(t,a,e)?a:null:a}function Ma(t,e,o,a=0){if(t){e||(e=Ee());const i=t;let r=.5*i.width*(o-1),l=.5*i.height*(o-1);return i.width<1e-7*i.height?r+=l/20:i.height<1e-7*i.width&&(l+=r/20),$t(e,i.xmin-r-a,i.ymin-l-a,i.xmax+r+a,i.ymax+l+a),e}return null}function Ua(t,e,o=null){const a=_t(Et);return t!=null&&(a[0]=t[0],a[1]=t[1],a[2]=t[2]),e!=null?a[3]=e:t!=null&&t.length>3&&(a[3]=t[3]),o&&(a[0]*=o,a[1]*=o,a[2]*=o,a[3]*=o),a}function Ba(t,e,o,a,i,r=[0,0,0,0]){for(let l=0;l<3;++l)r[l]=(t==null?void 0:t[l])!=null?t[l]:(o==null?void 0:o[l])!=null?o[l]:i[l];return r[3]=e??a??i[3],r}function Ha(t=Dt,e,o,a=1){const i=new Array(3);if(e==null||o==null)i[0]=1,i[1]=1,i[2]=1;else{let r,l=0;for(let n=2;n>=0;n--){const p=t[n];let s;const v=p!=null,O=n===0&&!r&&!v,d=o[n];p==="symbol-value"||O?s=d!==0?e[n]/d:1:v&&p!=="proportional"&&isFinite(p)&&(s=d!==0?p/d:1),s!=null&&(i[n]=s,r=s,l=Math.max(l,Math.abs(s)))}for(let n=2;n>=0;n--)i[n]==null?i[n]=r:i[n]===0&&(i[n]=.001*l)}for(let r=2;r>=0;r--)i[r]/=a;return zt(i)}function la(t){return t.isPrimitive!=null}function Ga(t){return ca(la(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function ca(t){const e=o=>o==null||o>=0;return Array.isArray(t)?t.every(e):e(t)}function Wa(t,e,o,a=Re()){return t&&Rt(a,a,-t/180*Math.PI),e&&It(a,a,e/180*Math.PI),o&&jt(a,a,o/180*Math.PI),a}function qa(t,e,o){if(o.minDemResolution!=null)return o.minDemResolution;const a=Ft(e),i=Vt(t)*a,r=Nt(t)*a,l=Lt(t)*(e.isGeographic?1:a);return i===0&&r===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(i,r,l)}class da extends Je{intersect(e,o,a,i,r,l){return Oo(e,a,i,r,void 0,l)}}function pt(t){const e=new Le,{vertex:o,fragment:a,attributes:i,varyings:r}=e;je(o,t),e.include(bo,t),e.include(yo,t),e.include(Be,t),e.include(He,t),i.add(h.POSITION,"vec3"),t.vvColor&&i.add(h.COLORFEATUREATTRIBUTE,"float"),r.add("vColor","vec4"),r.add("vpos","vec3");const l=t.multipassEnabled&&t.output===b.Color;l&&r.add("depth","float"),o.uniforms.add(new R("eColor",p=>p.color)),o.code.add(c`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(Me,t),l&&e.include(Ve,t),a.include(Ue);const n=t.output===b.Highlight;return n&&e.include(xo,t),t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.code.add(c`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===b.ObjectAndLayerIdColor?c`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.float(q)}) {
      discard;
    }

    ${t.output===b.Color?c`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===A.ColorAlpha?c`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}`:""}
    ${n?c`outputHighlight();`:""};
    ${t.output===b.ObjectAndLayerIdColor?c`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const pa=Object.freeze(Object.defineProperty({__proto__:null,build:pt},Symbol.toStringTag,{value:"Module"}));class k extends We{initializeProgram(e){return new qe(e.rctx,k.shader.get().build(this.configuration),Ze)}_createPipeline(e,o){const a=this.configuration,i=e===A.NONE,r=e===A.FrontFace;return ot({blending:a.output===b.Color&&a.transparent?i?Wt:ke(e):null,culling:To(a.cullFace),depthTest:a.draped?null:{func:qt(e)},depthWrite:a.draped?null:(i||r)&&a.writeDepth?tt:null,drawBuffers:a.output===b.Depth?{buffers:[Ao.NONE]}:Ye(e),colorWrite:at,stencilWrite:a.hasOccludees?kt:null,stencilTest:a.hasOccludees?o?Yt:Xt:null,polygonOffset:i||r?a.polygonOffset?ua:null:Zt(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}k.shader=new Ge(pa,()=>$e(()=>Promise.resolve().then(()=>ga),void 0));const ua={factor:1,units:1};class y extends Xe{constructor(){super(...arguments),this.output=b.Color,this.cullFace=se.None,this.transparencyPassType=A.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}u([f({count:b.COUNT})],y.prototype,"output",void 0),u([f({count:se.COUNT})],y.prototype,"cullFace",void 0),u([f({count:A.COUNT})],y.prototype,"transparencyPassType",void 0),u([f()],y.prototype,"hasSlicePlane",void 0),u([f()],y.prototype,"hasVertexColors",void 0),u([f()],y.prototype,"transparent",void 0),u([f()],y.prototype,"polygonOffset",void 0),u([f()],y.prototype,"enableOffset",void 0),u([f()],y.prototype,"writeDepth",void 0),u([f()],y.prototype,"hasOccludees",void 0),u([f()],y.prototype,"multipassEnabled",void 0),u([f()],y.prototype,"cullAboveGround",void 0),u([f()],y.prototype,"objectAndLayerIdColorInstanced",void 0),u([f()],y.prototype,"vvColor",void 0),u([f()],y.prototype,"draped",void 0),u([f({constValue:!1})],y.prototype,"occlusionPass",void 0),u([f({constValue:!0})],y.prototype,"hasVvInstancing",void 0),u([f({constValue:!1})],y.prototype,"vvSize",void 0),u([f({constValue:!1})],y.prototype,"vvOpacity",void 0);class ka extends da{constructor(e){super(e,new ha),this.supportsEdges=!0,this.produces=new Map([[$.OPAQUE_MATERIAL,o=>o===b.Highlight||K(o)&&!this._isTransparent],[$.OPAQUE_NO_SSAO_DEPTH,o=>ee(o)&&this.parameters.writeLinearDepth&&!this._isTransparent],[$.TRANSPARENT_MATERIAL,o=>K(o)&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_NO_SSAO_DEPTH,o=>ee(o)&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(K(o)||ee(o)&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[$.DRAPED_MATERIAL,o=>so(o)]]),this._configuration=new y}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Jt,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new fa(e)}createBufferWriter(){const e=Qe().vec3f(h.POSITION);return Ie("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4u8(h.COLOR),new So(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class fa extends Qt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===b.Color&&this._updateOccludeeState(e),this.ensureTechnique(k,e)}}class ha extends Kt{constructor(){super(...arguments),this.color=Te,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=se.None,this.hasOccludees=!1,this.draped=!1}}const va=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"})),Ya=Object.freeze(Object.defineProperty({__proto__:null,build:Eo,ribbonlineNumRoundJoinSubdivisions:zo},Symbol.toStringTag,{value:"Module"})),Xa=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Do,build:Ro},Symbol.toStringTag,{value:"Module"})),Za=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Io,build:jo},Symbol.toStringTag,{value:"Module"})),ga=Object.freeze(Object.defineProperty({__proto__:null,build:pt},Symbol.toStringTag,{value:"Module"}));export{Ba as A,Ha as B,Ua as F,Ga as I,Za as O,Ma as P,Na as Q,Ya as R,ca as S,Xa as T,Wa as U,Lo as a,La as b,Mo as c,ka as d,da as e,qa as k,ne as o,Bo as t};
