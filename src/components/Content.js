import styles from "../styles/Content.module.css"
import MainContent from "./MainContent";
import { master } from "../data/GameInfo.js"
import animeBackground from "../assets/animeBackground.jpg"

const background = animeBackground;
const gameInfo = master; //data from GameInfo file



const Content = () => {

    return (
        <div className={styles.content}> {/* contains both main content and side content boxes */}
            <img src={background} className={styles.background} />
            <div className={styles.mainContent}> {/* container for main content */}
                {gameInfo.map((data) => {
                    return <MainContent id={data.id + 1} key={data.id} {...data}></MainContent>;
                })}
            </div>

            <div className={styles.sideContent}> {/* currently no content */}
                {/*  <SideContent>  */}
            </div>

        </div >
    );
}

export default Content;
