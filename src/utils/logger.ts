import { Constants } from './constants';

export const logger = (desc: string, ...message: any[]) => {
  if (Constants.isDev) {
    console.log(`This is ${desc} ==>`, ...message);
  }
};
