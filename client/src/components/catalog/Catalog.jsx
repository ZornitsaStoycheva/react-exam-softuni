import { useEffect, useState } from "react"
import * as carService from '../../services/carsService'
import CarItem from "./carItem/CarItem"

export default function Catalog() {
    const [ cars, setCars ] = useState([])

    useEffect(() => {
        carService.getAll()
        .then(result => setCars(result))
    }, [])
    return (
        <section className="section-catalog">
        <div className="wrapper-catalog">
            <div className="catalog">

                {cars.length > 0
                ? cars.map((car) => <CarItem key={car._id} {...car}/>)
                : <h1>No added cars yet</h1>
                }
            </div>
        </div>
    </section>
    )
}