/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function ListMenu() {
  return (
    <ul style={{ display: "flex" }}>
      <li style={{ margin: "0 20px", listStyle: "none" }}>Menu 1</li>
      <li style={{ margin: "0 20px", listStyle: "none" }}>Menu 2</li>
      <li style={{ margin: "0 20px", listStyle: "none" }}>Menu 3</li>
    </ul>
  );
}

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "skyblue",
        height: "100px",
      }}
    >
      <div>
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDhfMTYy%2FMDAxNjYyNjM3MTc1Njkx.KDWWwZr0M_5XptUnR-uc2m-YePGt9pXU_SKY4uTUI4Qg.21i3GPda3VObYw-gFhzx2SAMUxMUS68DFg7La7SJqcgg.JPEG.661021a%2Fg25eca1e1e322982cc3deaca3e79bd8c0231605c2f8606883b8ca1b0cf159544a370aa4d3d99.jpg&type=sc960_832"
          style={{ width: "100px", height: "100px" }}
          alt="rainbow"
        />
      </div>
      <div>
        <ListMenu></ListMenu>
      </div>
    </header>
  );
}
//-------------------------------------------------------------------------------------
function GoodCheck() {
  let [good, SetgoodHamsu] = useState([0, 0, 0, 0]);

  let [title, SetTitle] = useState([
    "좋은글 올려주세요",
    "추억을 남겨주세요",
    "웃기게 해주세요",
    "방명록 남겨주세요",
  ]);
  // console.log(good)

  // let good1= good.map(function(e){
  //   return e + 1
  // })
  // console.log(good1)

  return (
    <div
      style={{
        width: "400px",
        height: "600px",
        backgroundColor: "yellowgreen",
        textAlign: "center",
      }}
    >
      <div>
        <input type="text" style={{ width: "400px", height: "200px" }} />
      </div>

      <button
        onClick={() => {
          good.map(function (a, e) {
            let goodCopy = [...good];
            goodCopy[e] = goodCopy[e] + 1;
            SetgoodHamsu(goodCopy);
          });
        }}
      >
        좋아요 버튼
      </button>

      <p>감상 글을 남겨주세요</p>
      <p>좋아요 👍{good[3]}</p>

      <button
        onClick={() => {
          good.map(function (b, c) {
            let Clcopy = [...good];
            Clcopy[c] = Clcopy[c] - 1;
            SetgoodHamsu(Clcopy);
          });
        }}
      >
        취소 버튼
      </button>

      {/* ------------------------------------------------------- */}
      {title.map(function (d, i) {          
        return (
          <div className="list" key={i}>
            <h4 style={{color : '#fff'}}>{title[i]}</h4>
          </div>
        );
      })}
    </div>
  );
}
// ------------------------------------------------------------------------------
function App() {
  let [bgColor, setBgColor] = useState("pink");
  let changeBg = () => {
    let newBg = bgColor == "pink" ? "yellow" : "blue";
    setBgColor(newBg);
  };
  let changeBg1 = () => {
    let newBg1 = bgColor == "pink" ? "blue" : "black";
    setBgColor(newBg1);
  };
  let changeBg2 = () => {
    let newBg1 = bgColor == "black" ? "green" : "blue";
    setBgColor(newBg1);
  };
  let changeBg3 = () => {
    let newBg1 = bgColor == "blue" ? "red" : "yellow";
    setBgColor(newBg1);
  };
  let changeBg4 = () => {
    let newBg1 = bgColor == "yellow" ? "#fff" : "skyblue";
    setBgColor(newBg1);
  };
  let changeBg5 = () => {
    let newBg1 = bgColor == "pink" ? "black" : "yellow";
    setBgColor(newBg1);
  };
  let changeBg6 = () => {
    let newBg1 = bgColor == "blue" ? "aqua" : "red";
    setBgColor(newBg1);
  };
  let changeBg7 = () => {
    let newBg1 = bgColor == "green" ? "blue" : "black";
    setBgColor(newBg1);
  };
  let changeBg8 = () => {
    let newBg1 = bgColor == "pink" ? "green" : "blue";
    setBgColor(newBg1);
  };
  let changeBg9 = () => {
    let newBg1 = bgColor == "green" ? "yellow" : "red";
    setBgColor(newBg1);
  };
  let changeBg10 = () => {
    let newBg1 = bgColor == "red" ? "blue" : "black";
    setBgColor(newBg1);
  };
  let changeBg11 = () => {
    let newBg1 = bgColor == "yellow" ? "green" : "red";
    setBgColor(newBg1);
  };
  let changeBg12 = () => {
    let newBg1 = bgColor == "black" ? "blue" : "red";
    setBgColor(newBg1);
  };
  let changeBg13 = () => {
    let newBg1 = bgColor == "red" ? "blue" : "black";
    setBgColor(newBg1);
  };
  let changeBg14 = () => {
    let newBg1 = bgColor == "pink" ? "blue" : "yellow";
    setBgColor(newBg1);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoodCheck></GoodCheck>
        <GoodCheck></GoodCheck>
        <GoodCheck></GoodCheck>
        <GoodCheck></GoodCheck>
      </div>

      <button
        onClick={() => {
          return changeBg();
        }}
      >
        background button1
      </button>
      <button
        onClick={() => {
          return changeBg1();
        }}
      >
        background button2
      </button>
      <button
        onClick={() => {
          return changeBg2();
        }}
      >
        background button3
      </button>
      <button
        onClick={() => {
          return changeBg3();
        }}
      >
        background button4
      </button>
      <button
        onClick={() => {
          return changeBg4();
        }}
      >
        background button5
      </button>
      <button
        onClick={() => {
          return changeBg5();
        }}
      >
        background button6
      </button>
      <button
        onClick={() => {
          return changeBg6();
        }}
      >
        background button7
      </button>
      <button
        onClick={() => {
          return changeBg7();
        }}
      >
        background button8
      </button>
      <button
        onClick={() => {
          return changeBg8();
        }}
      >
        background button9
      </button>
      <button
        onClick={() => {
          return changeBg9();
        }}
      >
        background button10
      </button>
      <button
        onClick={() => {
          return changeBg10();
        }}
      >
        background button11
      </button>
      <button
        onClick={() => {
          return changeBg11();
        }}
      >
        background button12
      </button>
      <button
        onClick={() => {
          return changeBg12();
        }}
      >
        background button13
      </button>
      <button
        onClick={() => {
          return changeBg13();
        }}
      >
        background button14
      </button>
      <button
        onClick={() => {
          return changeBg14();
        }}
      >
        background button15
      </button>
    </div>
  );
}

export default App;
