import fireIcon from "../assets/icons/fire.svg"
const EstPrizePool = () => (
    <div className="font-inter border border-gray-darker rounded-3xl p-8 w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
            <img src={fireIcon} alt="" />
            <h2 className="text-sm font-kanit text-gray">Est. Prize Pool</h2>
        </div>
        <p className="text-2xl">$500k</p>
    </div>
)

export default EstPrizePool