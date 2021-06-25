(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return o},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),s={},c={unversionedId:"marlin-in-pictures",id:"marlin-in-pictures",isDocsHomePage:!1,title:"PyMarlin in Pictures",description:"pymarlin is designed to improve agility, scalability, code manageability, all while",source:"@site/docs/marlin-in-pictures.md",sourceDirName:".",slug:"/marlin-in-pictures",permalink:"/PyMarlin/docs/marlin-in-pictures",editUrl:"https://github.com/microsoft/PyMarlin/edit/master/website/docs/marlin-in-pictures.md",version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/PyMarlin/docs/installation"},next:{title:"Checkpointing",permalink:"/PyMarlin/docs/examples/checkpointing"}},o=[{value:"Classification task example",id:"classification-task-example",children:[{value:"Class Diagram",id:"class-diagram",children:[]},{value:"Training",id:"training",children:[]},{value:"Data Processing",id:"data-processing",children:[]},{value:"Training Lifecycle",id:"training-lifecycle",children:[]}]}],l={toc:o};function p(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pymarlin is designed to improve agility, scalability, code manageability, all while\nproviding flexibility and control across DL environments. Due to this, pymarlin is divided\ninto various components correspoinding to extensible classes, only a few of which need to\nbe implemented by users. As shown in the following class diagram, the key clases that need\nto be implemented are ",(0,r.kt)("strong",{parentName:"p"},"DataInterface")," and ",(0,r.kt)("strong",{parentName:"p"},"ModuleInterface"),". These interact with ",(0,r.kt)("strong",{parentName:"p"},"Trainer")," which\nacts as an orchestrator, and ",(0,r.kt)("strong",{parentName:"p"},"TrainerBackend"),", which themselves are extensible and configurable via\narguments."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2450).Z})),(0,r.kt)("h2",{id:"classification-task-example"},"Classification task example"),(0,r.kt)("p",null,"Below you can find a collection of class and sequence diagrams\nfor a classification task that exemplifies the use of pymarlin. The example\nshown implements the DataInterface and ModuleInterface for classifying tweet\nsentiment, as TweetSentData and TweetSentModule. The class diagram\nillustrates which classes correspond to built-in pymarlin classes, user-extended\nclasses specific to the scenario, and some important external depenencies used."),(0,r.kt)("h3",{id:"class-diagram"},"Class Diagram"),(0,r.kt)("p",null,"This diagram shows the classes implemented for the classification task, as well as\nrelationships between the important pymarlin modules. Here, ModuleInterface has been\nextended as ",(0,r.kt)("em",{parentName:"p"},"TweetSentModule"),", DataInterface as ",(0,r.kt)("em",{parentName:"p"},"TweetSentDataModule"),", and\ndata processing is managed by classes ",(0,r.kt)("em",{parentName:"p"},"Stage1")," and ",(0,r.kt)("em",{parentName:"p"},"Stage2"),", extended from DataProcessor. As a TrainerBackend, SingleProcess class is used for this example.\nMost customization and settings come from modifying default TrainerArguments\nvia the config.yaml file."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2520).Z})),(0,r.kt)("h3",{id:"training"},"Training"),(0,r.kt)("p",null,"The following sequence diagram illustrates how to train the above classification\nmodel, with emphasis on the module instanciation users need to perform as part\nof their main script. Details on Data Processing and the Training Lifecycle referenced\nin this diagram can be found below."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2049).Z})),(0,r.kt)("h3",{id:"data-processing"},"Data Processing"),(0,r.kt)("p",null,"Sequence diagram for the data processing prior to training."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(221).Z})),(0,r.kt)("h3",{id:"training-lifecycle"},"Training Lifecycle"),(0,r.kt)("p",null,"Sequence diagram for the training loop."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(177).Z})))}p.isMDXComponent=!0},2450:function(e,t,n){"use strict";t.Z=n.p+"assets/images/classes-0330eae245154c1f6bfafee4f09e001b.svg"},221:function(e,t,n){"use strict";t.Z=n.p+"assets/images/classification_data_processing-1072b7550365a37a6f0d4cfb39cd0351.svg"},2049:function(e,t,n){"use strict";t.Z=n.p+"assets/images/classification_train-38d104e0fb9aca0ee01dc39b3d7cbbed.svg"},2520:function(e,t,n){"use strict";t.Z=n.p+"assets/images/classifier-09d77f63e72b2df9d32cf665e0a9cece.svg"},177:function(e,t,n){"use strict";t.Z=n.p+"assets/images/training_lifecycle-780014c3808168b6dcaeda7525c1aeec.svg"}}]);