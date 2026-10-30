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
    instagram: "tu_usuario"        // sin @
  },

  // Videos de YouTube: pega solo el ID (lo que va después de v= en el enlace).
  // Si la lista queda vacía, la sección de videos se oculta sola.
  videos: [
    // { id: "dQw4w9WgXcQ", titulo: "Tomas aéreas 2026" },
  ],

  // Galerías. Para agregar una foto: súbela a la carpeta y suma una línea.
  // La primera foto de cada categoría es la portada de esa galería.
  categorias: {
    drone: {
      nombre: "Drone",
      descripcion: "Fotografía aérea de paisajes, obras y espacios vistos desde arriba.",
      fotos: [
        { src: "img/foto-01.jpg", alt: "Fotografía aérea con drone" },
        { src: "img/foto-02.jpg", alt: "Fotografía aérea con drone" }
      ]
    },
    eventos: {
      nombre: "Eventos sociales",
      descripcion: "Bodas, XV años y celebraciones, con atención a los momentos que no se repiten.",
      fotos: [
        { src: "img/foto-03.jpg", alt: "Fotografía de evento social" },
        { src: "img/foto-04.jpg", alt: "Fotografía de evento social" }
      ]
    },
    corporativo: {
      nombre: "Corporativo",
      descripcion: "Eventos de empresa, retratos profesionales y cobertura de proyectos.",
      fotos: [
        { src: "img/foto-05.jpg", alt: "Fotografía corporativa" },
        { src: "img/foto-06.jpg", alt: "Fotografía corporativa" }
      ]
    }
  }
};
