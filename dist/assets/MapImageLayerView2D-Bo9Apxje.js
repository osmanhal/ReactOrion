import{cQ as n,O as g,J as d,ba as l,v as h,y as s,z as u}from"./index-BfC8i6jT.js";import{a as c}from"./BitmapContainer-pBIB0yUI.js";import{f}from"./LayerView2D-vCOQCX0d.js";import{V as y}from"./GraphicsView2D-Cwjshx1r.js";import{h as _}from"./HighlightGraphicContainer-BxpcWmqP.js";import{_ as H}from"./ExportStrategy-fadrMhum.js";import{y as w}from"./LayerView-D3G_E76P.js";import{i as v}from"./MapImageLayerView-DcKouHFk.js";import{i as $}from"./RefreshableLayerView-T2pK9W1H.js";import{_ as x}from"./MapServiceLayerViewHelper-B8wDIbix.js";import{r as U}from"./drapedUtils-Cq2u8YdU.js";import"./WGLContainer-BLE0Uw_u.js";import"./definitions-ByNBSgP9.js";import"./LabelMetric-BmRa1Bis.js";import"./enums-BRXbslMp.js";import"./Texture-Bq-Yp-pO.js";import"./enums-BlUEVwJR.js";import"./Program-C3FgCIV9.js";import"./BufferObject-CLFFt1Oe.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Dn8AJClK.js";import"./VertexArrayObject-DJNUJ_t_.js";import"./WGLBrushVTLSymbol-DID28CcD.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-Cd8GU6R3.js";import"./TiledDisplayObject-wW3wbRrm.js";import"./DisplayObject-COGNSicI.js";import"./vec3f32-Cw9Q6TO_.js";import"./Container-D8Z8PR0N.js";import"./EffectView-BHVg_MGi.js";import"./highlightReasons-Xh2OTEQT.js";import"./earcut-BrWrA6nz.js";import"./featureConversionUtils-CGYMoz5K.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./ClipRect-QwkcqybV.js";import"./layerViewUtils-D2JqIDZ8.js";import"./CIMSymbolHelper-RNagakW-.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-BN6jNuTX.js";import"./GeometryUtils-ClkMWevA.js";import"./Rect-CUzevAry.js";import"./AttributeStore-Ck0z6t_v.js";import"./UpdateTracking2D-CetJAt3b.js";import"./BindType-BmZEZMMh.js";import"./Util-D9KK83cB.js";import"./labelFormatUtils-DkVwf7tJ.js";import"./TimeOnly-CuAeZtPD.js";import"./centroid-DdLmOD72.js";import"./timeSupport-B4kKaZSt.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-DuEpW0h7.js";import"./heatmapTextureUtils-CCcHDKhq.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-DWkgqXC-.js";import"./AGraphicContainer-7-fooBqc.js";import"./TechniqueInstance-DugsV9W7.js";import"./TileContainer-DGzbl-7U.js";import"./Bitmap-jrFm-wR1.js";import"./ExportImageParameters-plzqYxqk.js";import"./scaleUtils-DL5-S4xE.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-C8bNLJoe.js";import"./timeSupport-OHicj2My.js";import"./timeUtils-BWG3K3Ml.js";import"./tagSymbols-BPcGfZon.js";import"./popupUtils-6OYxcFTS.js";let p=class extends v($(f(w))){constructor(){super(...arguments),this._highlightGraphics=new n,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{g(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,r=e>=10.3,m=e>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new x({createFetchPopupFeaturesQueryGeometry:(o,a)=>U(o,a,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(o,a)=>{this._highlightView.graphicUpdateHandler({graphic:o,property:a})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(l(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,r){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,e,r){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};h([s()],p.prototype,"strategy",void 0),h([s()],p.prototype,"updating",void 0),p=h([u("esri.views.2d.layers.MapImageLayerView2D")],p);const Wt=p;export{Wt as default};
