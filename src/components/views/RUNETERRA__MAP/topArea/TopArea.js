import React, {useState, useEffect} from 'react';
import PropType from 'prop-types';
import styles from './TopArea.module.scss';
import moment from 'moment';

const TopArea = ({getArea}) => {
  const [time, setTime] = useState('');

  const endTime = moment().add(23, 'minutes').add(34, 'seconds');
  const area = getArea();
  let interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutesValue = Math.floor(leftTime / 60);
      const secondsValue = Math.floor(leftTime % 60);
      setTime(`${minutesValue} min, ${secondsValue} sec.`);
    }, 1000);

    return (() => {
      clearInterval(interval);
    });
  }, []);

  return (
    <div className={`card ${styles.container}`}>
      <div className="card-header">
        Top Area
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">{area.name}</h3>
          <p>Ocena: {area.rating}</p>
        </div>
        <p>Champion select time left: {time}</p>
        <a href="#" className="btn btn-sm btn-primary">CHECK IT!</a>
      </div>
    </div>
  );
};

TopArea.propTypes = {
  getArea: PropType.func,
};

export default TopArea;
