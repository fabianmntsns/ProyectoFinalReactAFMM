import { useState } from "react"



const CheckoutForm = ({onConfirm}) => {
    const [name , setName ] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail ] = useState('')
    const [address, setAddress] = useState('')


    const handleConfirm = (e) => {
        e.preventDefault()

    const userData = {
        name, phone, email, address
    }

    onConfirm(userData)

    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    nombre
                    <input
                    className="Input"
                    type="text" 
                    value={name}
                    onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className="Label">
                    teléfono
                    <input
                    className="Input"
                    type="number" 
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label className="Label">
                    e-mail
                    <input
                    className="Input"
                    type="email" 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <label className="Label">
                    dirección
                    <input
                    className="Input"
                    type="text" 
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}/>
                </label>
                <button > Crear orden </button> 

            </form>

        </div>
    )
}

export default CheckoutForm