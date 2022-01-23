import { useEffect, useState } from "react";

const useFood = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("https://pure-lake-44398.herokuapp.com/food")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [food])

    return [
        food, setFood
    ]
}

export default useFood;