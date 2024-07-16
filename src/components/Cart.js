import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItem } from "../utils/cartSlice"
const Cart = () =>{
    const cartItems =useSelector((store)=> store.cart.items)
    const dispatch=useDispatch();
    const handleCart=()=>{
        dispatch(clearCart())
    }
    console.log(cartItems)
 return <div className="cart">
        <div>
            <button onClick={handleCart}>Clear Cart</button>
        </div>
        {cartItems.length===0 ? <div>
            Please Add some items to cart</div>:
            <div className="cartItems">
                {cartItems.map(item=>
                    <div key={item.info.id}>
                        {item.info.name}
                        <div>- {cartItems.length} +</div>
                        {(item.info.price)/100}
                    </div>
                )}
                </div>}
    </div>
}
export default Cart