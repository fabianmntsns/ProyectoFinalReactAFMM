import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import realmadridstore from './assets/realmadridstore.svg';
import { NavLink, useNavigate } from 'react-router-dom'



const NavBar = () => {
    const navigate = useNavigate()
    return(
        <header className={styles.contenedor}>
                <nav>
                    <h3><img onClick={() => navigate('/')} className={styles.img} src={realmadridstore} /></h3>
                        <div className={styles.botonesBox}>
                            <NavLink id={styles.botones} to={`/category/camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Camisetas</NavLink>
                            <NavLink id={styles.botones} to={`/category/shorts`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Shorts</NavLink>
                            <NavLink id={styles.botones} to={`/category/buzos`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Buzos</NavLink>
                        </div>
                        <CartWidget/>
                </nav>
        </header>
    )
}

export default NavBar 
