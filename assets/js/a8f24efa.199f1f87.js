(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[801],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6460:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"outcomes",title:"Outcomes"},c={unversionedId:"jetstream/outcomes",id:"jetstream/outcomes",isDocsHomePage:!1,title:"Outcomes",description:"This document is a work in progress, tracked as https://github.com/mozilla/jetstream/issues/534.",source:"@site/docs/jetstream/outcomes.md",sourceDirName:"jetstream",slug:"/jetstream/outcomes",permalink:"/jetstream/outcomes",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/outcomes.md",version:"current",frontMatter:{id:"outcomes",title:"Outcomes"},sidebar:"sidebar",previous:{title:"Statistics",permalink:"/jetstream/statistics"},next:{title:"Configuring Jetstream",permalink:"/jetstream/configuration"}},s=[],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is a work in progress, tracked as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/issues/534"},"https://github.com/mozilla/jetstream/issues/534"),"."),(0,a.kt)("p",null,"When complete, it will answer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is an outcome?"),(0,a.kt)("li",{parentName:"ul"},"What can an outcome contain?"),(0,a.kt)("li",{parentName:"ul"},"How do I define an outcome?"),(0,a.kt)("li",{parentName:"ul"},"When should I write a configuration instead?"),(0,a.kt)("li",{parentName:"ul"},"When does Experimenter discover new outcomes?"),(0,a.kt)("li",{parentName:"ul"},"What happens if I change an outcome?"),(0,a.kt)("li",{parentName:"ul"},"How do I know which version outcome was associated with an experiment analysis?")))}l.isMDXComponent=!0}}]);