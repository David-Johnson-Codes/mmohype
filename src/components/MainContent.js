import styles from "../styles/MainContent.module.css"

const MainContent = (props) => {
    return (
        <div className={styles.mainContent} id={props.id}>
            <div className={styles.iframeContainer}>
                <div className={styles.iframeWrapper}>
                    <iframe src={props.gameVideo} frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
            <div className={styles.info}>
                <h2>{props.gameHeader}</h2>
                <p>{props.description}</p>
                <table>
                    <tr>
                        <td className={styles.columnLeft}>Release Date:</td>
                        <td>{props.releaseDate}</td>
                    </tr>
                    <tr>
                        <td className={styles.columnLeft}>Developer(s):</td>
                        <td>{props.infoDeveloper}</td>
                    </tr>
                    <tr>
                        <td className={styles.columnLeft}>Publisher(s):</td>
                        <td>{props.infoPublisher}</td>
                    </tr>
                    <tr>
                        <td className={styles.columnLeft}>Platform(s):</td>
                        <td>{props.infoPlatforms}</td>
                    </tr>
                </table>
                <a href={props.officialWebsiteLink} className={styles.mainContentAnchor}>
                    <div className={styles.btn}>Official Website</div>
                </a>
            </div>
        </div>
    );
}

export default MainContent;