import"./hoisted.3fa4cd82.js";import"./jwt.2bcbdb7f.js";const t=document.getElementById("settings-menu"),e=document.getElementById("settings-menu-dropdown");t?.addEventListener("click",()=>{e?.classList.toggle("hidden")});document.addEventListener("click",n=>{t?.contains(n.target)||e?.classList.add("hidden")});
