import styles from '../css/howitworks.module.css'
import Benefit from '../components/Benefit.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function HowItWorks() {

    return(
        <div className={styles.howItWorksContainer}> 
            <p className={styles.howItWorksTitle}> How It Works </p>
            <div className={styles.benefitsContainer}> 
                <Benefit title="Report a Problem" description="Idenitfy an issue in your community and place it on a map with details" icon={faLocationDot}/>
                <Benefit title="Track Progress" description="Follow the status of your reported problems and see when they're being addressed." icon={faArrowTrendUp} />
                <Benefit title="Problem Solved" description="Get notified when your reported issues have been solved" icon={faCircleCheck} />
            </div>
        </div>
    );

}

export default HowItWorks