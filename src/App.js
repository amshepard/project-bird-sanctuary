
import './App.css'
import { useState } from "react";
import birdData from './data/birds';
import BirdCard from "./Components/BirdCard";


function App () {

 
  function adoptBird(bird) {
  }

  return (
    <div>
      <h1 className='header'>Hypothetical Hippogriff Haven</h1>
      <style> @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');</style>

      <div className='birdcard'>
        {
          birdData.map((bird) => {
            return <BirdCard
              key={bird.id}
              bird={bird}
              adoptBird={adoptBird}
            />
          })
        }
      </div>
    </div>
  );
};

export default App;