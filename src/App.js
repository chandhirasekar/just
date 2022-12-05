import React, { useEffect, useState } from "react";
import "./styles.css";
import patten from "./patten";


const initial = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [board, setBoard] = useState([...initial]);
  const [player, setPlayer] = useState("x");
  const [lIdx, setLnx] = useState(-1);

  const handleChange = (idx) => {
    if (board[idx] !== "") return;
    setLnx(idx);

    const newBoard = [...board];
    setBoard(
      newBoard.map((val, id) => {
        if (id === idx) return player;
        return val;
      })
    );
    setPlayer(player === "x" ? "0" : "x");
  };

  const checkMode = () => {
    if (lIdx < 0) return;
    const pattenForm = patten[lIdx];
    const previousPlayer = player === "x" ? "0" : "x";
    pattenForm.forEach((arr) => {
      if (
        board[arr[0]] === previousPlayer &&
        board[arr[1]] === previousPlayer &&
        board[arr[2]] === previousPlayer
      ) {
        alert(`${previousPlayer} won the match`);
        reSet();
      }
      
    });
  }; 
  const reSet=()=>{
    setBoard([...initial]);
    setPlayer("x");
    setLnx(-1)

  }

  useEffect(() => {
    checkMode();
  }, [board]);

  return (
    <div className="App">
      <h1 className="center">Next {player}</h1>

      <div className="board">
        {board.map((e, i) => (
          <div className="table-board" onClick={() => handleChange(i)}>
            {e}
          </div>
        ))}
      </div>
      <button onClick={reSet}>reset</button>
    </div>
  );
}
export default App;
