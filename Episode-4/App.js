import React from 'react'
import ReactDOM from 'react-dom/client';
import Cafelogo from ''
/*
Header
-Logo
-Nav items
Body
-search
-Restorentcontainer
-Restrocard
Footer
-copyright
-address
-Links
-Contact
*/
const dataList = {
    cards: [
        {
            Name: "Indian Masala House",
            image: "https://images.pexels.com/photos/17184404/pexels-photo-17184404/free-photo-of-fuchka-panipuri.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "20 minutes",
            stars: "4.6 Stars",
        },
        {
            Name: "The Spice Delight",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&usqp=CAU",
            time: "50 minutes",
            stars: "4 Stars",
        },
        {
            Name: "Desilicious",
            image: "https://images.pexels.com/photos/13354485/pexels-photo-13354485.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "32 minutes",
            stars: "3 Stars",
        },
        {
            Name: "Masala Magic",
            image: "https://media.istockphoto.com/id/1152493500/photo/authentic-indian-dishes-and-snacks.jpg?s=612x612&w=0&k=20&c=IF969JnN1lKLMHyZ_Sc0q7beVYOmWAOOCja_UeMSOv0=",
            time: "20 minutes",
            stars: "2.6 Stars",
        },
        {
            Name: "The Chef in the Hat",
            image: "https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "25 minutes",
            stars: "3.7 Stars",
        },
        {
            Name: "Goan Cafe",
            image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "47 minutes",
            stars: "4.2 Stars",
        },
        {
            Name: "The Great Indian Kitchen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO64f7XgvxtDu5V-iKmOJXRVgwTZPq2OCR9A&usqp=CAU",
            time: "36 minutes",
            stars: "3.6 Stars",
        },{
            Name: "Full Moon",
            image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "45 minutes",
            stars: "2.8 Stars",
        }
    ]
}
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={Cafelogo}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )

}

const Body = () => {
    console.log(dataList.cards)
    return (
        <div className='body'  style={{background:"#f0f0f0"}}>
            <div className='search'>
                Search
            </div>
            <div className='rescontainer'>
           {
            dataList.cards.map((res)=>{
                return <RestroCard data ={res} />
            })
           }
            
            </div>
        </div>
    )
}


const RestroCard = (props) => {
    const {data} = props;
    const{Name,stars,time,image} = data
    console.log(props)
    return (
        <div className='res-card'>
            <img className="res-logo" src={image}></img>
            <h3 className='text'>{Name}</h3>
             <h4 className='text'>{stars}</h4>
            <h4 className='text'>{time}</h4> 
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
