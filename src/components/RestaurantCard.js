import { Component, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;

    //console.log(resData.info);

    const {loggedInUser} = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
        } = resData?.info;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard)=>{
 return (props)=>{
    return (
        <div>
            <label className="absolute bg-black text-white rounded-lg m-2 p-2">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    );
 };
};

export default RestaurantCard;