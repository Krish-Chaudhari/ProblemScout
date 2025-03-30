import styles from '../css/benefit.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Benefit({title, description, icon}) {

    return(
        <div className={styles.benefit}>
            <FontAwesomeIcon className={styles.benefitIcon} icon={icon} style={{color: "#158CB7",}} />
            <p className={styles.benefitTitle}> {title} </p>
            <p className={styles.benefitDescription}> {description} </p>
        </div>
    );
}

export default Benefit