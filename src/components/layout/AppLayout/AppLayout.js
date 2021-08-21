import React from 'react';
import PropTypes from 'prop-types';
const AppLayout = ({header, menu, content, footer}) => {
  return (
    <div>
      <div>{header}</div>
      <div>{menu}</div>
      <div>{content}</div>
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
