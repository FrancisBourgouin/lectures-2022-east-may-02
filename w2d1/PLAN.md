# Drinking coffee function

Considering a coffee mug object, I want to be able to drink from the mug and lower the amount of coffee.

# Example

```js
const coffeeMug = {
  name: "Muggy",
  amountOfCoffee: 500,
};

drinkCoffee(coffeeMug, 100);

coffeeMug = {
  name: "Muggy",
  amountOfCoffee: 400,
};
```

- The `drinkCoffee` function should receive a coffee mug object and an amount of ml to drink
- The updated object should have the original amount - amount of ml drank

# Tests

## Action tests

- if amountOfCoffee property is changing by the amount specified
- if the amount of drinking exceed the amount of coffee available, set it 0 and return a message
- if there is no coffee in the mug and we want to drink, show a message of empty mug

## Input check tests

- if we don't receive a mug object as a parameter, show a message of pure chaos.
- if we don't receive a proper amount, complain.
