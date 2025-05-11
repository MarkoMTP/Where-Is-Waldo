//on vodi na /game, i zove api.get("/start")

import api from "../../api";

export default async function startBtnHandler(navigate) {
  try {
    const startRes = await api.get("/start");
    if (startRes.data === "Game started") {
      navigate("/game");
      console.log(startRes.data);
    } else {
      console.log("Error with calling the api");
    }
  } catch (err) {
    console.error(err);
  }
}
