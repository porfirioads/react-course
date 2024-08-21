const newMessage = { message: 'Hola mundo', title: 'Porfirio' };

const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = () => {
  return (
    // <> Create a fragment without import it.
    <>
      <h1>{newMessage.message}</h1>
      <p>{getResult(4, 4)}</p>
      <pre>{JSON.stringify(newMessage)}</pre>
    </>
  );
};
