import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        cartItems.length===0 && alert("Please add items to the Cart");
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4"> 
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
            <button className="p-2 m-2 text-white rounded-lg bg-black" onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
}

export default Cart;