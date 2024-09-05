import{v as l,y as o,z as g,W as G,bL as N,ba as $,c8 as L,aM as pe,dj as le,O as ne,jD as Me,gh as We,J as Re,gK as Q,gl as F,cZ as Ie,bP as a,lj as ee,lo as ve,aa as he,bR as I,i_ as A,gd as Oe,gk as de,bQ as H}from"./index-BfC8i6jT.js";import{c as ge,a as Ae,i as He,H as De,f as Te}from"./BuildingSceneLayer-BJYdJaay.js";import{i as z}from"./legacyIcon-CtsJ0OTG.js";import{e as X}from"./Heading-DgRsy-7b.js";import"./BuildingComponentSublayer-DO9UOxBH.js";import"./capabilities-CAweHQni.js";import"./I3SIndexInfo-B_sjYSNR.js";import"./I3SLayerDefinitions-CKg4Jqm8.js";import"./I3SUtil-DG-NOtUa.js";import"./spatialReferenceEllipsoidUtils-6vOoKuZD.js";import"./projectVectorToVector-C51LtB8f.js";import"./projectPointToVector-C0Qwzs7z.js";import"./sphere-BgvJtIjV.js";import"./plane-ByuX_NXR.js";import"./mathUtils-DIiwy5h7.js";import"./I3SBinaryReader-Dg8OkvTP.js";import"./VertexAttribute-BnAa5VW0.js";import"./computeTranslationToOriginAndRotation-DK7GzGeb.js";import"./edgeUtils-7PCAzCge.js";import"./floatRGBA-BcMV1NFr.js";import"./DecodeSymbolColor.glsl-BR7HIChu.js";import"./interfaces-B8ge7Jg9.js";import"./Matrix4PassUniform-BH4JqvtO.js";import"./BindType-BmZEZMMh.js";import"./Float4DrawUniform-DSpHBPg2.js";import"./orientedBoundingBox-Do1Vt1ct.js";import"./popupUtils-6OYxcFTS.js";import"./BuildingGroupSublayer-BQxXIuhc.js";import"./SceneService-Bm0uI7TC.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-C8eQ5wGh.js";import"./resourceUtils-CDTmlAIQ.js";import"./resourceUtils-DzMAFaS9.js";import"./saveAPIKeyUtils-CenJfJfg.js";import"./saveUtils-CIK33ozp.js";import"./associatedFeatureServiceUtils-DX1hd61h.js";import"./elevationInfoUtils-Dkzy2V0O.js";const ze="overview",_e=t=>e=>{const s=t.toLowerCase();return e.sublayers.find(i=>{var n;return((n=i.modelName)==null?void 0:n.toLowerCase())===s})??null},ye=_e("fullmodel"),Ue=_e(ze);function Ke(t){const e=ye(t);e!=null&&(e.visible=!0);const s=Ue(t);s!=null&&(s.visible=!1)}function te(t,e){const s=qe(t,e);if(s==null)return null;const i=s.fieldName;if(i==null||!i)return null;const n=je(t,i),r=new Map;for(const h of s.mostFrequentValues??[])typeof h=="number"&&r.set(h,n!=null?n.getName(h):String(h));return{fieldName:i,fieldValueMap:r}}function je(t,e){var s;for(const i of t.allSublayers.items){const n=i.type==="building-component"?(s=i.getFieldDomain)==null?void 0:s.call(i,e):null;if(n&&n.type==="coded-value")return n}return null}function qe(t,e){var n;const s=((n=t.summaryStatistics)==null?void 0:n.fields)??[],i=e.toLowerCase();return s.find(r=>{var h;return((h=r.modelName)==null?void 0:h.toLowerCase())===i})??null}let c=class extends G{constructor(){super(...arguments),this.id="root",this.parent=null,this.children=new N,this.layers=new N,this.level=0,this.collapsed=!0,this._childIds=new Set,this._layerUniqueIds=new Set}initialize(){this.addHandles([this.layers.on("before-add",e=>{this._layerUniqueIds.has(e.item.uid)?e.preventDefault():this._layerUniqueIds.add(e.item.uid)}),this.layers.on("after-add",({item:e})=>{this.addHandles([$(()=>e.visible,()=>this.notifyChange("visible"),L),$(()=>e.title,()=>this.notifyChange("title"),L)],e.uid)}),this.layers.on("before-remove",({item:e})=>{this.removeHandles(e.uid),this.notifyChange("title"),this.notifyChange("visible")}),this.children.on("before-add",e=>{this._childIds.has(e.item.id)?e.preventDefault():(e.item._set("parent",this),this._childIds.add(e.item.id))})])}destroy(){this.children.forEach(e=>e.destroy())}get hasChildren(){return this.children.length>0}get isRoot(){return this.level===0}get isLeaf(){return!this.hasChildren}get isDiscipline(){return this.level===1}get visible(){return ue(this.layers,e=>e.visible)}get title(){return ue(this.layers,e=>e.title)||this.layers.items.map(e=>e.title).join(", ")||null}toggleVisibility(e){const s=e===void 0?!this.visible:e;this.layers.forEach(i=>{i.visible=s}),s&&this.parent!=null&&this.parent.toggleVisibility(!0)}toggleCollapsed(e){this.collapsed=e===void 0?!this.collapsed:e}expand(){this.collapsed=!1}expandAll(){this.expand(),this.children.forEach(e=>e.expandAll())}collapse(){this.collapsed=!0}collapseAll(){this.collapse(),this.children.forEach(e=>e.collapseAll())}toggleAllSiblingsVisibility(e){const s=e===void 0?!this.visible:e;this.toggleVisibility(s),this.parent!=null&&(this.parent.toggleVisibility(s),this.parent.children.forEach(i=>i.toggleVisibility(s)))}};function ue(t,e){let s=null;for(const i of t.items){const n=e(i);if(s!=null&&s!==n)return null;s=n}return s}l([o({nonNullable:!0})],c.prototype,"id",void 0),l([o()],c.prototype,"parent",void 0),l([o({nonNullable:!0,readOnly:!0})],c.prototype,"children",void 0),l([o({nonNullable:!0,readOnly:!0})],c.prototype,"layers",void 0),l([o({nonNullable:!0})],c.prototype,"level",void 0),l([o({nonNullable:!0})],c.prototype,"collapsed",void 0),l([o({readOnly:!0})],c.prototype,"hasChildren",null),l([o({readOnly:!0})],c.prototype,"isRoot",null),l([o({readOnly:!0})],c.prototype,"isLeaf",null),l([o({readOnly:!0})],c.prototype,"isDiscipline",null),l([o({readOnly:!0})],c.prototype,"visible",null),l([o({readOnly:!0})],c.prototype,"title",null),c=l([g("esri.widgets.BuildingExplorer.support.LayerTreeNode")],c);function oe(){let t=new AbortController;return async e=>{t.abort(),t=new AbortController;const s={signal:t.signal},i=e.toArray().map(n=>Je(n,s));await Promise.all(i),pe(s)}}async function Je(t,e){await t.load(e),await t.loadAll(),pe(e),t.summaryStatistics&&await t.summaryStatistics.load(e)}let M=class extends G{constructor(e){super(e),this.root=new c,this.state="disabled",this._loadLayers=oe(),this.layers=new N}initialize(){this.addHandles(this.layers.on("change",()=>this._onLayersChange())),this._onLayersChange()}destroy(){this._set("state","disabled"),this.root.destroy()}set layers(e){const s=this._get("layers");this._set("layers",le(e,s))}_updateLayerTree(){this.root.destroy(),this._set("root",new c({collapsed:!1}));const e=new Map,s=this.layers.length>1?"modelName":"id";return this.layers.forEach(i=>{const n=ye(i);this._addNodesForSublayers(n??i,this.root,e,s)}),this}_addNodeForLayer(e,s,i,n){const r=String(e[n]).toLowerCase();if(r==null||e.isEmpty)return;const h=`${s.id}/${r}`;let u=i.get(h);u||(u=new c({id:r,level:s.level+1}),i.set(h,u)),u.layers.push(e),s.children.push(u),this._addNodesForSublayers(e,u,i,n)}_addNodesForSublayers(e,s,i,n){(e.type==="building-scene"||e.type==="building-group"&&!e.isEmpty)&&e.sublayers.forEach(r=>this._addNodeForLayer(r,s,i,n))}async _onLayersChange(){if(this._set("state","loading"),this.layers.length!==0)try{await this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(e){ne(e)||this._set("state","failed")}}};l([o({readOnly:!0})],M.prototype,"root",void 0),l([o({type:N,nonNullable:!0})],M.prototype,"layers",null),l([o({readOnly:!0,nonNullable:!0})],M.prototype,"state",void 0),M=l([g("esri.widgets.BuildingExplorer.BuildingDisciplinesViewModel")],M);const be=M;function J(t){const e={fieldValueMap:new Map,allowedValues:[]};for(const s of t){const i=s.fieldValueMap,n=e.fieldValueMap;i.forEach((r,h)=>{n.has(h)||(n.set(h,r),e.allowedValues.push(h))})}return e.allowedValues.sort((s,i)=>s-i),e}function Ge(t){let e=null;for(const s of t)e=e!=null?Math.min(e,s):s;return e}function Qe(t){let e=null;for(const s of t)e=e!=null?Math.max(e,s):s;return e}function Y(t,e){return e.allowedValues.length>0?Xe(t,e.allowedValues):null}function Xe(t,e){if(e.length===0)return t;if(t===1/0)return e[e.length-1];if(t===-1/0)return e[0];let s=e[0],i=Math.abs(s-t);for(const n of e){const r=Math.abs(n-t);r<i&&(s=n,i=r)}return s}let p=class extends G{constructor(e){super(e),this.state="disabled",this._valueBeforeReady=null,this._domainInfo=J([]),this._loadLayers=oe(),this.layers=new N}initialize(){this.addHandles(this.layers.on("change",()=>this._onLayersChange())),this._onLayersChange()}destroy(){this._set("state","disabled")}get enabled(){return this.allowedValues.length>0&&this._get("enabled")}set enabled(e){e!==this.enabled&&this.allowedValues.length>0&&this._set("enabled",e)}get value(){return(this.state==="ready"?this._get("value"):this._valueBeforeReady)??0}set value(e){if(this.state!=="ready")return void(this._valueBeforeReady=e);if(e===this.value)return;const s=Y(e,this);s!=null&&this._set("value",s)}get min(){return Ge(this.allowedValues)}get max(){return Qe(this.allowedValues)}get allowedValues(){return this._domainInfo.allowedValues}set allowedValues(e){e==null?this._clearOverride("allowedValues"):this._override("allowedValues",e);const s=Y(this.value,this);s!=null&&(this.value=s)}get hasNext(){if(!this.enabled)return!0;const e=this._valueIndex;return e>=0&&e<this.allowedValues.length-1}get hasPrevious(){return!this.enabled||this._valueIndex>0}set layers(e){const s=this._get("layers");this._set("layers",le(e,s))}get filterExpressions(){return{solid:null,xRay:null}}get _valueIndex(){return Me(this.allowedValues,this.value)}select(e){if(this.state!=="ready")return void(this._valueBeforeReady=e);Y(e,this)!=null&&(this.enabled=!0,this.value=e)}clear(){this.state==="ready"?this.enabled=!1:this._valueBeforeReady=null}next(){const{state:e,allowedValues:s,enabled:i,hasNext:n,_valueIndex:r}=this;if(e==="ready"||this._valueBeforeReady==null){if(s.length!==0)return i?void(n&&(this.value=s[r+1])):(this.enabled=!0,void(this.value=s[0]))}else this._valueBeforeReady++}previous(){const{state:e,allowedValues:s,enabled:i,hasPrevious:n,_valueIndex:r}=this;if(e==="ready"||this._valueBeforeReady==null){if(s.length!==0)return i?void(n&&(this.value=s[r-1])):(this.enabled=!0,void(this.value=s[s.length-1]))}else this._valueBeforeReady++}getValueLabel(e){return this.layers.length===0?null:this._domainInfo.fieldValueMap.get(e)??null}async _onLayersChange(){if(this._set("state","loading"),this._domainInfo=J([]),this.layers.length!==0)try{await this._loadLayers(this.layers),this._setup()}catch(e){ne(e)||this._set("state","failed")}}};l([o({value:!1,nonNullable:!0})],p.prototype,"enabled",null),l([o({nonNullable:!0})],p.prototype,"value",null),l([o({readOnly:!0})],p.prototype,"min",null),l([o({readOnly:!0})],p.prototype,"max",null),l([o()],p.prototype,"allowedValues",null),l([o({readOnly:!0})],p.prototype,"hasNext",null),l([o({readOnly:!0})],p.prototype,"hasPrevious",null),l([o({type:N,nonNullable:!0})],p.prototype,"layers",null),l([o({nonNullable:!0})],p.prototype,"state",void 0),l([o()],p.prototype,"_valueBeforeReady",void 0),l([o({readOnly:!0})],p.prototype,"_valueIndex",null),l([o()],p.prototype,"_domainInfo",void 0),p=l([g("esri.widgets.BuildingExplorer.BuildingNumericFilterViewModel")],p);const me=p,fe="__BUILDING_EXPLORER_FILTER__";function Ye(){return`${We()}${fe}`}function se(t){const e=typeof t=="string"?t:t.id;return!!e&&e.includes(fe)}function we(t,e){for(const s of t.items)for(const i of s.filters.items){if(!se(i))continue;const n=e(i);if(n!=null)return n}return null}function Ze(t,e){t.forEach(s=>{const i=s.filters.filter(r=>!se(r));e!=null&&i.push(e),et(s.filters,i)||(s.filters=i);const n=s.filters.find(r=>se(r));s.activeFilterId=n!=null?n.id:null})}function et(t,e){const s=e.length;if(t==null||t.length!==s)return!1;for(let i=0;i<s;++i){const n=e.at(i).toJSON(),r=t.at(i).toJSON();if(n.id="",r.id="",JSON.stringify(n)!==JSON.stringify(r))return!1}return!0}function tt(t){const e=$e(t);return e?new ge({filterExpression:e,filterMode:new Ae}):null}function st(t){const e=$e(t);return e?new ge({filterExpression:e,filterMode:new He}):null}function $e(t){return t.filter(e=>!!e).map(e=>`(${e})`).join(" AND ")}const it="bldglevel";let W=class extends me{constructor(){super(...arguments),this._levelFieldName=null,this._parseValueFromFilter=e=>{var n;const s=new RegExp(`${this._levelFieldName}\\s*=\\s*(\\d+)`,"gi"),i=new RegExp(`${this._levelFieldName}\\s*<\\s*(\\d+)`,"gi");for(const{filterMode:r,filterExpression:h}of((n=e.filterBlocks)==null?void 0:n.items)??[]){if(h==null)continue;let u=null;if(r.type==="solid"?u=s.exec(h):r.type==="x-ray"&&(u=i.exec(h)),u)return parseInt(u[1],10)}return null}}get filterExpressions(){return this.enabled&&this._levelFieldName?{xRay:`${this._levelFieldName} < ${this.value}`,solid:`${this._levelFieldName} = ${this.value}`}:{solid:null,xRay:null}}get _firstValue(){const e=this.allowedValues;return e.length>0?e[0]:0}_setup(){const e=[];this.layers.forEach(n=>{const r=te(n,it);r!=null&&(this._levelFieldName=r.fieldName,e.push(r))}),this._domainInfo=J(e);const s=this._valueBeforeReady;this._set("state","ready"),this._valueBeforeReady=null;const i=s??we(this.layers,this._parseValueFromFilter);i!=null?this.select(i):(this.enabled=!1,this.value=this._firstValue)}};l([o({readOnly:!0})],W.prototype,"filterExpressions",null),l([o()],W.prototype,"_levelFieldName",void 0),l([o({readOnly:!0})],W.prototype,"_firstValue",null),W=l([g("esri.widgets.BuildingExplorer.BuildingLevel")],W);const Le=W,lt="demolishedphase",nt="createdphase";let S=class extends me{constructor(){super(...arguments),this._createdPhaseFieldName=null,this._demolishedPhaseFieldName=null,this._parseValueFromFilter=e=>{var h;const s=this._createdPhaseFieldName,i=new RegExp(`${s}\\s*<=\\s*(\\d+)\\s*OR\\s*${s}\\s*IS\\s*NULL`,"gi"),n=this._demolishedPhaseFieldName,r=new RegExp(`${n}\\s*>\\s*(\\d+)\\s*OR\\s*${n}\\s*IS\\s*NULL`,"gi");for(const{filterExpression:u}of((h=e.filterBlocks)==null?void 0:h.items)??[]){const O=u?i.exec(u)??r.exec(u):null;if(O)return parseInt(O[1],10)}return null}}get filterExpressions(){if(!this.enabled)return{solid:null,xRay:null};const e=[],s=this._createdPhaseFieldName;s&&e.push(`(${s} <= ${this.value} OR ${s} IS NULL)`);const i=this._demolishedPhaseFieldName;i&&e.push(`(${i} > ${this.value} OR ${i} IS NULL)`);const n=e.join(" AND ");return{solid:n,xRay:n}}get _lastValue(){const e=this.allowedValues;return e.length>0?e[e.length-1]:0}_setup(){const e=[];this.layers.forEach(i=>{const n=te(i,nt);n!=null&&(this._createdPhaseFieldName=n.fieldName,e.push(n));const r=te(i,lt);r!=null&&(this._demolishedPhaseFieldName=r.fieldName,e.push(r))}),this._domainInfo=J(e);const s=this._valueBeforeReady;if(this._set("state","ready"),this._valueBeforeReady=null,this.allowedValues.length>0){const i=s??we(this.layers,this._parseValueFromFilter);this.select(i??this._lastValue)}else this.clear()}};l([o({readOnly:!0})],S.prototype,"filterExpressions",null),l([o()],S.prototype,"_createdPhaseFieldName",void 0),l([o()],S.prototype,"_demolishedPhaseFieldName",void 0),l([o({readOnly:!0})],S.prototype,"_lastValue",null),S=l([g("esri.widgets.BuildingExplorer.BuildingPhase")],S);const xe=S;let f=class extends G{constructor(e){super(e),this.view=null,this.state="disabled",this.level=new Le,this.phase=new xe,this.disciplines=new be,this._loadLayers=oe(),this.layers=new N}initialize(){this.addHandles([this.layers.on("change",()=>this._onLayersChange()),$(()=>({state:this.state,layers:this.layers,filter:this._filter}),({state:e,layers:s,filter:i})=>{e==="ready"&&Ze(s,i)},{initial:!0})]),this._onLayersChange()}destroy(){this.level.destroyed||this.level.destroy(),this.phase.destroyed||this.phase.destroy(),this.disciplines.destroyed||this.disciplines.destroy()}get isSupported(){var e;return((e=this.view)==null?void 0:e.type)==="3d"}get layers(){return this._get("layers")}set layers(e){const s=e.filter(i=>i instanceof De);s.length!==e.length&&Re.getLogger(this).error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget."),this._set("layers",le(s,this._get("layers")))}get _filter(){const e=this.level.filterExpressions,s=this.phase.filterExpressions,i=[],n=st([e.solid,s.solid]);n!=null&&i.push(n);const r=tt([e.xRay,s.xRay]);return r!=null&&i.push(r),i.length===0?null:new Te({id:Ye(),name:"Building Explorer Filter",filterBlocks:i})}async _onLayersChange(){const e=this.layers;if(this.level.layers=e,this.phase.layers=e,this.disciplines.layers=e,e.length!==0){this._set("state","loading");try{await this._loadLayers(e),await Promise.all([Q(()=>this.level.state==="ready"),Q(()=>this.phase.state==="ready"),Q(()=>this.disciplines.state==="ready")]),e.forEach(Ke),this._set("state","ready")}catch(s){ne(s)||this._set("state","failed")}}else this._set("state","disabled")}};l([o({value:null})],f.prototype,"view",void 0),l([o()],f.prototype,"isSupported",null),l([o({type:N,nonNullable:!0})],f.prototype,"layers",null),l([o({readOnly:!0})],f.prototype,"state",void 0),l([o({readOnly:!0,type:Le})],f.prototype,"level",void 0),l([o({readOnly:!0,type:xe})],f.prototype,"phase",void 0),l([o({readOnly:!0,type:be})],f.prototype,"disciplines",void 0),l([o()],f.prototype,"_filter",null),f=l([g("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],f);const Ce=f,C="esri-building-explorer",_={base:C,panelError:`${C}__panel--error`,loadingContainer:`${C}__loading-container`,content:`${C}__content`,section:`${C}__section`,levels:`${C}__levels`,phases:`${C}__phases`,disciplines:`${C}__disciplines`};var ie;const ot={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},m="esri-building-disciplines-tree-node",y={base:m,root:`${m}--root`,leaf:`${m}--leaf`,label:`${m}__label`,checkbox:`${m}__checkbox`,checkboxChecked:`${m}__checkbox--checked`,checkboxIndeterminate:`${m}__checkbox--indeterminate`,collapseToggle:`${m}__collapse-toggle`,collapseToggleCollapsed:`${m}__collapse-toggle--collapsed`,children:`${m}__children`,level:t=>`${m}--level-${t}`};let B=ie=class extends F{constructor(t){super(t),this.messages=ot,this.toggleSiblingsVisibility=!1,this._childWidgets=[],this._updateChildWidgets=()=>{this._destroyChildWidgets(),this._childWidgets=this.node.children.toArray().reverse().map(e=>new ie({node:e,messages:this.messages,toggleSiblingsVisibility:this.toggleSiblingsVisibility}))}}initialize(){this.addHandles([Ie(()=>this.node.children,"after-changes",this._updateChildWidgets,{onListenerAdd:this._updateChildWidgets,onListenerRemove:this._updateChildWidgets}),$(()=>[this.messages,this.toggleSiblingsVisibility],this._updateChildWidgets,L)])}destroy(){this._destroyChildWidgets()}render(){const t=this.node,e=t.isRoot,s=t.isLeaf;return t.isDiscipline&&s?a("div",{key:`${t.id}-empty`}):a("div",{"aria-expanded":t.collapsed?"false":"true",bind:this,class:this.classes(y.base,y.level(t.level),{[y.root]:e,[y.leaf]:s}),key:t.id,onkeydown:this._onKeydown,role:"treeitem",tabIndex:s?void 0:0},a("label",{bind:this,class:y.label,onclick:this._onCheckboxToggle},this._renderCollapseToggle(),this._renderCheckbox(),a("span",null,t.title)),this._renderChildren(t))}_renderCheckbox(){var n,r;const t=this.node.visible,e=t===!0,s=t===null,i=e?(n=this.messages)==null?void 0:n.hideSublayer:(r=this.messages)==null?void 0:r.showSublayer;return a("button",{"aria-checked":e?"true":"false","aria-label":i,bind:this,class:this.classes(y.checkbox,{[y.checkboxChecked]:e,[z.checkMark]:e,[y.checkboxIndeterminate]:s,[z.minus]:s}),onclick:this._onCheckboxToggle,role:"checkbox",title:i,type:"button"})}_renderCollapseToggle(){var s,i;if(!this.node.hasChildren)return null;const t=this.node.collapsed,e=t?(s=this.messages)==null?void 0:s.expand:(i=this.messages)==null?void 0:i.collapse;return a("div",{"aria-label":e,bind:this,class:this.classes(y.collapseToggle,z.right,{[y.collapseToggleCollapsed]:t}),onclick:this._onCollapseToggle,title:e})}_renderChildren(t){return!t.hasChildren||t.collapsed?null:a("div",{class:y.children},this._childWidgets.map(e=>e.render()))}_onKeydown(t){switch(t.key){case"Space":case"Enter":if(!t.target.classList.contains(y.base))return;t.stopPropagation(),this.node.toggleVisibility();break;case"ArrowLeft":t.stopPropagation(),this.node.toggleCollapsed(!ee(this.container));break;case"ArrowRight":t.stopPropagation(),this.node.toggleCollapsed(ee(this.container))}}_onCheckboxToggle(t){t.preventDefault(),t.stopPropagation(),(t.metaKey||t.ctrlKey)&&this.toggleSiblingsVisibility?this.node.toggleAllSiblingsVisibility():this.node.toggleVisibility()}_onCollapseToggle(t){t.preventDefault(),t.stopPropagation(),this.node.toggleCollapsed()}_destroyChildWidgets(){this._childWidgets.forEach(t=>t.destroy()),this._childWidgets=[]}};l([o({type:c})],B.prototype,"node",void 0),l([o()],B.prototype,"messages",void 0),l([o({nonNullable:!0})],B.prototype,"toggleSiblingsVisibility",void 0),l([o()],B.prototype,"_childWidgets",void 0),B=ie=l([g("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")],B);const rt=B,at={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},ht={base:"esri-building-disciplines-tree"};let R=class extends F{constructor(e){super(e),this.toggleSiblingsVisibility=!1}render(){const{vm:e}=this,s=this.toggleSiblingsVisibility,i=this.messages??at;return a("div",{class:ht.base,role:"tree"},e.root.children.toArray().reverse().map(n=>a(rt,{messages:i,node:n,toggleSiblingsVisibility:s})))}};l([o()],R.prototype,"vm",void 0),l([o()],R.prototype,"messages",void 0),l([o()],R.prototype,"toggleSiblingsVisibility",void 0),R=l([g("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],R);const dt=R,Pe=30,ke=20,Ve=30,Ee=10,j=20,q=2,Ne=.035,Se=30,Be=14,Fe=80,ut=100,ct=40,pt=Object.freeze(Object.defineProperty({__proto__:null,alphaLevelDependencyFactor:Ve,alphaSpreadFactor:Ee,levelHeightDefault:Be,levelHoveredExtraHeight:Pe,levelHoveredExtraWidth:ke,levelWidthConstant:ct,levelWidthMax:Fe,levelWidthMin:Se,levelWidthNominator:ut,levelsMarginFactor:q,levelsPadding:j,levelsPointerAdjustment:Ne},Symbol.toStringTag,{value:"Module"})),P="esri-building-level-picker",k={container:P,noLevel:`${P}--no-level`,animateLevel:`${P}--animate-level`,levelsContainer:`${P}__levels-container`,innerLevelsContainer:`${P}__inner-levels-container`,labelContainer:`${P}__label-container`,arrowUp:`${P}__arrow-up`,arrowDown:`${P}__arrow-down`},D="esri-building-level-picker-label",T={base:D,active:`${D}--active`,hover:`${D}--hover`,empty:`${D}--empty`,clearButton:`${D}__clear-button`},vt={clearLevel:"",selectLevel:""};let V=class extends F{constructor(e,s){super(e,s),this.level=null,this.active=!1,this.hovering=!1,this.onClear=()=>{}}render(){const e=this.messages??vt;if(this.level==null)return a("div",{class:T.empty,title:e.selectLevel},e.selectLevel);const s=e.clearLevel;return a("div",{"aria-label":s,bind:this,class:this.classes(T.base,{[T.active]:this.active,[T.hover]:this.hovering}),onclick:this.onClear,title:s},a("span",null,this.level),a("button",{bind:this,class:this.classes(T.clearButton,z.close),disabled:!this.active,onclick:this.onClear,type:"button"}))}};l([o()],V.prototype,"level",void 0),l([o({nonNullable:!0})],V.prototype,"active",void 0),l([o({nonNullable:!0})],V.prototype,"hovering",void 0),l([o()],V.prototype,"messages",void 0),l([o({nonNullable:!0})],V.prototype,"onClear",void 0),V=l([g("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],V);const U="esri-building-level-picker-item",K={container:U,base:`${U}__base`,hover:`${U}--hover`,active:`${U}--active`};let w=class extends F{constructor(t,e){super(t,e),this.active=!1,this.hovering=!1,this.width=0,this.height=0,this.onSelect=()=>{},this.onFocus=()=>{},this.onBlur=()=>{},this._baseElement=null}render(){return a("div",{bind:this,class:this.classes(K.container,{[K.active]:this.active,[K.hover]:this.hovering}),key:this,styles:{height:`${this.height}px`}},this._renderBase())}focus(){this._baseElement!=null&&this._baseElement.focus()}_renderBase(){const t=this.width,e=.8*this.width;return a("div",{class:K.base,styles:{width:`${Math.round(t)}px`,height:`${Math.round(t)}px`}},a("button",{afterCreate:ve,"aria-label":this.label,bind:this,class:"rect","data-node-ref":"_baseElement",onblur:this.onBlur,onclick:this.onSelect,onfocus:this.onFocus,styles:{width:`${Math.round(e)}px`,height:`${Math.round(e)}px`},tabIndex:-1,title:this.label??"",type:"button"}))}};l([o({nonNullable:!0})],w.prototype,"level",void 0),l([o({nonNullable:!0})],w.prototype,"active",void 0),l([o({nonNullable:!0})],w.prototype,"hovering",void 0),l([o({nonNullable:!0})],w.prototype,"width",void 0),l([o({nonNullable:!0})],w.prototype,"height",void 0),l([o({nonNullable:!0})],w.prototype,"onSelect",void 0),l([o({nonNullable:!0})],w.prototype,"onFocus",void 0),l([o({nonNullable:!0})],w.prototype,"onBlur",void 0),w=l([g("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")],w);const Z={selectLevel:"selectLevel",clearLevel:"clearLevel",nextLevel:"nextLevel",previousLevel:"previousLevel",currentLevel:"{{value}}"};let d=class extends F{constructor(t,e){super(t,e),this._levelHandlesKey="levelHandles",this._levelEventHandlesKey="levelEventHandles",this._levelWidgets=[],this._labelWidget=new V({onClear:()=>this.vm.clear()}),this._hoveredLevel=null,this._expandedLevelsHeight=void 0,this._normalizedPointerPosition=0,this._hovering=!1,this._containerPosTop=null,this._levelsContainer=null,this._onPointerUp=()=>{var i;if((i=window.getSelection())==null||i.removeAllRanges(),this._hoveredLevel==null)return;const{vm:s}=this;s.enabled&&this._hoveredLevel===s.value?s.clear():s.select(this._hoveredLevel)},this._onPointerEnter=()=>{this._hovering||this._levelsContainer==null||(this._hovering=!0,this._containerPosTop=this._levelsContainer.getBoundingClientRect().top??0)},this._onPointerLeave=()=>{this._hovering&&(this._normalizedPointerPosition=0,this._hoveredLevel=null,this._hovering=!1)},this._onPointerMove=s=>{var i;if(!this._hovering)return!1;if((i=window.getSelection())==null||i.removeAllRanges(),this._containerPosTop!=null){const n=this._containerPosTop,r=j*q,h=this._expandedLevelsMargin;let u=this._levelsHeight,O=n+r+h;const re=this._levelHeight/2;O+=re,u-=re;let ae=(s.clientY-O)/u;ae+=Ne,this._normalizedPointerPosition=ae}return!1}}postInitialize(){this.addHandles([$(()=>this._levelsContainer,()=>this._onContainerChange(),L),$(()=>this._levels,()=>this._createLevelWidgets(),L),$(()=>this.messages,()=>{this._labelWidget.messages=this.messages??Z},L)])}destroy(){this._levelWidgets.forEach(t=>t.destroy()),this._labelWidget.destroy()}get _levels(){return this.vm.allowedValues}get _numLevels(){return this._levels.length}get _levelsHeight(){return Math.round(this._levelHeight*this._numLevels)}get _expandedLevelsMargin(){return Math.round(((this._expandedLevelsHeight??0)-this._levelsHeight)/2)}get _levelWidth(){const{levelWidthNominator:t,levelWidthConstant:e}=pt,s=t/Math.sqrt(this._numLevels)+e;return Math.round(he(s,Se,Fe))}get _levelHeight(){const t=Be,e=2*t/Math.sqrt(this._numLevels);return Math.round(he(e,2,t))}get _gaussianFactor(){const t=this._numLevels;return t/Math.log(Ve*t)*Ee}get _levelClosestToPointer(){if(!this._hovering)return null;const t=this._numLevels-1,e=this._normalizedPointerPosition;return t>=0&&e!=null?this._levels[Math.round((1-e)*t)]:null}render(){const t=this._levelWidgets.length,e=t>1?this._levelWidgets.map(h=>h.render()):null,s=j*q,i=-s/q,n=this._levelsHeight,r=n+2*s;return a("div",{bind:this,class:this.classes(I.widget,k.container,{[k.animateLevel]:!this._hovering,[k.noLevel]:t<2}),key:this,onkeydown:this._onKeyDown},this._renderLabelContainer(),a("div",{afterCreate:ve,bind:this,class:k.levelsContainer,"data-node-ref":"_levelsContainer",onfocus:this._onFocus,styles:{height:`${r}px`,marginTop:`${i}px`,marginBottom:`${i}px`}},a("div",{class:k.innerLevelsContainer,styles:{height:`${n}px`,margin:j-this._expandedLevelsMargin+"px 0 0 0"}},e)))}_renderLabelContainer(){const t=this.messages??Z,e=t.previousLevel,s=t.nextLevel;return a("div",{class:k.labelContainer,tabIndex:0},a("button",{"aria-label":s,bind:this,class:k.arrowUp,disabled:!this.vm.hasNext,onclick:this._onArrowUpClick,title:s,type:"button"}),this._labelWidget.render(),a("button",{"aria-label":e,bind:this,class:k.arrowDown,disabled:!this.vm.hasPrevious,onclick:this._onArrowDownClick,title:e,type:"button"}))}_updateComponents(){const t=this.messages??Z,e=this.vm.enabled?this.vm.value:null,s=this._hoveredLevel!=null?this._hoveredLevel:e;this._levelWidgets.forEach(i=>{var r;const n=this.vm.getValueLabel(i.level);i.label=n??((r=t.currentLevel)==null?void 0:r.replace("{{level}}",String(i.level))),i.active=i.level===e,i.hovering=i.level===this._hoveredLevel}),this._labelWidget.level=s,this._labelWidget.active=s===e,this._labelWidget.hovering=this._hoveredLevel!=null}_createLevelWidgets(){this._levelWidgets.forEach(t=>t.destroy()),this._levelWidgets=this._levels.map(t=>new w({level:t,onSelect:()=>this._onLevelToggle(t)})),this.removeHandles(this._levelHandlesKey),this.addHandles([$(()=>{const{vm:t}=this;return[this.messages,t==null?void 0:t.value,t==null?void 0:t.enabled,this._hoveredLevel,this._hovering]},()=>this._updateComponents(),L),$(()=>[this._normalizedPointerPosition,this._hovering],()=>this._onPointerPositionChange(),L),$(()=>this._levelWidth,t=>this._levelWidgets.forEach(e=>e.width=t),L)],this._levelHandlesKey)}_onContainerChange(){const t=this._levelsContainer;t!=null&&(this.removeHandles(this._levelEventHandlesKey),this.addHandles([A(t,"pointerenter",this._onPointerEnter),A(t,"pointerover",this._onPointerEnter),A(t,"pointerleave",this._onPointerLeave),A(t,"pointerup",this._onPointerUp),A(t,"pointermove",this._onPointerMove)],this._levelEventHandlesKey))}_onKeyDown(t){switch(t.key){case"ArrowDown":case"ArrowLeft":t.preventDefault(),t.stopPropagation(),this.vm.previous(),this._focusCurrentLevel();break;case"ArrowUp":case"ArrowRight":t.preventDefault(),t.stopPropagation(),this.vm.next(),this._focusCurrentLevel()}}_focusCurrentLevel(){const t=this._levelWidgets.find(e=>e.level===this.vm.value);t==null||t.focus()}_onFocus(){this._hoveredLevel=this._levels.length>0?this._levels[0]:null}_onLevelToggle(t){const{vm:e}=this;e.enabled&&e.value===t?e.clear():e.select(t)}_onArrowUpClick(){this.vm.next()}_onArrowDownClick(){this.vm.previous()}_onPointerPositionChange(){let t=0;this._levelWidgets.forEach((s,i)=>{const{width:n,height:r}=this._getLevelWidgetSize(i);s.height=r,s.width=n,t+=r}),this._hoveredLevel=this._levelClosestToPointer;const e=this._expandedLevelsHeight;(e==null||Math.abs(e-t)>30)&&(this._expandedLevelsHeight=t)}_getLevelWidgetSize(t){const e={width:this._levelWidth,height:this._levelHeight};if(this._hovering){const s=this._getGaussianFactor(t,this._normalizedPointerPosition);e.width+=ke*s,e.height+=Pe*s}return e}_getGaussianFactor(t,e){const s=this._numLevels-1,i=(s-t)/s,n=this._gaussianFactor*(i-e);return Math.exp(-(n**2))}};l([o()],d.prototype,"vm",void 0),l([o()],d.prototype,"messages",void 0),l([o()],d.prototype,"_levelWidgets",void 0),l([o()],d.prototype,"_labelWidget",void 0),l([o()],d.prototype,"_hoveredLevel",void 0),l([o()],d.prototype,"_levels",null),l([o()],d.prototype,"_numLevels",null),l([o({readOnly:!0})],d.prototype,"_levelsHeight",null),l([o()],d.prototype,"_expandedLevelsHeight",void 0),l([o({readOnly:!0})],d.prototype,"_expandedLevelsMargin",null),l([o({readOnly:!0})],d.prototype,"_levelWidth",null),l([o({readOnly:!0})],d.prototype,"_levelHeight",null),l([o({readOnly:!0})],d.prototype,"_gaussianFactor",null),l([o({readOnly:!0})],d.prototype,"_levelClosestToPointer",null),l([o({type:Number,range:{min:0,max:1}})],d.prototype,"_normalizedPointerPosition",void 0),l([o()],d.prototype,"_hovering",void 0),l([o()],d.prototype,"_containerPosTop",void 0),l([o()],d.prototype,"_levelsContainer",void 0),d=l([g("esri.widgets.BuildingExplorer.BuildingLevelPicker.BuildingLevelPicker")],d);const gt=d,_t={nextPhase:"nextPhase",previousPhase:"previousPhase",currentPhase:"{{value}}"},x="esri-building-phase-picker",b={container:`${x}`,phasesContainer:`${x}__phases-container`,phase:`${x}__phase`,phaseActive:`${x}__phase--active`,phaseCurrent:`${x}__phase--current`,divider:`${x}__divider`,dividerActive:`${x}__divider--active`,arrowLeft:`${x}__arrow-left`,arrowRight:`${x}__arrow-right`};let E=class extends F{constructor(t,e){super(t,e),this._phasesContainer=null,this._shouldScrollCurrentPhaseIntoView=!0,this._shouldFocusCurrentPhase=!1,this._onKeyDown=s=>{const{vm:i}=this;switch(s.key){case"ArrowDown":case"ArrowLeft":s.stopPropagation(),s.preventDefault(),i.previous(),this._shouldFocusCurrentPhase=!0;break;case"ArrowUp":case"ArrowRight":s.stopPropagation(),s.preventDefault(),i.next(),this._shouldFocusCurrentPhase=!0}},this._onArrowLeftClick=()=>{this.vm.previous()},this._onArrowRightClick=()=>{this.vm.next()},this._onPhasesContainerAfterCreate=s=>{this._phasesContainer=s,requestAnimationFrame(this._scrollOrFocusPhase)},this._scrollOrFocusPhase=()=>{const s=this._phasesContainer;if(this.destroyed||s==null)return;const i=s.querySelector(`.${b.phaseCurrent}`);if(i){if(this._shouldScrollCurrentPhaseIntoView){const n=s.offsetWidth,r=i.offsetLeft,h=i.offsetWidth;s.scrollLeft=-n/2+r-h/2,this._shouldScrollCurrentPhaseIntoView=!1}this._shouldFocusCurrentPhase&&(i.focus(),this._shouldFocusCurrentPhase=!1)}}}initialize(){this.addHandles($(()=>[this._currentPhase,this._phasesContainer,this.container],()=>{this._shouldScrollCurrentPhaseIntoView=!0,requestAnimationFrame(this._scrollOrFocusPhase)},L))}get _phases(){return this.vm.allowedValues}get _currentPhase(){const{vm:t}=this;return t.enabled?t.value:null}render(){if(this._phases.length<2)return a("div",{key:"no-phases"});const{vm:t,container:e,messages:s}=this,{previousPhase:i,nextPhase:n}=s??_t,r=ee(e);return a("div",{class:this.classes(I.widget,b.container),key:this,onkeydown:this._onKeyDown},a("button",{"aria-label":i,class:r?b.arrowRight:b.arrowLeft,disabled:!t.hasPrevious,onclick:this._onArrowLeftClick,title:i,type:"button"}),a("div",{afterCreate:this._onPhasesContainerAfterCreate,class:b.phasesContainer},this._renderPhaseButtons()),a("button",{"aria-label":n,class:r?b.arrowLeft:b.arrowRight,disabled:!t.hasNext,onclick:this._onArrowRightClick,title:n,type:"button"}))}_renderPhaseButtons(){const t=this._phases,e=this._currentPhase,s=[];for(let i=0;i<t.length;++i){const n=t[i],r={phase:n,active:e!=null&&n<=e,current:e!=null&&n===e};i>0&&s.push(this._renderDivider(r)),s.push(this._renderPhaseButton(r))}return s}_renderPhaseButton({phase:t,active:e,current:s}){const{vm:i}=this,n=i.getValueLabel(t);return a("button",{"aria-label":n,class:this.classes(b.phase,{[b.phaseActive]:e,[b.phaseCurrent]:s}),key:`phase-${t}`,onclick:()=>i.select(t),title:n,type:"button"},t)}_renderDivider({phase:t,active:e}){return a("div",{class:this.classes(b.divider,{[b.dividerActive]:e}),key:`phase-divider-${t}`})}};l([o({nonNullable:!0})],E.prototype,"vm",void 0),l([o()],E.prototype,"messages",void 0),l([o()],E.prototype,"_phases",null),l([o()],E.prototype,"_currentPhase",null),l([o()],E.prototype,"_phasesContainer",void 0),E=l([g("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")],E);const yt=E,ce={levels:!0,phases:!0,disciplines:!0};let v=class extends F{constructor(t,e){super(t,e),this._defaultViewModel=new Ce,this.viewModel=this._defaultViewModel,this.visibleElements={...ce},this.headingLevel=3,this.messages=null,this.messagesCommon=null,this.toggleSiblingsVisibility=!1}destroy(){this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get layers(){return this.viewModel.layers}set layers(t){this.viewModel.layers=t}_castVisibleElements(t){return{...ce,...t}}get icon(){return"organization"}set icon(t){this._overrideIfSome("icon",t)}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}render(){const t=this.viewModel,e=t.state==="disabled"||!t.isSupported;return a("div",{"aria-label":this.messages.widgetLabel,class:H(I.widget,_.base,I.panel,{[I.widgetDisabled]:e}),key:this},this._renderContent())}_renderContent(){const t=this.viewModel,e=this.messages;if(!t.isSupported)return a("p",{class:_.panelError},e.unsupported);if(!t.layers.length)return a("p",{class:_.panelError},e.noData);switch(t.state){case"loading":return this._renderLoadingIndicator();case"ready":return a("div",{class:_.content,key:"content"},this._renderLevelPickerSection(),this._renderPhasePickerSection(),this._renderDisciplinesSection());case"failed":return a("p",{class:_.panelError},e.failed);default:return null}}_renderLoadingIndicator(){const t=this.messagesCommon.loading;return a("div",{"aria-label":t,class:_.loadingContainer,key:"loading-container",role:"presentation",title:t},a("span",{"aria-hidden":"true",class:H(z.loadingIndicator,I.rotating)}))}_renderLevelPickerSection(){var n;const t=this.viewModel.level,e=t.state==="ready",s=t.allowedValues.length>1;if(!this.visibleElements.levels||!e||!s)return null;const i=(n=this.messages)==null?void 0:n.level;return a("div",{class:H(_.section,_.levels),key:"levels"},a(X,{level:this.headingLevel},i==null?void 0:i.title),a(gt,{messages:i,vm:t}))}_renderPhasePickerSection(){const t=this.viewModel.phase,e=t.state==="ready",s=t.allowedValues.length>1;if(!this.visibleElements.phases||!e||!s)return null;const i=this.messages.phase;return a("div",{class:H(_.section,_.phases),key:"phases"},a(X,{level:this.headingLevel},i.title),a(yt,{messages:i,vm:t}))}_renderDisciplinesSection(){var n;const t=this.viewModel.disciplines,e=t.state==="ready",s=t.root.hasChildren;if(!this.visibleElements.disciplines||!e||!s)return null;const i=(n=this.messages)==null?void 0:n.disciplines;return a("div",{class:H(_.section,_.disciplines),key:"disciplines"},a(X,{level:this.headingLevel},i.title),a(dt,{messages:i,toggleSiblingsVisibility:this.toggleSiblingsVisibility,vm:t}))}};l([o({type:Ce})],v.prototype,"viewModel",void 0),l([o()],v.prototype,"view",null),l([o()],v.prototype,"layers",null),l([o()],v.prototype,"visibleElements",void 0),l([Oe("visibleElements")],v.prototype,"_castVisibleElements",null),l([o()],v.prototype,"headingLevel",void 0),l([o()],v.prototype,"icon",null),l([o()],v.prototype,"label",null),l([o(),de("esri/widgets/BuildingExplorer/t9n/BuildingExplorer")],v.prototype,"messages",void 0),l([o(),de("esri/t9n/common")],v.prototype,"messagesCommon",void 0),l([o({nonNullable:!0})],v.prototype,"toggleSiblingsVisibility",void 0),l([o()],v.prototype,"uiStrings",void 0),v=l([g("esri.widgets.BuildingExplorer")],v);const ds=v;export{ds as default};
