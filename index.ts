import express from "express";
import expressLoader from "./express.ts";
import config from "./config.js";
import Logger from "./logger.ts";

async function startServer() {
  const app = express();

  await expressLoader(app);
  Logger.info("✌️ Express loaded");

  app.listen(config.port, (err: any) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
            ################################################
            🛡️  Server listening on port: ${config.port} 🛡️ 
            ################################################
        `);
  });
}
startServer();
