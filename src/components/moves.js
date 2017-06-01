import React from "react";

class Moves extends React.Component {
  state = {
    mostRecent: false
  };

  mostRecent() {
    this.setState({ mostRecent: true });
  }

  leastRecent() {
    this.setState({ mostRecent: false });
  }

  renderButtons() {
    return (
      <div id="buttons">
        <button onClick={() => this.mostRecent()}>Sort by newest move</button>
        <button onClick={() => this.leastRecent()}>Sort by oldest move</button>
      </div>
    );
  }

  renderMoves() {
    const { boardHistory, moveHistory, stepNumber, onMoveClick } = this.props;

    var moveList = boardHistory.map((step, historyIndex) => {
      const lastSquare = moveHistory[historyIndex];

      const moveDescription = lastSquare !== -1
        ? step.squares[lastSquare] + " at " + moveAsString(lastSquare)
        : "Game start";

      const moveStyling = stepNumber === historyIndex ? "moves bold" : "moves";

      return (
        <li key={historyIndex}>
          <a
            className={moveStyling}
            href="#"
            onClick={() => onMoveClick(historyIndex)}
          >
            {moveDescription}
          </a>
        </li>
      );
    });

    return this.state.mostRecent ? moveList.reverse() : moveList;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.renderMoves()}
      </div>
    );
  }
}

function moveAsString(i) {
  return "(" + i % 3 + ", " + Math.floor(i / 3) + ")";
}

export default Moves;
