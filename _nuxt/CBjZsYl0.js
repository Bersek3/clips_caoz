import Q from"./Bknt40yl.js";import{E as j,_ as P,t as w,v as T,x as t,r as L,F as N,G as I,H as V,o as O,I as F,l as H,J as W,c as $,K as D,L as G,M,d as z,N as h,O as J,P as q,Q as K,R as x,S as X,T as Y,z as b,A as Z,U as tt,B as u,V as et,y as _,W as st}from"./j-HrveEB.js";import{u as B}from"./BWw34zTx.js";import"./BQkc-AXV.js";function ot(i,e){const{title:o,titleTemplate:s,...n}=i;return B({title:o,titleTemplate:s,_flatMeta:n},{...e,transform(l){const a=j({...l._flatMeta});return delete l._flatMeta,{...l,meta:a}}})}const at={},it={class:"d-flex justify-content-center align-items-center"},lt=t("div",{class:"spinner-border spinner-lg",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),nt=t("span",{class:"ms-2"},"Processing...",-1),ct=[lt,nt];function dt(i,e){return w(),T("div",it,ct)}const rt=P(at,[["render",dt]]);function ut(i,e){let o,s,n;const l=L(!0),a=()=>{l.value=!0,n()};N(i,a,{flush:"sync"});const d=typeof e=="function"?e:e.get,c=typeof e=="function"?void 0:e.set,p=I((y,k)=>(s=y,n=k,{get(){return l.value&&(o=d(),l.value=!1),s(),o},set(v){c==null||c(v)}}));return Object.isExtensible(p)&&(p.trigger=a),p}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function pt(i){const e=F(),o=ut(()=>null,()=>e.proxy.$el);return V(o.trigger),O(o.trigger),o}function ht(i){const e=H().public.googleAdsense,o=W(i,e),s=o.adClient??o.id,n=o.test?"on":null,l=Math.random(),a=pt(),d=L(""),c=L(!1),p=$(()=>c.value?`page-${Math.random()}`:null),y=$(()=>{var m;return((m=a.value)==null?void 0:m.getAttribute("data-ad-status"))==="unfilled"}),k=E("path"),v=E("query"),A=$(()=>c.value?null:"");async function U(){c.value=!1,await M(),C()}async function C(){var m;if(c.value=!0,await M(),!((m=a.value)!=null&&m.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(S){console.error(S)}}return N([k,v],(m,S)=>{const g=mt(m,S,o.includeQuery);a.value&&!a.value.isConnected||g&&U()}),D(()=>{!a.value||!a.value.isConnected||(c.value?a.value.innerHTML="":a.value.innerHTML=" ")}),o.hideUnfilled&&D(()=>y.value&&(d.value="hide-unfilled")),O(()=>C()),{adClass:d,dataAdClient:s,dataAdRegion:p,dataAdTest:n,dataAnalyticsDomainName:o.analyticsDomainName,dataAnalyticsUacct:o.analyticsUacct,isUnfilled:y,key:l,status:A,updateAd:U,showAd:C}}function E(i){const e=G();return $(()=>e[i])}function mt(i,e,o){const[s,n]=i,[l,a]=e;if(s!==l)return!0;if(!o)return;const d=Object.keys(n),c=Object.keys(a);return d.length!==c.length||d.some(p=>n[p]!==a[p])}const gt=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],ft=z({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(i,{expose:e}){const{adClient:o,analyticsDomainName:s,analyticsUacct:n,hideUnfilled:l,includeQuery:a}=i,{adClass:d,dataAdClient:c,dataAdRegion:p,dataAdTest:y,dataAnalyticsDomainName:k,dataAnalyticsUacct:v,isUnfilled:A,key:U,status:C,updateAd:m,showAd:S}=ht({adClient:o,analyticsDomainName:s,analyticsUacct:n,hideUnfilled:l,includeQuery:a});return e({isUnfilled:A,updateAd:m,showAd:S}),(g,ge)=>(w(),T("ins",{ref:"ad",key:h(U),class:J(["adsbygoogle",h(d)]),style:q(g.adStyle),"data-ad-client":h(c),"data-ad-slot":g.adSlot,"data-ad-format":g.adFormat,"data-ad-region":h(p),"data-ad-layout":g.adLayout,"data-ad-layout-key":g.adLayoutKey,"data-page-url":g.pageUrl,"data-analytics-uacct":h(v),"data-analytics-domain-name":h(k),"data-adtest":h(y),"data-adsbygoogle-status":h(C),"data-ad-full-width-responsive":g.adFullWidthResponsive},null,14,gt))}}),_t=P(ft,[["__scopeId","data-v-aaa40183"]]),R={kickApiBase:"https://kick.com/api/v2",kickClipsTmp:"https://clips.kick.com/tmp",worker:"https://dev.ahmedrangel.com",trigger:"https://kick-trigger.ahmedrangel.com"},r={name:"KickClips",host:"https://kickclips.ahmedrangel.com",description:"KickClips is a free online tool for downloading MP4 clips from kick.com.",title:"KickClips | Downloader | to MP4",keywords:"kick, kick.com, kick clip, downloader, to mp4, mp4, download, clips, clipper, video"},f={og:{type:"website",site_name:r.name,title:r.title,description:r.description,url:r.host,image:`${r.host}/images/og-card.png`},twitter:{card:"summary",title:r.title,description:r.description}},yt=i=>{const e=Math.floor(i/60).toString().padStart(2,"0"),o=(i%60).toString().padStart(2,"0");return e+":"+o},bt=i=>{const e=new Date(i),o=e.toISOString().split("T")[0],s=e.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit",hour12:!0});return`${o}, ${s}`},wt=K("/images/kickclips-logo.svg"),kt=K("/images/example.png"),vt={class:"text-white"},Ct={class:"text-center container"},St={class:"my-5"},Tt=t("img",{class:"logo mb-4",src:wt},null,-1),Ut=t("h3",{class:"mb-4"},"Kick Clips Downloader",-1),Rt=t("h5",{class:"mb-4 fw-light mb-4"},"This is a free online tool for downloading MP4 clips from kick.com.",-1),$t={class:"row downloader-body justify-content-center mx-1 mb-5"},At=t("h2",{class:"col-12 fw-normal title mb-4"},"Enter clip URL",-1),Lt={class:"col-12 row input-body p-2 mb-4 mx-0"},Dt=["disabled"],Mt=t("span",{class:"ms-1 download-txt"},"Download",-1),Et={key:1,class:"error"},Pt={key:2,id:"clip",class:"p-0"},Nt={class:"row"},Ot={class:"col-12 col-sm-4 info text-start mb-4"},Kt={class:"channel_profile"},Bt=["src"],Qt=["href"],jt={class:"mb-3 user"},It={class:"mb-3"},Vt={class:"fw-light"},Ft={class:"fw-light"},Ht={class:"fw-light"},Wt=["href"],Gt={class:"fw-light"},zt={class:"col-12 col-sm-8 video mb-4"},Jt={class:"img-fluid",width:"1280",height:"720",controls:"",autoplay:"",muted:""},qt=["src"],xt={class:"save"},Xt=["href","download"],Yt={class:"guide-body mx-1"},Zt=t("h3",{class:"mb-4"},"How to download a Kick clip?",-1),te={class:"row g-4"},ee={class:"col-12 col-lg-4"},se={class:"guide p-4"},oe=t("h5",null,"Step 1: Get clip URL",-1),ae=t("h5",{class:"fw-light mb-3"},"On the Kick.com website, search for the clip you wish to download, press the share button, and then copy the clip's URL.",-1),ie=t("img",{class:"img-fluid",src:kt},null,-1),le={class:"col-12 col-lg-4"},ne={class:"guide p-4"},ce=t("h5",null,"Step 2: Paste clip URL",-1),de=t("h5",{class:"fw-light"},[u("Simply paste the URL into the designated text box on Kickclips, and proceed by clicking the "),t("b",null,'"Download"'),u(" button.")],-1),re={class:"col-12 col-lg-4"},ue={class:"guide p-4"},pe=t("h5",null,"Step 3: Download MP4 clip",-1),he=t("h5",{class:"fw-light"},[u("After obtaining the video, you can easily download it by simply "),t("b",null,"right-clicking"),u(" on the displayed video and selecting "),t("b",null,'"Save video as"'),u(" or, click on the "),t("b",null,'"Save File"'),u(" button to initiate the direct download.")],-1),me={data(){return{url:"",clip:{},loading:!1,error:!1}},methods:{async getClip(){if(this.error=!1,!(this.url.includes("kick.com/")&&this.url.includes("?clip="))){this.error={message:"Error: The URL you entered is invalid"};return}this.clip.blob&&URL.revokeObjectURL(this.clip.blob);const e=new URL(this.url).searchParams.get("clip");this.loading=!0;const o=await $fetch(`${R.kickApiBase}/clips/${e}`).catch(()=>{this.loading=!1,this.error={message:"Error: Clip not found - Make sure you entered the correct URL"}}),s=JSON.parse(o);s.clip.clip_url.includes(".mp4")||await $fetch(`${R.trigger}/api/kick/clip/${e}`).catch(()=>null);const n=s.clip.clip_url.includes(".mp4")?s.clip.clip_url:`${R.kickClipsTmp}/${e}.mp4`,l=await $fetch(n,{responseType:"blob"}).catch(async()=>{const{url:d}=await $fetch(`${R.worker}/kick/clip/${e}`,{parseResponse:JSON.parse}).catch(()=>({}));return d?await $fetch(d,{responseType:"blob"}).catch(()=>({})):void 0});if(!l){this.loading=!1,this.error={message:"Error: The clip processing time was extended - Please try again"};return}const a=URL.createObjectURL(l);console.info(a),this.loading=!1,this.clip={filename:s.clip.title+".mp4",channel:s.clip.channel.username,slug:s.clip.channel.slug,channelPicture:s.clip.channel.profile_picture??"/images/user-default-pic.png",title:s.clip.title,views:s.clip.view_count,likes:s.clip.likes_count,blob:a,creator:s.clip.creator.username,creatorSlug:s.clip.creator.slug,date:s.clip.created_at,duration:s.clip.duration}}}},we=Object.assign(me,{__name:"index",setup(i){return ot({title:r.name,description:r.description,keywords:r.keywords,ogType:f.og.type,ogTitle:f.og.title,ogSiteName:f.og.site_name,ogDescription:f.og.description,ogUrl:f.og.url,ogImage:f.og.image,twitterCard:f.twitter.card,twitterTitle:f.twitter.title,twitterDescription:f.twitter.description}),B({link:[{rel:"canonical",href:r.host}]}),(e,o)=>{const s=Q,n=rt,l=_t;return w(),T("main",vt,[t("div",Ct,[t("div",St,[Tt,Ut,Rt,t("div",$t,[t("form",{onSubmit:o[1]||(o[1]=x(a=>e.getClip(),["prevent"]))},[At,t("div",Lt,[X(t("input",{id:"input","onUpdate:modelValue":o[0]||(o[0]=a=>e.url=a),class:"col-9 col-lg-10 col-sm-8",type:"url",placeholder:"https://kick.com/user?clip=clip_01A2BCD3EF4GHI5JKMNLOP67QR",required:""},null,512),[[Y,e.url]]),t("button",{id:"download",type:"submit",class:"col-3 col-lg-2 col-sm-4 btn fw-bold d-flex align-items-center justify-content-center",disabled:!!e.loading},[b(s,{class:"iconify",name:"ph:download-simple-bold"}),Mt],8,Dt)])],32),b(tt,{name:"tab",mode:"out-in"},{default:Z(()=>[e.loading?(w(),et(n,{key:0})):e.error?(w(),T("h5",Et,_(e.error.message),1)):e.clip.channel?(w(),T("div",Pt,[t("div",Nt,[t("div",Ot,[t("div",Kt,[t("img",{class:"mb-1 img-fluid",src:e.clip.channelPicture},null,8,Bt),t("a",{href:`https://kick.com/${e.clip.slug}`,class:"text-decoration-underline",target:"_blank"},[t("h3",jt,_(e.clip.channel),1)],8,Qt),t("h5",It,_(e.clip.title),1),t("p",null,[u("Likes:  "),t("span",Vt,_(e.clip.likes),1)]),t("p",null,[u("Views:  "),t("span",Ft,_(e.clip.views),1)]),t("p",null,[u("Duration:  "),t("span",Ht,_(("formatTime"in e?e.formatTime:h(yt))(e.clip.duration)),1)]),t("p",null,[u("Clipped by: "),t("a",{href:`https://kick.com/${e.clip.creatorSlug}`,class:"text-decoration-underline user",target:"_blank"},_(e.clip.creator),9,Wt)]),t("p",null,[u("Date:  "),t("span",Gt,_(("getDate"in e?e.getDate:h(bt))(e.clip.date)),1)])])]),t("div",zt,[t("video",Jt,[t("source",{src:e.clip.blob,type:"video/mp4"},null,8,qt)])]),t("div",xt,[t("a",{class:"col-12 btn fw-bold mb-0",href:e.clip.blob,target:"_blank",download:e.clip.filename},"Save file",8,Xt)])])])):st("",!0)]),_:1})]),b(l,{class:"mb-5","ad-format":"horizontal","ad-full-width-responsive":!0,"ad-slot":"8426669130"}),t("div",Yt,[Zt,t("div",te,[t("div",ee,[t("div",se,[t("h1",null,[b(s,{class:"iconify",name:"ph:film-slate-duotone"})]),oe,ae,ie])]),t("div",le,[t("div",ne,[t("h1",null,[b(s,{class:"iconify",name:"uiw:copy"})]),ce,de])]),t("div",re,[t("div",ue,[t("h1",null,[b(s,{class:"iconify",name:"ph:download-simple-duotone"})]),pe,he])])])])])])])}}});export{we as default};
