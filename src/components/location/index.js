import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.2485473551124!2d60.60415741587312!3d56.8245249808535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16eec898e879f%3A0xa2c5cb0462828794!2zOCDQnNCw0YDRgtCwLCA0NQ!5e0!3m2!1sru!2sru!4v1583851551686!5m2!1sru!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
        title="Address"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
