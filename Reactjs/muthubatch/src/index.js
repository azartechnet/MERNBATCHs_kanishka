import React from 'react';
import ReactDOM from 'react-dom/client';

//Basic Rendering

/*const Sample=()=>{
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
const roo = ReactDOM.createRoot(document.getElementById('root'));
roo.render(<Sample/>)*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>Today Date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX

/*const myelem=React.createElement('h1',null,'Welcome')
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(myelem)*/

//React with JSX

/*const myelem=<h1>Welcome</h1>

const r3=ReactDOM.createRoot(document.getElementById('root'))
r3.render(myelem)*/

//React List

/*const MyElem=()=>{
  return(
    <>
      <ul>
        <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
      </ul>
      <ol>
      <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
      </ol>
    </>
  )
}

 const r4=ReactDOM.createRoot(document.getElementById('root'))
 r4.render(<MyElem/>)*/

 //Conditional Rendering
 //Nested if else,else if ladder,switch stmt

 /*const x=12
 let text="";
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
  text="hello"
 }
 const MyElem=()=>{
  return( 
    <div>
      <h1>{text}</h1>
    </div>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'));
 r1.render(<MyElem/>)*/

 //importing CSS

 import './index.css';

 const App=()=>{
  return(
    <>
       <h1 className='s1'>Welcome</h1>
    </>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'));

  r1.render(<App/>)
