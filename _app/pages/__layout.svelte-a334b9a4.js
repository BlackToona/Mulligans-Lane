import{D as s,S as e,i as a,s as t,e as r,k as l,E as c,t as i,c as o,a as v,d as f,n as h,g as n,F as d,b as u,G as p,f as m,H as b,I as g,J as k,K as E,j as w,m as $,o as A,L,x,u as I,v as _}from"../chunks/vendor-2bec759f.js";import{b as B}from"../chunks/paths-45dac81d.js";const D={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function H(s){let e,a,t,k,E,w,$,A,L,x,I,_,D,H,K,M,S,j,z,T,V,C,F,G,N,O,R;return{c(){e=r("header"),a=r("div"),t=r("a"),k=r("img"),w=l(),$=r("nav"),A=c("svg"),L=c("path"),x=l(),I=r("ul"),_=r("li"),D=r("a"),H=i("Home"),K=l(),M=r("li"),S=r("a"),j=i("About"),z=l(),T=r("li"),V=r("a"),C=i("Todos"),F=l(),G=c("svg"),N=c("path"),O=l(),R=r("div"),this.h()},l(s){e=o(s,"HEADER",{class:!0});var r=v(e);a=o(r,"DIV",{class:!0});var l=v(a);t=o(l,"A",{href:!0,class:!0});var c=v(t);k=o(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(f),l.forEach(f),w=h(r),$=o(r,"NAV",{class:!0});var i=v($);A=o(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=v(A);L=o(d,"path",{d:!0,class:!0},1),v(L).forEach(f),d.forEach(f),x=h(i),I=o(i,"UL",{class:!0});var u=v(I);_=o(u,"LI",{class:!0});var p=v(_);D=o(p,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=v(D);H=n(m,"Home"),m.forEach(f),p.forEach(f),K=h(u),M=o(u,"LI",{class:!0});var b=v(M);S=o(b,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=v(S);j=n(g,"About"),g.forEach(f),b.forEach(f),z=h(u),T=o(u,"LI",{class:!0});var E=v(T);V=o(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var B=v(V);C=n(B,"Todos"),B.forEach(f),E.forEach(f),u.forEach(f),F=h(i),G=o(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Z=v(G);N=o(Z,"path",{d:!0,class:!0},1),v(N).forEach(f),Z.forEach(f),i.forEach(f),O=h(r),R=o(r,"DIV",{class:!0}),v(R).forEach(f),r.forEach(f),this.h()},h(){d(k.src,E="/mulligans-lane/_app/assets/svelte-logo.87df40b8.svg")||u(k,"src","/mulligans-lane/_app/assets/svelte-logo.87df40b8.svg"),u(k,"alt","SvelteKit"),u(k,"class","svelte-1twf6mk"),u(t,"href","https://kit.svelte.dev"),u(t,"class","svelte-1twf6mk"),u(a,"class","corner svelte-1twf6mk"),u(L,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),u(L,"class","svelte-1twf6mk"),u(A,"viewBox","0 0 2 3"),u(A,"aria-hidden","true"),u(A,"class","svelte-1twf6mk"),u(D,"sveltekit:prefetch",""),u(D,"href",B+"/"),u(D,"class","svelte-1twf6mk"),u(_,"class","svelte-1twf6mk"),p(_,"active","{base}/"===s[0].path),u(S,"sveltekit:prefetch",""),u(S,"href",B+"/about"),u(S,"class","svelte-1twf6mk"),u(M,"class","svelte-1twf6mk"),p(M,"active","{base}/about"===s[0].path),u(V,"sveltekit:prefetch",""),u(V,"href",B+"/todos"),u(V,"class","svelte-1twf6mk"),u(T,"class","svelte-1twf6mk"),p(T,"active","{base}/todos"===s[0].path),u(I,"class","svelte-1twf6mk"),u(N,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),u(N,"class","svelte-1twf6mk"),u(G,"viewBox","0 0 2 3"),u(G,"aria-hidden","true"),u(G,"class","svelte-1twf6mk"),u($,"class","svelte-1twf6mk"),u(R,"class","corner svelte-1twf6mk"),u(e,"class","svelte-1twf6mk")},m(s,r){m(s,e,r),b(e,a),b(a,t),b(t,k),b(e,w),b(e,$),b($,A),b(A,L),b($,x),b($,I),b(I,_),b(_,D),b(D,H),b(I,K),b(I,M),b(M,S),b(S,j),b(I,z),b(I,T),b(T,V),b(V,C),b($,F),b($,G),b(G,N),b(e,O),b(e,R)},p(s,[e]){1&e&&p(_,"active","{base}/"===s[0].path),1&e&&p(M,"active","{base}/about"===s[0].path),1&e&&p(T,"active","{base}/todos"===s[0].path)},i:g,o:g,d(s){s&&f(e)}}}function K(s,e,a){let t;return k(s,D,(s=>a(0,t=s))),[t]}class M extends e{constructor(s){super(),a(this,s,K,H,t,{})}}function S(s){let e,a,t,c,d,p,g,k,B,D,H;e=new M({});const K=s[1].default,S=E(K,s,s[0],null);return{c(){w(e.$$.fragment),a=l(),t=r("main"),S&&S.c(),c=l(),d=r("footer"),p=r("p"),g=i("visit "),k=r("a"),B=i("kit.svelte.dev"),D=i(" to learn SvelteKit"),this.h()},l(s){$(e.$$.fragment,s),a=h(s),t=o(s,"MAIN",{class:!0});var r=v(t);S&&S.l(r),r.forEach(f),c=h(s),d=o(s,"FOOTER",{class:!0});var l=v(d);p=o(l,"P",{});var i=v(p);g=n(i,"visit "),k=o(i,"A",{href:!0,class:!0});var u=v(k);B=n(u,"kit.svelte.dev"),u.forEach(f),D=n(i," to learn SvelteKit"),i.forEach(f),l.forEach(f),this.h()},h(){u(t,"class","svelte-1izrdc8"),u(k,"href","https://kit.svelte.dev"),u(k,"class","svelte-1izrdc8"),u(d,"class","svelte-1izrdc8")},m(s,r){A(e,s,r),m(s,a,r),m(s,t,r),S&&S.m(t,null),m(s,c,r),m(s,d,r),b(d,p),b(p,g),b(p,k),b(k,B),b(p,D),H=!0},p(s,[e]){S&&S.p&&(!H||1&e)&&L(S,K,s,s[0],H?e:-1,null,null)},i(s){H||(x(e.$$.fragment,s),x(S,s),H=!0)},o(s){I(e.$$.fragment,s),I(S,s),H=!1},d(s){_(e,s),s&&f(a),s&&f(t),S&&S.d(s),s&&f(c),s&&f(d)}}}function j(s,e,a){let{$$slots:t={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,t]}export default class extends e{constructor(s){super(),a(this,s,j,S,t,{})}}