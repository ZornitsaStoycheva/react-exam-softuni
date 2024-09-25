import { useState, useContext, useEffect } from "react";
import * as carService from '../../services/carsService';
import AuthContext from '../../context/authContext'
import { Link } from "react-router-dom";

export default function MyPublish() {
    const {
        userId,
    } = useContext(AuthContext)
    const [ cars, setCars ] = useState([]);

    
    useEffect(() => {
        carService.getAll()
        .then(result => setCars(getMyPub(result)))
    }, [])

    function getMyPub(cars) {
        let result = [];

        cars.forEach(function(car) {
            if(car.owner === userId) {
                result.push(car)
            }
        })
        return result
    }
        
    return (
        <div className="section-catalog">
            <div className="wrapper-catalog">

            <div style={{marginBottom: "2em"}}>
                <h1 style={{color: "silver", borderBottom: "1px solid silver", paddingBottom: "2px"} }>My Publish</h1>
            </div>

            <div className="conteiner-search">
                {cars.length > 0
                ? cars.map((car) =>
                    <div className="car-box">
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
                : <div className="no-search">
                    <h1 className="no-search">No found cars</h1>
                </div>}

                </div>
            </div>
        </div>
    )
}