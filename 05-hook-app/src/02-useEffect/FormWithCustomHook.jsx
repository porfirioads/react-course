import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password } = useForm({
    username: 'porfirioads',
    email: 'porfirioads@gmail.com',
    password: '',
  });

  return (
    <>
      <h1>Form with custom hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
