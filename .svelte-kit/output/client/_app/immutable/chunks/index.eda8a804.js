import{X as f,s as h}from"./index.aeda84fa.js";const e=[];function p(s,u){return{subscribe:l(s,u).subscribe}}function l(s,u=f){let o;const r=new Set;function c(t){if(h(s,t)&&(s=t,o)){const i=!e.length;for(const n of r)n[1](),e.push(n,s);if(i){for(let n=0;n<e.length;n+=2)e[n][0](e[n+1]);e.length=0}}}function a(t){c(t(s))}function b(t,i=f){const n=[t,i];return r.add(n),r.size===1&&(o=u(c)||f),t(s),()=>{r.delete(n),r.size===0&&o&&(o(),o=null)}}return{set:c,update:a,subscribe:b}}export{p as r,l as w};
