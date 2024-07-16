const MenuCard = ({menuItem}) => {
    console.log("body rendered")
    const {name,areaName,avgRating,sla,cuisines, totalRatingsString,costForTwoMessage,uniqueId}=menuItem
    return(
    <div className="menucard">
        <div className="" style={{marginLeft:"16px"}}><h1>{name}</h1></div>
        <div style={{border:"1px solid gray",borderRadius:"20px",boxShadow:"10px 20px 8px #d3d3d3"}}>
            <div style={{marginLeft:"16px"}}>
            <div className="price" >{avgRating} ({totalRatingsString})•{costForTwoMessage}</div>
            <div className="cuisines" >{cuisines?.map(item=><p key={uniqueId}>{item}, </p>)}</div>
            <div className="outlet"><div style={{fontSize:"14px",fontWeight:"700",marginRight:"12px"}}>Outlet</div><div>{areaName}</div></div>
            <div className="delivery"style={{fontSize:"14px",fontWeight:"700",lineHeight:"28px"}}>{sla.slaString}</div>
            <div style={{fontSize:"14px",fontWeight:"200",lineHeight:"32px"}}>Order above 149 for discounted delivery fee</div>
            </div>
        </div>
    </div>)
}

export default MenuCard