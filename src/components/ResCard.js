import React from 'react'
import {CDN_URL} from '../utils/constants'

function ResCard({item}) {
  return (
    <div >
           
                <div className='res-card'>
                    <div style={{height:'150px'}}>
                    <img className='card-image'alt='img' src={CDN_URL+ item.info.cloudinaryImageId}/>
                    </div>
                    <div style={{lineHeight:'15px',marginTop:'5px'}}>
                    <p style={{fontSize:'18px',fontWeight:'700',margin:'0px 0px'}}>{item.info.name}</p>
                    <p style={{fontSize:'16px',fontWeight:'700',margin:'0px 0px'}}>{item.info.avgRatingString} . {item.info.sla.slaString}</p>
                    <p style={{fontSize:'16px',margin:'0px 0px'}}>{item.info.cuisines[0]}</p>
                    <p style={{fontSize:'16px',margin:'0px 0px'}}>{item.info.areaName}</p>
                    </div>
                </div>
               
        </div>
  )
}

export const withDiscount= (ResCard)=>{
  return({item})=>{
  return(
    <div>
      <div className='discount'>
      <label className='discountlabel'>{item?.info?.aggregatedDiscountInfoV3?.header}</label>
      <label className='discountlabel'>{item?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
      </div>
      <ResCard item={item}/>
    </div>
  )
  }
}
export default ResCard