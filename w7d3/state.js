const fakeUseState = (value) => {
  const currentValue = { current: value, old: value };

  const setCurrentValue = (newValue) => {
    currentValue.old = currentValue.current;
    currentValue.current = newValue;

    if (currentValue.old !== currentValue.current) {
      console.log("VALUE CHANGED PLEASE TRIGGER A RERENDER");
    }
  };

  return [currentValue.current, setCurrentValue];
};

const [number, setNumber] = fakeUseState(5);

console.log(number);
setNumber(5);
setNumber(10);
setNumber(10);
console.log(number);
