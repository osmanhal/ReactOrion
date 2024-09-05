import{b as d,l as n,i as p,d as t,H as h,e as g}from"./index-BfC8i6jT.js";import{b as m,t as l}from"./dom-0dfcce02-D_EjFIg7.js";import{a as v,s as u,c as b}from"./loadable-907717a5-DAXV1ZHU.js";import{u as f,c as x,d as k,s as y}from"./t9n-249fa143-CE2fk3Zh.js";import{c as C,u as I,d as S,I as z}from"./interactive-7dc921d0-C6HJbVA3.js";import{c as M,d as w}from"./locale-4ce3c6b2-fiHvNr9A.js";import{i as E}from"./key-6b945008-DuBxtzvS.js";import{g as s}from"./component-3035aa13-CVleUxfT.js";import"./guid-c5ea645c-C-axntQX.js";import"./observers-aea7721f-C3bX3_Ot.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const i={title:"title",close:"close",imageContainer:"image-container",chipIcon:"chip-icon",textSlotted:"text--slotted",container:"container",imageSlotted:"image--slotted",closable:"closable",multiple:"multiple",single:"single",selectable:"selectable",selectIcon:"select-icon",selectIconActive:"select-icon--active",nonInteractive:"non-interactive",isCircle:"is-circle",selected:"selected"},L={image:"image"},a={close:"x",checkedSingle:"circle-f",uncheckedMultiple:"square",checkedMultiple:"check-square-f"},D=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.container,.select-icon,.title{padding-inline-start:var(--calcite-internal-chip-padding-start);padding-inline-end:var(--calcite-internal-chip-padding-end)}.select-icon:not(.select-icon--active){padding-inline:0}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle,:host([scale=s]) .container.is-circle.image--slotted{block-size:1.5rem;inline-size:1.5rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-px)}:host([scale=s]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=s]) .multiple.image--slotted.text--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-xs)}:host([scale=s]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:var(--calcite-spacing-base);padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]) .container.is-circle,:host([scale=m]) .container.is-circle.image--slotted{block-size:2rem;inline-size:2rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-px)}:host([scale=m]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-base);--calcite-internal-chip-padding-end:var(--calcite-spacing-base)}:host([scale=m]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=m]) .multiple.image--slotted.text--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-px)}:host([scale=m]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .container.is-circle,:host([scale=l]) .container.is-circle.image--slotted{block-size:2.75rem;inline-size:2.75rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-md)}:host([scale=l]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-sm);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=l]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=l]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=l]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-sm);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .container.selectable.single.image--slotted{--calcite-internal-chip-padding-end:calc(0.125rem / 2)}:host([scale=s]) .container:not(.selected):not(.multiple).image--slotted{--calcite-internal-chip-padding-start:calc(0.125rem / 2)}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;--calcite-internal-chip-padding-start:var(--calcite-chip-spacing-s-internal);--calcite-internal-chip-padding-end:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-color-transparent-hover);--calcite-chip-transparent-press:var(--calcite-color-transparent-press);--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}.multiple .select-icon{display:flex;align-items:center;justify-content:center}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-color-text-3)}:host([kind=inverse]){background-color:var(--calcite-color-inverse);color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-color-text-inverse)}:host([kind=brand]){background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-color-text-inverse)}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-color-text-3)}:host([appearance=outline-fill]){background-color:var(--calcite-color-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-color-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-color-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-color-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,H=D,B=class{constructor(e){d(this,e),this.calciteChipClose=n(this,"calciteChipClose",6),this.calciteChipSelect=n(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=n(this,"calciteInternalChipKeyEvent",6),this.calciteInternalChipSelect=n(this,"calciteInternalChipSelect",6),this.calciteInternalSyncSelectedChips=n(this,"calciteInternalSyncSelectedChips",6),this.handleDefaultSlotChange=()=>{this.updateHasText()},this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=c=>{E(c.key)&&(c.preventDefault(),this.close())},this.handleSlotImageChange=c=>{this.hasImage=m(c)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.parentChipGroup=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}watchSelected(e){this.selectionMode!=="none"&&this.handleSelectionPropertyChange(e)}onMessagesChange(){}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){C(this),M(this),x(this)}componentDidLoad(){v(this),this.selectionMode!=="none"&&this.interactive&&this.selected&&this.handleSelectionPropertyChange(this.selected)}componentDidRender(){I(this)}disconnectedCallback(){S(this),w(this),k(this)}async componentWillLoad(){u(this),p()&&(await y(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault();break}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){var e,c;await b(this),!this.disabled&&this.interactive?(e=this.containerEl)==null||e.focus():!this.disabled&&this.closable&&((c=this.closeButtonEl)==null||c.focus())}updateHasText(){this.hasText=this.el.textContent.trim().length>0}handleSelectionPropertyChange(e){this.selectionMode==="single"&&this.calciteInternalSyncSelectedChips.emit(),!this.parentChipGroup.selectedItems.includes(this.el)&&e&&this.selectionMode!=="multiple"&&this.calciteInternalChipSelect.emit(),this.selectionMode!=="single"&&this.calciteInternalSyncSelectedChips.emit()}renderChipImage(){return t("div",{class:i.imageContainer},t("slot",{name:L.image,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e=this.selectionMode==="multiple"?this.selected?a.checkedMultiple:a.uncheckedMultiple:this.selected?a.checkedSingle:void 0;return t("div",{class:{[i.selectIcon]:!0,[i.selectIconActive]:this.selectionMode==="multiple"||this.selected}},e?t("calcite-icon",{icon:e,scale:s(this.scale)}):null)}renderCloseButton(){return t("button",{"aria-label":this.messages.dismissLabel,class:i.close,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,ref:e=>this.closeButtonEl=e,tabIndex:this.disabled?-1:0},t("calcite-icon",{icon:a.close,scale:s(this.scale)}))}renderIcon(){return t("calcite-icon",{class:i.chipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:s(this.scale)})}render(){const{disabled:e}=this,c=e||!e&&!this.interactive,o=this.selectionMode==="multiple"&&this.interactive?"checkbox":this.selectionMode!=="none"&&this.interactive?"radio":this.interactive?"button":void 0;return t(h,{key:"6d76da5a2ae7a51ceffa4d1ca67d2f610b900a1c"},t(z,{key:"fd0190d60cffb6d0f564a91f55b0e4f69663fb5b",disabled:e},t("div",{key:"825b342318201ee13735f9b6e830f26b0fb4e137","aria-checked":this.selectionMode!=="none"&&this.interactive?l(this.selected):void 0,"aria-disabled":c?l(e):void 0,"aria-label":this.label,class:{[i.container]:!0,[i.textSlotted]:this.hasText,[i.imageSlotted]:this.hasImage,[i.selectable]:this.selectionMode!=="none",[i.multiple]:this.selectionMode==="multiple",[i.single]:this.selectionMode==="single"||this.selectionMode==="single-persist",[i.selected]:this.selected,[i.closable]:this.closable,[i.nonInteractive]:!this.interactive,[i.isCircle]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&(this.selectionMode==="none"||!!this.selectionMode&&this.selectionMode!=="multiple"&&!this.selected)},onClick:this.handleEmittingEvent,ref:r=>this.containerEl=r,role:o,tabIndex:c?-1:0},this.selectionMode!=="none"&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),t("span",{key:"0b3d668d66e359ecc3690ad87033e7e49a9250ef",class:i.title},t("slot",{key:"ff1af06039b94df6108f5e371e23ad9debfd388e",onSlotchange:this.handleDefaultSlotChange})),this.closable&&this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{selected:["watchSelected"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};B.style=H;export{B as calcite_chip};
