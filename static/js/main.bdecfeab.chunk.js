(this["webpackJsonpmodule-three-midmodule-assessment"]=this["webpackJsonpmodule-three-midmodule-assessment"]||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),a=c(7),s=c.n(a),r=(c(12),c(2)),o=c(4),d=(c(13),[{img:"https://cdn.pixabay.com/photo/2020/06/03/13/47/bird-5255017_960_720.jpg",name:"Shoebill",amount:100,id:444},{img:"https://i.imgur.com/20pjOv5b.jpg",name:"Resplendent Quetzal",amount:200,id:555},{img:"https://i.imgur.com/GacKN4tb.jpg",name:"Royal Flycatcher",amount:300,id:777},{img:"https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a",name:"Boat Billed Heron",amount:600,id:333},{img:"https://i.imgur.com/vHQizcwb.jpg",name:"Turaco",amount:400,id:888},{img:"https://i.imgur.com/YHApS55.png",name:"King Vulture",amount:500,id:1010},{img:"https://i.imgur.com/ZkvJHL8b.jpg",name:"Frilled Coquette Hummingbird",amount:600,id:1212},{img:"https://i.imgur.com/VGAxKX1.png",name:"tweetr",amount:1e4,id:999},{img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681",name:"Ex Parrot",amount:700,id:2424}]),l=c(0);function u(t){var e=t.bird;t.adoptBird;return Object(l.jsxs)("div",{className:"card birds",children:[Object(l.jsx)("h6",{children:e.name}),Object(l.jsxs)("p",{value:e.amount,children:["Price $",e.amount]}),Object(l.jsx)("img",{src:e.img,alt:"".concat(e.name," ID# ").concat(e.id),width:"165px",height:"165px"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{children:"Adopt"})]})}var j=["Stickers","Background for your computer","Tote bag","Invites to VIP live streams"];function m(t){t.cartContent,t.cartTotal;return Object(l.jsxs)("div",{className:"Checkout",children:[Object(l.jsx)("h4",{children:"Checkout"}),Object(l.jsxs)("form",{onSubmit:function(){alert("You have adopted birds. Thank you!")},children:[Object(l.jsx)("label",{htmlAdd:"first",children:"First Name"}),Object(l.jsx)("input",{type:"text",id:"first"}),Object(l.jsx)("label",{htmlAdd:"last",children:"Last Name"}),Object(l.jsx)("input",{type:"text",id:"last"}),Object(l.jsx)("label",{htmlAdd:"email",children:"Email"}),Object(l.jsx)("input",{type:"email",id:"email"}),Object(l.jsxs)("label",{htmlAdd:"zipcode",children:["Zip Code",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"number",id:"zipcode"}),Object(l.jsx)("br",{})]}),Object(l.jsx)("input",{type:"submit",value:"Submit",className:"check-butt"})]})]})}function b(t){var e=t.cartContent,c=t.cartTotal,n=t.removeBird,a=Object(i.useState)([]),s=Object(o.a)(a,2),d=s[0],u=s[1];return Object(l.jsxs)("div",{className:"Cart",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("h3",{children:"Cart"}),Object(l.jsxs)("p",{children:["Discount: ",e.length>2?"10":"0","%"]}),Object(l.jsxs)("h4",{children:["Total: $",c]}),Object(l.jsx)("ol",{children:e.map((function(t,e){return Object(l.jsxs)("li",{children:[t.name," $",t.amount,".00",Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){u([]),n(t,e)},children:"Remove"})]},t.id)}))}),Object(l.jsx)("p",{children:"Your donations have qualified you for the following items."}),Object(l.jsx)("ul",{children:function(){if(c>=100&&c<300&&!d.includes(j[0])?u([].concat(Object(r.a)(d),[j[0]])):!(c>=300&&c<500)||d.includes(j[0])&&d.includes(j[1])?!(c>=500&&c<1e3)||d.includes(j[0])&&d.includes(j[1])&&d.includes(j[2])?!(c>=1e3)||d.includes(j[0])&&d.includes(j[1])&&d.includes(j[2])&&d.includes(j[3])||u([].concat(Object(r.a)(d),[j[0],j[1],j[2],j[3]])):u([].concat(Object(r.a)(d),[j[0],j[1],j[2]])):u([].concat(Object(r.a)(d),[j[0],j[1]])),d)return Object(l.jsx)(l.Fragment,{children:d.map((function(t,e){return Object(l.jsx)("li",{children:t},e)}))})}()})]}),Object(l.jsx)(m,{cartTotal:c,cartContent:e},"checkout")]})}var h=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1],a=Object(i.useState)(null),s=Object(o.a)(a,2),j=s[0],m=s[1];function h(t){m(j+t.amount),n([].concat(Object(r.a)(c),[t]))}return console.log(c,j),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{className:"header",children:"Hypothetical Hippogriff Haven"}),Object(l.jsx)("style",{children:" @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');"}),Object(l.jsx)(b,{cartContent:c,cartTotal:j,removeBird:function(t,e){var i=c.filter((function(t,c){return c!==e}));n(i),m(j-t.amount),console.log(c)}},"cart"),Object(l.jsx)("div",{className:"birdcard",children:d.map((function(t){return Object(l.jsx)(u,{bird:t,adoptBird:h},t.id)}))})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bdecfeab.chunk.js.map