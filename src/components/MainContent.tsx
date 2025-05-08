import React from 'react';
import InfoCard from './InfoCard.tsx';

const columnsStyle ={
  backgroundColor: "#8acc97",
  minWidth: "0px"
}

function MainContent() {
  return (
    <div className="container-fluid d-flex" style={{"padding":"0px"}}>
      <div className="row w-100 g-0">
        <div className="col-12 col-md-2 p-3 d-none d-md-block" style={columnsStyle}>
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
        <div className="col-12 col-md-2 p-3 d-none d-md-block" style={columnsStyle}>
          {/* <h4>Columna 3 (2)</h4>
          <p>Contenido derecho</p> */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;