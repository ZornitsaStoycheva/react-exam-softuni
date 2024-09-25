import * as carService from '../../services/carsService'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import AuthContext from '../../context/authContext'

export default function AddCar() {

    const {
        userId,
        user
    } = useContext(AuthContext)
    const navigate = useNavigate();
    const [errors, setErors] = useState({});
    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget))

        try {
            await carService.create({...carData,owner: userId});
            navigate('/cars')
        
        } catch (error) {
            console.log(error.message)
        }
     
    }
   
    return (
        <section className="create-section">

        <form className="create" onSubmit={createCarSubmitHandler}>
        
            <header>
                <h1>Create Car</h1>
            </header>
    
            <div className="field">
                <input type="text" name="brand" id="brand" placeholder="brand" required />
                <label htmlFor="brand">Brand</label>
            </div>

            <div className="field">
                <input type="text" name="model" id="model" placeholder="model" required  />
                <label htmlFor="model">Model</label>
            </div>
    
            <div className="field">
                <input type="text" name="transmission" id="transmission" placeholder="transmission" required />
                <label htmlFor="transmission">Transmission</label>
            </div>

            <div className="field">
                <input type="text" name="color" id="color" placeholder="color" required />
                <label htmlFor="color">Color</label>
            </div>

            <div className="field">
                <input type="text" name="desc" id="desc" placeholder="desc" required />
                <label htmlFor="desc">Description</label>
            </div>
    
            <div className="field">
                <input type="text" name="image" id="image" placeholder="Image" required />
                <label htmlFor="image">Image</label>
            </div>

            <input type="submit" value="Add Car" />
    
        </form>
    </section>
    )
}