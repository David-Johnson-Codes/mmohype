import { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import test from "../assets/test.png"


const logo = test;

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }


    return (
        <nav>
            <img src={logo} className={styles.logo} alt="" />
            <ul
                className={toggle ? styles.listHide : styles.listShow}>

                <a href={"#1"} className={styles.navAnchor}><li>Blue Protocol</li></a>
                <a href={"#2"} className={styles.navAnchor}><li>Ashes of Creation</li></a>
                <a href={"#3"} className={styles.navAnchor}><li>Chrono Odyssey</li></a>
                <a href={"#4"} className={styles.navAnchor}><li>The Day Before</li></a>
                <a href={"#5"} className={styles.navAnchor}><li>Palia</li></a>
            </ul>
            <div className={styles.navBtn}>
                <i
                    onClick={handleToggle}
                    className={toggle ? 'fas fa-times' : 'fas fa-bars'
                    } ></i>
            </div>
        </nav >
    );
}

export default NavBar;