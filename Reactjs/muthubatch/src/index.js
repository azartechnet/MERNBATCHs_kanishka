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

 /*import './index.css';

 const App=()=>{
  return(
    <>
       <h1 className='s1'>Welcome</h1>
    </>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'));

  r1.render(<App/>)*/

  //Else if ladder

  /*const GradeSystem=()=>{
    let grade=85;
    const studentmark=prompt("Enter the Your marks");
    if(studentmark>=90)
    {
      alert("A grade");
    }
    else if(studentmark>=70)
    {
       alert("B grade");
    }
    else if(studentmark>=60)
    {
       alert("C grade");
    }
    else
    {
       alert("D grade");
    }
    return(
      <div>
        <h1>Grade System</h1>
        <p>Grade is {grade}</p>
      </div>
     
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<GradeSystem/>)*/

  //Switch Statement

  /*const  SwitchStatement=()=>{
    let day="Monday";
    switch(day){
      case "Monday":
        alert("Today is Monday");
        break;
        case "Tuesday":
          alert("Today is Tuesday");
          break;
          case "Wednesday":
            alert("Today is Wednesday");
            break;
            case "Thursday":
              alert("Today is Thursday");
              break;
              case "Friday":
                alert("Today is Friday");
                break;
                case "Saturday":
                  alert("Today is Saturday");
                  break;
                  case "Sunday":
                    alert("Today is Sunday");
                    break;
                    default:
                      alert("Invalid day");
                      }
                      return(
                        <div>
                          <h1>Switch Statement</h1>
                          <p>Today is {day}</p>
                        </div>
                        )
                        }
                        const r2=ReactDOM.createRoot(document.getElementById('root'))
                        r2.render(<SwitchStatement/>)*/

  //Class Component

  /*class Sample extends React.Component
  {
     render()
     {
      return(
        <div>
          <h1>Welcome</h1>
        </div>
      )
     }
  }
                     
  const r2=ReactDOM.createRoot(document.getElementById('root'))
  r2.render(<Sample/>)*/

  //Function Compoentent

  /*function Sample(props)
  {
     return(
       <div>
        <h1>Welcome</h1>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
       </div>
     )
  }
  const r2=ReactDOM.createRoot(document.getElementById('root'))
  r2.render(<Sample name="azar" age="34"/>)*/

  //Component in Component

  /*function  Sample()
  {
    return(
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
  function  Sample2() 
  {
    return(
      <div>
         <h1>Hello</h1>
         <Sample/>
      </div>
      )
  }

   const r2=ReactDOM.createRoot(document.getElementById('root'))
   r2.render(<Sample2/>)*/

   //Component Constructor

   /*class Sample extends React.Component
   {
    constructor(props)
    {
      super(props)
      this.state={name:"azar",age:34}
    }
    render()
    {
      return(
        <div>
            <h1>Welcome</h1>
             <h1>{this.state.name}</h1>
             <h2>{this.state.age}</h2>

        </div>
      )
    }
   }
   const r2=ReactDOM.createRoot(document.getElementById('root'))
   r2.render(<Sample/>)*/

   //constructor using props

   /*class Sample extends React.Component
   {
    constructor(props)
    {
      super(props);
      this.state={f1:'green'}
    }
    render()
    {
      return(
        <div>
          <h1>Welcome</h1>
          <h1>{this.props.f2}</h1>
          <h2>{this.state.f1}</h2>
        </div>
      )
    }
   }

   const r2=ReactDOM.createRoot(document.getElementById('root'))
    r2.render(<Sample f2="blue"/>)*/

    //Changing the state objecct

/*class Sample extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state = {
       emp:{
          id:1002,
          name:"azar",
          city:"Lahore"
       },
       showData:false
  };
}
showdata(){
  this.setState({showData:true });
}
 hideData(){
   this.setState({showData:false});
 }
  render()
   {
     let data ;
      if (this.state.showData== true) 
      {
         data= <div><b>City :</b>{this.state.emp.city}<b>Id::</b>{this.state.emp.id}<br/>
           <button onClick={this.hideData.bind(this)} >Hide Data</button></div>;
      }
      else
       {
         data= <button onClick={this.showdata.bind(this)} >Show Data</button>;
          }
            return (
               <div className="App">
                <h1>Employee Details </h1>
                 {data}
              </div>
              );
               }
};


const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample /> )*/

//React Event

/*function Football()
{
   const shoot=()=>{
    alert("Goal")
   }
   return(
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)*/

//Events

function Football()
{
    const shoot=(a)=>{
      alert("Goal"+a)
    }
    return(
      <div>
        <button onClick={()=>shoot(10)}>Shoot</button>
      </div>
    )
}
 
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)
     
          
