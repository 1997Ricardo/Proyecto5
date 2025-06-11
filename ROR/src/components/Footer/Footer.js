import './Footer.css';

const Footer = () => `
<footer class="footer">
  <div class="container footer-inner">
    <p>© ${new Date().getFullYear()} ROR – Readaptación, Optimización y Rendimiento.</p>
    <nav class="footer-nav">
      <a href="#services">Servicios</a>
      <a href="#contact">Contacto</a>
      <a href="#top">Arriba</a>
    </nav>
  </div>
</footer>
`;

export default Footer;
