import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'porfirioads',
    email: 'porfirioads@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  useEffect(() => {
    // console.log("useEffect formState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("useEffect formState.email changed");
  }, [formState.email]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="porfirioads@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'porfirioads' && <Message />}
    </>
  );
};
