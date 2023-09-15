/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {

    const [allActors,setAllActors] = useState([])

    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])

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
                    <button className='btn btn-primary mt-10'>Select</button>
                    </div>
               ))
               }
            </div>

            <div className="side-cart">
                <h2>This is side container</h2>
            </div>

        </div>
    );
};

export default Home;