import Gameboard from "./GameBoard";
import StartPage from "./StartPage";
import LeaderBoard from "./LeaderBoard";

const routes = [
  {
    path: "/",
    element: <StartPage />,
  },

  {
    path: "/game",
    element: <Gameboard />,
  },

  // leaderboard
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
];

export default routes;
