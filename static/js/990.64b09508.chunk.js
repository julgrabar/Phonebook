"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[990],{7154:function(n,e,t){t.d(e,{G:function(){return s}});var r,a=t(168),i=t(6031),o=t(5705),s=(0,i.ZP)(o.l0)(r||(r=(0,a.Z)(["\n  margin-top: 32px;\n  border: solid 2px lightgray;\n  border-radius: 15px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n\n  label {\n    text-align: center;\n  }\n\n  button {\n    width: 100px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 15px;\n    background-color: #ffffff;\n    cursor: pointer;\n    margin-top: 15px;\n  }\n"])))},4990:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i=t(5705),o=t(7154),s=t(9434),d=t(6052),f=function(n){return n.contacts.items},l=function(n){return n.isLoading},c=function(n){return n.contacts.filter},u=t(184),m=function(){var n=(0,s.v9)(f),e=(0,s.I0)(),t=function(t){var r=t.name,a=t.number;if(n.map((function(n){return n.name.toLowerCase()})).includes(r.toLowerCase()))alert("".concat(r," is Already in contacts"));else{var i={name:r,number:a};e((0,d.md)(i))}};return(0,u.jsx)(i.J9,{onSubmit:function(n,e){var r=e.resetForm;t(n),r()},initialValues:{name:"",number:""},children:(0,u.jsxs)(o.G,{children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Name"}),(0,u.jsx)(i.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Number"}),(0,u.jsx)(i.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})})},b=function(n){var e=n.id,t=n.name,r=n.number,a=(0,s.I0)();return(0,u.jsxs)("li",{children:[(0,u.jsxs)("span",{children:[t,": ",r]}),(0,u.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return a((0,d.us)(e))},children:(0,u.jsx)("span",{className:"material-icons",children:"delete"})})]})},g=t(168),p=t(6031),x=p.ZP.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n  padding: 0;\n  width: 100%;\n  li {\n    display: flex;\n    align-items: center;\n    border: solid white 1px;\n    padding: 20px;\n    border-radius: 10px;\n  }\n\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  button {\n    background-color: #fff;\n    border-radius: 20px;\n    border: none;\n    background-color: darkred;\n    color: white;\n    cursor: pointer;\n    margin-left: auto;\n  }\n"]))),h=function(n){var e=n.contacts;return(0,u.jsx)(x,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,u.jsx)(b,{id:e,name:t,number:r},e)}))})},k=t(4672),w=function(){var n=(0,s.v9)(c),e=(0,s.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Find contacts by name:"}),(0,u.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,k.xO)(n.currentTarget.value))},className:"filter"})]})},j=t(4819),v=p.ZP.div(a||(a=(0,g.Z)(["\n  margin: ",";\n  font-size: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: -moz-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: -webkit-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n  background: -ms-linear-gradient(\n    left,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  background: linear-gradient(\n    to right,\n    #ffffff 10%,\n    rgba(255, 255, 255, 0) 42%\n  );\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: #ffffff;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  :after {\n    background: #000066;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @-webkit-keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){var e;return null!==(e=n.margin)&&void 0!==e?e:"0 auto"})),y=t(2791),Z=function(){var n=(0,s.v9)(f),e=(0,s.v9)(c),t=(0,s.v9)(l),r=(0,s.I0)();(0,y.useEffect)((function(){r((0,d.Qf)())}),[r]);return(0,u.jsxs)(j.W,{children:[(0,u.jsx)(m,{}),n&&n.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,{}),(0,u.jsx)(h,{contacts:function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}()})]}),t&&(0,u.jsx)(v,{})]})}}}]);
//# sourceMappingURL=990.64b09508.chunk.js.map