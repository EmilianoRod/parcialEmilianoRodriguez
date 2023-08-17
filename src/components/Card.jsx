/* eslint-disable react/prop-types */
import './Card.css';


function Card({ nombre, color }) {
    return (
        <div className="card">
            <h3>Hola {nombre}!</h3>
            <h5>Sabemos que tu color favorito es:</h5>
            <p>{color}</p>
        </div>
    )
}

export default Card;