import { useEffect, useState } from "react";

const useOnlinestatus = () => {

    const [onlinestatus, setOnlinestatus] = useState(true)
    //check if online
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlinestatus(false)
        })
        window.addEventListener("online", () => {
            setOnlinestatus(true)
        })
    }, [])
    //return a bool
    return onlinestatus;

}
export default useOnlinestatus;