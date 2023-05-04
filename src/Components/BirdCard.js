// Importing the birdData object from the birds.js file
import birdData from '../data/birds'

// Sorting the birdData array in descending order based on the amount property
const sortedBirdData = birdData.sort((a, b) => b.amount - a.amount);

// Defining the BirdCard function component that receives `bird` and `adoptBird` as props
export default function BirdCard({bird, adoptBird }) {

  // Returning the JSX to render a bird card
  return (
      <div className="card birds">
          <h6>{bird.name}</h6>
          <p value={bird.amount}>Price ${bird.amount}</p>
          <img
              src={bird.img}
              alt={`${bird.name} ID# ${bird.id}`}
              width="125px"
              height="125px"
          /><br/>
          <button onClick={() => adoptBird(bird)}>Adopt</button>

      </div>
  )
}
