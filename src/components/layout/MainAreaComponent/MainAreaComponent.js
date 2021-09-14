import React, {useMemo} from 'react';
import Area from '../../views/RUNETERRA__MAP/area/Area';
import styles from './MainAreaComponent.module.scss';
import PropTypes from 'prop-types';

const MainAreaComponent = ({areas}) => {
  const count = useMemo(() => {
    return areas.length;
  }, [areas.length]);

  return (
    <div className={styles.container}>
      <h1> AREAS MATCHED: {count}</h1>
      {areas.map(area => <Area key={area.id} {...area} />)}
    </div>
  );
};

MainAreaComponent.propTypes = {
  areas: PropTypes.array.isRequired,
};

const equalProps = (previousProps, nextProps) => {
  return previousProps.areas === nextProps.areas;
};

export default React.memo(MainAreaComponent, equalProps);
