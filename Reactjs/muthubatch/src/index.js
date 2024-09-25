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

const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>Today Date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)