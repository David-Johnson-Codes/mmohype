import NavBar from "./NavBar.js"
import Header from "./Header.js"
import Content from "./Content.js"
import Footer from "./Footer.js"
import styles from "../styles/MainContainer.module.css"

const MainContainer = () => {

    return (
        <div className={styles.mainContainer}>
            <NavBar />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default MainContainer;