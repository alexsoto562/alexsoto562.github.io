#### Question 1: what is react ?

a javascript library for building a user interface

#### Question 2: In calling setState, when would you pick one method of calling this function over the other?

depending whether i wanted to access the prev state

setState(newState) if i wanted to update state on its current value. it takes the new state as an argument
and updates the state with it.

setState(prevState => newState) if i wanted to update the state based on previous value. it takes a function
that receives the prev state as an argument and returns the new state

if you need to update the state based on its current value, use the setState(newState) method.
If you need to access the previous state or update the state based on its previous value, use the
setState(prevState => newState) method.

Example:

```js
import React, {useState} from 'react';

const Example (){
    const [count, setCount] = useState(0)

    function clickCount(){
        //update count using setState(newState) method
        setCount(count + 1);
    }

    function clickDouble(){
        //update count using setState(prevState => newState) method
        setCount(prevCount => prevCount * 2);
    }

    return (
        <div>
        <p>count:{count}</p>
        <button onClick={clickCount}>Increment</button>
        <button onClick={clickDouble}>Double</button>
        </div>
    )
}
export default Example
```

#### Question 3: Is setState a synchronous or async call?

setState function is asynchronous. when you call setState to update the component it does not immediately update the state object. it waits until the next render cycle to apply the update

#### Question 4: What are the different ways that you can call setState?

there are two ways to call setState, using an object or using a callback function that recieves the
prevState as an argument

Example 1: using an object: the setState can be called with an object that represents the new state.
the object can contain one or more properties that will merge into the current state object

Example 2: using callback function: recieves the prev state as an argument and returns an object
representing the new state

```js
import React, {useState} from 'react';

const Example(){
    const[count, setCount] = useState(0);

    function add(){
        //using the object form of state
        setCount({count:count + 1});
    }

    function minus(){
        //using the callback function form of setState
        setCount(prevState => ({ count:preState.count -1}));
    }

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={add}>Add</button>
        <button onClick={minus}>Minus</button>
        </div>
    )
}
export default Example
```

#### Question 5: List some of the major advantages of React?

1: makes it easy to build reusable UI components
2: uses a virtual dom which makes it faster to update UI
3: uses JSX syntax extension that allows you to write html in javascript
4: it has higher performance due to virtual dom and efficient rendering

#### Question 6: what are the limitation of react?

1. it is too complex for new users
2. has performance issues as it renders the dom on every state change
3. can have compatibility issues with other libraries

#### Question 7: what is JSX

jsx is a syntax extension for javascript that is used with React. it allows developers to write html like
code in javascript, which then can render to the web page. its not another language but a syntax.

Example:

```js
import React from "react";

function App() {
  const name = "alex";

  return (
    <div>
      <p>Hello, {name}</p>
      <p>welcome</p>
    </div>
  );
}

export default App;
```

#### Question 8: What is the virtual dom? explain how it works within ReactJs

the virtual dom is a concept in reactJs that allows for efficient updating of the ui without having to rerender the entire page. used to keep track of changes in the ui and to optimize updates.

#### Question 9: why cant browers read JSX?

they cannot read the jsx because it is a javascript syntax. you first need to transpile it to plain js before it can be executed by the brower. it can be done using babel.

#### Question 10: how different is reacts ES6 syntax when compared to ES5?

very different, it is more modern concise and expressive making it easier to write and maintain react.

exmaple 1: arrow functions do not need to have their own 'this' where 'this' refers to the components instance

example 2: introduced class syntax for defining components which made it easier to read than es5 where it had to create constructor functions and prototypes

exmaple 3: introduced let and const which provide block scoping which made declaring variables wihtout hoisting

example 4: deconstructing which allows you to extract vales from arrays and objects and assign them to variables

#### Question 11: differentiate between real dom and virtual dom

real dom: is the conventional way of representing the structure of html. it is the hierarchical tree like structure that contains all the elements and attributes of a webpage . when the state changes the real dom updated the entire page by rerendering the entire html including the parts that havent changed. it can be slow and resource-intensive especially for large web pages resulting in slower experience

virtual dom: lightweight representation of the real dom. it is a javascript object that contains all the information needed to render the ui. whenever the state of the application changes react reacts a new virtual dom representation of the ui. it compares the previous one and computes the minimal number of changes required to update the real dom. once the virtual dom updates the real dom only the modified parts of the webpage get re-rendered making the process faster

#### Question 12: What do you understand from “In React, everything is a component.”

it means that all UI elements are represented as components. a component is a self contained module that contains html markup js logic and styles. components can be divided into two types class and functional. functional is js functions that return react elements while class are es6 classes that inherit from reacts base component class and define a render() method that returns a react element

#### Question 13: Explain the purpose of render() in React.

it is a method in react that is required to return a description of the components ui or markup. the method returns a virutal dom. it updated the virtual dom with the new state and props of the component compare the v-dom with the prev version and calculates the minimum number of changes.it is only responsible for rendering the ui and should not be modify the state of the component or interact with the browser directly.

#### Question 14: How can you embed two or more components into one?

you can embed two or more components into one by simply rendering them inside the parent components jsx. doing this you can create complex UIs with multiple levels of nested components. each components is responsible for a specific part of the UI and be be easily reused in different parts.

#### Question 15: What is Props?

in react props is short for properties which is a way to pass data and configuration information from one component to another. props are read-only and cannot be modified by the child component that recieves them. this makes it easier to maintain and update the UI as the application grows.

#### Question 16: What is a state in React and how is it used?

state is an object that represents the internal state of a component. it allows a component to store and manage data that can change overtime, such as user input or the results of an api call. react will automatically re render the components to reflect the new state.

#### Question 17: how can you update the state of a component

you can use the setState() method. in the example the clickAdd function updates the count state by calling the setCount(count + 1) this updates the state with the new count value and triggers a re-render of the component

Example:

```js
import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function clickAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={clickAdd}>Click me</button>
    </div>
  );
}
export default Count;
```

#### Question 18: what is an arrow function in react? how is it used?

is a shorthand syntax for writing function components and class methods. they offer a concise and more readable way of writing functions that return a value, and they also use 'this' in class components.

Example 1: functional component

```js
import React from "react";

const Greeting = (props) => {
  return <p> hello, {props.name}</p>;
};
export default Greeting;
```

Example 2: class component

```js
import React, { Component } from "react";

class Count extends Componet {
  state = { count: 0 };

  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
export default Count;
```

#### Questions 19: Differentiate between stateful and stateless components. Stateful vs stateless components reacts

Stateful components: also called container components are components that manage their own state. they are responsible for updating the data that is displayed. when the state changes it triggers a re-render of the components and its children.

Stateless components: also called presentational components do not manage their own state. They receive data and props from their parent components and use them to render UI elements. stateless components are simple and lightweight and typically used for presenting data in the UI

#### What are the different phases of React components's lifecycle

the lifecycle can be grouped into three main phases, mounting, updating, and unmounting.

1. Mounting phase: the component is created and inserted into the dom. The following methods are called: constructor(), state getDerivedStateFromProps(), render(), componentDidMount()

2. Updating phase: in this phase the component is updated with new data or state. static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()

3. Unmounting phase: the component is removed form the DOM. componentWillUnmount()

#### Explain the lifecycle methods of React components in detail.

1. constructor(props): this is the first method called when an instance of the component is created. it is used to initialize the components state and to bind event handlers to the component instance.

2. static getDerivedStateFromProps(props, state) this is called every time a component is rendered whether due to change in props or state. it is used to update the components state based on change in props

3. render(): this is a required method that returns the JSX that represents the components UI. this method is called every time the component is rendered.

4. componentDidMount(): this method is called once the component has been mounted into the DOM. it is commonly used to make network requests or to set up event listeners

5. shouldComponentsUpdate( nextProps, nextState): this method is called befor the component is re-rendered. it is used to optomize performance by determining whether the component needs to be re-rendered based on changes in props or state. this method returns a boolean value indicating whether the component shoudl be re-rendered.

6. getSnapshotBeforeUpdate(prevProps, prevState): This method id called right the component is re-rendered. it is used to captire information about the DOM before it is udpated. This method returns a snapshot value that can used in componentDidUpdate()

7. componentDidUpdate(prevProps, prevState, snapshot): this method is called after the component is re-rendered. it is commonly used to update the DOM in response to changes in props or state

8. componentsWillUnmount(): this method is called just before the component is unmounted from the DOM. it is commonly used to clean up any resources that were created in componentDidMount()

9. statis getDerivedStateFromError(error): this is a static method that is called when an error is thrown during rendering. it is used to update the components state in reponse to an error

10. componentDidCatch(error, info): this method is called when an error is thrown during rendering. it is commonly used to log the error or to display an error message to the user.

#### what is an event in React?

an event is a trigger that occurs when the UI with a component such as clicking a button, typing in an input field or scrolling a page. when an event is triggered, React uses an event handler function to respond to the event by updating the components state, re-rendering the component or performing some other actions.

#### How do you create an event handler in React?

in react an event handler is a function that is triggered by a specific event such as a button click or a form submission.

```js
import React, {useState} from 'react';

const Example(){
   function handleClick(){
    console.log('button was clicked')
   }
   return(
    <div>
    <button onClick={handleClick}>click me</button>
    </div>
   )
}
export default Example
```

#### What are synthetic events in React?

synthetic events are a cross brower wrapper around the browers native events, they are called synthetic events because they are created by React rather than directly by the browser.

#### What is a ref in React?

a ref is a way to access the properties and methods of a DOM element or a component instance. it is used to interact wiht the underlying DOM or to access the methods and properties of a component.

example:
-to access the value of an input field
-to focus an inut field or another element
-to access a child components methods or properties

```js
import React from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    console.log("Input value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} ref={inputRef} />
      <button type="submit">submit</button>
    </form>
  );
}
```

#### List some of the cases when you should use Refs

1. accessing input field values: if you need to access the value of an input field in a form you can use a ref to get its value

2. managing focus: you can use refs to manage the focus of an element such as setting the focus to an input field when a component mounts.

3. Animating elements: if you need to animate an element in React, you can use a ref to access the DOM node and apply animations using a library like GSAP or anime.js

4. integrating with third party libraries some third party libraries require direct access to DOM nodes, and refs allows you to provide this access while keeping the logic of your component encapsulated

5. programmatically triggering event: you can use refs to programmatically trigger events on DOM nodes such as triggering a click on a button.

#### How do you modularize code in React?

moduarize code in react is a best practice that involves breaking up your code into smaller, reuseable components. This makes your code easier to understand maintain and test.

1. functional components: are simplar and easier to understand than class components. they promote a more modular structure. functional components are also easier to test as they dont have complex lifecycle

2. Break components down into smaller components: if you find that a components is doing too much consider breaking it down into smaller, more focused components. this can make your code easier to reason about and maintain

3. use higher order to components (HOCs): HOCs are a way to extract common functionality from components and reuse it across multiple components.

4. use render props: Render props are a way to pass data and functionality from a parent component to a child component. this can make your code more modular by allowing you to resure the same logic across multiple components

5. use react hooks: React hooks like useState and useEffect can help you modularize your code by allowing you to extract state and side effectf from your components into reusable hooks

#### How are forms created in React?

Forms in React are creatng by using the <form> element and its associated form inputs

1. create a new component for the form: you can create a new functional or class component for your form

2. defne the form inputs: inside your form component, define the form input you wnat to include such as <input>, <select>, and <textarea> elements

3. Add state to your component: to store the values of the form input, you can use the useState hook to create state variables. For example, you might create a state varibale called username to store the value of a username input

4. handle input changes: to update the state variables when the form inputs change you can add an onChange event handler to each input. then event handler should update the corresponding state variable using the setState function

5. handle form submission: to handle form submission you can add an onSubmit event handler to the form element. The event handler should prevent the default form submission behavior, validate the form inputs, and the submit the form data using a function like fetch()

```js
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
```

#### What do you know about controlled and uncontrolled components?

there are two ways to manage the state of form inputs: controlled components and uncontrolled components.

controlled components: is a form input element whose value is controlled by React State. this mean that the value of the input is set by the state and the state is updated whenever the user types into the input. this allows react to maintain control over the state of the input and allows for validation and error handling to be performing in real time

```js
function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

uncontrolled components: is a form input elements whose value is managed by the DOM . in this case the value of the input is set using a defaultValue or defauledChecke attribute and any changes to the input are not tracked by React. This can be useful for simple forms or for integrating with third party libraries that required access to the DOM.

```js
function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello World" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
```

#### what is a Higher Order Component(HOC)

it is a function that takes a component as an input and returns a new component with additional functionality or props. it returns a new component that enhances or modifies its behavior. they are useful for reusing logic across multiple components.

```js
import React, { useState } from "react";

function withCounter(WrappedComponent) {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount((count) => count + 1);
    }

    return <WrappedComponent {...props} count={count} onClick={handleClick} />;
  };
}

function MyComponent(props) {
  return <div onClick={props.onClick}>Click me! ({props.count})</div>;
}

const EnhancedComponent = withCounter(MyComponent);
```

#### What can you do with HOC?

enables you to reuse code, composition, higher level abstraction, and can help write more modular resuable and maintainable code

1. Reuse logic: you can create an HOC that handles data fetching or authentication logic, and then reuse that HOC in different parts of your application

2. compose components: HOC allow you to combime multiple components into a single one. you can create a HOC that renders a loading spinner while data is being fetched and then combine that HOC with a component that displays the fetched data.

3. Abstract away implementation details: HOCs allow you to abstract away implemnation details of a component and expose a simpler higher level api. you can create a HOC that handles all the state management and data detching for a component and then expose a simpler API for other components.

4. implement cross- cutting concerns: HOCs allow you to implement cross-cutting concerns such as loggin , error handling, or performance tracking across multiple components with duplication code

5. customize components: HOCs allow you to customize components by adding or modifying their behavior or props. for example a drag and drop.

#### What is the significance of keys in React?

key are a special attribute that helps identify which items in a list have changed, been added, or have been removed. React uses keys to optimize the rendering performance and ensure that the state of the components is preserved correctly.

#### What is React Router?

is a library for routing application. it provides a way to define routing rules and map them to specific components or pages in your application.

1. BrowserRouter: a component that provides the routing functionality for your application using the HTML5 API

2. Route: A component that defines a single route in your application, mapping a url to a specific component

3. swtich: a component that renders the first matching route within its children

4: Link a component that creates a hyperlink to a specific URL within your application

#### Why is Switch component used in React Router v4?

it is used to render only the first matching Route component. it is important to use Switch because without it reactv4 would render every route that matches the current URL path

#### Why do we need a Router in React?

a router is used to manage the navigation of an application by mapping URLs to components:

1. Handling multiple views: a router allows you to define multiple views for an application and map them to different URLs. this means that as a user navigates through the application the router can dynamically render the appropriate view based on the current url

2. managing application state: a router can help manage application state by allowing you to define which components should be rendered based on the current URL. this means that as the user navigates thru the applcaition the router can update the state of the application to reflect the current view.

3. Browser compatibility: React router helps to ensure that your application works well accross different browers. this is because the router uses the browsers history API to manage navigation which means the url changes are reflected in the browers address bar and the browsers back and forward buttons

4. easy to use: react router is a simple and easy to use library that provides a declarative way of defining application routes. this makes it easy to manage complex application wiht many views and ensures that your code is organized and easy to maintain

#### List down the advantages of ReactRouter.

1. declarative routing : reactRouter provides a declarative way to define application routes using components and props. this makes it easier to organize and manage complex routes.

2. client side rendering: enables client side rendering which means that the application can be rendered and updated on the client side wihtout the need fro a server to render the inital view.

3. dynamic routing: react router supports dynamic routing which means tht you can dynamically generate routes based on user input or other application state.

4. URL parameters: RR allows you to define and use url parameters which makes it easier to pass data between components and views

5. Nested Routing: RR supports nested routing which allows you to define complex application structures with multiple levels of routes.

6. easy Navigation: RR provides a simple and intuitive api for navigating between routes, including support for brower history and url changes.

7. code splitting: rr support code splitting. which allows you to load different parts of the application on demand, improving performance and reducing the initial load time

8. community support: rr has a large active community of developers who contribute to its development and provide support through forums and other channels.

#### How is React Router different from conventional routing?

1. Client-side rendering: Unlike traditional server-side routing, React Router enables client-side rendering, which means that the application can be rendered and updated on the client side without the need for a server to render the initial view. This can provide a smoother and faster user experience, as well as reduce server load.

2 Declarative routing: React Router uses a declarative approach to routing, where you define your routes using components and props. This makes it easier to organize and manage complex routes, and enables you to reuse components across different parts of your application.

3. Dynamic routing: React Router supports dynamic routing, which means that you can dynamically generate routes based on user input or other application state. This can be useful for building more flexible and interactive applications.

4. URL parameters: React Router allows you to define and use URL parameters, which makes it easy to pass data between components and views. This can simplify your code and improve the user experience by enabling users to easily share or bookmark specific views.

5. Nested routing: React Router supports nested routing, which allows you to define complex application structures with multiple levels of routes. This can be useful for building applications with more advanced navigation needs.

#### What is React.memo ?

react memo is a HOC that is used for optimizing the performance of functional components in react. it is similar to pure components which is used to optimize class components. it is used to avoid unnecessary re-renders of FuncComp by caching the result of the components rendering based on its props. if the props passed to the components do not change, react.memo will return the cached result of the components rendering rather than re-rendering the component

react.memo takes a functional component as its argument and returns a new component that is memorized. the new memorized component only re-renders when props change and it will not re-render if its parent component re-renders but the props remain the same.

#### What is a constructor? Is it required?

CLASS COMPONENT
constuctor is a method that is called when a component is initialized and before it is mounted. it is used to initialize the components state and bind methods to the components context

the constructor is not always required in Functional components. they are designed to be stateless and do not have access to he component instance so there is no need to define a constructor

FUNCTIONAL COMPONENT
in react a constructor is a method that is used to initialize the state and bind event handlers for a class component. since functional components dont have classes or instance methods they dont have contructors. instead functional components use hooks, useState useEffect

```js
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

#### What is the difference between calling a promise and using a `.then` vs using `await`?

when using asynchronous operations you can use Promises or async/await to handle the results of those operations. when you call a promise it returns an object that represents the completion or failure of the asynchronous operation. you can use .then() to attach callbacks that will be invoked when the promise resolves with a value or rejects the error. the method returns another promise allowing you to chain multiple asynchronous operations together.

the async/await syntax is another way to handle Promises that was introduced in ES2017. it allows you to write asynchronous code in a more synchronous style. when you use the await keyword before a promise it pauses the execution of the current function until the promise is resolved with a value or rejected wiht an error.

#### Which of these are required properties of the object in your package.json file?

the package.json is an essential part of any Node.js project. it contains metadata about the project, including the project name, version, dependencies, and other configuration details.

#### What is NPM/Yarn?

NPM and Yarn are package managers for Node.js applications. they are used to manage the dependencies of a project which are third part packages that are required to run the application. Node Package Manager is the default package manager for node.js and it comes bundled wiht Node.js installation. it is used to install manage and publish packages and it provides a vast collection of open source packages in its registry. it uses package.json to manage project dependencies.

Yarn is another package manager for Node.js applications that was created by facebook. it was designed to address some of the shortcomings of Node Package Manager such as slow installation times and non deterministic dependency resolutions. yarn uses a lock file called yarn.lock to ensure developer who works on a project installs the same dependencies wiht the same version numbers. Yarn also has features such as parallel installation and better offline caching.

#### Can different versions of the same package be used in the same application?

it is possible to use different versions of the same package in the same application but it can lead to problems such as version incompatibilities, duplication of code, and increased maintenance overhead.

#### In package.json, how can you ensure that only patch version updates are accepted when npm install is run? (i.e. upgrading from 2.3.0 to 2.3.1 is okay, but not 2.4.0 or greater)

you can specify a version range in the dependencies section of your package . json file to ensure that only patch version updates are accepted when running npm install. you can use the ~ symbol before the version number of the package in the dependencies section. the tilde operator specifies that you only want to allow updates that do not change the left most non zero digit of the version number.

you can also use the ^ carat operator to allow minor updates as well.

#### How come when you declare a variable in any js or jsx file outside of any class, object, or function, it’s not really global to all other files, components?

when you declare a variable in a js or jsx file outside of any class, object, or function it is called a global varibale becuase it is declared in the global scope of the file. however this global variable is not accessible to all other files or components by default.

each js files has its own scope which means that any variable or functions declared in that file are only accessible within that file

#### What are Pure Components?

a pure component is a class component that only renders when its props or state change. it is a performance optimzation technique that can improve the performance of your React application by reducing the number of unnesessary renders. Pure Components are implemented using the React.PureComponent class, which is similar to the regular React.Component class but includes the performance optimization of only rendering when necessary. To create a Pure Component, you can extend the React.PureComponent class instead of the React.Component class.

#### What are the features of React?

1. Declarative programming: React allows developers to create UIs in a declarative way, meaning that they describe the desired state of the UI, and React takes care of updating the actual DOM to match that state. This makes it easier to reason about the behavior of the UI, and it can make it easier to write and maintain code.

2. Component-based architecture: React applications are built using a component-based architecture, where UI elements are broken down into small, reusable components. This makes it easier to manage and update UIs, and it can make code more modular and easier to understand.

3. Virtual DOM: React uses a virtual DOM, which is a lightweight representation of the actual DOM. When the state of a React component changes, React updates the virtual DOM and efficiently calculates the difference between the new and old virtual DOM. It then updates the actual DOM to reflect the changes, minimizing the amount of DOM manipulation required and improving performance.

4. JSX: React uses JSX, which is a syntax extension for JavaScript that allows developers to write HTML-like code directly in their JavaScript. This can make code more readable and easier to write.

5. Unidirectional data flow: React uses a unidirectional data flow, meaning that data flows in a single direction from parent components to child components. This can make it easier to reason about how data is passed between components and can help prevent bugs.

6. Large ecosystem: React has a large and active ecosystem of libraries, tools, and resources that make it easier to build complex applications. This includes libraries like Redux for managing state, React Router for routing, and many others.
