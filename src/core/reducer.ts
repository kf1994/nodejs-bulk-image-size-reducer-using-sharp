import { readdirSync, lstatSync, readFileSync } from "fs";
import { resolve, join, extname } from "path";
import sharp from "sharp";

import createLogger from "../config/Logger";

const logger = createLogger("core/reducer");
const IMG_EXT = [".png", ".jpeg", ".jpg", ".gif"];

const reducer = async (dir: string, quality: number, saveAs: boolean) => {
	/**
	 * Getting directory contents
	 */
	const dirContents = readdirSync(resolve(dir));
	if (!dirContents.length) throw "Provided directory is empty!";

	/**
	 * Going through each content of the directory!
	 */
	for (const content of dirContents) {
		const contentPath = join(dir, content);
		if (lstatSync(contentPath).isDirectory()) {
			try {
				await reducer(contentPath, quality, saveAs);
			} catch (err) {
				logger.error(`Error fetching in directory ${contentPath}`, err);
			}
		} else {
			if (IMG_EXT.includes(extname(contentPath))) {
				logger.info(`Processing ${contentPath}`);
				let savePath = contentPath;
				if (saveAs) {
					const index = contentPath.lastIndexOf('.');
					savePath = contentPath.slice(0, index) + "-Compressed" + contentPath.slice(index);
				}
				const image = readFileSync(contentPath);

				await sharp(image)
					.jpeg({
						quality: quality,
						chromaSubsampling: "4:4:4",
					})
					.toFile(savePath);
			} else {
				logger.warn(`Skipping ${contentPath}`);
			}
		}
	}
};

export default reducer;
