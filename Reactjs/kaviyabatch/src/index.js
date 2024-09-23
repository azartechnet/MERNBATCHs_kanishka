import React from 'react';
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const Sample=()=>{
  return(
    <div>
      <h1>Welcome</h1>

    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>{username}</h1>
      <p>Today date:{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX

/*const myelm1=React.createElement('h1',null,'Welcome')
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(myelm1)*/

//React with JSX

/*const myelem=<h1>Welcome</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//React List

/*const Myelem=()=>{
  return(
    <>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul>
      <ol>
      <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ol>
    </>
     
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//Conditional Rendering
//Nested if else,else if ladder,switch statment
/*const x=10
let text=""
if(x>10)
{
  text="goodbye"
}
else if(x==10)
{
  text="ten"
}
else
{
  text="x is less than 10"
}
const Myelem=()=>{
  return(
    <div>
      <h1>Hello{text}</h1>
    </div>
  )
}
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Myelem/>)*/

//importing css and implementing bootstrap

/*import './index.css';

const App=()=>{
  return(
    <div className='container'>
        <h1 className='ss'>Welcome</h1>
        <form>
          <input type='submit' className='btn btn-info' value="Login"/>
        </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//class component

/*class Sample extends React.Component
{
   render()
   {
    return(
      <div>
        <h1>HelloWorld</h1>
      </div>
    )
   }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component

/*function Sample()
{
   return(
    <div>
      <h1>Welcome</h1>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component with props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}</h1>
      <h2>Hello{props.age}</h2>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="18"/>)*/

//Props another example

/*function Greeting(props)
{
  return(
    <>
       <h1>Hello,{props.user}</h1>
       <h2>Hello,{props.age}</h2>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting user="azar" age="23"/>)*/

//Components  in Components 

function Component1()
{
  return(
    <div>
      This is Component1
    </div>
  )
}
function Component2()
{
  return(
    <div>
      This is Component2
      <Component1/>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>)