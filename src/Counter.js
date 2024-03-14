// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reducers/counterReducer';
import { increase, decrease } from './reducers/interchangeAlphbet';
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const alphabet = useSelector(state => state.alphabet.alphabet);
  const dispatching = useDispatch();
  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <p>Alphabet: {alphabet}</p>
        <button onClick={() => dispatching(increase())}>Increase</button>
        <button onClick={() => dispatching(decrease())}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;