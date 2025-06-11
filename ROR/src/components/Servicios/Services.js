import './Services.css';

const servicesData = [
  {
    title: 'Sesión suelta',
    price: '42 €',
    items: [
      'Ejercicios específicos adaptados al objetivo inmediato',
      'Enfoque práctico en movimiento y técnica',
      'Recomendaciones de ajustes para casa o gimnasio'
    ],
    button: { text: 'Solicitar sesión', type: 'primary' }
  },
  {
    title: 'Bono 4 sesiones',
    price: '160 €',
    items: [
      '4 sesiones con progresión de ejercicios planificada',
      'Ajustes continuos según respuesta al entrenamiento',
      'Consejos prácticos para integración en la rutina diaria'
    ],
    button: { text: 'Contratar bono', type: 'outline' }
  },
  {
    title: 'Bono 8 sesiones',
    price: '300 €',
    items: [
      '8 sesiones con plan progresivo centrado en ejercicios clave',
      'Seguimiento práctico del avance en cada sesión',
      'Adaptaciones y variantes para mantener la motivación'
    ],
    button: { text: 'Elegir este bono', type: 'primary' }
  },
  {
    title: 'Bono 12 sesiones',
    price: '420 €',
    items: [
      '12 sesiones para un programa integral de readaptación',
      'Progresión detallada y ajustes periódicos en cada etapa',
      'Soporte continuo: dudas y consejos entre sesiones'
    ],
    button: { text: 'Contratar ahora', type: 'outline' }
  }
];

const Services = () => `
<section id="services" class="services container">
  <h2>Bonos de Readaptación con Ejercicio</h2>
  <p>Un enfoque 100% práctico: sesiones centradas en ejercicios progresivos para recuperar funcionalidad y rendimiento, sin trámites ni valoraciones adicionales.</p>
  <div class="services-grid">
    ${servicesData.map(s => `
      <div class="service-card">
        <h3>${s.title}</h3>
        <p class="service-price">${s.price}</p>
        <ul>
          ${s.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <a href="https://wa.me/633090021" target="_blank" rel="noopener noreferrer" class="button-${s.button.type}">${s.button.text}</a>
      </div>
    `).join('')}
  </div>
</section>
`;

export default Services;