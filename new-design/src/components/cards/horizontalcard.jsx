import { Link } from "react-router-dom"
import { getCategoryLogo } from "../../utils/main"

/* eslint-disable react/prop-types */
const Horizontalcard = ({ title, date, time, category, body, img, link }) => {
  return (
    <Link to={link} className="flex flex-wrap gap-8 w-full md:max-w-[683px] mx-auto group">
      <div className="w-full sm:w-[308px] h-[182px] border border-gray-darker rounded-xl">
        <img src={img} className="w-full h-full rounded-xl object-cover" />
      </div>
      <div className="space-y-2 sm:max-w-[338px]">
        <div className="flex gap-2 text-gray-dark">
            <p>{date}</p>
            <p>•</p>
            <p className="flex gap-1 items-center">
              <img src={getCategoryLogo(category)} className="opacity-60" />
              {category}
            </p>
            <p>•</p>
            <p>{time} read</p>
        </div>
        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="text-[#D5D5D8] line-clamp-2">{body}</p>
      </div>
    </Link>
  )
}

export default Horizontalcard
