// import the useState hook from the react library
import { useState } from "react"; 

// import the bonus items from the bonusItems file
import bonusItems from "../data/bonusItems" 

// import the Checkout component from the Checkout file
import Checkout from "./Checkout" 

// create and export a function component named Cart that accepts three props cartContent, cartTotal, deleteBird
export default function Cart({ cartContent, cartTotal, deleteBird }) { 
  // initialize the bonuses state to an empty array and setBonuses to update the state
    const [bonuses, setBonuses] = useState([]); 

    function addBonus() {
      // if cartTotal is greater than or equal to 100 and the first bonus item is not already included in bonuses array
        if (cartTotal >= 100 && !bonuses.includes(bonusItems[0])) { 
          // add the first bonus item to the bonuses array
            setBonuses([...bonuses, bonusItems[0]]); 
        } else if (cartTotal >= 300 && !bonuses.includes(bonusItems[1])) { // if cartTotal is greater than or equal to 300 and the second bonus item is not already included in bonuses array
            setBonuses([...bonuses, bonusItems[1]]); // add the second bonus item to the bonuses array
        } else if (cartTotal >= 500 && !bonuses.includes(bonusItems[2])) { // if cartTotal is greater than or equal to 500 and the third bonus item is not already included in bonuses array
            setBonuses([...bonuses, bonusItems[2]]); // add the third bonus item to the bonuses array
        } else if (cartTotal >= 1000 && !bonuses.includes(bonusItems[3])) { // if cartTotal is greater than or equal to 1000 and the fourth bonus item is not already included in bonuses array
            setBonuses([...bonuses, bonusItems[3]]); // add the fourth bonus item to the bonuses array
        }

        if (bonuses) { // if the bonuses array is not empty
            return ( // return the following JSX
                <>
                    {bonuses.map((bonus, index) => <li key={index}>{bonus}</li>)} 
                    {/* map through the bonuses array and display each bonus item as a list item with a unique key */}
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
                                            deleteBird(item, index) 
                                            // call the deleteBird function with item and index as parameters
                                        }}
                                    >Delete</button> 
                                    {/* a button to delete the item from the cartContent array */}
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