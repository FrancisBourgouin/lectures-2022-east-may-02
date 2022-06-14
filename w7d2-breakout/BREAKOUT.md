# Breakout!

## Existential Questions

- Invoke props (Props in general)
- JSX
- React Native & React.js

```jsx
  // JSX => NOT HTML
  <p> => ReactDOM.createElement('p'.....)
  <SomeComponent> => SomeComponent(props)
  <SomeComponent key={value} someFunction={someFunction}> => SomeComponent({key:value})

  // Inside the component

  props.someFunction()
```

Pedestal problem

40 packages of 12 slices of bacon
60 boxes of 12 eggs

How many 2eggs + 1bacon plates can you make?

30 dozens

95%

40 mol of oxygen
60 mol of hydrogen

how many mol of water can you make, considering that the molecule is h20

30 mol water

75%

Callback => Simply a function reference that you give as a parameter

```jsx
  const someHOF = function(outputAction, conditionAction, mutationAction)
```

setState =>

useState hook from React

<App>

setState(newValue)

you update the value of state with newValue
if the value is different, trigger a rerender action
finish everything that is synchronous
then we do the rerender

```jsx
  const SomeForm = function(props){
    const [name, setName] = useState("")

    const handleChange = event => {
      setName(event.target.value)
      console.log(name)
    }

    return(
      <form>
        <input type="text" value={name} onChange={handleChange}>
      </form>
    )
  }
```

<form>
  <input type="text" value="" onChange={handleChange}>
</form>

<form>
  <input type="text" value="a" onChange={handleChange}>
</form>

<form>
  <input type="text" value="ab" onChange={handleChange}>
</form>

<form>
  <input type="text" value="abc" onChange={handleChange}>
</form>
