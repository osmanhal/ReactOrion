import{d_ as W,d$ as D,e6 as P,e2 as a,e3 as ie,e5 as ae}from"./index-BfC8i6jT.js";import{s as U,a as _,c as ne}from"./loadable-QAoPxwWP.js";import{u as j,c as V,s as q,d as G}from"./t9n-BUWevPjH.js";import{n as I,c as J,d as K}from"./locale-CiqLNmAk.js";import{d as le}from"./button-Ds3IAz_z.js";import{d as oe}from"./chip-D5D8cU_q.js";import{d as Q}from"./icon-BWRRlyjd.js";import{d as ce}from"./loader-DI4JVeCP.js";import{c as re}from"./observers-BDfujgVA.js";import{g as k}from"./component-CVleUxfT.js";import"./dom-Bb9h_pls.js";import"./key-DuBxtzvS.js";import"./form-CZfgqAxW.js";import"./interactive-DP0XaYPR.js";import"./label-NjdjENzu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const de={min:"0",max:"320px"},he={min:"321px",max:"476px"},me={min:"477px",max:"768px"},ge={min:"769px",max:"1152px"},pe={min:"1153px",max:"1440px"},x={width:{large:y(pe.max),medium:y(ge.max),small:y(me.max),xsmall:y(he.max),xxsmall:y(de.max)}};function y(S){return parseInt(S)}const c={list:"list",listItem:"list-item",page:"page",selected:"selected",chevron:"chevron",disabled:"disabled",ellipsis:"ellipsis"},w={next:"chevron-right",previous:"chevron-left",first:"chevron-start",last:"chevron-end"},ue=`:host{display:flex;writing-mode:horizontal-tb}.list{margin:0px;display:flex;list-style-type:none;padding:0px}.list-item{margin:0px;display:flex;padding:0px}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-color-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-end-color:var(--calcite-color-brand)}.chevron:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-brand)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}`,fe=ue,E=2,B=2,b={large:11,medium:9,small:7,xsmall:5,xxsmall:1},be=W(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=P(this,"calcitePaginationChange",6),this.resizeObserver=re("resize",e=>e.forEach(this.resizeHandler)),this.resizeHandler=({contentRect:{width:e}})=>this.setMaxItemsToBreakpoint(e),this.firstClicked=()=>{this.startItem=1,this.emitUpdate()},this.lastClicked=()=>{this.startItem=this.lastStartItem,this.emitUpdate()},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=b.xxsmall,this.totalPages=void 0,this.lastStartItem=void 0,this.isXXSmall=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){j(this,this.effectiveLocale)}effectiveLocaleWatcher(){I.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}handleLastStartItemChange(){const{totalItems:e,pageSize:t,totalPages:s}=this;this.lastStartItem=(e%t===0?e-t:Math.floor(s)*t)+1}handleIsXXSmall(){this.isXXSmall=this.maxItems===b.xxsmall}connectedCallback(){var e;J(this),V(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await q(this),U(this),this.handleTotalPages(),this.handleLastStartItemChange(),this.handleIsXXSmall()}componentDidLoad(){_(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){var e;K(this),G(this),(e=this.resizeObserver)==null||e.disconnect()}async setFocus(){await ne(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.lastStartItem,this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}async goTo(e){switch(e){case"start":this.startItem=1;break;case"end":this.startItem=this.lastStartItem;break;default:e>=Math.ceil(this.totalPages)?this.startItem=this.lastStartItem:e<=0?this.startItem=1:this.startItem=(e-1)*this.pageSize+1}}setMaxItemsToBreakpoint(e){if(!(!x||!e)){if(e>=x.width.medium){this.maxItems=b.large;return}if(e>=x.width.small){this.maxItems=b.medium;return}if(e>=x.width.xsmall){this.maxItems=b.small;return}if(e>=x.width.xxsmall){this.maxItems=b.xsmall;return}this.maxItems=b.xxsmall}}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-E-B}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-E-(B-1)}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return a("span",{class:c.ellipsis,"data-test-ellipsis":e,key:e},"…")}renderItems(){const{totalItems:e,pageSize:t,startItem:s,maxItems:i,totalPages:l,lastStartItem:r,isXXSmall:h}=this,o=[];if(h)return o.push(this.renderPage(s)),o;const n=e>t,d=this.showStartEllipsis(),v=this.showEndEllipsis();n&&o.push(this.renderPage(1)),d&&o.push(this.renderEllipsis("start"));const m=i-E-(v?1:0)-(d?1:0);let u,g;l-1<=m?(g=1+t,u=r-t):s/t<m?(g=1+t,u=1+m*t):s+m*t>=e?(g=r-m*t,u=r-t):(g=s-t*((m-1)/2),u=s+t*((m-1)/2));for(let z=0;z<m&&g<=u;z++)o.push(this.renderPage(g)),g=g+t;return v&&o.push(this.renderEllipsis("end")),o.push(this.renderPage(r)),o}renderPage(e){const{pageSize:t}=this,s=Math.floor(e/t)+(t===1?0:1);I.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=I.localize(s.toString()),l=e===this.startItem;return a("li",{class:c.listItem},a("button",{"aria-current":l?"page":"false",class:{[c.page]:!0,[c.selected]:l},onClick:this.handlePageClick,value:e},i))}renderPreviousChevron(){const{pageSize:e,startItem:t,messages:s}=this,i=e===1?t<=e:t<e;return a("button",{"aria-label":s.previous,class:{[c.chevron]:!0,[c.disabled]:i},"data-test-chevron":"previous",disabled:i,key:"previous",onClick:this.previousClicked},a("calcite-icon",{flipRtl:!0,icon:w.previous,scale:k(this.scale)}))}renderNextChevron(){const{totalItems:e,pageSize:t,startItem:s,messages:i}=this,l=s+t>e;return a("button",{"aria-label":i.next,class:{[c.chevron]:!0,[c.disabled]:l},"data-test-chevron":"next",disabled:l,key:"next-button",onClick:this.nextClicked},a("calcite-icon",{flipRtl:!0,icon:w.next,scale:k(this.scale)}))}renderFirstChevron(){const{messages:e,startItem:t,isXXSmall:s}=this,i=t===1;return s?a("button",{"aria-label":e.first,class:{[c.chevron]:!0,[c.disabled]:i},disabled:i,key:"first-button",onClick:this.firstClicked},a("calcite-icon",{flipRtl:!0,icon:w.first,scale:k(this.scale)})):null}renderLastChevron(){const{messages:e,startItem:t,isXXSmall:s,lastStartItem:i}=this,l=t===i;return s?a("button",{"aria-label":e.last,class:{[c.chevron]:!0,[c.disabled]:l},disabled:l,key:"last-button",onClick:this.lastClicked},a("calcite-icon",{flipRtl:!0,icon:w.last,scale:k(this.scale)})):null}render(){return a("ul",{key:"ee5a898e84af24815e101e3ff982da5ec35fda0d",class:c.list},a("li",{key:"67145459b1798da17eef2a9a196bad7e59108641",class:c.listItem},this.renderFirstChevron()),a("li",{key:"e3df5d1cf46b191e845c4c0035d80c5d168d2a37",class:c.listItem},this.renderPreviousChevron()),this.renderItems(),a("li",{key:"6b9f3c4bc94b81c160ddcf793e8dd768876d2e9e",class:c.listItem},this.renderNextChevron()),a("li",{key:"eddb879ffbcaf4623251c71d4ac262b300fe2129",class:c.listItem},this.renderLastChevron()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}}static get style(){return fe}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[1538,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],lastStartItem:[32],isXXSmall:[32],setFocus:[64],nextPage:[64],previousPage:[64],goTo:[64]},void 0,{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}]);function Y(){if(typeof customElements>"u")return;["calcite-pagination","calcite-icon"].forEach(e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,be);break;case"calcite-icon":customElements.get(e)||Q();break}})}Y();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const p={bordered:"bordered",striped:"striped",selectionArea:"selection-area",paginationArea:"pagination-area",container:"container",tableContainer:"table-container",tableFixed:"table--fixed",assistiveText:"assistive-text",selectionActions:"selection-actions"},L={selectionActions:"selection-actions",tableHeader:"table-header",tableFooter:"table-footer"},Se=":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}",ve=Se,Z=W(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableSelect=P(this,"calciteTableSelect",6),this.calciteTablePageChange=P(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=P(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=e=>{var t;return(t=e==null?void 0:e.assignedElements({flatten:!0}))==null?void 0:t.filter(s=>s==null?void 0:s.matches("calcite-table-row"))},this.updateRows=()=>{var r,h,o;const e=this.getSlottedRows(this.tableHeadSlotEl)||[],t=this.getSlottedRows(this.tableBodySlotEl)||[],s=this.getSlottedRows(this.tableFootSlotEl)||[],i=[...e,...t,...s];e==null||e.forEach(n=>{const d=e==null?void 0:e.indexOf(n);n.rowType="head",n.positionSection=d,n.positionSectionLocalized=this.localizeNumber((d+1).toString())}),t==null||t.forEach(n=>{const d=t==null?void 0:t.indexOf(n);n.rowType="body",n.positionSection=d,n.positionSectionLocalized=this.localizeNumber((d+1).toString())}),s==null||s.forEach(n=>{const d=s==null?void 0:s.indexOf(n);n.rowType="foot",n.positionSection=d,n.positionSectionLocalized=this.localizeNumber((d+1).toString())}),i==null||i.forEach(n=>{n.interactionMode=this.interactionMode,n.selectionMode=this.selectionMode,n.bodyRowCount=t==null?void 0:t.length,n.positionAll=i==null?void 0:i.indexOf(n),n.numbered=this.numbered,n.scale=this.scale,n.readCellContentsToAT=this.readCellContentsToAT,n.lastVisibleRow=(i==null?void 0:i.indexOf(n))===i.length-1});const l=((r=e[0])==null?void 0:r.cellCount)||((o=(h=e[0])==null?void 0:h.querySelectorAll("calcite-table-header"))==null?void 0:o.length);this.colCount=l,this.headRows=e,this.bodyRows=t,this.footRows=s,this.allRows=i,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{var t;const e=(t=this.paginationEl)==null?void 0:t.startItem;this.pageStartRow=e||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{var e;(e=this.bodyRows)==null||e.forEach(t=>{const s=t.positionSection+1,i=s>=this.pageStartRow&&s<this.pageStartRow+this.pageSize;t.hidden=this.pageSize>0&&!i&&!this.footRows.includes(t),t.lastVisibleRow=s===this.pageStartRow+this.pageSize-1||s===this.bodyRows.length})},this.updateSelectedItems=e=>{var s,i;const t=(s=this.bodyRows)==null?void 0:s.filter(l=>l.selected);this.selectedItems=t,this.selectedCount=t==null?void 0:t.length,(i=this.allRows)==null||i.forEach(l=>{l.selectedRowCount=this.selectedCount,l.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)}),e&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{var e;(e=this.bodyRows)==null||e.forEach(t=>{t.selected=!1}),this.updateSelectedItems(!0)},this.setSelectedItems=e=>{var t;(t=this.bodyRows)==null||t.forEach(s=>{var i;(e==null?void 0:e.rowType)==="head"?s.selected=this.selectedCount!==((i=this.bodyRows)==null?void 0:i.length):s.selected=e===s?!s.selected:this.selectionMode==="multiple"?s.selected:!1}),this.updateSelectedItems(!0)},this.localizeNumber=e=>(I.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},I.localize(e.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.interactionMode="interactive",this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.selectionDisplay="top",this.zebra=!1,this.striped=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){j(this,this.effectiveLocale)}async componentWillLoad(){U(this),await q(this),this.readCellContentsToAT=/safari/i.test(ie()),this.updateRows()}componentDidLoad(){_(this)}connectedCallback(){J(this),V(this)}disconnectedCallback(){K(this),G(this)}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(e.target)}calciteInternalTableRowFocusEvent(e){var R,M,A,F,O,X,N,H,$;const t=e.detail.cellPosition,s=e.detail.rowPosition,i=e.detail.destination,l=e.detail.lastCell,r=(R=this.bodyRows)==null?void 0:R.filter(C=>!C.hidden),h=(M=this.allRows)==null?void 0:M.filter(C=>!C.hidden),o=(A=this.headRows[this.headRows.length-1])==null?void 0:A.positionAll,n=(F=r[0])==null?void 0:F.positionAll,d=(O=r[r.length-1])==null?void 0:O.positionAll,v=(X=this.footRows[0])==null?void 0:X.positionAll,m=(N=h[h.length-1])==null?void 0:N.positionAll,u=i==="next"&&s===o,g=i==="previous"&&s===v,z=i==="previous"&&s===n,te=i==="next"&&s===d;let f;switch(i){case"first":f=0;break;case"last":f=m;break;case"next":f=u?n:te?v:s+1;break;case"previous":f=g?d:z?o:s-1;break}const T=($=(H=this.allRows)==null?void 0:H.find(C=>C.positionAll===f))==null?void 0:$.cellCount,se=t>T?T:t;f!==void 0&&this.calciteInternalTableRowFocusChange.emit({cellPosition:se,rowPosition:f,destination:i,lastCell:l})}renderSelectionArea(){var r,h,o;const e=(h=(r=this.selectedItems)==null?void 0:r.filter(n=>n.hidden))==null?void 0:h.length,t=this.localizeNumber(e==null?void 0:e.toString()),i=`${this.localizeNumber((o=this.selectedCount)==null?void 0:o.toString())} ${this.messages.selected}`,l=`${t} ${this.messages.hiddenSelected}`;return a("div",{class:p.selectionArea},a("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:i},i),e>0&&a("calcite-chip",{icon:"hide-empty",scale:this.scale,title:l,value:l},t),this.selectedCount>0&&a("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:`${this.messages.clear} ${i} ${this.messages.row}`},this.messages.clear),a("div",{class:p.selectionActions},a("slot",{name:L.selectionActions})))}renderPaginationArea(){var e;return a("div",{class:p.paginationArea},a("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,ref:t=>this.paginationEl=t,scale:this.scale,startItem:1,totalItems:(e=this.bodyRows)==null?void 0:e.length}))}renderTHead(){return a("thead",null,a("slot",{name:L.tableHeader,onSlotchange:this.updateRows,ref:e=>this.tableHeadSlotEl=e}))}renderTBody(){return a("tbody",null,a("slot",{onSlotchange:this.updateRows,ref:e=>this.tableBodySlotEl=e}))}renderTFoot(){return a("tfoot",null,a("slot",{name:L.tableFooter,onSlotchange:this.updateRows,ref:e=>this.tableFootSlotEl=e}))}render(){var e;return a(ae,{key:"977fbb58c0ee0fdb506ebed869b136767dc43873"},a("div",{key:"c9c0885932328c3d703abb32632f599404f8ac20",class:p.container},this.selectionMode!=="none"&&this.selectionDisplay!=="none"&&this.renderSelectionArea(),a("div",{key:"a6b5739bb1b0f6eafeb37959bc21e54374c4da23",class:{[p.bordered]:this.bordered,[p.striped]:this.striped||this.zebra,[p.tableContainer]:!0}},a("table",{key:"209d92a0bdd6ca12f8571ba5ca325c993afc247d","aria-colcount":this.colCount,"aria-multiselectable":this.selectionMode==="multiple","aria-rowcount":(e=this.allRows)==null?void 0:e.length,class:{[p.tableFixed]:this.layout==="fixed"},role:this.interactionMode==="interactive"?"grid":"table"},a("caption",{key:"099e0d60343af59b0e59f1baf6fbfb36ed4498ad",class:p.assistiveText},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{groupSeparator:["handleNumberedChange"],interactionMode:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ve}},[1,"calcite-table",{bordered:[516],caption:[1],groupSeparator:[516,"group-separator"],interactionMode:[513,"interaction-mode"],layout:[513],numbered:[516],numberingSystem:[513,"numbering-system"],pageSize:[514,"page-size"],scale:[513],selectionMode:[513,"selection-mode"],selectionDisplay:[513,"selection-display"],zebra:[516],striped:[516],selectedItems:[1040],messages:[1040],messageOverrides:[1040],colCount:[32],pageStartRow:[32],selectedCount:[32],readCellContentsToAT:[32],defaultMessages:[32],effectiveLocale:[32]},[[0,"calciteTableRowSelect","calciteChipSelectListener"],[0,"calciteInternalTableRowFocusRequest","calciteInternalTableRowFocusEvent"]],{groupSeparator:["handleNumberedChange"],interactionMode:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ee(){if(typeof customElements>"u")return;["calcite-table","calcite-button","calcite-chip","calcite-icon","calcite-loader","calcite-pagination"].forEach(e=>{switch(e){case"calcite-table":customElements.get(e)||customElements.define(e,Z);break;case"calcite-button":customElements.get(e)||le();break;case"calcite-chip":customElements.get(e)||oe();break;case"calcite-icon":customElements.get(e)||Q();break;case"calcite-loader":customElements.get(e)||ce();break;case"calcite-pagination":customElements.get(e)||Y();break}})}ee();const Ne=Z,He=ee;export{Ne as CalciteTable,He as defineCustomElement};
