# Proyecto5

# ROR Landing Page

**Proyecto:** Landing ROR (Readaptación, Optimización y Rendimiento)

Una landing page dinámica y moderna desarrollada con Vite, Vanilla JavaScript y CSS, estructurada en componentes modulares.

---

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone <https://github.com/1997Ricardo/Proyecto5.git> ror-landing
   cd ror-landing
   ```
2. Instala dependencias:

   ```bash
   npm install
   ```
3. Ejecuta en modo desarrollo:

   ```bash
   npm run dev
   ```
4. Construye para producción:

   ```bash
   npm run build
   ```

---

## 📁 Estructura de Directorios

```
ror-landing/
├── index.html            # Entrada principal, solo incluye <script>
├── vite.config.js        # Configuración de Vite
└── src/
    ├── style.css         # Estilos globales y variables CSS
    ├── main.js           # Punto de arranque, renderiza componentes
    ├── assets/           # Imágenes (perfil, logos...)
    │   └── logo.png
        └── hero.png
    └── components/       # Componentes modulares
        ├── Header/
        │   ├── Header.js
        │   └── Header.css
        ├── Nav/
        │   ├── Nav.js
        │   └── Nav.css
        ├── Hero/
        │   ├── Hero.js
        │   └── Hero.css
        ├── Services/
        │   ├── Services.js
        │   └── Services.css
        ├── About/
        │   ├── About.js
        │   └── About.css
        ├── Contact/
        │   ├── Contact.js
        │   └── Contact.css
        └── Footer/
            ├── Footer.js
            └── Footer.css
```

---

## 🎨 Tecnologías

* [Vite](https://vitejs.dev/) (Vanilla template)
* Vanilla JavaScript (ES Modules)
* CSS puro con variables personalizadas

---

## 🛠️ Componentes

* **Header**: Logo y texto centrado.
* **Nav**: Barra de navegación con scroll suave.
* **Hero**: Imagen de perfil y texto de bienvenida.
* **Services**: Grid de bonos con enlaces a WhatsApp.
* **About**: Sección "Sobre mí" con tu biografía.
* **Contact**: Embed de Google Form + enlaces y botón de cita.
* **Footer**: Navegación secundaria y © dinámico.

---

## ⚙️ Configuración adicional

* **Google Forms**: Embed en `Contact.js`, ajusta el `iframe` si cambias URL.
* **Scroll suave**: Activa con:

  ```css
  html { scroll-behavior: smooth; }
  ```

---

## 📞 Contacto

* WhatsApp: [+34 633 09 00 21](https://wa.me/34633090021)
* Instagram: [@ror.readap](https://www.instagram.com/ror.readap)
* Email: [ror.readap@gmail.com](mailto:ror.readap@gmail.com)

---

*Desarrollado con ❤️ por Ricardo.*
