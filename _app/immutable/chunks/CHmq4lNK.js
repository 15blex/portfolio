import{c as i,f,Y as v,I as u,Z as p,_ as h,h as s,e as o,L as E,d as T}from"./B8frN1ks.js";function g(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=u;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function x(n,t){var e=(t&p)!==0,_=(t&h)!==0,a,c=!n.startsWith("<!>");return()=>{if(s)return r(o,null),o;a===void 0&&(a=g(c?n:"<!>"+n),e||(a=f(a)));var d=_||v?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(d),l=d.lastChild;r(m,l)}else r(d,d);return d}}function L(n=""){if(!s){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),T(e)),r(e,e),e}function M(){if(s)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function N(n,t){if(s){u.nodes_end=o,E();return}n!==null&&n.before(t)}const y="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(y);export{N as a,r as b,M as c,L as d,x as t};
