import styles from '../css/signup.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Signup() {
    return(
        <div className={styles.signup}>
            <div className={styles.titleContainer}>
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#158CB7", }} className={styles.signupIcon} />
                <p className={styles.title}> Problem<span className={styles.titleColorPart}>Scout</span></p>
            </div>

            <div className={styles.signupContainer}>
                <p className={styles.createAccountTitle}> Create an Account </p>
                <p className={styles.description}> Join ProblemScout and start reporting issues in your community </p>
                <form className={styles.fullNameForm}>
                    <p className={styles.fullName}> Full Name </p>
                    <input type="text" name="fullname" />
                </form>
                <form className={styles.emailForm}>
                    <p className={styles.email}> Email </p>
                    <input type="text" name="email" placeholder="your@email.com" />
                </form>
                <form className={styles.passwordForm}>
                    <p className={styles.password}> Password </p>
                    <input type="text" name="password" />
                </form>
                <form className={styles.confirmPasswordForm}>
                    <p className={styles.confirmPassword}> Confirm Password </p>
                    <input type="text" name="confirmPassword" />
                </form>
                <button className={styles.signupBtn}> <FontAwesomeIcon icon={faUserPlus} className={styles.signupBtnIcon} /> Sign Up </button>
            </div>
        </div>

    );
}

export default Signup