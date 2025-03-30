import styles from '../css/hero.module.css'
import { Link } from 'react-router-dom'

function Hero() {

    return(
        <div className={styles.heroContainer}>
            <div className={styles.heroLeft}> 
                <h1 className={styles.heroTitle}> Report and Help Your Community Track Problems Big or Small </h1>
                <p className={styles.heroDescription}> Presenting to you ProblemScout, your best companion in the neighbourhood. 
                    ProblemScout makes it easy to identify, report, and follow up on problems later. Help make your community better and track problem resoltuions </p>
                <div className={styles.heroButtonsContainer}>
                    <Link to="/about"> 
                        <button className={styles.reportProblemBtn} link to="/about"> Report a Problem </button>
                    </Link>
                    <button className={styles.learnMoreBtn}> Learn More </button>
                </div>
            </div>
            <div className={styles.heroRight}>
                <img className={styles.heroImg} src="https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
            </div>
        </div>
    );
}

export default Hero