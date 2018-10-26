import React from 'react';
import { render } from 'react-dom';
import useToggler from './';

function App() {
  let {on, toggle} = useToggler();

  return (
    <div>
      <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
    </div>
  );
}

render(<App />, window.root);
