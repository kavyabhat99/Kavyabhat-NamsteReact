import { Link } from "react-router-dom";

const Order = () => {
    return (
        <div className="cartpage" style={{ padding: "11px" }}>
            <img src="https://t4.ftcdn.net/jpg/05/07/72/67/360_F_507726702_wteoBjA6bRzIdxq2ZUWpyfiwnGiKDTih.jpg"></img>
            <Link className='add-btn' style={{ textDecoration: "none" }} to="/home">Go Back To Home </Link>
        </div>
    )

}
export default Order;