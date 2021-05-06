(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=b(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?i.a.createElement(d,s(s({ref:t},c),{},{components:a})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(101)),l={id:"statistics",title:"Statistics"},s={unversionedId:"jetstream/statistics",id:"jetstream/statistics",isDocsHomePage:!1,title:"Statistics",description:"Statistics reduce observations of many clients",source:"@site/docs/jetstream/statistics.md",sourceDirName:"jetstream",slug:"/jetstream/statistics",permalink:"/jetstream/statistics",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/statistics.md",version:"current",frontMatter:{id:"statistics",title:"Statistics"},sidebar:"sidebar",previous:{title:"Metrics",permalink:"/jetstream/metrics"},next:{title:"Outcomes",permalink:"/jetstream/outcomes"}},o=[{value:"Pretreatments",id:"pretreatments",children:[]},{value:"Available pretreatments",id:"available-pretreatments",children:[]},{value:"Available statistics",id:"available-statistics",children:[]},{value:"How do I implement a statistic?",id:"how-do-i-implement-a-statistic",children:[]}],c={toc:o};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Statistics reduce observations of many clients\nfrom a single analysis window\nto one or many rows\ndescribing the population."),Object(r.b)("p",null,"Any summarization of the client-level data can be implemented as a statistic."),Object(r.b)("p",null,"For example, a statistic could implement a statistical test,\nlike a Mann-Whitney U test or a Student's ",Object(r.b)("em",{parentName:"p"},"t"),"-test."),Object(r.b)("p",null,"Other statistics summarize the data from a branch\nto a kernel density estimate\nor a cumulative distribution function\nthat can be directly plotted."),Object(r.b)("p",null,"Statistics can summarize each branch of the data,\ncompute pairwise comparisons of each branch to a reference branch,\nor both."),Object(r.b)("p",null,"For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap_mean")," statistic computes\na mean and its bootstrapped 95% confidence interval for each branch,\nas well as bootstrapped CIs for the difference between each branch\nand the reference branch."),Object(r.b)("h2",{id:"pretreatments"},"Pretreatments"),Object(r.b)("p",null,"Sometimes it's necessary to transform a metric before applying a statistic.\nPretreatments are a facility for specifying these transformations."),Object(r.b)("p",null,"It is an error to pass a null value into a statistic.\nData scientists must explicitly handle nulls,\neither by writing a metric with a ",Object(r.b)("inlineCode",{parentName:"p"},"COALESCE()")," clause,\ncoercing nulls to zero with the ",Object(r.b)("inlineCode",{parentName:"p"},"zero_fill")," pretreatment,\nor dropping rows with null values using the ",Object(r.b)("inlineCode",{parentName:"p"},"remove_nulls")," pretreatment."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Don't drop that mic")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Dropping null values for engagement metrics can create misleading results.\nImagine an experiment that forces all but your most committed users to churn:\nif you dropped all the clients that didn't return in the second week,\nyour engagement metrics would skyrocket, since only the die-hards would be left!\nCoercing those nulls to zero instead\nwill accurately reflect the decline in your population's engagement."),Object(r.b)("p",{parentName:"div"},"Dropping nulls can be necessary for performance metrics,\nwhere there's no sensible way to aggregate users that didn't return."))),Object(r.b)("h2",{id:"available-pretreatments"},"Available pretreatments"),Object(r.b)("p",null,"Supported pretreatments are listed below. Some pretreatments accept parameters, which are listed below the name of the pretreatment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"remove_nulls"),": Remove rows with null values in the metric column"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"remove_indefinites"),": Remove rows with null or infinite values in the metric column"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"censor_highest_values"),": Removes the highest ",Object(r.b)("em",{parentName:"li"},"fraction")," of rows in the metric column.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fraction"),": Fraction of rows to remove. Defaults to 1 - 1e-5."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log"),": Log-transforms the metric column.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"base"),": Base of the logarithm. Defaults to 10.0."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zero_fill"),": Replace null values in the metric column with zero.")),Object(r.b)("h2",{id:"available-statistics"},"Available statistics"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Statistics")," that Jetstream knows about are listed below. Some statistics accept parameters, which are listed below the name of the statistic."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"binomial"),": Binomial outcome with bootstrapped CIs for differences between branches"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bootstrap_mean"),": Mean with bootstrapped confidence intervals. Removes the top 0.001% of values by default.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"num_samples"),": Number of bootstrap samples to compute. Defaults to 10,000."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"drop_highest"),": Fraction of highest samples to drop. Defaults to 1e-4."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"count"),": A count of rows"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deciles"),": Bootstrapped confidence intervals for differences between branches at deciles",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"num_samples"),": Number of bootstrap samples to compute. Defaults to 10,000."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"empirical_cdf"),": A sampled eCDF of each branch's distribution for a metric. Parameters are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log_space"),": Whether the CDF should be sampled at geometric (instead of linear) intervals (default: false)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grid_size"),": Number of samples (default: 256)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"kernel_density_estimate"),": A sampled KDE of each branch's distribution for a metric. Parameters are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bandwidth"),", ",Object(r.b)("inlineCode",{parentName:"li"},"adjust"),", ",Object(r.b)("inlineCode",{parentName:"li"},"kernel"),": see ",Object(r.b)("a",{parentName:"li",href:"https://www.statsmodels.org/stable/generated/statsmodels.nonparametric.kde.KDEUnivariate.fit.html"},"https://www.statsmodels.org/stable/generated/statsmodels.nonparametric.kde.KDEUnivariate.fit.html")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gridsize"),": Number of samples (default: 256)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log_space"),": Whether the KDE should be sampled at geometric (instead of linear) intervals (default: false)")))),Object(r.b)("h2",{id:"how-do-i-implement-a-statistic"},"How do I implement a statistic?"),Object(r.b)("p",null,"Statistics are defined in code at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/statistics.py"},"https://github.com/mozilla/jetstream/blob/main/jetstream/statistics.py"),"."),Object(r.b)("p",null,"Statistics should inherit from\nand implement the interface described by\nthe abstract ",Object(r.b)("inlineCode",{parentName:"p"},"Statistic")," base class."),Object(r.b)("p",null,"Most statistics only need to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"transform")," method,\nwhich accepts a ",Object(r.b)("inlineCode",{parentName:"p"},"DataFrame")," representing a single analysis window,\na metric label describing the name of the column to analyze, and\na branch label representing a reference branch,\nand returns a ",Object(r.b)("inlineCode",{parentName:"p"},"StatisticResultCollection"),"."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"StatisticResultCollection")," is a wrapper around a ",Object(r.b)("inlineCode",{parentName:"p"},"StatisticResult"),".\nThe meaning of the values on a StatisticResult is elaborated in the\n",Object(r.b)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html#statistics-tables"},"statistics table schema documentation"),"."))}b.isMDXComponent=!0}}]);