import App from "../App";
import Home from "../pages/home/main";
import Leaderboard from "../pages/leaderboard/main";
import News1 from "../pages/news1/main";
import NewsSlug from "../pages/newsslug.jsx/main";


const routes = [
  {
    path: "", element: <App />, children: [
      { path: "/", element: <Home /> }, 
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "news", element: <News1 />},
      { path: "news/:id", element: <NewsSlug />}
    ]
  },
];

export default routes;
