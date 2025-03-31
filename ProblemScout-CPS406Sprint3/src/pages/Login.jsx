import styles from '../css/login.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Login() {
    return(
        <div className={styles.login}>
            <div className={styles.titleContainer}>
                <FontAwesomeIcon icon={faLocationDot} style={{color:"#158CB7"}} className={styles.titleIcon} /> 
                <p className={styles.title}> Problem<span className={styles.titleColorPart}>Scout</span></p>
            </div>

            <div className={styles.loginFormContainer}>
                <p className={styles.loginTitle}> Log In</p>
                <p className={styles.credentials}> Enter your credentials to access your account </p>
                <p className={styles.emailTitle}> Email </p>
                <form className={styles.emailForm}>
                    <input type="text" name="email" placeholder="your@email.com" className={styles.emailContainer}/>
                </form>
                <p className={styles.passwordTitle}> Password </p>
                <form className={styles.passwordForm}>
                    <input type="text" name="password" className={styles.passwordContainer} />
                </form>
            </div>
        </div>
    );
}

export default Login