import PropTypes from 'prop-types';

export const FirstApp = ({ title, number }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>Hola mundo {number}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
