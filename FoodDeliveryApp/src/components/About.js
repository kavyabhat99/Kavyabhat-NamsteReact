import User from "./User";
import Userclass from "./Userclass";

const About = () => {
    return (<>
        <h1 className="aboutheading menuheading">About Funny Food</h1>
        <img className="aboutimg" src="https://play-lh.googleusercontent.com/6S0e_QZi2-fIznbpE8Oax017bUYGTxHFph1Buj7tqr_zBB3e80I32rouvtjVqhRHxA"></img>
        <h2 className="aboutheading menuheading">Our Story</h2>
        <h4 className="text-menitem" style={{ margin: "0px 330px" }}>Funny Food was founded in 2023 by a team of food enthusiasts who saw a need for a seamless,
            reliable, and delicious food delivery service. With backgrounds in both technology and gastronomy,
            we set out to bridge the gap between quality dining experiences and the convenience of doorstep
            delivery.</h4>
        <h2 className="aboutheading menuheading">Why Choose Us</h2>
        <h4 className="text-menitem" style={{ margin: "0px 330px" }}>
            <h3 className="text">Curated Selection:</h3>
            <br />
            We handpick a wide range of restaurants, ensuring you have access to the best cuisines in town.
            <br />
            <br />
            <h3 className="text">Fast & Reliable:</h3>
            <br />
            Our delivery network is designed for speed and efficiency, so you can enjoy your meal while it's still hot.
            <br />
            <br />
            <h3 className="text">Safety First:</h3>
            <br />
            We prioritize the health and safety of our customers and partners, implementing stringent hygiene standards in every step of the process.
            <br />
            <br />
            <h3 className="text">Customized Experience:</h3>
            <br />
            Whether it's a special dietary requirement or a specific craving, we strive to cater to every palate.
        </h4>
        <h2 className="aboutheading menuheading">Our Mission</h2>
        <h4 className="text-menitem" style={{ margin: "0px 330px" }}>
            At Funny Food, our mission is simple yet profound - to bring a world of flavors to your doorstep.
            We're dedicated to curating a diverse menu, partnering with the finest local restaurants,
            and ensuring that every dish that reaches your table is prepared with love and attention to detail.
        </h4>
        {/* <User name={"Kavya"}/> */}
        {/* <Userclass name={"Kavya class"}/> */}
    </>)
}

export default About;