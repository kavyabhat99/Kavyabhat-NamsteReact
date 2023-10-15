import { useEffect, useState } from 'react';
import Cafelogo from '../../Assets/Cafelogo.png'
import { Link } from 'react-router-dom';
import useOnlinestatus from './useOnlinestatus';
import { useSelector } from 'react-redux';

const Header = () => {

    const [btnName, setBtnName] = useState("Logout")
    const onlinestatus = useOnlinestatus()

    //subscrbing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)

    useEffect(() => {
        console.log("UseEffect called")
    }, [btnName])

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={Cafelogo}></img>
                <div className='status-container'>
                    {onlinestatus ? <span className='netsatus'>online🟢</span> : <span>offline🔴</span>}
                </div>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link className='textmain' style={{ textDecoration: "none" }} to="/home">Home </Link></li>
                    <li><Link className='textmain' style={{ textDecoration: "none" }} to="/about">About </Link></li>
                    <li><Link className='textmain' style={{ textDecoration: "none" }} to="/contact">Contact</Link></li>
                    <li className='menuheading'><Link style={{ textDecoration: "none" }} to="/cart"><span className='cart'>🛒Cart</span></Link></li>
                    <span className='cartCount'>{cartItems.length}</span>
                    <button className='login'
                        onClick={() => { btnName === "Login" && window.location.pathname === "/login" ? setBtnName("Logout") : setBtnName("Login") }
                        }
                    ><h2>
                            {btnName === "Login" ? (<Link className='textmain' style={{ textDecoration: "none", borderStyle: "none" }} to="/login">{btnName}</Link>) :
                                (<Link className='textmain' style={{ textDecoration: "none", borderStyle: "none" }} to="/">{btnName}</Link>)}</h2></button>

                </ul>
            </div>

        </div>
    )

}

export default Header;