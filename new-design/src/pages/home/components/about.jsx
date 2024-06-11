import { about_text } from "../config"
import abstractImg from "../../../assets/images/abstract.png"
import { Link } from "react-router-dom"
import EstPrizePool from "../../../components/estprizepool"

const AboutCard = () => {
    return (
        <div className="font-inter border border-gray-darker rounded-3xl p-8 space-y-6 w-full sm:max-w-[603px]">
            <div className="space-y-4">
                <h2 className="font-medium text-xl">{about_text.title}</h2>
                <p className="font-light text-[#D1D5DB] max-w-[422px]">{about_text.body}</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-medium">Links</h2>
                <div className="flex gap-2 flex-wrap">
                    {
                        about_text.links.map((link, index) => (
                            <a key={index} href={link.href} className="flex gap-1 hover:bg-gray-darker p-1 hover:rounded-lg">
                                <img src={link.icon} alt={link.title} title={link.title} />
                                <p>{link.title}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
const LeaderBoard = () => (
    <Link to="leaderboard" className="font-inter border border-gray-darker rounded-3xl p-8 w-full relative h-[238px] overflow-hidden group">
        <h2 className="font-bold text-[44px] group-hover:underline">Leaderboard</h2>
        <p className="text-gray text-base max-w-[200px]">Invite Friends and join the competition</p>
        <img src={abstractImg} alt="" className="absolute bottom-0 right-0" />
    </Link>
)

const About = () => {
  return (
    <section className="flex justify-center gap-8 flex-wrap">
      <AboutCard />
      <div className="flex flex-col gap-8 w-full md:max-w-[472px]">
        <EstPrizePool />
        <LeaderBoard />
      </div>
    </section>
  )
}

export default About
