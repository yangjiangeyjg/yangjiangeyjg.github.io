import{f as m,h as e,T as i,l as u,g as p,m as d,n as c,p as f,r as s,q as v,s as g}from"./app.52a475b6.js";import{S as b}from"./SkipLink.dce9b964.js";var y=m({name:"FadeSlideY",setup(l,{slots:a}){const n=u(),r=n.resolve,t=n.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:t},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=m({name:"Layout",setup(){const l=g(),a=p(),n=v(),r=d(),t=c(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(s("CommonWrapper"),{},{default:()=>r.value.home?e(s("HomePage")):e(y,()=>e(s("NormalPage"),{key:n.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(s("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>e(s("BloggerInfo"))}:{}})]}});export{S as default};
