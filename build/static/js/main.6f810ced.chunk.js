(this.webpackJsonpassign=this.webpackJsonpassign||[]).push([[0],{171:function(e,t,n){},175:function(e,t){},177:function(e,t){},191:function(e,t){},193:function(e,t){},221:function(e,t){},223:function(e,t){},224:function(e,t){},229:function(e,t){},231:function(e,t){},237:function(e,t){},239:function(e,t){},258:function(e,t){},270:function(e,t){},273:function(e,t){},314:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(162),r=n.n(s),i=(n(171),n(51),n(7)),o=n(6),u=n(13),l=n(163),j=n(89),b=new(function(){function e(){Object(o.a)(this,e),this.tokenKey="auth_token"}return Object(u.a)(e,[{key:"getToken",value:function(){return localStorage.getItem(this.tokenKey)}},{key:"decode",value:function(e){return l.decode(JSON.parse(e))}},{key:"saveToken",value:function(e){console.log(e),localStorage.setItem(this.tokenKey,JSON.stringify(e.token))}},{key:"invalidateUser",value:function(){localStorage.removeItem(this.tokenKey)}},{key:"getExpiration",value:function(e){var t=this.decode(e).exp;return j.unix(t)}},{key:"isValid",value:function(e){return j().isBefore(this.getExpiration(e))}},{key:"isAuthenticated",value:function(){var e=this.getToken();return!(!e||!this.isValid(e))}}]),e}()),d=n(18),f=n(41),h=n.n(f),O=n(1),m=Object(a.createContext)(),p=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1],j={checkAuthState:function(e){b.isAuthenticated()&&s(!0)},signOut:function(){b.invalidateUser(),s(!1),l("")},signIn:function(e){return(t=e,h.a.post("/api/v1/users/login",Object(d.a)({},t)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))).then((function(e){return b.saveToken(e),s(!0),e})).catch((function(e){return l("Email or Password is Incorrect !")}));var t},isAuth:c,error:u,isAuthenticated:function(){return b.isAuthenticated()}};return Object(O.jsx)(m.Provider,{value:j,children:e.children})},g=n(23),x=n(11),v=function(){var e=Object(a.useContext)(m),t=e.isAuth,n=e.error,c=e.signIn,s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),b=j[0],d=j[1];return t?Object(O.jsx)(x.a,{to:{pathname:"/dashboard"}}):Object(O.jsx)("section",{className:"login_section",children:Object(O.jsxs)("form",{className:"login_section_form",onSubmit:function(e){e.preventDefault(),c({email:o,password:b})},children:[Object(O.jsx)("h2",{className:"login_section_form_title",children:"Welcome To Intern"}),Object(O.jsx)("input",{type:"text",placeholder:"Email",className:"login_section_form_input",onChange:function(e){return u(e.target.value)},required:!0}),Object(O.jsx)("input",{type:"password",placeholder:"Password",className:"login_section_form_input",onChange:function(e){return d(e.target.value)},required:!0}),Object(O.jsx)("input",{className:"login_section_form_submit",value:"Login",type:"submit"}),n?Object(O.jsx)("div",{className:"login_section_form_error",children:n}):Object(O.jsx)("div",{})]})})},_=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),b=j[0],f=j[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),g=p[0],v=p[1],_=Object(a.useState)(""),y=Object(i.a)(_,2),k=y[0],N=y[1],S=Object(a.useState)(!1),C=Object(i.a)(S,2),I=C[0],w=C[1],A={name:n,email:o,password:b,passwordConfirm:g};return I?Object(O.jsx)(x.a,{to:{pathname:"/login"}}):Object(O.jsxs)("section",{className:"register_section",children:[Object(O.jsxs)("form",{className:"register_section_form",onSubmit:function(e){var t;e.preventDefault(),(t=A,h.a.post("/api/v1/users/signup",Object(d.a)({},t)).then((function(e){return e.data}),(function(e){return Promise.reject(e.response.data.errors)}))).then((function(e){return w(!0)}),(function(e){return N(e)}))},children:[Object(O.jsx)("h2",{className:"login_section_form_title",children:"Start Your Journey"}),Object(O.jsx)("input",{type:"text",placeholder:"Name",className:"register_section_form_input",onChange:function(e){return c(e.target.value)},required:!0}),Object(O.jsx)("input",{type:"email",placeholder:"Email",className:"register_section_form_input",onChange:function(e){return u(e.target.value)},required:!0}),Object(O.jsx)("input",{type:"password",placeholder:"Password",className:"register_section_form_input",onChange:function(e){return f(e.target.value)},required:!0}),Object(O.jsx)("input",{type:"password",placeholder:"Confirm Password",className:"register_section_form_input",onChange:function(e){return v(e.target.value)},required:!0}),Object(O.jsx)("input",{className:"register_section_form_submit ",value:"Sign Up",type:"submit"})]}),k?"error yes":""]})},y=function(){var e=Object(a.useContext)(m),t=e.isAuth,n=e.signOut;return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(g.b,{to:"/",className:"logo",children:"Intern"}),Object(O.jsx)("nav",{className:"navlinks",children:t?Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)(g.b,{className:"navlink",to:"/",onClick:n,children:"logout"})}):Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)(g.b,{className:"navlink",to:"/register",children:"Signup"})})})]})},k=new(function(){function e(){Object(o.a)(this,e),this.axiosInstance={},this.initInstance()}return Object(u.a)(e,[{key:"initInstance",value:function(){return this.axiosInstance=h.a.create({baseURL:"/",timeout:4e3}),this.axiosInstance.interceptors.request.use((function(e){var t=b.getToken();return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),this.axiosInstance}},{key:"getInstance",value:function(){return this.axiosInstance||this.initInstance()}}]),e}()),N=n(5),S=n.n(N),C=n(15),I=(n(88),n(166)),w=n(48),A=Object(I.a)({apiKey:"AIzaSyCPcL3DmxrQxGsVvTeABfdD8ExghVuKXi4",authDomain:"intern-b5c3a.firebaseapp.com",projectId:"intern-b5c3a",storageBucket:"intern-b5c3a.appspot.com",messagingSenderId:"100729861313",appId:"1:100729861313:web:f561620ba50e6c60895040"}),E=Object(w.b)(A),F=k.getInstance(),T=function(e,t){var n=Object(a.useState)(0),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],j=u[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),f=d[0],h=d[1];function O(){return O=Object(C.a)(S.a.mark((function e(t,n){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:n,link:t},console.log(a),e.next=4,F.put("/api/v1/files/update",a);case 4:return c=e.sent,e.next=7,c.data;case 7:console.log("response: ",c.data);case 8:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function m(){return m=Object(C.a)(S.a.mark((function e(t,n){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:n,link:t},console.log(a),e.next=4,F.post("/api/v1/files/upload",a);case 4:return c=e.sent,e.next=7,c.data;case 7:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}return console.log("in ss:",e),Object(a.useEffect)((function(){var t=Object(w.c)(E,e.data.name),n=e.data.name,a=Object(w.d)(t,e.data);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){j(e)}),(function(){Object(w.a)(a.snapshot.ref).then((function(t){h(f),"file"===e.btn?function(e,t){m.apply(this,arguments)}(t,n):function(e,t){O.apply(this,arguments)}(t,e.btn)}))}))}),[e]),{progress:s,error:l,url:f}},P=function(e){var t=e.file,n=e.setFile,c=T(t),s=c.url,r=c.progress;return Object(a.useEffect)((function(){s&&n(null)}),[s,n]),console.log(s,r),Object(O.jsxs)("div",{className:"progress",style:{width:r+"%"},children:[" ",r," % "]})},B=k.getInstance(),q=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),b=j[0],d=j[1];Object(a.useEffect)((function(){B.get("/api/v1/users").then((function(e){return u(e.data)}))}),[]);return Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsxs)("form",{className:"dashboard_form",children:[Object(O.jsx)("label",{htmlFor:"file",children:"Add File "}),Object(O.jsx)("input",{type:"file",id:"file",className:"dashboard_form_input",name:"file",onChange:function(e){return c({data:e.target.files[0],btn:e.target.name})}})]}),n&&Object(O.jsx)(P,{file:n,setFile:c}),Object(O.jsx)("h3",{className:"dashboard_files",children:" Files "}),b&&Object(O.jsx)("h3",{className:"msg",children:b}),Object(O.jsx)("section",{className:"dashboard_files_section",children:o&&o.files?o.files.map((function(e,t){return Object(O.jsxs)("div",{className:"file",children:[Object(O.jsx)("img",{src:e.link}),Object(O.jsxs)("h5",{className:"title",children:[" ",e.name]}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsx)("label",{htmlFor:"update",className:"update",children:"Update "}),Object(O.jsx)("input",{type:"file",id:"update",name:e.name,onChange:function(e){return c({data:e.target.files[0],btn:e.target.name})}}),Object(O.jsx)("button",{className:"share",name:e.link,onClick:function(e){return function(e){var t=e.target.name;console.log(e.target.name);var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),d("Copy to Clipboard Sucessfully! Share the link")}(e)},children:" Share "}),Object(O.jsx)("button",{className:"delete",name:e._id,onClick:function(e){return function(e){var t=e.target.name;B.delete("/api/v1/files/".concat(t)).then((function(e){return d(e.data.msg)}))}(e)},children:" Delete "})]})]},e.name)})):Object(O.jsx)("h3",{children:" You have no files. Click to Add File Button"})})]})},D=n(60),K=["children"];function J(e){var t=e.children,n=Object(D.a)(e,K),a=c.a.Children.only(t);return Object(O.jsx)(x.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return b.isAuthenticated()?c.a.cloneElement(a,Object(d.a)(Object(d.a)({},n),e)):Object(O.jsx)(x.a,{to:{pathname:"/"}})}}))}var L=["component"];function U(e){var t=e.component,n=Object(D.a)(e,L);return Object(O.jsx)(x.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return b.isAuthenticated()?Object(O.jsx)(x.a,{to:{pathname:"/dashboard"}}):Object(O.jsx)(t,Object(d.a)(Object(d.a)({},e),n))}}))}var V=function(){var e=Object(a.useContext)(m);return Object(a.useEffect)((function(){e.checkAuthState()}),[e]),Object(O.jsx)("div",{className:"mainApp",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{exact:!0,path:"/",children:e.isAuth?Object(O.jsx)(x.a,{to:"/dashboard"}):Object(O.jsx)(x.a,{to:"/login"})}),Object(O.jsx)(x.b,{exact:!0,path:"/login",component:v}),Object(O.jsx)(U,{exact:!0,path:"/register",component:_}),Object(O.jsx)(J,{exact:!0,path:"/dashboard",children:Object(O.jsx)(q,{})})]})]})})};var z=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{children:Object(O.jsx)(V,{})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,315)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),Y()},51:function(e,t,n){}},[[314,1,2]]]);
//# sourceMappingURL=main.6f810ced.chunk.js.map