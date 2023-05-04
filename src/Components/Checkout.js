export default function Checkout({ cartContent, cartTotal }) {

    // Function to display an alert message when the form is submitted
    function handleSubmit() {
        alert("You have adopted birds. Thank you!")
    }
  
    // Rendering the JSX elements
    return (
        <div className="Checkout">
            <h4>Checkout</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" />
  
                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" />
  
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
  
                <label htmlFor="zipcode">Zip Code
                    <br />
                    <input type="number" id="zipcode" />
                    <br />
                </label>
  
                <input type="submit" value="Submit" className="check-butt" />
            </form>
        </div>
    )
  }
