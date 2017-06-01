import React from "react";

function Square({ squareStyle, markSquare, value }) {
  // 'functional components' only consist of something to be rendered
  // ---> return the thing to be rendered
  return (
    <button className={squareStyle} onClick={markSquare}>
      {value}
    </button>
  ); // receives this.props.value from Board
}

export default Square;
