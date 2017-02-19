#Notice anything new in our .gitignore? There are actually multiple .gitignore files in this project, can you find them all?
We have .gitignore files in server and client directories. We found a new thing, 'yarn', in the client/.gitignore. 

#Note also that there are now multiple build.gradle files as well! Why is this?
We have two build.gradle files, one in client and the other in server, in order to build the client and server separately.   

#What are a couple of these new tools? Explain what some of these new tools do?
Angular, jquery, typescript, webpack, and bootstrap.
- `AngularJS`: `AngularJS` is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.
- `Typescript`: `Typescript` is a typed superset of JavaScript that compiles to plain JavaScript.

#How does the navbar work in this project? Is our SparkJava server the only thing doing routing?
navbar creates a navigation bar on the client side. In this lab we also have `app.routes.js` that does routing.

#What does the user-list.service.ts do? Why is it not just done in the user-list.component.ts?
The user-list.service.ts is injected in the user-list.component.ts. It provides two operators: "getUsers" and "getUserById" to create a simple sequence with zero, one or more elements. 

