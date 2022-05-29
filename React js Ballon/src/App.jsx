import "./App.css";
import { useState } from "react";


function App() {
  const[value,setvalue]= useState("")
  const [visible, setVisible] = useState([
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);
  const [vs, setVs] = useState(["", "", "", "", ""]);
  const [input,setinput] = useState('')
  

  var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor5 = Math.floor(Math.random() * 16777215).toString(16);
  const [color,setcolor] = useState({randomColor1,randomColor2,randomColor3,randomColor4,randomColor5})

  console.log(color)
  
  

const handleSubmit=()=>{
  setinput(value)
  console.log(value)
  for (let i = 0; i < 5; i++) {
    if (i == value - 1) {
      visible[i] = "";
      vs[i] = "none";
    } else if (visible[i] == "" || vs[i] == "none") {
      visible[i] = "";
      vs[i] = "none";
    } else {
      visible[i] = "none";
      vs[i] = "";
    }
  }
}


const remove = (v) => {
  setinput(v)
  for (let i = 0; i < 5; i++) {
    if (i == v - 1) {
      visible[i] = "none";
      vs[i] = "";
      break;
    } 
   
  }
};


 

  

  return (
    <div className="App">
      <div className="row1">
        <div className="Circle"  onClick={() => {remove(1);}} style={{ background: `#${color.randomColor1}` , display: `${visible[0]}`}}>1</div>
        <div className="Circle"  onClick={() => {remove(2);}} style={{ background: `#${color.randomColor2}` , display: `${visible[1]}`}}>2</div>
        <div className="Circle"  onClick={() => {remove(3);}} style={{ background: `#${color.randomColor3}` , display: `${visible[2]}`}}>3</div>
        <div className="Circle"  onClick={() => {remove(4);}} style={{ background: `#${color.randomColor4}` , display: `${visible[3]}`}}>4</div>
        <div className="Circle"  onClick={() => {remove(5);}} style={{ background: `#${color.randomColor5}` , display: `${visible[4]}`}}>5</div>
      </div>
      <div className="row2">
        <div className="Circle1"  id="1" style={{ background: `#${color.randomColor1}` , display: `${vs[0]}`}}>1</div>
        <div className="Circle1"  id="2" style={{ background: `#${color.randomColor2}` , display: `${vs[1]}`}}>2</div>
        <div className="Circle1"  id="3" style={{ background: `#${color.randomColor3}` , display: `${vs[2]}`}}>3</div>
        <div className="Circle1"  id="4" style={{ background: `#${color.randomColor4}` , display: `${vs[3]}`}}>4</div>
        <div className="Circle1"  id="5" style={{ background: `#${color.randomColor5}` , display: `${vs[4]}`}}>5</div>
      </div>
      <div className="row3">
        <h1>Enter the Number to Shoot</h1>
       <input type="Number" id="num" name="num" placeholder="Enter your Number"  onChange={(e)=>{setvalue(e.target.value)}}/>
       <br />
       <br />
        <button onClick={handleSubmit}>Submit</button>
        
    
      
       <h1></h1>
     
       
      </div>
    </div>
  );
}

export default App;
