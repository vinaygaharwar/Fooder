import React, { useEffect, useState } from 'react'
import '../App.scss';
import ResCard,{withDiscount} from './ResCard';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import { API_URL } from '../utils/constants';
function Body() {
    const[data,setData]=useState([])
    const[filteredData,setFilteredData]=useState([])
    const[searchText,setSearchText]=useState("")
    const DiscountResCard=withDiscount(ResCard)

    useEffect(()=>{
        fetch(API_URL)
        .then(res=> res.json())
        .then(res=>{
            // console.log(res.data.cards[4].card.card.gridElements.infoWithStyle.
            //     restaurants.map(item=>item.info))
           const restaurants4 = res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const restaurants3 = res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const restaurants2 = res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                const restaurants = restaurants4 ? restaurants4 : 
                                   restaurants3 ? restaurants3 : 
                                   restaurants2;

                if (restaurants) {
                    setData(restaurants);
                    setFilteredData(restaurants);}
        })
    },[])
console.log(filteredData)
const resHandler=()=>{
    let updatedData=data.filter(item=>item.info.avgRatingString>4.0)
    setFilteredData(updatedData)
}
  return data.length===0 ? <Shimmer/>: (
    <div style={{margin:'30px'}}>
        <div className='filter'>
            <div className='search'>
            <input type='text' className='searchBox' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className='searchbtn' onClick={()=>{
                const filteredText= data.filter(item=>item.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                setFilteredData(filteredText)
            }}>Search</button>
            </div>
            <div> 
            <button className='resbtn' onClick={resHandler}>Top Rated Restaurants</button>
        </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:'32px'}}>
        {filteredData && filteredData.map (item =>
            <Link style={{textDecoration:"none",color:"black"}} key={item.info.id} to={"/restaurants/"+item.info.id}>
                 {item?.info?.aggregatedDiscountInfoV3?.header?(<DiscountResCard item={item}/>):(<ResCard  item={item}/>)}
                 </Link>
                 )}
        </div>
    </div>
  )
}

export default Body