(this.webpackJsonpspltr=this.webpackJsonpspltr||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),o=a.n(r),i=(a(13),a(1)),c=a(2),u=a(4),m=a(3),s=a(7),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.getUserInput=function(t){t.preventDefault();var a=e.state.amount/e.state.group*e.state.tip;e.setState({total:a.toFixed(2)})},e.state={group:"",amount:"",tip:1.1,total:""},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"tipApp",action:"submit",method:"post"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"groupSize"},"How many?"),l.a.createElement("input",{onChange:this.handleChange,type:"number",id:"groupSize",value:this.state.group,min:"1",step:"1",placeholder:"Add the number of people",name:"group",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"billAmount"},"How much?"),l.a.createElement("input",{onChange:this.handleChange,type:"number",id:"billAmount",value:this.state.amount,min:"0",step:".01",placeholder:"Add the bill total",name:"amount",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"tipAmount"},"Tip?"),l.a.createElement("input",{onChange:this.handleChange,type:"range",id:"tipAmount",value:this.state.tip,min:"1.1",max:"1.5",step:"0.05",name:"tip"})),l.a.createElement("button",{onClick:this.getUserInput},"Calculate"),l.a.createElement("h3",null,this.state.total))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={bills:[]},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",{className:"logoName"},"Spl|tr"),l.a.createElement("p",null,"Bill Splitting App"),l.a.createElement(p,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.22c8c6fb.chunk.js.map