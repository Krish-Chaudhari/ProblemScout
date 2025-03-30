import styles from '../css/problembox.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function ProblemBox({num, title, icon}) {
    return(
        <div className={styles.problemBox}> 
            <FontAwesomeIcon className={styles.problemIcon} icon={icon} />
            <p className={styles.problemBoxNum}> {num} </p>
            <p className={styles.problemBoxTitle}> {title} </p>
        </div>
    );    
}

export default ProblemBox