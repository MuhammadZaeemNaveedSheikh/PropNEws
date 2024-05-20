import ForumNav from "./firmnav"
import HeadNews from "./headingforum"
import FirmDetailCard from "./firmsblog"
import CreatePost from "./createpost"
import Reviews from "./reviews"
import SideTab from "./sidetab"
const FirmDetail = () => {
    return (
        <div>
            <HeadNews />
            <ForumNav />
            <div className="py-8">
                <FirmDetailCard />
            </div>
            <CreatePost />

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/4 flex justify-center lg:justify-start">
                    <div className="bg-transparent rounded-lg">
                        <Reviews />
                    </div>
                </div>
                <div className="w-full lg:w-1/4 mt-4 lg:mt-0 ml-0 lg:ml-2 flex justify-center lg:justify-end">
                    <div className="bg-transparent rounded-lg">
                        <SideTab />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FirmDetail