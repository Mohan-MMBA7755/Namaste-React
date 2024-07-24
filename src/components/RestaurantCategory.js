import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{

    //const [showItems,setShowItems] = useState(false);

    const handleClick = ()=>{
        setShowIndex();
        //setShowItems(!showItems);
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data?.itemCards}/>}
        </div>
    );
};

export default RestaurantCategory;