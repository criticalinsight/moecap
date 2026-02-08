// Proxy /_build/* asset requests to kenya-roic service
// This handles CSS/JS assets referenced by the NSE app
export const onRequest: PagesFunction<{ NSE_SERVICE: Fetcher }> = async (context) => {
  return context.env.NSE_SERVICE.fetch(context.request);
};
