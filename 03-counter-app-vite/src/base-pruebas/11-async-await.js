export const getImagen = async (apiKey) => {
  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    );

    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No se econtró la imagen';
  }
};
