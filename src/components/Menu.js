import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import useResMenu from "../utils/useResMenu";
import CardItems from "./CardItems";
import { useState } from "react";

const Menu = () => {
    const{resId}=useParams()
    const resData=useResMenu(resId) 
    const [showIndex,setShowIndex]=useState(null)
    const [showItems,setShowItems] = useState(true)
    if(resData === null) return <Shimmer/>
    const menuItem=resData?.cards[2]?.card?.card?.info
    // const {itemCards,categories}=resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // const itemCards1=categories
    const category=resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((item)=>item.card.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(category.map(item=>item.card.card.title))

    return (
        <div className="menu">
            <MenuCard menuItem={menuItem}/>
            {category.map((item,index)=>
            <CardItems key={item.card.card.title} data={item.card.card} showItems={index===showIndex && showItems} setShowItems={(val)=>setShowItems(val)} setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    )
}
export default Menu