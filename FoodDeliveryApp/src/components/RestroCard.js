import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const { resData } = props;

    const {
        name,
        avgRating,
        deliveryTime,
        cloudinaryImageId,
        cuisines,
        areaName,
    } = resData?.info;

    return (
        <div className='res-card'>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <br />
            <h4 className='text'>{name}</h4>
            <h6 className='textcard'>{cuisines.join(', ')}</h6>
            <h5 className='textcard'>⏰ {props.resData.info.sla.deliveryTime}mins</h5>
            <h5 className='textcard'>⭐{avgRating}</h5>
            {/* <h4 className='text' style={{color:"grey"}}>{areaName}</h4>  */}
        </div>
    )
}
//HOC

export const withPromtedLable = (RestroCard) => {
    return (props) => {
        return (
            <>
                <label>Promoted</label>
                <RestroCard {...props} />
            </>
        )
    }

}
export default RestroCard