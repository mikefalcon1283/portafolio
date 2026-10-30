(function () {
  const D = window.DATOS;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else e.setAttribute(k, v);
    }
    e.append(...kids);
    return e;
  };
  const plural = n => `${n} ${n === 1 ? 'foto' : 'fotos'}`;

  /* Menú móvil */
  const menu = $('.menu'), nav = $('.nav');
  if (menu) {
    menu.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', nav.classList.toggle('abierto'));
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') { nav.classList.remove('abierto'); menu.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- Página de inicio ---------- */
  if (document.body.dataset.pagina === 'inicio') {
    $('#portada').src = D.portada;
    $('#retrato').src = D.retrato;

    const cats = $('#cats');
    for (const [clave, c] of Object.entries(D.categorias)) {
      if (!c.fotos.length) continue;
      cats.append(
        el('a', { class: 'cat', href: `galeria.html?c=${clave}` },
          el('img', { src: c.fotos[0].src, alt: c.fotos[0].alt || c.nombre, loading: 'lazy' }),
          el('div', {}, el('strong', { text: c.nombre }), el('small', { text: plural(c.fotos.length) }))
        )
      );
    }

    if (D.videos.length) {
      $('#videos').hidden = false;
      for (const v of D.videos) {
        $('#lista-videos').append(el('iframe', {
          src: `https://www.youtube-nocookie.com/embed/${v.id}`,
          title: v.titulo || 'Video', loading: 'lazy', allowfullscreen: ''
        }));
      }
    } else {
      const l = $('.nav a[href="#videos"]'); if (l) l.remove();
    }

    const C = D.contacto;
    $('#wa').href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent('Hola Jose, vi tu portafolio y me interesa cotizar un proyecto.')}`;
    $('#mail').href = `mailto:${C.correo}`;
    $('#ig').href = `https://instagram.com/${C.instagram}`;
    $('#tel').textContent = `${C.correo}  |  ${C.telefono}`;
  }

  /* ---------- Página de galería ---------- */
  if (document.body.dataset.pagina === 'galeria') {
    const claves = Object.keys(D.categorias);
    let actual = new URLSearchParams(location.search).get('c');
    if (!D.categorias[actual]) actual = claves[0];
    const cat = D.categorias[actual];

    document.title = `${cat.nombre} — Jose Juárez`;
    $('#titulo').textContent = cat.nombre;
    $('#descripcion').textContent = cat.descripcion;

    for (const k of claves) {
      const a = el('a', { href: `galeria.html?c=${k}`, text: D.categorias[k].nombre });
      if (k === actual) a.setAttribute('aria-current', 'page');
      $('#tabs').append(a);
    }

    const fotos = cat.fotos;
    fotos.forEach((f, n) => {
      const b = el('button', { type: 'button', 'aria-label': `Ampliar foto ${n + 1} de ${fotos.length}` },
        el('img', { src: f.src, alt: f.alt || '', loading: 'lazy' }));
      b.addEventListener('click', () => abrir(n));
      $('#mosaico').append(b);
    });

    /* Visor */
    const v = $('#visor'), vi = $('#visor-img'), vc = $('#visor-cap');
    let i = 0;
    const mostrar = () => { const f = fotos[i]; vi.src = f.src; vi.alt = f.alt || ''; vc.textContent = `${i + 1} de ${fotos.length}`; };
    const mover = d => { i = (i + d + fotos.length) % fotos.length; mostrar(); };
    function abrir(n) { i = n; mostrar(); v.showModal(); }

    $('#v-cerrar').onclick = () => v.close();
    $('#v-prev').onclick = () => mover(-1);
    $('#v-next').onclick = () => mover(1);
    v.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') mover(1);
      if (e.key === 'ArrowLeft') mover(-1);
    });
    v.addEventListener('click', e => {
      if (e.target === v || e.target.classList.contains('visor-in')) v.close();
    });
    let x0 = null;
    v.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    v.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }
})();
