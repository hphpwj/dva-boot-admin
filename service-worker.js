"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dva-boot-admin/index.html","653e5d6fbe610258b9f09af0a520f8fd"],["/dva-boot-admin/static/css/main.2d0b9941.css","e021ad6a6dba68fad9e1a427da2be516"],["/dva-boot-admin/static/js/0.c9f2d161.chunk.js","9dd77c87b15b24c9f4d9cf0258a5f21b"],["/dva-boot-admin/static/js/1.85c67d67.chunk.js","999f7a6fd0225bb617736254d2cf8f8e"],["/dva-boot-admin/static/js/10.a07e4310.chunk.js","4d29e5b84261785437ef9fdb9d24942d"],["/dva-boot-admin/static/js/11.c723f425.chunk.js","84b1699c62c8c28b8f3427a713458dac"],["/dva-boot-admin/static/js/12.5daadc51.chunk.js","5e2172f5b4374d13461fad035a02f358"],["/dva-boot-admin/static/js/13.c77e3533.chunk.js","1c1c0c66795c9727557c9dfc4d192fa9"],["/dva-boot-admin/static/js/14.eed453f7.chunk.js","3a7400890372a009cc55c2dce44ef014"],["/dva-boot-admin/static/js/15.c8f210a3.chunk.js","55fdca2225876da12f5f6c3547e4717e"],["/dva-boot-admin/static/js/2.2b4d6579.chunk.js","40c72e7137b20612dd47d4bbf8d7137f"],["/dva-boot-admin/static/js/3.9c08af60.chunk.js","cbd7b55f70a415b5f17401a2ad9a649e"],["/dva-boot-admin/static/js/4.4fdbcb08.chunk.js","4eed220ecada5ad38c351eb360bb3cc0"],["/dva-boot-admin/static/js/5.9d5d9359.chunk.js","3d4ad5820d476ac2ca4de3df9c45fcfc"],["/dva-boot-admin/static/js/6.9c0222e4.chunk.js","d2440f9cc7bc906bb6a72c8acd15ecaf"],["/dva-boot-admin/static/js/7.d009bfec.chunk.js","23345e07786b16f7e636cd4330d719a1"],["/dva-boot-admin/static/js/8.d8d01a72.chunk.js","f897813c5449524940df0e8a25e3f8c9"],["/dva-boot-admin/static/js/9.aa6786da.chunk.js","830d1b83fbd2c90a1168cd7741079bd1"],["/dva-boot-admin/static/js/main.1a37d849.js","9521f7d0f844620a3df4ccc86150d2a5"],["/dva-boot-admin/static/media/avatar.595f9bc9.jpg","595f9bc9380b1cad5f61fdec19cda60b"],["/dva-boot-admin/static/media/icomoon.11da4f19.svg","11da4f19f54465b5a8dcddebb2ac737a"],["/dva-boot-admin/static/media/icomoon.96d7f1f2.woff","96d7f1f20e056647d4b29728a8d7c39b"],["/dva-boot-admin/static/media/icomoon.d585b42c.eot","d585b42ceaee40e267916bf3371037f3"],["/dva-boot-admin/static/media/icomoon.ea141907.ttf","ea14190751ba8d966844526ec6088bb1"],["/dva-boot-admin/static/media/pattern.c4113510.png","c4113510cff7beeda3fb0f77f2919b63"],["/dva-boot-admin/static/media/topbar-bg.eef71d63.jpg","eef71d63d83b49c46d954e9f41e8ff5e"],["/dva-boot-admin/static/media/workers.3bb77abc.png","3bb77abcf801d53bbda8fe52e4c240b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/dva-boot-admin/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});