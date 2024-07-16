import { useState } from "react"
import { CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem,removeItem } from "../utils/cartSlice"
const CardItems = ({data,showItems,setShowIndex,setShowItems}) => {
    const dispatch= useDispatch();

    const handleClick = (item) =>{
        dispatch(addItem(item))
    }
    const categoryHandler =()=>{
        setShowIndex()
        setShowItems(!showItems)
    }
   
return (
    <div>
        <div className="category" onClick={categoryHandler}>
            <span>
            {data.title} ({data.itemCards.length}) 
            </span>
            <span>
                {!showItems ?<span>⬇️</span>:
                <span>⬆️</span>}
                </span>
            </div>
    {showItems && <div >
        {data.itemCards.map(item=><div className="carditems" >
        <div className="hr"></div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <div className="itemName">{item.card.info.name}</div>
        <div className="itemprice">₹{(item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</div>
        <div className="itemrating">{item.card.info.ratings.aggregatedRating.rating}</div>
        <div className="itemdesc">{item.card.info.description}</div>
        </div>
        <div>
            <div className="addbtn">
            <button onClick={()=>handleClick(item.card)}>Add +</button>
            </div>
            <img className="menuimage" src={CDN_URL+item.card.info.imageId}/>
        </div>
        </div>
        
        </div>)}
    </div>}
    <div className="dhr"></div>
    </div>
)
}
export default CardItems