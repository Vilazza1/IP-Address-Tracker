import styles from './Header.module.css'
import img from '../../assets/icon-arrow.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <h1>IP Address Tracker</h1>
            <input type="text" placeholder="Search for any IP address..." /> 
            <button><img src={img} alt="search" /></button>
        </header>
    )
}