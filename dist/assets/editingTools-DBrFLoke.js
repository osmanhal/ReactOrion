import{gv as vt,gx as X,ba as $,c8 as Ot,az as P,bw as b,ca as R,cY as V,bJ as $t,v as h,y as p,z as J,a1 as Lt,f8 as Dt,dm as K,f$ as ot,eM as ft,gB as Ht,g4 as Vt,eW as Ut,jq as St,ep as y,fB as H,aC as wt,ap as zt,f_ as j,eC as O,jl as It,jR as bt,fy as U,fv as ct,gt as Ft,cU as Nt,bS as pt,fx as it,bH as jt,eq as Bt,fw as A,fz as B,hD as Wt,iM as dt,lh as Yt,pO as Zt,W as Xt}from"./index-BfC8i6jT.js";import{f as Kt}from"./SnappingVisualizer2D-C8VRf_IF.js";import{E as qt,F as Jt,d as Tt,a as Qt}from"./editPlaneUtils-BPk0JR48.js";import{F as te,h as ee}from"./surfaceCoordinateSystems-Bq8REdqh.js";import Et from"./GraphicsLayer-B2JC83UW.js";import{I as _t}from"./cimSymbolUtils-DS1Fp96D.js";import{p as st,E as rt,n as Pt,w as Gt}from"./InteractiveToolBase-Q2z5Ov3P.js";import{s as ie,S as nt}from"./GraphicManipulator-CsZNOUHz.js";import{b as E,E as Mt,e as lt,p as ae}from"./EditGeometryOperations-DmGwV5zN.js";import{W as q,Z}from"./boundedPlane-xSVxcV1_.js";import{m as oe}from"./drawUtils-BK90VSvv.js";import{d as w,h as se}from"./keybindings-yv7BPnkG.js";import{r as re}from"./hitTestSelectUtils-UXJPjatw.js";import"./enums-BRXbslMp.js";import"./SnappingManager-D5q8LYBJ.js";import"./elevationInfoUtils-Dkzy2V0O.js";import"./projectVectorToVector-C51LtB8f.js";import"./projectPointToVector-C0Qwzs7z.js";import"./geodesicUtils-BOUsTR0r.js";import"./plane-ByuX_NXR.js";import"./mathUtils-DIiwy5h7.js";import"./sphere-BgvJtIjV.js";import"./geometry2dUtils-DBhp7z2_.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./layerViewUtils-D2JqIDZ8.js";import"./geodesicLengthMeasurementUtils-Dk04A7GV.js";import"./quantityUtils-B2xRWNSM.js";import"./geometryEngine-s82Uc-OG.js";import"./geometryEngineBase-hNmXf8AX.js";import"./hydrated-CC1UoCrK.js";import"./SnappingVisualizer-Dn1HXI_0.js";import"./PointSnappingHint-DG5oOaY6.js";import"./coordinateFormatter-CwkZHkKf.js";import"./dehydratedFeatureComparison-DqYXmcFw.js";import"./createUtils-1RyAkH_x.js";import"./Circle-BB08Wuoo.js";import"./helpMessageUtils-M95XMmyR.js";import"./helpMessageUtils3d-DY0OYZdz.js";import"./automaticAreaMeasurementUtils-zX8y3z0o.js";import"./meshVertexSpaceUtils-CcfLNHym.js";import"./MeshLocalVertexSpace-DZNf3szf.js";import"./Tooltip-DDWLW0ZR.js";import"./memoize-DsJmrG76.js";import"./unitFormatUtils-BLmxKBrJ.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./getDefaultUnitForView-Dts4f_W1.js";import"./quantityFormatUtils-D98c6G2o.js";import"./directionModeIcons-Br5woIHu.js";import"./euclideanAreaMeasurementUtils-DvT3DYeX.js";import"./earcut-BrWrA6nz.js";import"./triangle-B-TmEFJd.js";import"./lineSegment-DbTVMGoh.js";import"./euclideanLengthMeasurementUtils-D2ZslYzK.js";import"./spatialReferenceEllipsoidUtils-6vOoKuZD.js";import"./geodesicAreaMeasurementUtils-ROeBvnrj.js";import"./automaticLengthMeasurementUtils-DRERYnUp.js";import"./isSupportedObject-Osl_dfQr.js";import"./SketchLabelOptions-BGcukdKj.js";import"./ReactiveSet-Dp1f0Kxk.js";import"./SnappingContext-lR2hMWGP.js";import"./SnappingDragPipelineStep-Cwt6mPXQ.js";import"./hydratedFeatures-Dp0VykK3.js";import"./Scheduler-DSoCN6Hr.js";import"./debugFlags-CX6JgPmI.js";import"./SnappingOperation-CbINueCr.js";import"./drapedUtils-Cq2u8YdU.js";const ne=new vt({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),le=new X({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),he=new X({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let D=class extends qt{constructor(t){super(t),this._visualElementGraphics={regularVertices:null,activeVertex:null,activeEdge:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:t.activeLineSymbol??ne,regularVertices:t.regularVerticesSymbol??le,activeVertex:t.activeVertexSymbol??he,fill:t.activeFillSymbol},t.activeVertexSymbol||this.addHandles($(()=>{var i,a;return(a=(i=this.view)==null?void 0:i.effectiveTheme)==null?void 0:a.accentColor},i=>{var o;if(!i)return;const a=this._visualElementSymbols.activeVertex.clone().set({color:i});(o=this._visualElementGraphics.activeVertex)==null||o.set("symbol",a),this._visualElementSymbols={...this._visualElementSymbols,activeVertex:a}},Ot))}normalizeCtorArgs(t){const i={...t};return delete i.activeFillSymbol,delete i.activeVertexSymbol,delete i.regularVerticesSymbol,delete i.activeLineSymbol,i}initializeGraphic(t){return this._visualElementSymbols.fill!=null&&(t.symbol=this._visualElementSymbols.fill),this.internalGraphicsLayer.graphics.sort(W),P()}makeDrawOperation(){const{defaultZ:t,hasZ:i,view:a}=this;return this._createOrUpdateGraphic(null),new te({view:a,manipulators:this.manipulators,geometryType:Jt(this.geometryType),drawingMode:this.mode,hasZ:i,defaultZ:t,snapToSceneEnabled:this.snapToScene,drawSurface:new ee(a,i,t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new Kt(this.internalGraphicsLayer),graphic:this.graphic,cursor:this.cursor,constraintsEnabled:!0})}onActiveVertexChanged(t){if(this.geometryType==="point")return P();const[i,a]=t,o=new b({x:i,y:a,spatialReference:this.view.spatialReference});return this._visualElementGraphics.activeVertex!=null?(this._visualElementGraphics.activeVertex.geometry=o,P()):(this._visualElementGraphics.activeVertex=new R({geometry:o,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(W),P(()=>{this._visualElementGraphics.activeVertex!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=V(this._visualElementGraphics.activeVertex))}))}onCursorEdgeChanged(t){return this._visualElementGraphics.activeEdge!=null?(this._visualElementGraphics.activeEdge.geometry=t,P()):(this._visualElementGraphics.activeEdge=new R({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeEdge),this.internalGraphicsLayer.graphics.sort(W),P(()=>{this._visualElementGraphics.activeEdge!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeEdge),this._visualElementGraphics.activeEdge=V(this._visualElementGraphics.activeEdge))}))}onRegularVerticesChanged(t){const i=new $t({points:t,spatialReference:this.view.spatialReference});return this._visualElementGraphics.regularVertices!=null?(this._visualElementGraphics.regularVertices.geometry=i,P()):(this._visualElementGraphics.regularVertices=new R({geometry:i,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(W),P(()=>{this._visualElementGraphics.regularVertices!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=V(this._visualElementGraphics.regularVertices))}))}};function W(e,t){var i,a;return(((i=e.attributes)==null?void 0:i.displayOrder)??-1/0)-(((a=t.attributes)==null?void 0:a.displayOrder)??-1/0)}h([p()],D.prototype,"activeFillSymbol",void 0),h([p({readOnly:!0})],D.prototype,"type",void 0),h([p({constructOnly:!0,nonNullable:!0})],D.prototype,"view",void 0),D=h([J("esri.views.2d.interactive.editingTools.draw.DrawGraphicTool2D")],D);let ht=class{get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}hasManipulator(t){return this.someManipulator(i=>i===t)}someManipulator(t){let i=!1;return this.forEachManipulator(a=>{!i&&t(a)&&(i=!0)}),i}};var z;(function(e){e[e.TRANSLATE_XY=0]="TRANSLATE_XY",e[e.SCALE=1]="SCALE",e[e.ROTATE=2]="ROTATE"})(z||(z={}));let Rt=class extends ht{constructor(t){super(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._manipulator=this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._graphic=null}forEachManipulator(t){t(this._manipulator,z.TRANSLATE_XY)}createDragPipeline(t,i){let a=null,o=null,r=0,n=0,s=0;const{offsetX:d,offsetY:c,size:_}=ie(this._graphic.symbol);return st(this._manipulator,(v,C)=>{C.next(m=>{if(m.action==="start"){const l=t();a=l.editGeometryOperations,o=l.constraints}return m}).next(rt(this._view)).next(m=>{const{x:l,y:u,z:g}=m.mapEnd;if(o&&(l+d<o.xmin||u+c-_<o.ymin||l+d>o.xmax||u+c-_>o.ymax))return m;(m.action==="start"||r===0&&n===0&&s===0)&&(r=m.mapStart.x,n=m.mapStart.y,s=m.mapStart.z);const f=l-r,L=u-n,k=g-s;r=l,n=u,s=g;const Q=m.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,I=a.move(f,L,k,Q);return i(m,I),m})})}_createManipulator(){const t=this._view,i=this._graphic;return new nt({view:t,graphic:i,selectable:!0,cursor:"move"})}};const T={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",toggleOpacity:"t",shift:"Shift",primaryKey:Ht},ce=1,pe=10,ut=new Lt("#009AF2");let M=class extends Pt{constructor(e){super(e),this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this._initialControlPoints=null,this._graphicsLayer=new Et({internal:!0,listMode:"hide",visible:!1,effect:"drop-shadow(0px, 0px, 3px)"}),this._undoStack=[],this._redoStack=[],this._sharedUndoStack=[],this._sharedRedoStack=[],this._highlightHandle=null,this.activeHandle=0}initialize(){this._initialize()}destroy(){const{map:e}=this.view;this._controlPointManipulations.forEach(t=>t.destroy()),this._controlPointEditGeometryOperations.forEach(t=>t.destroy()),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=V(this._graphicsLayer),this._georeference=null,this._controlPointGraphics=null,this._controlPointManipulations=null,this._graphicsLayer=null,this._controlPointEditGeometryOperations=null,this._undoStack=null,this._redoStack=null,this._initialControlPoints=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _hasValidSpatialReference(){return Dt(this.view.spatialReference)}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){const e=this._undoStack[this._undoStack.length-1];return e!=null&&this._controlPointEditGeometryOperations[e].canUndo}canRedo(){const e=this._redoStack[this._redoStack.length-1];return e!=null&&this._controlPointEditGeometryOperations[e].canRedo}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();this._controlPointEditGeometryOperations[e].undo(),this.updateGraphics(),this._redoStack.push(e)}}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();this._controlPointEditGeometryOperations[e].redo(),this.updateGraphics(),this._undoStack.push(e)}}refresh(){const{mediaElement:e}=this;if(e.georeference==null)return;const t=e.georeference;t.type==="control-points"&&t.coords!=null&&(this._georeference=t,this._georeference.controlPoints.forEach(({mapPoint:i},a)=>{const o=this._controlPointEditGeometryOperations[a],r=o.data.components[0].vertices[0];o.setVertexPosition(r,o.data.coordinateHelper.pointToVector(i))}),this.updateGraphics())}reset(){this._georeference.controlPoints=this._initialControlPoints,this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const e=this._georeference,t=e.controlPoints,i=t[0].mapPoint.spatialReference,a=this._hasValidSpatialReference;this._georeference.controlPoints=this._controlPointEditGeometryOperations.map((o,r)=>{const n=o.data.geometry;return this._controlPointGraphics[r].geometry=n,{mapPoint:K(n,i),sourcePoint:a?t[r].sourcePoint:e.toSource(n)}})}updateActiveHandle(e){if(this.activeHandle===e)return;const t=this._controlPointGraphics[this.activeHandle].symbol.clone();_t(t,this.view.effectiveTheme.accentColor),this._controlPointGraphics[this.activeHandle].symbol=t;const i=this._controlPointGraphics[e].symbol.clone();_t(i,ut),this._controlPointGraphics[e].symbol=i,this.activeHandle=e,this.view.surface===document.activeElement&&this.highlightActiveHandle()}async highlightActiveHandle(){this.removeHighlightActiveHandle();const e=await this.view.whenLayerView(this._graphicsLayer);this._highlightHandle=e.highlight(this._controlPointGraphics[this.activeHandle])}removeHighlightActiveHandle(){this._highlightHandle&&this._highlightHandle.remove()}setSharedUndoStack(e){this._sharedUndoStack=e}setSharedRedoStack(e){this._sharedRedoStack=e}async _initialize(){const{view:e,mediaElement:t}=this;if(t.georeference==null)return;const i=t.georeference;i.type==="control-points"&&i.coords!=null&&(this._georeference=i,this._initialControlPoints=this._georeference.controlPoints,e.map.addMany([this._graphicsLayer]),e.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._controlPointEditGeometryOperations=this._georeference.controlPoints.map(({mapPoint:a})=>Mt.fromGeometry(K(a,e.spatialReference),ot.Local)),this._controlPointGraphics=this._controlPointEditGeometryOperations.map((a,o)=>new R({symbol:new vt({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,colorLocked:!0,anchorPoint:{x:0,y:-15.75},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:9,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:84.3,ymax:84.3},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[83.2,32.5],[84.3,40.7],[83.8,48.9],[81.7,56.9],[78.1,64.3],[73,70.9],[66.9,76.4],[59.7,80.5],[51.9,83.2],[43.7,84.3],[35.4,83.8],[27.4,81.7],[20,78],[13.4,73],[7.9,66.8],[3.8,59.7],[1.1,51.9],[0,43.7],[.5,35.4],[2.6,27.4],[6.3,20],[11.3,13.4],[17.5,7.9],[24.7,3.8],[32.5,1.1],[39.8,.1],[47.1,.3],[54.3,1.8],[61.1,4.5],[67.4,8.4],[72.9,13.3],[77.4,19.1],[80.9,25.5],[83.2,32.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,255,255,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[84.3,0],[84.3,84.3],[0,84.3],[0,0]]]}},rotation:0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-11.25},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:22.5,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:197.7,ymax:294.7},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[98.9,0],[119.4,23.2],[139.4,49.3],[156.8,75.2],[171.2,100.8],[182.4,125.3],[190.6,148.8],[195.7,171.4],[197.7,192.9],[197.7,195.8],[197.7,200.3],[197.6,202.5],[197.5,204.8],[197.3,207.1],[197,209.4],[196.7,211.7],[196.4,214.1],[196,216.4],[195.5,218.7],[195,221.1],[194.4,223.4],[193.7,225.8],[193,228.1],[192.2,230.5],[191.4,232.8],[190.5,235.1],[189.5,237.5],[188.5,239.7],[187.4,242],[186.2,244.3],[185,246.5],[183.7,248.7],[182.4,250.9],[181,253.1],[179.5,255.2],[178,257.3],[176.4,259.4],[174.7,261.4],[173.1,263.3],[171.3,265.3],[169.5,267.2],[167.7,269],[165.8,270.8],[163.9,272.5],[161.9,274.2],[159.9,275.8],[157.8,277.4],[155.7,278.9],[153.6,280.4],[151.4,281.7],[149.2,283.1],[147,284.4],[144.8,285.6],[142.5,286.7],[140.3,287.8],[138,288.8],[135.7,289.8],[133.4,290.7],[131,291.5],[128.7,292.3],[126.4,293],[124,293.6],[121.7,294.2],[119.4,294.7],[117,295.2],[114.7,295.6],[112.4,296],[110.1,296.3],[107.8,296.5],[105.5,296.7],[103.3,296.8],[101.1,296.9],[98.8,296.9],[83.1,295.7],[67.8,292],[53.3,285.9],[39.9,277.5],[28.1,267.2],[18,255.1],[10,241.5],[4.2,226.9],[.9,211.5],[0,195.8],[.1,192.9],[2.1,171.4],[7.2,148.8],[15.4,125.3],[26.6,100.8],[41,75.2],[58.4,49.3],[78.4,23.2],[98.9,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:o===this.activeHandle?ut.toArray():this.view.effectiveTheme.accentColor.toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[197.7,0],[197.7,294.7],[0,294.7],[0,0]]]}},rotation:0}],haloSize:1,scaleX:1,angleAlignment:"Display",angle:0}}}),geometry:a.data.geometry})),this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]),this._controlPointManipulations=this._controlPointGraphics.map(a=>new Rt({tool:this,view:e,graphic:a})),this.addHandles([...this._controlPointManipulations.map((a,o)=>a.createDragPipeline(this._getInfo.bind(this,o),(r,n)=>{r.action==="start"&&(this._undoStack.push(o),this._redoStack=[],this._sharedUndoStack.push({tool:this,operation:n}),this._sharedRedoStack.length=0),this.updateGraphics()})),$(()=>this.view.scale,()=>this.active?this.updateGraphics():null)]),this._controlPointManipulations.forEach((a,o)=>{const r=n=>{this.addHandles([n.events.on(["click","grab-changed"],s=>this.updateActiveHandle(o))])};a.forEachManipulator(r)}),this.addHandles([e.on("key-down",a=>{e.activeTool===this&&(a.key!==T.shift||a.repeat||(this._isModifierActive=!0,a.stopPropagation()),a.key!==T.toggleOpacity||a.repeat||(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled,a.stopPropagation()),a.key!==T.primaryKey||a.repeat||(this._factor=pe,a.stopPropagation()),this._isModifierActive&&(a.key===T.up&&(this._move(0,this._factor),a.stopPropagation()),a.key===T.down&&(this._move(0,-this._factor),a.stopPropagation()),a.key===T.left&&(this._move(-this._factor,0),a.stopPropagation()),a.key===T.right&&(this._move(this._factor,0),a.stopPropagation())))}),e.on("key-up",a=>{e.activeTool===this&&(a.key===T.shift&&(this._isModifierActive=!1,a.stopPropagation()),a.key===T.primaryKey&&(this._factor=ce,a.stopPropagation()))})]))}async _loadProjectionEngine(){const e=this._georeference.controlPoints[0].mapPoint;return ft(e.spatialReference,this.view.spatialReference)}_getInfo(e){return{editGeometryOperations:this._controlPointEditGeometryOperations[e],constraints:this._hasValidSpatialReference?null:{xmin:0,ymin:0,xmax:this._georeference.width,ymax:this._georeference.height}}}_move(e,t){const i=this._controlPointEditGeometryOperations[this.activeHandle].move(e*this.view.resolution,t*this.view.resolution,0,E.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:i}),this._sharedRedoStack.length=0,this.updateGraphics()}};h([p()],M.prototype,"_hasValidSpatialReference",null),h([p()],M.prototype,"activeHandle",void 0),h([p({constructOnly:!0,nonNullable:!0})],M.prototype,"mediaElement",void 0),h([p({constructOnly:!0})],M.prototype,"view",void 0),M=h([J("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")],M);function kt(e,t){e.action==="start"?t.cursor="grabbing":t.cursor="grab"}class de{constructor(){this._lastDragEvent=null,this.next=new Gt,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null){const i={...this._lastDragEvent,action:"update"};t&&this._adjustScaleFactors(i),this.next.execute(i)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustScaleFactors(t),t)}_adjustScaleFactors(t){const i=t.direction[0]!==0&&t.direction[1]!==0?Math.max(Math.abs(t.factor1),Math.abs(t.factor2)):t.direction[0]===0?Math.abs(t.factor2):Math.abs(t.factor1);t.factor1=t.factor1<0?-i:i,t.factor2=t.factor2<0?-i:i}}class _e{constructor(){this._lastDragEvent=null,this.next=new Gt,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null){const i={...this._lastDragEvent,action:"update"};t&&this._adjustRotateAngle(i),this.next.execute(i)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustRotateAngle(t),t)}_adjustRotateAngle(t){const i=Vt(t.rotateAngle);t.rotateAngle=Ut(5*Math.round(i/5))}}class ue extends ht{constructor(t){super(),this._handles=new St,this._originCache=y(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._snapRotation=t.snapRotation,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",i=>kt(i,this._manipulator))]),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._snapRotation=null,this._graphic=null,this._handles=null,this._originCache=null}forEachManipulator(t){t(this._manipulator,z.ROTATE)}createDragPipeline(t,i){let a=null,o=null;return st(this._manipulator,(r,n)=>{n.next(s=>{if(s.action==="start"){r.cursor="grabbing";const d=t();a=d.plane,o=d.editGeometryOperations}return s}).next(rt(this._view)).next(s=>({...s,rotateAngle:oe(s.mapStart,s.mapEnd,{x:a.origin[0],y:a.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),this._snapRotation.next).next(s=>{const d=H(this._originCache,a.origin),c=s.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,_=o.rotate(d,s.rotateAngle,c,lt.REPLACE);return Tt(_,a),i(s,_),s}).next(s=>(s.action==="end"&&(r.cursor="grab"),s))})}_createManipulator(){const t=this._view,i=this._graphic;return new nt({view:t,graphic:i,selectable:!0,cursor:"grab"})}}const at=10,mt=1e-6,me=.3;function gt(e){const t=U(e.basis1),i=U(e.basis2);return me*Math.min(t,i)}class ge extends ht{constructor(t){super(),this._handles=new St,this._planeStart=q(),this._displayPlaneStart=q(),this._originCache=y(),this._axisCache=wt(),this._renderStartCache=y(),this._renderEndCache=y(),this._resizeOriginCache=y(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._direction=t.direction,this._preserveAspectRatio=t.preserveAspectRatio,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",i=>kt(i,this._manipulator))]),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._graphic=null,this._manipulator=null,this._direction=null,this._handles=null,this._planeStart=null,this._displayPlaneStart=null,this._originCache=null,this._axisCache=null,this._renderStartCache=null,this._renderEndCache=null,this._resizeOriginCache=null,this._preserveAspectRatio=null}forEachManipulator(t){t(this._manipulator,z.SCALE)}createDragPipeline(t,i){let a=null,o=null,r=null,n=0,s=null,d=null;const c=this._planeStart,_=this._displayPlaneStart,v=this._direction;return st(this._manipulator,(C,m)=>{m.next(l=>{if(l.action==="start"){C.cursor="grabbing";const u=t();a=u.plane,o=u.displayPlane,r=u.editGeometryOperations,n=at*this._view.resolution,Z(a,c),Z(o,_);const g=zt(r.data.spatialReference);s=g?g.valid[1]-g.valid[0]-3*at*this._view.resolution:null}return l}).next(rt(this._view)).next(l=>{const u=H(this._renderStartCache,[l.mapStart.x,l.mapStart.y,0]),g=H(this._renderEndCache,[l.mapEnd.x,l.mapEnd.y,0]),f=H(this._resizeOriginCache,_.origin);j(f,f,_.basis1,-v[0]),j(f,f,_.basis2,-v[1]),O(g,g,f),O(u,u,f);const L=v[0]!==0&&v[1]!==0,k=gt(_),Q=gt(o)/k,I=(tt,et)=>{if(tt===0)return 1;let x=U(et),F=.5*tt*ct(et,g)/x;const N=F<0?-1:1;L&&(F+=(x-.5*tt*ct(et,u)/x)*N*Q);const At=x<1.5*n?1:mt;return x=Math.max(x-n,mt),N>0&&(F-=at*this._view.resolution),N*Math.max(N*(F/x),At)},xt=I(v[0],_.basis1),Ct=I(v[1],_.basis2);return{...l,direction:v,factor1:xt,factor2:Ct}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(l=>{const u=H(this._originCache,c.origin);j(u,u,c.basis1,-v[0]),j(u,u,c.basis2,-v[1]);const g=It(this._axisCache,c.basis1[0],c.basis1[1]);bt(g,g);const f=r.data.allVertices,L=l.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,k=r.scaleVertices(f,u,g,l.factor1,l.factor2,L,lt.REPLACE);return s&&s<r.data.geometry.extent.width&&d?r.updateVertices(f,d):(Z(c,a),Tt(k,a),d=k.operation,i(l,k)),l}).next(l=>(l.action==="end"&&(C.cursor="grab"),l))})}_createManipulator(){return new nt({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}const ye=80,ve=10,fe=30,Se=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],yt=1,we=10;let S=class extends Pt{constructor(e){super(e),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._planeCache=q(),this._displayPlaneCache=q(),this._mainAxisCache=wt(),this._rotationHandleCache=y(),this._cornerA=y(),this._cornerB=y(),this._cornerC=y(),this._cornerD=y(),this._avgAB=y(),this._avgBC=y(),this._avgCD=y(),this._avgDA=y(),this._preserveAspectRatio=new de,this._snapRotation=new _e,this._graphicsLayer=new Et({internal:!0,listMode:"hide",visible:!1}),this._sharedUndoStack=[],this._sharedRedoStack=[],this._isOpacityToggled=!1,this._factor=yt,this.preserveAspectRatio=null,this.snapRotation=null}initialize(){this._initialize()}destroy(){const{map:e}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach(t=>t.destroy()),this._editGeometryOperations.destroy(),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=V(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _plane(){const e=this._graphic.geometry;if(e==null)return null;const t=this._editGeometryOperations.data,i=t.components[0].edges[0],a=Ft(this._mainAxisCache,i.leftVertex.pos,i.rightVertex.pos);bt(a,a);let o=ye*this.view.resolution;const r=this.view.spatialReference;return Nt(r,e.spatialReference)&&(o*=pt(r)/pt(e.spatialReference)),Qt(a,t,o,this._planeCache)}get _displayPlane(){const e=this._plane;if(!e)return null;const t=this._displayPlaneCache;Z(e,t);const i=ve*this.view.resolution;return it(t.basis1,t.basis1,1+i/U(t.basis1)),it(t.basis2,t.basis2,1+i/U(t.basis2)),t}get _backgroundGraphicGeometry(){const e=this._displayPlane;if(!e)return null;const t=this.view.spatialReference;return this._updateDisplayPlaneConrers(e),new jt({spatialReference:t,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}get _rotateGraphicGeometry(){const e=this._plane;if(!e)return null;const t=this._rotationHandleCache;return Bt(t,e.basis1),it(t,t,fe*this.view.resolution),A(t,t,e.origin),A(t,t,e.basis1),new b({x:t[0],y:t[1],spatialReference:this.view.spatialReference})}get _scaleGraphicGeometries(){const e=this._displayPlane;if(!e)return[];const t=this.view.spatialReference;this._updateDisplayPlaneConrers(e);const{_cornerA:i,_cornerB:a,_cornerC:o,_cornerD:r}=this,n=B(this._avgAB,i,a,.5),s=B(this._avgBC,a,o,.5),d=B(this._avgCD,o,r,.5),c=B(this._avgDA,r,i,.5);return[new b({x:i[0],y:i[1],spatialReference:t}),new b({x:a[0],y:a[1],spatialReference:t}),new b({x:o[0],y:o[1],spatialReference:t}),new b({x:r[0],y:r[1],spatialReference:t}),new b({x:n[0],y:n[1],spatialReference:t}),new b({x:s[0],y:s[1],spatialReference:t}),new b({x:d[0],y:d[1],spatialReference:t}),new b({x:c[0],y:c[1],spatialReference:t})]}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this._editGeometryOperations.undo(),this.updateGraphics()}redo(){this._editGeometryOperations.redo(),this.updateGraphics()}refresh(){const{view:e,target:t}=this,i="georeference"in t?t.georeference.coords:t.geometry,a=this._editGeometryOperations,o=a.data.components[0].vertices,r=ae.fromGeometry(K(i,e.spatialReference),ot.Local).components[0].vertices;o.forEach((n,s)=>{a.setVertexPosition(n,r[s].pos)}),this.updateGraphics()}reset(){const{target:e}=this;if("georeference"in e){const t=e.georeference;t.type==="control-points"&&(t.controlPoints=this._initialControlPoints)}else e.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const e=this._editGeometryOperations.data.geometry;"georeference"in this.target&&(this.target.georeference.coords=e),this._graphic.geometry=e,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach((t,i)=>{this._scaleGraphics[i].geometry=t})}setSharedUndoStack(e){this._sharedUndoStack=e}setSharedRedoStack(e){this._sharedRedoStack=e}async _initialize(){const{view:e,target:t}=this;if("georeference"in t){const o=t.georeference;this._graphic=new R({geometry:o.coords}),this._initialControlPoints=o.type==="control-points"?o.controlPoints:null}else this._graphic=t,this._initialGeometry=t.geometry;e.map.addMany([this._graphicsLayer]),e.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=Mt.fromGeometry(K(this._graphic.geometry,e.spatialReference),ot.Local),this._backgroundGraphic=new R({symbol:new Wt({color:"transparent",outline:{type:"simple-line",color:e.effectiveTheme.accentColor,width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new R({symbol:new X({color:dt(e.effectiveTheme.accentColor),outline:{type:"simple-line",color:e.effectiveTheme.accentColor,width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map(o=>new R({symbol:new X({size:6,style:"square",color:dt(e.effectiveTheme.accentColor),outline:{type:"simple-line",color:e.effectiveTheme.accentColor,width:1}}),geometry:o})),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new Rt({tool:this,view:e,graphic:this._graphic}),this._rotateManipulation=new ue({tool:this,view:e,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map((o,r)=>new ge({tool:this,view:e,graphic:o,direction:Se[r],preserveAspectRatio:this._preserveAspectRatio})),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map(o=>o.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this))),$(()=>this.view.scale,()=>this.active?this.updateGraphics():null),e.on("click",async o=>{if(e.activeTool!=null&&e.activeTool!==this)return;const r=Yt(o),n=[];e.map.allLayers.forEach(c=>{c.type!=="vector-tile"&&c.type!=="imagery"||n.push(c)});const s=await this.view.hitTest(r,{exclude:n}),d=s.results;if(d.length===0)e.activeTool=null;else{const c=re(s.results),_="georeference"in t,v=d.map(m=>m.type==="media"?m.element:null).filter(Boolean),C=new Set([...this._graphicsLayer.graphics,_?null:t].filter(Boolean));_&&v.includes(t)||c!=null&&C.has(c.graphic)?e.activeTool==null&&(e.activeTool=this):e.activeTool=null}})]);const i=o=>{this.addHandles(o.events.on("grab-changed",r=>{"georeference"in t&&(r.action==="start"?t.opacity*=.5:r.action==="end"&&(t.opacity*=2))}))};this._dragManipulation.forEachManipulator(i),this._rotateManipulation.forEachManipulator(i),this._scaleManipulations.forEach(o=>o.forEachManipulator(i));const a=new se;a.addToggle(w.preserveAspectRatio,()=>{this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled)}),a.addToggle(w.rotateIncrements,()=>{this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled)}),a.add(w.toggleOpacity,()=>{"georeference"in t&&(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled)}),a.addToggle(w.factorModifier,o=>this._factor=o.type==="key-down"?we:yt),a.add(w.scaleUp,()=>this._scale(this._factor)),a.add(w.scaleDown,()=>this._scale(-this._factor)),a.add(w.moveUp,()=>this._move(0,this._factor)),a.add(w.moveDown,()=>this._move(0,-this._factor)),a.add(w.moveLeft,()=>this._move(-this._factor,0)),a.add(w.moveRight,()=>this._move(this._factor,0)),this.addHandles([e.on("key-down",o=>{e.activeTool===this&&a.dispatch(e.inputManager,o)}),e.on("key-up",o=>{e.activeTool===this&&a.dispatch(e.inputManager,o)})])}async _loadProjectionEngine(){const e=this._graphic.geometry;return ft(e.spatialReference,this.view.spatialReference)}_updateDisplayPlaneConrers(e){const{basis1:t,basis2:i,origin:a}=e,o=this._cornerA;A(o,a,t),A(o,o,i);const r=this._cornerB;A(r,a,t),O(r,r,i);const n=this._cornerC;O(n,a,t),O(n,n,i);const s=this._cornerD;O(s,a,t),A(s,s,i)}_getInfo(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}}_updateGraphics(e,t){e.action==="start"&&(this._sharedUndoStack.push({tool:this,operation:t}),this._sharedRedoStack.length=0),this.updateGraphics()}_scale(e){var r;const t=this._editGeometryOperations,i=(r=t.data.geometry.extent)==null?void 0:r.width,a=(i+e*this.view.resolution)/i,o=t.scale(this._plane.origin,Zt,a,a,E.NEW_STEP,lt.REPLACE);this._sharedUndoStack.push({tool:this,operation:o}),this._sharedRedoStack.length=0,this.updateGraphics()}_move(e,t){const i=this._editGeometryOperations.move(e*this.view.resolution,t*this.view.resolution,0,E.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:i}),this._sharedRedoStack.length=0,this.updateGraphics()}};h([p()],S.prototype,"_plane",null),h([p()],S.prototype,"_backgroundGraphicGeometry",null),h([p()],S.prototype,"_rotateGraphicGeometry",null),h([p()],S.prototype,"_scaleGraphicGeometries",null),h([p()],S.prototype,"preserveAspectRatio",void 0),h([p()],S.prototype,"snapRotation",void 0),h([p({constructOnly:!0,nonNullable:!0})],S.prototype,"target",void 0),h([p({constructOnly:!0})],S.prototype,"view",void 0),S=h([J("esri.views.2d.interactive.editingTools.TransformTool")],S);const Y={redo:"r",undo:"z"};let G=class extends Xt{constructor(e){super(e),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=[],this._sharedRedoStack=[],this._originalOpacity=null,this.activeHandle=0}initialize(){const{view:e,mediaElement:t,preserveAspectRatio:i,snapRotation:a,advancedMode:o}=this;this._originalOpacity=t.opacity,this._transformTool=new S({target:t,view:e,preserveAspectRatio:i,snapRotation:a}),this._controlPointsTransformTool=new M({mediaElement:t,view:e}),this._advancedModeTransformTool=new M({mediaElement:o.mediaElement,view:o.view}),this._transformTool.setSharedUndoStack(this._sharedUndoStack),this._transformTool.setSharedRedoStack(this._sharedRedoStack),this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack),this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack),this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack),this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);const r=t.georeference,n=o.mediaElement.georeference;o.view.tools.addMany([this._advancedModeTransformTool]),"controlPoints"in n&&"controlPoints"in r&&this.addHandles([o.view.on("key-down",s=>{s.key===Y.undo&&this.canUndo()&&(this.undo(),s.stopPropagation()),s.key===Y.redo&&this.canRedo()&&(this.redo(),s.stopPropagation())}),o.view.on("focus",async s=>{this._controlPointsTransformTool.removeHighlightActiveHandle(),this._advancedModeTransformTool.highlightActiveHandle()}),$(()=>n.controlPoints,s=>{var d;r.controlPoints=s.map(({sourcePoint:c},_)=>({sourcePoint:c,mapPoint:r.controlPoints[_].mapPoint})),(d=this._activeTool)==null||d.refresh()}),$(()=>this._controlPointsTransformTool.activeHandle,s=>{this._advancedModeTransformTool.updateActiveHandle(s),this.activeHandle=s}),$(()=>this._advancedModeTransformTool.activeHandle,s=>{this._controlPointsTransformTool.updateActiveHandle(s),this.activeHandle=s})]),this.addHandles([e.on("key-down",s=>{s.key===Y.undo&&this.canUndo()&&(this.undo(),s.stopPropagation()),s.key===Y.redo&&this.canRedo()&&(this.redo(),s.stopPropagation())}),e.on("focus",async s=>{this._advancedModeTransformTool.removeHighlightActiveHandle(),this._controlPointsTransformTool.highlightActiveHandle()})]),e.tools.addMany([this._transformTool,this._controlPointsTransformTool]),e.activeTool=this._transformTool,this._activeTool=this._transformTool,e.focus()}destroy(){var e,t;(e=this._transformTool)==null||e.destroy(),(t=this._controlPointsTransformTool)==null||t.destroy(),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=null,this._sharedRedoStack=null}canUndo(){return this._sharedUndoStack.length>0}canRedo(){return this._sharedRedoStack.length>0}undo(){var e;if(this._sharedUndoStack.length>0){const{tool:t,operation:i}=this._sharedUndoStack.pop();t!==this._activeTool&&t.refresh(),i.undo(),t.updateGraphics(),this._sharedRedoStack.push({tool:t,operation:i}),this._activeTool!==t&&((e=this._activeTool)==null||e.refresh())}}redo(){var e;if(this._sharedRedoStack.length>0){const{tool:t,operation:i}=this._sharedRedoStack.pop();t!==this._activeTool&&t.refresh(),i.apply(),t.updateGraphics(),this._sharedUndoStack.push({tool:t,operation:i}),this._activeTool!==t&&((e=this._activeTool)==null||e.refresh())}}refresh(){this._activeTool.refresh()}reset(){this._activeTool.reset(),this._advancedModeTransformTool.reset()}async enableAdvancedMode(){this.view.activeTool=this._controlPointsTransformTool,this._activeTool=this._controlPointsTransformTool,this._activeTool.refresh(),await this.advancedMode.view.when(),this.advancedMode.view.activeTool=this._advancedModeTransformTool,this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity,this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity}disableAdvancedMode(){this.view.activeTool=this._transformTool,this._activeTool=this._transformTool,this._activeTool.refresh(),this.advancedMode.view.activeTool=null,this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity}};h([p()],G.prototype,"activeHandle",void 0),h([p({constructOnly:!0})],G.prototype,"advancedMode",void 0),h([p()],G.prototype,"preserveAspectRatio",void 0),h([p()],G.prototype,"snapRotation",void 0),h([p({constructOnly:!0,nonNullable:!0})],G.prototype,"mediaElement",void 0),h([p({constructOnly:!0})],G.prototype,"view",void 0),G=h([J("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],G);export{M as ControlPointsTransformTool,D as DrawGraphicTool2D,G as MediaTransformToolsWrapper,S as TransformTool};
