import styles from '../css/AboutHero.module.css'

function AboutHero() {
    return(
        <div className={styles.heroContainer}> 
            <p className={styles.heroTitle}> About ProblemScout </p>
            <p className={styles.heroSubTitle}> Empowering communities to identify, report, and resolve local issues together </p>
            <div className={styles.heroMission}> 
                <div className={styles.heroMissionLeft}>
                    <p className={styles.missionTitle}> Our Mission </p>
                    <p className={styles.missionDescription}> ProblemScout was created with a simple but powerful vision: to provide communities with an
                        effective platform to report and track local problems. </p>
                    <p className={styles.missionDescription}> We believe that by making it easier for residents to identify issues and for authorities to respond, we can create safer, cleaner, and more connected communities.</p>
                </div>
                <div className={styles.heroMissionRight}>
                    <img src="https://t3.ftcdn.net/jpg/01/46/19/40/360_F_146194093_iagojh8CICLuAkHn3tfWoUMG9CDaplFN.jpg" className={styles.missionImg}/>
                </div>
            </div>
        </div>
    );
}

export default AboutHero