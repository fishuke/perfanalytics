!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PerformanceReport=void 0;var n=function(){function e(){var e=this;this.isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),this.apiUrl="https://perfanalytics-api-fisher.herokuapp.com/reports",window.addEventListener("load",(function(){var t=e.getReport();e.postReport(t)}))}return e.prototype.getReport=function(){var e,t,r=0,n=performance.getEntriesByType("resource"),o=performance.getEntriesByType("paint")[0],i=o?o.startTime:0;if(this.isSafari){var a=performance.timing;e=a.domContentLoadedEventEnd-a.navigationStart,t=a.responseStart-a.requestStart,r=a.loadEventEnd-a.loadEventStart}else{var u=performance.getEntriesByType("navigation")[0];e=u.domContentLoadedEventEnd,t=u.responseStart,r=u.loadEventStart}var s={domLoad:e,timeToFirstByte:t,windowLoad:r,firstContentfulPaint:i,resources:n.filter((function(e){return"xmlhttprequest"!==e.initiatorType})).map((function(e){return{name:e.name,initiatorType:e.initiatorType,transferSize:e.transferSize,duration:e.duration}}))};return console.log(s),s},e.prototype.postReport=function(e){fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){console.log("Report successfully sent.")})).catch((function(){console.error("An error occurred while sending the report.")}))},e}();t.PerformanceReport=n,new n}]);