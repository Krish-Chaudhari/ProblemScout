import styles from '../css/navigation.module.css'

function Navigation({title, subtopic1, subtopic2, subtopic3}) {
    return(
        <div className={styles.navigation}>
            <p className={styles.navigationTitle}> {title} </p>
            <p className={styles.subtopic1}> {subtopic1} </p>
            <p className={styles.subtopic2}> {subtopic2} </p>
            <p className={styles.subtopic3}> {subtopic3} </p>
        </div>
    );
}

export default Navigation