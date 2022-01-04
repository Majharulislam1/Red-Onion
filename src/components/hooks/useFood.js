import { useEffect, useState } from "react";

const useFood = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("./fackdb.json")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    return [
        food, setFood
    ]

}

export default useFood;