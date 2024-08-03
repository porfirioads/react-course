const apiKey = 'J1ZoQbpMEFkteFvsKuxy475UYEv2ngyw';

const randomGifRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
);

randomGifRequest
  .then((response) => response.json())
  .then(({data}) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  })
  .catch((error) => console.error);
