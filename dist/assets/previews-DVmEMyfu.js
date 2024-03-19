import{R as s,r as l,j as h,A as z}from"./index-Di5K0iaF.js";var F={},_;typeof process<"u"&&((_=F)===null||_===void 0||_.REACT_APP_IDE_DEVMODE);function g(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var W=`.table-header {
  border-color: #363636;
  border-width: 1px 0;
  border-style: solid;
  font-weight: 800;
  padding: 10px 20px 10px 10px;
  display: flex;
}
.table-header:after {
  content: "";
}
.table-header .table-header-item {
  flex-basis: 22%;
  color: #444;
}
.table-header .table-header-item-control {
  flex-basis: 78%;
  color: #444;
}`;g(W);const J=()=>s.createElement("div",{className:"table-header"},s.createElement("div",{className:"table-header-item"},"Property name"),s.createElement("div",{className:"table-header-item-control"},"Edit"));var v;(function(e){e.Checkbox="checkbox",e.Input="input",e.Radio="radio",e.Select="select",e.Textarea="textarea",e.JsonEditor="jsonEditor"})(v||(v={}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a}const N=e=>{var{value:t}=e,a=y(e,["value"]);return s.createElement("input",Object.assign({},a,{value:t??"",type:"text"}))},B=e=>{var{checked:t,className:a}=e,n=y(e,["checked","className"]);return s.createElement("div",{className:a},s.createElement("input",Object.assign({},n,{checked:t??!1,type:"checkbox"})))},H=e=>{var{optionsData:t}=e,a=y(e,["optionsData"]);return s.createElement("select",Object.assign({},a),t==null?void 0:t.map(n=>s.createElement("option",{value:n,key:n},n)))};var X=`.radio-control {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.radio-control label {
  margin-right: 5px;
}`;g(X);const q=e=>{var{className:t,radioData:a,extValue:n}=e,r=y(e,["className","radioData","extValue"]);return a?s.createElement("div",{className:t},a.map(c=>s.createElement("div",{key:c,className:"radio-control"},s.createElement("label",{htmlFor:String(c)}," ",c),s.createElement("input",Object.assign({},r,{type:"radio",checked:n==c,id:String(c),value:c}))))):null},M=e=>s.createElement("textarea",Object.assign({},e));var Y=`.json-editor {
  flex-direction: column;
}
.json-editor .json-editor-textarea {
  align-self: start;
  width: 100%;
  min-height: 100px;
  margin: 0 0 10px 0;
}
.json-editor .json-editor-apply-button {
  align-self: start;
}`;g(Y);const G=({className:e,propName:t,propValue:a,propUpdate:n})=>{const[r,c]=l.useState(),m=l.useCallback(b=>{const{currentTarget:{value:E}}=b;c(E)},[]),f=l.useMemo(()=>r==null,[r]),p=l.useCallback(()=>{n(t,r),c(void 0)},[t,r]);return s.createElement("div",{className:e+" json-editor"},s.createElement(M,{className:"json-editor-textarea",onChange:m,id:t,value:r??a}),s.createElement("button",{className:"json-editor-apply-button",disabled:f,onClick:p},"Apply changes"))},Q=({controlType:e,data:t,propName:a,propValue:n,onPropChange:r})=>{switch(e){case v.Input:return s.createElement(N,{className:"table-item-control",id:a,value:n,onChange:r});case v.Textarea:return s.createElement(M,{className:"table-item-control",id:a,value:n,onChange:r});case v.Select:return s.createElement(H,{className:"table-item-control",id:a,onChange:r,optionsData:t});case v.Checkbox:return s.createElement(B,{checked:n,id:a,onChange:r});case v.Radio:return s.createElement(q,{className:"table-item-control",extValue:n,name:a,onChange:r,radioData:t});case v.JsonEditor:return s.createElement(G,{className:"table-item-control",propValue:n,propName:a,propUpdate:r});default:return s.createElement(N,{className:"table-item-control",id:a,value:n,onChange:r})}};var K=`.table-item-wrapper {
  border-color: #363636;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 10px;
  display: flex;
}
.table-item-wrapper:after {
  content: "";
}
.table-item-wrapper .table-item,
.table-item-wrapper .table-item-control {
  display: flex;
  align-items: center;
  justify-content: start;
}
.table-item-wrapper .table-item {
  flex-basis: 22%;
}
.table-item-wrapper .table-item-control {
  flex-basis: 78%;
}`;g(K);const S=({propName:e,propValue:t,onPropChange:a,controlType:n,data:r})=>s.createElement("div",{className:"table-item-wrapper"},s.createElement("div",{className:"table-item"},e),s.createElement(Q,{data:r,controlType:n,propName:e,propValue:t,onPropChange:a}));var Z=`.table-items {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.table-items:after {
  content: "";
}`;g(Z);const ee=({toolsPropsToEdit:e})=>{const{props:t=null,initialProps:a=null,propsEditInfo:n=null,updateProps:r}=Object.assign({},e);l.useEffect(()=>{let o={};n&&Object.entries(n).map(([u,d])=>{const i=Array.isArray(d.data)?d.data[0]:d.data;o=Object.assign(Object.assign({},o),{[u]:i})}),r==null||r(Object.assign(Object.assign({},t),o))},[n]);const c=l.useCallback(o=>{const{value:u,id:d}=o.currentTarget,i=Object.assign(Object.assign({},t),{[d]:u});r(i)},[t]),m=l.useCallback(o=>{const{checked:u,id:d}=o.currentTarget,i=Object.assign(Object.assign({},t),{[d]:u});r(i)},[t]),f=l.useCallback(o=>{const{value:u,id:d}=o.currentTarget,i=Object.assign(Object.assign({},t),{[d]:u});r(i)},[t]),p=l.useCallback(o=>{const{value:u,name:d}=o.currentTarget,i=Object.assign(Object.assign({},t),{[d]:u});r(i)},[t]),b=l.useCallback(o=>{const{value:u,id:d}=o.currentTarget,i=Object.assign(Object.assign({},t),{[d]:u});r(i)},[t]),E=l.useCallback((o,u)=>{let d;try{d=JSON.parse(u)}catch{alert(`Property ${o} has incorrect value to object parse`);return}const i=Object.assign(Object.assign({},t),{[o]:d});r(i)},[t]),x=l.useCallback(o=>{switch(o){case v.Input:return c;case v.Checkbox:return m;case v.Select:return f;case v.Radio:return p;case v.Textarea:return b;case v.JsonEditor:return E;default:return c}},[t]),C=l.useCallback(()=>{let o=[];const u=t&&Object.entries(t).filter(([i])=>!(n!=null&&n.hasOwnProperty(i))).map(([i,w])=>s.createElement(S,{key:i,propName:i,propValue:w,initialPropValue:a==null?void 0:a[i],onPropChange:x()}));o=u?[...o,...u]:o;const d=n&&Object.entries(n).map(([i,w])=>s.createElement(S,{key:i,data:w.data,controlType:w.controlType,propName:i,propValue:w.controlType===v.JsonEditor?JSON.stringify(t==null?void 0:t[i],null,2):t==null?void 0:t[i],initialPropValue:a==null?void 0:a[i],onPropChange:x(w.controlType)}));return o=d?[...o,...d]:o,o},[t,n]);return s.createElement("div",{className:"table-items"},C())};var te=`.props-edit-table {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;g(te);const ne=({toolsPropsToEdit:e})=>s.createElement("div",{className:"props-edit-table"},s.createElement(J,null),s.createElement(ee,{toolsPropsToEdit:e}));var ae=`.tools-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.tools-panel .empty-props-message {
  color: red;
}`;g(ae);const re=({toolsPropsToEdit:e})=>{const{props:t=null,propsEditInfo:a=null}=Object.assign({},e),n=l.useCallback(()=>{let r;return r=t?Object.keys(t).length>0:!1,r=r||(a?Object.keys(a).length>0:!1),r?s.createElement(ne,{toolsPropsToEdit:e}):s.createElement("div",{className:"empty-props-message"},"This component has no properties to edit")},[t,a]);return s.createElement("div",{className:"tools-panel"},n())};function se(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const R="/REACT_BUDDY_PALETTE",T="urlchange",O=(e,t)=>{const[,a]=l.useState(!1),n=l.useCallback(()=>{a(r=>!r)},[]);return l.useEffect(()=>(window.addEventListener(T,n),window.addEventListener("popstate",n),()=>{window.removeEventListener(T,n),window.removeEventListener("popstate",n)}),[]),oe(e,t)};function oe(e,t=!1){const a=ie(),n=new RegExp(le(e)).exec(a);if(n){const[r]=n;return t?a===r:!0}return!1}function le(e){return se(encodeURI(e))}function ie(){const{hash:e,pathname:t}=window.location;return e?e.replace("#",""):t}function ce(e){window.history.replaceState({},"",e),de(e)}function de(e){const t=new CustomEvent(T,{bubbles:!0,detail:e});window.dispatchEvent(t)}var ue=`.previews-module_previewsMain__31L3F {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.previews-module_previewsContent__1aMUf {
  flex-basis: 100%;
  flex-grow: 1;
  overflow-y: auto;
}

.previews-module_previewsToolsPanel__30jjI {
  flex-basis: 295px;
  min-height: 100px;
}`,P={previewsMain:"previews-module_previewsMain__31L3F",previewsContent:"previews-module_previewsContent__1aMUf",previewsToolsPanel:"previews-module_previewsToolsPanel__30jjI"};g(ue);const me=({children:e,palette:t=null})=>{const[a,n]=l.useState(null),[r,c]=l.useState(()=>{var p;return(p=window.__PROPERTIES_EDIT_PANEL_ENABLED__)!==null&&p!==void 0?p:!1}),m=O(R),f=l.useMemo(()=>e?s.Children.map(e,p=>s.cloneElement(p,{setToolsPropsToEdit:n})):null,[e]);return l.useEffect(()=>{var p;window.enableComponentsPropsPanelEditor=b=>{var E;(E=window.setPropertiesEditPanelStatus)===null||E===void 0||E.call(window,b),c(b)},window.reactBuddyHistoryPush=ce,(p=window.cefQuery)===null||p===void 0||p.call(window,{request:"event:react-toolbox-initialized"})},[]),m?t:s.createElement("div",{className:P.previewsMain},s.createElement("div",{className:P.previewsContent},f),r&&s.createElement("div",{className:P.previewsToolsPanel},s.createElement(re,{toolsPropsToEdit:a})))},pe=({children:e,path:t,exact:a,setPropsToEdit:n})=>{const[r,c]=l.useState(null),m=O(t,a);l.useEffect(()=>{if(m){const b={props:r??e.props,updateProps:c};n(b)}return()=>{m||c(null)}},[m]);const f=r?s.cloneElement(e,Object.assign({},r)):e;return m?s.createElement(s.Fragment,null,f):null};var ve=`.react-buddy-error-boundary-module_errorMessageContainer__1L848 {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
}

.react-buddy-error-boundary-module_errorMessageTitle__r4YnX {
  color: #d32f2f;
}

.react-buddy-error-boundary-module_errorMessageStack__2XNRm {
  color: #a9a9a9;
  font-size: 0.8rem;
  width: 100%;
  overflow-x: scroll;
}`,j={errorMessageContainer:"react-buddy-error-boundary-module_errorMessageContainer__1L848",errorMessageTitle:"react-buddy-error-boundary-module_errorMessageTitle__r4YnX",errorMessageStack:"react-buddy-error-boundary-module_errorMessageStack__2XNRm"};g(ve);class A extends s.Component{constructor(){super(...arguments),this.state={error:null}}componentDidCatch(t){console.error(t),this.setState({error:t})}componentDidUpdate(t,a){a.error!=null&&this.setState({error:null})}render(){const{error:t}=this.state,{componentName:a,children:n}=this.props;return t!=null?s.createElement("div",{className:j.errorMessageContainer},s.createElement("h2",{className:j.errorMessageTitle},a?`Something went wrong while rendering ${a} component`:"Something went wrong"),s.createElement("p",null,t.message),s.createElement("pre",{className:j.errorMessageStack},t.stack)):n}}const be=({path:e,children:t,setToolsPropsToEdit:a,exact:n=!0,propsEditInfo:r})=>{const c=l.useCallback(m=>{a(Object.assign(Object.assign({},m),{initialProps:t.props,propsEditInfo:r}))},[]);return s.createElement(pe,{path:e,exact:n,setPropsToEdit:c},s.createElement(A,null,t))},he=({style:e,className:t,embeddable:a,children:n})=>a?s.createElement(s.Fragment,null,n):s.createElement("div",{style:e,className:t},n),I=s.createContext({}),ge=()=>l.useContext(I),fe=({children:e,name:t,className:a,style:n})=>s.createElement(I.Provider,{value:{categoryClassName:a,categoryStyle:n}},Ee({children:e,categoryName:t}));function Ee({children:e,categoryName:t}){return s.Children.map(e,a=>s.cloneElement(a,{categoryName:t}))}const D=s.createContext({}),we=()=>l.useContext(D),xe=({children:e,categoryName:t,name:a,className:n,style:r})=>s.createElement(D.Provider,{value:{componentClassName:n,componentStyle:r}},ye({children:e,componentName:a,categoryName:t}));function ye({children:e,componentName:t,categoryName:a}){return s.Children.map(e,n=>s.cloneElement(n,{categoryName:a,componentName:t}))}function L(...e){const t=e.flatMap(n=>n?n.split(" "):[]);return[...new Set(t)].join(" ")}var Ce=`.variant-module_fullWindow__1DkCI {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.variant-module_variantRouteCenter__ce423 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}`,k={fullWindow:"variant-module_fullWindow__1DkCI",variantRouteCenter:"variant-module_variantRouteCenter__ce423"};g(Ce);const _e="DEFAULT_VARIANT",Pe=({categoryName:e,componentName:t,variantName:a=_e,previewLayout:n="center",children:r})=>{const{categoryClassName:c,categoryStyle:m}=ge(),{componentClassName:f,componentStyle:p}=we(),{variantClassName:b,variantStyle:E}=Te(),x=l.useMemo(()=>je([e,t,a]),[e,t,a]),C=O(x,!0),[o,u]=l.useState(null);return l.useLayoutEffect(()=>(o!==null&&$(o),()=>{o!==null&&U(o)}),[o]),C?s.createElement("div",{className:c,style:m},s.createElement("div",{className:f,style:p,ref:u},s.createElement("div",{className:n==="center"?L(k.variantRouteCenter,b):b,style:E},r))):null};function je(e){return R+"/"+e.filter(t=>t!=null).join("/")}const V=s.createContext({}),Te=()=>l.useContext(V),Oe=({children:e,categoryName:t,componentName:a,name:n,previewLayout:r,className:c,style:m})=>s.createElement(V.Provider,{value:{variantClassName:c,variantStyle:m}},s.createElement(Pe,{previewLayout:r,variantName:n,categoryName:t,componentName:a},s.createElement(A,{componentName:a},e)));function $(e){e===null||e===document||(e.className=L(k.fullWindow,e.className),$(e.parentElement))}function U(e){e===null||e===document||(e.classList.remove(k.fullWindow),U(e.parentElement))}const ke=()=>h.jsx(he,{children:h.jsx(fe,{name:"App",children:h.jsx(xe,{name:"Loader",children:h.jsx(Oe,{children:h.jsx(Ne,{})})})})});function Ne(){return h.jsx(l.Fragment,{children:"Loading..."})}const Me=()=>h.jsx(me,{palette:h.jsx(ke,{}),children:h.jsx(be,{path:"/App",children:h.jsx(z,{})})});export{Me as default};
