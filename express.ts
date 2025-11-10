import express from "express";
import expressWinston from "express-winston";
import winston from "winston";
import { searchCronHandler } from "#controller";

export default (app = express()) => {
  /**
   * Health Check endpoints
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  app.enable("trust proxy");

  //app.use(cors());
  app.use(
    expressWinston.logger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.cli(),
            winston.format.splat()
          ),
        }),
      ],
      meta: true,
      msg: "HTTP : {{req.method}} {{req.url}}, StatusCode : {{res.statusCode}}",
      ignoreRoute: function (req, res) {
        return false;
      },
    })
  );

  // Load API routes
  app.get("/cron", searchCronHandler);

  // Error 404: Not Found
  //   app.get("*", function (req, res, next) {
  //     res.status(404).send(`${req.ip} tried to reach ${req.originalUrl}`);
  //     next();
  //   });

  //   //Error 500: any non-coded error
  //   app.use(function (req: express.Request, res: express.Response, next) {
  //     res.status(500).json({
  //       message: "Une erreur non répertoriée s'est produite",
  //       error: "Une erreur s'est produite",
  //     });
  //     next();
  //   });
};
