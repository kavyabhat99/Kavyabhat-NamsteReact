import { Link } from "react-router-dom";
const Wrapper = () => {
    return (
        <>
            <div className="mainpage">
                <img style={{ height: "382px", width: "600px" }} src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-boy-4047433-3351728.png"></img>
                <div>
                    <h1 className="menuheading textmainpage" style={{ padding: "20px" }}>Order Food ♥️</h1>
                    <h1 className="textcard" style={{ padding: "10px", margin: "-40px 0px 30px 33px", fontSize: "20px" }} >Get Your Food Delivery At Your Doorstep!</h1>
                    <Link className='add-btn' style={{ textDecoration: "none", margin: "10px 150px", padding: "15px" }} to="/login" Link>Order Now</Link>

                </div>
            </div>

        </>
    )
}

export default Wrapper;