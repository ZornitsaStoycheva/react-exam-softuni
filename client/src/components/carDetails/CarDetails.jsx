import { useState, useContext, useEffect } from "react"
import * as carService from '../../services/carsService'
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthContext from '../../context/authContext'
import LikeButton from "../like/Like";

export default function CarDetails() {
    const {
        isAutenticated,
        username,
        email,
        userId,
        user
    } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const [ car, setCar ] = useState({});
    const { carId } = useParams();

    useEffect(()=> {
        carService.getCar(carId)
        .then(setCar)
    }, [carId])
 
    const isOwner = car.owner == userId;
   
    const deleteCarSubmitHandler = async (e) => {
        e.preventDefault();
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.brand} ${car.model}?`)

        if(hasConfirmed) {
            await carService.deleteCar(carId);
            navigate('/cars');
        }
    }
    
    const editClickHandler = (e) => {
        e.preventDefault();
        navigate(`/cars/edit/${carId}`)
    }
    
    return (
        <div>
            <section className="section-details">
                <div className="wrapper-details">
                    <div className="container-details">
        
                        <div className="details">
        
                        <div className="wrapper-content">
                        <div className="content-details">
                            <h1>{car.brand} {car.model}</h1>
                            <p className="transmission">Transmission: {car.transmission}</p>
                            <p>Color: {car.color}</p>
                            <p>{car.desc}</p>
                        </div>
        
                        {isAutenticated && isOwner &&(
                            <div className="buttons">
                                <button onClick={editClickHandler}>Edit</button>
                                <button onClick={deleteCarSubmitHandler}>Delete</button>
                            </div> 
                        )}
        
                        {isAutenticated && !isOwner && (
                            <div className="buttons">
                                <LikeButton />
                            </div> 
                        )}
        
                    </div>
        
                    <div className="container-media"></div>
                        <div className="media">
                            <img src={car.image} alt="" />
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
        </div>
    ) 
}