import { useState, useEffect } from "react"
import * as homeService from '../../services/homeService';
import HomeItem from "./homeItem/HomeItem";
import Loader from "../loader/loader";

export default function Home() {
    const [ cars, setCars ] = useState([]);
    const [isLoading, setLoading ] = useState(true)

    useEffect(() => {
        homeService.getHome()
        .then(result => {
            setCars(result)
        })
        
    }, [])

    setTimeout(() => {
        setLoading(false)
      }, 2000)

    return (
        
        <section className="section-home">
        <div className="wrapper-home">
            <header>
                <h1>Recently added cars</h1>
            </header>
            {isLoading && (
            <Loader /> )}
            {!isLoading && (
            <div className="conteiner-home">

            {cars.length > 0
                ? cars.map((car) => <HomeItem key={car._id} {...car}/>).reverse().slice(0, 3)
                : <h1>No added cars yet</h1>
                }
            </div>
            )}
        </div>
    </section>
    )
}