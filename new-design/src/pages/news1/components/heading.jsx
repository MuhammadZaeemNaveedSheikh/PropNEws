import logoBorderless from '../../../assets/images/logoborderless.png'
import { useAuth } from '../../../context/auth';


const SubscribeCTA = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold font-raleway sm:text-4xl flex items-center gap-2">
                Hot & Fresh Reads Daily
                <img src={logoBorderless} alt='' />
            </h2>
            <p className="text-gray font-kanit sm:text-xl max-w-[673px] text-center">Join over 15,000+ monthly readers in our 5min daily newsletter about all things prop firms and trading related.</p>
            <form className="flex flex-wrap items-center mt-4 border border-gray-darker p-2 rounded-xl">
                <input type="email" placeholder="Enter your email" className="p-2 w-96 rounded-l-lg bg-secondary focus:outline-none" />
                <button className="text-blue p-2 rounded-r-lg font-kanit">Subscribe</button>
            </form>
        </div>
    )
}

const HeadNews = () => {
    
    const user = useAuth().user;
    
    return (
        <>
            <header className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-bold font-raleway">FundingFactory newsletters</h1>
                <p className="text-gray">Dive into paste editions of FundingForum $ subscribe below for you free subscription! Be in the know with the 5-minute PropFirm newsletter that over 15,000 monthly readers trust</p>
            </header>
            <hr className="border-gray-darker mt-8" />
            {
                !user && <SubscribeCTA />
            }
        </>
    )
}
export default HeadNews