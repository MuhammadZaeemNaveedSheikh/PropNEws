/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/main";
import { getCategoryLogo } from "../../utils/main";

const PrimaryBlogCard = ({
  title,
  description,
  category,
  date,
  image,
  estimated_time,
}) => {
  return (
    <div className="w-full md:max-w-[600px] rounded-2xl cursor-pointer">
      <div className="w-full md:max-w-[574px] h-[246px] border border-gray-darker rounded-2xl">
        <img
          src={image}
          alt="title"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <p className="text-[15px] text-gray-dark flex items-center mt-4">
        <span>{formatDate(date)}</span>
        <span className="mx-2 text-[10px] text-gray-darker">•</span>
        <span className="capitalize flex items-center gap-1">
          <img src={getCategoryLogo(category)} className="w-6 h-6 opacity-60" />
          {category}
        </span>
        <span className="mx-2 text-[10px] text-gray-darker">•</span>
        <span>{estimated_time}</span>
      </p>
      <h2 className="text-xl font-semibold max-w-[582px] my-2 line-clamp-2">
        {title}
      </h2>
      <p className="text-gray-dark font-inter font-light mt-1 max-w-[582px] line-clamp-2">
        {description}
      </p>
    </div>
  );
};

export default PrimaryBlogCard;
