import{S as Jt,i as Kt,s as Yt,e as mt,b as et,X as vt,h as J,o as _t,w as Vt,k as V,a as $t,l as $,m as Ct,c as Qt,n as T,ae as nt,p as Q,J as rt}from"./index.aeda84fa.js";var k={},qt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},At={},b={};let ot;const jt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},b.getSymbolTotalCodewords=function(t){return jt[t]},b.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},b.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ot=t},b.isKanjiModeEnabled=function(){return typeof ot<"u"},b.toSJIS=function(t){return ot(t)};var q={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}t.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},t.from=function(o,r){if(t.isValid(o))return o;try{return e(o)}catch{return r}}})(q);function Et(){this.buffer=[],this.length=0}Et.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let o=0;o<e;o++)this.putBit((t>>>e-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Ot=Et;function K(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}K.prototype.set=function(t,e,o,r){const n=t*this.size+e;this.data[n]=o,r&&(this.reservedBit[n]=!0)},K.prototype.get=function(t,e){return this.data[t*this.size+e]},K.prototype.xor=function(t,e,o){this.data[t*this.size+e]^=o},K.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Wt=K,Tt={};(function(t){const e=b.getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=e(o),i=n===145?26:Math.ceil((n-13)/(2*r-2))*2,s=[n-7];for(let a=1;a<r-1;a++)s[a]=s[a-1]-i;return s.push(6),s.reverse()},t.getPositions=function(o){const r=[],n=t.getRowColCoords(o),i=n.length;for(let s=0;s<i;s++)for(let a=0;a<i;a++)s===0&&a===0||s===0&&a===i-1||s===i-1&&a===0||r.push([n[s],n[a]]);return r}})(Tt);var Bt={};const Xt=b.getSymbolSize,It=7;Bt.getPositions=function(t){const e=Xt(t);return[[0,0],[e-It,0],[0,e-It]]};var Nt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const n=r.size;let i=0,s=0,a=0,u=null,l=null;for(let d=0;d<n;d++){s=a=0,u=l=null;for(let v=0;v<n;v++){let c=r.get(d,v);c===u?s++:(s>=5&&(i+=e.N1+(s-5)),u=c,s=1),c=r.get(v,d),c===l?a++:(a>=5&&(i+=e.N1+(a-5)),l=c,a=1)}s>=5&&(i+=e.N1+(s-5)),a>=5&&(i+=e.N1+(a-5))}return i},t.getPenaltyN2=function(r){const n=r.size;let i=0;for(let s=0;s<n-1;s++)for(let a=0;a<n-1;a++){const u=r.get(s,a)+r.get(s,a+1)+r.get(s+1,a)+r.get(s+1,a+1);(u===4||u===0)&&i++}return i*e.N2},t.getPenaltyN3=function(r){const n=r.size;let i=0,s=0,a=0;for(let u=0;u<n;u++){s=a=0;for(let l=0;l<n;l++)s=s<<1&2047|r.get(u,l),l>=10&&(s===1488||s===93)&&i++,a=a<<1&2047|r.get(l,u),l>=10&&(a===1488||a===93)&&i++}return i*e.N3},t.getPenaltyN4=function(r){let n=0;const i=r.data.length;for(let s=0;s<i;s++)n+=r.data[s];return Math.abs(Math.ceil(n*100/i/5)-10)*e.N4};function o(r,n,i){switch(r){case t.Patterns.PATTERN000:return(n+i)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(n+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return n*i%2+n*i%3===0;case t.Patterns.PATTERN110:return(n*i%2+n*i%3)%2===0;case t.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(r,n){const i=n.size;for(let s=0;s<i;s++)for(let a=0;a<i;a++)n.isReserved(a,s)||n.xor(a,s,o(r,a,s))},t.getBestMask=function(r,n){const i=Object.keys(t.Patterns).length;let s=0,a=1/0;for(let u=0;u<i;u++){n(u),t.applyMask(u,r);const l=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(u,r),l<a&&(a=l,s=u)}return s}})(Nt);var j={};const L=q,O=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],W=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,e){switch(e){case L.L:return O[(t-1)*4+0];case L.M:return O[(t-1)*4+1];case L.Q:return O[(t-1)*4+2];case L.H:return O[(t-1)*4+3];default:return}},j.getTotalCodewordsCount=function(t,e){switch(e){case L.L:return W[(t-1)*4+0];case L.M:return W[(t-1)*4+1];case L.Q:return W[(t-1)*4+2];case L.H:return W[(t-1)*4+3];default:return}};var Mt={},X={};const Y=new Uint8Array(512),Z=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Y[e]=t,Z[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Y[e]=Y[e-255]})(),X.log=function(t){if(t<1)throw new Error("log("+t+")");return Z[t]},X.exp=function(t){return Y[t]},X.mul=function(t,e){return t===0||e===0?0:Y[Z[t]+Z[e]]},function(t){const e=X;t.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let i=0;i<o.length;i++)for(let s=0;s<r.length;s++)n[i+s]^=e.mul(o[i],r[s]);return n},t.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const i=n[0];for(let a=0;a<r.length;a++)n[a]^=e.mul(r[a],i);let s=0;for(;s<n.length&&n[s]===0;)s++;n=n.slice(s)}return n},t.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=t.mul(r,new Uint8Array([1,e.exp(n)]));return r}}(Mt);const bt=Mt;function it(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}it.prototype.initialize=function(t){this.degree=t,this.genPoly=bt.generateECPolynomial(this.degree)},it.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const o=bt.mod(e,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var Zt=it,Pt={},x={},st={};st.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Rt="[0-9]+",Gt="[A-Z $%*+\\-./:]+";let _="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";_=_.replace(/u/g,"\\u");const te="(?:(?![A-Z0-9 $%*+\\-./:]|"+_+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(_,"g"),P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),P.BYTE=new RegExp(te,"g"),P.NUMERIC=new RegExp(Rt,"g"),P.ALPHANUMERIC=new RegExp(Gt,"g");const ee=new RegExp("^"+_+"$"),ne=new RegExp("^"+Rt+"$"),re=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return ee.test(t)},P.testNumeric=function(t){return ne.test(t)},P.testAlphanumeric=function(t){return re.test(t)},function(t){const e=st,o=P;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return o.testNumeric(n)?t.NUMERIC:o.testAlphanumeric(n)?t.ALPHANUMERIC:o.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(n,i){if(t.isValid(n))return n;try{return r(n)}catch{return i}}}(x),function(t){const e=b,o=j,r=q,n=x,i=st,s=7973,a=e.getBCHDigit(s);function u(c,m,p){for(let C=1;C<=40;C++)if(m<=t.getCapacity(C,p,c))return C}function l(c,m){return n.getCharCountIndicator(c,m)+4}function d(c,m){let p=0;return c.forEach(function(C){const B=l(C.mode,m);p+=B+C.getBitsLength()}),p}function v(c,m){for(let p=1;p<=40;p++)if(d(c,p)<=t.getCapacity(p,m,n.MIXED))return p}t.from=function(c,m){return i.isValid(c)?parseInt(c,10):m},t.getCapacity=function(c,m,p){if(!i.isValid(c))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=n.BYTE);const C=e.getSymbolTotalCodewords(c),B=o.getTotalCodewordsCount(c,m),h=(C-B)*8;if(p===n.MIXED)return h;const y=h-l(p,c);switch(p){case n.NUMERIC:return Math.floor(y/10*3);case n.ALPHANUMERIC:return Math.floor(y/11*2);case n.KANJI:return Math.floor(y/13);case n.BYTE:default:return Math.floor(y/8)}},t.getBestVersionForData=function(c,m){let p;const C=r.from(m,r.M);if(Array.isArray(c)){if(c.length>1)return v(c,C);if(c.length===0)return 1;p=c[0]}else p=c;return u(p.mode,p.getLength(),C)},t.getEncodedBits=function(c){if(!i.isValid(c)||c<7)throw new Error("Invalid QR Code version");let m=c<<12;for(;e.getBCHDigit(m)-a>=0;)m^=s<<e.getBCHDigit(m)-a;return c<<12|m}}(Pt);var Lt={};const at=b,xt=1335,oe=21522,St=at.getBCHDigit(xt);Lt.getEncodedBits=function(t,e){const o=t.bit<<3|e;let r=o<<10;for(;at.getBCHDigit(r)-St>=0;)r^=xt<<at.getBCHDigit(r)-St;return(o<<10|r)^oe};var Ut={};const ie=x;function D(t){this.mode=ie.NUMERIC,this.data=t.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},D.prototype.getLength=function(){return this.data.length},D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)},D.prototype.write=function(t){let e,o,r;for(e=0;e+3<=this.data.length;e+=3)o=this.data.substr(e,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-e;n>0&&(o=this.data.substr(e),r=parseInt(o,10),t.put(r,n*3+1))};var se=D;const ae=x,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function H(t){this.mode=ae.ALPHANUMERIC,this.data=t}H.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},H.prototype.getLength=function(){return this.data.length},H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)},H.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let o=ut.indexOf(this.data[e])*45;o+=ut.indexOf(this.data[e+1]),t.put(o,11)}this.data.length%2&&t.put(ut.indexOf(this.data[e]),6)};var ue=H,ce=function(t){for(var e=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(n=(n-55296)*1024+i-56320+65536,r+=1)}if(n<128){e.push(n);continue}if(n<2048){e.push(n>>6|192),e.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){e.push(n>>12|224),e.push(n>>6&63|128),e.push(n&63|128);continue}if(n>=65536&&n<=1114111){e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(n&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const le=ce,he=x;function F(t){this.mode=he.BYTE,typeof t=="string"&&(t=le(t)),this.data=new Uint8Array(t)}F.getBitsLength=function(t){return t*8},F.prototype.getLength=function(){return this.data.length},F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)},F.prototype.write=function(t){for(let e=0,o=this.data.length;e<o;e++)t.put(this.data[e],8)};var fe=F;const de=x,ge=b;function z(t){this.mode=de.KANJI,this.data=t}z.getBitsLength=function(t){return t*13},z.prototype.getLength=function(){return this.data.length},z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)},z.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let o=ge.toSJIS(this.data[e]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),t.put(o,13)}};var pe=z,kt={exports:{}};(function(t){var e={single_source_shortest_paths:function(o,r,n){var i={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var u,l,d,v,c,m,p,C,B;!a.empty();){u=a.pop(),l=u.value,v=u.cost,c=o[l]||{};for(d in c)c.hasOwnProperty(d)&&(m=c[d],p=v+m,C=s[d],B=typeof s[d]>"u",(B||C>p)&&(s[d]=p,a.push(d,p),i[d]=l))}if(typeof n<"u"&&typeof s[n]>"u"){var h=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(h)}return i},extract_shortest_path_from_predecessor_list:function(o,r){for(var n=[],i=r;i;)n.push(i),o[i],i=o[i];return n.reverse(),n},find_path:function(o,r,n){var i=e.single_source_shortest_paths(o,r,n);return e.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(o){var r=e.PriorityQueue,n={},i;o=o||{};for(i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.queue=[],n.sorter=o.sorter||r.default_sorter,n},default_sorter:function(o,r){return o.cost-r.cost},push:function(o,r){var n={value:o,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(kt);var ye=kt.exports;(function(t){const e=x,o=se,r=ue,n=fe,i=pe,s=P,a=b,u=ye;function l(h){return unescape(encodeURIComponent(h)).length}function d(h,y,f){const g=[];let A;for(;(A=h.exec(f))!==null;)g.push({data:A[0],index:A.index,mode:y,length:A[0].length});return g}function v(h){const y=d(s.NUMERIC,e.NUMERIC,h),f=d(s.ALPHANUMERIC,e.ALPHANUMERIC,h);let g,A;return a.isKanjiModeEnabled()?(g=d(s.BYTE,e.BYTE,h),A=d(s.KANJI,e.KANJI,h)):(g=d(s.BYTE_KANJI,e.BYTE,h),A=[]),y.concat(f,g,A).sort(function(E,I){return E.index-I.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function c(h,y){switch(y){case e.NUMERIC:return o.getBitsLength(h);case e.ALPHANUMERIC:return r.getBitsLength(h);case e.KANJI:return i.getBitsLength(h);case e.BYTE:return n.getBitsLength(h)}}function m(h){return h.reduce(function(y,f){const g=y.length-1>=0?y[y.length-1]:null;return g&&g.mode===f.mode?(y[y.length-1].data+=f.data,y):(y.push(f),y)},[])}function p(h){const y=[];for(let f=0;f<h.length;f++){const g=h[f];switch(g.mode){case e.NUMERIC:y.push([g,{data:g.data,mode:e.ALPHANUMERIC,length:g.length},{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.ALPHANUMERIC:y.push([g,{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.KANJI:y.push([g,{data:g.data,mode:e.BYTE,length:l(g.data)}]);break;case e.BYTE:y.push([{data:g.data,mode:e.BYTE,length:l(g.data)}])}}return y}function C(h,y){const f={},g={start:{}};let A=["start"];for(let E=0;E<h.length;E++){const I=h[E],N=[];for(let S=0;S<I.length;S++){const M=I[S],U=""+E+S;N.push(U),f[U]={node:M,lastCount:0},g[U]={};for(let w=0;w<A.length;w++){const R=A[w];f[R]&&f[R].node.mode===M.mode?(g[R][U]=c(f[R].lastCount+M.length,M.mode)-c(f[R].lastCount,M.mode),f[R].lastCount+=M.length):(f[R]&&(f[R].lastCount=M.length),g[R][U]=c(M.length,M.mode)+4+e.getCharCountIndicator(M.mode,y))}}A=N}for(let E=0;E<A.length;E++)g[A[E]].end=0;return{map:g,table:f}}function B(h,y){let f;const g=e.getBestModeForData(h);if(f=e.from(y,g),f!==e.BYTE&&f.bit<g.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(f)+`.
 Suggested mode is: `+e.toString(g));switch(f===e.KANJI&&!a.isKanjiModeEnabled()&&(f=e.BYTE),f){case e.NUMERIC:return new o(h);case e.ALPHANUMERIC:return new r(h);case e.KANJI:return new i(h);case e.BYTE:return new n(h)}}t.fromArray=function(h){return h.reduce(function(y,f){return typeof f=="string"?y.push(B(f,null)):f.data&&y.push(B(f.data,f.mode)),y},[])},t.fromString=function(h,y){const f=v(h,a.isKanjiModeEnabled()),g=p(f),A=C(g,y),E=u.find_path(A.map,"start","end"),I=[];for(let N=1;N<E.length-1;N++)I.push(A.table[E[N]].node);return t.fromArray(m(I))},t.rawSplit=function(h){return t.fromArray(v(h,a.isKanjiModeEnabled()))}})(Ut);const G=b,ct=q,we=Ot,me=Wt,ve=Tt,Ce=Bt,lt=Nt,ht=j,Ae=Zt,tt=Pt,Ee=Lt,Te=x,ft=Ut;function Be(t,e){const o=t.size,r=Ce.getPositions(e);for(let n=0;n<r.length;n++){const i=r[n][0],s=r[n][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||o<=i+a))for(let u=-1;u<=7;u++)s+u<=-1||o<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?t.set(i+a,s+u,!0,!0):t.set(i+a,s+u,!1,!0))}}function Ie(t){const e=t.size;for(let o=8;o<e-8;o++){const r=o%2===0;t.set(o,6,r,!0),t.set(6,o,r,!0)}}function Ne(t,e){const o=ve.getPositions(e);for(let r=0;r<o.length;r++){const n=o[r][0],i=o[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(n+s,i+a,!0,!0):t.set(n+s,i+a,!1,!0)}}function Me(t,e){const o=t.size,r=tt.getEncodedBits(e);let n,i,s;for(let a=0;a<18;a++)n=Math.floor(a/3),i=a%3+o-8-3,s=(r>>a&1)===1,t.set(n,i,s,!0),t.set(i,n,s,!0)}function dt(t,e,o){const r=t.size,n=Ee.getEncodedBits(e,o);let i,s;for(i=0;i<15;i++)s=(n>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function be(t,e){const o=t.size;let r=-1,n=o-1,i=7,s=0;for(let a=o-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!t.isReserved(n,a-u)){let l=!1;s<e.length&&(l=(e[s]>>>i&1)===1),t.set(n,a-u,l),i--,i===-1&&(s++,i=7)}if(n+=r,n<0||o<=n){n-=r,r=-r;break}}}function Pe(t,e,o){const r=new we;o.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Te.getCharCountIndicator(u.mode,t)),u.write(r)});const n=G.getSymbolTotalCodewords(t),i=ht.getTotalCodewordsCount(t,e),s=(n-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return Re(r,t,e)}function Re(t,e,o){const r=G.getSymbolTotalCodewords(e),n=ht.getTotalCodewordsCount(e,o),i=r-n,s=ht.getBlocksCount(e,o),a=r%s,u=s-a,l=Math.floor(r/s),d=Math.floor(i/s),v=d+1,c=l-d,m=new Ae(c);let p=0;const C=new Array(s),B=new Array(s);let h=0;const y=new Uint8Array(t.buffer);for(let I=0;I<s;I++){const N=I<u?d:v;C[I]=y.slice(p,p+N),B[I]=m.encode(C[I]),p+=N,h=Math.max(h,N)}const f=new Uint8Array(r);let g=0,A,E;for(A=0;A<h;A++)for(E=0;E<s;E++)A<C[E].length&&(f[g++]=C[E][A]);for(A=0;A<c;A++)for(E=0;E<s;E++)f[g++]=B[E][A];return f}function Le(t,e,o,r){let n;if(Array.isArray(t))n=ft.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=ft.rawSplit(t);l=tt.getBestVersionForData(d,o)}n=ft.fromString(t,l||40)}else throw new Error("Invalid data");const i=tt.getBestVersionForData(n,o);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=Pe(e,o,n),a=G.getSymbolSize(e),u=new me(a);return Be(u,e),Ie(u),Ne(u,e),dt(u,o,0),e>=7&&Me(u,e),be(u,s),isNaN(r)&&(r=lt.getBestMask(u,dt.bind(null,u,o))),lt.applyMask(r,u),dt(u,o,r),{modules:u,version:e,errorCorrectionLevel:o,maskPattern:r,segments:n}}At.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ct.M,r,n;return typeof e<"u"&&(o=ct.from(e.errorCorrectionLevel,ct.M),r=tt.from(e.version),n=lt.from(e.maskPattern),e.toSJISFunc&&G.setToSJISFunction(e.toSJISFunc)),Le(t,r,o,n)};var Dt={},gt={};(function(t){function e(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,i=o.scale||4;return{width:n,scale:n?4:i,margin:r,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},t.getImageWidth=function(o,r){const n=t.getScale(o,r);return Math.floor((o+r.margin*2)*n)},t.qrToImageData=function(o,r,n){const i=r.modules.size,s=r.modules.data,a=t.getScale(i,n),u=Math.floor((i+n.margin*2)*a),l=n.margin*a,d=[n.color.light,n.color.dark];for(let v=0;v<u;v++)for(let c=0;c<u;c++){let m=(v*u+c)*4,p=n.color.light;if(v>=l&&c>=l&&v<u-l&&c<u-l){const C=Math.floor((v-l)/a),B=Math.floor((c-l)/a);p=d[s[C*i+B]?1:0]}o[m++]=p.r,o[m++]=p.g,o[m++]=p.b,o[m]=p.a}}})(gt),function(t){const e=gt;function o(n,i,s){n.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,i,s){let a=s,u=i;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(u=r()),a=e.getOptions(a);const l=e.getImageWidth(n.modules.size,a),d=u.getContext("2d"),v=d.createImageData(l,l);return e.qrToImageData(v.data,n,a),o(d,u,l),d.putImageData(v,0,0),u},t.renderToDataURL=function(n,i,s){let a=s;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const u=t.render(n,i,a),l=a.type||"image/png",d=a.rendererOpts||{};return u.toDataURL(l,d.quality)}}(Dt);var Ht={};const xe=gt;function Ft(t,e){const o=t.a/255,r=e+'="'+t.hex+'"';return o<1?r+" "+e+'-opacity="'+o.toFixed(2).slice(1)+'"':r}function pt(t,e,o){let r=t+e;return typeof o<"u"&&(r+=" "+o),r}function Se(t,e,o){let r="",n=0,i=!1,s=0;for(let a=0;a<t.length;a++){const u=Math.floor(a%e),l=Math.floor(a/e);!u&&!i&&(i=!0),t[a]?(s++,a>0&&u>0&&t[a-1]||(r+=i?pt("M",u+o,.5+l+o):pt("m",n,0),n=0,i=!1),u+1<e&&t[a+1]||(r+=pt("h",s),s=0)):n++}return r}Ht.render=function(t,e,o){const r=xe.getOptions(e),n=t.modules.size,i=t.modules.data,s=n+r.margin*2,a=r.color.light.a?"<path "+Ft(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",u="<path "+Ft(r.color.dark,"stroke")+' d="'+Se(i,n,r.margin)+'"/>',l='viewBox="0 0 '+s+" "+s+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof o=="function"&&o(null,d),d};const Ue=qt,yt=At,zt=Dt,ke=Ht;function wt(t,e,o,r,n){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!Ue())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=o,o=e,e=r=void 0):s===3&&(e.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=o,o=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=e,e=r=void 0):s===2&&!e.getContext&&(r=o,o=e,e=void 0),new Promise(function(u,l){try{const d=yt.create(o,r);u(t(d,e,r))}catch(d){l(d)}})}try{const u=yt.create(o,r);n(null,t(u,e,r))}catch(u){n(u)}}k.create=yt.create,k.toCanvas=wt.bind(null,zt.render),k.toDataURL=wt.bind(null,zt.renderToDataURL),k.toString=wt.bind(null,function(t,e,o){return ke.render(t,o)});function De(t){let e,o,r,n,i;return{c(){e=V("div"),o=V("canvas"),r=$t(),n=V("img"),this.h()},l(s){e=$(s,"DIV",{});var a=Ct(e);o=$(a,"CANVAS",{style:!0,width:!0,height:!0,id:!0,class:!0}),Ct(o).forEach(J),r=Qt(a),n=$(a,"IMG",{src:!0,alt:!0,style:!0}),a.forEach(J),this.h()},h(){T(o,"style",t[3]),T(o,"width",t[1]),T(o,"height",t[2]),T(o,"id",t[9]),T(o,"class",t[5]),nt(n.src,i="")||T(n,"src",i),T(n,"alt",t[4]),Q(n,"position","absolute"),Q(n,"top","0"),Q(n,"left","0"),Q(n,"opacity","0")},m(s,a){et(s,e,a),rt(e,o),t[21](o),rt(e,r),rt(e,n)},p(s,a){a&8&&T(o,"style",s[3]),a&2&&T(o,"width",s[1]),a&4&&T(o,"height",s[2]),a&32&&T(o,"class",s[5]),a&16&&T(n,"alt",s[4])},d(s){s&&J(e),t[21](null)}}}function He(t){let e,o;return{c(){e=V("img"),this.h()},l(r){e=$(r,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0,id:!0,class:!0}),this.h()},h(){nt(e.src,o=t[6])||T(e,"src",o),T(e,"alt",t[4]),T(e,"width",t[1]),T(e,"height",t[2]),T(e,"style",t[3]),T(e,"id",t[8]),T(e,"class",t[5])},m(r,n){et(r,e,n)},p(r,n){n&64&&!nt(e.src,o=r[6])&&T(e,"src",o),n&16&&T(e,"alt",r[4]),n&2&&T(e,"width",r[1]),n&4&&T(e,"height",r[2]),n&8&&T(e,"style",r[3]),n&32&&T(e,"class",r[5])},d(r){r&&J(e)}}}function Fe(t){let e;function o(i,s){if(i[0]==="img")return He;if(i[0]==="canvas")return De}let r=o(t),n=r&&r(t);return{c(){n&&n.c(),e=mt()},l(i){n&&n.l(i),e=mt()},m(i,s){n&&n.m(i,s),et(i,e,s)},p(i,[s]){r===(r=o(i))&&n?n.p(i,s):(n&&n.d(1),n=r&&r(i),n&&(n.c(),n.m(e.parentNode,e)))},i:vt,o:vt,d(i){n&&n.d(i),i&&J(e)}}}function ze(t,e,o){let{text:r="Hello World"}=e,{generator:n="node-qrcode"}=e,{tagType:i="img"}=e,{displayType:s="img"}=e,{displayWidth:a=null}=e,{displayHeight:u=null}=e,{displayStyle:l=null}=e,{altText:d="QR Code"}=e,{displayID:v=null}=e,{displayClass:c=null}=e,{margin:m=4}=e,{scale:p=4}=e,{width:C=void 0}=e,{errorCorrectionLevel:B="M"}=e,{version:h=void 0}=e,y="",f,g=!1,A=v,E=v;function I(){return y}_t(async()=>{switch(i!="img"&&(o(0,s="canvas"),console.warn("please use the `displayType` instead of `tagType` for `<QRCodeImage>`")),s){case"img":await N();break;case"canvas":await M();break}o(20,g=!0)});async function N(){switch(n){case"node-qrcode":await S();break;default:await S();break}}async function S(){o(6,y=await k.toDataURL(r,{margin:m,scale:p,width:C,errorCorrectionLevel:B,version:h}))}async function M(){await k.toCanvas(f,r,{margin:m,scale:p,width:C,errorCorrectionLevel:B,version:h})}function U(w){Vt[w?"unshift":"push"](()=>{f=w,o(7,f)})}return t.$$set=w=>{"text"in w&&o(10,r=w.text),"generator"in w&&o(11,n=w.generator),"tagType"in w&&o(12,i=w.tagType),"displayType"in w&&o(0,s=w.displayType),"displayWidth"in w&&o(1,a=w.displayWidth),"displayHeight"in w&&o(2,u=w.displayHeight),"displayStyle"in w&&o(3,l=w.displayStyle),"altText"in w&&o(4,d=w.altText),"displayID"in w&&o(13,v=w.displayID),"displayClass"in w&&o(5,c=w.displayClass),"margin"in w&&o(14,m=w.margin),"scale"in w&&o(15,p=w.scale),"width"in w&&o(16,C=w.width),"errorCorrectionLevel"in w&&o(17,B=w.errorCorrectionLevel),"version"in w&&o(18,h=w.version)},t.$$.update=()=>{t.$$.dirty&1049601&&g&&(o(10,r),o(20,g),o(0,s),N(),s==="canvas"&&M())},[s,a,u,l,d,c,y,f,A,E,r,n,i,v,m,p,C,B,h,I,g,U]}class Je extends Jt{constructor(e){super(),Kt(this,e,ze,Fe,Yt,{text:10,generator:11,tagType:12,displayType:0,displayWidth:1,displayHeight:2,displayStyle:3,altText:4,displayID:13,displayClass:5,margin:14,scale:15,width:16,errorCorrectionLevel:17,version:18,getImageURL:19})}get getImageURL(){return this.$$.ctx[19]}}export{Je as Q};