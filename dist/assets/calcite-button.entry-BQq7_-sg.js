import{b as u,f as p,i as b,d as a,e as v}from"./index-BfC8i6jT.js";import{s as g,r as f,f as k}from"./form-0d9970ac-DvR7-FOe.js";import{c as m,d as x,u as w,I as y}from"./interactive-7dc921d0-C6HJbVA3.js";import{c as z,d as C,g as E}from"./label-3e643a13-CEk50xTn.js";import{s as S,a as L,c as T}from"./loadable-907717a5-DAXV1ZHU.js";import{c as O,d as F}from"./locale-4ce3c6b2-fiHvNr9A.js";import{c as i}from"./observers-aea7721f-C3bX3_Ot.js";import{g as c}from"./component-3035aa13-CVleUxfT.js";import{c as I,d as R,s as M,u as j}from"./t9n-249fa143-CE2fk3Zh.js";import{t as A}from"./dom-0dfcce02-D_EjFIg7.js";import"./key-6b945008-DuBxtzvS.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const n={buttonLoader:"calcite-button--loader",content:"content",contentSlotted:"content--slotted",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",loadingIn:"loading-in",loadingOut:"loading-out",iconStartEmpty:"icon-start-empty",iconEndEmpty:"icon-end-empty",buttonPadding:"button-padding",buttonPaddingShrunk:"button-padding--shrunk"},N=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host button,:host a{--calcite-button-content-margin-internal:0.5rem;--calcite-button-padding-x-internal:7px;--calcite-button-padding-y-internal:3px;padding-block:var(--calcite-button-padding-y-internal);padding-inline:var(--calcite-button-padding-x-internal);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}:host button span,:host a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content{margin-inline:var(--calcite-button-content-margin-internal)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin-internal:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin-internal:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin-internal)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin-internal)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{border-width:1px;border-style:solid;border-color:transparent}:host([kind=brand]) button,:host([kind=brand]) a{background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) button:focus,:host([kind=brand]) a:hover,:host([kind=brand]) a:focus{background-color:var(--calcite-color-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{background-color:var(--calcite-color-brand-press)}:host([kind=brand]) button calcite-loader,:host([kind=brand]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=danger]) button,:host([kind=danger]) a{background-color:var(--calcite-color-status-danger);color:var(--calcite-color-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) button:focus,:host([kind=danger]) a:hover,:host([kind=danger]) a:focus{background-color:var(--calcite-color-status-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{background-color:var(--calcite-color-status-danger-press)}:host([kind=danger]) button calcite-loader,:host([kind=danger]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=neutral]) button,:host([kind=neutral]) a{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) button:focus,:host([kind=neutral]) a:hover,:host([kind=neutral]) a:focus{background-color:var(--calcite-color-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{background-color:var(--calcite-color-foreground-1)}:host([kind=neutral]) button calcite-loader,:host([kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) button:focus,:host([kind=inverse]) a:hover,:host([kind=inverse]) a:focus{background-color:var(--calcite-color-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{background-color:var(--calcite-color-inverse-press)}:host([kind=inverse]) button calcite-loader,:host([kind=inverse]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button calcite-loader,:host([appearance=outline-fill][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline-fill][kind=inverse]) button calcite-loader,:host([appearance=outline-fill][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:transparent;color:var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:transparent;color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button calcite-loader,:host([appearance=outline][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline][kind=inverse]) button calcite-loader,:host([appearance=outline][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{color:var(--calcite-color-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{color:var(--calcite-color-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{color:var(--calcite-color-status-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{color:var(--calcite-color-status-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-color-text-3);border-block-start-color:var(--calcite-color-border-input);border-block-end-color:var(--calcite-color-border-input);border-block-style:solid}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y-internal:0}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button,:host([appearance=transparent][kind=inverse]) a,:host([appearance=transparent][kind=inverse]) calcite-loader{color:var(--calcite-color-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-button-padding-y-internal:3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x-internal:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-padding-y-internal:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x-internal:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-button-padding-x-internal:1rem;--calcite-button-padding-y-internal:11px}:host([scale=l]) .button-padding--shrunk{--calcite-button-padding-y-internal:9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host(:is([scale=s],[scale=m],[scale=l])[width=full]) a:not(.content--slotted),:host(:is([scale=s],[scale=m],[scale=l])[width=full]) button:not(.content--slotted){inline-size:var(--calcite-container-size-content-fluid)}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y-internal:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:2.75rem}:host([hidden]){display:none}[hidden]{display:none}`,B=N,H=class{constructor(t){u(this,t),this.mutationObserver=i("mutation",()=>this.updateHasContent()),this.resizeObserver=i("resize",()=>this.setTooltipText()),this.handleClick=()=>{const{type:e}=this;this.href||(e==="submit"?g(this):e==="reset"&&f(this))},this.setTooltipText=()=>{const{contentEl:e}=this;e&&(this.tooltipText=e.offsetWidth<e.scrollWidth&&this.el.innerText||null)},this.setChildEl=e=>{var o;this.childEl=e,e&&((o=this.resizeObserver)==null||o.observe(e))},this.alignment="center",this.appearance="solid",this.label=void 0,this.kind="brand",this.disabled=!1,this.form=void 0,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.name=void 0,this.rel=void 0,this.round=!1,this.scale="m",this.splitChild=!1,this.target=void 0,this.type="button",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.hasContent=!1,this.effectiveLocale="",this.defaultMessages=void 0,this.tooltipText=void 0}handleGlobalAttributesChanged(){p(this)}onMessagesChange(){}async connectedCallback(){m(this),O(this),I(this),this.setupTextContentObserver(),z(this),this.formEl=k(this)}disconnectedCallback(){var t,e;(t=this.mutationObserver)==null||t.disconnect(),x(this),C(this),F(this),R(this),(e=this.resizeObserver)==null||e.disconnect(),this.formEl=null}async componentWillLoad(){S(this),b()&&(this.updateHasContent(),await M(this))}componentDidLoad(){L(this),this.setTooltipText()}componentDidRender(){w(this)}render(){const t=this.href?"a":"button",e=t,o=this.loading?a("div",{class:n.buttonLoader},a("calcite-loader",{class:this.loading?n.loadingIn:n.loadingOut,inline:!0,label:this.messages.loading,scale:this.scale==="l"?"m":"s"})):null,r=!this.iconStart&&!this.iconEnd,l=a("calcite-icon",{key:"4d22fe0db49aa06f71162b2ef64d4011b1b818d8",class:{[n.icon]:!0,[n.iconStart]:!0},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:c(this.scale)}),s=a("calcite-icon",{key:"95c15bea3179d091058d225e80477956fcb27e63",class:{[n.icon]:!0,[n.iconEnd]:!0},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:c(this.scale)}),d=a("span",{key:"6399f9291ba542a304a2813cda9ad21de0a19c36",class:n.content,ref:h=>this.contentEl=h},a("slot",{key:"818ff928ab9c8d722763ec6c1fdbf6b0d60ef210"}));return a(y,{key:"a6799ecea681f5e1929237fd26f91cc6895ae291",disabled:this.disabled},a(e,{key:"042f056a472a091f4728127d079089dbb262d572","aria-disabled":t==="a"?A(this.disabled||this.loading):null,"aria-expanded":this.el.getAttribute("aria-expanded"),"aria-label":this.loading?this.messages.loading:E(this),"aria-live":"polite",class:{[n.buttonPadding]:r,[n.buttonPaddingShrunk]:!r,[n.contentSlotted]:this.hasContent,[n.iconStartEmpty]:!this.iconStart,[n.iconEndEmpty]:!this.iconEnd},disabled:t==="button"?this.disabled||this.loading:null,download:t==="a"&&(this.download===""||this.download)?this.download:null,href:t==="a"&&this.href,name:t==="button"&&this.name,onClick:this.handleClick,ref:this.setChildEl,rel:t==="a"&&this.rel,tabIndex:this.disabled?-1:null,target:t==="a"&&this.target,title:this.tooltipText,type:t==="button"&&this.type},o,this.iconStart?l:null,this.hasContent?d:null,this.iconEnd?s:null))}async setFocus(){var t;await T(this),(t=this.childEl)==null||t.focus()}effectiveLocaleChange(){j(this,this.effectiveLocale)}updateHasContent(){var e,o;const t=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=this.el.childNodes.length===1&&((e=this.el.childNodes[0])==null?void 0:e.nodeName)==="#text"?((o=this.el.textContent)==null?void 0:o.trim().length)>0:t}setupTextContentObserver(){var t;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}onLabelClick(){this.handleClick(),this.setFocus()}static get assetsDirs(){return["assets"]}get el(){return v(this)}static get watchers(){return{"aria-expanded":["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=B;export{H as calcite_button};
