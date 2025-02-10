export const handleReset =
  (setCells, setWinnerSequence, setCurrentStep, symbol_x) => () => {
    setCells(Array(9).fill(null));
    setWinnerSequence(null);
    setCurrentStep(symbol_x);
  };
