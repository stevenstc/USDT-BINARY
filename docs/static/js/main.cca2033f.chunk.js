(this.webpackJsonpsmartsitecapital=this.webpackJsonpsmartsitecapital||[]).push([[0],{102:function(e,t){},115:function(e,t){},218:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(69),c=a.n(s),o=a(2),l=a.n(o),i=a(14),d=a(4),u=a(5),m=a(7),p=a(6),h=a(70),E=a.n(h),b={tronWeb:!1,contract:!1,setTronWeb:function(e){this.tronWeb=e},setContract:function(e,t){var a=this;return Object(i.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},w=a(8),f="https://proxy-ewozx.herokuapp.com/",v="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",x="TDDkSxfkN5DbqXK3tHSZFXRMcT9aS6m9qz",g="TTXotPkx5YypmMjgzvGb9496XmrCxbNNaZ",I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={min:100,deposito:"Cargando...",balance:"Cargando...",accountAddress:"Cargando...",porcentaje:"Cargando...",dias:"Cargando...",partner:"Cargando...",balanceTRX:"Cargando...",balanceUSDT:"Cargando...",maxButton:"Cargando...",precioSITE:0},n.deposit=n.deposit.bind(Object(w.a)(n)),n.estado=n.estado.bind(Object(w.a)(n)),n.getMax=n.getMax.bind(Object(w.a)(n)),n.rateSITE=n.rateSITE.bind(Object(w.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,g);case 2:return e.next=4,this.estado();case 4:setInterval((function(){return t.estado()}),2e3);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rateSITE",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f,"https://servicios-pesodigital.herokuapp.com/api/v1/servicio/precio/SITE",e.next=4,fetch(t+"https://servicios-pesodigital.herokuapp.com/api/v1/servicio/precio/SITE").catch((function(e){console.error(e)}));case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n.Data.precio);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"estado",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,c,o,i,d,u,m,p,h,E,w,f,I,T,N,k,S,y,j,O,W,R;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,t=window.tronWeb.address.fromHex(t.address),a=t.substr(0,4),n=t.substr(-4),r=a+"..."+n,document.getElementById("contract").innerHTML='<a href="https://tronscan.org/#/contract/'+g+'/code">Contrato V 1.0</a>',document.getElementById("login").href="https://tronscan.io/#/address/".concat(t),document.getElementById("login-my-wallet").innerHTML=r,e.next=12,window.tronWeb.contract().at(x);case 12:return s=e.sent,e.next=15,s.allowance(t,g).call();case 15:return c=e.sent,(c=parseInt(c._hex))>0?c="Depositar":(document.getElementById("amount").value="",c="Registrar"),e.next=20,s.decimals().call();case 20:return o=e.sent,e.next=23,s.balanceOf(t).call();case 23:return i=e.sent,i=parseInt(i._hex)/Math.pow(10,o),e.next=27,b.contract.MIN_DEPOSIT().call();case 27:return d=e.sent,d=parseInt(d._hex)/Math.pow(10,o),e.next=31,b.contract.MAX_DEPOSIT().call();case 31:return u=e.sent,u=parseInt(u._hex)/Math.pow(10,o),m=v,e.next=36,b.contract.investors(t).call();case 36:if(!(p=e.sent).registered){e.next=41;break}m=window.tronWeb.address.fromHex(p.sponsor),e.next=53;break;case 41:if(!((h=document.location.href).indexOf("?")>0)){e.next=53;break}for(E=h.split("?")[1],w=E.split("&"),f={},I=0,T=w.length;I<T;I++)N=w[I].split("="),f[N[0]]=unescape(decodeURI(N[1]));if(!f.ref){e.next=53;break}return N=f.ref.split("#"),e.next=51,b.contract.investors(N[0]).call();case 51:(p=e.sent).registered&&(m=N[0]);case 53:return"T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"===m&&(m="---------------------------------"),k=185,S=155,S=parseInt(S),e.next=59,s.balanceOf(t).call();case 59:return y=e.sent,y=parseInt(y._hex),e.next=63,window.tronWeb.trx.getBalance();case 63:return j=e.sent,j/=Math.pow(10,6),e.next=67,window.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");case 67:return O=e.sent,e.next=70,O.balanceOf(t).call();case 70:return W=e.sent,W=parseInt(W)/Math.pow(10,6),e.next=74,this.rateSITE();case 74:R=e.sent,this.setState({deposito:c,balance:i,decimales:o,accountAddress:t,porcentaje:S,dias:k,min:d,max:u,partner:m,balanceSite:y,balanceTRX:j,balanceUSDT:W,precioSITE:R,maxAlcanzado:parseInt(p.invested)/Math.pow(10,o)<=u,maxButton:"Max"});case 76:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deposit",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,c,o,i,d,u,m,p,h,E,w,f,I,T,N,k,S,y,j,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.deposito,n=t.decimales,r=t.balanceSite,s=t.balanceTRX,c=t.maxAlcanzado,o=this.state,i=o.min,d=o.max,i*=Math.pow(10,n),d*=Math.pow(10,n),u=document.getElementById("amount").value,u=parseFloat(u),u=parseInt(u*Math.pow(10,n)),e.next=9,window.tronWeb.trx.getAccount();case 9:return m=e.sent,m=window.tronWeb.address.fromHex(m.address),e.next=13,window.tronWeb;case 13:return p=e.sent,e.next=16,p.contract().at(x);case 16:if(h=e.sent,!("Registrar"===a&&s>=50)){e.next=23;break}return document.getElementById("amount").value="",e.next=21,h.approve(g,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send();case 21:e.next=27;break;case 23:return e.next=25,h.allowance(m,g).call();case 25:E=e.sent,E=parseInt(E._hex);case 27:if(!(E>=u&&E>0&&r>=u&&u>=i&&u<=d&&s>=50&&"Registrar"!==a&&c)){e.next=58;break}return w=document.location.href,f=v,e.next=32,b.contract.investors(m).call();case 32:if(!(I=e.sent).registered){e.next=37;break}f=I.sponsor,e.next=49;break;case 37:if(!(w.indexOf("?")>0)){e.next=49;break}for(T=w.split("?")[1],N=T.split("&"),k={},S=0,y=N.length;S<y;S++)j=N[S].split("="),k[j[0]]=unescape(decodeURI(j[1]));if(!k.ref){e.next=49;break}return j=k.ref.split("#"),e.next=46,b.contract.investors(j[0]).call();case 46:O=e.sent,console.log(O),O.registered&&(f=j[0]);case 49:if(!(u>=i)){e.next=56;break}return e.next=52,b.contract.deposit(u,f).send();case 52:document.getElementById("amount").value="",window.alert("Felicidades inversi\xf3n exitosa"),document.getElementById("services").scrollIntoView({block:"end",behavior:"smooth"});case 56:e.next=65;break;case 58:if(u<i&&(document.getElementById("amount").value=i/Math.pow(10,n),window.alert("coloca una cantidad mayor que "+i/Math.pow(10,n)+" SITE")),u>d&&(document.getElementById("amount").value="",window.alert("coloca una cantidad menor que "+d/Math.pow(10,n)+" SITE")),r<u&&(document.getElementById("amount").value="",window.alert("No tienes suficiente SITE")),c||(document.getElementById("amount").value="",window.alert("Limite de deposito m\xe1ximo alcanzado")),!(s<50)){e.next=65;break}return e.next=65,window.alert("Su cuenta debe tener almenos 150 TRX para ejecutar las transacciones correctamente");case 65:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMax",value:function(){document.getElementById("amount").value=this.state.balance}},{key:"render",value:function(){var e=this,t=this.state.min;return t="Minimo. "+t+" SITE",r.a.createElement("div",{className:"card wow bounceInUp text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",id:"contract"},"Contrato V 1.0"),r.a.createElement("table",{className:"table borderless"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fa fa-check-circle-o text-success"}),"TASA E.A"),r.a.createElement("td",null,(365*(this.state.porcentaje-100)/this.state.dias).toFixed(2),"%")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fa fa-check-circle-o text-success"}),"RETORNO TOTAL"),r.a.createElement("td",null,this.state.porcentaje,"%")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fa fa-check-circle-o text-success"}),"RECOMPENSA"),r.a.createElement("td",null,this.state.porcentaje-100,"%")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fa fa-check-circle-o text-success"}),"Tiempo en d\xedas"),r.a.createElement("td",null,this.state.dias)))),r.a.createElement("div",{className:"form-group"},"Wallet",r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,this.state.accountAddress),r.a.createElement("br",null)),r.a.createElement("p",{className:"card-text "},"SITE: ",r.a.createElement("strong",null,this.state.balance)," ($",(this.state.balance*this.state.precioSITE).toFixed(2),")",r.a.createElement("br",null),"TRX: ",r.a.createElement("strong",null,(1*this.state.balanceTRX).toFixed(6)),r.a.createElement("br",null),"USDT: ",r.a.createElement("strong",null,(1*this.state.balanceUSDT).toFixed(6)),r.a.createElement("br",null)),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{id:"amount",type:"number",className:"form-control mb-20 text-center",placeholder:t}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.getMax},this.state.maxButton))),r.a.createElement("p",{className:"card-text"},"Recomendamos tener m\xe1s de 150 TRX para ejecutar las transacciones correctamente"),r.a.createElement("p",{className:"card-text"},"Partner:",r.a.createElement("br",null),r.a.createElement("strong",null,this.state.partner)),r.a.createElement("button",{className:"btn btn-lg btn-success",onClick:function(){return e.deposit()}},this.state.deposito))))}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={totalInvestors:0,totalInvested:0,totalRefRewards:0},n.totalInvestors=n.totalInvestors.bind(Object(w.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,g);case 2:setInterval((function(){return t.totalInvestors()}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"totalInvestors",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.contract.setstate().call();case 2:return t=e.sent,e.next=5,window.tronWeb;case 5:return a=e.sent,e.next=8,a.contract().at(x);case 8:return n=e.sent,e.next=11,n.decimals().call();case 11:r=e.sent,this.setState({totalInvestors:parseInt(t.Investors._hex)+31,totalInvested:parseInt(t.Invested._hex)/Math.pow(10,r),totalRefRewards:parseInt(t.RefRewards._hex)/Math.pow(10,r)});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("div",{className:"row counters"},r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},t),r.a.createElement("p",null,"Inversores Globales")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},a.toFixed(2)," SITE"),r.a.createElement("p",null,"Invertido en Plataforma")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},n.toFixed(2)," SITE"),r.a.createElement("p",null,"Total Recompensas por Referidos")))}}]),a}(n.Component),N=a(74),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0,precioSITE:0,valueSITE:0,valueUSDT:0},n.Investors=n.Investors.bind(Object(w.a)(n)),n.Link=n.Link.bind(Object(w.a)(n)),n.withdraw=n.withdraw.bind(Object(w.a)(n)),n.rateSITE=n.rateSITE.bind(Object(w.a)(n)),n.handleChangeSITE=n.handleChangeSITE.bind(Object(w.a)(n)),n.handleChangeUSDT=n.handleChangeUSDT.bind(Object(w.a)(n)),n}return Object(u.a)(a,[{key:"handleChangeSITE",value:function(e){this.setState({valueSITE:e.target.value})}},{key:"handleChangeUSDT",value:function(e){this.setState({valueUSDT:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,g);case 2:setInterval((function(){return t.Investors()}),1e3),setInterval((function(){return t.Link()}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"rateSITE",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f,"https://servicios-pesodigital.herokuapp.com/api/v1/servicio/precio/SITE",e.next=4,fetch(t+"https://servicios-pesodigital.herokuapp.com/api/v1/servicio/precio/SITE").catch((function(e){console.error(e)}));case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n.Data.precio);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"Link",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.registered){e.next=12;break}return(t=document.location.href).indexOf("?")>0&&(t=t.split("?")[0]),e.next=6,window.tronWeb.trx.getAccount();case 6:a=e.sent,a=window.tronWeb.address.fromHex(a.address),a=t+"?ref="+a,this.setState({link:a}),e.next=13;break;case 12:this.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Investors",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,e.next=5,b.contract.investors(t.address).call();case 5:return a=e.sent,e.next=8,b.contract.MYwithdrawable().call();case 8:return n=e.sent,e.next=11,window.tronWeb;case 11:return r=e.sent,e.next=14,r.contract().at(x);case 14:return s=e.sent,e.next=17,s.decimals().call();case 17:return c=e.sent,e.next=20,this.rateSITE();case 20:o=e.sent,this.setState({direccion:window.tronWeb.address.fromHex(t.address),registered:a.registered,balanceRef:parseInt(a.balanceRef._hex)/Math.pow(10,c),totalRef:parseInt(a.totalRef._hex)/Math.pow(10,c),invested:parseInt(a.invested._hex)/Math.pow(10,c),paidAt:parseInt(a.paidAt._hex)/Math.pow(10,c),my:parseInt(n.amount._hex)/Math.pow(10,c),withdrawn:parseInt(a.withdrawn._hex)/Math.pow(10,c),precioSITE:o});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"withdraw",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,c,o,i,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.balanceRef,n=t.my,r=(r=a+n).toFixed(8),r=parseFloat(r),e.next=6,window.tronWeb;case 6:return s=e.sent,e.next=9,s.contract().at(x);case 9:return c=e.sent,e.next=12,c.decimals().call();case 12:return o=e.sent,e.next=15,b.contract.MIN_RETIRO().call();case 15:return i=e.sent,i=parseInt(i._hex)/Math.pow(10,o),e.next=19,b.contract.MAX_RETIRO().call();case 19:if(d=e.sent,d=parseInt(d._hex)/Math.pow(10,o),!(r<d&&r>i)){e.next=26;break}return e.next=24,b.contract.withdraw().send();case 24:e.next=28;break;case 26:r>d&&window.alert("Por favor contacta con el soporte t\xe9cnico de SITE"),r<i&&window.alert("El minimo para retirar son: "+i+" SITE");case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.balanceRef,n=t.totalRef,s=t.invested,c=t.withdrawn,o=t.my,l=t.direccion,i=t.link,d=a+o;d=d.toFixed(8),d=parseFloat(d),a=a.toFixed(8),a=parseFloat(a),n=n.toFixed(8),n=parseFloat(n),s=s.toFixed(8),s=parseFloat(s),c=c.toFixed(8),c=parseFloat(c),o=o.toFixed(8),o=parseFloat(o);return r.a.createElement("div",{className:"container"},r.a.createElement("header",{style:{textAlign:"center"},className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("i",{className:"fa fa-user mr-2","aria-hidden":"true"}),r.a.createElement("span",{style:{fontWeight:"bold"}},"Mi Oficina:")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"11px"}},l)),r.a.createElement("br",null),r.a.createElement("h3",{className:"white",style:{fontWeight:"bold"}},r.a.createElement("i",{className:"fa fa-users mr-2","aria-hidden":"true"}),"Link de referido:"),r.a.createElement("h6",{className:"white",style:{padding:"1.5em",fontSize:"11px"}},r.a.createElement("a",{href:i},i)," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.CopyToClipboard,{text:i},r.a.createElement("button",{type:"button",className:"btn btn-info"},"COPIAR"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-analytics-outline",style:{color:"#ff689b"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},s," SITE"))," ($",(this.state.invested*this.state.precioSITE).toFixed(2),")",r.a.createElement("p",{className:"description"},"Total invertido"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-bookmarks-outline",style:{color:"#e9bf06"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},n," SITE"))," ($",(this.state.totalRef*this.state.precioSITE).toFixed(2),")",r.a.createElement("p",{className:"description"},"Total ganancias por referidos"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Mi balance"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},o," SITE"))," ($",(this.state.my*this.state.precioSITE).toFixed(2),")")),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Balance por referidos"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"}," ",a," SITE"))," ($",(this.state.balanceRef*this.state.precioSITE).toFixed(2),")")),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-speedometer-outline",style:{color:"#41cf2e"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Disponible")),r.a.createElement("p",{className:"description"},d," SITE")," ($",(d*this.state.precioSITE).toFixed(2),")",r.a.createElement("button",{type:"button",className:"btn btn-info d-block text-center mx-auto mt-1",onClick:function(){return e.withdraw()}},"Retirar"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.2s","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-clock-outline",style:{color:"#4680ff"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Retirado")),r.a.createElement("p",{className:"description"},c," SITE")," ($",(this.state.withdrawn*this.state.precioSITE).toFixed(2),")"))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("img",{src:"https://coin.top/production/upload/logo/TDDkSxfkN5DbqXK3tHSZFXRMcT9aS6m9qz.png",alt:"usdt logo trx",width:"50"}),r.a.createElement("input",{id:"amountSITE",type:"number",className:"form-control mb-20 text-center",value:this.state.valueSITE,onChange:this.handleChangeSITE}),r.a.createElement("div",{className:"input-group-append"}),r.a.createElement("h4",{className:"title"}," ",this.state.valueSITE," SITE ",r.a.createElement("br",null),"=",r.a.createElement("br",null),(this.state.valueSITE*this.state.precioSITE).toFixed(2)," USDT"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1s"},r.a.createElement("div",{className:"box"},r.a.createElement("img",{src:"https://coin.top/production/logo/usdtlogo.png",alt:"usdt logo trx",width:"50"}),r.a.createElement("input",{id:"amountSITE",type:"number",className:"form-control mb-20 text-center",value:this.state.valueUSDT,onChange:this.handleChangeUSDT}),r.a.createElement("h4",{className:"title"}," ",this.state.valueUSDT," USDT",r.a.createElement("br",null),"=",r.a.createElement("br",null),(this.state.valueUSDT/this.state.precioSITE).toFixed(8)," SITE")))))}}]),a}(n.Component),S=a(75),y=a.n(S),j="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",O=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:y.a,className:"img-fluid",alt:"TronLink logo"})),W=function(){window.open(j,"_blank")},R=function(e){var t=e.installed;return void 0!==t&&t?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"tronLink row",style:{padding:"3em",color:"black",textDecoration:"none"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Requiere Iniciar Sesi\xf3n"),r.a.createElement("p",null,"TronLink est\xe1 instalado pero inicia sesion primero. Abre TronLink en la barra del nabegador y configura tu primer wallet o desbloquea una wallet ya creada.")),O))):r.a.createElement("div",{className:"row",onClick:W},r.a.createElement("div",{className:"col-sm-8 text-white"},r.a.createElement("h1",null,"Instalar TronLink"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink es una wallet de TRON que puede descargar en ",r.a.createElement("a",{href:j,target:"_blank",rel:"noopener noreferrer"},"Chrome Webstore"),". Una vez instalado, vuelva y refresque la pagina.")),O)},M="TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg",C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={tronWeb:{installed:!1,loggedIn:!1}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return t.setState({tronWeb:a}),e();var n=0,r=setInterval((function(){if(n>=10){var s="https://api.trongrid.io";return window.tronWeb=new E.a(s,s,s),t.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;t.setState({tronWeb:a}),e()}),1e3)}));case 2:this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex(M),base58:M},window.tronWeb.on("addressChange",(function(){t.state.tronWeb.loggedIn||t.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),b.setTronWeb(window.tronWeb);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{id:"why-us",className:"wow fadeIn mt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"Haz tu inversi\xf3n")),r.a.createElement("div",{className:"row row-eq-height justify-content-center"},r.a.createElement(I,null)),r.a.createElement("div",null,r.a.createElement(T,null)))),r.a.createElement("section",{id:"services",className:"section-bg"},r.a.createElement(k,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(R,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(R,null)))}}]),a}(n.Component),D=document.getElementById("root");c.a.render(r.a.createElement(C,null),D)},75:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},78:function(e,t,a){e.exports=a(218)}},[[78,1,2]]]);
//# sourceMappingURL=main.cca2033f.chunk.js.map