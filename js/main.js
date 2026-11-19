/* ==========================================================================
   COLEGIO URUGUAY CURICÓ — LÓGICA INTERACTIVA Y DATOS EDITABLES
   ========================================================================== */

const NOTICIAS_DATA = [
  {
    id: 1,
    titulo: "Inauguración de Juegos de Educación Parvularia en Aniversario N° 102",
    categoria: "comunidad",
    categoriaLabel: "Aniversario 102",
    fecha: "13 de Noviembre 2026",
    imagen: "img/inauguracion-juegos-parvularia.jpg",
    emoji: "🛝",
    gradiente: "linear-gradient(135deg, #0B2545, #1E6FD9)",
    resumen: "El pasado 13 de noviembre, en la celebración de nuestro Aniversario N° 102, inauguramos los nuevos juegos infantiles de Educación Parvularia.",
    detalle: "En el marco de la celebración de nuestro Aniversario N° 102, realizado el 13 de noviembre, nuestra comunidad educativa inauguró oficialmente el nuevo espacio de juegos para Educación Parvularia. El recinto cuenta con módulos recreativos, pasto sintético y cubierta protectora tipo toldo vela para brindar seguridad, sombra y alegría a nuestros estudiantes más pequeños."
  },
  {
    id: 2,
    titulo: "Debate Estudiantil Elecciones Centro de Estudiantes",
    categoria: "comunidad",
    categoriaLabel: "Participación Estudiantil",
    fecha: "Noviembre 2026",
    imagen: "img/actividad-debate-centro-estudiantes.jpg",
    emoji: "🎙️",
    gradiente: "linear-gradient(135deg, #0B2545, #1E6FD9)",
    resumen: "Con la organización del TRICEL, las listas postulantes al Centro de Estudiantes presentaron sus propuestas de convivencia y ambiente escolar.",
    detalle: "En una ejemplar jornada de formación ciudadana y democracia escolar, las listas candidatas al Centro de Estudiantes expusieron sus iniciativas sobre ambiente escolar, talleres y actividades recreativas frente a sus compañeros, con la moderación del Tribunal Calificador de Elecciones (TRICEL) del Colegio Uruguay."
  },
  {
    id: 3,
    titulo: "Taller de Reciclaje y Educación Ambiental junto a ReSimple",
    categoria: "comunidad",
    categoriaLabel: "Medioambiente",
    fecha: "Noviembre 2026",
    imagen: "img/actividad-resimple.jpg",
    emoji: "♻️",
    gradiente: "linear-gradient(135deg, #0F766E, #16A34A)",
    resumen: "Junto a la Dirección de Medio Ambiente de la Municipalidad de Curicó y ReSimple, nuestros estudiantes aprendieron a separar residuos reciclables.",
    detalle: "Mediante dinámicas participativas en el aula, monitores de ReSimple y la Dirección de Medio Ambiente de la Municipalidad de Curicó enseñaron a nuestros estudiantes a clasificar envases livianos, papeles y cartones, fortaleciendo la conciencia ecológica en toda la comunidad educativa."
  },
  {
    id: 4,
    titulo: "Jornada de Trueque de Libros y Fomento Lector",
    categoria: "cultura",
    categoriaLabel: "Arte y Cultura",
    fecha: "Octubre 2026",
    imagen: "img/actividad-trueque-libros.jpg",
    emoji: "📚",
    gradiente: "linear-gradient(135deg, #1E6FD9, #38BDF8)",
    resumen: "En colaboración con la Corporación Cultural de Curicó y nuestra Biblioteca CRA, estudiantes intercambiaron textos y descubrieron nuevas lecturas.",
    detalle: "Con una gran variedad de cuentos, novelas juveniles y libros ilustrados, se realizó la jornada de Trueque de Libros en nuestro establecimiento junto a la Corporación Cultural de Curicó, motivando el gusto por la lectura compartida entre niñas, niños y docentes."
  },
  {
    id: 5,
    titulo: "Simulacro Integral de Seguridad Escolar (PISE)",
    categoria: "comunidad",
    categoriaLabel: "Seguridad Escolar",
    fecha: "Octubre 2026",
    imagen: "img/actividad-simulacro.jpg",
    emoji: "🛡️",
    gradiente: "linear-gradient(135deg, #0B2545, #0284C7)",
    resumen: "Estudiantes, docentes y asistentes de la educación participaron de forma ordenada en nuestro ejercicio preventivo de evacuación.",
    detalle: "Siguiendo los protocolos de nuestro Plan Integral de Seguridad Escolar (PISE), toda la comunidad educativa realizó un simulacro de evacuación hacia las zonas de seguridad del patio central, evaluando tiempos de respuesta y medidas de autocuidado."
  },
  {
    id: 6,
    titulo: "Encuentro Deportivo y Vida Saludable Interescolar",
    categoria: "deportes",
    categoriaLabel: "Deportes",
    fecha: "Octubre 2026",
    imagen: "img/formacion-integral-deporte.jpg",
    emoji: "⚽",
    gradiente: "linear-gradient(135deg, #0F766E, #14B8A6)",
    resumen: "Delegaciones deportivas del Colegio Uruguay representaron con orgullo nuestros colores en jornadas de convivencia y deporte escolar en Curicó.",
    detalle: "Fomentando el compañerismo, el respeto y los hábitos de vida saludable, nuestros equipos participaron activamente en encuentros deportivos comunales, dejando en alto el espíritu de nuestro establecimiento."
  },
  {
    id: 7,
    titulo: "Inicio Proceso Pre-Matrícula 2027 en Línea",
    categoria: "comunidad",
    categoriaLabel: "Admisión 2027",
    fecha: "Noviembre 2026",
    imagen: "img/banner-prematricula-2027.jpg",
    emoji: "🎓",
    gradiente: "linear-gradient(135deg, #0B2545, #1E6FD9)",
    resumen: "Ya se encuentra habilitado nuestro portal digital para realizar la Pre-Matrícula 2027 de manera rápida y segura desde cualquier dispositivo.",
    detalle: "Invitamos a todas las familias y apoderados de nuestra comunidad educativa a completar el formulario de Pre-Matrícula 2027 a través de nuestro enlace oficial (colegiouruguay.web.app/prematricula). Este paso permite agilizar la actualización de datos y asegurar una atención expedita."
  },
  {
    id: 8,
    titulo: "Muestra Artística y Festival de Talentos Escolares",
    categoria: "cultura",
    categoriaLabel: "Arte y Cultura",
    fecha: "Noviembre 2026",
    emoji: "🎶",
    gradiente: "linear-gradient(135deg, #1E6FD9, #38BDF8)",
    resumen: "Nuestros estudiantes demostraron todo su talento musical, artístico y escénico frente a familias y docentes en una jornada llena de entusiasmo.",
    detalle: "Con una gran participación de cursos de primer y segundo ciclo, se desarrolló nuestra muestra artística anual, destacando el compromiso de los talleres extraprogramáticos y el apoyo permanente de madres, padres y apoderados."
  }
];

const DEPENDENCIAS_DATA = [
  {
    id: "cancha-multiuso",
    titulo: "Cancha Multiuso Techada",
    etiqueta: "Deporte y Actos",
    imagen: "img/dependencia-cancha-multiuso.jpg",
    resumen: "Amplio gimnasio y multicancha techada para clases de educación física, campeonatos deportivos y encuentros escolares.",
    detalle: "Nuestra Cancha Multiuso Techada ofrece un espacio amplio, iluminado y protegido durante todo el año para la práctica de básquetbol, baby fútbol, vóleibol, educación física y ceremonias institucionales de toda la comunidad educativa."
  },
  {
    id: "biblioteca-cra",
    titulo: "Biblioteca CRA",
    etiqueta: "Lectura e Investigación",
    imagen: "img/dependencia-biblioteca.jpg",
    resumen: "Centro de Recursos para el Aprendizaje con estanterías abiertas, colección literaria y mesas de trabajo colaborativo.",
    detalle: "La Biblioteca CRA del Colegio Uruguay es un espacio acogedor diseñado para fomentar el hábito lector, la investigación escolar y el estudio guiado, contando con literatura infantil, juvenil, textos de consulta y mobiliario adaptado para todos los cursos."
  },
  {
    id: "laboratorio-ciencias",
    titulo: "Laboratorio de Ciencias",
    etiqueta: "Ciencias Naturales",
    imagen: "img/dependencia-laboratorio-ciencias.jpg",
    resumen: "Sala equipada con mesones de experimentación, microscopios e instrumental pedagógico para aprender haciendo.",
    detalle: "En nuestro Laboratorio de Ciencias los estudiantes desarrollan habilidades de indagación científica mediante experimentos prácticos, observación microscópica y proyectos de biología, física y química acompañados por sus docentes."
  },
  {
    id: "laboratorio-computacion",
    titulo: "Laboratorio de Computación",
    etiqueta: "Tecnología e Informática",
    imagen: "img/dependencia-laboratorio-computacion.jpg",
    resumen: "Sala de informática con estaciones individuales conectadas para alfabetización digital, programación y apoyo curricular.",
    detalle: "El Laboratorio de Computación dispone de estaciones de trabajo individuales conectadas a red, permitiendo fortalecer las competencias digitales, el uso responsable de herramientas tecnológicas y el aprendizaje interactivo."
  },
  {
    id: "comedor-estudiantes",
    titulo: "Comedor de Estudiantes",
    etiqueta: "Alimentación Escolar",
    imagen: "img/dependencia-comedor-estudiantes.jpg",
    resumen: "Amplio comedor institucional iluminado y ventilado para el servicio diario de desayuno y almuerzo de nuestros alumnos.",
    detalle: "El Comedor de Estudiantes brinda un ambiente limpio, ordenado y cómodo para que niñas y niños disfruten diariamente de su alimentación saludable en un entorno grato y supervisado."
  },
  {
    id: "hall-parvularia",
    titulo: "Hall de Educación Parvularia",
    etiqueta: "Pre-Kínder y Kínder",
    imagen: "img/dependencia-hall-parvularia.jpg",
    resumen: "Espacio interior de juego seguro, psicomotricidad y encuentro pedagógico especialmente ambientado para la primera infancia.",
    detalle: "El Hall de Educación Parvularia cuenta con módulos blandos de psicomotricidad, ambientación educativa y áreas seguras pensadas especialmente para el desarrollo integral y la convivencia de nuestros estudiantes de Pre-Kínder y Kínder."
  },
  {
    id: "patio-juegos-parvularia",
    titulo: "Patio y Juegos de Educación Parvularia",
    etiqueta: "Inaugurado Aniversario 102",
    imagen: "img/inauguracion-juegos-parvularia.jpg",
    resumen: "Renovado patio exterior con juegos modulares, pasto sintético y cubierta protectora tipo toldo vela.",
    detalle: "Inaugurado el 13 de noviembre en el marco de nuestro Aniversario N° 102, este espacio exterior cuenta con juegos modulares seguros, superficie de pasto sintético y toldo vela para protección solar."
  }
];

const EVENTOS_DATA = [
  {
    dia: "20",
    mes: "NOV",
    hora: "Jornada Escolar",
    titulo: "Desfile de Educación Parvularia",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261120T090000/20261120T120000"
  },
  {
    dia: "24",
    mes: "NOV",
    hora: "09:30 a 18:00 hrs.",
    titulo: "Día de la Familia",
    lugar: "Estadio La Granja, Curicó",
    fechaGCal: "20261124T093000/20261124T180000"
  },
  {
    dia: "26",
    mes: "NOV",
    hora: "Jornada Escolar",
    titulo: "Acto «Leo Solito»",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261126T090000/20261126T120000"
  },
  {
    dia: "27",
    mes: "NOV",
    hora: "Jornada Escolar",
    titulo: "Cuarto Consejo Escolar 2026",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261127T100000/20261127T123000"
  },
  {
    dia: "07",
    mes: "DIC",
    hora: "Jornada Escolar",
    titulo: "Último Día de Clases",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261207T080000/20261207T160000"
  },
  {
    dia: "09",
    mes: "DIC",
    hora: "Jornada Escolar",
    titulo: "Acto de Premiación",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261209T100000/20261209T123000"
  },
  {
    dia: "09",
    mes: "DIC",
    hora: "Horario de Atención",
    titulo: "Inicio Matrículas Estudiantes Nuevos",
    lugar: "Oficina de Matrículas — Colegio Uruguay",
    fechaGCal: "20261209T090000/20261209T140000"
  },
  {
    dia: "11",
    mes: "DIC",
    hora: "10:30 hrs.",
    titulo: "Acto de Traspaso de Kínder",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261211T103000/20261211T123000"
  },
  {
    dia: "14-18",
    mes: "DIC",
    hora: "14 al 18 de Diciembre",
    titulo: "Inicio Matrículas Estudiantes Antiguos",
    lugar: "Oficina de Matrículas — Colegio Uruguay",
    fechaGCal: "20261214T090000/20261218T140000"
  },
  {
    dia: "16",
    mes: "DIC",
    hora: "20:00 hrs.",
    titulo: "Licenciatura Octavos Básicos",
    lugar: "Colegio Uruguay, Curicó",
    fechaGCal: "20261216T200000/20261216T220000"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHeroSlider();
  initNewsSection();
  initDependenciasGallery();
  initCalendarEvents();
  initInstitutionalTabs();
});

/* Helper para abrir el Lightbox Modal */
function openLightboxModal({ imagen, emoji, gradiente, categoriaLabel, fecha, titulo, detalle }) {
  const modal = document.getElementById("newsModal");
  const modalVisual = document.getElementById("modalVisual");
  if (!modal || !modalVisual) return;

  modalVisual.style.background = gradiente || "linear-gradient(135deg, #0B2545, #1E6FD9)";
  if (imagen) {
    modalVisual.innerHTML = `<img src="${imagen}" alt="${titulo}" />`;
  } else {
    modalVisual.textContent = emoji || "🏫";
  }
  document.getElementById("modalCat").textContent = categoriaLabel || "Colegio Uruguay";
  document.getElementById("modalDate").textContent = fecha || "Curicó";
  document.getElementById("modalTitle").textContent = titulo;
  document.getElementById("modalText").textContent = detalle;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

/* 1. Navegación Móvil y Dropdowns */
function initMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("mainNav");
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  dropdownTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        const parent = btn.closest(".has-dropdown");
        parent.classList.toggle("open");
      }
    });
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("open");
    });
  });
}

/* 2. Hero Carrusel */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => showSlide(current + 1), 6500);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { showSlide(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { showSlide(current + 1); startAuto(); });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.target));
      startAuto();
    });
  });

  startAuto();
}

/* 3. Noticias y Actividades + Filtros + Lightbox Modal */
function initNewsSection() {
  const grid = document.getElementById("newsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreNewsBtn");
  const modal = document.getElementById("newsModal");
  const closeModal = document.getElementById("closeModal");

  let activeFilter = "all";
  let visibleCount = 6;

  function renderNews() {
    const filtered = activeFilter === "all"
      ? NOTICIAS_DATA
      : NOTICIAS_DATA.filter((n) => n.categoria === activeFilter);

    const slice = filtered.slice(0, visibleCount);
    grid.innerHTML = slice.map((item) => {
      const visualHtml = item.imagen
        ? `<img src="${item.imagen}" alt="${item.titulo}" class="news-thumb-img" />`
        : `<span class="news-thumb-emoji">${item.emoji}</span>`;

      return `
        <article class="news-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Leer actividad: ${item.titulo}">
          <div class="news-thumb" style="background: ${item.gradiente};">
            <span class="news-cat-badge">${item.categoriaLabel}</span>
            ${visualHtml}
          </div>
          <div class="news-body">
            <span class="news-date">${item.fecha}</span>
            <h3>${item.titulo}</h3>
            <p>${item.resumen}</p>
            <span class="news-readmore">Ver actividad completa →</span>
          </div>
        </article>
      `;
    }).join("");

    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= filtered.length ? "none" : "inline-flex";
    }

    grid.querySelectorAll(".news-card").forEach((card) => {
      const openHandler = () => {
        const newsItem = NOTICIAS_DATA.find((n) => n.id === Number(card.dataset.id));
        if (!newsItem) return;
        openLightboxModal(newsItem);
      };
      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") openHandler(); });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      visibleCount = 6;
      renderNews();
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 6;
      renderNews();
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  renderNews();
}

/* 4. Galería de Dependencias del Colegio */
function initDependenciasGallery() {
  const grid = document.getElementById("dependenciasGrid");
  if (!grid) return;

  grid.innerHTML = DEPENDENCIAS_DATA.map((dep) => `
    <article class="dependencia-card" data-dep-id="${dep.id}" tabindex="0" role="button" aria-label="Ver dependencia: ${dep.titulo}">
      <div class="dependencia-thumb">
        <span class="dependencia-badge">${dep.etiqueta}</span>
        <img src="${dep.imagen}" alt="${dep.titulo} - Colegio Uruguay Curicó" loading="lazy" />
      </div>
      <div class="dependencia-body">
        <h4>${dep.titulo}</h4>
        <p>${dep.resumen}</p>
        <span class="dependencia-zoom">Ampliar fotografía →</span>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".dependencia-card").forEach((card) => {
    const openDep = () => {
      const depItem = DEPENDENCIAS_DATA.find((d) => d.id === card.dataset.depId);
      if (!depItem) return;
      openLightboxModal({
        imagen: depItem.imagen,
        categoriaLabel: `Dependencia • ${depItem.etiqueta}`,
        fecha: "Colegio Uruguay Curicó",
        titulo: depItem.titulo,
        detalle: depItem.detalle
      });
    };
    card.addEventListener("click", openDep);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openDep(); });
  });
}

/* 5. Calendario / Próximas Fechas */
function initCalendarEvents() {
  const list = document.getElementById("eventsList");
  if (!list) return;

  list.innerHTML = EVENTOS_DATA.map((ev) => {
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.titulo + " - Colegio Uruguay")}&dates=${ev.fechaGCal}&location=${encodeURIComponent(ev.lugar)}`;
    return `
      <div class="event-item">
        <div class="event-date-box">
          <span class="event-day${ev.dia.includes("-") ? " is-range" : ""}">${ev.dia}</span>
          <span class="event-month">${ev.mes}</span>
        </div>
        <div class="event-details">
          <span class="event-time">🕒 ${ev.hora}</span>
          <h3>${ev.titulo}</h3>
          <p>📍 ${ev.lugar}</p>
        </div>
        <a href="${gcalUrl}" target="_blank" rel="noopener" class="event-gcal" title="Agendar en Google Calendar">
          + Agendar
        </a>
      </div>
    `;
  }).join("");
}

/* 6. Pestañas Institucionales */
function initInstitutionalTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const hash = anchor.getAttribute("href").replace("#", "");
      const tabMap = {
        academico: "tab-academico",
        talleres: "tab-talleres",
        protocolos: "tab-protocolos",
        nosotros: "tab-colegio",
        infraestructura: "tab-colegio",
        dependencias: "tab-colegio"
      };
      if (tabMap[hash]) {
        tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.tab === tabMap[hash]));
        tabPanels.forEach((p) => p.classList.toggle("active", p.id === tabMap[hash]));
      }
    });
  });
}
