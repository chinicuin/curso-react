import {React, useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        console.log('+1');
        //setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    const handleMinus = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
  
    return (
      <div>
          <h1>CounterApp</h1>
          <h2>{counter}</h2>
          <button onClick={ handleAdd }>
              +1
            </button>
            <button onClick={ handleMinus }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
    </div>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}