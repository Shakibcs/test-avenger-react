import './Home.css'
const Home = () => {


    return (
        <div className="container">
            <div className="cart-container">
                <div className="cart">
                <div className="cart-img">
                  <img className="photo" src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" />
                </div>
                <h2>Anton Tech</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laudantium.</small></p>
                <div className="info">
                <p>Salary: 5000</p>
                <p>Writer: </p>
                </div>
                <button className='btn btn-primary mt-6'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Home;