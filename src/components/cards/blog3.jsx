import PropTypes from "prop-types";

import formatDate from "../../utils/formate_date";
import getCategoryLogo from "../../utils/getCategoryLogo";


const BlogCard = ({
  title,
  description,
  company,
  companylogo,
  category,
  date,
  image,
  estimated_time,
}) => {
  return (
    <div className="rounded-2xl gap-8 lg:flex-nowrap flex-wrap my-5 flex justify-center">

      <div className="">
        <p className="text-[15px] text-gray-dark flex items-center font-inter mb-4">
          <span>{formatDate(date)}</span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span className="capitalize flex items-center gap-1">
            <img src={getCategoryLogo(category)} className="w-6 h-6" />
            {category}
          </span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span>{estimated_time}</span>
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        <div className="grid-cols-2 flex flex-wrap gap-x-2 my-6">
          <img
            src={companylogo}
            alt="title"
            className="w-6 h-6 rounded-xl"
          />

          <p className="text-gray-dark mt-1  line-clamp-2 text-sm">
            {company}
          </p>
        </div>
        <div className="w-full h-[436px]">
          <img
            src={image}
            alt="title"
            className="w-full h-full object-cover rounded-xl"
          />

        </div>
        <p className="text-gray-dark mt-1 text-wrap overflow-clip text-sm font-inter">
          {description}
        </p>

      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  estimated_time: PropTypes.string.isRequired,
};

export default BlogCard;
