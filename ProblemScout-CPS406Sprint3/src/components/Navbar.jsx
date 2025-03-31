import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

import styles from '../css/navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.leftPortion}>
                <FontAwesomeIcon className={styles.locationDot} icon={faLocationDot} />
                <h1 className={styles.projectName}> ProblemScout </h1>
            </div>
            <div className={styles.rightPortion}>
                <Link to="/"> 
                    <button className={styles.navbarHome}> Home </button>
                </Link>
                <div className={styles.loginContainer}>
                    <FontAwesomeIcon className={styles.loginImg} icon={faRightToBracket} />
                    <Link to="/login">
                        <button className={styles.loginButton}> Log In </button>
                    </Link>
                </div>
                <div className={styles.signupContainer}>
                    <FontAwesomeIcon className={styles.signupImg} icon={faUserPlus} />
                    <button className={styles.signupButton}> Sign Up </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar