/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = (props) => {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [mensajeError, setMensajeError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombre.trim() === '') {
            setMensajeError('Por favor chequea que la información sea correcta')
        }else if(nombre.length < 3){
            setMensajeError('Por favor chequea que la información sea correcta')
        }else if(nombre.trim() !== nombre ){
            setMensajeError('Por favor chequea que la información sea correcta')
        }else if (color.trim() === '') {
            setMensajeError('Por favor chequea que la información sea correcta')
        }else if(color.length < 6){
            setMensajeError('Por favor chequea que la información sea correcta')
        }else {
            props.onSubmit({ nombre, color })
            setNombre('')
            setColor('')
            setMensajeError('')
        }
    }

    return (
        <div>
            <h2>Elige un color</h2>
            <form onSubmit={handleSubmit}>

                    <input
                        type='text'
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        placeholder='Ingresa tu nombre'
                    />
                <br />

                    <input
                        type='text'
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                        placeholder='Ingresa tu color favorito (formato HEX)'
                    />
                <br />

                <button type='submit'>Enviar</button>
            </form>
            {mensajeError && <p>{mensajeError}</p>}
        </div>
    )
}

export default Form
