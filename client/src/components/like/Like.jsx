import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import * as carService from '../../services/carsService'
import AuthContext from '../../context/authContext'
 

export default function LikeButton() {
    const {
        isAutenticated,
        username,
        email,
        userId,
        user
    } = useContext(AuthContext)

    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [car, setCar] = useState({});
    const { carId } = useParams();
 
    useEffect(()=> {
        carService.getCar(carId) 
        .then(setCar)
        .then(setLiked(isLiked))
    }, [carId])

    let isLiked = car.likes?.length > 0 ? car.likes.some(like => like === userId) : false;
    
   console.log(isLiked)

    const handleLikeUnlike = async () => {
        try {
            await carService.likes(carId, userId);
            setLiked(!isLiked)
        } catch (error) {
            setLiked(isLiked)
        }
        navigate(`/cars/${carId}/details`)
    }
   
    return (
        <div className="like-button-container">
            
            
        <div className="like-button">
            {!isLiked ?
           <button onClick={handleLikeUnlike}>Like</button> 
         : <p style={{color: 'white'}}>you liked</p> }
        </div>


        </div>
    )

}