"use strict";(self.webpackChunkporto=self.webpackChunkporto||[]).push([[420],{9407:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=s(4848),t=s(8453);const i={sidebar_position:4},r="Actions",a={id:"Components/Main Components Principles/Actions",title:"Actions",description:"Actions represent the Use Cases of the Application (i.e., the actions that can be performed by a user or software in the application).",source:"@site/docs/Components/Main Components Principles/Actions.md",sourceDirName:"Components/Main Components Principles",slug:"/Components/Main Components Principles/Actions",permalink:"/docs/Components/Main Components Principles/Actions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Main Components Principles/Actions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/docs/Components/Main Components Principles/Controllers"},next:{title:"Tasks",permalink:"/docs/Components/Main Components Principles/Tasks"}},c={},l=[{value:"Principles",id:"principles",level:2},{value:"Note",id:"note",level:3},{value:"Pseudo Code Example",id:"pseudo-code-example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"actions",children:"Actions"}),"\n",(0,o.jsx)(n.p,{children:"Actions represent the Use Cases of the Application (i.e., the actions that can be performed by a user or software in the application)."}),"\n",(0,o.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Every Action should be responsible for performing a single use case in the application."}),"\n",(0,o.jsx)(n.li,{children:"An Action may retrieve data from Tasks and pass data to another Task."}),"\n",(0,o.jsx)(n.li,{children:"An Action may call multiple Tasks, and can call Tasks from other Containers within the same Section."}),"\n",(0,o.jsx)(n.li,{children:"Actions may return data to the Controller."}),"\n",(0,o.jsx)(n.li,{children:"Actions should not return a response (the Controller's job is to return a response)."}),"\n",(0,o.jsx)(n.li,{children:"An Action should not call another Action. Instead, if you need to reuse a big chunk of business logic in multiple Actions, and this chunk is calling some Tasks, you can create a SubAction."}),"\n",(0,o.jsx)(n.li,{children:"Actions are mainly used from Controllers. However, they can be used from Event Listeners, Commands, and/or other Classes, but they should not be used from Tasks."}),"\n",(0,o.jsxs)(n.li,{children:["Every Action should have only a single function named ",(0,o.jsx)(n.code,{children:"run()"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The Action main function ",(0,o.jsx)(n.code,{children:"run()"})," can accept a Request Object in the parameter."]}),"\n",(0,o.jsx)(n.li,{children:"Actions are responsible for handling all expected Exceptions."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,o.jsx)(n.p,{children:"Ideally, your Action file should be as clean as possible, with no code of its own. It should simply be an array that outlines a series of Tasks to be carried out in sequence, following the pipeline design pattern. However, if you prefer to add some business logic inside, that's fine, but it should be done carefully."}),"\n",(0,o.jsx)(n.h3,{id:"pseudo-code-example",children:"Pseudo Code Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JS",children:"class MyAction {\n\n    public function run() {\n        return [MyTask1, MyTask2, MyTask3]];\n    }\n}\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);