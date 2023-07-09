import { useState } from "react"
import styles from './CheckoutForm.module.css'



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
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className="Form">
                <label className={styles.Label}>
                    Nombre:
                    <input
                    className="Input"
                    type="text" 
                    value={name}
                    onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className={styles.Label}>
                    Teléfono:
                    <input
                    className="Input"
                    type="number" 
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label className={styles.Label}>
                    E-mail:
                    <input
                    className="Input"
                    type="email" 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <label className={styles.Label}>
                    Dirección:
                    <input
                    className="Input"
                    type="text" 
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}/>
                </label>
                <button className={name && phone && email && address ? styles.orderButton : styles.hiddenButton}>
          Crear orden
        </button>
            </form>

        </div>
    )
}

export default CheckoutForm