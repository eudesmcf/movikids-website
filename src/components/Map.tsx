import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Mapa Movikids"
        src="https://www.google.com/maps?q=Techne+Mall+-+Brisamar,+João+Pessoa+-+PB,+58033-100&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;