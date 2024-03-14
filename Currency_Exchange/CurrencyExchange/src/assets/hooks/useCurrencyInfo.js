import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://openexchangerates.org/api/latest.json?app_id=564a7cbbabd64377a5e24252a71b6694")
        .then((res) => {if(res.ok) 
            console.log( res)
            return res.json()})
        .then((res) => setData(res["rates"]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;