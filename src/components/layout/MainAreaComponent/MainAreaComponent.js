import React, {PureComponent} from 'react';
import Area from '../../views/RUNETERRA__MAP/area/Area';
import styles from './MainAreaComponent.module.scss';
import PropTypes from 'prop-types';

class MainAreaComponent extends PureComponent {

  /* WITH React Component: */
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.areas === nextProps.areas ? false : true;
  // }

  render() {
    const {areas} = this.props;

    return (
      <div className={styles.container}>
        {areas.map(area => <Area key={area.id} {...area} />)}
      </div>
    );
  }
}

MainAreaComponent.propTypes = {
  areas: PropTypes.array.isRequired,
};

export default MainAreaComponent;
