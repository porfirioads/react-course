import PropTypes from 'prop-types';
import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('<Small /> se dibujó');
  return <small>{value}</small>;
});

Small.propTypes = {
  value: PropTypes.number.isRequired,
};

Small.displayName = 'Small';
