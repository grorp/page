import{S as be,i as ye,s as we,a as D,k as g,L as $,q as F,J as Ee,h as n,c as V,l as _,m as d,M as H,r as N,n as e,N as xe,b as te,G as t,O as ce,P as de,Q as me,H as pe,R as Pe,T as Le,K as fe,u as Ie,U as Me}from"../chunks/index.2ed5b581.js";/* empty css                       */import{b as ae}from"../chunks/paths.8f08fb5f.js";const Ae=[{author:"Wuzzy",name:"mineclone2",release:16650,short_description:"Survive, farm, build, explore, play with friends, and do much more. Inspired by Minecraft, pushing beyond.",thumbnail:"https://content.minetest.net/thumbnails/1/55ab4fc1b5.png",title:"MineClone2",type:"game",lastPlayed:1681117090246},{author:"Warr1024",name:"nodecore",release:17811,short_description:"Minetest's top original voxel game about emergent mechanics and exploration",thumbnail:"https://content.minetest.net/thumbnails/1/6b28be927c.jpg",title:"NodeCore",type:"game",lastPlayed:1681125895292},{author:"AFCM",name:"subway_miner",release:10900,short_description:"A Subway Surfers inspired game. Collect the mese in an infinite runner.",thumbnail:"https://content.minetest.net/thumbnails/1/fdbb5f5922.png",title:"Subway Miner",type:"game",lastPlayed:1681195616486},{author:"Sumianvoice",name:"backroomtest",release:17086,short_description:"Limbo - - - - [in dev]",thumbnail:"https://content.minetest.net/thumbnails/1/7f0ec19e49.jpg",title:"Backrooms Test",type:"game",lastPlayed:1681172925812},{author:"Wuzzy",name:"glitch",release:17066,short_description:"You’re lost in cyberspace. Collect electrons, unlock new sectors and find your destination",thumbnail:"https://content.minetest.net/thumbnails/1/f8309307c6.png",title:"Glitch",type:"game",lastPlayed:1681165801164},{author:"yaman",name:"alter",release:16458,short_description:"A challenging puzzle game in a dystopian future.",thumbnail:"https://content.minetest.net/thumbnails/1/7550c290b5.png",title:"Alter",type:"game",lastPlayed:1681028601708},{author:"Wuzzy",name:"tutorial",release:13032,short_description:"Learn how to play!",thumbnail:"https://content.minetest.net/thumbnails/1/dRFhWh47lG.png",title:"Tutorial",type:"game",lastPlayed:1681154304391},{author:"Just_Visiting",name:"littlelady",release:10980,short_description:"A Little Ladybug in a Big World",thumbnail:"https://content.minetest.net/thumbnails/1/c93bcca656.png",title:"Little Lady",type:"game",lastPlayed:1681084784275},{author:"Just_Visiting",name:"labyrinth",release:16683,short_description:"An aMAZEing Game",thumbnail:"https://content.minetest.net/thumbnails/1/mMhvdPN9dM.jpg",title:"Labyrinth",type:"game",lastPlayed:1681038672094},{author:"Mantar",name:"exile",release:18036,short_description:"Challenging, at times brutal, wilderness survival with simple technology. ",thumbnail:"https://content.minetest.net/thumbnails/1/0195f6298c.jpg",title:"Exile",type:"game",lastPlayed:1681049497176}].map(s=>(s.thumbnail=s.thumbnail.replace("/thumbnails/1/","/thumbnails/3/"),s));function ge(s,i,a){const o=s.slice();return o[7]=i[a],o}function _e(s){let i,a,o,v,m,h,u=s[7].title+"",x,w,p;return{c(){i=g("a"),a=g("img"),m=D(),h=g("h2"),x=F(u),w=D(),this.h()},l(l){i=_(l,"A",{class:!0,href:!0});var b=d(i);a=_(b,"IMG",{src:!0,width:!0,height:!0,alt:!0}),m=V(b),h=_(b,"H2",{});var z=d(h);x=N(z,u),z.forEach(n),w=V(b),b.forEach(n),this.h()},h(){fe(a.src,o=s[7].thumbnail)||e(a,"src",o),e(a,"width","350"),e(a,"height","233"),e(a,"alt",v=`thumbnail for ${s[7].title}`),e(i,"class","w-60"),e(i,"href",p=`${ae}/start/${s[7].name}`)},m(l,b){te(l,i,b),t(i,a),t(i,m),t(i,h),t(h,x),t(i,w)},p(l,b){b&4&&!fe(a.src,o=l[7].thumbnail)&&e(a,"src",o),b&4&&v!==(v=`thumbnail for ${l[7].title}`)&&e(a,"alt",v),b&4&&u!==(u=l[7].title+"")&&Ie(x,u),b&4&&p!==(p=`${ae}/start/${l[7].name}`)&&e(i,"href",p)},d(l){l&&n(i)}}}function Ce(s){let i,a,o,v,m,h,u,x,w,p,l,b,z,L,I,y,M,q,A,J,R,T,E,W,U,P,K,C,Q,le,B=s[2],f=[];for(let r=0;r<B.length;r+=1)f[r]=_e(ge(s,B,r));return{c(){i=D(),a=g("div"),o=g("div"),v=g("div"),m=g("div"),h=g("a"),u=$("svg"),x=F(">"),w=$("path"),p=D(),l=g("h1"),b=F(" Start local game"),z=D(),L=g("div"),I=g("div"),y=g("select"),M=g("option"),q=F("Last played "),A=g("option"),J=F("A-Z "),R=D(),T=g("div"),E=$("svg"),W=$("path"),U=D(),P=g("input"),K=D(),C=g("div");for(let r=0;r<f.length;r+=1)f[r].c();this.h()},l(r){Ee("svelte-34nx9n",document.head).forEach(n),i=V(r),a=_(r,"DIV",{class:!0});var c=d(a);o=_(c,"DIV",{class:!0,id:!0});var k=d(o);v=_(k,"DIV",{class:!0});var O=d(v);m=_(O,"DIV",{class:!0});var j=d(m);h=_(j,"A",{class:!0,href:!0,"aria-label":!0});var se=d(h);u=H(se,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,"aria-hidden":!0});var Y=d(u);x=N(Y,">"),w=H(Y,"path",{d:!0}),d(w).forEach(n),Y.forEach(n),se.forEach(n),p=V(j),l=_(j,"H1",{class:!0});var re=d(l);b=N(re," Start local game"),re.forEach(n),j.forEach(n),z=V(O),L=_(O,"DIV",{class:!0});var G=d(L);I=_(G,"DIV",{class:!0});var Z=d(I);y=_(Z,"SELECT",{"aria-label":!0,class:!0});var X=d(y);M=_(X,"OPTION",{});var ne=d(M);q=N(ne,"Last played "),ne.forEach(n),A=_(X,"OPTION",{});var ie=d(A);J=N(ie,"A-Z "),ie.forEach(n),X.forEach(n),R=V(Z),T=_(Z,"DIV",{class:!0});var oe=d(T);E=H(oe,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,class:!0,"aria-hidden":!0});var he=d(E);W=H(he,"path",{d:!0}),d(W).forEach(n),he.forEach(n),oe.forEach(n),Z.forEach(n),U=V(G),P=_(G,"INPUT",{"aria-label":!0,placeholder:!0,class:!0}),G.forEach(n),O.forEach(n),K=V(k),C=_(k,"DIV",{id:!0,class:!0});var ue=d(C);for(let ee=0;ee<f.length;ee+=1)f[ee].l(ue);ue.forEach(n),k.forEach(n),c.forEach(n),this.h()},h(){document.title="Minetest Launcher",e(w,"d","M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"),e(u,"xmlns","http://www.w3.org/2000/svg"),e(u,"viewBox","0 0 24 24"),e(u,"width","24"),e(u,"height","24"),e(u,"aria-hidden","true"),e(h,"class","text-xl"),e(h,"href",ae),e(h,"aria-label","Back"),e(l,"class","text-xl"),e(m,"class","flex items-center mr-auto"),M.__value="lastPlayed",M.value=M.__value,A.__value="abc",A.value=A.__value,e(y,"aria-label","Sort order"),e(y,"class",ve+" appearance-none block pr-[1.625rem] w-full"),s[0]===void 0&&xe(()=>s[4].call(y)),e(W,"d","M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"),e(E,"xmlns","http://www.w3.org/2000/svg"),e(E,"viewBox","0 0 16 16"),e(E,"width","16"),e(E,"height","16"),e(E,"class","my-auto"),e(E,"aria-hidden","true"),e(T,"class","absolute right-2.5 top-0 bottom-0 flex pointer-events-none"),e(I,"class","relative grow"),e(P,"aria-label","Filter..."),e(P,"placeholder","Filter..."),e(P,"class",ve+" placeholder:text-neutral-600 w-60 grow"),e(L,"class","flex items-center flex-wrap gap-4"),e(v,"class","flex mb-6 items-center flex-wrap gap-4"),e(C,"id","the-grid"),e(C,"class","mx-auto flex flex-wrap gap-6 pb-8 svelte-1cfsg7o"),e(o,"class","mx-auto p-8 pb-0 svelte-1cfsg7o"),e(o,"id","the-stuff"),e(a,"class","w-screen h-screen bg-[url('$lib/images/clouds.jpg')] bg-center bg-cover flex overflow-auto")},m(r,S){te(r,i,S),te(r,a,S),t(a,o),t(o,v),t(v,m),t(m,h),t(h,u),t(u,x),t(u,w),t(m,p),t(m,l),t(l,b),t(v,z),t(v,L),t(L,I),t(I,y),t(y,M),t(M,q),t(y,A),t(A,J),ce(y,s[0],!0),t(I,R),t(I,T),t(T,E),t(E,W),t(L,U),t(L,P),de(P,s[1]),t(o,K),t(o,C);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(C,null);Q||(le=[me(y,"change",s[4]),me(P,"input",s[5])],Q=!0)},p(r,[S]){if(S&1&&ce(y,r[0]),S&2&&P.value!==r[1]&&de(P,r[1]),S&4){B=r[2];let c;for(c=0;c<B.length;c+=1){const k=ge(r,B,c);f[c]?f[c].p(k,S):(f[c]=_e(k),f[c].c(),f[c].m(C,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=B.length}},i:pe,o:pe,d(r){r&&n(i),r&&n(a),Pe(f,r),Q=!1,Le(le)}}}const ve="p-2.5 bg-slate-300 border-slate-500 border-2 text-sm";function Se(s,i,a){let o,v,m="lastPlayed",h="";const u=(p,l)=>l.length===0?!0:p.toLowerCase().includes(l.toLowerCase());function x(){m=Me(this),a(0,m)}function w(){h=this.value,a(1,h)}return s.$$.update=()=>{s.$$.dirty&1&&a(3,o=(()=>{if(m==="lastPlayed")return(p,l)=>l.lastPlayed-p.lastPlayed;if(m==="abc")return(p,l)=>p.title<l.title?-1:p.title>l.title?1:0;throw new Error("Why?")})()),s.$$.dirty&10&&a(2,v=Ae.filter(p=>u(p.name,h)||u(p.title,h)).sort(o))},[m,h,v,o,x,w]}class ze extends be{constructor(i){super(),ye(this,i,Se,Ce,we,{})}}export{ze as default};
