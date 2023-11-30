const onSignInSuccessService = async ({
  code,
  state,
}: {
  code: string;
  state: string;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/slack/oauth_redirect?code=${code}&state=${state}`;
  const options = { method: "GET" };
  try {
    let response = await fetch(url, options);
    let responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
};

export default onSignInSuccessService;
