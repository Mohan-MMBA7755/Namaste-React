import { useEffect, useState } from "react";
import { MENU_API_1, MENU_API_2 } from "./constants";


const useRestaurantMenu = (resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API_1+resId+MENU_API_2);
        const json = await data.json();
        setResInfo(json.data);
    }
 return resInfo;
}

export default useRestaurantMenu;