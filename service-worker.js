"use strict";var precacheConfig=[["/margot-de-maulmont/index.html","6c28c526e3b34f0eecbd34dd17083fce"],["/margot-de-maulmont/static/css/main.99e10eb3.css","74e4e43c5c465183f7899080a7a04f96"],["/margot-de-maulmont/static/js/main.382026ee.js","79364652d3fb034498f37d7e5d3de4c6"],["/margot-de-maulmont/static/media/bootstrap.9053c911.png","9053c91148962e567e993b1cbbf82965"],["/margot-de-maulmont/static/media/cv-fr.029245c0.png","029245c0471ec54cd70d8eb328b4603a"],["/margot-de-maulmont/static/media/cv-fr.b5a9f1b5.pdf","b5a9f1b5b0b2644f2a760a35f9644677"],["/margot-de-maulmont/static/media/git.bd3801dd.png","bd3801dd7c4906c6411d41a7d504cd63"],["/margot-de-maulmont/static/media/php.06ed07c9.png","06ed07c96f350b256799f11cf971f9c2"],["/margot-de-maulmont/static/media/pic.76937e51.jpg","76937e51596c53c98ee39ba9cbbe1f36"],["/margot-de-maulmont/static/media/project-lexicode.f70efb1f.png","f70efb1f86f3491d19bd2ebd568610a7"],["/margot-de-maulmont/static/media/project-occ.ce34d22d.png","ce34d22d3348e7536d492237b755b8a3"],["/margot-de-maulmont/static/media/react.a51c83ca.png","a51c83cabc310faa87a4a4d077a16b0d"],["/margot-de-maulmont/static/media/sql.92cf6fc3.png","92cf6fc3cddfcd5960c6fe80b871199a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/margot-de-maulmont/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});