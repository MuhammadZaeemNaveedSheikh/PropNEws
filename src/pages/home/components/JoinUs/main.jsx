import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const JoinUs = () => {
  const [filter, setFilter] = useState(null);

  [];

  return (
    <div className="flex justify-center border border-black py-6 rounded-lg mx-8">
      <div className="space-y-0">
        <div className="flex justify-between items-center !mt-10">
          <h1 className="text-3xl sm:text-5xl font-bold">Get Smarter about<span className="text-primary">{" "}PropFirms</span></h1>
        </div>

        <div className="flex justify-center">

          <div className="flex items-center justify-center max-w-md gap-x-4 py-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-primary-darker px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
