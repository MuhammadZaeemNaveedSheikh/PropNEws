import { Link } from "react-router-dom"
import Horizontalcard from "../../../components/cards/horizontalcard"
import blogImg from "../../../assets/images/blog.png"

const Archive = () => {
  return (
    <section>
        <div className="flex justify-between items-center max-w-[683px] mx-auto font-bold">
            <h2 className="text-[44px]">Archive</h2>
            <Link className="text-blue text-lg hover:underline">See all &nbsp;{">"}</Link>
        </div>
        <div className="space-y-8 mt-8">
          <Horizontalcard title={"TOL Predictions Contest: Real Chads Make Predictions"} img={blogImg} body={"Did you always feel special, like you can predict the future? Test your foresight, gaze…"} date={"11 apr"} category={"news"} time={"2 min"} link={"/"} />
          <Horizontalcard title={"TOL Predictions Contest: Real Chads Make Predictions"} img={blogImg} body={"Did you always feel special, like you can predict the future? Test your foresight, gaze…"} date={"11 apr"} category={"news"} time={"2 min"} link={"/"} />
        </div>
    </section>
  )
}

export default Archive
