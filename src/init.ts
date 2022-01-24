import { dir } from "./config";
import createLogger from "./config/Logger";
import reducer from "./core/reducer";

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
    await reducer(dir);
};

__init__()
    .then(() => process.exit(0))
    .catch((error) => {
        logger.error("Error: ", error);
        process.exit(1);
    });
