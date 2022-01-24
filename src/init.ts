import { readdirSync } from "fs";
import { resolve } from "path";

import { dir } from "./config";
import createLogger from "./config/Logger";

const logger = createLogger("init");

const __init__ = async () => {
  /**
   * Check for required variables
   */
  if (!dir) throw "Please provide a valid directory in .env";

  /**
   * Initializing
   */
  logger.info("Initializing!");
  const dirContents = readdirSync(resolve(dir));
  logger.info(dirContents);
};

__init__()
    .then(() => process.exit(0))
    .catch((error) => {
      logger.error("Error: ", error);
      process.exit(1);
    });
