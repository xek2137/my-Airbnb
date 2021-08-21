import React, {Component} from 'react';
import Area from '../../views/RUNETERRA__MAP/area/Area';
import styles from './MainAreaComponent.module.scss';
import {Container} from '@chakra-ui/react';
import PropTypes from 'prop-types';

class MainAreaComponent extends Component {

  render() {
    const {areas} = this.props;
    return (
      <Container size="xxl" centerContent>
        <div className={styles.container}>
          {areas.map(area => <Area key={area.id} {...area} />)}
        </div>
      </Container>
    );
  }
}

MainAreaComponent.propTypes = {
  areas: PropTypes.array.isRequired,
};
export default MainAreaComponent;
