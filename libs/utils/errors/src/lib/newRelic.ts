declare global {
  interface Window {
    newrelic: {
      noticeError: (error: unknown, extraInfo: unknown) => void;
      addPageAction: (actionName: string, actionDetails: unknown) => void;
    };
  }
}

export function getUserId() {
  // build your own logic to get the user id
  return 'UserId-1234';
}

export function trackError(error = {}, extraInfo = {}) {
  console.error(error, extraInfo);
  window?.newrelic?.noticeError(error, {
    ...extraInfo,
    userId: getUserId(),
  });
}

export function trackAction(actionName: string, actionDetails = {}) {
  window?.newrelic?.addPageAction(actionName, {
    ...actionDetails,
    userId: getUserId(),
  });
}
