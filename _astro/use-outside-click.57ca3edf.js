import{p as r}from"./hooks.module.9ee1d4a4.js";function d(e,n,t=[]){r(()=>{const s=o=>{!e.startsWith("mod_")&&o.key.toLowerCase()===e.toLowerCase()?n():e.startsWith("mod_")&&o.metaKey&&o.key.toLowerCase()===e.replace("mod_","").toLowerCase()&&(o.preventDefault(),n())};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},t)}function u(e,n){r(()=>{const t=s=>{!e?.current?.contains(s.target)&&n()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e])}export{d as a,u};
