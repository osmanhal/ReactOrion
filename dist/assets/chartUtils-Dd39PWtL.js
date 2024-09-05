import{o as S,l as K}from"./ResponsiveTheme-B_77LSXK.js";import{aM as N,li as q,lj as D,dc as W,cb as G,bK as J,aj as Q,lk as _,az as ii,iD as P,ll as ti}from"./index-BfC8i6jT.js";import{g as R,b as ei}from"./unitFormatUtils-BLmxKBrJ.js";import{r as v,e as oi,s as ni}from"./ElevationProfile-Y-g8Fldy.js";import{W as ai,B as si}from"./chartUtilsAm5-DH7UchTy.js";import{n as ri,g as z,b as li,x as di,l as pi,f as ci}from"./LineSeries-BHDJDmi_.js";import{a3 as b,c as u,r as mi,G as ui}from"./Theme-B0-OX9Oe.js";import{u as O}from"./Tooltip-B2uPtEi-.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./quantityUtils-B2xRWNSM.js";import"./memoize-DsJmrG76.js";import"./ElevationQueryTileCache-BEPYiqMG.js";import"./projectVectorToVector-C51LtB8f.js";import"./projectPointToVector-C0Qwzs7z.js";import"./LayerConstants-B33OP6sh.js";import"./Material-CL7oq3ds.js";import"./interfaces-B8ge7Jg9.js";import"./basicInterfaces-wONHx_SN.js";import"./VertexAttribute-BnAa5VW0.js";import"./ElevationProvider-BU9L4pxM.js";import"./sphere-BgvJtIjV.js";import"./plane-ByuX_NXR.js";import"./mathUtils-DIiwy5h7.js";import"./boundedPlane-xSVxcV1_.js";import"./lineSegment-DbTVMGoh.js";import"./verticalOffsetUtils-Bdqba6xa.js";import"./orientedBoundingBox-Do1Vt1ct.js";import"./spatialReferenceEllipsoidUtils-6vOoKuZD.js";import"./computeTranslationToOriginAndRotation-DK7GzGeb.js";import"./Intersector-Dzvq-gms.js";import"./Intersector-juYjkWfX.js";import"./defaultUnit-BEK94Aud.js";import"./getDefaultUnitForView-Dts4f_W1.js";import"./throttle-jjSnxk80.js";import"./elevationInfoUtils-Dkzy2V0O.js";import"./geodesicUtils-BOUsTR0r.js";import"./Scheduler-DSoCN6Hr.js";import"./debugFlags-CX6JgPmI.js";import"./traversalUtils-DmE6QkgJ.js";import"./ElevationQuery-D5DIhn2-.js";import"./ElevationSamplerData-k1b1ey21.js";import"./ElevationTile-nLRXAw2j.js";import"./GraphicsLayer-B2JC83UW.js";import"./SketchViewModel-UarWXg2i.js";import"./isSupportedObject-Osl_dfQr.js";import"./SketchLabelOptions-BGcukdKj.js";import"./SnappingManager-D5q8LYBJ.js";import"./geometry2dUtils-DBhp7z2_.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./keybindings-yv7BPnkG.js";import"./layerViewUtils-D2JqIDZ8.js";import"./geodesicLengthMeasurementUtils-Dk04A7GV.js";import"./geometryEngine-s82Uc-OG.js";import"./geometryEngineBase-hNmXf8AX.js";import"./hydrated-CC1UoCrK.js";import"./layerUtils-BS1Di3Pm.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./UnitSelect-VjCIVazS.js";import"./DefaultTheme-BNRCCQIG.js";import"./ColorSet-DBTz8A0U.js";import"./Tick-DdFI6dTV.js";import"./Button-BbFq_Du3.js";function xi(i,o,e=10){const t=X(o-i,!1);if(t===0)return[i,o];const n=X(t/(e-1),!0);return[Math.floor(i/n)*n,Math.ceil(o/n)*n]}function X(i,o){const e=Math.floor(Math.log10(i)),t=i/10**e;let n;return n=o?t<1.5?1:t<3?2:t<5?2.5:t<7?5:10:t<=1?1:t<=2?2:t<=3?2.5:t<=5?5:10,n*10**e}const A="#f8f8f8",E="#a9a9a9",g="#323232",fi="line",gi="fill",h=15,f=12,Y=.001,hi=.1,Ai=.02,I={fontFamily:"Avenir Next",paddingBottom:f/2,paddingLeft:0,paddingRight:0,paddingTop:0,axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:E,axisTooltipFontSize:12,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,axisTooltipPaddingTop:Math.round(f/4),axisTooltipPaddingBottom:Math.round(f/4),axisTooltipPaddingHorizontal:Math.round(h/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(f/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(h/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:A,seriesTooltipLabelColor:g,seriesFillLighten:.9,seriesTooltipSpacing:f/2,seriesTooltipPaddingVertical:Math.round(h/4),seriesTooltipPaddingHorizontal:Math.round(h/4)},vi={...I,axisGridStroke:g,axisLabelsColor:E,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,seriesTooltipBackgroundColor:g,seriesTooltipLabelColor:A,seriesFillLighten:-.75},y={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};async function Ut(i){const o=await ai(i.container);N(i.abortOptions);const e=q(),t=e?vi:I;o.setThemes(e?[S.new(o),K.new(o)]:[S.new(o)]);const n=D(i.container),a=o.container.children.push(ri.new(o,{panX:!0,panY:!0,paddingTop:t.paddingTop,paddingBottom:t.paddingBottom,paddingLeft:n?t.paddingRight:t.paddingLeft,paddingRight:n?t.paddingLeft:t.paddingRight,maxTooltipDistance:0}));a.zoomOutButton.set("forceHidden",!0);const s=a.xAxes.push(z.new(o,{renderer:li.new(o,{})})),r=a.yAxes.push(z.new(o,{renderer:di.new(o,{})})),p=P(null),l=P("loading"),d={params:i,chart:a,xAxis:s,yAxis:r,seriesInfos:new Map,messages:null,theme:t,pointerIsOver:!1,get state(){return l.value},get data(){return p.value},set data(c){p.value=c}};yi(d),Ti(d),bi(d);const m=W([ki(d,i.onRangeChange),Ci(d,i.onCursorPositionChange),L(o.events.once("frameended",()=>{l.value="ready"})),L(o)]);return{destroy:()=>{m.remove(),l.value="destroyed"},update:c=>{c.data===d.data&&c.messages===d.messages||M(d)||Li(d,c)},zoomOut:()=>V(d)}}function M(i){return i.state==="destroyed"}function bi({chart:i,xAxis:o,yAxis:e}){const t=pi.new(i.root,{behavior:"none",xAxis:o,yAxis:e});t.lineY.set("visible",!1),i.set("cursor",t)}function yi(i){var s;const{chart:o,xAxis:e,theme:t}=i;e.setAll({extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"distance"),strictMinMax:!0,strictMinMaxSelection:!0}),e.axisHeader.set("forceHidden",!0);const n=e.get("renderer");n.setAll({inside:!1,minGridDistance:t.xAxisMinGridDistance}),n.labels.template.setAll({centerX:b,centerY:b,fill:u(t.axisLabelsColor),fontFamily:t.fontFamily,fontSize:t.axisLabelsFontSize,fontWeight:t.axisLabelsFontWeight,maxPosition:t.xAxisMaxLabelPosition,minPosition:t.xAxisMinLabelPosition,paddingLeft:0,paddingRight:0,paddingTop:t.xAxisLabelsSpacing});const a=e.set("tooltip",O.new(o.root,{paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0}));(s=a.get("background"))==null||s.setAll({fill:u(t.axisTooltipBackgroundColor),stroke:void 0}),a.label.setAll({fill:u(t.axisTooltipLabelColor),fontFamily:t.fontFamily,fontSize:t.axisTooltipFontSize,paddingBottom:t.axisTooltipPaddingBottom,paddingLeft:t.axisTooltipPaddingHorizontal,paddingRight:t.axisTooltipPaddingHorizontal,paddingTop:t.axisTooltipPaddingTop}),n.grid.template.setAll({strokeOpacity:1,stroke:u(t.axisGridStroke)})}function Ti(i){const{yAxis:o,theme:e}=i;o.setAll({baseValue:v().noDataValue,extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"elevation"),strictMinMax:!0,strictMinMaxSelection:!0,tooltip:void 0}),o.axisHeader.set("visible",!1);const t=D(i.params.container),n=o.get("renderer");n.setAll({minGridDistance:e.yAxisMinGridDistance,opposite:t,inside:!0}),n.labels.template.setAll({centerX:b,centerY:mi,fill:u(e.axisLabelsColor),fontFamily:e.fontFamily,fontSize:e.axisLabelsFontSize,fontWeight:e.axisLabelsFontWeight,maxPosition:e.yAxisMaxLabelPosition,minPosition:e.yAxisMinLabelPosition,paddingBottom:0,paddingLeft:t?0:e.yAxisLabelSpacing,paddingRight:t?e.yAxisLabelSpacing:0,paddingTop:0,textAlign:"start"}),n.grid.template.setAll({strokeOpacity:1,stroke:u(e.axisGridStroke)})}function Li(i,o){var r;if(M(i))return;const e=i.data??void 0,t=o.data??void 0;(r=i.chart.get("cursor"))==null||r.set("forceHidden",!(t!=null&&t.refined));const n=e!==t,a=(e==null?void 0:e.effectiveUnits)!==(t==null?void 0:t.effectiveUnits),s=(e==null?void 0:e.uniformScaling)!==(t==null?void 0:t.uniformScaling);i.data=t,i.messages=o.messages,(n||a)&&(Mi(i),Pi(i)),s&&V(i),T(i)}function V(i){M(i)||(i.xAxis.zoom(0,1),i.yAxis.zoom(0,1))}function Mi(i){const{chart:o,data:e,xAxis:t,yAxis:n}=i,{minX:a,maxX:s,minY:r,maxY:p}=Fi({data:e,pixelWidth:t.width(),pixelHeight:n.height()}),l=!!(e!=null&&e.uniformScaling),d=!!(e!=null&&e.refined);o.setAll({panX:!0,panY:l,pinchZoomX:d,pinchZoomY:d&&l,wheelX:"panX",wheelY:d?l?"zoomXY":"zoomX":"none"}),t.setAll({max:s,min:a,panX:!0,panY:!1,zoomX:!0,zoomY:l}),n.setAll({max:p,min:r,panX:!1,panY:l,zoomX:l,zoomY:l})}function Fi({data:i,pixelWidth:o,pixelHeight:e}){if(i==null)return y;const t=i.statistics,n=0,a=t==null?void 0:t.maxDistance;let s=t==null?void 0:t.minElevation,r=t==null?void 0:t.maxElevation;if(a==null||s==null||r==null)return y;const p=Math.max(a-n,Y);let l=Math.max(r-s,Y);const d=i.effectiveUnits;if(i.dynamicElevationRange){const m=G(p,d.distance,d.elevation);l=Math.max(l,m/v().maxChartRatio)}return s-=Ai*l,r=s+l+hi*l,[s,r]=xi(s,r,10),l=r-s,i.uniformScaling?Si({data:i,bounds:{minX:n,maxX:a,minY:s,maxY:r},pixelWidth:o,pixelHeight:e,centered:!0}):{minX:n,maxX:n+p,minY:s,maxY:s+l}}function Si({data:i,bounds:o,pixelWidth:e,pixelHeight:t,centered:n}){if(i==null)return o;let{minX:a,maxX:s,minY:r,maxY:p}=o;if(a==null||s==null||r==null||p==null)return y;const l=s-a,d=p-r,m=i.effectiveUnits,c=G(d,m.elevation,m.distance)/t/(l/e);return c>=1?[a,s]=k([a,s],c,n):[r,p]=k([r,p],1/c,n),{minX:a,maxX:s,minY:r,maxY:p}}function k([i,o],e,t){const n=(o-i)*e;if(t){const a=(i+o)/2-n/2;return[a,a+n]}return[i,i+n]}function Pi(i){var l;const{chart:o,data:e,seriesInfos:t,xAxis:n,yAxis:a}=i;if(e==null||e.lines.length===0)return void o.series.clear();const s=new Map,r=new Set(o.series.values),p=e.lines.length;for(let d=0;d<p;d++){const m=e.lines[d];let c=t.get(m.id);c?(c.fill&&r.delete(c.fill),r.delete(c.line)):(c=Xi(i,m),c.fill&&o.series.push(c.fill),o.series.push(c.line)),s.set(c.id,c);const x=p-d-1;(l=c.fill)==null||l.set("layer",x),c.line.set("layer",p+x),zi(i,c,m)}i.seriesInfos=s;for(const d of r)o.series.removeValue(d);n.set("layer",p+1),a.set("layer",p+2)}function zi({theme:i},o,e){const t=u(e.color.toCss()),n=e.samples??[],a=n.length>0,{line:s,fill:r}=o;s.set("visible",a),s.set("stroke",t),r==null||r.set("visible",a),r==null||r.set("fill",ui.lighten(t,i.seriesFillLighten)),s.data.setAll(n),r==null||r.data.setAll(n)}function Xi(i,o){const{id:e}=o,t=C(i,`${fi}-${e}`);t.setAll({dy:o.chartStrokeOffsetY,tooltip:Yi(i)}),t.strokes.template.setAll({strokeWidth:o.chartStrokeWidth});let n=null;return o.chartFillEnabled&&(n=C(i,`${gi}-${e}`),n.fills.template.setAll({fillOpacity:1,visible:!0})),{id:e,line:t,fill:n}}function C(i,o){return ci.new(i.chart.root,{connect:!1,excludeFromTotal:!0,fill:void 0,id:o,stroke:void 0,valueXField:"distance",valueYField:"elevation",xAxis:i.xAxis,yAxis:i.yAxis})}function Yi({theme:i,chart:o}){var a;const e=O.new(o.root,{autoTextColor:!1,forceHidden:!0,getFillFromSprite:!1,getLabelFillFromSprite:!1,pointerOrientation:"vertical",visible:!1}),t=i.seriesTooltipPaddingHorizontal,n=i.seriesTooltipPaddingVertical;return e.label.setAll({fill:u(i.seriesTooltipLabelColor),fontFamily:i.fontFamily,fontSize:i.seriesTooltipFontSize,paddingBottom:n,paddingLeft:t,paddingRight:t,paddingTop:n,textAlign:"start"}),(a=e.get("background"))==null||a.setAll({stroke:void 0,fill:u(i.seriesTooltipBackgroundColor)}),e.adapters.add("dy",s=>{var l;const r=i.seriesTooltipSpacing,p=((l=e.get("pointTo"))==null?void 0:l.y)??0;return(s??0)+(e.y()>p?r:-r)}),e}function ki(i,o){const{xAxis:e,yAxis:t}=i,n=()=>{o(w(e),w(t))},a=s=>[s.on("start",n),s.on("end",n)];return Z([...a(e),...a(t)])}function w(i){const o=Math.abs((i.get("end")??0)-(i.get("start")??0)),e=o!==0?1/o:1;return Math.abs(1-e)<ti()?1:e}function Ci(i,o){const{chart:e,xAxis:t,yAxis:n}=i,a=e.get("cursor"),s=e.plotContainer.events,r=l=>{i.pointerIsOver=l,T(i)},p=()=>{r(!1),o(null,null)};return Z([a==null?void 0:a.events.on("cursormoved",()=>{if(!i.pointerIsOver)return;T(i);let l=(a==null?void 0:a.getPrivate("positionX"))??0,d=(a==null?void 0:a.getPrivate("positionY"))??0;const m=i.data;if((m==null?void 0:m.statistics)!=null){const{maxDistance:c,minElevation:x,maxElevation:F}=m.statistics;c!=null&&(l=B(l,H(t),$(t),0,c)),x!=null&&F!=null&&(d=B(d,H(n),$(n),x,F))}o(l,d)}),s.on("pointerover",()=>r(!0)),s.on("pointerout",p),s.on("blur",p)])}function B(i,o,e,t,n){return(o+i*(e-o)-t)/(n-t)}function T(i){const o=wi(i);if(!o)return void i.seriesInfos.forEach(e=>{var t;(t=e.line.get("tooltip"))==null||t.set("forceHidden",!0)});i.seriesInfos.forEach(e=>{const t=e.line.get("tooltip");t.set("forceHidden",!1),t.label.set("text",o)}),i.xAxis.getTooltip().setAll({tooltipText:$i(i)})}function wi(i){const{data:o}=i,e=o==null?void 0:o.lines.map(t=>{var n;return{line:t,y:(n=j(i,t))==null?void 0:n.elevation}}).sort(Bi);return e&&e.length!==0&&e[0].y!=null?e.map(({y:t,line:n})=>Hi(i,n,t)).join(`
`):null}function Bi({y:i},{y:o}){return i==null?1:o==null?-1:o-i}function Hi(i,o,e){const{data:t,messages:n}=i;if(t==null||n==null)return"";const a=v().formatPrecision,s=J(n.chartTooltip,{name:oi(o,n),elevation:e!=null?R(n,e,t.effectiveUnits.elevation,a):ni});return`[${o.color.toHex()}]●[/] ${s}`}function $i(i){const{data:o,messages:e}=i;if(o==null||e==null)return"";const t=o.lines[0],n=t?j(i,t):null,a=v().formatPrecision;return n!=null?R(e,n.distance,o.effectiveUnits.distance,a):"-"}function U(i,o){const e=si.new(i.chart.root,{});return e.format=(t,n,a)=>{const{data:s,messages:r}=i;return r==null||s==null||typeof t=="string"?"":`${Q(t,{maximumFractionDigits:a})} ${ei(r,s.effectiveUnits[o],"abbr")}`},e}function j({chart:i,xAxis:o},e){const t=e.samples??[];if(t.length===0)return null;const n=i.get("cursor"),a=(n==null?void 0:n.getPrivate("positionX"))??0,s=o.toAxisPosition(a),r=o.positionToValue(s);return _(t,r,p=>p.distance)}function H(i){return i.positionToValue(i.get("start")??0)}function $(i){return i.positionToValue(i.get("end")??1)}function Z(i){return W(i.map(L))}function L(i){return ii(()=>{i==null||i.dispose()})}export{Ut as createChart,Fi as getAdjustedBounds};
