import logo from './logo.svg';
import './App.css';
import arr from './data';
import { LiaAngleDoubleUpSolid, LiaAngleDoubleDownSolid } from "react-icons/lia";
import { useState } from 'react';


function App() {

  const [index, setIndex] = useState(0);
  const { name, text, profession, image} = arr[index];
  const length = arr.length;
  let i = 0;

  function forward() {

    setIndex((index) => {
      let newindex = index + 1;
      if (newindex > length - 1) {
        return 0;
      }
      return newindex;
    })



  }

  function backward() {

    setIndex((index) => {
      let newindex = index - 1;
      if (newindex < 0) {
        return length - 1;
      }

      return newindex;
    })




  }



  return (
    <>
      <h2 id="heading">Our Reviews</h2>

      <div className="container">


        <img className='item' id="image" src={image} alt="image" />
        <p className='item' id="name">{name}</p>
        <p className='item' id="profession">{profession}</p>
        <p className='item' id="text">{text}</p>


        <button className='item' id="frwdbtn" onClick={forward}><LiaAngleDoubleUpSolid /></button>
        <button className='item' id="bckwbtn" onClick={backward}><LiaAngleDoubleDownSolid /></button>





      </div>
    </>



  );
}

export default App;
