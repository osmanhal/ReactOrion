import{b as n,l as a,d as t,e as o}from"./index-BfC8i6jT.js";import{c as l,u as r,d as c,I as s}from"./interactive-7dc921d0-C6HJbVA3.js";import{c as d,s as p,a as h}from"./loadable-907717a5-DAXV1ZHU.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const e={container:"container",dividerContainer:"divider-container",divider:"divider",widthAuto:"width-auto",widthHalf:"width-half",widthFull:"width-full"},u=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([kind=brand]){--calcite-internal-split-button-background:var(--calcite-color-brand);--calcite-internal-split-button-divider:var(--calcite-color-foreground-1)}:host([kind=danger]){--calcite-internal-split-button-background:var(--calcite-color-status-danger);--calcite-internal-split-button-divider:var(--calcite-color-foreground-1)}:host([kind=neutral]){--calcite-internal-split-button-background:var(--calcite-color-foreground-3);--calcite-internal-split-button-divider:var(--calcite-color-text-1)}:host([kind=inverse]){--calcite-internal-split-button-background:var(--calcite-color-inverse);--calcite-internal-split-button-divider:var(--calcite-color-foreground-1)}:host([appearance=transparent]){--calcite-internal-split-button-background:transparent}:host([appearance=transparent]):host([kind=brand]){--calcite-internal-split-button-divider:var(--calcite-color-brand)}:host([appearance=transparent]):host([kind=danger]){--calcite-internal-split-button-divider:var(--calcite-color-status-danger)}:host([appearance=transparent]):host([kind=neutral]){--calcite-internal-split-button-divider:var(--calcite-color-text-1)}:host([appearance=transparent]):host([kind=inverse]){--calcite-internal-split-button-divider:var(--calcite-color-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline]):host([kind=danger]),:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline]):host([kind=inverse]){--calcite-internal-split-button-background:transparent}:host([appearance=outline-fill]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-internal-split-button-background:var(--calcite-color-background)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-internal-split-button-divider:var(--calcite-color-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-internal-split-button-divider:var(--calcite-color-status-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-internal-split-button-divider:var(--calcite-color-border-1)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-internal-split-button-divider:var(--calcite-color-inverse)}.container{display:flex;align-items:stretch}.container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}.divider-container{display:flex;inline-size:1px;align-items:stretch;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-internal-split-button-background)}.divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-internal-split-button-divider)}:host([appearance=outline-fill]) .divider-container,:host([appearance=outline]) .divider-container{border-block:1px solid var(--calcite-internal-split-button-divider)}:host([appearance=outline-fill]):hover .divider-container,:host([appearance=outline]):hover .divider-container{background-color:var(--calcite-internal-split-button-divider)}:host([appearance=outline-fill]:hover) .divider-container,:host([appearance=outline]:hover) .divider-container{background-color:var(--calcite-internal-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-internal-split-button-divider:var(--calcite-color-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-internal-split-button-divider:var(--calcite-color-status-danger-press)}:host([appearance=outline-fill]:focus-within) .divider-container,:host([appearance=outline]:focus-within) .divider-container{background-color:var(--calcite-internal-split-button-divider)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]):host([appearance=outline-fill]) .divider-container{background-color:var(--calcite-color-background)}:host([disabled]):host([appearance=outline]) .divider-container{background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",b=u,v=class{constructor(i){n(this,i),this.calciteSplitButtonPrimaryClick=a(this,"calciteSplitButtonPrimaryClick",6),this.calciteSplitButtonSecondaryClick=a(this,"calciteSplitButtonSecondaryClick",6),this.calciteSplitButtonPrimaryClickHandler=()=>this.calciteSplitButtonPrimaryClick.emit(),this.calciteSplitButtonSecondaryClickHandler=()=>this.calciteSplitButtonSecondaryClick.emit(),this.appearance="solid",this.kind="brand",this.disabled=!1,this.active=!1,this.dropdownIconType="chevron",this.dropdownLabel=void 0,this.flipPlacements=void 0,this.loading=!1,this.overlayPositioning="absolute",this.placement="bottom-end",this.primaryIconEnd=void 0,this.primaryIconFlipRtl=void 0,this.primaryIconStart=void 0,this.primaryLabel=void 0,this.primaryText=void 0,this.scale="m",this.width="auto"}handleDisabledChange(i){i||(this.active=!1)}activeHandler(){this.disabled&&(this.active=!1)}async setFocus(){await d(this),this.el.focus()}connectedCallback(){l(this)}componentWillLoad(){p(this)}componentDidLoad(){h(this)}componentDidRender(){r(this)}disconnectedCallback(){c(this)}render(){const i=this.width==="auto"?"auto":"full";return t(s,{key:"ee973a15275bc3f95af17c40a4b8badbe3462d79",disabled:this.disabled},t("div",{key:"b2c812632a9ae8cd96060fcc6b22d052e957a9a7",class:e.container},t("calcite-button",{key:"03a34e04ae9efa7811f1ac9d701fb230de7200a9",appearance:this.appearance,disabled:this.disabled,"icon-end":this.primaryIconEnd?this.primaryIconEnd:null,"icon-start":this.primaryIconStart?this.primaryIconStart:null,iconFlipRtl:this.primaryIconFlipRtl?this.primaryIconFlipRtl:null,kind:this.kind,label:this.primaryLabel,loading:this.loading,onClick:this.calciteSplitButtonPrimaryClickHandler,scale:this.scale,splitChild:"primary",type:"button",width:i},this.primaryText),t("div",{key:"1a1cfc004949b54b56cbc0f3076fb48e678ab314",class:e.dividerContainer},t("div",{key:"f38ecc61ec5712fe86924379347285977c285dc5",class:e.divider})),t("calcite-dropdown",{key:"719ccb5e274a7ccd04855daa1a39be9781fdcb76",disabled:this.disabled,flipPlacements:this.flipPlacements,onClick:this.calciteSplitButtonSecondaryClickHandler,open:this.active,overlayPositioning:this.overlayPositioning,placement:this.placement,scale:this.scale,"width-scale":this.scale},t("calcite-button",{key:"098292b17056e7431adaadc843ecee4a9453bb7a",appearance:this.appearance,disabled:this.disabled,"icon-start":this.dropdownIcon,kind:this.kind,label:this.dropdownLabel,scale:this.scale,slot:"trigger",splitChild:"secondary",type:"button"}),t("slot",{key:"cc73b47cb462df04f3572bb68565513f8abfa8a0"}))))}get dropdownIcon(){return this.dropdownIconType==="chevron"?"chevronDown":this.dropdownIconType==="caret"?"caretDown":this.dropdownIconType==="ellipsis"?"ellipsis":"handle-vertical"}static get delegatesFocus(){return!0}get el(){return o(this)}static get watchers(){return{disabled:["handleDisabledChange"],active:["activeHandler"]}}};v.style=b;export{v as calcite_split_button};
