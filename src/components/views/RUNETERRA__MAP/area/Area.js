import React from 'react';
import styles from './Area.module.scss';
import img from '../../../../assets/images/Wysoka_Srebrzysta.jpg';
import PropTypes from 'prop-types';
import useLogin from '../../../../hooks/useLogin';

const Area = ({name, city, rating, heroes}) => {
  const [login] = useLogin();

  return (
    <div className={`card ${styles.area}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img src={img} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{name}</p>
              City: <span className="badge bg-primary mt-2">{city}</span>
              </div>
              <div className="col">
                <h5>Ocena: {rating}</h5>
                <span className="badge bg-primary mt-2">Bohaterów: {heroes}</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className={styles.description}>
            Kraina cudownych bohaterów! Każdy z nich jest na swój sposób idealny,
            szczególnie jak ma załadowaną Rkę!
            Polujemy na smoki i pushujemy nexusy!
            </p>
            {login
              ? <p className="mt-3">Win ratio: 80%</p>
              : <p className="mt-3">Only for logged in.</p>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

Area.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  heroes: PropTypes.string.isRequired,

};

export default Area;
