import styles from '../css/difference.module.css'
import ProblemBox from '../components/ProblemBox.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Difference() {
    return(
     <div className={styles.differenceContainer}>
        <h1 className={styles.differenceTitle}> Making a difference together </h1>
        <div className={styles.problemsContainer}> 
            <ProblemBox num="3" title="Problems Reported" icon={faExclamationTriangle}/>
            <ProblemBox num="2" title="Problems In Progress" icon={faArrowTrendUp} /> 
            <ProblemBox num="1" title="Problems Resolved" icon={faCircleCheck}/>
        </div>

     </div>   
    )
}

export default Difference