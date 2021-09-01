import React from 'react';
import PropTypes from 'prop-types';

const Aux = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Aux.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
};
export default Aux;
