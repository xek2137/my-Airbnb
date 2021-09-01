/* eslint-disable react/display-name */
import React from 'react';

const withClass = (Component, className) => {
  return props => {
    return (
      <div className={className}>
        <Component {...props} />;
      </div>
    );
  };
};
export default withClass;
