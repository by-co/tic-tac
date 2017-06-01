import React from "react";
import Board from "./board";

class Megaboard extends React.Component {
  state = {
    boardStatus: Array(9).fill(true)
  };

  isValidBoard(b) {
    return this.boardStatus[b];
  }

  handleBoardSelect(b) {
    if (this.isValidBoard(b)) {
      this.props.onBoardClick(); /* TODO */
    }
  }

  renderBoard() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(boardIndex => {
      return (
        <Board
          key={boardIndex}
          squares={this.props.squares}
          onClick={i => this.props.onBoardClick(i)}
        />
      );
    });
  }

  render() {
    return (
      <div className="megaboard">
        {this.renderBoard()}
      </div>
    );
  }
}
export default Megaboard;
