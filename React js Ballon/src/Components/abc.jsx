import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState([
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);
  const [num, setNum] = useState(0);
  const [vs, setVs] = useState(["", "", "", "", ""]);
  

  function ballon(value) {
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

    console.log(visible);
    setVisible(visible);
    setVs(vs);
  }



  const handleshoot = (value) => {
    ballon(value);
  };



  const rshoot = (v) => {
    console.log(v);
    visible[v - 1] = "none";
    vs[v - 1] = "";
    setVisible(visible);
    setVs(vs);
  };
  return (
    <div className="App">
      <h1>Sanket</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      {data.map((e) => {
        return (
          <div>
            <h2>{e}</h2>
          </div>
        );
      })}
      <hr />
      <input onChange={(e) => setNum(e.target.value)} />
      <button
        onClick={() => {
          handleshoot(num);
        }}
      >
        Shoot
      </button>
      <div className="box">
        <div
          style={{ border: "1px solid black", height: "400px", width: "400px" }}
        >
          {" "}
          empty
          <div
            className="circle"
            id="one"
            onClick={() => {
              rshoot(1);
            }}
            style={{ background: "red", display: `${visible[0]}` }}
          >
            1
          </div>
          <div
            className="circle"
            id="two"
            onClick={() => {
              rshoot(2);
            }}
            style={{ background: "yellow", display: `${visible[1]}` }}
          >
            2
          </div>
          <div
            className="circle"
            id="three"
            onClick={() => {
              rshoot(3);
            }}
            style={{ background: "green", display: `${visible[2]}` }}
          >
            3
          </div>
          <div
            className="circle"
            id="four"
            onClick={() => {
              rshoot(4);
            }}
            style={{ background: "orange", display: `${visible[3]}` }}
          >
            4
          </div>
          <div
            className="circle"
            id="five"
            onClick={() => {
              rshoot(5);
            }}
            style={{ background: "blue", display: `${visible[4]}` }}
          >
            5
          </div>
        </div>
        <div>
          {" "}
          <div
            className="circle"
            id="1"
            style={{ background: "red", display: `${vs[0]}` }}
          >
            1
          </div>
          <div
            className="circle"
            id="2"
            style={{ background: "yellow", display: `${vs[1]}` }}
          >
            2
          </div>
          <div
            className="circle"
            id="3"
            style={{ background: "green", display: `${vs[2]}` }}
          >
            3
          </div>
          <div
            className="circle"
            id="4"
            style={{ background: "orange", display: `${vs[3]}` }}
          >
            4
          </div>
          <div
            className="circle"
            id="5"
            style={{ background: "blue", display: `${vs[4]}` }}
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
