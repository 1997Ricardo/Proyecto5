import './Contact.css';

const Contact = () => `
<section id="contact" class="contact container">
  <h2>Contacto</h2>

  <div class="contact-methods">
    <a href="https://wa.me/34633090021" target="_blank" rel="noopener noreferrer" class="contact-icon whatsapp">
      WhatsApp
    </a>
    <a href="https://www.instagram.com/ror.readap?igsh=Nmx0cG04MHJxZ3lj" target="_blank" rel="noopener noreferrer" class="contact-icon instagram">
      Instagram
    </a>
    <a href="mailto:ror.readap@gmail.com" class="contact-icon email">
      Email
    </a>
  </div>

  <div class="contact-form-wrapper">
    <form id="contact-form" class="contact-form">
      <input type="text" name="name" placeholder="Tu nombre" required />
      <input type="email" name="email" placeholder="Tu email" required />
      <textarea name="message" rows="4" placeholder="Tu mensaje" required></textarea>
      <button type="submit" class="button-primary">Enviar mensaje</button>
    </form>
    <button
      class="button-outline calendar-button"
      onclick="window.open(
        'https://calendar.google.com/calendar/embed?src=ror.readap%40gmail.com&ctz=Europe%2FMadrid',
        '_blank'
      )"
    >
      Reservar cita
    </button>
  </div>
</section>
`;

export default Contact;