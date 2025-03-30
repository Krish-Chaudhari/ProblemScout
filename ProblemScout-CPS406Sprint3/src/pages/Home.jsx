import Hero from '../components/Hero.jsx'
import Difference from '../components/Difference.jsx'
import RecentReport from '../components/RecentReport.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Community from '../components/Community.jsx'

function Home() {
    return(
        <div>
            <Hero />
            <Difference />
            <RecentReport />
            <HowItWorks /> 
            <Community />
        </div>
    );
}

export default Home