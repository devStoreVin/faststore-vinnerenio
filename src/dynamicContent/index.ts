
const fetchDataMyLandingPage = async () => {
  const response = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { data: response };
};

const dynamicContent = {
  "my-landing-page": fetchDataMyLandingPage,
};

export default dynamicContent;