import { Link } from "react-router-dom";
import Menu from "../../../../components/menu";
import { useMemo, useState } from "react";
import menu_items from "./config";

const PropFirms = () => {
  const [filter, setFilter] = useState(null);

  return (
    <section className="space-y-6">
      <Menu items={menu_items} setSelectedItem={setFilter} />
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">Propfirms</h1>
        <Link
          to={"/contact"}
          className="text-primary font-semibold hover:underline"
        >
          See all {">"}
        </Link>
      </div>

      {/* Card 1 */}
      <div className="px-8">

        <div className="bg-transparent border border-black rounded-lg shadow dark:bg-transparent dark:border-black p-4 my-4">
          <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-4">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-20 w-20 flex-none rounded-lg bg-gray-50" src="src/assets/images/logo.jpg" alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900 font-poppins">FTMO</p>
                  <p className="mt-1 flex truncate text-xs text-wrap leading-5 text-gray-500 font-poppins">Unlock a world of possibilities within the expanding ecosystem.</p>
                  <Link to={"#"} className="text-xs font-bold">Explore More Points {"->"}</Link>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button type="button" className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Grab Challenge {"->"}</button>
                <button type="button" className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Read Reviews</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-transparent border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
          <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-4">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-20 w-20 flex-none rounded-lg bg-gray-50" src="src/assets/images/logo2.jpg" alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900 font-poppins">Finding Points</p>
                  <p className="mt-1 flex truncate text-xs text-wrap leading-5 text-gray-500 font-poppins">Unlock a world of possibilities within the expanding ecosystem.</p>
                  <Link to={"#"} className="text-xs font-bold">Explore More Points {"->"}</Link>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button type="button" className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Grab Challenge {"->"}</button>
                <button type="button" className="text-white bg-light-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Read Reviews</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropFirms;
