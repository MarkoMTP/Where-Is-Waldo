import { findLatestTime, updateLatestTime } from "../queries.js";

export async function updateEndTimeOfLatest() {
  const latestTime = await findLatestTime();

  if (!latestTime) {
    console.log("No gameTime record found to update.");
    return null;
  }

  await updateLatestTime(latestTime);

  const refreshedTime = await findLatestTime();

  console.log("StartTime:", refreshedTime.startTime);
  console.log("EndTime:", refreshedTime.endTime);

  const start = new Date(refreshedTime.startTime);
  const end = new Date(refreshedTime.endTime);

  const gameDurationMs = end - start;
  const gameDurationSec = Math.round(gameDurationMs / 1000);

  console.log("Duration in ms:", gameDurationMs);
  console.log("Duration in sec:", gameDurationSec);

  return gameDurationSec;
}
