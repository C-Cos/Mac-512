import express from "express";

import { searchIphone16 } from "#assets/search";
import createMessage from "#assets/twilio";
import isEmpty from "#assets/utils";
import { searchMacBookAir } from "#assets/search";

export const searchCron = async () => {
  const results = {
    iphoneFound: false,
    macbookFound: false,
  };

  const iphoneResults = await searchIphone16();
  if (!isEmpty(iphoneResults)) {
    results.iphoneFound = true;
    createMessage("There are some refurbished iPhone 16 available!");
  }

  const macbookResults = await searchMacBookAir();
  if (!isEmpty(macbookResults)) {
    results.macbookFound = true;
    createMessage("There are some refurbished MacBook Air available!");
  }

  console.log("1", results);
  return results;
};

export const searchCronHandler = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("here");
    const results = await searchCron();
    console.log("2", results);
    return res.status(200).json({
      message: "Search completed",
      ...results,
    });
  } catch (err) {
    console.error("searchCronHandler error:", err);
    return res
      .status(500)
      .json({ error: "Something went wrong during the cron search." });
  }
};
