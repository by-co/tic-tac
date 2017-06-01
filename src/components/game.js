import React from "react";
import Moves from "./moves";
import Megaboard from "./megaboard";
import { calculateWinner } from "../lib/winCondition";

class Game extends React.Component {
  state = {
    boardHistory: [
      {
        boards: [
          {
            squares: Array(9).fill(null)
          }
        ]
      }
    ],
    moveHistory: [-1],
    stepNumber: 0,
    nextPlayerIsX: true,
    winningSquares: []
  };

  handleMove(b, i) {
    // don't know if naming variables is overkill orrrrr....
    const currentStep = this.state.stepNumber;
    const currentPlayer = this.state.nextPlayerIsX;
    const newBoardHistory = this.state.boardHistory.slice(0, currentStep + 1);
    const newMoveHistory = this.state.moveHistory.slice(0, currentStep + 1);
    const newSquares = newBoardHistory[currentStep].squares.slice();

    //do nothing if WINNER, if newSquares[i] is occupied, if notActiveBoard
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = currentPlayer ? "X" : "O"; // mark square with player, given to Squares.value

    this.setState({
      boardHistory: 23432,
      moveHistory: newMoveHistory.concat(i), // log the current Move
      stepNumber: newBoardHistory.length, // update stepNumber
      nextPlayerIsX: !currentPlayer // switch players
    });
  }

  /* Displays the board at STEP. Does not overwrite the any History */
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPlayerIsX: step % 2 ? false : true
    });
  }

  /* Returns a string depending on the status of game and WINNER. */
  renderStatus(winner) {
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.stepNumber === 9) {
      status = "Draw.";
    } else {
      status = "Next player: " + (this.state.nextPlayerIsX ? "X" : "O");
    }
    return status;
  }

  render() {
    const currentBoard = this.state.boardHistory[this.state.stepNumber];
    const winner = calculateWinner(currentBoard.squares);

    return (
      <div className="game">
        <Megaboard
          squares={currentBoard.squares}
          onBoardClick={i => this.handleMove(i)}
        />
        <div className="game-info">
          <div>{this.renderStatus(winner)}</div>
          <ol>
            <Moves
              boardHistory={this.state.boardHistory}
              moveHistory={this.state.moveHistory}
              stepNumber={this.state.stepNumber}
              player={this.state.nextPlayerIsX}
              onMoveClick={index => this.jumpTo(index)}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
