// Proxy /nse/* requests to kenya-roic service
export const onRequest: PagesFunction<{ NSE_SERVICE: Fetcher }> = async (context) => {
  const url = new URL(context.request.url);
  url.pathname = url.pathname.replace(/^\/nse/, '') || '/';
  
  return context.env.NSE_SERVICE.fetch(
    new Request(url.toString(), context.request)
  );
};
