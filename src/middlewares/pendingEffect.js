/**
 * Cancel action if action is pending
 */
const pendingActionCache = {};
class PendingError extends Error {}

const getKey = (model, action) => `${model.getID()}.${action}`;

function beforeEffect({ action, payload, model }) {
  const key = getKey(model, action);
  if (pendingActionCache[key]) {
    throw new PendingError('PENDING_ERROR');
  }
  pendingActionCache[key] = true;
  return payload;
}

function afterEffect({ action, payload, model }) {
  const key = getKey(model, action);
  pendingActionCache[key] = false;
  return payload;
}

function errorEffect({ action, payload, model }) {
  const key = getKey(model, action);
  if (payload instanceof PendingError) {
    // Don't catch pending error
    return null;
  }
  pendingActionCache[key] = false;
  return payload;
}

export default {
  before: beforeEffect,
  after: afterEffect,
  error: errorEffect,
};
