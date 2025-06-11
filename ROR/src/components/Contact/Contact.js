import './Contact.css';

const Contact = () => `
<section id="contact" class="contact container">
  <h2>Contacto</h2>

  <div class="contact-methods">
    <a
      href="https://wa.me/34633090021"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-icon whatsapp"
    >WhatsApp</a>
    <a
      href="https://www.instagram.com/ror.readap?igsh=Nmx0cG04MHJxZ3lj"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-icon instagram"
    >Instagram</a>
    <a
      href="mailto:ror.readap@gmail.com"
      class="contact-icon email"
    >Email</a>
  </div>

  <div class="contact-form-wrapper">
    <!-- Aquí se embebe tu Google Form -->
    <div class="form-embed">
      <iframe
        src="https://forms.gle/HMhTrjZzx2rcQUWXA"
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Cargando…</iframe>
    </div>

    <button
      class="button-outline calendar-button"
      onclick="window.open(
        'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eSDgpvpBbfIPPBKh9-IBkF2JfV5HOEJq-YJHWowGIPjUilF65FVqD4iQrUQv3kvh0Obb96_Gm',
        '_blank'
      )"
    >Reservar cita</button>
  </div>
</section>
`;

export default Contact;





     
