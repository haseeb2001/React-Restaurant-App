(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,t,a){},150:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(100),a(101),a(102),a(103),a(17)),c=a(18),m=a(19),i=a(20),u=a(6),d=a(22),E=a(10),h=a(23),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(E.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(E.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(E.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(E.a)({},e,{comments:e.comments.concat(a)});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(E.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(E.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},N=a(92),v=a.n(N),y=a(93),w=a.n(y),O=a(8),M={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},k=(a(150),a(2)),L=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary aria-hidden=true"}),r.a.createElement("p",null,"Loading . . ."))},S="http://localhost:3001/";function C(e){var t=e.dish;e.onClick;return r.a.createElement(k.d,null,r.a.createElement(u.b,{to:"/menu/".concat(t.id)},r.a.createElement(k.g,{width:"100%",src:S+t.image,alt:t.name}),r.a.createElement(k.h,null,r.a.createElement(k.k,null,t.name))))}var j=function(e){var t=e.dishes.dishes.map((function(t){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:t.id},r.a.createElement(C,{dish:t,onClick:e.onClick}))}));return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(L,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(k.a,null,r.a.createElement(k.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(k.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},x=a(16),D=a(24),F=function(e){return e&&e.length},A=function(e){return function(t){return!t||t.length<=e}},I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleComment=n.handleComment.bind(Object(x.a)(n)),n.state={isModalOpen:!1},n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleComment",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(k.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(k.u,null,r.a.createElement(O.LocalForm,{onSubmit:function(e){return t.handleComment(e)}},r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"rating",md:6},"Rating"),r.a.createElement(k.l,{md:{size:10}},r.a.createElement(O.Control.select,{type:"select",name:"rating",model:".rating",className:"form-control",defaultValue:1},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6")))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"author",md:6},"Your Name"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.text,{type:"text",model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:F,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:A(15)}}),r.a.createElement(O.Errors,{className:"text-danger",show:"touched",model:".author",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"comment",md:4},"Comment"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.textarea,{type:"textarea",id:"comment",name:"comment",rows:"6",model:".comment",className:"form-control"}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.l,{md:{size:10}},r.a.createElement(k.c,{type:"submit",color:"primary"},"Submit")))))))}}]),a}(n.Component);function T(e){var t=e.dish;return null!=t?r.a.createElement(D.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(k.d,null,r.a.createElement(k.g,{top:!0,src:S+t.image,alt:t.name}),r.a.createElement(k.e,null,r.a.createElement(k.k,null," ",t.name),r.a.createElement(k.j,null,t.description," ")))):r.a.createElement("div",null)}function R(e){var t=e.comments,a=e.postComment,n=e.dishId,l=t.map((function(e){return r.a.createElement(D.Stagger,{in:!0,key:e.id},r.a.createElement(D.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment," "),r.a.createElement("p",null,"--",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},l,r.a.createElement(I,{dishId:n,postComment:a})))}var _=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(L,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(k.a,null,r.a.createElement(k.b,null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement(k.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(T,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(R,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):void 0};function q(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(L,null):n?r.a.createElement("h4",null,n):r.a.createElement(D.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(k.d,null,r.a.createElement(k.g,{src:S+t.image,alt:t.name}),r.a.createElement(k.e,null,r.a.createElement(k.k,null,t.name),t.designation?r.a.createElement(k.i,null,t.designation):null,r.a.createElement(k.j,null,t.description))))}var B=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},P=function(){return{type:"DISHES_LOADING"}},H=function(e){return{type:"DISHES_FAILED",payload:e}},G=function(e){return{type:"ADD_DISHES",payload:e}},W=function(){return{type:"LEADERS_LOADING"}},U=function(e){return{type:"LEADERS_FAILED",payload:e}},Y=function(e){return{type:"ADD_LEADERS",payload:e}},z=function(){return{type:"PROMOS_LOADING"}},K=function(e){return{type:"PROMOS_FAILED",payload:e}},J=function(e){return{type:"ADD_PROMOS",payload:e}},Z=function(e){return{type:"COMMENTS_FAILED",payload:e}},$=function(e){return{type:"ADD_COMMENTS",payload:e}},V=function(e){return e&&e.length},Q=function(e){return function(t){return!t||t.length<=e}},X=function(e){return function(t){return t&&t.length>=e}},ee=function(e){return!isNaN(Number(e))},te=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(k.a,null,r.a.createElement(k.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(k.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(O.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.text,{type:"text",model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:V,minLength:X(3),maxLength:Q(15)}}),r.a.createElement(O.Errors,{className:"text-danger",show:"touched",model:".firstname",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"lastname",md:2},"First Name"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.text,{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",model:".lastname",className:"form-control",validators:{required:V,minLength:X(3),maxLength:Q(15)}}),r.a.createElement(O.Errors,{className:"text-danger",show:"touched",model:".lastname",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.text,{type:"tel",id:"telnum",name:"telnum",placeholder:"Tel. Number",model:".telnum",className:"form-control",validators:{required:V,minLength:X(3),maxLength:Q(15),isNumber:ee}}),r.a.createElement(O.Errors,{className:"text-danger",show:"touched",model:".telnum",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less",isNumber:"Must be a number"}}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.text,{type:"email",model:".email",id:"email",name:"email",placeholder:"email",className:"form-control",validators:{required:V,validEmail:te}}),r.a.createElement(O.Errors,{className:"text-danger",show:"touched",model:".email",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(k.r,{check:!0},r.a.createElement(O.Control.checkbox,{type:"checkbox",name:"agree",model:".agree",className:"form-check-input"}),r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(k.l,{md:{size:3,offset:1}},r.a.createElement(O.Control.select,{type:"select",name:"contactType",model:".contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(k.l,{md:10},r.a.createElement(O.Control.textarea,{type:"textarea",id:"message",name:"message",rows:"10",model:".message",className:"form-control"}))),r.a.createElement(k.B,{className:"form-group"},r.a.createElement(k.l,{md:{size:10,offset:2}},r.a.createElement(k.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),ne=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNav=n.toggleNav.bind(Object(x.a)(n)),n.toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleLogin=n.handleLogin.bind(Object(x.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(k.A,{onClick:this.toggleNav}),r.a.createElement(k.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(k.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(k.w,{navbar:!0},r.a.createElement(k.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(k.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(k.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(k.x,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(k.w,{className:"ml-auto",navbar:!0},r.a.createElement(k.x,null,r.a.createElement(k.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(k.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(k.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.v,{toggle:this.toggleModal},"Login"),r.a.createElement(k.u,null,r.a.createElement(k.n,{onSubmit:this.handleLogin},r.a.createElement(k.o,null,r.a.createElement(k.r,{htmlFor:"username"},"Username"),r.a.createElement(k.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(k.o,null,r.a.createElement(k.r,{htmlFor:"password"},"Password"),r.a.createElement(k.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(k.o,{check:!0},r.a.createElement(k.r,{check:!0},r.a.createElement(k.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(k.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var re=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},le={maxWidth:"100px"};function se(e){var t=e.item;return r.a.createElement(D.Fade,{in:!0},r.a.createElement(k.s,{className:"mt-3"},r.a.createElement(k.s,{left:!0},r.a.createElement(k.s,{style:le,object:!0,src:S+t.image,alt:t.name})),r.a.createElement(k.s,{body:!0,className:"ml-4"},r.a.createElement(k.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var oe=function(e){var t=e.leaders.map((function(e){return r.a.createElement(D.Stagger,{in:!0,key:e.id},r.a.createElement(se,{key:e.id,item:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(k.a,null,r.a.createElement(k.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(k.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(k.d,null,r.a.createElement(k.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(k.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(k.d,null,r.a.createElement(k.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(k.s,{list:!0},t))))},ce=a(53),me=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchLeaders(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ne,null),r.a.createElement(ce.TransitionGroup,null,r.a.createElement(ce.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(u.f,null,r.a.createElement(u.e,{path:"/home",component:function(){return r.a.createElement(B,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(u.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(j,{dishes:e.props.dishes})}}),r.a.createElement(u.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(_,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(u.e,{path:"/contactus",component:function(){return r.a.createElement(ae,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(u.e,{path:"/aboutus",component:function(){return r.a.createElement(oe,{leaders:e.props.leaders.leaders,isLoading:e.props.leaders.isLoading,errMess:e.props.leaders.errMess})}}),r.a.createElement(u.d,{to:"/home"})))),r.a.createElement(re,null))}}]),a}(r.a.Component),ie=Object(u.g)(Object(d.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(S+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},crediantials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(P(!0)),fetch(S+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(G(t))})).catch((function(t){return e(H(t.message))}))}))},resetFeedbackForm:function(){e(O.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(S+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e($(t))})).catch((function(t){return e(Z(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(z()),fetch(S+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(J(t))})).catch((function(t){return e(K(t.message))}))}))},fetchLeaders:function(){return e((function(e){return e(W()),fetch(S+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Y(t))})).catch((function(t){return e(U(t.message))}))}))},postFeedback:function(t,a,n,r,l,s,o){return e(function(e,t,a,n,r,l,s){return function(o){var c={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(S+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert(JSON.stringify(e))})).catch((function(e){console.log(e)}))}}(t,a,n,r,l,s,o))}}}))(me)),ue=Object(h.createStore)(Object(h.combineReducers)(Object(E.a)({dishes:f,comments:p,promotions:b,leaders:g},Object(O.createForms)({feedback:M}))),Object(h.applyMiddleware)(v.a,w.a)),de=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:ue},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ie,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(172)}},[[95,1,2]]]);
//# sourceMappingURL=main.58d97241.chunk.js.map