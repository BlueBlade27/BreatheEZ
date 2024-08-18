import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ setIsLoggedIn }) => {
  return (
    <div className="container">
      <nav>
        <img src="imgs/logo-bez.png" className="logo" />
        <ul>
          <li><Link to="/login" onClick={() => setIsLoggedIn(true)}>Login</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h1 className="heading">Welcome!🎐</h1>
        <p className="heading">
          Your go-to platform for staying informed about air quality and
          managing respiratory health. Whether you're dealing with asthma or
          just want to breathe easier, we're here to help you stay safe and
          healthy with real-time air quality updates and helpful breathing
          exercises.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
