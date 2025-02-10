import { useState } from "react";
import { TikTakToeBoard } from "../TikTakToeBoard/TikTakToeBoard";
import { handleCellClick } from "../../Utils/HandleCellClick";
import { handleReset } from "../../Utils/HandleReset";
import "./gameBoard.css";

const symbol_x = "X";
const symbol_o = "O";

export const GameBoard = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentStep, setCurrentStep] = useState(symbol_x);
  const [winnerSequence, setWinnerSequence] = useState(null);

  return (
    <div className="gameBoard">
       <h3
        style={{
          color:
            winnerSequence === "draw"
              ? "red"
              : currentStep === "X"
              ? "blue"
              : "green",
        }}
      >
        {winnerSequence === "draw"
          ? "Draw"
          : winnerSequence
          ? `Winner: ${currentStep}`
          : `Turn: ${currentStep}`}
      </h3>
      <TikTakToeBoard
        cells={cells}
        setCells={setCells}
        handleCellClick={(index) =>
          handleCellClick(
            index,
            cells,
            winnerSequence,
            currentStep,
            setCells,
            setWinnerSequence,
            setCurrentStep,
            symbol_x,
            symbol_o
          )
        }
        winnerSequence={winnerSequence}
        handleReset={handleReset(
          setCells,
          setWinnerSequence,
          setCurrentStep,
          symbol_x
        )}
      />
    </div>
  );
};
