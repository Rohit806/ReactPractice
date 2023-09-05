import { IMG_CDN_URL } from "../constants"

//https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/

const RestaurantCard= ({name,cloudinaryImageId,cuisines,lastMileTravelString})=>{
  return(
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId } />
     <h2>{name}</h2>
      
      <h3>{cuisines.join}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      
    </div>
  )
}

export default RestaurantCard;