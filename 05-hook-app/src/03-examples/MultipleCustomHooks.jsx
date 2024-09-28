import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch(
    'https://pokeapi.co/api/v2/pokemon/1',
  );

  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <h2>{data?.name}</h2>
    </>
  );
};
