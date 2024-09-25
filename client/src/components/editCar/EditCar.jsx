import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import * as carService from '../../services/carsService'
import useFormCar from "../../hooks/useFormCar";

export default function EditCar() {

    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getCar(carId)
        .then(result => { 
            setCar(result)
        })
}, [carId])

    const editCarSubmitHandler = async (values) => {
        
        try {
            await carService.edit(carId, values)

            navigate(`/cars/${carId}/details`)
        } catch (error) {
            console.log(error);
        }
    }
    
    const { values, onChange, onSubmit } = useFormCar(editCarSubmitHandler,  car);

    return (
        <section className="edit-section">

        <form className="edit" onSubmit={onSubmit}>
        
            <header>
                <h1>Edit Car</h1>
            </header>
    
            <div className="field">
                <input type="text" 
                name="brand" 
                value={values.brand}
                id="brand" 
                onChange={onChange}
                placeholder="brand" required  />
                <label htmlFor="brand">Brand</label>
            </div>

            <div className="field">
                <input type="text" 
                name="model" 
                value={values.model}
                id="model" 
                onChange={onChange}
                placeholder="model" required />
                <label htmlFor="model">Model</label>
            </div>
    
            <div className="field">
                <input type="text" 
                name="transmission" 
                value={values.transmission}
                id="transmission" 
                onChange={onChange}
                placeholder="transmission" required />
                <label htmlFor="transmission">Transmission</label>
            </div>

            <div className="field">
                <input type="text" 
                name="color" 
                value={values.color}
                id="color" 
                onChange={onChange}
                placeholder="color" required />
                <label htmlFor="color">Color</label>
            </div>

            <div className="field">
                <input type="text" 
                name="desc" 
                value={values.desc}
                id="desc" 
                onChange={onChange}
                placeholder="desc" required />
                <label htmlFor="desc">Description</label>
            </div>
    
            <div className="field">
                <input type="text" 
                name="image" 
                value={values.image}
                id="image" 
                onChange={onChange}
                placeholder="Image" required />
                <label htmlFor="image">Image</label>
            </div>

            <input type="submit" value="Edit Car" />
    
        </form>
    </section>
    )

}