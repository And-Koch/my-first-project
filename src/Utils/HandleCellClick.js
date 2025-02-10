import { gameWinner } from "../Utils/GameWinner";

export const handleCellClick = ( 
    index,
    cells,
    winnerSequence,
    currentStep,
    setCells,
    setWinnerSequence,
    setCurrentStep,
    symbol_x,
    symbol_o
  ) => {
    if (cells[index] || winnerSequence) return;

    const newCells = [...cells];
    newCells[index] = currentStep;
    const winner = gameWinner(newCells);

    setCells(newCells);
    if (winner) {
      setWinnerSequence(winner);
    } else if (!newCells.includes(null)) {
      setWinnerSequence("draw");
    } else {
      setCurrentStep((prevStep) =>
        prevStep === symbol_x ? symbol_o : symbol_x
      );
    }
  };
