import React, { useState } from 'react'


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    (xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O")
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

    const winner  = calculateWinner(squares);
    var status = "";
    if(winner){
      status = `${winner} Winner`;
    }
    else{
      status = `Next player : ${xIsNext ? "X" : "O"}`
    }

  return <>
  <h1>{status}</h1>
  <div className="board-row"> 
    <Square onSqaureClick={()=> handleClick(0)} val = {squares[0]} />
    <Square onSqaureClick={()=> handleClick(1)} val = {squares[1]}/>
    <Square onSqaureClick={()=> handleClick(2)} val = {squares[2]} />
  </div>
  <div className="board-row"> 
    <Square onSqaureClick={()=> handleClick(3)} val = {squares[3]} />
    <Square onSqaureClick={()=> handleClick(4)} val = {squares[4]} />
    <Square onSqaureClick={()=> handleClick(5)} val = {squares[5]} />
  </div>
  <div className="board-row"> 
    <Square onSqaureClick={()=> handleClick(6)} val = {squares[6]} />
    <Square onSqaureClick={()=> handleClick(7)} val = {squares[7]} />
    <Square onSqaureClick={()=> handleClick(8)} val = {squares[8]} />
  </div>
  </>
}

const Square = ({val, onSqaureClick}) => {
  // const [value, setValue] = useState(null)
  // const handleClick = () => {
  //   setValue("X")
  // }
  return <>
  <button onClick={onSqaureClick} className='square'>{val}</button>
  </>
}

const calculateWinner = (squares) => {
  let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
        }
      }

  return null;
}
