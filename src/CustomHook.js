import { useEffect, useState } from "react"


const useFetchData=(initialvalue,url)=>{
const [data,setData]=useState(initialvalue)
const [loading,setLoading]=useState(true)

useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(result=>{
        setData(result)
        setLoading(false)
    })
},[])
        return([data,setData,loading])

}

export default useFetchData;

/* useFetchData([],"https://jsonplace.com")
useFetchData([],"https://reqres.com") */