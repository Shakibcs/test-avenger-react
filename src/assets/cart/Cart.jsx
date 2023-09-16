const Cart = ({selectedActors,totalCost,remaining}) => {
     console.log(selectedActors);

    return (
        <div>
          <h3>Total Actors: {selectedActors.length}</h3>
          <h4>Total Cost: {totalCost}</h4>
          <h4>Remaining Budget:{remaining}</h4>
       {
       selectedActors.map((actor) =>(
       <li>{actor.name}</li>
       ))
       }
        </div>
    );
};

export default Cart;