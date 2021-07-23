import React, { useState } from "react";
import Tour from "./components/Tour";
import Data from "./components/Data";
import Loading from "./Loading";
import './App.css';

function App( ) {

  const [state, setstate] = useState(Data)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);

    const refresher =()=>{
      setstate(Data)
    }
   
 
  return (
    <div className="App">
      {
        state.length <= Data.length-1 ?<a className="refresher" onClick={()=>{refresher()}}>↻</a>:null

      }
      <img className="svg" 
       src="/images/liquidCurvPath.svg"
        alt="" />
      {
        loading ? <Loading /> : <Tour  stateValue={state} setStateValue={setstate}/>
      }


    </div>
  );
}

export default App;
