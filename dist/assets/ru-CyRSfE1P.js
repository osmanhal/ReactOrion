import{d as M}from"./calcite-input-time-picker-Bdsi3PVZ.js";import"./index-BfC8i6jT.js";import"./form-CZfgqAxW.js";import"./dom-Bb9h_pls.js";import"./interactive-DP0XaYPR.js";import"./key-DuBxtzvS.js";import"./label-NjdjENzu.js";import"./component-CVleUxfT.js";import"./loadable-QAoPxwWP.js";import"./locale-CiqLNmAk.js";import"./observers-BDfujgVA.js";import"./focusTrapComponent-CMnNxtIs.js";import"./t9n-BUWevPjH.js";import"./math-DGrr9aKX.js";import"./icon-BWRRlyjd.js";import"./Validation-B3Y-COKw.js";import"./input-CM-Sufcv.js";import"./action-W5AlSpJC.js";import"./loader-DI4JVeCP.js";import"./input-message-sNs3yQQx.js";import"./input-text-BnNS-aAt.js";import"./progress-BnUvB3t-.js";import"./popover-DmSCpKUv.js";import"./floating-ui-Bi24_oLL.js";import"./debounce-BE9q2DI6.js";import"./openCloseComponent-C9eX_zZX.js";import"./Heading-DAjBEeC2.js";import"./FloatingArrow-DSHVPzyR.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */var e="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),p="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function h(_,t){var r=_.split("_");return t%10===1&&t%100!==11?r[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?r[1]:r[2]}function o(_,t,r){var l={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return r==="m"?t?"минута":"минуту":_+" "+h(l[r],+_)}var m=function(t,r){return s.test(r)?e[t.month()]:p[t.month()]};m.s=p;m.f=e;var i=function(t,r){return s.test(r)?n[t.month()]:a[t.month()]};i.s=a;i.f=n;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};M.locale(d,null,!0);export{d as default};
