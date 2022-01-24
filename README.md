# Bulk Image Size Reducer
This is a simple nodejs program to reduce the size of images with a directory using sharp module. It'll search for the 
image file in subdirectory as well. You can add more image extension in array `IMG_EXT` located at `core/reducer.ts`.

For More Information Refer to sharp documentation:
https://sharp.pixelplumbing.com/api-constructor

## How To Run
1. Start by installing all dependencies by running `npm install`
2. Next create a `.env` file at the root of the project and copy everything from `.env.example`
3. copy files from `.env.example` to `.env` using `cp .env.example .env`then populate it with required values where
   necessary.
4. Run `npm start`

## Important Commands
- run `npm i` or `npm install` to install all dependencies
- run `npm run build` to build the ts file to js
- run `npm start`

## .env Variables
- `DIR` - path of the directory you want to start with this is a required variable.
- `QUALITY` - your preferred quality from 1 to 100 (default 80)
- `SAVE_AS_SEPARATE_FILE` - Set to true if you don't want to replace the original file (default false)