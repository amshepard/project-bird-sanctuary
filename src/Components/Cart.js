// import the useState hook from the react library
import { useState } from "react"; 

// import the bonus items from the bonusItems file
import bonusItems from "../data/bonusItems" 

// import the Checkout component from the Checkout file
import Checkout from "./Checkout" 

// create and export a function component named Cart that accepts three props cartContent, cartTotal, removeBird
export default function Cart({ cartContent, cartTotal, removeBird }) { 
  // initialize the bonuses state to an empty array and setBonuses to update the state
    const [bonuses, setBonuses] = useState([]); 

    function addBonus() {
        // Checks if the cart total is between 100 and 300, and if the item at index 0 in the bonusItems array is not already included in the bonuses array. If true, the item at index 0 in the bonusItems array is added to the bonuses array using the setBonuses() function.
        if (cartTotal >= 100 && cartTotal < 300 && !bonuses.includes(bonusItems[0])) {
          setBonuses([...bonuses, bonusItems[0]]);
        }
        //Checks if the cart total is between 300 and 500, and if the items at index 0 and index 1 in the bonusItems array are not already included in the bonuses array. If true, the items at index 0 and 1 in the bonusItems array are added to the bonuses array using the setBonuses() function.
        else if (cartTotal >= 300 && cartTotal < 500 && (!bonuses.includes(bonusItems[0]) || !bonuses.includes(bonusItems[1]))) {
          setBonuses([...bonuses, bonusItems[0], bonusItems[1]]);
        }
        // Checks if the cart total is between 500 and 1000, and if the items at index 0, index 1, and index 2 in the bonusItems array are not already included in the bonuses array. If  true, the items at index 0, 1, and 2 in the bonusItems array are added to the bonuses array using the setBonuses() function.
        else if (cartTotal >= 500 && cartTotal < 1000 && (!bonuses.includes(bonusItems[0]) || !bonuses.includes(bonusItems[1]) || !bonuses.includes(bonusItems[2]))) {
          setBonuses([...bonuses, bonusItems[0], bonusItems[1], bonusItems[2]]);
        }
        // Checks if the cart total is greater than or equal to 1000, and if the items at index 0, index 1, index 2, and index 3 in the bonusItems array are not already included in the bonuses array. If true, the items at index 0, 1, 2, and 3 in the bonusItems array are added to the bonuses array using the setBonuses() function.
        else if (cartTotal >= 1000 && (!bonuses.includes(bonusItems[0]) || !bonuses.includes(bonusItems[1]) || !bonuses.includes(bonusItems[2]) || !bonuses.includes(bonusItems[3]))) {
          setBonuses([...bonuses, bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]]);
        }
        //Checks if the bonuses array is not empty.
        if (bonuses) {
          return (
            <>
              {bonuses.map((bonus, index) => <li key={index}>{bonus}</li>)}
            </>
          )
        }
      }


    return ( // return the following JSX
        <div className="Cart"> 
        {/* a div with the className "Cart" */}
            <div className="top"> 
            {/* a nested div with the className "top" */}
                <h3>Cart</h3> 
                {/* a heading with the text "Cart" */}
                <p>Discount: {(cartContent.length > 2) ? "10" : "0"}%</p> 
                {/* a paragraph showing the discount percentage based on the number of items in the cartContent array */}
                <h4>Total: ${cartTotal}</h4> 
                {/* a heading showing the cart total */}
                <ol> 
                    {
                        cartContent.map((item, index) => { 
                          // map through the cartContent array and display each item as a list item with a unique key
                            return (
                                <li key={item.id}>
                                    {item.name} ${item.amount}.00 
                                    {/* display the item name and amount */}
                                    <br />
                                    <button
                                        onClick={() => {
                                            setBonuses([]); 
                                            // reset the bonuses array to an empty array
                                            removeBird(item, index) 
                                            // call the removeBird function with item and index as parameters
                                        }}
                                    >Remove</button> 
                                    {/* a button to remove the item from the cartContent array */}
                                </li>
                            )
                        })
                    }
                </ol>
                <p>Your donations have qualified you for the following items.</p> 
                {/* a paragraph showing that the donations qualify for bonus items */}
                <ul>
                    {addBonus()} 
                    {/* display the bonus items returned from the addBonus function */}
                </ul>
            </div>
            <Checkout 
            // render the Checkout component with the following props
                key="checkout"
                cartTotal={cartTotal}
                cartContent={cartContent}
            />
        </div>
    )
}