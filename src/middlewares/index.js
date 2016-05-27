import { Middleware } from 'mobx-roof';
import logger from './logger';
import recordSyncTimes from './recordSyncTimes';

const middleware = new Middleware;
middleware.use(
  logger,
  recordSyncTimes,
);

export default middleware;
