import { Link } from "react-router-dom"
import abstractImg from "../../assets/images/abstract.png"
import EstPrizePool from "../../components/estprizepool"
import StarIcon from "../../assets/icons/star.svg"
import arrowDownIcon from "../../assets/icons/arrowdown.svg"
import Table from "./components/table"

const BackLink = () => (
    <div className="px-7 py-4 border border-gray-darker rounded-xl">
        <Link to={'/'} className="font-raleway font-bold">{"<"} Go Back</Link>
    </div>    
)

const LeaderBoard = () => (
    <div className="font-inter border border-gray-darker rounded-3xl p-8 w-full relative h-[238px] overflow-hidden">
        <h2 className="font-bold text-[44px]">Leaderboard</h2>
        <p className="text-gray text-base max-w-[200px]">Invite Friends and join the competition</p>
        <img src={abstractImg} alt="" className="absolute bottom-0 right-0" />
    </div>
)

const ContestRules = () => (
    <div className="font-inter border border-gray-darker rounded-3xl p-8 w-full relative overflow-hidden space-y-4">
        <div className="flex justify-between">
            <h2 className="font-semibold text-xl">Contest Rules</h2>
            <img src={arrowDownIcon} alt="" /> 
        </div>
        <div className="flex items-start gap-4">
            <img src={StarIcon} alt="" className="mt-1" />
            <p className="text-gray">Invite Friends to subscribe with your affiliate link and earn 1 tickets per referral.</p>
        </div>
        <div className="flex items-start gap-4">
            <img src={StarIcon} alt="" className="mt-1" />
            <p><span className=" text-blue">Raffle style lottery:</span>{" "}Competition will end every 30 days at which point the winner will be drawn at random using open source raffle picker located here  </p>
        </div>
    </div>
)

const Stats = () => (
    <div className="flex justify-between divide-x-2 divide-gray-darker py-4 font-kanit">
        <div className="flex flex-col gap-2 justify-start items-center w-full">
            <h3 className="text-sm font-medium text-gray">My rank</h3>
            <p className="text-3xl font-bold font-montserrat">3,349</p>
        </div>
        <div className="flex flex-col gap-2 justify-start items-center w-full">
            <h3 className="text-sm font-medium text-gray">Refferals</h3>
            <p className="text-3xl font-bold font-montserrat">33</p>
        </div>
        <div className="flex flex-col gap-2 justify-start items-center w-full">
            <h3 className="text-sm font-medium text-gray">Tickets Earned</h3>
            <p className="text-3xl font-bold font-montserrat">330</p>
        </div>
    </div>
)

const Leaderboard = () => {
  return (
    <main className="space-y-11">
      <BackLink />
      <LeaderBoard />
      <div className="flex items-start justify-center gap-6 flex-wrap md:flex-nowrap">
      <div className="w-[800px] space-y-6">
        <Stats />
        <Table />
      </div>
        <div className="w-[600px] space-y-8">
            <EstPrizePool />
            <ContestRules />
        </div>
      </div>
    </main>
  )
}

export default Leaderboard
