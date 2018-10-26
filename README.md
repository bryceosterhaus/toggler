# `@rehooks/Toggler`

> React hook for Toggler

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/Toggler
```

## Usage

```js
import useToggler from '@rehooks/Toggler';

function MyComponent() {
  let {on, toggle} = useToggler();

  return (
    <div>
      <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
    </div>
  );
}
```
