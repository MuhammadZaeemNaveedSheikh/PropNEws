const SocialMediaIcon = ({ icon }) => {
  return (
    <a href="#" className="me-4 md:me-6">
      <img
        src={icon.src}
        alt={icon.alt}
        width={icon.width}
        height={icon.height}
      />
    </a>
  );
};

const menuItems = [
  { name: "Home", link: "#" },
  { name: "Our Story", link: "#" },
  { name: "Funding", link: "#" },
  { name: "Partners", link: "#" },
  { name: "Contact Us", link: "#" },
  { name: "FAQs", link: "#" },
];

const MenuItems = () => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index} className="mb-4">
          <a href={item.link} className="text-sm">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const socialMediaIconsData = [
    {
      src: "src/assets/images/Insta.svg",
      alt: "Instagram",
      width: 30,
      height: 30,
    },
    {
      src: "src/assets/images/Discord.svg",
      alt: "Discord",
      width: 30,
      height: 30,
    },
    {
      src: "src/assets/images/Twitter.svg",
      alt: "Twitter",
      width: 30,
      height: 30,
    },
    {
      src: "src/assets/images/Telegram.svg",
      alt: "Telegram",
      width: 30,
      height: 30,
    },
  ];

  return (
    <footer className="w-full max-w-screen-xl mx-auto md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="src/assets/images/logo.png"
            className="h-12"
            alt="MonkeyLogo"
          />
        </a>
        <ul className="flex flex-wrap items-center gap-x-8 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          {socialMediaIconsData.map((icon, index) => (
            <SocialMediaIcon key={index} icon={icon} />
          ))}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="mb-8 mx-6">
            {/* Menu items */}
            <h2 className="mb-6 text-lg font-normal text-gray-900 dark:text-white font-dm-sans">
              Menu
            </h2>
            <div className="border-b border-black my-4"></div>
            <ul className="text-gray-500 text-xs font-dm-sans dark:text-gray-400 font-light grid grid-rows-3 grid-flow-col gap-5 gap-x-12">
              <li className="mb-4">
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-sm">
                  Our Story
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-sm">
                  Funding
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-sm">
                  Partners
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-sm">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-transparent border border-black rounded-lg shadow p-4 sm:p-8 dark:bg-transparent dark:border-black ml-auto w-full sm:w-auto">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white font-dm-sans">
              Visit Our Forum
            </h5>
            <p className="mb-12 text-base text-gray-500 sm:text-sm font-light dark:text-gray-400 font-dm-sans">
              Want to discuss prop-firms or are you a prop firm looking to get
              listed inside our forum?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-end sm:space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="bg-primary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  className="me-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div className="text-left rtl:text-right">
                  <div className=" uppercase text-xs font-medium font-dm-sans">
                    Go to Forum
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="bg-primary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  className="me-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
                <div className="text-left rtl:text-right">
                  <div className=" uppercase text-xs font-medium font-dm-sans">
                    Application
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center font-dam-sans">
            Copyright © <span className="text-primary text-sm"> PFNews</span>
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <p className="font-dam-sans text-xs">
              Cookie policy | Privacy Policy | Terms & Conditions | Disclaimer |
              Return Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
