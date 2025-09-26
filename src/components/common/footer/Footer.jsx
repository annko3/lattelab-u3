import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h4>Desarrollado por:</h4>
          <p><i class="fa-solid fa-user"></i> Nicole Reyes</p>
          <p><i class="fa-solid fa-user"></i> Tatiana Marín</p>
        </div>

        <div class="footer-section">
          <h4>Contactanos:</h4>
          <p><i class="fa-solid fa-location-dot"></i> Av. Café #123, Lima</p>
          <p><i class="fa-solid fa-phone"></i> +51 999 888 777</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© 2025 Lattelab. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;