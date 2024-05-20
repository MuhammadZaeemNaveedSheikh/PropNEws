import PropTypes from "prop-types";

import formatDate from "../../utils/formate_date";
import getCategoryLogo from "../../utils/getCategoryLogo";

const BlogCard = ({
  title,
  description,
  category,
  date,
  image,
  estimated_time,
}) => {
  return (
    <div className="md:max-w-[720px] hover:bg-white hover:bg-opacity-5 p-5 rounded-2xl cursor-pointer flex items-start gap-8 lg:flex-nowrap flex-wrap">
      <div className="w-full md:max-w-[308px] h-[182px]">
        <img
          src={"http://via.placeholder.com/600x400"}
          alt="title"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="max-w-[338px]">
        <p className="text-[15px] text-gray-dark flex items-center">
          <span>{formatDate(date)}</span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span className="capitalize flex items-center gap-1">
            <img src={getCategoryLogo(category)} className="w-6 h-6" />
            {category}
          </span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span>{estimated_time}</span>
        </p>
        <h2 className="text-2xl md:text-lg font-semibold max-w-[582px] my-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-dark mt-1 max-w-[582px] line-clamp-2">
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
