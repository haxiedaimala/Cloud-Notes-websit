import{C as de,ay as Et,c as y,H as Ct,B as wt,A as Ne,az as St,G as ot,W as We,aA as st,P as Ce,aB as Tt,aC as Fe,z as J,aD as It,aE as Mt,aF as Bt,aG as kt,a5 as be,r as L,L as Xe,K as at,aH as At,y as re,al as je,aI as Lt,aJ as ie,d as we,aK as zt,aL as Ot,E as Me,aM as Rt,aN as Nt,aO as $t,X as xt,Y as $,R as Vt,f as ge,T as he,o as p,a as B,a2 as h,F as Be,n as f,e as r,a0 as q,b as I,j as S,k as M,a1 as X,am as ne,ab as ke,V as K,aP as Dt,m as le,t as U,S as Le,N as lt,a3 as ze,a4 as Ht,ad as Pt,aQ as Yt,aR as Kt,aS as Ut,Z as Wt,aT as Ge,aU as Ft,l as te,aV as me,aw as Ae,U as Xt,aW as rt,aX as it,aY as qe,aZ as jt,s as Ze,aa as Je}from"./index-dd15576e.js";import{t as Gt,g as qt,h as Zt,d as Jt,j as Qt,i as _t,k as Qe,c as en,E as tn,b as _e}from"./notebook-a19a0919.js";const nn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',on=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,et=e=>Array.from(e.querySelectorAll(nn)).filter(t=>sn(t)&&on(t)),sn=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}};let ye;const an=e=>{var t;if(!de)return 0;if(ye!==void 0)return ye;const s=document.createElement("div");s.className=`${e}-scrollbar__wrap`,s.style.visibility="hidden",s.style.width="100px",s.style.position="absolute",s.style.top="-9999px",document.body.appendChild(s);const o=s.offsetWidth;s.style.overflow="scroll";const a=document.createElement("div");a.style.width="100%",s.appendChild(a);const l=a.offsetWidth;return(t=s.parentNode)==null||t.removeChild(s),ye=o-l,ye},Oe="update:modelValue",ln=e=>["",...Et].includes(e);var Ee=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Ee||{});const rn=()=>de&&/firefox/i.test(window.navigator.userAgent),un=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),dn=["class","style"],cn=/^on[A-Z]/,fn=(e={})=>{const{excludeListeners:t=!1,excludeKeys:s}=e,o=y(()=>((s==null?void 0:s.value)||[]).concat(dn)),a=wt();return a?y(()=>{var l;return Ct(Object.entries((l=a.proxy)==null?void 0:l.$attrs).filter(([u])=>!o.value.includes(u)&&!(t&&cn.test(u))))}):y(()=>({}))},pn=(e,t,s)=>{let o={offsetX:0,offsetY:0};const a=v=>{const c=v.clientX,i=v.clientY,{offsetX:C,offsetY:b}=o,g=e.value.getBoundingClientRect(),Q=g.left,z=g.top,d=g.width,j=g.height,k=document.documentElement.clientWidth,T=document.documentElement.clientHeight,x=-Q+C,G=-z+b,P=k-Q-d+C,A=T-z-j+b,W=V=>{const D=Math.min(Math.max(C+V.clientX-c,x),P),O=Math.min(Math.max(b+V.clientY-i,G),A);o={offsetX:D,offsetY:O},e.value.style.transform=`translate(${We(D)}, ${We(O)})`},Y=()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",W),document.addEventListener("mouseup",Y)},l=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",a)},u=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",a)};Ne(()=>{St(()=>{s.value?l():u()})}),ot(()=>{u()})},vn=(e,t={})=>{st(e)||Gt("[useLockscreen]","You need to pass a ref param to this function");const s=t.ns||Ce("popup"),o=Tt(()=>s.bm("parent","hidden"));if(!de||Fe(document.body,o.value))return;let a=0,l=!1,u="0";const v=()=>{setTimeout(()=>{kt(document==null?void 0:document.body,o.value),l&&document&&(document.body.style.width=u)},200)};J(e,c=>{if(!c){v();return}l=!Fe(document.body,o.value),l&&(u=document.body.style.width),a=an(s.namespace.value);const i=document.documentElement.clientHeight<document.body.scrollHeight,C=It(document.body,"overflowY");a>0&&(i||C==="scroll")&&l&&(document.body.style.width=`calc(100% - ${a}px)`),Mt(document.body,o.value)}),Bt(()=>v())},mn=(e,t)=>{let s;J(()=>e.value,o=>{var a,l;o?(s=document.activeElement,st(t)&&((l=(a=t.value).focus)==null||l.call(a))):s.focus()})},ut=e=>{if(!e)return{onClick:be,onMousedown:be,onMouseup:be};let t=!1,s=!1;return{onClick:u=>{t&&s&&e(u),t=s=!1},onMousedown:u=>{t=u.target===u.currentTarget},onMouseup:u=>{s=u.target===u.currentTarget}}};function yn(e){const t=L();function s(){if(e.value==null)return;const{selectionStart:a,selectionEnd:l,value:u}=e.value;if(a==null||l==null)return;const v=u.slice(0,Math.max(0,a)),c=u.slice(Math.max(0,l));t.value={selectionStart:a,selectionEnd:l,value:u,beforeTxt:v,afterTxt:c}}function o(){if(e.value==null||t.value==null)return;const{value:a}=e.value,{beforeTxt:l,afterTxt:u,selectionStart:v}=t.value;if(l==null||u==null||v==null)return;let c=a.length;if(a.endsWith(u))c=a.length-u.length;else if(a.startsWith(l))c=l.length;else{const i=l[v-1],C=a.indexOf(i,v-1);C!==-1&&(c=C+1)}e.value.setSelectionRange(c,c)}return[s,o]}let N;const bn=`
  height:0 !important;
  visibility:hidden !important;
  ${rn()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,gn=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function hn(e){const t=window.getComputedStyle(e),s=t.getPropertyValue("box-sizing"),o=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),a=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:gn.map(u=>`${u}:${t.getPropertyValue(u)}`).join(";"),paddingSize:o,borderSize:a,boxSizing:s}}function tt(e,t=1,s){var o;N||(N=document.createElement("textarea"),document.body.appendChild(N));const{paddingSize:a,borderSize:l,boxSizing:u,contextStyle:v}=hn(e);N.setAttribute("style",`${v};${bn}`),N.value=e.value||e.placeholder||"";let c=N.scrollHeight;const i={};u==="border-box"?c=c+l:u==="content-box"&&(c=c-a),N.value="";const C=N.scrollHeight-a;if(Xe(t)){let b=C*t;u==="border-box"&&(b=b+a+l),c=Math.max(b,c),i.minHeight=`${b}px`}if(Xe(s)){let b=C*s;u==="border-box"&&(b=b+a+l),c=Math.min(b,c)}return i.height=`${c}px`,(o=N.parentNode)==null||o.removeChild(N),N=void 0,i}const En=at({id:{type:String,default:void 0},size:At,disabled:Boolean,modelValue:{type:re([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:re([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:je},prefixIcon:{type:je},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:re([Object,Array,String]),default:()=>Lt({})}}),Cn={[Oe]:e=>ie(e),input:e=>ie(e),change:e=>ie(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},wn=["role"],Sn=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Tn=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],In=we({name:"ElInput",inheritAttrs:!1}),Mn=we({...In,props:En,emits:Cn,setup(e,{expose:t,emit:s}){const o=e,a=zt(),l=Ot(),u=y(()=>{const n={};return o.containerRole==="combobox"&&(n["aria-haspopup"]=a["aria-haspopup"],n["aria-owns"]=a["aria-owns"],n["aria-expanded"]=a["aria-expanded"]),n}),v=y(()=>[o.type==="textarea"?j.b():d.b(),d.m(Q.value),d.is("disabled",z.value),d.is("exceed",dt.value),{[d.b("group")]:l.prepend||l.append,[d.bm("group","append")]:l.append,[d.bm("group","prepend")]:l.prepend,[d.m("prefix")]:l.prefix||o.prefixIcon,[d.m("suffix")]:l.suffix||o.suffixIcon||o.clearable||o.showPassword,[d.bm("suffix","password-clear")]:R.value&&_.value},a.class]),c=y(()=>[d.e("wrapper"),d.is("focus",x.value)]),i=fn({excludeKeys:y(()=>Object.keys(u.value))}),{form:C,formItem:b}=qt(),{inputId:g}=Zt(o,{formItemContext:b}),Q=Jt(),z=Qt(),d=Ce("input"),j=Ce("textarea"),k=Me(),T=Me(),x=L(!1),G=L(!1),P=L(!1),A=L(!1),W=L(),Y=Me(o.inputStyle),V=y(()=>k.value||T.value),D=y(()=>{var n;return(n=C==null?void 0:C.statusIcon)!=null?n:!1}),O=y(()=>(b==null?void 0:b.validateState)||""),ce=y(()=>O.value&&Rt[O.value]),fe=y(()=>A.value?Nt:$t),Se=y(()=>[a.style,o.inputStyle]),E=y(()=>[o.inputStyle,Y.value,{resize:o.resize}]),w=y(()=>_t(o.modelValue)?"":String(o.modelValue)),R=y(()=>o.clearable&&!z.value&&!o.readonly&&!!w.value&&(x.value||G.value)),_=y(()=>o.showPassword&&!z.value&&!o.readonly&&!!w.value&&(!!w.value||x.value)),ee=y(()=>o.showWordLimit&&!!i.value.maxlength&&(o.type==="text"||o.type==="textarea")&&!z.value&&!o.readonly&&!o.showPassword),Te=y(()=>w.value.length),dt=y(()=>!!ee.value&&Te.value>Number(i.value.maxlength)),ct=y(()=>!!l.suffix||!!o.suffixIcon||R.value||o.showPassword||ee.value||!!O.value&&D.value),[ft,pt]=yn(k);xt(T,n=>{if(vt(),!ee.value||o.resize!=="both")return;const m=n[0],{width:H}=m.contentRect;W.value={right:`calc(100% - ${H+15+6}px)`}});const se=()=>{const{type:n,autosize:m}=o;if(!(!de||n!=="textarea"||!T.value))if(m){const H=ze(m)?m.minRows:void 0,ve=ze(m)?m.maxRows:void 0,Ue=tt(T.value,H,ve);Y.value={overflowY:"hidden",...Ue},$(()=>{T.value.offsetHeight,Y.value=Ue})}else Y.value={minHeight:tt(T.value).minHeight}},vt=(n=>{let m=!1;return()=>{var H;if(m||!o.autosize)return;((H=T.value)==null?void 0:H.offsetParent)===null||(n(),m=!0)}})(se),ae=()=>{const n=V.value;!n||n.value===w.value||(n.value=w.value)},Ie=async n=>{ft();let{value:m}=n.target;if(o.formatter&&(m=o.parser?o.parser(m):m,m=o.formatter(m)),!P.value){if(m===w.value){ae();return}s(Oe,m),s("input",m),await $(),ae(),pt()}},$e=n=>{s("change",n.target.value)},xe=n=>{s("compositionstart",n),P.value=!0},Ve=n=>{var m;s("compositionupdate",n);const H=(m=n.target)==null?void 0:m.value,ve=H[H.length-1]||"";P.value=!un(ve)},De=n=>{s("compositionend",n),P.value&&(P.value=!1,Ie(n))},mt=()=>{A.value=!A.value,pe()},pe=async()=>{var n;await $(),(n=V.value)==null||n.focus()},yt=()=>{var n;return(n=V.value)==null?void 0:n.blur()},He=n=>{x.value=!0,s("focus",n)},Pe=n=>{var m;x.value=!1,s("blur",n),o.validateEvent&&((m=b==null?void 0:b.validate)==null||m.call(b,"blur").catch(H=>Qe()))},bt=n=>{G.value=!1,s("mouseleave",n)},gt=n=>{G.value=!0,s("mouseenter",n)},Ye=n=>{s("keydown",n)},ht=()=>{var n;(n=V.value)==null||n.select()},Ke=()=>{s(Oe,""),s("change",""),s("clear"),s("input","")};return J(()=>o.modelValue,()=>{var n;$(()=>se()),o.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"change").catch(m=>Qe()))}),J(w,()=>ae()),J(()=>o.type,async()=>{await $(),ae(),se()}),Ne(()=>{!o.formatter&&o.parser,ae(),$(se)}),t({input:k,textarea:T,ref:V,textareaStyle:E,autosize:Vt(o,"autosize"),focus:pe,blur:yt,select:ht,clear:Ke,resizeTextarea:se}),(n,m)=>ge((p(),B("div",ke(r(u),{class:r(v),style:r(Se),role:n.containerRole,onMouseenter:gt,onMouseleave:bt}),[h(" input "),n.type!=="textarea"?(p(),B(Be,{key:0},[h(" prepend slot "),n.$slots.prepend?(p(),B("div",{key:0,class:f(r(d).be("group","prepend"))},[q(n.$slots,"prepend")],2)):h("v-if",!0),I("div",{class:f(r(c))},[h(" prefix slot "),n.$slots.prefix||n.prefixIcon?(p(),B("span",{key:0,class:f(r(d).e("prefix"))},[I("span",{class:f(r(d).e("prefix-inner")),onClick:pe},[q(n.$slots,"prefix"),n.prefixIcon?(p(),S(r(ne),{key:0,class:f(r(d).e("icon"))},{default:M(()=>[(p(),S(X(n.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),I("input",ke({id:r(g),ref_key:"input",ref:k,class:r(d).e("inner")},r(i),{type:n.showPassword?A.value?"text":"password":n.type,disabled:r(z),formatter:n.formatter,parser:n.parser,readonly:n.readonly,autocomplete:n.autocomplete,tabindex:n.tabindex,"aria-label":n.label,placeholder:n.placeholder,style:n.inputStyle,form:o.form,onCompositionstart:xe,onCompositionupdate:Ve,onCompositionend:De,onInput:Ie,onFocus:He,onBlur:Pe,onChange:$e,onKeydown:Ye}),null,16,Sn),h(" suffix slot "),r(ct)?(p(),B("span",{key:1,class:f(r(d).e("suffix"))},[I("span",{class:f(r(d).e("suffix-inner")),onClick:pe},[!r(R)||!r(_)||!r(ee)?(p(),B(Be,{key:0},[q(n.$slots,"suffix"),n.suffixIcon?(p(),S(r(ne),{key:0,class:f(r(d).e("icon"))},{default:M(()=>[(p(),S(X(n.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),r(R)?(p(),S(r(ne),{key:1,class:f([r(d).e("icon"),r(d).e("clear")]),onMousedown:le(r(be),["prevent"]),onClick:Ke},{default:M(()=>[K(r(Dt))]),_:1},8,["class","onMousedown"])):h("v-if",!0),r(_)?(p(),S(r(ne),{key:2,class:f([r(d).e("icon"),r(d).e("password")]),onClick:mt},{default:M(()=>[(p(),S(X(r(fe))))]),_:1},8,["class"])):h("v-if",!0),r(ee)?(p(),B("span",{key:3,class:f(r(d).e("count"))},[I("span",{class:f(r(d).e("count-inner"))},U(r(Te))+" / "+U(r(i).maxlength),3)],2)):h("v-if",!0),r(O)&&r(ce)&&r(D)?(p(),S(r(ne),{key:4,class:f([r(d).e("icon"),r(d).e("validateIcon"),r(d).is("loading",r(O)==="validating")])},{default:M(()=>[(p(),S(X(r(ce))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),n.$slots.append?(p(),B("div",{key:1,class:f(r(d).be("group","append"))},[q(n.$slots,"append")],2)):h("v-if",!0)],64)):(p(),B(Be,{key:1},[h(" textarea "),I("textarea",ke({id:r(g),ref_key:"textarea",ref:T,class:r(j).e("inner")},r(i),{tabindex:n.tabindex,disabled:r(z),readonly:n.readonly,autocomplete:n.autocomplete,style:r(E),"aria-label":n.label,placeholder:n.placeholder,form:o.form,onCompositionstart:xe,onCompositionupdate:Ve,onCompositionend:De,onInput:Ie,onFocus:He,onBlur:Pe,onChange:$e,onKeydown:Ye}),null,16,Tn),r(ee)?(p(),B("span",{key:0,style:Le(W.value),class:f(r(d).e("count"))},U(r(Te))+" / "+U(r(i).maxlength),7)):h("v-if",!0)],64))],16,wn)),[[he,n.type!=="hidden"]])}});var Bn=lt(Mn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const kn=Ht(Bn),Re="_trap-focus-children",Z=[],nt=e=>{if(Z.length===0)return;const t=Z[Z.length-1][Re];if(t.length>0&&e.code===Pt.tab){if(t.length===1){e.preventDefault(),document.activeElement!==t[0]&&t[0].focus();return}const s=e.shiftKey,o=e.target===t[0],a=e.target===t[t.length-1];o&&s&&(e.preventDefault(),t[t.length-1].focus()),a&&!s&&(e.preventDefault(),t[0].focus())}},An={beforeMount(e){e[Re]=et(e),Z.push(e),Z.length<=1&&document.addEventListener("keydown",nt)},updated(e){$(()=>{e[Re]=et(e)})},unmounted(){Z.shift(),Z.length===0&&document.removeEventListener("keydown",nt)}},Ln=at({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:re([String,Array,Object])},zIndex:{type:re([String,Number])}}),zn={click:e=>e instanceof MouseEvent},On="overlay";var Rn=we({name:"ElOverlay",props:Ln,emits:zn,setup(e,{slots:t,emit:s}){const o=Ce(On),a=c=>{s("click",c)},{onClick:l,onMousedown:u,onMouseup:v}=ut(e.customMaskEvent?void 0:a);return()=>e.mask?K("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:l,onMousedown:u,onMouseup:v},[q(t,"default")],Ee.STYLE|Ee.CLASS|Ee.PROPS,["onClick","onMouseup","onMousedown"]):Yt("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[q(t,"default")])}});const Nn=Rn,$n=we({name:"ElMessageBox",directives:{TrapFocus:An},components:{ElButton:en,ElFocusTrap:tn,ElInput:kn,ElOverlay:Nn,ElIcon:ne,...Kt},inheritAttrs:!1,props:{buttonSize:{type:String,validator:ln},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:t}){const{locale:s,zIndex:o,ns:a,size:l}=Ut("message-box",y(()=>e.buttonSize)),{t:u}=s,{nextZIndex:v}=o,c=L(!1),i=Wt({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:v()}),C=y(()=>{const E=i.type;return{[a.bm("icon",E)]:E&&Ge[E]}}),b=_e(),g=_e(),Q=y(()=>i.icon||Ge[i.type]||""),z=y(()=>!!i.message),d=L(),j=L(),k=L(),T=L(),x=L(),G=y(()=>i.confirmButtonClass);J(()=>i.inputValue,async E=>{await $(),e.boxType==="prompt"&&E!==null&&O()},{immediate:!0}),J(()=>c.value,E=>{var w,R;E&&(e.boxType!=="prompt"&&(i.autofocus?k.value=(R=(w=x.value)==null?void 0:w.$el)!=null?R:d.value:k.value=d.value),i.zIndex=v()),e.boxType==="prompt"&&(E?$().then(()=>{var _;T.value&&T.value.$el&&(i.autofocus?k.value=(_=ce())!=null?_:d.value:k.value=d.value)}):(i.editorErrorMessage="",i.validateError=!1))});const P=y(()=>e.draggable);pn(d,j,P),Ne(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),ot(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){c.value&&(c.value=!1,$(()=>{i.action&&t("action",i.action)}))}const W=()=>{e.closeOnClickModal&&D(i.distinguishCancelAndClose?"close":"cancel")},Y=ut(W),V=E=>{if(i.inputType!=="textarea")return E.preventDefault(),D("confirm")},D=E=>{var w;e.boxType==="prompt"&&E==="confirm"&&!O()||(i.action=E,i.beforeClose?(w=i.beforeClose)==null||w.call(i,E,i,A):A())},O=()=>{if(e.boxType==="prompt"){const E=i.inputPattern;if(E&&!E.test(i.inputValue||""))return i.editorErrorMessage=i.inputErrorMessage||u("el.messagebox.error"),i.validateError=!0,!1;const w=i.inputValidator;if(typeof w=="function"){const R=w(i.inputValue);if(R===!1)return i.editorErrorMessage=i.inputErrorMessage||u("el.messagebox.error"),i.validateError=!0,!1;if(typeof R=="string")return i.editorErrorMessage=R,i.validateError=!0,!1}}return i.editorErrorMessage="",i.validateError=!1,!0},ce=()=>{const E=T.value.$refs;return E.input||E.textarea},fe=()=>{D("close")},Se=()=>{e.closeOnPressEscape&&fe()};return e.lockScroll&&vn(c),mn(c),{...Ft(i),ns:a,overlayEvent:Y,visible:c,hasMessage:z,typeClass:C,contentId:b,inputId:g,btnSize:l,iconComponent:Q,confirmButtonClasses:G,rootRef:d,focusStartRef:k,headerRef:j,inputRef:T,confirmRef:x,doClose:A,handleClose:fe,onCloseRequested:Se,handleWrapperClick:W,handleInputEnter:V,handleAction:D,t:u}}}),xn=["aria-label","aria-describedby"],Vn=["aria-label"],Dn=["id"];function Hn(e,t,s,o,a,l){const u=te("el-icon"),v=te("close"),c=te("el-input"),i=te("el-button"),C=te("el-focus-trap"),b=te("el-overlay");return p(),S(Xt,{name:"fade-in-linear",onAfterLeave:t[11]||(t[11]=g=>e.$emit("vanish")),persisted:""},{default:M(()=>[ge(K(b,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:M(()=>[I("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:f(`${e.ns.namespace.value}-overlay-message-box`),onClick:t[8]||(t[8]=(...g)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...g)),onMousedown:t[9]||(t[9]=(...g)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...g)),onMouseup:t[10]||(t[10]=(...g)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...g))},[K(C,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:M(()=>[I("div",{ref:"rootRef",class:f([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:Le(e.customStyle),tabindex:"-1",onClick:t[7]||(t[7]=le(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(p(),B("div",{key:0,ref:"headerRef",class:f(e.ns.e("header"))},[I("div",{class:f(e.ns.e("title"))},[e.iconComponent&&e.center?(p(),S(u,{key:0,class:f([e.ns.e("status"),e.typeClass])},{default:M(()=>[(p(),S(X(e.iconComponent)))]),_:1},8,["class"])):h("v-if",!0),I("span",null,U(e.title),1)],2),e.showClose?(p(),B("button",{key:0,type:"button",class:f(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:t[0]||(t[0]=g=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:t[1]||(t[1]=me(le(g=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[K(u,{class:f(e.ns.e("close"))},{default:M(()=>[K(v)]),_:1},8,["class"])],42,Vn)):h("v-if",!0)],2)):h("v-if",!0),I("div",{id:e.contentId,class:f(e.ns.e("content"))},[I("div",{class:f(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(p(),S(u,{key:0,class:f([e.ns.e("status"),e.typeClass])},{default:M(()=>[(p(),S(X(e.iconComponent)))]),_:1},8,["class"])):h("v-if",!0),e.hasMessage?(p(),B("div",{key:1,class:f(e.ns.e("message"))},[q(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(p(),S(X(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(p(),S(X(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:M(()=>[Ae(U(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):h("v-if",!0)],2),ge(I("div",{class:f(e.ns.e("input"))},[K(c,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":t[2]||(t[2]=g=>e.inputValue=g),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:f({invalid:e.validateError}),onKeydown:me(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),I("div",{class:f(e.ns.e("errormsg")),style:Le({visibility:e.editorErrorMessage?"visible":"hidden"})},U(e.editorErrorMessage),7)],2),[[he,e.showInput]])],10,Dn),I("div",{class:f(e.ns.e("btns"))},[e.showCancelButton?(p(),S(i,{key:0,loading:e.cancelButtonLoading,class:f([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:t[3]||(t[3]=g=>e.handleAction("cancel")),onKeydown:t[4]||(t[4]=me(le(g=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:M(()=>[Ae(U(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):h("v-if",!0),ge(K(i,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:f([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:t[5]||(t[5]=g=>e.handleAction("confirm")),onKeydown:t[6]||(t[6]=me(le(g=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:M(()=>[Ae(U(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[he,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,xn)]),_:3},8,["z-index","overlay-class","mask"]),[[he,e.visible]])]),_:3})}var Pn=lt($n,[["render",Hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ue=new Map,Yn=e=>{let t=document.body;return e.appendTo&&(ie(e.appendTo)&&(t=document.querySelector(e.appendTo)),Je(e.appendTo)&&(t=e.appendTo),Je(t)||(t=document.body)),t},Kn=(e,t,s=null)=>{const o=K(Pn,e,Ze(e.message)||rt(e.message)?{default:Ze(e.message)?e.message:()=>e.message}:null);return o.appContext=s,it(o,t),Yn(e).appendChild(t.firstElementChild),o.component},Un=()=>document.createElement("div"),Wn=(e,t)=>{const s=Un();e.onVanish=()=>{it(null,s),ue.delete(a)},e.onAction=l=>{const u=ue.get(a);let v;e.showInput?v={value:a.inputValue,action:l}:v=l,e.callback?e.callback(v,o.proxy):l==="cancel"||l==="close"?e.distinguishCancelAndClose&&l!=="cancel"?u.reject("close"):u.reject("cancel"):u.resolve(v)};const o=Kn(e,s,t),a=o.proxy;for(const l in e)qe(e,l)&&!qe(a.$props,l)&&(a[l]=e[l]);return a.visible=!0,a};function oe(e,t=null){if(!de)return Promise.reject();let s;return ie(e)||rt(e)?e={message:e}:s=e.callback,new Promise((o,a)=>{const l=Wn(e,t??oe._context);ue.set(l,{options:e,callback:s,resolve:o,reject:a})})}const Fn=["alert","confirm","prompt"],Xn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Fn.forEach(e=>{oe[e]=jn(e)});function jn(e){return(t,s,o,a)=>{let l="";return ze(s)?(o=s,l=""):jt(s)?l="":l=s,oe(Object.assign({title:l,message:t,type:"",...Xn[e]},o,{boxType:e}),a)}}oe.close=()=>{ue.forEach((e,t)=>{t.doClose()}),ue.clear()};oe._context=null;const F=oe;F.install=e=>{F._context=e._context,e.config.globalProperties.$msgbox=F,e.config.globalProperties.$messageBox=F,e.config.globalProperties.$alert=F.alert,e.config.globalProperties.$confirm=F.confirm,e.config.globalProperties.$prompt=F.prompt};const Jn=F;export{Jn as E};