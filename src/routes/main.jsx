import { element } from "prop-types";
import App from "../App";
import Home from "../pages/home/main";
import News1 from "../pages/news1/main";
import NewsDetail from "../pages/newsdetail/main";
import Forum from "../pages/Forum/main";
import SubmitFirm from "../pages/submitFirm/main";
import FirmDetail from "../pages/firmdetail/main";
import ContactUs from "../pages/contact";


const routes = [
  {
    path: "", element: <App />, children: [{ path: "/", element: <Home /> },
    { path: "/news1", element: <News1 /> },
    { path: "/newsdetail", element: <NewsDetail /> },
    { path: "/forum", element: <Forum /> },
    { path: "/firmdetail", element: <FirmDetail /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/submitfirm", element: <SubmitFirm /> }]
  },
  { path: "/*", element: <App /> },

];

export default routes;
