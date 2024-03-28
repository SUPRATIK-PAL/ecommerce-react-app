const customFetch = async (url, { body, ...rest }) => {
  // Create a config object with the provided options and set the headers
  const config = {
    ...rest,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  // If a request body is provided, stringify it and add it to the config object
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    // Perform the HTTP request using the provided URL and config
    let response = await fetch(url, config);

    // Parse the response body as JSON
    let data = await response.json();

    // If data is received, return it
    if (data) {
      return data;
    } else {
      throw new Error("Data not fetched");
    }
  } catch (error) {
    console.log(error);
  }
};

export default customFetch;
