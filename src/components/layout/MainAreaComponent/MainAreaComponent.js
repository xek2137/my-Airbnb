import React, {useEffect} from 'react';
import Area from '../../views/RUNETERRA__MAP/area/Area';
import styles from './MainAreaComponent.module.scss';
import PropTypes from 'prop-types';

const MainAreaComponent = ({areas}) => {

  useEffect(() => {console.log('rendered');});

  return (
    <div className={styles.container}>
      {areas.map(area => <Area key={area.id} {...area} />)}
    </div>
  );
};

MainAreaComponent.propTypes = {
  areas: PropTypes.array.isRequired,
};

export default React.memo(MainAreaComponent);
