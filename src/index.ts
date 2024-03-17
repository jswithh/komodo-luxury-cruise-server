import app from "./app";
import logger from "./middleware/logger";

const port = 3000;

const server = app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received.");
  logger.info("Closing server.");
  server.close((err) => {
    logger.info("Server closed.");
    // eslint-disable-next-line no-process-exit
    process.exit(err ? 1 : 0);
  });
});
