import { useState } from 'react';
import './App.css';

function App() {
 const [count, setCount] = useState(-12)

 const subtraction = () =>{
  setCount(count - 1);
 }

 const addition = () =>{
  setCount(count + 1);
 }

 const resetValue = () =>{
  setCount(0)
 }

//  condition for digits colour
let color = "#fff"

 if (count >= 1) {
   color = "#afad1d"
 }else if(count < 0){
  color = "red"
 }else{
  color = "black"
 }
  return (
   <div className="container">
    <div className=" counter">
      <h1>React Counter app</h1>
      <p className='count' style={{
        color: color
      }}>{count}</p>
      <div className="buttons">
        <button className='button-1' onClick={subtraction}>- Subtract</button>
        <button className='button-2' onClick={resetValue}>! Reset</button>
        <button className='button-3' onClick={addition}>+ Add</button>
        <footer>
          made by Hasnain.HSA
        </footer>
      </div>
    </div>
   </div>
  );
}

export default App;
