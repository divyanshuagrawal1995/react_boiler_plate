import {useState, useEffect} from 'react'

const useLocalStorage = (prefixedKey,initialValue) => {
    const [item,setItem] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === "function") return initialValue()
        return initialValue

    })
    useEffect(()=>{
        if(item || item && Object.keys(item).length) localStorage.setItem(prefixedKey,JSON.stringify(item))

    },[prefixedKey,item])
    return [item,setItem]
}


export default useLocalStorage

