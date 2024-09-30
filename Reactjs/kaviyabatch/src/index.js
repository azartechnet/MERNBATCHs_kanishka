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

/*function Component1()
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
r1.render(<Component2/>)*/

//Constructor using super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"mohamed",age:34};
  }
  render()
  {
    return(
      <>
        <h1>UserName::{this.state.name}</h1>
        <h2>Age is::{this.state.age}</h2>
      </>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

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
        <h2 style={{background:this.state.f1}}>Welcome</h2>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*class Sample extends React.Component {
  render() {
    return <h2>I am a {this.props.c1} Sample!</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Sample c1="red"/>);*/

//React State

/*class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Sample />);*/

//changing the state object
/*class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      brand: "Toyota",
      model: "Camry",
      color: "blue",
      year: 2015
    });
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.handleClick}>Change Car</button>
      </div>
    );
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

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
               <div>
                <h1>Employee Details </h1>
                 {data}
              </div>
              );
               }
};
//ReactDOM.render(<Sample /> ,document.getElementById('root'));

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample /> )*/

//React Event

/*function Football()
{
   const shoot=()=>{
  
      alert("Goal  Scored");
    
   }
   return (
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function Football()
{
  const shoot=(a)=>{
    alert("Goal Scored By "+a);
  }
  return (
    <div>
      <button onClick={()=>shoot("Messi")}>Shoot</button>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
   return<h1>Missed</h1>
}
function MadeGoal()
{
   return<h1>Goal</h1>
}
function Goal(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
   const cars=["BMW","Audi","Toyota"];
   return(
    <ul>
      {cars.map((car)=><Car b1={car}/>)}

    </ul>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React List using For Loop
/*function Car(props) {
  return <li>I am {props.b1}</li>;
}

function Garage() {
  const cars = ["BMW", "Audi", "Toyota"];
  return (
    <ul>
      {cars.map((car, index) => (
        <Car key={index} b1={car} />
      ))}
    </ul>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Garage />);*/

//React keys

/*function Car(props)
{
   return<li>I am a {props.brand} as {props.key}</li>
}
function Garage()
{
  const cars=[
    {id:1,brand:'Ford'},
    {id:2,brand:'BMW'},
    {id:3,brand:'Audi'}
  ];
  return(
    <ul>
      {cars.map((car)=><Car key={car.id} brand={car.brand}/>)
      }
    </ul>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//getDerivedStateFromProps is invoked right before calling the render method, 
//both on the initial mount and on subsequent updates.

//React getDerivedStateFromProps

class Header extends React.Component
{
   constructor(props)
   {
    super(props);
    this.state={count:0};
   }
   static getDerivedStateFromProps(props,state)
   {
    console.log('getDerivedStateFromProps called');
    return{count:props.c1}
   }
   render()
   {
      return(
        <div>
            <h1>Header</h1>
            <p>Count:{this.state.count}</p>
        </div>
      )
   }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header c1="100"/>)

  