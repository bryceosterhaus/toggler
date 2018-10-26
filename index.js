'use strict';
let { useState } = require('react');

function useToggler(initialValue = false) {
  const [on, setOn] = useState(initialValue)

  const toggle = () => setOn(!on)

  return {on, toggle}
}

module.exports = useToggler;
