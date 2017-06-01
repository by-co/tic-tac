import React from "react";
import Square from "./square";
import { calculateWinningSquares } from "../lib/winCondition";

class Board extends React.Component {
  isWinningSquare(index) {
    var line = calculateWinningSquares(this.props.squares);
    if (line) {
      return line.includes(index);
    }
    return false;
  }

  renderSquare(i, style) {
    return (
      <Square
        key={i}
        squareStyle={style}
        value={this.props.squares[i]}
        markSquare={() => this.props.onClick(i)} //onClick from Board from Game
      />
    );
  }

  /* TODO: remove .square:hover {background} change if gameover */
  renderRow(row) {
    return [0, 1, 2].map(col => {
      var squareIndex = row * 3 + col;
      var squareStyling = this.isWinningSquare(squareIndex)
        ? "square highlight"
        : "square";
      return this.renderSquare(squareIndex, squareStyling);
    });
  }

  render() {
    const rows = [0, 1, 2].map(row => {
      return (
        <div className="board-row" key={row}>
          {this.renderRow(row)}
        </div>
      );
    });

    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}

export default Board;
