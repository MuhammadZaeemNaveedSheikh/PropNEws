import monkey from "../../../assets/images/logo.png";

const Hero = () => {
  return (
    <div className="flex justify-center border border-gray-darker rounded-lg md:pt-16 flex-wrap gap-10 px-5">
      <div className="mt-8 space-y-6">
        <h1 className="text-4xl md:text-6xl font-raleway max-w-[600px] font-bold">
          Get Smarter about <span className="text-primary">PropFirms</span>
        </h1>
        <p className="text-gray-dark font-kanit max-w-[560px]">
          Join over 15,000+ monthly readers in our 5min daily newsletter about
          all things prop firms.
        </p>
        <form className="border border-gray-darker rounded-md max-w-[448px] flex justify-between flex-wrap sm:flex-nowrap">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="bg-transparent p-3 pl-5 font-medium focus:outline-none w-full"
          />
          <button
            type="submit"
            className="text-primary font-kanit font-medium px-5 py-2"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img src={monkey} className="w-full max-w-[442px]" />
    </div>
  );
};

export default Hero;
