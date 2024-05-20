import React, { useState } from 'react';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const words = inputValue.split(' ').filter((word) => word !== '');
    setWordCount(words.length);

    if (words.length <= 40) {
      setCompanyName(inputValue);
    }
  };

  return (
    <div className="border border-black rounded-lg">
      <form className="max-w-xxx mx-auto p-12">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name of the Company<span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            aria-describedby="helper-text-explanation"
            value={companyName}
            onChange={handleInputChange}
            className="bg-transparent border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter legal Entity Name"
          />
          <p className="mt-2 text-xs text-slate-400 dark:text-gray-400 font-kanit text-right">
            {wordCount}/40
          </p>
        </div>
        {/* Other form elements */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tagline/Slogan<span className="text-primary">*</span></label>
          <input type="email" id="email" className="shadow-sm bg-transparent border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Clear Description of the Company" required />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website/Where to visit<span className="text-primary">*</span></label>
          <input type="email" id="email" placeholder="Enter a website where users can learn more" className="shadow-sm bg-transparent border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label htmlFor="techprovider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tech Provider<span className="text-primary">*</span></label>
          <select
            id="techprovider"
            className="bg-transparent border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="bg-transparent text-black">United States</option>
            <option className="bg-transparent text-black">Canada</option>
            <option className="bg-transparent text-black">France</option>
            <option className="bg-transparent text-black">Germany</option>
          </select>
        </div>

        <div className="mb-5">
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" id="user_avatar_help">Challenge Rules<span className="text-primary">*</span></div>


          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border border-black rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-transparent hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <p class="text-xs text-gray-500 dark:text-gray-400">Upload Challenge Rules Excel Sheet 1 *</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" id="user_avatar_help">Company Logo<span className="text-primary">*</span></div>


          <div className="flex items-center justify-start w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-20 border border-black rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-transparent hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="mt-1 text-sm text-slate-400 dark:text-gray-700 text-xs" id="user_avatar_help">
                Recommended size: 240x240
              </div>
              <div className="mt-1 text-sm text-slate-400 dark:text-gray-700 text-xs" id="user_avatar_help">
                JPG, PNG, GIF. Max size: 2MB
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
