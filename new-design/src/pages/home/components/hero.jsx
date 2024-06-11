import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth.jsx";

const Hero = () => {
  const user = useAuth().user;
  const isUserLoggedIn = user ? true : false;
  const [content, setContent] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (isUserLoggedIn) {
      setContent({
        title: "You're now Subscribed!",
        body: "Copy your code and Invite friends for a chance to earn funding. Every new invite equals one ticket to the funding prize pool raffle.",
      });
    } else {
      setContent({
        title: "FundingFactory",
        body: "Join over 15,000+ monthly readers in our 5min daily newsletter about all things prop firms and trading related.",
      });
    }
  }, [isUserLoggedIn]);

  return (
    <section className="text-center space-y-4">
      <h1 className="font-raleway font-bold text-4xl sm:text-6xl">{content?.title}</h1>
      <p className="font-kanit font-medium text-gray max-w-[673px] mx-auto sm:text-xl">
        {content?.body}
      </p>
      <form className="border border-gray-darker rounded-md max-w-[448px] mx-auto flex justify-between flex-wrap sm:flex-nowrap">
        <input
          type="email"
          placeholder={isUserLoggedIn ? "https://www.fundingfactory.com/signup/?ref=1121":"Enter Email Address"}
          className={`bg-secondary p-3 pl-5 rounded-xl font-medium focus:outline-none w-full ${isUserLoggedIn ? "text-center":"text-left"}`}
          disabled={isUserLoggedIn}
        />
        {
          !isUserLoggedIn &&(
            <button
              type="submit"
              className="text-primary font-kanit font-medium px-5 py-2"
            >
              Subscribe
            </button>
          )
        }
      </form>
    </section>
  );
};

export default Hero;
