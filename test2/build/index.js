!function(r){var e={};function n(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return r[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var u in r)n.d(t,u,function(e){return r[e]}.bind(null,u));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e){window.onload=function(){for(var r=["a","b","c","d","e","f","g","h"],e=[],n=0;n<8;n++){e[n]=[];for(var t=0;t<8;t++)e[n].push(r[t]+(n+1))}function u(r,e){return"u"==r?(e.numb++,!(e.numb>7)):"r"==r?(e.char++,!(e.numb>7)):"d"==r?(e.numb--,!(e.numb<0)):"l"==r&&(e.char--,!(e.char<0))}var o=prompt("введите позицию коня");function a(r,e){this.char=r,this.numb=e}o.replace(" ","").replace(".","").replace(",","").toLowerCase(),char=Number(r.indexOf(o[0])),numb=Number(o[1]);var f=[];!function(e,n){for(var t=!0,c=0;c<e.length;c++){for(var l=0;l<e[c].length;l++)t=u(e[c][l],n);t&&f.push(n),n=new a(Number(r.indexOf(o[0])),Number(o[1]-1))}}([["u","u","r"],["u","u","l"],["r","r","u"],["r","r","d"],["d","d","r"],["d","d","l"],["l","l","u"],["l","l","d"]],new a(Number(r.indexOf(o[0])),Number(o[1]-1)));var c="возможные ходы: ";f.forEach(function(e){c+=r[e.char]+(e.numb+1)+"; "}),alert(c)}}]);