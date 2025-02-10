import "./tikTakToeBoard.css";

export const TikTakToeBoard = ({
  cells,
  handleCellClick,
  winnerSequence,
  handleReset,
}) => {
  return (
    <div className="tiktaktoeBoard">
      {cells.map((symbol, index) => (
        <button
          className={`button ${
            symbol === "X" ? "x-button" : symbol === "O" ? "o-button" : ""
          } 
            ${winnerSequence?.includes(index) ? "winning-cell" : ""}`}
          key={index}
          onClick={() => handleCellClick(index)}
          disabled={!!winnerSequence || cells[index]}
        >
          {symbol}
        </button>
      ))}
      <button onClick={handleReset} className="resetBtn">
        Reset
      </button>
    </div>
  );
};
