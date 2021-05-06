(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[691],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},s={unversionedId:"desktop-migration-guide",id:"desktop-migration-guide",isDocsHomePage:!1,title:"Migration Guide (JS)",description:"This guide will help you integrate ExperimentAPI.jsm in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development.",source:"@site/docs/desktop-migration-guide.md",sourceDirName:".",slug:"/desktop-migration-guide",permalink:"/desktop-migration-guide",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-migration-guide.md",version:"current",frontMatter:{id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},sidebar:"sidebar",previous:{title:"Nimbus Feature API (JS)",permalink:"/desktop-feature-api"},next:{title:"Desktop Rollouts",permalink:"/desktop-rollouts"}},u=[{value:"Create a new feautre",id:"create-a-new-feautre",children:[]},{value:"Switch Services.prefs usages to NimbusFeatures",id:"switch-servicesprefs-usages-to-nimbusfeatures",children:[]},{value:"Tests",id:"tests",children:[]}],l={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will help you integrate ",(0,a.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development."),(0,a.kt)("p",null,"In order to use ",(0,a.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," your code must be able to import ",(0,a.kt)("inlineCode",{parentName:"p"},"jsm"),"s in the parent process or a privileged child process."),(0,a.kt)("h2",{id:"create-a-new-feautre"},"Create a new feautre"),(0,a.kt)("p",null,"Take a look a the ",(0,a.kt)("a",{parentName:"p",href:"desktop-feature-api"},"Desktop Feature API docs")," to register a new feature in the manifest. If you are already using Firefox preferences to experiment using Normandy, you can add those as ",(0,a.kt)("inlineCode",{parentName:"p"},"fallbackPref")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// in ExperimentAPI.jsm\nconst MANIFEST = {\n  // Our feature name\n  aboutwelcome: {\n    description: "The about:welcome page",\n    // This is a short-form for an "enabled" property\n    enabledFallbackPref: "browser.aboutwelcome.enabled",\n    variables: {\n      // Additional (optional) values that we can control\n      // The name of these variables is up to you\n      skipFocus: {\n        type: "boolean",\n        fallbackPref: "browser.aboutwelcome.skipFocus",\n      },\n    },\n  },\n};\n\n// In firefox.js\npref("browser.aboutwelcome.enable", true);\npref("skipFocus", false);\n')),(0,a.kt)("h2",{id:"switch-servicesprefs-usages-to-nimbusfeatures"},"Switch Services.prefs usages to NimbusFeatures"),(0,a.kt)("p",null,"Anywhere in the code your are using ",(0,a.kt)("inlineCode",{parentName:"p"},"Services.prefs")," to get values, use ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusFeatures")," instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Services.prefs.getBoolPref("browser.aboutwelcome.enabled");\n')),(0,a.kt)("p",null,"becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"NimbusFeature.aboutwelcome.isEnabled();\n")),(0,a.kt)("h2",{id:"tests"},"Tests"),(0,a.kt)("p",null,"If you've configured fallback preferences your tests should pass, but we recommend also using the the ",(0,a.kt)("a",{parentName:"p",href:"desktop-frontend-testing"},"Testing Guide")," to add tests for your feature that enroll experiment configurations."),(0,a.kt)("p",null,"For more examples and usecases please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ev75pG0nAM1lz53WuPQkWqykUlZMmZRbx8wzvvn5DhU/edit#heading=h.hvm8985z4f8s"},"SDK Docs"),"."))}p.isMDXComponent=!0}}]);