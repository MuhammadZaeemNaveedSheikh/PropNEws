import { useState } from "react";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-primary border border-gray-darker p-1 px-6 lg:ml-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
        onClick={() => setIsOpen(true)}
      >
        Subscribe
      </button>
      <div
        className={`${
          isOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }  transition-all fixed inset-0 flex items-center justify-center`}
      >
        <div className="bg-black bg-opacity-85 z-50 w-full h-full absolute" onClick={()=>setIsOpen(false)}></div>
        <div className="bg-secondary relative z-50 rounded-xl shadow-xl">
          <button
            className="absolute top-2 right-2 p-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-rounded">close</span>
          </button>
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Subscribe</h2>
            <p className="text-gray-dark mb-4">
              Subscribe to our newsletter to get the latest news and updates
            </p>
            <form action="" className="flex flex-wrap md:no-wrap gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-darker p-2 pl-5 rounded-lg bg-secondary w-full"
              />
              <button
                type="submit"
                className="text-white bg-primary p-2 px-6 rounded-lg w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
