import PropTypes from "prop-types";

const BlogCard = ({
  company,
  companylogo,
}) => {
  return (
    <div className="grid grid-cols-2">

      <div className="rounded-2xl gap-8 lg:flex-nowrap flex-wrap my-5 mx-auto">
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="flex items-center">
            <img
              src={companylogo}
              alt="Company Logo"
              className="w-6 h-6 rounded-xl"
            />
            <p className="text-gray-dark ml-2 text-sm font-inter font-semibold font-gray">{company}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">


        <ul className="flex items-center gap-x-2 justify-end text-sm font-medium text-gray-500">
          <li>
            <a href="#" className="me-4 md:me-6">
              <img src="src\assets\images\Facebook.svg" alt="Instagram" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#" className="me-4 md:me-6">
              <img src="src\assets\images\Twiitter.svg" alt="Discord" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#" className="me-4 md:me-6">
              <img src="src\assets\images\Linkden.svg" alt="Twitter" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#" className="me-4 md:me-6">
              <img src="src\assets\images\Link.svg" alt="Telegram" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  company: PropTypes.string.isRequired,
  companylogo: PropTypes.string.isRequired,
};

export default BlogCard;
