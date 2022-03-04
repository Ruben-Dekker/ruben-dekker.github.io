import{C as We,S as V,F as wt,a as pt,P as yt,W as ht,V as bt,b as Et,A as Lt,c as kt,G as It,d as Ct,T as Be,e as St,E as xt,R as Tt,f as Mt,g as Wt,h as Bt,i as Dt,j as l,k as Pt,M as Gt,D as z,l as De,m as Pe}from"./vendor.968e0b6f.js";const At=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function f(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}};At();class Ge{static isWebGLAvailable(){try{const r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl")||r.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const r=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&r.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(r){const i={1:"WebGL",2:"WebGL 2"},f={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let o='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const e=document.createElement("div");return e.id="webglmessage",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",f[r]?o=o.replace("$0","graphics card"):o=o.replace("$0","browser"),o=o.replace("$1",i[r]),e.innerHTML=o,e}}class P{constructor(r,i,f){this.sectionName=r,this.position=i,this.focus=f}}const Ht="assets/title.gltf";var L=!1,Ae=[],G=null;const oe=15,He=60;var a=350;const M=80,h=180,w=120,m=80,Ye=9e-4;new We(12303291);new We(12303291);var re=new V(wt);class Yt{static runScene(r,i){var f=r;const o=new pt,e=new yt(oe,window.innerWidth/window.innerHeight,.1,1e4);e.position.set(0-a,m+a+M,w+a);const p=new ht({canvas:i.querySelector("#bg")});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight);var A=new bt;i.addEventListener("mousemove",it,!1),window.addEventListener("resize",tt,!1);const me=new Et(16777215),ge=new Lt(16777215);o.add(me,ge);const B=new kt(ge),D=new It(200,50),H=new Ct(50),ve=new Be().load("assets/lightBackground.png"),we=new Be().load("assets/darkBackGround.png");r==="light"?o.background=ve:o.background=we;function je(){const t=localStorage.theme;t!=f&&(f=t,_e(t))}function _e(t){t==="light"?o.background=ve:o.background=we}setInterval(je,1),o.fog=new St(4474043,Ye);var S=new xt(p),Ue=new Tt(o,e);S.addPass(Ue),re.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),re.renderToScreen=!0,S.addPass(re);var $=new V(Mt);$.uniforms.amount.value=.01,$.uniforms.angle.value=45,S.addPass($);var x=new V(Wt);x.uniforms.grayscale.value=0,x.uniforms.nIntensity.value=.08,x.uniforms.time.value=.5,x.uniforms.sCount.value=.9,x.uniforms.tDiffuse.value=1,S.addPass(x);var q=new V(Bt);q.uniforms.offset.value=1,q.uniforms.darkness.value=1.2,S.addPass(q),new Dt,new l(-.5,-1.5,-.5),new Pt().load(Ht,function(t){let s=t.scene;s.traverse(function(d){d instanceof Gt&&(d.material.metalness=.4)}),s.rotateX(90*Math.PI/180),o.add(t.scene),G=t.scene});function Ze(){}i.body.onscroll=Ze;function Qe(t){t.preventDefault();const s=new l(j/window.innerWidth*2-1,-(_/window.innerHeight)*2+1,.5),d=new De;d.setFromCamera(s,e);const u=d.intersectObjects(Ae);u.length>0&&u[0].object.material.color.setHex(Math.random()*16777215)}function Je(){const t=new l(j/window.innerWidth*2-1,-(_/window.innerHeight)*2+1,.5),s=new De;s.setFromCamera(t,e),s.intersectObjects(Ae).length>0?localStorage.raycastHit=1:localStorage.raycastHit=0}var j=null,_=null;const et=t=>{_=t.clientY,j=t.clientX};i.addEventListener("mousedown",Qe),window.addEventListener("mousemove",et),setInterval(Je,100);function pe(){o.fog.density=350/a*Ye,L?T&&nt():(ot(),me.position.set(e.position.x,e.position.y,e.position.z)),requestAnimationFrame(pe),S.render(o,e)}pe();function tt(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)}function nt(){e.lookAt(h/2,m/2,w/2),e.translateX(-(Z-J)*v),e.translateY((ee-te)*v),e.translateZ(-(U-Q)*v);var t=i.getElementById("pos");t.innerText="(x: "+Math.round(e.position.x)+" y: "+Math.round(e.position.y)+" z: "+Math.round(e.position.z)+")";var s=i.getElementById("rot");s.innerText="(y: "+-Math.round(e.rotation.y*7*1.8*2)+")"}function ot(){var t=1080/window.innerHeight*350,s=1150/window.innerWidth*350;const d=1080/1150;t/s>d?a=t:a=s;var u=[new P("portfolio",new l(0-a,m+a+M,w+a),new l(h/2,m/3,w/2)),new P("design",new l(h+a,m+a+M,w+a),new l(h/2,m/3,w/2)),new P("is",new l(h+a,m+a+M,0-a),new l(h/2,m/3,w/2)),new P("perspective",new l(0-a,m+a+M,0-a),new l(h/2,m/3,w/2)),new P("down",new l(0-a,m+a+M-1e3,0-a),new l(h/2,m/3-500,w/2))],E=window.pageYOffset||i.documentElement.scrollTop||i.body.scrollTop,y=E/3500;const Y=u.length-1;var g=Math.round((y+1e-4)*Y);y>1&&(g=4),g>4?(e.fov=He,e.updateProjectionMatrix(),G!=null&&(G.visible=!1)):(e.fov=oe,e.updateProjectionMatrix(),G!=null&&(G.visible=!0));let R=A.x,ut=A.y;const Ie=new l;Ie.copy(e.up).applyMatrix4(e.matrixWorld).normalize();const Ce=new l;var Se=new l(0,0,-1);Se.applyQuaternion(e.quaternion),Ce.crossVectors(Se,Ie).normalize();var xe=u[g].position.distanceTo(u[g].focus);const Te=.01;var ft=u[g].position,Me=new l(u[g].focus.x,u[g].focus.y+ut*xe*Te,u[g].focus.z);Me.add(new l(0,0,Ce.z*R*xe*Te)),rt(e,ft,Me,.05);var mt=i.getElementById("pos");mt.innerText="(x: "+Math.round(e.position.x)+" y: "+Math.round(e.position.y)+" z: "+Math.round(e.position.z)+")";var gt=i.getElementById("rot");gt.innerText="(y: "+-Math.round(e.rotation.y*7*1.8*2)+")";var vt=i.getElementById("con");vt.innerText=g+": "+u[g].sectionName}function rt(t,s,d,u){const E=t.position.clone(),y=new l(0,.1,-t.position.distanceTo(d));t.localToWorld(y);const Y=y.clone();function g(R){t.position.lerpVectors(E,s,R),Y.lerpVectors(y,d,R),t.lookAt(Y)}g(u)}function it(t){t.preventDefault(),A.x=t.clientX/window.innerWidth*2-1,A.y=-(t.clientY/window.innerHeight)*2+1}z.onStart=function(t,s,d){},z.onLoad=function(){i.getElementById("cursor").style.display="block",i.getElementById("content").style.opacity=100,i.getElementById("loader").style.opacity=0},z.onProgress=function(t,s,d){},z.onError=function(t){console.log("There was an error loading "+t)};const at=90,st=67,lt=86,ye=87,he=65,be=83,Ee=68,Le=82,ke=16;var b=!1,T=!1,U=0,Z=0,Q=0,J=0,ee=0,te=0,v=2.5,ne=i.getElementById("devConsole");function ct(){ne.style.display!="block"?(ne.style.display="block",e.position.set(-200,m*1.5,-200),e.fov=He):(ne.style.display="none",e.fov=oe)}L&&(i.getElementById("devConsole").style.display="block",b=!0,o.add(B,D),T=!0),window.onkeydown=function(t){t.keyCode===at&&(L=!L,ct(),L&&(e.lookAt(e.position.x+1,e.position.y,e.position.z),b=!0,o.add(B,D,H),T=!0),L||(b=!1,o.remove(B,D,H)),console.log("Developer Mode: "+L.toString())),t.keyCode===st&&(b=!b,b?o.add(B,D,H):o.remove(B,D,H),console.log("Helper Visuals: "+b.toString())),t.keyCode===lt&&(T=!T,console.log("Flying Controls: "+T.toString())),t.keyCode===ye&&(U=v),t.keyCode===he&&(Z=v),t.keyCode===be&&(Q=v),t.keyCode===Ee&&(J=v),t.keyCode===ke&&(te=v),t.keyCode===Le&&(ee=v)},window.onkeyup=function(t){t.keyCode===ye&&(U=0),t.keyCode===he&&(Z=0),t.keyCode===be&&(Q=0),t.keyCode===Ee&&(J=0),t.keyCode===ke&&(te=0),t.keyCode===Le&&(ee=0)};function dt(){let t=Date.now(),s=0;var d=i.getElementById("fps");requestAnimationFrame(function u(){const E=Date.now();if(s++,E>t+1e3){let y=Math.round(s*1e3/(E-t));t=E,s=0,d.innerText=y}requestAnimationFrame(u)})}dt()}}class F{static updateTheme(){return localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),"dark"):(document.documentElement.classList.remove("dark"),"light")}static switchTheme(){return document.documentElement.classList.contains("dark")?localStorage.theme="light":localStorage.theme="dark",F.updateTheme()}}const Rt="1.0.0";var Vt="Ruben Dekker",ie="dark";localStorage.theme=ie;document.getElementById("theme").onclick=function(){ie=F.switchTheme()};window.onload(F.updateTheme());if(Ge.isWebGLAvailable())Yt.runScene(ie,document);else{const n=Ge.getWebGLErrorMessage();console.log(n.textContent),window.alert(n.textContent),document.getElementById("container").appendChild(n)}const k=document.getElementById("nl"),I=document.getElementById("en"),C=document.getElementById("it");k.onclick=function(){loadTranslation("nl"),X(k)};I.onclick=function(){loadTranslation("en"),X(I)};C.onclick=function(){loadTranslation("it"),X(C)};k.onmouseenter=function(){ae(k)};I.onmouseenter=function(){ae(I)};C.onmouseenter=function(){ae(C)};k.onmouseleave=function(){se(k)};I.onmouseleave=function(){se(I)};C.onmouseleave=function(){se(C)};function ae(n){n.style.fontWeight="bold"}function se(n){n.style.fontStyle="normal",n.style.fontWeight="normal",document.getElementById(document.documentElement.lang)==n&&(n.style.fontWeight="bold")}function X(n){k.style.fontWeight="normal",I.style.fontWeight="normal",C.style.fontWeight="normal",n!="all"&&(n.style.fontWeight="bold")}function zt(){var n=getDefaultLanguage();loadTranslation(n);var r=document.getElementById(n);X(r)}window.onload(zt());function Ft(){function n(o){return o<1e3?o+1900:o}var r=new Date,i=n(r.getYear()),f=document.getElementById("copyright");f.innerText="\xA9 "+i+" "+Vt}window.onload(Ft());function Xt(){var n=document.getElementById("version");n.innerText=Rt}window.onload(Xt());var Nt="#ffffff",Ot="#0000ff";const Kt=100,c=document.getElementById("cursor");let Re=0;var Ve=null,ze=null;const $t=n=>{ze=n.clientY,Ve=n.clientX,c.style.opacity=100,c.children[0].style.opacity=100,c.children[1].style.opacity=100},N=.7;function qt(){Re=window.scrollY;var n=window.pageYOffset||document.documentElement.scrollTop,r=c.children[1].getBoundingClientRect(),i=(r.right-r.left)/2+r.left,f=(r.bottom-r.top)/2+r.top,o=i*N+Ve*(1-N),e=f*N+ze*(1-N)-n;c.style.transform=`translate3d(${o-le*16}px, ${e-le*16+Re}px, 0)`}setInterval(qt,1);window.addEventListener("mousemove",$t);const O=3;let Fe=c.children[1].attributes;const le=c.children[1].attributes.r.value,W=c.children[1].attributes.r.value;document.body.addEventListener("mousemove",n=>{let r=n.composedPath();if(r.some(i=>i.tagName=="BUTTON"||i.tagName=="A"||i.tagName=="IMG"||i.tagName=="VIDEO")){if(r.some(i=>i.id=="waves"||i.id=="ar1"||i.id=="ar2")){c.children[1].attributes.r.value==W*O&&Xe();return}c.children[1].attributes.r.value==W&&jt()}else c.children[1].attributes.r.value==W*O&&Xe()});var ce=null;function Xe(){var n=W*O;clearInterval(ce),ce=setInterval(r,1);function r(){n<=W?clearInterval(ce):(n-=2,c.children[0].attributes.r.value=n,c.children[1].attributes.r.value=n)}}var de=null;function jt(){var n=W;clearInterval(de),de=setInterval(r,1);function r(){n>=le*O?clearInterval(de):(n++,n++,c.children[0].attributes.r.value=n,c.children[1].attributes.r.value=n)}}window.addEventListener("click",function(n){Fe.fill.value=Ot,setTimeout(function(){Fe.fill.value=Nt},Kt)});var _t=1e3,Ne;function Oe(){Ne=window.setTimeout(Ut,_t)}function Ut(){Qt()}const Zt=.05;var ue=null;function Qt(){var n=1;clearInterval(ue),ue=setInterval(r,1);function r(){n<=0?clearInterval(ue):(n=n-Zt,c.style.opacity=n)}}function Jt(){document.addEventListener("mousemove",Ke,!1),document.addEventListener("mousedown",Ke,!1),Oe()}function Ke(){window.clearTimeout(Ne),Oe()}Jt();Pe.set(".arrow:first-of-type",{yPercent:-100});let en=Pe.to(".arrow",{yPercent:"+=100",repeat:-1,repeatDelay:5});en.duration(2);const tn="CV.RubenDekker.";document.getElementById("cv").onclick=function(){window.open("assets/"+tn+document.documentElement.lang.toUpperCase()+".pdf")};const $e=document.getElementById("rd"),qe=document.getElementById("scrollarrow"),K=document.getElementById("menubg");function fe(){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n>3500?$e.style.opacity=0:$e.style.opacity=100,n>3800?qe.style.display="none":qe.style.display="block",window.innerWidth<768&&n>4200?(K.style.background="rgba(10, 10, 10, 0.8)",K.style.mixBlendMode="normal"):K.style.background="none"}window.addEventListener("scroll",fe);window.addEventListener("resize",fe);window.onload(fe());
