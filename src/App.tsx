import React, {useState} from 'react';
import './App.css';
import PairData from "./Components/PairData";

function App() {
  const [state, setState] = useState({
    displayPairData: false
  });

  const onPairDetailsPress = (visible: boolean) => {
    setState(prevState => ({
        ...prevState,
      displayPairData: visible
    }))
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => onPairDetailsPress(true)}>Show BNB/USDT details</button>
      </div>
      {state.displayPairData ? <PairData/> : null}
        <div>
            <button onClick={() => onPairDetailsPress(false)}>Hide BNB/USDT details</button>
        </div>
    </div>
  );
}

export default App;
