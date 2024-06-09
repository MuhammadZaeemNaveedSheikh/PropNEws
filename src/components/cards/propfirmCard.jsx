import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PropFirmCard = (props) => {
  return (
    <div className="bg-transparent border border-black rounded-lg shadow dark:bg-transparent dark:border-black p-4 my-4">
      <div className="flex justify-between flex-wrap gap-6 py-4">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-20 w-20 flex-none rounded-lg bg-gray-50"
            src={props.logo}
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900 font-poppins">
              {props.title}
            </p>
            <p className="mt-1 flex truncate text-xs text-wrap leading-5 text-gray-500 font-poppins">
                {props.subtitle}
            </p>
            <Link to={"#"} className="text-xs font-bold">
              Explore More Points {"->"}
            </Link>
          </div>
        </div>
        <div className="flex md:flex-col items-end">
          <button
            type="button"
            className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Grab Challenge {"->"}
          </button>
          <button
            type="button"
            className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Read Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

PropFirmCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  };
  

export default PropFirmCard;
