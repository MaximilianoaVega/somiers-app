import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className={"container mb-2 d-flex flex-column justify-content-center"} class="text-center mt-5">
        <h5 className="text-white text-center">Sígueme en redes sociales</h5>
        <div class="d-flex justify-content-center gap-3 fs-3 mt-3">
          <a href="https://facebook.com/tuusuario" target="_blank" class="text-primary"><i class="bi bi-facebook"></i></a>
          <a href="https://twitter.com/tuusuario" target="_blank" class="text-info"><i class="bi bi-twitter-x"></i></a>
          <a href="https://instagram.com/tuusuario" target="_blank" class="text-danger"><i class="bi bi-instagram"></i></a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" class="text-primary"><i class="bi bi-linkedin"></i></a>
          <a href="mailto:tu-email@ejemplo.com" class="text-dark"><i class="bi bi-envelope-fill"></i></a>
        </div>
      </div>
      <div className="container text-center">
        <p className="mb-0">&copy; 2025 Mi Sitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;