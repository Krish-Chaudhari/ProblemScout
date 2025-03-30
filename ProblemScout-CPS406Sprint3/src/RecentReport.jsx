import styles from './css/recentreport.module.css'
import Report from './Report.jsx'


function RecentReport() {

    return (
        <div className={styles.recentReportsSection}>
            <h2 className={styles.recentReportsTitle}> Recent Reports </h2>
            <div className={styles.recentReportsContainer}>
                <Report name="Graffiti on Public Building" address="Public Library, Washington State" description="Inappropriate graffiti on the wall of the public libary.
                Needs to be removed." />
                <Report name="Poop on the Street" address="34 5th Street" description="There is poop on the street, likely from a dog. Needs to be removed as soon as 
                possible." /> 
                <Report name="Flooded UnderPass" address="Broadway UnderPass" description="The underpass on Broadway is flooded and impassable after recent rain. Needs 
                to be removed as soon as possible" />
            </div>
        </div>
    );

}

export default RecentReport