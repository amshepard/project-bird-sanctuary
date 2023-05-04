// Importing the CSS stylesheet of the app
import './App.css'

// Importing the useState hook from React library
import { useState } from "react";

// Importing the birdData object from the birds.js file
import birdData from "./data/birds";

// Importing the BirdCard and Cart components
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";

// Defining the App function component
function App() {

  // Declaring the state variables in order to manage the cart content and total
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(null);

  // Logging the current values of cartContent and cartTotal to the console
  console.log(cartContent, cartTotal);

  // Defining the adoptBird function which adds a bird to the cart
  function adoptBird(bird) {
    setCartTotal(cartTotal + bird.amount);
    setCartContent([...cartContent, bird]);
  }

  // Defining the deleteBird function which removes a bird from the cart
  function deleteBird(birdAdded, i) {
    // filtering out the bird that needs to be deleted from the cartContent
    const filteredCart = cartContent.filter((item, index) => {
      return index !== i
    });
    setCartContent(filteredCart);
    setCartTotal(cartTotal - birdAdded.amount);
    console.log(cartContent)
  }

  // Rendering the JSX elements
  return (
    <div className="app">
      <h1 className='header'>Hypothetical Hippogriff Haven</h1>
      <style> @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');</style>
      <Cart
        key="cart"
        cartContent={cartContent}
        cartTotal={cartTotal}
        deleteBird={deleteBird}
      />

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

// Exporting the App component
export default App;