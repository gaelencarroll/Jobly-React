import React, {useState, useRef, useEffect} from 'react'

function useLocalStorage(key, first=null){
    const initValue = localStorage.getItem(key) || first;
    const [item, setItem] = useState(initValue)
    useEffect(function setLocalStorage(){
        if(item===null){
            localStorage.removeItem(key)
        }
        else{
            localStorage.getItem(key,item)
        }
    }, [key,item])
    return [item,setItem]
}

export default useLocalStorage;