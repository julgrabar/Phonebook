"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{7787:function(n,e,t){t.d(e,{G:function(){return d},P:function(){return l}});var r,a,i=t(168),o=t(6031),s=t(5705),d=(0,o.ZP)(s.l0)(r||(r=(0,i.Z)(["\n  margin-top: 32px;\n  border: solid 2px lightgray;\n  border-radius: 15px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n\n  label {\n    text-align: center;\n  }\n\n  button {\n    width: 100px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 15px;\n    background-color: #ffffff;\n    cursor: pointer;\n    margin-top: 15px;\n  }\n"]))),l=(0,o.ZP)(s.l0)(a||(a=(0,i.Z)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  input {\n    width: 100%;\n  }\n\n  .submit-btn {\n    width: 100px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 15px;\n    background-color: #ffffff;\n    cursor: pointer;\n    margin-top: 15px;\n    color: black;\n    margin: 15px auto 0 auto;\n  }\n  .close-btn {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    padding: 0;\n  }\n"])))},3508:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i=t(5705),o=t(7787),s=t(9434),d=t(5501),l=function(n){return n.contacts.items},c=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.filter},f=t(2791),m=t(184),b=function(){var n=(0,s.v9)(l),e=(0,s.I0)(),t=function(t){var r=t.name,a=t.number;if(n.map((function(n){return n.name.toLowerCase()})).includes(r.toLowerCase()))alert("".concat(r," is Already in contacts"));else{var i={name:r,number:a};e((0,d.md)(i))}};return(0,m.jsx)(i.J9,{onSubmit:function(n,e){var r=e.resetForm;t(n),r()},initialValues:{name:"",number:""},children:(0,m.jsxs)(o.G,{children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Name"}),(0,m.jsx)(i.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Number"}),(0,m.jsx)(i.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})})},p=t(5770),x=function(){var n=(0,s.v9)(u),e=(0,s.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:"Find contacts by name:"}),(0,m.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,p.xO)(n.currentTarget.value))},className:"filter"})]})},g=t(2359),h=t(168),j=t(6031),k=j.ZP.div(r||(r=(0,h.Z)(["\n  margin: ",";\n  font-size: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: -moz-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: -webkit-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n  background: -ms-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: linear-gradient(\n    to right,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: #ffffff;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  :after {\n    background: #000066;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @-webkit-keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){var e;return null!==(e=n.margin)&&void 0!==e?e:"0 auto"})),w=t(885),v=function(n){var e=n.id,t=n.name,r=n.number,a=n.setEdit,l=(0,s.I0)(),c={name:t,number:r};return(0,m.jsx)(i.J9,{onSubmit:function(n){var t=n.name,r=n.number,i={id:e,name:t,number:r};l((0,d.Lb)(i)),a(!1)},initialValues:c,children:(0,m.jsxs)(o.P,{children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Name"}),(0,m.jsx)(i.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Number"}),(0,m.jsx)(i.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",className:"submit-btn",children:"Edit contact"}),(0,m.jsx)("button",{type:"button",className:"close-btn",onClick:function(){return a(!1)},children:"X"})]})})},y=function(n){var e=n.id,t=n.name,r=n.number,a=(0,f.useState)(!1),i=(0,w.Z)(a,2),o=i[0],l=i[1],c=(0,s.I0)();return(0,m.jsx)("li",{children:o?(0,m.jsx)(v,{id:e,name:t,number:r,setEdit:l}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{children:[t,": ",r]}),(0,m.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return l(!0)},children:(0,m.jsx)("span",{className:"material-icons",children:"edit"})}),(0,m.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return c((0,d.us)(e))},children:(0,m.jsx)("span",{className:"material-icons",children:"delete"})})]})})},Z=j.ZP.ul(a||(a=(0,h.Z)(["\n  list-style: none;\n  padding: 0;\n  width: 100%;\n  li {\n    display: flex;\n    align-items: center;\n    border: solid white 1px;\n    padding: 20px;\n    border-radius: 10px;\n  }\n\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  button {\n    background-color: #fff;\n    border-radius: 20px;\n    border: none;\n    background-color: transparent;\n    color: white;\n    cursor: pointer;\n  }\n\n  .edit-btn {\n    margin-left: auto;\n  }\n"]))),N=function(n){var e=n.contacts;return(0,m.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,m.jsx)(y,{id:e,name:t,number:r},e)}))})},C=function(){var n=(0,s.v9)(l),e=(0,s.v9)(u),t=(0,s.v9)(c),r=(0,s.I0)();(0,f.useEffect)((function(){r((0,d.Qf)())}),[r]);return(0,m.jsxs)(g.W,{children:[(0,m.jsx)(b,{}),n&&n.length>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(N,{contacts:function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}()})]}),t&&(0,m.jsx)(k,{})]})}}}]);
//# sourceMappingURL=508.1187c58d.chunk.js.map