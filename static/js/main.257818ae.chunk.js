(this.webpackJsonpvocupractice=this.webpackJsonpvocupractice||[]).push([[0],{55:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,d,l,s,u,j,b,f,h,g,p,x,O,m,y,w,v,C,k,S,I,z,T,W,F,A,D,E,M,R,N,B,V,J,_,U,K,q,P,L,H,Q,Y,$,G,X,Z,ee,ne,te,re,ce,oe,ae,ie,de,le,se,ue=t(1),je=t.n(ue),be=t(30),fe=t.n(be),he=(t(55),t(4)),ge=t(3),pe=t(8),xe=t(22),Oe=t(26),me=t(6),ye=t(31),we=t.n(ye),ve=(t(78),t(49)),Ce=t(25),ke=t(11),Se=function(){return Math.random().toString(36).substr(2,9)},Ie=function(e,n){localStorage.setItem(e,JSON.stringify(n))},ze=function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):void 0},Te=function(e,n,t){ye.store.addNotification({title:e,message:n,type:t,insert:"bottom",container:"bottom-left",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}})},We=Object(Ce.b)({name:"vocubulary",initialState:{categories:{},searchWords:[]},reducers:{loadVocabulary:function(e,n){e.categories=n.payload},createCategory:function(e,n){var t=Se();e.categories[t]={id:t,name:n.payload,words:[]},Ie("vocupractice",Object(ke.a)(e).categories),Te("Success","Category has been created!","success")},createWord:function(e,n){var t=n.payload,r=t.categoryId,c=t.word;e.categories[r].words=[].concat(Object(ve.a)(e.categories[r].words),[c]),Ie("vocupractice",Object(ke.a)(e).categories),Te("Success","Word has been added!","success")},deleteCategory:function(e,n){delete e.categories[n.payload],Ie("vocupractice",Object(ke.a)(e).categories),Te("Success","Category has been deleted!","success")},deleteWord:function(e,n){var t=n.payload,r=t.categoryId,c=t.wordId,o=t.notification;e.categories[r].words=e.categories[r].words.filter((function(e){return e.id!==c})),Ie("vocupractice",Object(ke.a)(e).categories),o&&Te("Success","Word has been deleted!","success")},updateWord:function(e,n){var t=n.payload,r=t.categoryId,c=t.word,o=e.categories[r].words.filter((function(e){return e.id===c.id}))[0]=c;e.categories[r].words=e.categories[r].words.map((function(e){return e.id===c.id?o:e})),Ie("vocupractice",Object(ke.a)(e).categories),Te("Success","Word has been updated!","success")},searchWords:function(e,n){var t=n.payload,r=t.categoryId,c=t.query;if(0===c.trim().length)e.searchWords=[];else{var o=e.categories[r].words.filter((function(e){var n;return e.word.includes(c)||e.translation.includes(c)||(null===(n=e.reading)||void 0===n?void 0:n.includes(c))}));e.searchWords=o}}}}),Fe=We.actions,Ae=Fe.loadVocabulary,De=Fe.createCategory,Ee=Fe.createWord,Me=Fe.deleteCategory,Re=Fe.deleteWord,Ne=Fe.updateWord,Be=Fe.searchWords,Ve=function(e){return e.vocabulary},Je=We.reducer,_e=t(15),Ue=t(7),Ke=t(16),qe={fontColor:"#ffffff",fontColorSecondary:"#999999",primary:"#232424",secondary:"#222222",inputBackground:"#2C2C2C",buttonBorder:"#000000",importColor:"#4A7EB5",exportColor:"#55AA85",categoryBorder:"#1A1A1A",deleteColor:"#FF0000",checkBackground:"#C4C4C4",editColor:"#52ADA3",fontSizeEm:"18px",primaryFont:"Rajdhani",secondaryFont:"Roboto"},Pe=t(19),Le=t(10),He=t(0),Qe=function(e){switch(e){case"import":return qe.importColor;case"export":return qe.exportColor;case"normal":return qe.secondary;case"delete":return qe.deleteColor;default:return qe.secondary}},Ye=function(e){switch(e){case"small":return"20px";case"middle":return"40px";case"big":return"50px";default:return"20px"}},$e=ge.d.button(r||(r=Object(he.a)(["\n    color: ",";\n    font-family: ",";\n    font-size: 1.4em;\n    border: 1px solid ",";\n    background: ",";\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 300;\n    height: 45px;\n    padding-left: ",";\n    padding-right: ",";\n    outline: none;\n    transition: background .3s;\n\n    &:hover {\n        background: ","\n    }\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.secondaryFont}),(function(e){return e.theme.buttonBorder}),(function(e){var n=e.backgroundcolor;return Qe(n)}),(function(e){var n=e.width;return Ye(n)}),(function(e){var n=e.width;return Ye(n)}),(function(e){var n=e.backgroundcolor;return Object(Pe.a)("0.050",Qe(n))})),Ge=Object(ge.d)(Le.b)(c||(c=Object(he.a)(["\n    color: ",";\n    font-family: ",";\n    font-size: 1.4em;\n    border: 1px solid ",";\n    background: ",";\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 300;\n    height: 45px;\n    padding-left: ",";\n    padding-right: ",";\n    outline: none;\n    transition: background .3s;\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:hover {\n        background: ","\n    }\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.secondaryFont}),(function(e){return e.theme.buttonBorder}),(function(e){var n=e.backgroundcolor;return Qe(n)}),(function(e){var n=e.width;return Ye(n)}),(function(e){var n=e.width;return Ye(n)}),(function(e){var n=e.backgroundcolor;return Object(Pe.a)("0.050",Qe(n))})),Xe=function(e){var n=e.backgroundColor,t=e.children,r=e.width,c=e.onClick,o=e.href,a=Object(Ke.a)(e,["backgroundColor","children","width","onClick","href"]);return o?Object(He.jsx)(Ge,Object(Ue.a)(Object(Ue.a)({backgroundcolor:n,width:r,to:o},a),{},{children:t})):Object(He.jsx)($e,Object(Ue.a)(Object(Ue.a)({onClick:c,backgroundcolor:n,width:r},a),{},{children:t}))},Ze=ge.d.div(o||(o=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: auto;\n    margin-top: auto;\n"]))),en=function(){return Object(He.jsx)(Ze,{children:Object(He.jsx)(Xe,{href:"/addcategory",backgroundColor:"normal",width:"small",children:"Add category"})})},nn=Object(Ce.b)({name:"vocupractice",initialState:{type:"translation",reading:!0,categoryId:"",selectedCategoriesId:[],word:null},reducers:{loadVocupractice:function(e){var n=ze("vocupracticesettings");n&&(e.type=n.type?n.type:"translation",e.reading=!!n.reading&&n.reading)},setType:function(e,n){e.type=n.payload,Ie("vocupracticesettings",Object(ke.a)(e))},setReading:function(e,n){e.reading=n.payload,Ie("vocupracticesettings",Object(ke.a)(e))},setCategoryId:function(e,n){e.categoryId=n.payload,e.selectedCategoriesId=[]},setSelectedCategoriesId:function(e,n){e.selectedCategoriesId=n.payload,e.categoryId=""},setWord:function(e,n){e.word=n.payload}}}),tn=nn.actions,rn=tn.loadVocupractice,cn=tn.setType,on=tn.setReading,an=tn.setSelectedCategoriesId,dn=tn.setCategoryId,ln=tn.setWord,sn=function(e){return e.vocupractice},un=nn.reducer,jn=Object(ge.d)(Le.b)(a||(a=Object(he.a)(["\n    text-decoration: none;\n    width: 120px;\n    height: 120px;\n    border: 2px solid ",";\n    color: ",";\n    font-family: ",";\n    font-size: 1.1em;\n    display: block;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: background .3s;\n    word-break: break-word;\n    overflow-wrap: break-word;\n    text-align: center;\n    padding: 5px;\n\n    &:hover {\n        background: ",";\n    }\n\n    @media (max-width: 825px) {\n        margin: auto;\n    }\n"])),(function(e){return e.theme.categoryBorder}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.secondaryFont}),(function(e){var n=e.theme;return Object(Pe.a)(.02,n.primary)})),bn=function(e){var n=e.name,t=e.href;return Object(He.jsx)(jn,{to:t,children:n})},fn=ge.d.div(i||(i=Object(he.a)(["\n    width: 560px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: auto;\n    margin-top: auto;\n\n    @media (max-width: 825px) {\n        justify-content: center;\n        align-items: center;\n    }\n\n    @media (max-width: 600px) {\n        width: 90%;\n    }\n"]))),hn=ge.d.div(d||(d=Object(he.a)(["\n    display: flex;\n    width: auto;\n\n    @media (max-width: 600px) {\n        flex-direction: column;\n        align-items: center\n        justify-content: center;\n    }\n"]))),gn=ge.d.div(l||(l=Object(he.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    margin-top: 20px;\n    grid-gap: 20px;\n\n    @media (max-width: 600px) {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media (max-width: 400px) {\n        grid-template-columns: repeat(1, 1fr);\n    }\n"]))),pn=Object(ge.d)(Xe)(s||(s=Object(he.a)(["\n    margin: 0px 10px;\n\n    &:first-of-type {\n        margin-left: 0;\n    }\n\n    @media (max-width: 600px) {\n        margin: 10px 0px;\n    }\n\n    @media (max-width: 360px) {\n        padding: 0;\n        width: 200px;\n    }\n"]))),xn=function(){var e=Object(pe.g)(),n=Object(me.b)(),t=Object(me.c)(Ve);return Object(He.jsxs)(fn,{children:[Object(He.jsxs)(hn,{children:[Object(He.jsx)(pn,{href:"/addcategory",backgroundColor:"normal",width:"small",children:"Add category"}),Object(He.jsx)(pn,{onClick:function(){var r=[];if(Object.keys(t.categories).forEach((function(e){var n=t.categories[e];if(0===n.words.length)return r.push(n.id),!1})),r.length===Object.keys(t.categories).length)return alert("All your categories are empty!"),!1;n(an(Object.keys(t.categories))),e.push("/practice")},backgroundColor:"normal",width:"small",children:"Practice all"})]}),Object(He.jsx)(gn,{children:Object.keys(t.categories).map((function(e){var n=t.categories[e];return Object(He.jsx)(bn,{href:"/category/".concat(n.id),name:n.name},n.id)}))})]})},On=ge.d.span(u||(u=Object(he.a)(["\n    font-size: ",";\n    color: ",";\n    font-family: ",";\n    padding: 0;\n    margin: 0;\n    text-transform: uppercase;\n    user-select: none;\n    text-align: center;\n    display: block;\n"])),(function(e){return"small"===e.size?"2em":"3em"}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.primaryFont})),mn=function(e){var n=e.size,t=e.children,r=Object(Ke.a)(e,["size","children"]);return Object(He.jsx)(On,Object(Ue.a)(Object(Ue.a)({size:n},r),{},{children:t}))},yn=ge.d.div(j||(j=Object(he.a)(["\n    padding-bottom: 15px;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: 1160px) {\n        padding-bottom: 20px;\n    }\n"]))),wn=ge.d.div(b||(b=Object(he.a)(["\n    background: ",";\n    padding: 0px 5px;\n    border-radius: 10px;\n    margin-left: 8px;\n"])),(function(e){var n=e.theme;return Object(Pe.a)(.05,n.secondary)})),vn=ge.d.div(f||(f=Object(he.a)(["\n    font-size: 2em;\n    font-family: ",";\n    color: ",";\n    user-select: none;\n"])),(function(e){return e.theme.primaryFont}),(function(e){return e.theme.fontColor})),Cn=function(e){var n=e.title,t=e.length;return Object(He.jsxs)(yn,{children:[Object(He.jsx)(mn,{size:"small",children:n||"\xa0\xa0"}),t&&Object(He.jsx)(wn,{children:Object(He.jsx)(vn,{children:t})})]})},kn=ge.d.div(h||(h=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n"]))),Sn=function(){var e=Object(me.c)(Ve);return Object(He.jsxs)(kn,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsx)("title",{children:"Vocupractice"})}),Object(He.jsx)(Cn,{}),Object.keys(e.categories).length>0?Object(He.jsx)(xn,{}):Object(He.jsx)(en,{})]})},In=t(9),zn=t(29),Tn=ge.d.label(g||(g=Object(he.a)(["\n    display: flex;\n    flex-direction: column;\n    color: ",";\n    font-family: ",";\n    text-transform: uppercase;\n    font-size: 1.4em;\n    width: 280px;\n    height: ",";\n    position: relative;\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.primaryFont}),(function(e){return e.label?"82px":"50px"})),Wn=ge.d.span(p||(p=Object(he.a)(["\n    padding-left: 5px;\n"]))),Fn=ge.d.input(x||(x=Object(he.a)(["\n    background: ",";\n    color: ",";\n    font-family: ",";\n    border: none;\n    width: 100%;\n    height: 100%;\n    padding: ",";\n    font-size: 1em;\n    outline: none;\n    \n    &::placeholder {\n        color: ",";\n        font-style: italic;\n        font-size: 0.6em;\n    }\n"])),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.secondaryFont}),(function(e){return e.iconType?"0px 60px":"0px 10px"}),(function(e){return e.theme.fontColorSecondary})),An=Object(ge.d)(zn.a)(O||(O=Object(he.a)(["\n    position: absolute;\n    left: 15px;\n    top: 12px;\n"]))),Dn=Object(ue.forwardRef)((function(e,n){var t=e.onChange,r=e.onKeyDown,c=e.value,o=e.labelText,a=e.placeholder,i=e.iconType,d=Object(Ke.a)(e,["onChange","onKeyDown","value","labelText","placeholder","iconType"]);return Object(He.jsxs)(Tn,Object(Ue.a)(Object(Ue.a)({label:o},d),{},{children:[o&&Object(He.jsx)(Wn,{children:o}),i&&Object(He.jsx)(An,{icon:i}),Object(He.jsx)(Fn,{iconType:i,ref:n,placeholder:a,value:c,onKeyDown:r,onChange:t})]}))})),En=ge.d.form(m||(m=Object(he.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: auto;\n    height: 140px;\n    justify-content: space-between;\n    align-items: center;\n"]))),Mn=function(e){var n=e.onSubmit,t=Object(ue.useState)(""),r=Object(In.a)(t,2),c=r[0],o=r[1];return Object(He.jsxs)(En,{onSubmit:function(e){e.preventDefault(),c.trim().length>0&&n(c)},children:[Object(He.jsx)(Dn,{labelText:"Category name",value:c,onChange:function(e){o(e.target.value)}}),Object(He.jsx)(Xe,{backgroundColor:"normal",width:"small",children:"Add category"})]})},Rn=ge.d.div(y||(y=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding-top: 30px;\n"]))),Nn=function(){var e=Object(me.b)(),n=Object(pe.g)(),t=Object(me.c)(Ve);return Object(He.jsxs)(Rn,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsx)("title",{children:"Add category - Vocupractice"})}),Object(He.jsx)(Cn,{title:"Add category"}),Object(He.jsx)(Mn,{onSubmit:function(r){if(t.categories[r])return alert("Category already exists"),!1;e(De(r)),n.push("/")}})]})},Bn=function(e,n){return e.words?e.words.filter((function(e){return e.id===n})):[]},Vn=ge.d.form(w||(w=Object(he.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: auto;\n    height: 325px;\n    justify-content: space-between;\n    align-items: center;\n"]))),Jn=function(e){var n=e.type,t=e.id,r=e.word,c=e.translation,o=e.reading,a=e.onSubmit,i=Object(ue.useState)(""),d=Object(In.a)(i,2),l=d[0],s=d[1],u=Object(ue.useState)(""),j=Object(In.a)(u,2),b=j[0],f=j[1],h=Object(ue.useState)(""),g=Object(In.a)(h,2),p=g[0],x=g[1],O=Object(ue.useRef)(null);Object(ue.useEffect)((function(){O&&O.current&&O.current.focus()}),[O]),Object(ue.useEffect)((function(){t&&(s(r),f(c),x(o))}),[t,r,c,o]);return Object(He.jsxs)(Vn,{onSubmit:function(e){e.preventDefault(),l&&b&&0!==l.trim().length&&0!==b.trim().length&&a(e,l,b,p)},children:[Object(He.jsx)(Dn,{ref:O,value:l,labelText:"Word",onChange:function(e){return s(e.target.value)}}),Object(He.jsx)(Dn,{value:b,labelText:"Translation",onChange:function(e){return f(e.target.value)}}),Object(He.jsx)(Dn,{value:p,placeholder:"Leave empty if not needed",labelText:"Reading",onChange:function(e){return x(e.target.value)}}),Object(He.jsx)(Xe,{backgroundColor:"normal",width:"small",children:"".concat(n," word")})]})},_n=ge.d.div(v||(v=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding-top: 30px;\n"]))),Un=function(e){var n=e.type,t=Object(me.b)(),r=Object(pe.g)(),c=Object(me.c)(Ve),o=Object(pe.h)(),a=o.wordId,i=o.categoryId,d=Object(ue.useState)({id:void 0,word:void 0,translation:void 0,reading:void 0}),l=Object(In.a)(d,2),s=l[0],u=l[1],j=function(e,c,o,a){t("add"===n?Ee({categoryId:i,word:{id:Se(),word:c,translation:o,reading:a}}):Ne({categoryId:i,word:{id:s.id,word:c,translation:o,reading:a}})),r.push("/category/".concat(i))};return Object(ue.useEffect)((function(){if("edit"===n&&c.categories[i]){var e=Bn(c.categories[i],a);u(e[0])}}),[n,c.categories,a,i]),("add"!==n||c.categories[i])&&("edit"!==n||c.categories[i]&&0!==Bn(c.categories[i],a).length)?Object(He.jsxs)(_n,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsxs)("title",{children:[n.charAt(0).toUpperCase()+n.slice(1)," word - Vocupractice"]})}),Object(He.jsx)(Cn,{title:"".concat(n.toUpperCase()," word")}),"add"===n?Object(He.jsx)(Jn,{onSubmit:j,type:n}):Object(He.jsx)(Jn,Object(Ue.a)(Object(Ue.a)({},s),{},{onSubmit:j,type:n}))]}):Object(He.jsx)(pe.a,{to:"/"})},Kn=t(33),qn=t(50),Pn=t(35),Ln=function(e){var n=Object(ue.useState)(""),t=Object(In.a)(n,2),r=t[0],c=t[1];return Object(ue.useEffect)((function(){var n=setTimeout((function(){c(e)}),500);return function(){return clearTimeout(n)}}),[e]),r},Hn=ge.d.label(C||(C=Object(he.a)(["\n    color: ",";\n    font-family: ",";\n    text-transform: uppercase;\n    font-size: 1.1em;\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.primaryFont})),Qn=ge.d.span(k||(k=Object(he.a)(["\n    margin-left: 5px;\n"]))),Yn=ge.d.input(S||(S=Object(he.a)(["\n    transform: scale(1.7);\n"]))),$n=function(e){var n=e.onChange,t=e.label,r=e.checked;return t?Object(He.jsxs)(Hn,{children:[Object(He.jsx)(Yn,{checked:r,onChange:n,type:"checkbox"}),Object(He.jsx)(Qn,{children:t})]}):Object(He.jsx)(Yn,{checked:r,onChange:n,type:"checkbox"})},Gn=ge.d.button(I||(I=Object(he.a)(["\n    color: ",";\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    width: 25px;\n    height: 25px;\n"])),(function(e){return function(e){switch(e){case"import":return qe.importColor;case"export":return qe.exportColor;case"edit":return qe.editColor;case"delete":return qe.deleteColor;default:return qe.secondary}}(e.fontcolor)}),(function(e){var n=e.fontSize;return n||"1em"})),Xn=Object(ge.d)(Le.b)(z||(z=Object(he.a)(["\n    color: ",";\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    width: 25px;\n    height: 25px;\n"])),(function(e){var n=e.theme;return"edit"===e.fontcolor?n.editColor:n.deleteColor}),(function(e){var n=e.fontSize;return n||"1em"})),Zn=function(e){var n=e.fontColor,t=e.iconType,r=e.onClick,c=e.href,o=e.fontSize,a=Object(Ke.a)(e,["fontColor","iconType","onClick","href","fontSize"]);return c?Object(He.jsx)(Xn,Object(Ue.a)(Object(Ue.a)({fontSize:o,to:c,fontcolor:n},a),{},{children:Object(He.jsx)(zn.a,{icon:t})})):Object(He.jsx)(Gn,Object(Ue.a)(Object(Ue.a)({fontSize:o,onClick:r,fontcolor:n},a),{},{children:Object(He.jsx)(zn.a,{icon:t})}))},et=ge.d.tr(T||(T=Object(he.a)(["\n    height: 60px;\n\n    &:hover {\n        background: ",";\n    }\n\n    @media (max-width: 717px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        aling-items: center;\n        margin: 10px 0px;\n        height: auto;\n        background: ",";\n        padding: 10px;\n    }\n"])),(function(e){var n=e.theme;return Object(Pe.b)(.05,n.primary)}),(function(e){var n=e.theme;return Object(Pe.b)(.05,n.primary)})),nt=ge.d.td(W||(W=Object(he.a)(["\n    font-weight: ",";\n\n    &:first-child {\n        padding-left: 20px;\n    }\n\n    @media (max-width: 717px) {\n        text-align: center;\n        \n        &:first-child {\n            padding-left: 0;\n        }\n    }\n"])),(function(e){var n=e.weight;return n||"300"})),tt=ge.d.div(F||(F=Object(he.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n"]))),rt=function(e){var n=e.word,t=e.translation,r=e.reading,c=e.onCheckClick,o=e.onDeleteClick,a=e.wordId,i=e.categoryId;return Object(He.jsxs)(et,{children:[Object(He.jsx)(nt,{weight:600,children:n}),Object(He.jsx)(nt,{children:t}),Object(He.jsx)(nt,{children:r||"\xa0\xa0"}),Object(He.jsx)(nt,{children:Object(He.jsxs)(tt,{children:[Object(He.jsx)(Zn,{"data-tip":"edit word",href:"/category/".concat(i,"/edit/").concat(a),iconType:"edit",fontColor:"edit"}),Object(He.jsx)($n,{onChange:c}),Object(He.jsx)(Zn,{"data-tip":"remove word",onClick:o,iconType:"trash",fontColor:"delete"})]})})]})},ct=ge.d.table(A||(A=Object(he.a)(["\n    width: 100%;\n    color: ",";\n    font-family: ",";\n    font-size: 1.2em;\n    border-collapse: collapse;\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.primaryFont})),ot=ge.d.tbody(D||(D=Object(he.a)([""]))),at=function(e){var n=e.words,t=e.categoryId,r=e.onWordDeleteClick,c=e.onWordCheckClick;return Object(ue.useMemo)((function(){return Object(He.jsx)(ct,{children:Object(He.jsx)(ot,{children:n.map((function(e){return Object(He.jsx)(rt,{categoryId:t,wordId:e.id,word:e.word,translation:e.translation,reading:e.reading,onCheckClick:function(n){return c(e.id,n.target.checked)},onDeleteClick:function(){return r(e.id)}},e.id)}))})})}),[n,t,c,r])},it=ge.d.div(E||(E=Object(he.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: auto;\n    width: 900px;\n\n    @media (max-width: 930px) {\n        width: 90%;\n    }\n"]))),dt=ge.d.div(M||(M=Object(he.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-bottom: 10px;\n\n    @media (max-width: 930px) {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: 20px;\n    }\n\n    @media (max-width: 430px) {\n        grid-template-columns: repeat(1, 1fr);\n    }\n"]))),lt=Object(ge.d)(Xe)(R||(R=Object(he.a)(["\n    @media (max-width: 717px) {\n        font-size: 1em;\n    }\n"]))),st=Object(ge.d)(Dn)(N||(N=Object(he.a)(["\n    width: 100%;\n    margin-bottom: 10px;\n"]))),ut=function(e){var n=e.categoryId,t=e.onCategoryDeleteclick,r=Object(me.b)(),c=Object(pe.g)(),o=Object(me.c)(Ve),a=Object(ue.useState)({}),i=Object(In.a)(a,2),d=i[0],l=i[1],s=Object(ue.useState)(""),u=Object(In.a)(s,2),j=u[0],b=u[1],f=Ln(j);Object(qn.a)("ctrl+a",(function(e){return h(e)}));var h=function(e){e.preventDefault(),c.push("/category/".concat(n,"/add"))},g=Object(ue.useCallback)((function(e){window.confirm("Are you sure you want to delete this word?")&&r(Re({categoryId:n,wordId:e,notification:!0}))}),[n,r]),p=Object(ue.useCallback)((function(e,n){l(Object(Ue.a)(Object(Ue.a)({},d),{},Object(Kn.a)({},e,n)))}),[d]);return Object(ue.useEffect)((function(){r(Be({query:f,categoryId:n}))}),[f,n,r]),o.categories[n]?Object(He.jsxs)(it,{children:[Object(He.jsx)(Pn.a,{effect:"solid"}),Object(He.jsxs)(dt,{children:[Object(He.jsx)(lt,{onClick:function(){r(dn(n)),c.push("/practice")},backgroundColor:"normal",width:"small",children:"Practice"}),Object(He.jsx)(lt,{"data-tip":"(ctrl + a)",href:"/category/".concat(n,"/add"),backgroundColor:"normal",width:"small",children:"Add word"}),Object(He.jsx)(lt,{onClick:function(){return t(n)},backgroundColor:"delete",width:"small",children:"Delete category"}),Object(He.jsx)(lt,{onClick:function(){window.confirm("Are you sure you want to delete all selected words?")&&(Object.keys(d).map((function(e){return!!d[e]&&r(Re({categoryId:n,wordId:e,notification:!1}))})),Te("Success!","Selected words has been deleted!","success"))},backgroundColor:"delete",width:"small",children:"Delete selected"})]}),Object(He.jsx)(st,{iconType:"search",onChange:function(e){b(e.target.value)},value:j}),Object(He.jsx)(at,{categoryId:n,onWordCheckClick:p,onWordDeleteClick:g,words:0===o.searchWords.length?o.categories[n].words:o.searchWords})]}):Object(He.jsx)(pe.a,{to:"/"})},jt=ge.d.div(B||(B=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: auto;\n    margin-top: auto;\n\n    @media (max-width: 825px) {\n        flex-direction: column;\n    }\n"]))),bt=Object(ge.d)(Xe)(V||(V=Object(he.a)(["\n    margin: 0px 10px;\n\n    @media (max-width: 825px) {\n        margin: 10px 0px;\n    }    \n"]))),ft=function(e){var n=e.categoryId,t=e.onCategoryDeleteclick;return Object(He.jsxs)(jt,{children:[Object(He.jsx)(bt,{href:"/category/".concat(n,"/add"),backgroundColor:"normal",width:"small",children:"Add word"}),Object(He.jsx)(bt,{onClick:function(){return t(n)},backgroundColor:"delete",width:"small",children:"Delete category"})]})},ht=ge.d.div(J||(J=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding-top: 30px;\n"]))),gt=function(){var e=Object(me.b)(),n=Object(me.c)(Ve),t=Object(pe.h)().id,r=function(n){window.confirm("Are you sure you want to delete this category?")&&e(Me(n))};return n.categories[t]?Object(He.jsxs)(ht,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsxs)("title",{children:[n.categories[t].name.charAt(0).toUpperCase()+n.categories[t].name.slice(1)," - Vocupractice"]})}),Object(He.jsx)(Cn,{length:n.categories[t].words.length&&n.categories[t].words.length,title:"Category / ".concat(n.categories[t].name)}),n.categories[t].words.length>0?Object(He.jsx)(ut,{onCategoryDeleteclick:r,categoryId:t}):Object(He.jsx)(ft,{onCategoryDeleteclick:r,categoryId:t})]}):Object(He.jsx)(pe.a,{to:"/"})},pt=ge.d.input(_||(_=Object(he.a)(["\n    transform: scale(1.1);\n    margin: 0;\n"]))),xt=function(e){var n=e.onChange,t=e.name,r=e.checked,c=Object(Ke.a)(e,["onChange","name","checked"]);return Object(He.jsx)(pt,Object(Ue.a)({checked:r,type:"radio",name:t,onChange:n},c))},Ot=ge.d.label(U||(U=Object(he.a)(["\n    color: ",";\n    font-family: ",";\n    text-transform: uppercase;\n    font-size: 1.1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.primaryFont})),mt=Object(ge.d)(xt)(K||(K=Object(he.a)(["\n    position: relative;\n    bottom: 1px;\n"]))),yt=ge.d.span(q||(q=Object(he.a)(["\n    margin-left: 5px;\n"]))),wt=function(e){var n=e.onChange,t=e.name,r=e.checked,c=e.text,o=Object(Ke.a)(e,["onChange","name","checked","text"]);return Object(He.jsxs)(Ot,Object(Ue.a)(Object(Ue.a)({},o),{},{children:[Object(He.jsx)(mt,{checked:r,onChange:n,name:t}),Object(He.jsx)(yt,{children:c})]}))},vt=ge.d.div(P||(P=Object(he.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: auto;\n    align-items: center;\n"]))),Ct=ge.d.span(L||(L=Object(he.a)(["\n    font-family: ",";\n    color: ",";\n    font-size: 3em;\n    text-align: center;\n"])),(function(e){return e.theme.secondaryFont}),(function(e){return e.theme.fontColor})),kt=ge.d.span(H||(H=Object(he.a)(["\n    font-family: ",";\n    color: ",";\n    font-size: 1.1em;\n    text-align: center;\n    margin-bottom: 5px;\n"])),(function(e){return e.theme.secondaryFont}),(function(e){return e.theme.fontColorSecondary})),St=Object(ge.d)(Dn)(Q||(Q=Object(he.a)(["\n    margin: 5px 0px;\n    \n    & > input {\n        transition: background .3s ease-in-out;\n    }\n\n    ","\n"])),(function(e){return e.isCorrect&&Object(ge.c)(Y||(Y=Object(he.a)(["\n        & > input {\n            background: #33F633;\n            pointer-events: none;\n        }\n    "])))})),It=ge.d.div($||($=Object(he.a)(["\n    display: flex;\n    margin: 5px 0px;\n\n    ","\n"])),(function(e){return e.column&&Object(ge.c)(G||(G=Object(he.a)(["\n        flex-direction: column;\n    "])))})),zt=Object(ge.d)(Xe)(X||(X=Object(he.a)(["\n    font-size: 0.7em;\n    margin: 0px 5px;\n"]))),Tt=Object(ge.d)(wt)(Z||(Z=Object(he.a)(["\n    margin: 0px 10px;\n"]))),Wt=function(){var e=Object(me.b)(),n=Object(me.c)(sn),t=Object(ue.useState)(""),r=Object(In.a)(t,2),c=r[0],o=r[1],a=Object(ue.useState)(""),i=Object(In.a)(a,2),d=i[0],l=i[1],s=Object(ue.useState)(""),u=Object(In.a)(s,2),j=u[0],b=u[1],f=Object(ue.useState)(""),h=Object(In.a)(f,2),g=h[0],p=h[1],x=Object(ue.useState)(!1),O=Object(In.a)(x,2),m=O[0],y=O[1],w=Object(ue.useRef)(null),v=Object(ue.useRef)(null),C=Object(ue.useCallback)((function(){var t,r;""!==n.categoryId?e((r=n.categoryId,function(e,n){var t=n().vocabulary.categories;if(!t[r])return!1;var c=t[r].words,o=Math.floor(Math.random()*c.length);e(ln(c[o]))})):e((t=n.selectedCategoriesId,function(e,n){var r=n().vocabulary.categories,c=Math.floor(Math.random()*t.length),o=r[t[c]];if(!o)return!1;for(;0===o.words.length;)c=Math.floor(Math.random()*t.length),o=r[t[c]];var a=Math.floor(Math.random()*o.words.length);e(ln(o.words[a]))}))}),[e,n.categoryId,n.selectedCategoriesId]);Object(ue.useEffect)((function(){return e(rn()),C(),function(){e(ln(null))}}),[e,n.categoryId,n.selectedCategoriesId,C]),Object(ue.useEffect)((function(){"true"===j&&"true"===g&&y(!0)}),[j,g]);var k=function(){o(""),l(""),b(""),p(""),y(!1)},S=function(n){e(cn(n)),k()};return""===n.categoryId&&0===n.selectedCategoriesId.length?Object(He.jsx)(pe.a,{to:"/"}):n.word?Object(He.jsxs)(vt,{onKeyDown:function(e){"Enter"===e.key&&m&&(k(),C(),v.current.focus())},children:[Object(He.jsx)(Ct,{children:n.word.word}),n.reading&&n.word.reading&&Object(He.jsx)(kt,{children:"(".concat(n.word.reading,")")}),"translation"===n.type||"both"===n.type?Object(He.jsx)(St,{isCorrect:"true"===j,ref:v,placeholder:"Translation",onKeyDown:function(e){!n.word||"Enter"!==e.key&&"Tab"!==e.key||(n.word.reading?c===n.word.translation&&(b("true"),"both"!==n.type&&p("true")):c===n.word.translation&&(b("true"),p("true")),"both"===n.type&&"Tab"!==e.key&&w.current&&w.current.focus())},onChange:function(e){"true"!==j&&o(e.target.value)},value:c}):"",!n.word.reading||"reading"!==n.type&&"both"!==n.type?"":Object(He.jsx)(St,{isCorrect:"true"===g,ref:w,placeholder:"Reading",onKeyDown:function(e){n.word&&"Enter"===e.key&&n.word.reading&&n.word.reading===d&&(p("true"),"true"!==j&&n.word.translation===c&&b("true"),"reading"===n.type&&b("true"))},onChange:function(e){"true"!==g&&l(e.target.value)},value:d}),Object(He.jsxs)(It,{children:[Object(He.jsx)(zt,{onClick:function(){n.word&&(o(n.word.translation),l(n.word.reading?n.word.reading:""),b("true"),p("true"))},backgroundColor:"normal",width:"small",children:"Answer"}),Object(He.jsx)(zt,{onClick:function(){k(),C()},backgroundColor:"normal",width:"small",children:"Next"}),Object(He.jsx)(zt,{onClick:function(){n.word&&(c===n.word.translation&&b("true"),n.word.reading&&("reading"===n.type||"both"===n.type)?d===n.word.reading&&p("true"):p("true"))},backgroundColor:"normal",width:"small",children:"Check"})]}),n.word.reading&&Object(He.jsxs)(It,{column:!0,children:[Object(He.jsx)(Tt,{checked:"translation"===n.type,text:"translation",name:"type",onChange:function(){return S("translation")}}),Object(He.jsx)(Tt,{checked:"reading"===n.type,text:"reading",name:"type",onChange:function(){return S("reading")}}),Object(He.jsx)(Tt,{checked:"both"===n.type,text:"both",name:"type",onChange:function(){return S("both")}})]}),n.word.reading&&Object(He.jsx)($n,{checked:n.reading,label:"show reading",onChange:function(n){e(on(n.target.checked))}})]}):Object(He.jsx)(vt,{})},Ft=ge.d.div(ee||(ee=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding-top: 30px;\n"]))),At=function(){return Object(He.jsxs)(Ft,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsx)("title",{children:"Practice - Vocupractice"})}),Object(He.jsx)(Cn,{title:"Practice / verbs"}),Object(He.jsx)(Wt,{})]})},Dt=ge.d.div(ne||(ne=Object(he.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n"]))),Et=ge.d.span(te||(te=Object(he.a)(["\n    font-family: ",";\n    color: ",";\n    font-size: 3em;\n    user-select: none;\n"])),(function(e){return e.theme.primaryFont}),(function(e){return e.theme.fontColor})),Mt=function(){return Object(He.jsxs)(Dt,{children:[Object(He.jsx)(_e.a,{children:Object(He.jsx)("title",{children:"404 - Vocupractice"})}),Object(He.jsx)(Et,{children:"Hey! It looks like you're lost!"}),Object(He.jsx)(Et,{children:"Click on vocupractice logo to go back :)"})]})},Rt=t(34),Nt=ge.d.div(re||(re=Object(he.a)(["\n    margin-right: auto;\n"]))),Bt=Object(ge.d)(Le.b)(ce||(ce=Object(he.a)(["\n    text-decoration: none;\n"]))),Vt=function(){var e=Object(Rt.useMediaQuery)({query:"(max-width: 470px)"});return Object(He.jsx)(Nt,{children:Object(He.jsx)(Bt,{to:"/",children:Object(He.jsx)(mn,{size:e?"small":"big",children:"Vocupractice"})})})},Jt=ge.d.div(oe||(oe=Object(he.a)(["\n    display: flex;\n"]))),_t=ge.d.input(ae||(ae=Object(he.a)(["\n    display: none;\n"]))),Ut=Object(ge.d)(Xe)(ie||(ie=Object(he.a)(["\n    margin: 0px 5px;\n"]))),Kt=Object(ge.d)(Zn)(de||(de=Object(he.a)(["\n    margin: 0px 10px;\n"]))),qt=function(){var e=Object(me.b)(),n=Object(me.c)(Ve),t=Object(Rt.useMediaQuery)({query:"(max-width: 825px)"}),r=Object(ue.useRef)(null),c=function(){r.current&&r.current.click()},o=function(){var e=new Blob([JSON.stringify(n.categories)],{type:"text/plain"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="vocupractice.txt",t.click(),Te("Success","Your data has been exported","success")};return Object(He.jsxs)(Jt,{children:[Object(He.jsx)(_t,{onChange:function(n){if(n.target.files){var t=n.target.files[0],c=new FileReader;c.onload=function(n){if(n.target)try{var t=JSON.parse(n.target.result),c=["id","name","words"],o=["id","word","translation","reading"];Object.keys(t).forEach((function(e){var n=t[e],r=Object.keys(n);if(JSON.stringify(r)!==JSON.stringify(c))throw Error("Not vocupractice file");Object.keys(n.words).forEach((function(e){var t=n.words[e],r=Object.keys(t);if(JSON.stringify(r)!==JSON.stringify(o))throw Error("Not vocupractice file")}))})),e(Ae(t)),Ie("vocupractice",t),Te("Success","Data has been imported!","success")}catch(a){Te("Error","This is not a valid vocupractice file!","danger"),r.current.value=""}},t&&c.readAsText(t)}},ref:r,type:"file",accept:".txt"}),t?Object(He.jsxs)(He.Fragment,{children:[Object(He.jsx)(Kt,{"data-tip":"import",fontSize:"1.5em",fontColor:"import",iconType:"file-import",onClick:c}),Object(He.jsx)(Kt,{"data-tip":"export",fontSize:"1.5em",fontColor:"export",iconType:"file-export",onClick:o})]}):Object(He.jsxs)(He.Fragment,{children:[Object(He.jsx)(Ut,{backgroundColor:"import",width:"big",onClick:c,children:"Import"}),Object(He.jsx)(Ut,{backgroundColor:"export",width:"big",onClick:o,children:"Export"})]})]})},Pt=ge.d.div(le||(le=Object(he.a)(["\n    width: 100%;\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    align-items: center;\n    padding: 10px 20px;\n\n    @media (max-width: 470px) {\n        padding: 10px 10px;\n    }\n"]))),Lt=function(){return Object(He.jsxs)(Pt,{children:[Object(He.jsx)(Pn.a,{effect:"solid"}),Object(He.jsx)(Vt,{}),Object(He.jsx)(qt,{})]})};xe.b.add(Oe.a,Oe.e,Oe.b,Oe.c,Oe.d);var Ht=ge.d.div(se||(se=Object(he.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tfont-size: ",";\n\tbackground: ",";\n\tpadding: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n"])),(function(e){return e.theme.fontSizeEm}),(function(e){return e.theme.primary}));var Qt,Yt=function(){var e=Object(me.b)();return Object(ue.useEffect)((function(){var n=ze("vocupractice");n&&e(Ae(n))}),[e]),Object(He.jsxs)(He.Fragment,{children:[Object(He.jsx)(we.a,{}),Object(He.jsxs)(Ht,{children:[Object(He.jsx)(Lt,{}),Object(He.jsxs)(pe.d,{children:[Object(He.jsx)(pe.b,{exact:!0,path:"/",children:Object(He.jsx)(Sn,{})}),Object(He.jsx)(pe.b,{path:"/addcategory",children:Object(He.jsx)(Nn,{})}),Object(He.jsx)(pe.b,{exact:!0,path:"/category/:categoryId/add",children:Object(He.jsx)(Un,{type:"add"})}),Object(He.jsx)(pe.b,{exact:!0,path:"/category/:categoryId/edit/:wordId",children:Object(He.jsx)(Un,{type:"edit"})}),Object(He.jsx)(pe.b,{exact:!0,path:"/category/:id",children:Object(He.jsx)(gt,{})}),Object(He.jsx)(pe.b,{exact:!0,path:"/practice",children:Object(He.jsx)(At,{})}),Object(He.jsx)(pe.b,{path:"*",children:Object(He.jsx)(Mt,{})})]})]})]})},$t=Object(Ce.a)({reducer:{vocabulary:Je,vocupractice:un}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Gt=Object(ge.b)(Qt||(Qt=Object(he.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n    }\n\n    *,\n    *::after,\n    *::before {\n        box-sizing: border-box;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    ol,\n    ul {\n        margin: 0;\n        padding: 0;\n    }\n"])));fe.a.render(Object(He.jsx)(je.a.StrictMode,{children:Object(He.jsx)(me.a,{store:$t,children:Object(He.jsxs)(ge.a,{theme:qe,children:[Object(He.jsx)(Gt,{}),Object(He.jsx)(Le.a,{children:Object(He.jsx)(Yt,{})})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.257818ae.chunk.js.map