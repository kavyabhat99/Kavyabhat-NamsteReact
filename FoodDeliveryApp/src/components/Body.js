import { useEffect, useState } from 'react';
import RestroCard, { withPromtedLable } from './RestroCard'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlinestatus from './useOnlinestatus'

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchtext, setSearchtext] = useState("");

    const ResPromtedCard = withPromtedLable(RestroCard);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlinestatus = useOnlinestatus()

    if (onlinestatus === false) {
        return (
            <div className='cartpage' style={{ padding: "200px" }}>
                <h1 className='text'>Please check your Network connection and try again!</h1>
            </div>
        )
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) :
        (
            <div className='body'>
                <div className='filter'>
                    <button className="search" onKeyDown={() => {
                        //onClick filter Restro
                        const filteredres = listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
                        })
                        setFilteredRestaurants(filteredres)

                    }}>
                        <h1>Search for food that makes your taste buds do the happy dance!</h1>
                        <div>
                            <input id="myInput" type="text" placeholder="Search . . ." required value={searchtext}
                                onChange={(e) => {
                                    setSearchtext(e.target.value);
                                }}></input>

                        </div>
                    </button>

                    {<button className='filter-btn'
                        //onClick filter TOP Restro
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => {
                                return res?.info?.avgRating > 4.4
                            })
                            setFilteredRestaurants(filteredList)
                        }}
                    >{<h4 className='textcard' style={{ color: "white", fontSize: "15px" }}>Top Rated </h4>}</button>}

                </div>
                <div className='rescontainer'>
                    {
                        filteredRestaurants.map((res) => {
                            return <Link style={{ textDecoration: "none" }}
                                key={res.info.id} to={"/restaurents/" + res.info.id} >
                                {res.info.promoted ? <ResPromtedCard resData={res} /> : <RestroCard resData={res} />
                                }
                            </Link>
                        })
                    }

                </div>
            </div>
        )
}
export default Body; 