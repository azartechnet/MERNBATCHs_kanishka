import React from 'react';
import ReactDOM from 'react-dom/client';


const Sample=()=>{
  return(
    <div>
      <h1>This is Heading...</h1>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);

