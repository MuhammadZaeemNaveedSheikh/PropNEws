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
    <div className="md:max-w-xs mx-auto hover:bg-white hover:bg-opacity-5 rounded-2xl cursor-pointer gap-4 lg:flex-nowrap flex-wrap">
      <div className="md:h-auto">
        <img
          src={image}
          alt="title"
          className="w-[352px] h-[190px] object-cover rounded-xl"
        />
      </div>
      <div className="max-w-[338px]">
        <p className="text-sm text-gray-dark flex items-center mt-3 font-inter ">
          <span>{formatDate(date)}</span>
          <span className="mx-2">•</span>
          <span className="capitalize flex items-center gap-1">
            <img src={getCategoryLogo(category)} className="w-6 h-6" alt={category} />
            {category}
          </span>
          <span className="mx-2">•</span>
          <span>{estimated_time}</span>
        </p>
        <h5 className="text-lg md:text-lg font-inter font-semibold mt-2 text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm font-light text-gray-dark font-inter font-semibold mt-1 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center mt-2">
          <img 
            src={companylogo}
            alt="company logo"
            className="w-6 h-6 rounded-xl"
          />
          
          <p className="text-sm md:text-base text-gray-dark ml-2 line-clamp-1 font-inter">
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
