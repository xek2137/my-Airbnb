import React from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';

const AppLayout = ({header, menu, content, footer}) => {
  return (
    <>
      <div>{header}</div>
      <div className="container">{menu}</div>
      <div className="container">{content}</div>
      <div>{footer}</div>
    </>
  );
};

AppLayout.propTypes = {
  header: PropTypes.node,
  menu: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
};

export default withClass(AppLayout, 'AppLayout');
