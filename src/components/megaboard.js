import React from "react";
import Board from "./board";

class Megaboard extends React.Component {
  state = {
    boardStatus: Array(9).fill(true)
  };

  isValidBoard(b) {
    return this.state.boardStatus[b];
  }

  handleBoardSelect(b) {
    if (this.isValidBoard(b)) {
      this.props.onBoardClick(); /* TODO */
    }
  }

  renderBoard() {
    return Array(9).fill().map(boardIndex => {
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
