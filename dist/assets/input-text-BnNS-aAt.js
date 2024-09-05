import{d_ as m,d$ as g,e6 as l,e0 as x,e2 as t,e7 as v,e5 as y}from"./index-BfC8i6jT.js";import{s as d,e as k,g as I,t as E}from"./dom-Bb9h_pls.js";import{s as w,c as C,i as u,d as T,H as z}from"./form-CZfgqAxW.js";import{c as L,d as V,u as M,I as H}from"./interactive-DP0XaYPR.js";import{c as F,d as A,g as D}from"./label-NjdjENzu.js";import{s as O,a as W,c as S}from"./loadable-QAoPxwWP.js";import{c as q,d as P}from"./locale-CiqLNmAk.js";import{c as R}from"./observers-BDfujgVA.js";import{u as B,c as U,d as K,s as G}from"./t9n-BUWevPjH.js";import{g as h}from"./component-CVleUxfT.js";import{V as _}from"./Validation-B3Y-COKw.js";import{s as $}from"./input-CM-Sufcv.js";import{d as j}from"./icon-BWRRlyjd.js";import{d as Y}from"./input-message-sNs3yQQx.js";import{d as J}from"./progress-BnUvB3t-.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const i={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"},p={validationMessage:"inputTextValidationMessage"},Q={action:"action"},X=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,Z=X,N=m(class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputTextFocus=l(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=l(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=l(this,"calciteInputTextInput",7),this.calciteInputTextChange=l(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=R("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputTextValue(e),e.preventDefault()),e.key==="Enter"&&w(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const n=e.composedPath();!n.includes(this.inputWrapperEl)||n.includes(this.actionWrapperEl)||this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=({committing:e=!1,nativeEvent:n,origin:a,previousValue:o,value:s})=>{this.setPreviousValue(o??this.value),this.previousValueOrigin=a,this.userChangedValue=a==="user"&&s!==this.value,this.value=s,a==="direct"&&(this.setInputValue(s),this.setPreviousEmittedValue(s)),n&&(this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:e&&this.emitChangeIfUserModified())},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){x(this)}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(e,n){this.userChangedValue||this.setValue({origin:"direct",previousValue:n,value:e||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=d({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){B(this,this.effectiveLocale)}connectedCallback(){var e;L(this),q(this),U(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),F(this),C(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(u,this.onHiddenFormInputInput)}disconnectedCallback(){var e;V(this),A(this),T(this),P(this),K(this),(e=this.mutationObserver)==null||e.disconnect(),this.el.removeEventListener(u,this.onHiddenFormInputInput)}async componentWillLoad(){O(this),this.requestedIcon=d({},this.icon,"text"),await G(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value)}componentDidLoad(){W(this)}componentDidRender(){M(this)}async setFocus(){var e;await S(this),(e=this.childEl)==null||e.focus()}async selectText(){var e;(e=this.childEl)==null||e.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(e){$("text",this,e)}setDisabledAction(){const e=k(this.el,"action");e&&(this.disabled?(e.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const e=I(this.el),n=t("div",{key:"75e1d143289073aba71c8412dba86e4513ba438a",class:i.loader},t("calcite-progress",{key:"17c1a8dfb11db87f62dd7664fb3ef152b14c89bc",label:this.messages.loading,type:"indeterminate"})),a=t("button",{key:"8c2fd4a9a50bea3e5c1e3061d275b76f84920e02","aria-label":this.messages.clear,class:i.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},t("calcite-icon",{key:"359da0464e284f76c85d92888789c6c20e6f6195",icon:"x",scale:h(this.scale)})),o=t("calcite-icon",{key:"643f3c87fb55ffbab119802fa6409263a003d337",class:i.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:h(this.scale)}),s=t("div",{key:"d5a48b6b2fef41fef60e6094d25af969fc6b95e3",class:i.prefix},this.prefixText),c=t("div",{key:"5b1e442c895c58386790e0fad7de474be4483a1b",class:i.suffix},this.suffixText),b=t("input",{key:"6ca205247c77545cca539d0e9e15ecc8a3bd7aeb","aria-errormessage":p.validationMessage,"aria-invalid":E(this.status==="invalid"),"aria-label":D(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?!0:null,class:{[i.editingEnabled]:this.editingEnabled,[i.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode"),maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return t(y,{key:"ee459d49c166ac8587e9bcff82e469001bfb341d",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(H,{key:"b5b5ce9afc9e98b42ad3380057c48d745fe4a69f",disabled:this.disabled},t("div",{key:"957c3665257e600acc1b0804e00c1d4d1786dd8c",class:{[i.inputWrapper]:!0,[v.rtl]:e==="rtl"},ref:r=>this.inputWrapperEl=r},this.prefixText?s:null,t("div",{key:"2f572c83b9816be8763d1c995a523f82013b76cd",class:i.wrapper},b,this.isClearable?a:null,this.requestedIcon?o:null,this.loading?n:null),t("div",{key:"e02221edf4528d5663d3e48fcea5d6e5c1fe12c6",class:i.actionWrapper,ref:r=>this.actionWrapperEl=r},t("slot",{key:"b49d331ad17da7f17bc2f44ee0d61f5b8c45ce93",name:Q.action})),this.suffixText?c:null,t(z,{key:"b93d1dec9fa8f48620f694e90c4e195e0138d1c6",component:this})),this.validationMessage&&this.status==="invalid"?t(_,{icon:this.validationIcon,id:p.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Z}},[1,"calcite-input-text",{alignment:[513],autofocus:[4],clearable:[516],disabled:[516],enterKeyHint:[1,"enter-key-hint"],form:[513],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],inputMode:[1,"input-mode"],label:[1],loading:[516],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],autocomplete:[1],pattern:[1],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function ee(){if(typeof customElements>"u")return;["calcite-input-text","calcite-icon","calcite-input-message","calcite-progress"].forEach(e=>{switch(e){case"calcite-input-text":customElements.get(e)||customElements.define(e,N);break;case"calcite-icon":customElements.get(e)||j();break;case"calcite-input-message":customElements.get(e)||Y();break;case"calcite-progress":customElements.get(e)||J();break}})}ee();export{ee as d};
