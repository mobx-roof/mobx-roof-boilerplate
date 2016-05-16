import { Middleware } from 'mobx-roof';
import logger from './logger';
import pendingEffect from './pendingEffect';
import recordSyncTimes from './recordSyncTimes';

const middleware = new Middleware;
middleware.use(
  pendingEffect,
  logger,
  recordSyncTimes,
);

export default middleware;
