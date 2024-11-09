import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'Porfirio Díaz',
  email: 'porfirioads@gmail.com',
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo', user }}>
      {children}
    </UserContext.Provider>
  );
};
