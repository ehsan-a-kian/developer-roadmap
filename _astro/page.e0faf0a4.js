let t=[],f=(o,a)=>{let n=[],l={get(){return l.lc||l.listen(()=>{})(),l.value},l:a||0,lc:0,listen(s,i){return l.lc=n.push(s,i||l.l)/2,()=>{let e=n.indexOf(s);~e&&(n.splice(e,2),l.lc--,l.lc||l.off())}},notify(s){let i=!t.length;for(let e=0;e<n.length;e+=2)t.push(n[e],l.value,s,n[e+1]);if(i){for(let e=0;e<t.length;e+=4){let r=!1;for(let u=e+7;u<t.length;u+=4)if(t[u]<t[e+3]){r=!0;break}r?t.push(t[e],t[e+1],t[e+2],t[e+3]):t[e](t[e+1],t[e+2])}t.length=0}},off(){},set(s){l.value!==s&&(l.value=s,l.notify())},subscribe(s,i){let e=l.listen(s,i);return s(l.value),e},value:o};return l};const g=f(""),p=f(!1);export{g as p,p as s};
