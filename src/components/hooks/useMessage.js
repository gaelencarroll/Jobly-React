import React, {useState, useRef, useEffect} from 'react'

function useMessage(time=5000){
    const [active, setActive] = useState(false)
    const messageRef = useRef(false)

    useEffect(function showMessage(){
        if(active && !messageRef.current){
            messageRef.current = true;
            setTimeout(function removeMessage(){
                setActive(false)
                messageRef.current = false
            }, time)
        }
    }, [active, time])

    return [active,setActive]
}

export default useMessage;