import { useState, useEffect } from "react"
import * as homeService from '../../services/homeService';
import HomeItem from "../home/homeItem/HomeItem";
import { Link } from "react-router-dom";

export default function Search() {
    const [ cars, setCars ] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        homeService.getHome()
        .then(result => setCars(result))
    }, [])

    const fetchData = async (value) => {
        fetch("http://localhost:3000/api/cars")
        .then((res) => res.json())
        .then((data) =>{
            const result = data.filter((car) => {
                return car && car.brand && car.brand.toLowerCase().includes(value)
            })
            setCars(result)
        })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value)
    }

    return (
        <section className="section-search">
        <div className="wrapper-search">
            
            <div className="form-search">
                <form className="search">
                    <div>
                        <input
                        type="search"
                        id="mySearch"
                        name="q"
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Brand…" />
                    </div>
                </form>
            </div>
            
            <div className="conteiner-search">
                {cars.length > 0
                ? cars.map((car) => 
                    <div key={car._id} className="car-box">
                    <Link to={`/cars/${car._id}/details`} className="card">
                        <span className="media">
                            <img src={car.image} alt="" />
                        </span>
                        <span className="box-content">
                            <span className="title-search">{car.brand} {car.model}</span>
                        </span>
                    </Link>
                </div>
                )
            :   <div className="no-search">
                <h1 className="no-search">No found cars</h1>
                </div>}

            </div>
            
        
            
        </div>
    </section>
    )
}