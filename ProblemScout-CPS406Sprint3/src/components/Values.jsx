import styles from '../css/values.module.css'
import Value from '../components/Value.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";

function Values() {
    return(
        <div className={styles.values}> 
            <p className={styles.valuesTitle}> Our Values </p>
            <div className={styles.valuesContainer}>
                <Value iconImg={faUsers} subtitle="Community First" description="We prioritize the needs of communities and focus on solutions that bring people together to solve common problems." />
                <Value iconImg={faUsers} subtitle="Trust and Transparency" description="We believe in open communication and providing clear, real-time updates on the status of reported problems." />
                <Value iconImg={faUsers} subtitle="Innovation" description="We continuously seek better ways to connect citizens with authorities and improve the problem resolution process." />
            </div>        
        </div>
    );
}

export default Values