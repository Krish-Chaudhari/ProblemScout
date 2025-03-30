import styles from '../css/community.module.css'

function Community() {

    return(
        <div className={styles.community}>
            <p className={styles.communityTitle}> Ready to make your community better </p>
            <p className={styles.communityDescription}> Join our growing community of engaged citizens who are working together to improve their neighbourhoods. </p>
            <button className={styles.communityGetStarted}> Get Started Today </button>
        </div>
    );
}

export default Community