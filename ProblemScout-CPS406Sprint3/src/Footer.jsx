import styles from './css/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Navigation from './Navigation.jsx'

function Footer() {

    return(
        <div className={styles.footer}> 
            <div className={styles.firstContainer}>
                <div className={styles.iconAndName}>
                    <FontAwesomeIcon className={styles.firstContainerLocationDot} icon={faLocationDot} style={{color: "#158CB7",}} />
                    <p className={styles.firstContainerName}> ProblemScout </p>
                </div>
                <p className={styles.firstContainerDescription}> Report and track local problems in your community </p>
            </div>
            <Navigation title="Navigation" subtopic1="Home" subtopic2="Map" subtopic3="About" /> 
            <Navigation title="Account" subtopic1="Login" subtopic2="Register" subtopic3="Dashboard" />

        </div>
    );
}

export default Footer