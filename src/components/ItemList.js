import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    };

    return(
        <div>
           {items.map((item)=> (
            <div data-testid ="foodItems" key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="font-bold py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="3/12 p-4">
                    <div className="absolute">
                        <button className="font-semibold rounded-lg mx-6 my-16 shadow-lg p-2 bg-white" 
                        onClick={()=>handleAddItem(item)}
                        >Add+</button>
                    </div>
                    <img className="w-24" src={CDN_URL+item?.card?.info?.imageId}/>
                </div>
            </div>
            ))}
        </div>
    );
};

export default ItemList;