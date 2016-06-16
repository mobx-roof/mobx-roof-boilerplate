import { globalMiddleware } from 'mobx-roof';
import logger from './logger';
import recordSyncTimes from './recordSyncTimes';

globalMiddleware.use(
  logger,
  recordSyncTimes,
);
globalMiddleware.isGlobal = true;
