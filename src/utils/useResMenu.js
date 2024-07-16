import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useResMenu =(resId) =>{
    const[resData,setResData]=useState(null)

useEffect(()=>{
    fetchMenu()
},[])

const fetchMenu=async()=>{
    const data= await fetch(MENU_API + resId)
    const json= await data.json()
    setResData(json.data)
}
return resData
}
export default useResMenu