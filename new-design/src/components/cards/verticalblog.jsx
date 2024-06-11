/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/main";
import { getCategoryLogo } from "../../utils/main";

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
    <div className="w-full md:max-w-[352px] rounded-2xl cursor-pointer gap-4 lg:flex-nowrap flex-wrap group">
      <div className="w-full md:max-w-[352px] h-[182px] border border-gray-darker rounded-2xl">
        <img
          src={image}
          alt="title"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="max-w-[338px] space-y-1 mt-4">
        <p className="text-[15px] text-gray-dark flex items-center mt-2">
          <span>{formatDate(date)}</span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span className="capitalize flex items-center gap-1">
            <img src={getCategoryLogo(category)} className="w-6 h-6 opacity-60" />
            {category}
          </span>
          <span className="mx-2 text-[10px] text-gray-darker">•</span>
          <span>{estimated_time}</span>
        </p>
        <h2 className="mb-1 text-lg font-semibold group-hover:underline line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-dark mt-1 mb-1 max-w-[582px] line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 !mt-3">
          <img
            src={companylogo}
            alt="title"
            className="w-6 h-6-"
          />

          <p className="text-gray-dark mt-1 max-w-[582px] line-clamp-2 text-sm">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
