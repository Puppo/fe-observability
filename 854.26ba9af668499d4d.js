(self.webpackChunk=self.webpackChunk||[]).push([[854],{8854:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>w});var n=i(3649),a=i(2784),l=i(3557),t=i(6027),r=i(9857),d=i(6062),o=i.n(d),c=i(4036),p=i.n(c),u=i(6793),x=i.n(u),m=i(7892),h=i.n(m),Q=i(1173),j=i.n(Q),Z=i(2464),U=i.n(Z),b=i(2241),v=i.n(b),F={};F.styleTagTransform=U(),F.setAttributes=h(),F.insert=x().bind(null,"head"),F.domAPI=p(),F.insertStyleElement=j();o()(v(),F);v()&&v().locals&&v().locals;var N=i(2322);function V({episode:e}){return(0,N.jsxs)(r.rU,{to:e.link,className:"episode",children:[(0,N.jsx)("div",{className:"icon",children:(0,N.jsx)("span",{className:"icon is-large",children:(0,N.jsx)("i",{className:"far fa-2x fa-play-circle"})})}),(0,N.jsx)("div",{className:"name",children:(0,N.jsx)("span",{children:e.title})}),(0,N.jsx)("div",{className:"duration",children:(0,N.jsx)("span",{children:(0,N.jsx)(t.zt,{time:e.duration})})})]})}function f({title:e,site:s,author:i}){return(0,N.jsx)("footer",{className:"footer",children:(0,N.jsx)("div",{className:"content has-text-centered",children:(0,N.jsxs)("p",{children:[(0,N.jsx)("strong",{children:e})," by"," ",(0,N.jsx)(r.rU,{to:s||"#",target:"_blank",rel:"noreferrer",children:i}),"."]})})})}var g=i(6277);const y="Header_header__evpgc",B="Header_container__r6z8I",G="Header_image__54Kr0";function X({image:e,title:s,description:i}){return(0,N.jsx)("section",{className:(0,g.W)(y,"hero is-medium is-warning is-bold"),children:(0,N.jsx)("div",{className:"hero-body",children:(0,N.jsxs)("div",{className:(0,g.W)("container",B),children:[(0,N.jsx)("div",{className:(0,g.W)("image is-128x128 is-hidden-mobile",G),children:(0,N.jsx)("img",{src:e,alt:s})}),(0,N.jsxs)("div",{children:[(0,N.jsx)("h1",{className:"title",children:s}),(0,N.jsxs)("h2",{className:"subtitle",children:["\u201c",i,"\u201c"]})]})]})})})}function w(){const{showId:e}=(0,l.UO)(),[s,i]=(0,a.useState)(null),[t,r]=(0,a.useState)(void 0),[d,o]=(0,a.useState)([]);return(0,a.useEffect)((()=>{r(void 0);const s=e&&parseInt(e,10)||null;i(s)}),[e]),(0,a.useEffect)((()=>{s&&(r(void 0),n.z.shows.getById(s).then((({response:e})=>{r(e.show)})).catch(console.error))}),[s]),(0,a.useEffect)((()=>{s&&(o([]),n.z.episodes.list(s).then((({response:e})=>{o(e.items)})).catch(console.error))}),[s]),t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(X,{title:t.title,description:t.description,image:t.image_url}),(0,N.jsx)("section",{className:"container episodes",children:(0,N.jsx)("div",{className:"show-episodes",children:d.map((e=>(0,N.jsx)(V,{episode:{episode_id:e.episode_id,title:e.title,duration:e.duration,link:`/shows/${s}/episodes/${e.episode_id}`}},e.episode_id)))})}),(0,N.jsx)(f,{title:t.title,site:t.site_url,author:t.author.fullname})]}):null}},2241:e=>{e.exports=[[e.id,".episode{padding:10px 15px;border-top:1px solid #d9d9d9;display:flex;flex-flow:row nowrap;align-items:center;color:#000}.episode:hover{cursor:pointer}.episode:hover .episode-title{text-decoration:underline}.episode:focus{outline:0;background-color:#ffdd57}.episode .icon{width:40px}.episode .name{margin:0 15px}.episode .duration{margin-left:auto}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwaXNvZGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxjQUFjLENBQUMsOEJBQThCLHlCQUF5QixDQUFDLGVBQWUsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsVUFBVSxDQUFDLGVBQWUsYUFBYSxDQUFDLG1CQUFtQixnQkFBZ0IiLCJmaWxlIjoiRXBpc29kZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVwaXNvZGV7cGFkZGluZzoxMHB4IDE1cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2Q5ZDlkOTtkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyBub3dyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiMwMDB9LmVwaXNvZGU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmVwaXNvZGU6aG92ZXIgLmVwaXNvZGUtdGl0bGV7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uZXBpc29kZTpmb2N1c3tvdXRsaW5lOjA7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fS5lcGlzb2RlIC5pY29ue3dpZHRoOjQwcHh9LmVwaXNvZGUgLm5hbWV7bWFyZ2luOjAgMTVweH0uZXBpc29kZSAuZHVyYXRpb257bWFyZ2luLWxlZnQ6YXV0b30iXX0= */","",""]]}}]);