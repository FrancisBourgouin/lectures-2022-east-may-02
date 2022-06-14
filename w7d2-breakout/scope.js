const someLamp = () => {
  let lampOnState = false;
  const setLampOnState = () => (lampOnState ? false : true);

  someCuteCabinetForTheSwitch({ setLampOnState });
};

<SomeComponentInReact isChicken={true} /> => SomeComponentInReact({isChicken:true})



const someCuteCabinetForTheSwitch = (props) => {
  props.setLampOnState();
};

$.ajax({
  url: "/",
});
$.ajax({
  method: "POST",
  url: "/",
});

const SomeComponentInReact = function (props) {};

const someFunctionWithABunchOfParameters = function (
  name,
  age,
  url,
  method,
  isPotato,
  isChicken
) {};

someFunctionWithABunchOfParameters(null, null, null, null, null, true);

someFunctionWithAPropsObject = function (props) {};
someFunctionWithAPropsObject({ isChicken: true });
