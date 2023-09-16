/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../cart/Cart';
const Home = () => {

    const [allActors,setAllActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [remaining,setRemaining] = useState(0)
    const [totalCost,setTotalCost] = useState(0)
    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])
    
   

    const handleSelector = (actor) => {
        const isExist = selectedActors.find((item=> item.id ==actor.id));
       
      let count = actor.salary;

        if(isExist){
           return alert("items already selected");
        }

        else{
            selectedActors.forEach((item) => {
                count = count + item.salary;
            });
            

            const totalRemaining = 20000 - count;
            

            if(count>20000){
                return alert("No Balance remaning");
            }
           // console.log(totalCost);
            else{
                setTotalCost(count);
            setRemaining(totalRemaining);
        setSelectedActors([...selectedActors,actor]);
            }
        }
    }
   
//console.log(selectedActors);
        return (
            <div className="container">
                <div className="home-container">
                {
                allActors.map(actor => (
                    <div key={actor.id} className="cart">
                        <div className="cart-img">
                        <img className="photo" src={actor.image} alt="" />
                        </div>
                    <h2>Name: {actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laudantium.</small></p>
                    <div className="info">
                    <p>Salary: {actor.salary}</p>
                    <p>Writer: {actor.role}</p>
                    </div>
                    <button onClick={()=>handleSelector(actor)} className='btn btn-primary mt-10'>Select</button>
                    </div>
               ))
               }
            </div>

            <div className="side-cart">
               <Cart key={selectedActors.length} selectedActors={selectedActors} totalCost={totalCost} remaining={remaining}></Cart>
            </div>

        </div>
    );
};

export default Home;