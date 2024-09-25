import { Link } from "react-router-dom";

export default function CarItem({
    _id,
    image,
    brand,
    model,
    transmission,
    color,
    desc
}) {
    return (
        <div className="catalog-content">
                    <div className="media">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h2>{brand} {model}</h2>
                        <p>Transmission: {transmission}</p>
                        <p>Color: {color}</p>
                        <p>{desc}</p>
                    </div>

                    <div className="buttons">
                        <Link to={`/cars/${_id}/details`}>See More</Link>
                    </div>

                    
                </div>
    )
}