
const JoinUs = () => {
  return (
    <div className="flex justify-center border border-black p-8 pt-14 rounded-lg">
      <div className="space-y-0">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-5xl font-bold">Get Smarter about<span className="text-primary">{" "}PropFirms</span></h1>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-center max-w-lg gap-4 py-4 flex-wrap">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-md bg-white/5 px-3.5 py-2 text-white grow"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-primary-darker px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm w-full md:w-24"
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
