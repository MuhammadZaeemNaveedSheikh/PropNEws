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
    <div className="md:max-w-xs hover:bg-white hover:bg-opacity-5 mx-auto rounded-2xl cursor-pointer gap-4 lg:flex-nowrap flex-wrap">
      <div className="w-full md:max-w-[308px] h-[182px]">
        <img
          src={image}
          alt="title"
          className="w-full h-full object-cover rounded-xl"
        />

      </div>
      <div className="max-w-[338px]">
        <p className="text-[15px] text-gray-dark flex items-center mt-2">
          <span>{formatDate(date)}</span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span className="capitalize flex items-center gap-1">
            <img src={getCategoryLogo(category)} className="w-6 h-6" />
            {category}
          </span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span>{estimated_time}</span>
        </p>
        <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-dark mt-1 mb-1 max-w-[582px] line-clamp-2">
          {description}
        </p>
        <div className="grid-cols-2 flex flex-wrap gap-x-1">
          <img
            src={companylogo}
            alt="title"
            className="w-6 h-6 rounded-xl"
          />

          <p className="text-gray-dark mt-1 max-w-[582px] line-clamp-2 text-sm">
            {company}
          </p>
        </div>
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
