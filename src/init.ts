import createLogger from "./config/Logger";
const logger = createLogger('init');

const init = async () => {
  try {
    /**
     * Initializing
     */
    logger.info("Initializing!")
  } catch (error) {
    logger.error("Error in reducing size of the images", error);
  }
}

export default init;
