import styles from "../styles/Header.module.css"

const Header = () => {

    return (
        <section>
            <h1 className={styles.header}>MMO HYPE's Choices for Upcoming MMO's!</h1>
            <p className={styles.para}>by David Johnson - January 2023 </p>
        </section>
    );
}

export default Header;