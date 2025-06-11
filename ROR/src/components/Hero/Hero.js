import "./Hero.css";

const Hero = () => `
<section class="hero">
  <div class="hero-inner">
    <img class="hero-image" src="/public/assets/hero.png" alt="Foto de perfil" />
    <div class="hero-text">
      <h2>Bienvenido a ROR</h2>
      <p>Soy Ricardo Osuna, tu aliado en Readaptación y Rendimiento con enfoque en Salud Integral.
      Aquí diseñamos tu plan personalizado: combinamos protocolos clásicos de rehabilitación con seguimiento digital y métricas en tiempo real para que recuperes tu salud y potencies tu rendimiento de forma sostenible.</p>

      <p>“Afina tu cuerpo como un motor: respetamos cada fase, ajustamos sin forzar y cuidamos todos los componentes para que funcione a largo plazo.”</p>
      
      <p>Si buscas un acompañamiento cercano, basado en evidencia y con un toque de humor motivador, estás en el lugar adecuado. ¡Hablemos y empecemos tu camino hacia una recuperación eficaz y un rendimiento duradero!
      </p>
      <a href="#services" class="hero-button">Descubre más</a>
    </div>
  </div>
</section>
`;

export default Hero;
