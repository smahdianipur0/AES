import{w as p,r as v}from"./index.eda8a804.js";import{af as E}from"./index.aeda84fa.js";const d={};function h(e){return e==="local"?localStorage:sessionStorage}function u(e,o,t){const n=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local";function f(c,i){h(r).setItem(c,n.stringify(i))}if(!d[e]){const c=p(o,s=>{const a=h(r).getItem(e);a&&s(n.parse(a));{const w=m=>{m.key===e&&s(m.newValue?n.parse(m.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:i,set:l}=c;d[e]={set(s){f(e,s),l(s)},update(s){const a=s(E(c));f(e,a),l(a)},subscribe:i}}return d[e]}u("modeOsPrefers",!1),u("modeUserPrefers",void 0),u("modeCurrent",!1);function b(){const e=window.matchMedia("(prefers-color-scheme: light)");function o(t){const n=document.documentElement.classList,r="dark";t===!0?n.remove(r):n.add(r)}o(e.matches),e.onchange=()=>{o(e.matches)}}const g="(prefers-reduced-motion: reduce)";function L(){return window.matchMedia(g).matches}const M=v(L(),e=>{{const o=n=>{e(n.matches)},t=window.matchMedia(g);return t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}}});export{b as a,M as p};