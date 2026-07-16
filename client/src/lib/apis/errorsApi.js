import { PUBLIC_API_URL } from "$env/static/public";


const myFetch = async (url, options = {}, timeoutMs = 5000) => {
  let attempts = 0;
  const maxAttempts = 2;

  while (attempts < maxAttempts) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(timeoutMs),
      });

      if (!response.ok) {
        return { data: null, error: response.statusText };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      if (error?.name === "TimeoutError") {
        attempts += 1;
        if (attempts >= maxAttempts) {
          return { data: null, error: "Timeout -- the request took too long." };
        }
      } else {
        return { data: null, error: error.message };
      }
    }
  }
};

const getData = async (id) => {
  return await myFetch(`${PUBLIC_API_URL}/api/errors/${id}`);
};


export { getData };
