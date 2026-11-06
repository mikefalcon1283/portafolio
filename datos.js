/* ============================================================
   AQUÍ EDITAS TODO EL CONTENIDO DEL SITIO.
   No necesitas tocar el HTML para agregar fotos o videos.
   ============================================================ */
window.DATOS = {
  nombre: "Jose Juárez",

  // Foto grande de la portada y tu retrato (sección "Acerca de")
  portada: "img/foto-01.jpg",
  retrato: "img/retrato.jpg",

  contacto: {
    correo: "miguel.gomez5@icloud.com",
    whatsapp: "525534349567",      // con lada del país, sin + ni espacios (México: 52 + 10 dígitos)
    telefono: "+52 55 3434 9567",
    instagram: "jose.juarez83"     // sin @
  },

  // Videos de YouTube: pega solo el ID (lo que va después de v= en el enlace).
  // Si la lista queda vacía, la sección de videos se oculta sola.
  videos: [
    // { id: "dQw4w9WgXcQ", titulo: "Tomas aéreas 2026" },
  ],

  // Galerías. Para agregar una foto: súbela a la carpeta y suma una línea.
  // La primera foto de cada categoría es la portada de esa galería.
  categorias: {
    bodas: {
      nombre: "Bodas",
      descripcion: "Desde los preparativos hasta la fiesta, con atención a los momentos que no se repiten.",
      fotos: [
        { src: "img/boda-preparativo-novia.jpg", alt: "Novia sonriendo junto a la ventana con un ramo de alcatraces" },
        { src: "img/boda-preparativo-novio.jpg", alt: "Novio antes de la boda preparando las palabras que le dedicara a su futura esposa" },
        { src: "img/primer-vistazo-novios.jpg",  alt: "El primer vistazo o first look de los novios antes de la boda" }
        // ...el resto
      ]
    },
    eventos: {
      nombre: "Eventos sociales",
      descripcion: "XV años, bautizos, primeras comuniones y celebraciones familiares.",
      fotos: [
         { src: "img/bautizo-cdmx-001.jpg", alt: "Bautizo de una niña en la Ciudad de México, con el agua cayendo sobre su cabeza"},
         { src: "img/primera-comunion-altar-cdmx-001.jpg", alt: "Niña con vestido blanco en su primera comunión en la Ciudad de México" },
         { src: "img/primera-comunion-vestido-cdmx-001.jpg", alt: "Niña con vestido blanco en su sesión de fotos de primera comunión en la Ciudad de México" }
        // tus fotos de XV años, bautizos y comuniones
      ]
    },
    corporativo: {
      nombre: "Corporativo",
      descripcion: "Cobertura en foto y video de tu empresa: eventos, retratos profesionales, proyectos y contenido para tus redes.",
      fotos: [
        { src: "img/foto-05.jpg", alt: "Fotografía corporativa" },
        { src: "img/foto-06.jpg", alt: "Fotografía corporativa" }
      ]
    },
    retratos: {
      nombre: "Retrato y mascotas",
      descripcion: "Sesiones de retrato en exterior e interior, con tu mascota o solo con ella.",
      fotos: [
         { src: "img/mascotas-perro-iguana-parque-cdmx-001.jpg", alt: "Mujer sentada en el pasto de un parque dándole la mano a su perro schnauzer blanco, con una iguana sobre el hombro" },
         { src: "img/mascotas-perro-iguana-parque-cdmx-002.jpg", alt: "Mujer sentada en un pasillo posando junto a su perro schnauzer blanco y su iguana" }
        // ...el resto
      ]
    }
  }
};
