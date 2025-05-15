import React from 'react';
import InfoCard from './InfoCard.tsx';

const styles ={
  column:{
      backgroundColor: "#8acc97",
      minWidth: "0px"
    },
    a : {
      position:"fixed",
      bottom:"20px",
      right:"20px",
      zIndex:"999"
    },
    i: {
      fontSize: "1.8rem"
    }
};
const aStyle = {
   
};


function MainContent() {
  return (
    <div className="container-fluid d-flex" style={{"padding":"0px"}}>
      <div className="row w-100 g-0">
        <div className="col-12 col-md-2 p-3 d-none d-md-block" style={styles.column}>
          {/* <h4>Columna 1 (2)</h4>
          <p>Contenido izquierdo</p> */}
        </div>
        <div className="col-12 col-md-8 bg-secondary text-white p-3">
          {/* <h4>Contenido principal</h4> */}
          <InfoCard/>
          <InfoCard/>
          <InfoCard/>
          <InfoCard/>
        </div>
        <div className="col-12 col-md-2 p-3 d-none d-md-block" style={styles.column}>
          {/* <h4>Columna 3 (2)</h4>
          <p>Contenido derecho</p> */}
        </div>
      </div>
      <a href="https://wa.me/5491123456789"
          class="btn btn-success btn-lg rounded-circle shadow"
          style={styles.a}
          target="_blank" aria-label="Contactar por WhatsApp">
          <i class="bi bi-whatsapp" style={styles.i}></i>
        </a>
    </div>
  );
}

export default MainContent;