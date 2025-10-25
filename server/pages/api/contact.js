"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},4718:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},6837:(e,r,t)=>{t.r(r),t.d(r,{config:()=>d,default:()=>f,routeModule:()=>m});var s={};t.r(s),t.d(s,{default:()=>p});var o=t(9762),n=t(6059),a=t(4718);let i=require("nodemailer");var l=t.n(i);let u=new Map;async function p(e,r){if("POST"!==e.method)return r.status(405).json({error:"Method not allowed"});if(!function(e){let r=`rate-limit:${e}`,t=Date.now(),s=t-6e4;u.has(r)||u.set(r,[]);let o=u.get(r).filter(e=>e>s);return!(o.length>=5)&&(o.push(t),u.set(r,o),!0)}(e.headers["x-forwarded-for"]&&e.headers["x-forwarded-for"].split(",")[0]||e.headers["x-real-ip"]||e.socket.remoteAddress||"0.0.0.0"))return r.status(429).json({error:"Too many requests. Please try again later."});let{name:t,email:s,message:o}=e.body;if(!t||!s||!o)return r.status(400).json({error:"Missing required fields"});if("string"!=typeof t||0===t.trim().length)return r.status(400).json({error:"Invalid name"});if("string"!=typeof s||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return r.status(400).json({error:"Invalid email"});if("string"!=typeof o||0===o.trim().length)return r.status(400).json({error:"Invalid message"});if(o.length>5e3)return r.status(400).json({error:"Message is too long"});let n=process.env.SMTP_USER||"noreply@example.com",a=process.env.SMTP_PASS||"password",i=process.env.SMTP_HOST||"smtp.gmail.com",p=parseInt(process.env.SMTP_PORT||"587"),f=process.env.RECIPIENT_EMAIL||"ayindesemiu@yahoo.com";try{let e=l().createTransport({host:i,port:p,secure:465===p,auth:{user:n,pass:a}});return await e.sendMail({from:n,to:f,replyTo:s,subject:`New Portfolio Contact from ${t}`,html:`
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${t}</p>
        <p><strong>Email:</strong> ${s}</p>
        <p><strong>Message:</strong></p>
        <p>${o.replace(/\n/g,"<br>")}</p>
        <hr>
        <p><small>This message was sent from your portfolio website contact form.</small></p>
      `,text:`
New Message from Portfolio Contact Form

Name: ${t}
Email: ${s}

Message:
${o}
      `}),r.status(200).json({success:!0,message:"Email sent successfully"})}catch(e){return console.error("Email error:",e),r.status(500).json({error:"Failed to send email. Please try again later."})}}let f=(0,a.l)(s,"default"),d=(0,a.l)(s,"config"),m=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:s})},6059:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},9762:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=6837);module.exports=t})();