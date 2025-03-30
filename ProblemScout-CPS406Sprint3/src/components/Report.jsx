import styles from '../css/report.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Report({name, address, description}) {
    return(
        <div className={styles.report}>
            <p className={styles.reportTitle}> {name} </p>
            <div className={styles.addressContainer}> 
                <FontAwesomeIcon className={styles.addressIcon} icon={faLocationDot} />
                <p className={styles.reportAddress}> {address} </p>
            </div>
            <p className={styles.reportDescription}> {description} </p>
            <button className={styles.reportBtn}> View Details </button>
        </div>
    );
}

export default Report