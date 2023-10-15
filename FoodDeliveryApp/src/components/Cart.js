import { useDispatch, useSelector } from "react-redux";
import ResMenu from "./ResMenu";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Cart = () => {
    //subscrbing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    return (<>
        <div style={{ margin: "30px" }}>
            <h1 className="aboutheading menuheading"> Your Cart</h1>
            {cartItems.length === 0 && (
                <>
                    <h3 className="cartpage" style={{ paddingBottom: "10px" }}>Oops!</h3>
                    <div className="cartpage">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqpgEqyJLaPuMrVKR4oO9CsPIRXcfjshcKw&usqp=CAU"></img>
                    </div>
                    <h3 className="cartpage" style={{ paddingBottom: "10px" }}><Link to="/home" style={{ textDecoration: "none", margin: "10px" }} className="cart Checkout">Go Home</Link></h3>
                </>)
            }

            {(cartItems.map((item) => {
                const Price = item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100;
                return (
                    <>
                        <div className="cartpage ">
                            <li className="menue-item" key={item.card.info.id}>
                                <div>
                                    <h4 className='text' style={{ paddingTop: "10px", marginLeft: "30px" }}>{item.card.info.name}</h4>
                                    <h5 className='text-menitem' style={{ paddingTop: "10px" }} >{item.card.info.description}</h5>
                                </div>
                                <div>
                                    <img className="menu-logo" src={CDN_URL + item.card.info.imageId}></img>
                                    <h4 style={{ paddingTop: "20px 10px" }}>Rs. {Price}</h4>
                                </div>
                            </li>
                        </div>
                    </>
                )

            }))}

            {cartItems.length !== 0 && <div className="cartpage " style={{ margin: "10px", gap: "8px" }}>
                <Link onClick={() => { dispatch(clearCart(res)) }} style={{ textDecoration: "none" }} className="cart Checkout">Clear Cart</Link>
                <Link to="/payment" style={{ textDecoration: "none" }} className="cart Checkout">Checkout</Link>
            </div>}
        </div>
    </>
    )
}

export default Cart;