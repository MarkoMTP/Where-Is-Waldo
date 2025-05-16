import { findLatestTime, updateLatestTime } from "../queries.js";

export async function updateEndTimeOfLatest() {
  const latestTime = await findLatestTime();

  if (!latestTime) {
    console.log("No gameTime record found to update.");
    return null;
  }

  const updatedTime = await updateLatestTime(latestTime);

  const gameDurationMs =
    new Date(updatedTime.endTime) - new Date(updatedTime.startTime);

  return gameDurationMs;
}
