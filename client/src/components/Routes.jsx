import Gameboard from "./GameBoard";
import StartPage from "./StartPage";

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
];

export default routes;
