const getImage = async () => {
  try {
    const apiKey = 'J1ZoQbpMEFkteFvsKuxy475UYEv2ngyw';
    const apiUrl = 'https://api.giphy.com';
    const request = await fetch(`${apiUrl}/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await request.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    console.error(error);
  }
};

const addImage = (url) => {
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
};

getImage().then(addImage);
