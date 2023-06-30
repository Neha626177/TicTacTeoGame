import React, { useState } from "react";
import "./tictacteo.scss";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [turn, setTurn] = useState("X's");
  const [win, setWin] = useState("Start");
  const [data, setData] = useState("");

  const click = (n) => {
    let square = [...board];
    if (board[n] != "") {
      alert("already filled");
      return;
    }
    square[n] = move;
    setBoard(square);

    board.forEach((element) => {
      if (element == " ");
      setData(square);
    });

    if (square != " ") {
      setWin("Started");
    }

    if (move == "X") {
      setMove("O");
    } else {
      setMove("X");
    }
    if (checkWin(square)) {
      // alert('winner');
      square.fill("");
      setBoard(square);
      setWin(`${move} won😄`);
      // console.log(win);
    }
    if (win == "`${move} is win😄`" && win == "Match Draw" && square == "") {
      setWin("Winner ?");
    }

    const checkDraw = (square) => {
      let count = 0;
      square.forEach((element) => {
        if (element != "") {
          count++;
        }
      });
      if (count >= 9) {
        return true;
      } else {
        return false;
      }
    };
    if (checkDraw(square)) {
      //  alert("Match is draw");
      square.fill("");
      setBoard(square);
      setWin("Game Draw");
    }

    if (turn == "X's") {
      setTurn("O's");
    } else {
      setTurn("X's");
    }
  };

  const checkWin = (board) => {
    const conditons = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    conditons.forEach((element) => {
      if (
        board[element[0]] != "" &&
        board[element[1]] != "" &&
        board[element[2]] != ""
      ) {
        if (
          board[element[0]] == board[element[1]] &&
          board[element[1]] == board[element[2]]
        ) {
          flag = true;
          console.log(board[2]);
        }
      }
    });
    return flag;
  };
  const reset = () => {
    setWin("Start");
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="innerContainer">
            <div className="headingCon">
              <p className="heading">Tic Tac Teo Game</p>
            </div>
            <div className="gameContainer">
              <div className="box">
                <div className="board " onClick={() => click(0)}>
                  {board[0]}
                </div>
                <div className="board" onClick={() => click(1)}>
                  {board[1]}
                </div>
                <div className="board" onClick={() => click(2)}>
                  {board[2]}
                </div>
              </div>
              <div className="box">
                <div className="board" onClick={() => click(3)}>
                  {board[3]}
                </div>
                <div className="board" onClick={() => click(4)}>
                  {board[4]}
                </div>
                <div className="board" onClick={() => click(5)}>
                  {board[5]}
                </div>
              </div>
              <div className="box">
                <div className="board" onClick={() => click(6)}>
                  {board[6]}
                </div>
                <div className="board" onClick={() => click(7)}>
                  {board[7]}
                </div>
                <div className="board" onClick={() => click(8)}>
                  {board[8]}
                </div>
              </div>
            </div>
          </div>
          <div className="scoreBoard">
            <p className="showTurn">
              <span>{turn}</span> turn
            </p>
            <p className="showWin">
              <span>{win}</span>
            </p>
            <button className="resetBtn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
