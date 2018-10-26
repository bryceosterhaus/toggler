'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let {render} = require('react-dom');
let ReactTestUtils = require('react-dom/test-utils');
let useToggler = require('./');

test(t => {
  const div = document.createElement('div')

  function Component() {
    let {on, toggle} = useToggler();
    return h('button', {onClick: toggle}, on ? 'On' : 'Off');
  }

  let input = render(h(Component), div);

  const button = div.querySelector('button')

  t.is(button.innerHTML, 'Off');

  ReactTestUtils.Simulate.click(button)

  t.is(button.innerHTML, 'On');
});
