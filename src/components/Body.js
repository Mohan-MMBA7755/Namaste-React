import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

/*******Remove the useState Data which is hard coded*********/
const Body = ()=>{
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredRestaurants,setfilteredRestaurants] = useState([]);

    const [searchText,setsearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =async ()=>{
        const restaurantdata =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165847&lng=77.6219296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await restaurantdata.json();
        //console.log(json);
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (<h1>Looks like you are Offline. Please check your Internet Connection</h1>);

    const {loggedInUser,setUserName} = useContext(UserContext);
    
    return ListOfRestaurants.length===0 ?(<Shimmer/>):(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid = "searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        //Filter the Restaurant Cards
                        //searchText
                        const filteredRestaurants = ListOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                        const filteredRestaurants = ListOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.0);
                            setfilteredRestaurants(filteredRestaurants);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label className="mx-2">UserName: </label>
                    <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                            {/*If the Restaurant is Promoted then add a promoted label  to it*/
                                restaurant.info.isOpen?
                                (<RestaurantCardPromoted resData={restaurant}/>)
                                :(<RestaurantCard resData={restaurant}/>)
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;