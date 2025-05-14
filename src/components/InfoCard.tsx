import React from 'react';

function InfoCard() {
    return (
      <div className="container-fluid d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '40rem', color:"black" }}>
        <img src={`${process.env.PUBLIC_URL}/logoSomier.png`}className="card-img-top" alt="Imagen descriptiva" />
        <div className="card-body">
          <h5 className="card-title">Nombre Aquí</h5>
          <p className="card-text">
            Esta es una breve descripción. Puedes personalizarla con cualquier contenido.
          </p>
        </div>
      </div>
      </div>
    );
  }
  
  export default InfoCard;