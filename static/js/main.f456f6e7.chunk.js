(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){e.exports=n(93)},91:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),r=n(34),s=n.n(r),c=n(4),l=n(8),u=n(6),h=n(5),d=n(7),m=n(22),p=n(17),v=n(11),f=n(20),O=n(10),b=n(15),E=n(12),w=n.n(E),_=function(){return Math.round(999999999999*Math.random())},j=n(13),y={AnimateWishMenuOnClose:function(e){e&&j.b.fromTo(e,.15,{opacity:"1",transform:"translateY(0)"},{opacity:"0",transform:"translateY(6px)"})},AnimateOnRemove:function(){document.querySelector(".menu").style.display="none"},AnimateAllMenusClose:function(){var e=document.querySelectorAll(".menu");e&&j.b.fromTo(e,.15,{opacity:"1",transform:"translateY(0)"},{opacity:"0",transform:"translateY(6px)"})},AnimateWishMenuOnOpen:function(e){e&&j.b.fromTo(e,.15,{opacity:"0",transform:"translateY(6px)"},{opacity:"1",transform:"translateY(0)"})},AnimateAddFormOnOpen:function(){var e=document.querySelector(".add-wish__form");j.b.fromTo(e,.4,{transform:"translateY(100%)"},{transform:"translateY(10vh)",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",ease:j.a.easeInOut});var t=document.querySelector(".plus");j.b.fromTo(t,.4,{transform:"rotate(0deg)"},{transform:"rotate(135deg)",ease:j.a.easeInOut})},AnimateAddFormOnClose:function(){var e=document.querySelector(".add-wish__form");j.b.fromTo(e,.4,{transform:"translateY(10vh)"},{transform:"translateY(100%)",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",ease:j.a.easeInOut});var t=document.querySelector(".plus");j.b.fromTo(t,.4,{transform:"rotate(135deg)"},{transform:"rotate(0deg)",ease:j.a.easeInOut})}},A=(a={},Object(b.a)(a,_(),{wishText:"Live in Hawaii",dateToAchieve:w()(),isEditing:!1,isMenuOpen:!1,stepsToAchieve:[{}],diary:{lastWrite:w()(),comments:["start to work on my goals"]}}),Object(b.a)(a,_(),{wishText:"Visit France",dateToAchieve:w()(),isEditing:!1,isMenuOpen:!1,stepsToAchieve:[{}],diary:{lastWrite:w()(),comments:["start to work on my goals"]}}),a),g=function(e){return function(t){t({type:"wish/EDIT_WISH",payload:e}),y.AnimateAllMenusClose()}},T=function(e,t){return function(n){n({type:"wish/SAVE_EDITED_WISH",payload:{wishID:e,wishData:t}}),y.AnimateAllMenusClose()}},C=function(e){return function(t){y.AnimateAllMenusClose(),t({type:"wish/OPEN_MENU",payload:e})}},N=function(e,t){return function(n){n({type:"wish/CLOSE_MENU",payload:e}),y.AnimateWishMenuOnClose(t)}},k=function(){return function(e){e({type:"wish/CLOSE_ALL_WISH_MENU"}),y.AnimateAllMenusClose()}},W=function(e){return function(t){t({type:"wish/REMOVE_WISH",payload:e}),y.AnimateAllMenusClose()}},x=function(e){return function(t){t({type:"ADD_NEW_WISH",payload:e})}},D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).menuRef=o.a.createRef(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){y.AnimateWishMenuOnOpen(this.menuRef.current)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wishID,a=t.isEditing,i=t.onSave,r=t.CloseMenuAndAnimate,s=t.EditWishAndAnimate,c=t.RemoveWish;return o.a.createElement("div",{className:"wrapper-listener"},o.a.createElement("div",{className:"menu",ref:this.menuRef},o.a.createElement("div",{className:"menu__close",onClick:function(){return r(n,e.menuRef.current)}}),a?o.a.createElement("div",{className:"menu__btn menu__btn--save",onClick:i},"Save"):o.a.createElement("div",{className:"menu__btn menu__btn--edit",onClick:function(){return s(n,e.menuRef.current)}},"Edit"),o.a.createElement("div",{className:"menu__btn menu__btn--delete",onClick:function(){return c(n)}},"Remove")))}}]),t}(i.Component),M=Object(f.a)(null,function(e){return Object(v.b)({CloseMenuAndAnimate:N,EditWishAndAnimate:g,RemoveWish:W},e)})(D),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.wishID,n=e.onWishMenuOpen;return o.a.createElement("div",{className:"open-dots"},o.a.createElement("div",{className:"dots",onClick:function(){return n(t)}},o.a.createElement("div",{className:"dots__dot"}),o.a.createElement("div",{className:"dots__dot"}),o.a.createElement("div",{className:"dots__dot"})))}}]),t}(i.Component),I=n(50),F=n.n(I),R="YYYY-MM-DD",L=["dots__dot","dots","menu","menu__btn menu__btn--edit","menu__btn menu__btn--delete","menu__close","menu__btn menu__btn--save"],Y="WISH_NAME",H="WISH_DATE",q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).returnElement=function(e,t,n){switch(e){case Y:return o.a.createElement("div",{className:"wish__info__text"},o.a.createElement("p",{className:""},t));case H:return o.a.createElement("div",{className:"wish__info__date"},o.a.createElement("p",{className:""},"Date: ",n.format(R)));default:return null}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.elName,n=e.wishText,a=e.dateToAchieve;return this.returnElement(t,n,a)}}]),t}(i.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.color,a=e.value,i=e.name,r=e.label,s=e.id,c=e.required,l=void 0!==c&&c;return o.a.createElement("div",{className:"input-text"},o.a.createElement("label",{className:"input-text__label",htmlFor:s},r),o.a.createElement("input",{className:"input input__text input--rounded input--".concat(n),required:l,value:a,name:i,onChange:t,type:"text"}))}}]),t}(i.Component),V=(n(79),n(51)),G=n.n(V),P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,a=e.name,i=void 0===a?"dayinput":a,r=e.showOverlay,s=e.color,c=void 0===s?"elegant_white":s,l=e.onChange,u=e.id,h=void 0===u?"day":u,d=e.required,m=void 0===d||d;return o.a.createElement("div",{className:"daypicker ".concat(c)},t&&o.a.createElement("label",{className:"daypicker__label",htmlFor:h},t),o.a.createElement(G.a,{keepFocus:!1,inputProps:{value:n,id:h,name:i,required:m,readOnly:!0},onDayChange:l,value:n,showOverlay:r,placeholder:""}))}}]),t}(i.Component),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).renderEditElement=function(e){var t=n.props,a=t.wishText,i=t.dateToAchieve,r=t.onTextChange,s=t.onDateChange;switch(i=i.format(R),e){case Y:return o.a.createElement("div",{className:"wish__info__text wish__info__text--edit"},o.a.createElement("p",null,"Your Wish:"),o.a.createElement(U,{onChange:r,value:a}));case H:return o.a.createElement("div",{className:"wish__info__date wish__info__date--edit"},o.a.createElement("p",null,"Date to achieve:"),o.a.createElement(P,{onChange:s,value:i,color:"elegant_white",showOverlay:!1,placeholder:"Select Date"}));default:return null}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.elName;return this.renderEditElement(e)}}]),t}(i.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.elName,n=e.isEditing,a=e.onTextChange,r=e.onDateChange,s=e.dateToAchieve,c=e.wishText;return o.a.createElement(i.Fragment,null,n?o.a.createElement(B,{dateToAchieve:s,wishText:c,onTextChange:a,onDateChange:r,elName:t}):o.a.createElement(q,{elName:t,wishText:c,dateToAchieve:s}))}}]),t}(i.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.isEditing,a=e.type;return n?o.a.createElement("button",{type:a,className:"wish__info__save",onClick:t},"SAVE"):null}}]),t}(i.Component),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isMenuOpen,n=e.wishID,a=e.isEditing,i=e.dateToAchieve,r=e.wishText,s=e.onTextInputChange,c=e.onDateInputChange,l=e.onOpenWishMenu,u=e.onSaveWish;return o.a.createElement("div",{className:"wish"},o.a.createElement("div",{className:"more-options"},o.a.createElement(S,{onWishMenuOpen:l,wishID:n}),o.a.createElement(F.a,{transitionName:"menu",transitionEnterTimeout:250,transitionLeaveTimeout:300},t&&o.a.createElement(M,{onSave:u,wishID:n,isEditing:a}))),o.a.createElement("form",{className:"wish__info ".concat(a&&"wish__info--edit")},o.a.createElement(J,{isEditing:a,dateToAchieve:i,wishText:r,onTextChange:s,elName:Y}),o.a.createElement(J,{isEditing:a,dateToAchieve:i,wishText:r,onDateChange:c,elName:H}),o.a.createElement(z,{type:"submit",onClick:u,isEditing:a})))}}]),t}(i.Component),$=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).setWishStateForNextEditing=function(){var e=n.props.wish,t=e.wishText,a=e.dateToAchieve;n.setState({wishText:t,dateToAchieve:a})},n.onTextInputChange=function(e){var t=e.target.value;n.setState({wishText:t})},n.onDateInputChange=function(e){var t=w()(e);n.setState({dateToAchieve:t})},n.onSaveWish=function(e){e.preventDefault();var t=n.props;(0,t.SaveEditedWish)(t.wishID,Object(O.a)({},n.state))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setWishStateForNextEditing()}},{key:"render",value:function(){var e=this.props,t=e.wishID,n=e.wish,a=e.OpenWishMenu,i=n.isMenuOpen,r=n.isEditing,s=this.state,c=s.wishText,l=s.dateToAchieve;return o.a.createElement(Q,{wishID:t,isMenuOpen:i,isEditing:r,wishText:c,dateToAchieve:l,onTextInputChange:this.onTextInputChange,onDateInputChange:this.onDateInputChange,onSaveWish:this.onSaveWish,onOpenWishMenu:a})}}]),t}(i.Component),K=Object(p.b)(null,function(e){return Object(v.b)({SaveEditedWish:T,OpenWishMenu:C},e)})($),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.wishes;return o.a.createElement("div",{className:"wishes",id:"wishes"},Object.keys(e).map(function(t){return o.a.createElement(K,{key:t,wish:e[t],wishID:t})}))}}]),t}(i.Component),Z=Object(f.a)(function(e){return{wishes:e.wishes}},null)(X),ee=function(){return o.a.createElement("div",{className:"home-intro"},o.a.createElement("div",{className:"home-intro__descr"},"*Use this app with you mobile phone, or set mobile view in your browser devtools"),o.a.createElement("h1",null,"I WISH!"),o.a.createElement("i",{className:"arrow home__arrow arrow--down"}))},te=function(e){var t=e.styles,n=void 0===t?"":t,a=e.endpoint,i=e.size,r=void 0===i?"s":i,s=e.isLink,c=void 0===s||s,l=e.onClick;return function(e){return e?o.a.createElement(m.b,{to:a,className:"plus plus--link"},o.a.createElement("span",{className:"".concat(n," ").concat(r)}),o.a.createElement("span",{className:"".concat(n," ").concat(r)})):o.a.createElement("div",{className:"plus plus--regular",onClick:l},o.a.createElement("span",{className:"".concat(n," ").concat(r)}),o.a.createElement("span",{className:"".concat(n," ").concat(r)}))}(c)},ne=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onInputChange,n=e.onDateChange,a=e.onSave,i=e.wishText,r=e.dateToAchieve;return o.a.createElement("div",{className:"add-wish__form"},o.a.createElement("div",{className:"add-wish__form__name"},"New Wish"),o.a.createElement("div",{className:"text-input"},o.a.createElement(U,{onChange:t,value:i,name:"wishText",label:"What Wish You Have?"})),o.a.createElement("div",{className:"date-input"},o.a.createElement(P,{value:r.format(R),onChange:n,name:"date",showOverlay:!0,label:"Date To Achieve:"})),o.a.createElement("button",{className:"save-btn",onClick:a},"SAVE"))}}]),t}(i.Component),ae={isAddFormOpen:!1},ie=function(){return function(e){e({type:"add-wish/TOGGLE_ADD_FORM"})}},oe=function(){return function(e){e({type:"add-wish/TOGGLE_ADD_FORM"}),y.AnimateAddFormOnClose()}},re=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={wishText:"",dateToAchieve:w()()},n.toggleAddWishForm=function(){var e=n.props,t=e.isAddFormOpen,a=e.openForm,i=e.closeForm,o=y.AnimateAddFormOnClose,r=y.AnimateAddFormOnOpen;t?(i(),o()):(a(),r())},n.onInputChange=function(e){var t=e.target.value;n.setState({wishText:t})},n.onDateChange=function(e){console.log("DATE:",e),n.setState({dateToAchieve:w()(e)})},n.onSave=function(e){e.preventDefault();var t=n.props,a=t.addWish,i=t.closeForm,o=n.state,r=o.wishText,s=o.dateToAchieve;""!==r&&""!==s&&(n.setState({wishText:"",dateToAchieve:w()()}),a({wishText:r,dateToAchieve:s}),i(),y.AnimateAddFormOnClose())},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.wishText,n=e.dateToAchieve,a=this.props.isAddFormOpen;return o.a.createElement("div",{className:"add-wish"},o.a.createElement(te,{styles:"thin",isLink:!1,onClick:this.toggleAddWishForm}),o.a.createElement("form",{action:""},a&&o.a.createElement("div",{className:"close-on-click",onClick:this.toggleAddWishForm}),o.a.createElement(ne,{wishText:t,dateToAchieve:n,onSave:this.onSave,onInputChange:this.onInputChange,onDateChange:this.onDateChange})))}}]),t}(i.Component),se=Object(p.b)(function(e){return{isAddFormOpen:e.addWishes.isAddFormOpen}},function(e){return Object(v.b)({addWish:x,openForm:ie,closeForm:oe},e)})(re),ce=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).checkClickedClass=function(e){return L.filter(function(t){return t===e}).length},n.checkAndCloseWishMenu=function(e){var t=n.props.CloseAllWishMenuAndAnimate,a=e.target.className;0===n.checkClickedClass(a)&&t()},n.render=function(){return o.a.createElement("div",{className:"home",onClick:n.checkAndCloseWishMenu},o.a.createElement(ee,null),o.a.createElement(Z,null),o.a.createElement(se,null))},n}return Object(d.a)(t,e),t}(i.Component),le=Object(p.b)(null,function(e){return Object(v.b)({CloseAllWishMenuAndAnimate:k},e)})(ce),ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"app"},o.a.createElement(m.d,null,o.a.createElement(m.c,{path:"/",render:function(){return o.a.createElement(le,null)}}))))}}]),t}(i.Component),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(91);var me=n(52),pe=Object(v.c)({wishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"wish/OPEN_MENU":var n=t.payload,a={};return Object.keys(e).forEach(function(t){a[t]=Object(O.a)({},e[t],{isMenuOpen:!1})}),Object(O.a)({},a,Object(b.a)({},n,Object(O.a)({},e[n],{isMenuOpen:!0})));case"wish/CLOSE_MENU":var i=t.payload;return Object(O.a)({},e,Object(b.a)({},i,Object(O.a)({},e[i],{isMenuOpen:!1})));case"wish/EDIT_WISH":var o=t.payload;return Object(O.a)({},e,Object(b.a)({},o,Object(O.a)({},e[o],{isEditing:!0,isMenuOpen:!1})));case"wish/SAVE_EDITED_WISH":var r=t.payload.wishID,s=t.payload.wishData.wishText,c=t.payload.wishData.dateToAchieve;return Object(O.a)({},e,Object(b.a)({},r,Object(O.a)({},e[r],{wishText:s,dateToAchieve:c,isEditing:!1,isMenuOpen:!1})));case"wish/REMOVE_WISH":var l=t.payload;return delete e[l],Object(O.a)({},e);case"wish/CLOSE_ALL_WISH_MENU":var u={};return Object.keys(e).forEach(function(t){u[t]=Object(O.a)({},e[t],{isMenuOpen:!1})}),u;case"ADD_NEW_WISH":var h=t.payload,d=h.wishText,m=h.dateToAchieve;return Object(O.a)({},e,Object(b.a)({},_(),{wishText:d,dateToAchieve:m,isEditing:!1,isMenuOpen:!1,stepsToAchieve:[{}],diary:{lastWrite:w()(),comments:["start to work on my goals"]}}));default:return e}},addWishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;switch((arguments.length>1?arguments[1]:void 0).type){case"add-wish/TOGGLE_ADD_FORM":return Object(O.a)({},e,{isAddFormOpen:!e.isAddFormOpen});default:return e}}}),ve=[me.a],fe=window.devToolsExtension,Oe=[];"function"===typeof fe&&Oe.push(fe());var be=v.d.apply(void 0,[v.a.apply(void 0,ve)].concat(Oe)),Ee=Object(v.e)(pe,{},be);s.a.render(o.a.createElement(p.a,{store:Ee},o.a.createElement(ue,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/kids_helper",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/kids_helper","/service-worker.js");he?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):de(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):de(e)})}}()}},[[53,2,1]]]);
//# sourceMappingURL=main.f456f6e7.chunk.js.map