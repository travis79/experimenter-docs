(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[545],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1138:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"android-custom-targeting",title:"Adding new targeting attributes to Android"},d="Adding new targeting attributes to Android",p={unversionedId:"android-custom-targeting",id:"android-custom-targeting",isDocsHomePage:!1,title:"Adding new targeting attributes to Android",description:"This page demonstrates how to add new targeting attributes to Android, enabling experiment creators more specific targeting.",source:"@site/docs/android-custom-targeting.md",sourceDirName:".",slug:"/android-custom-targeting",permalink:"/android-custom-targeting",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/android-custom-targeting.md",tags:[],version:"current",frontMatter:{id:"android-custom-targeting",title:"Adding new targeting attributes to Android"}},s=[{value:"Adding the attribute to the application",id:"adding-the-attribute-to-the-application",children:[{value:"How to add a new attribute",id:"how-to-add-a-new-attribute",children:[]}]},{value:"Adding the attribute on experimenter",id:"adding-the-attribute-on-experimenter",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-new-targeting-attributes-to-android"},"Adding new targeting attributes to Android"),(0,r.kt)("p",null,"This page demonstrates how to add new targeting attributes to Android, enabling experiment creators more specific targeting.\nFor more general documentation on targeting custom audiences, check out ",(0,r.kt)("a",{parentName:"p",href:"/experiment-owners/custom-audiences"},"the custom audiences docs")),(0,r.kt)("h2",{id:"adding-the-attribute-to-the-application"},"Adding the attribute to the application"),(0,r.kt)("p",null,"The Nimbus SDK exposes a new ",(0,r.kt)("inlineCode",{parentName:"p"},"customTargetingAttributes")," parameter in its initializer that is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, String>")," map. We can take advantage of this parameter to pass in new targeting attributes without modifying the Nimbus SDK at all."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A current limitation is that both the key and the value of the targeting attribute are ",(0,r.kt)("strong",{parentName:"p"},"strings"),". Please reach out to the Nimbus SDK team for any targeting attributes that require integer comparison, or any other richer ",(0,r.kt)("inlineCode",{parentName:"p"},"JEXL")," expressions that cannot be done with strings."))),(0,r.kt)("h3",{id:"how-to-add-a-new-attribute"},"How to add a new attribute"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix/blob/main/app/src/main/java/org/mozilla/fenix/experiments/NimbusSetup.kt#L61"},"NimbusSetup.kt")," ",(0,r.kt)("inlineCode",{parentName:"p"},"NimbusAppInfo")," now optionally takes in a map ",(0,r.kt)("inlineCode",{parentName:"p"},"customTargetingAttributes")," that will be used to add custom targeting. Simply add a new key-value pair to the map and it will be available for targeting. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val appInfo = NimbusAppInfo(\n    appName = "fenix",\n    channel = BuildConfig.BUILD_TYPE,\n    customTargetingAttributes = mapOf(\n        "newTargetingAttributeName" to "targetingAttributeValue",\n    )\n)\n')),(0,r.kt)("p",null,"Note that since we need to add the targeting attributes on the client code, the attribute changes will have to ride the trains before they are available for targeting."),(0,r.kt)("h2",{id:"adding-the-attribute-on-experimenter"},"Adding the attribute on experimenter"),(0,r.kt)("p",null,"After the targeting attribute is ready on the app, you will need to modify experimenter to allow creating experiments that target the attribute you created. Follow the instructions on ",(0,r.kt)("a",{parentName:"p",href:"/experiment-owners/custom-audiences#how-to-add-a-new-custom-audience"},"the custom audiences page")," to add the new targeting on experimenter."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The targeting ",(0,r.kt)("inlineCode",{parentName:"p"},"JEXL")," expression on experimenter ",(0,r.kt)("strong",{parentName:"p"},"must")," use the same name as the key given to the SDK. For example, if the app defines a key-value pair, with key ",(0,r.kt)("inlineCode",{parentName:"p"},"isFirstRun"),". experimenter expression must use the same name (i.e ",(0,r.kt)("inlineCode",{parentName:"p"},"isFirstRun"),")."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out this PR for an example on how to add new targeting attributes for Android: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix/pull/20642"},"https://github.com/mozilla-mobile/fenix/pull/20642")),(0,r.kt)("li",{parentName:"ul"},"Check out this PR for an example on how to add new targeting attributes to experimenter: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla/experimenter/pull/6257"},"https://github.com/mozilla/experimenter/pull/6257"))))}m.isMDXComponent=!0}}]);