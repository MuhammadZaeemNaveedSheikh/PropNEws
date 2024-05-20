const CreatePost = () => {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 flex flex-col items-center border border-black rounded-md mb-4 lg:mb-0 lg:mr-4">
          <div className="w-full bg-transparent rounded-lg overflow-hidden relative">
            <div className="flex flex-col justify-between flex-grow p-3">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 text-sm text-gray-900 border border-black rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write a review or share your Experience..."
                  required
                />
                <button className="absolute h-10 inset-y-2 right-2 px-4 py-2 bg-primary text-white text-sm font-semi-bold rounded-lg border-slate-700 flex items-center justify-center font-kanit">
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex items-center bg-transparent rounded-lg">
          <div className="p-4 flex flex-col lg:flex-row justify-between items-center w-full gap-x-4">
            <button className="w-full lg:w-40 h-10 bg-black text-white text-sm font-semi-bold rounded-lg border-slate-700 flex items-center justify-center font-kanit mb-4 lg:mb-0">
              Visit
            </button>
            <button className="w-full lg:w-40 h-10 bg-primary text-white text-sm font-semi-bold rounded-lg border-slate-700 flex items-center justify-center font-kanit">
              Upvote 34
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreatePost;
  