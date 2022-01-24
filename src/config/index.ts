import * as dotenv from "dotenv";

dotenv.config();

export const dir = process.env.DIR;
export const quality = Number(process.env.QUALITY) || 80;
export const saveAsSeparate = process.env.SAVE_AS_SEPARATE_FILE || false;