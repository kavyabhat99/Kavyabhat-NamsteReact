import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    let citems = cartItems.length;

    let eachItemPrice = (cartItems.map((item) => {
        const Price = item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100;
        if (Price === Price) {
            citems = 1;
        }
        return (Price * citems);
    }))


    let Totalprice = eachItemPrice.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    return (
        <>
            <div class="wrapperpayment">
                <div class="mainpayment">
                    <div class="contentpayment">
                        <h1 className="aboutheading menuheading">Payment Details</h1>

                        <div className="paymentbox">

                            <form >
                                <label>UserName</label>
                                <input type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder="Username"
                                    style={{ outlineColor: "lightsalmon" }}
                                />
                                <label>Card Number</label>
                                <input style={{ outlineColor: "lightsalmon" }} type="password" placeholder="4539 7111 0342 0778" />
                                <label>Expiration Date</label>
                                <input style={{ outlineColor: "lightsalmon" }} type="month" placeholder="2023-10" />
                                <input type="user" placeholder="014" />

                            </form>

                        </div>
                        <div class="payment">
                            <h3 className="textcard">Summary</h3>
                            <br />
                            <h6 className="text">Delivery Charge :<div class="amount">🚚Rs.50.00 </div></h6>
                            <br />
                            <h4 className="text">Food Amount :<div class="amount"> Rs.{Totalprice.toFixed(2)}</div></h4>
                            <hr />
                            <br />
                            <h4 className="text">Total Amount :<div class="amount">Rs.{(Totalprice + 50).toFixed(2)}</div></h4>

                            <h3 className="cartpage" style={{ padding: "20px" }}><Link onClick={() => {
                                alert(`Payment sucess!!`)
                                dispatch(clearCart(res))
                            }} to="/orderconfirmation" style={{ textDecoration: "none", margin: "10px" }} className="cart Checkout">Pay Now</Link></h3>

                        </div>
                    </div>
                </div>
                <img style={{ marginBottom: "200px" }} src="https://img.freepik.com/premium-vector/secure-payment-modern-flat-concept-web-banner-design-man-confirms-his-identity-with-fingerprint_9209-8354.jpg"></img>
            </div>
        </>
    )
}

export default Payment;