import { Link } from "react-router-dom"

export default function HomeItem({
    _id,
    image,
    brand,
    model,
    transmission,
    color
}) {
    return (
        <div className="car-box">
                    <Link className="card" to={`/cars/${_id}/details`}>
                        <span className="media">
                            <img src={image} alt="" />
                        </span>
                        <span className="box-content">
                            <span className="title">{brand} {model}</span>
                            <span className="desc">Transmission: {transmission}</span>
                            <span className="foot">Color: {color}</span>
                        </span>
                    </Link>
                </div>
    )
}