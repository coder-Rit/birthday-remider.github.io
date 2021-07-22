import React, { useState } from "react";
import Data from "./components/Data";
import List from "./components/List";
  import './App.css';

function App() {

    const [state, setstate] = useState(Data)

  return (
    <div className="App">
        <div className="AppDiv">
            <h4>{state.length} birthday today</h4>
            <List state={state}/>
            <button onClick={()=>{setstate([ ])}}>Clear All</button>
            <button onClick={()=>{setstate(Data)}}>Filter</button>
        </div>
    </div>
  );
}

export default App;
