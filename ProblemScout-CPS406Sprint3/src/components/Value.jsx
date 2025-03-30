import styles from '../css/value.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Value({iconImg, subtitle, description}) {
    return(
        <div className={styles.value}>
            <FontAwesomeIcon icon={iconImg} className={styles.valueIcon} style={{color: "#158CB7",}} />
            <p className={styles.valueSubTitle}> {subtitle} </p>
            <p className={styles.valueDescription}> {description} </p>
        </div>
    );
}

export default Value