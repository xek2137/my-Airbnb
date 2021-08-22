import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({header, menu, content, footer}) => {
  return (
    <div>
      <div className="">{header}</div>
      <div className="container">{menu}</div>
      <div className="container">{content}</div>
      <div>{footer}</div>
    </div>
  );
};

AppLayout.propTypes = {
  header: PropTypes.node,
  menu: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
};

export default AppLayout;
