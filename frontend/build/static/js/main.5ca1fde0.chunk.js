(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),s=a(7),i=(a(31),a(25)),l=a(2),u=a(1),p=a.p+"static/media/logo.a307e1c4.svg",m=function(e){var t=e.email,a=e.logout;return o.a.createElement("div",{className:"navbar"},o.a.createElement("p",{className:"navbar__email"},t),o.a.createElement("button",{className:"navbar__logout-button",onClick:a},"\u0412\u044b\u0439\u0442\u0438"))};var d=function(e){var t=e.loggedIn,a=e.userData,n=e.logout,r=Object(u.h)();return console.log(r),o.a.createElement("header",{className:"header"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{className:"header__logo",src:p,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430"})),t?o.a.createElement(m,Object.assign({},a,{logout:n})):o.a.createElement(s.b,{to:"/sign-in"===r.pathname?"/sign-up":"/sign-in",className:"link header__link"},"/sign-in"===r.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"))},_=a.p+"static/media/plus.d86bb2ed.svg",h=o.a.createContext(),f=a(22),b=a.n(f);var g=function(e){var t=e.card,a=e.link,n=e.name,r=e.likes,c=e.onCardClick,s=e.onCardDelete,i=e.onCardLike,l=e.onCardDislike,u=o.a.useContext(h),p=t.owner._id===u._id,m=t.likes.some((function(e){return e._id===u._id})),d=b()("photo-grid__like-button","hover-button",{"photo-grid__like-button_type_active":m});return o.a.createElement("div",{className:"photo-grid__item"},p&&o.a.createElement("button",{type:"button",className:"photo-grid__trash-button hover-button",onClick:function(){s(t._id)}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"photo-grid__image photo-grid__image-button hover-button",type:"button",onClick:function(){c(t)}}),o.a.createElement("div",{className:"photo-grid__description"},o.a.createElement("h2",{className:"photo-grid__place"},n),o.a.createElement("div",{className:"photo-grid__like-wrapper"},o.a.createElement("button",{className:d,type:"button",onClick:m?function(){l(t._id)}:function(){i(t._id)}}),o.a.createElement("p",{className:"photo-grid__likes-count"},r.length))))};var v=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,r=e.onCardClick,c=e.cards,s=e.onCardDelete,i=e.onCardLike,l=e.onCardDislike,u=o.a.useContext(h);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__infos"},o.a.createElement("figure",{className:"profile__avatar-wrapper",onClick:t},o.a.createElement("div",{style:{backgroundImage:"url(".concat(u.avatar,")")},className:"profile__avatar",src:"#",alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430"})),o.a.createElement("div",{className:"profile__description"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},u.name),o.a.createElement("button",{className:"profile__button profile__button_action_edit hover-button",type:"button",onClick:a})),o.a.createElement("p",{className:"profile__profession"},u.about))),o.a.createElement("button",{className:"profile__button profile__button_action_add hover-button",type:"button",onClick:n},o.a.createElement("img",{src:_,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))),o.a.createElement("section",{className:"photo-grid"},c.map((function(e){return o.a.createElement(g,Object.assign({key:e._id},e,{onCardClick:r,card:e,onCardDelete:s,onCardLike:i,onCardDislike:l}))}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("h3",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var N=function(e){var t=e.card,a=e.isOpen,n=e.onClose;return o.a.createElement("section",{className:"pop-up popup_type_image ".concat(a&&"pop-up_type_opened")},o.a.createElement("div",{className:"pop-up__content"},o.a.createElement("div",{className:"pop-up__image-contnaiter"},o.a.createElement("button",{className:"pop-up__btn pop-up__btn_action_deny hover-button",type:"button",onClick:n}),o.a.createElement("img",{className:"pop-up__image",src:t.link,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),o.a.createElement("p",{className:"pop-up__image-name"},t.name))))};var C=function(e){var t=e.name,a=e.isOpen,n=e.onClose,r=e.title,c=e.children,s=e.onSubmit;return o.a.createElement("section",{className:"pop-up popup_type_".concat(t," ").concat(a&&"pop-up_type_opened")},o.a.createElement("div",{className:"pop-up__container"},o.a.createElement("button",{className:"pop-up__btn pop-up__btn_action_deny hover-button",type:"button",onClick:n}),o.a.createElement("p",{className:"pop-up__title"},r),o.a.createElement("form",{className:"pop-up__input pop-up__form",method:"GET",noValidate:!0,onSubmit:s},c,o.a.createElement("button",{className:"pop-up__btn pop-up__btn_action_save",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(l.a)(r,2),s=c[0],i=c[1],u=o.a.useState(""),p=Object(l.a)(u,2),m=p[0],d=p[1],_=o.a.useContext(h);return o.a.useEffect((function(){i(_.name),d(_.about)}),[_]),o.a.createElement(C,{isOpen:t,onClose:a,name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onSubmit:function(e){e.preventDefault(),n({name:s,about:m})}},o.a.createElement("input",{id:"name-input",type:"text",className:"pop-up__input pop-up__text",name:"name",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",defaultValue:s,onChange:function(e){i(e.target.value)}}),o.a.createElement("span",{id:"name-input-error",className:""}),o.a.createElement("input",{id:"profession-input",type:"text",className:"pop-up__input pop-up__text ",name:"about",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",defaultValue:m,onChange:function(e){d(e.target.value)}}),o.a.createElement("span",{id:"profession-input-error",className:""}))};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef("");return o.a.createElement(C,{isOpen:t,onClose:a,name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("input",{id:"avatar-input",type:"url",className:"pop-up__text pop-up__text_type_place",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430",name:"avatar",required:!0,ref:r,defaultValue:""}),o.a.createElement("span",{id:"place-error",className:""}))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(l.a)(r,2),s=c[0],i=c[1],u=o.a.useState(""),p=Object(l.a)(u,2),m=p[0],d=p[1];return o.a.createElement(C,{isOpen:t,onClose:a,name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onSubmit:function(e){e.preventDefault(),n({name:m,link:s})}},o.a.createElement("input",{id:"place",type:"text",className:"pop-up__text pop-up__text_type_place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",required:!0,minLength:"1",maxLength:"30",onChange:function(e){d(e.target.value)},value:m}),o.a.createElement("span",{id:"place-error",className:""}),o.a.createElement("input",{id:"url",type:"url",className:"pop-up__text pop-up__text_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,onChange:function(e){i(e.target.value)},value:s}),o.a.createElement("span",{id:"url-error",className:""}))},j=a(23),S=a(24),w=new(function(){function e(t){Object(j.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(S.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))).then((function(e){return e}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"bfb56561-5ac4-4046-893e-dcc4ab3eace0","Content-Type":"application/json"}}),D=a(9),U=a(10),x=function(e){var t=e.handleRegister,a=Object(n.useState)({email:"",password:""}),r=Object(l.a)(a,2),c=r[0],i=r[1],u=function(e){var t=e.target,a=t.name,n=t.value;i(Object(U.a)(Object(U.a)({},c),{},Object(D.a)({},a,n)))};return o.a.createElement("div",{className:"register"},o.a.createElement("p",{className:"register__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{className:"form register__form",onSubmit:function(e){e.preventDefault();var a=c.email,n=c.password;t(a,n)}},o.a.createElement("input",{id:"email",className:"input register__input",placeholder:"Email",type:"email",name:"email",value:c.email,onChange:u}),o.a.createElement("input",{id:"password",className:"input register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",value:c.password,onChange:u}),o.a.createElement("button",{className:"button hover-button register__button",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),o.a.createElement(s.b,{to:"sign-in",className:"link register__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"))},L=function(e){var t=e.handleLogin,a=Object(n.useState)({email:"",password:""}),r=Object(l.a)(a,2),c=r[0],s=r[1],i=function(e){var t=e.target,a=t.name,n=t.value;s(Object(U.a)(Object(U.a)({},c),{},Object(D.a)({},a,n)))};return o.a.createElement("div",{className:"login"},o.a.createElement("p",{className:"login__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("form",{className:"form login__form",onSubmit:function(e){e.preventDefault();var a=c.email,n=c.password;t(a,n)}},o.a.createElement("input",{id:"email",className:"input login__input",placeholder:"Email",type:"email",name:"email",value:c.email,onChange:i}),o.a.createElement("input",{id:"password",className:"input login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",value:c.password,onChange:i}),o.a.createElement("button",{className:"button hover-button login__button",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))},I="https://auth.nomoreparties.co",P=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},T=a(26),A=function(e){var t=e.component,a=Object(T.a)(e,["component"]);return o.a.createElement(u.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(u.a,{to:"./sign-in"})}))},R=a.p+"static/media/success.1b6082f8.svg",J=a.p+"static/media/fail.df8eddf6.svg",q=function(e){var t=e.onClose,a=e.renderState;return o.a.createElement("section",{className:"pop-up popup_type_info ".concat(a.open&&"pop-up_type_opened")},o.a.createElement("div",{className:"pop-up__container"},o.a.createElement("button",{className:"pop-up__btn pop-up__btn_action_deny hover-button",type:"button",onClick:t}),o.a.createElement("img",{className:"pop-up__info-img",src:!0===a.success?R:J,alt:a.message}),o.a.createElement("p",{className:"pop-up__title"},a.message)))};var B=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({email:""}),s=Object(l.a)(c,2),p=s[0],m=s[1],_=Object(u.g)();Object(n.useEffect)((function(e){ie()}),[]);var f=Object(n.useState)(!1),b=Object(l.a)(f,2),g=b[0],C=b[1],j=Object(n.useState)(!1),S=Object(l.a)(j,2),D=S[0],U=S[1],T=Object(n.useState)(!1),R=Object(l.a)(T,2),J=R[0],B=R[1],V=Object(n.useState)({}),z=Object(l.a)(V,2),G=z[0],H=z[1],M=Object(n.useState)(!1),W=Object(l.a)(M,2),$=W[0],F=W[1],K=Object(n.useState)({}),Q=Object(l.a)(K,2),X=Q[0],Y=Q[1],Z=Object(n.useState)([]),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({message:"",success:Boolean,open:!1}),oe=Object(l.a)(ne,2),re=oe[0],ce=oe[1];function se(){B(!1),U(!1),C(!1),F(!1),ce({open:!1})}Object(n.useEffect)((function(){w.getInitialCards().then((function(e){var t=e.map((function(e){return{_id:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner}}));ae(t)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){w.getUserInfo().then((function(e){Y(e)})).catch((function(e){return console.log(e)}))}),[]);var ie=function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(P)).then((function(e){e.data.email&&(m({email:e.data.email}),r(!0),_.push("/"))})).catch((function(e){localStorage.removeItem("jwt"),console.error(e)}))};return o.a.createElement(h.Provider,{value:X},o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__content"},o.a.createElement(d,{loggedIn:a,userData:p,logout:function(){localStorage.removeItem("jwt"),m({email:""}),r(!1)}}),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/sign-in"},o.a.createElement(L,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(P)})(e,t).then((function(e){e.token&&(localStorage.setItem("jwt",e.token),ie())})).catch((function(e){return console.error(e)}))}})),o.a.createElement(u.b,{exact:!0,path:"/sign-up"},o.a.createElement(x,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(P)})(e,t).then((function(e){console.log(e),e.data._id&&(ce({message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",success:!0,open:!0}),_.push("/sign-in"))})).catch((function(e){console.log(e),ce({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",success:!1,open:!0})}))}})),o.a.createElement(A,{exact:!0,path:"/",loggedIn:a,component:v,onEditAvatar:function(){B(!0)},onEditProfile:function(){C(!0)},onAddPlace:function(){U(!0)},onCardClick:function(e){F(!0),H(e)},onCardDelete:function(e){w.deleteCard(e).then((function(){ae(te.filter((function(t){return t._id!==e})))})).catch((function(e){return console.log(e)}))},onCardLike:function(e){w.putLike(e).then((function(t){var a=te.map((function(a){return a._id===e?t:a}));ae(a)})).catch((function(e){return console.log(e)}))},onCardDislike:function(e){w.removeLike(e).then((function(t){var a=te.map((function(a){return a._id===e?t:a}));ae(a)})).catch((function(e){return console.log(e)}))},cards:te})),o.a.createElement(k,{isOpen:g,onClose:se,onUpdateUser:function(e){w.patchUserInfo(e).then((function(e){Y(e),se()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(O,{isOpen:J,onClose:se,onUpdateAvatar:function(e){w.patchAvatar(e).then((function(e){Y(e),se()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(y,{isOpen:D,onClose:se,onAddPlace:function(e){w.postCard(e).then((function(e){ae([].concat(Object(i.a)(te),[e])),se()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(N,{card:G,isOpen:$,onClose:se}),o.a.createElement(q,{onClose:se,renderState:re}),o.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,null,o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5ca1fde0.chunk.js.map