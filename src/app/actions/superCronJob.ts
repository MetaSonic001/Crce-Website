"use server";

import cron from "node-cron";
import { buildSearchIndex } from "./buildSearchIndex";

cron.schedule("0 0 * * *", async () => {
  console.log("Cron job started: Updating data...");
  await buildSearchIndex();
});




