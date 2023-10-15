import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";


const ResMenu = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    const [resInfo, setResInfo] = useState([])
    const [resMenue, setResMenue] = useState([])
    const dispatch = useDispatch()

    const { resId } = useParams()

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' + resId + '&catalog_qa=undefined&query=Biryani&submitAction=ENTER')
        const json = await data?.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setResMenue(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    }

    const {
        name,
        cuisines,
        costForTwoMessage,
        costForTwo,
        cloudinaryImageId,
        avgRating,
        deliveryTime,
    } = resInfo;

    const { itemCards } = resMenue;


    return resInfo.length === 0 ? (<Shimmer />) : (
        <>
            <div className="menu">

                <h1 className="menuheading" style={{ textAlign: "center", marginTop: "15px" }}>{name}</h1>
                <h4>{cuisines?.join(", ")}</h4>
                <div className="menucontent">
                    {itemCards?.map((res) => {
                        return <li className="menue-item" key={res.card.info.id}>
                            <div >
                                <h4 className='text' style={{ paddingTop: "10px", marginLeft: "30px" }}>{res.card.info.name}</h4>
                                <h5 className='text-menitem' style={{ paddingTop: "10px" }} >{res.card.info.description}</h5>
                            </div>
                            <div>
                                <img className="menu-logo" src={CDN_URL + res.card.info.imageId}></img>
                                <h4 style={{ paddingTop: "20px 10px" }}>Rs. {res.card.info.price ? res.card.info.price / 100 : res.card.info.defaultPrice / 100}</h4>
                                <button className="add-btn" onClick={() => {
                                    dispatch(addItem(res));
                                }}>Add +</button>
                            </div>
                        </li>
                    })}
                </div>
            </div>
        </>
    )
}
export default ResMenu;