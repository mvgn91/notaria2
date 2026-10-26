import '/src/styles/main.css'

document.addEventListener('DOMContentLoaded', () => {
  initSplash()
  initMobileMenu()
  initHeaderScroll()
  initScrollToTop()
  initCounters()
  initStaggeredReveal()
  initMultipleReveals()
  initGallerySliders()
  initCVTabs()
  initClientsCarousel()
  initSpothub()
  initImageModal()
  initScrollReveal()
  initSmoothScroll()
  initContactForm()
  initHeroParallax()
  initTestimonialModal()
})

/* ── Splash Screen ── */
function initSplash() {
  const splash = document.getElementById('splash-screen')
  if (!splash) return
  const duration = parseInt(splash.getAttribute('data-duration')) || 2200
  setTimeout(() => {
    splash.classList.add('fade-out')
    setTimeout(() => {
      splash.style.display = 'none'
      document.body.style.overflow = ''
    }, 1000)
  }, duration)
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle')
  const close = document.getElementById('nav-close')
  const menu = document.getElementById('nav-menu')
  const overlay = document.getElementById('nav-overlay')
  if (!toggle || !menu) return

  function openMenu() {
    menu.classList.remove('translate-x-full')
    menu.classList.add('translate-x-0')
    if (overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none')
      overlay.classList.add('opacity-100', 'pointer-events-auto')
    }
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    menu.classList.remove('translate-x-0')
    menu.classList.add('translate-x-full')
    if (overlay) {
      overlay.classList.remove('opacity-100', 'pointer-events-auto')
      overlay.classList.add('opacity-0', 'pointer-events-none')
    }
    document.body.style.overflow = ''
  }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('translate-x-0')) {
      closeMenu()
    } else {
      openMenu()
    }
  })
  if (close) close.addEventListener('click', closeMenu)
  if (overlay) overlay.addEventListener('click', closeMenu)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu)
  })
}

/* ── Header Scroll Effect ── */
function initHeaderScroll() {
  const header = document.getElementById('header')
  if (!header) return
  window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 60)
  })
}

/* ── Scroll to Top ── */
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top')
  if (!btn) return
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 300
    btn.classList.toggle('opacity-100', show)
    btn.classList.toggle('opacity-0', !show)
    btn.classList.toggle('pointer-events-auto', show)
    btn.classList.toggle('pointer-events-none', !show)
  })
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

/* ── Animated Counters ── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]')
  if (!counters.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(el => {
    el.innerText = '0'
    observer.observe(el)
  })
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'))
  const duration = parseInt(el.getAttribute('data-duration')) || 2000
  const suffix = el.getAttribute('data-suffix') || ''
  const start = performance.now()

  function update(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(eased * target)
    el.innerText = current + suffix
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

/* ── Staggered Reveal ── */
function initStaggeredReveal() {
  const containers = document.querySelectorAll('.stagger-children')
  if (!containers.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  containers.forEach(el => observer.observe(el))
}

/* ── Multiple Reveal Types ── */
function initMultipleReveals() {
  const types = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale']
  let all = []
  types.forEach(t => {
    document.querySelectorAll(`.${t}`).forEach(el => all.push(el))
  })

  if (!all.length) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })
  all.forEach(el => observer.observe(el))
}

/* ── Gallery Sliders ── */
function initGallerySliders() {
  document.querySelectorAll('.gallery-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.gallery-slide')
    const prev = slider.querySelector('.gallery-prev')
    const next = slider.querySelector('.gallery-next')
    const indicators = slider.querySelectorAll('.gallery-dot')
    let current = 0
    if (!slides.length) return

    function show(index) {
      slides.forEach(s => s.classList.remove('active'))
      indicators.forEach(d => d.classList.remove('bg-primary', 'scale-125'))
      slides[index].classList.add('active')
      indicators[index]?.classList.add('bg-primary', 'scale-125')
      current = index
    }

    function goPrev() { show((current - 1 + slides.length) % slides.length) }
    function goNext() { show((current + 1) % slides.length) }

    if (prev) prev.addEventListener('click', goPrev)
    if (next) next.addEventListener('click', goNext)
    indicators.forEach((dot, i) => dot.addEventListener('click', () => show(i)))

    slides.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        const imgs = Array.from(slides).map(s => s.querySelector('img'))
        const img = slide.querySelector('img')
        if (img) openModal(img, imgs, i)
      })
    })

    // ── Touch swipe support ──
    let touchStartX = 0
    let touchEndX = 0

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX
    }, { passive: true })

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }, { passive: true })

    function handleSwipe() {
      const threshold = 50
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > threshold) {
        if (diff > 0) goNext()
        else goPrev()
      }
    }

    show(0)
  })
}

/* ── Image Modal ── */
let modalImages = []
let modalIndex = 0

function setModalImage(src, alt) {
  const modalImg = document.querySelector('.modal-img')
  if (!modalImg) return
  modalImg.style.opacity = '0'
  setTimeout(() => {
    modalImg.src = src
    modalImg.alt = alt || ''
    modalImg.style.opacity = '1'
  }, 120)
}

function updateModalCounter() {
  const counter = document.querySelector('.modal-counter')
  if (!counter || !modalImages.length) return
  counter.textContent = `${modalIndex + 1} / ${modalImages.length}`
}

function openModal(img, images, index) {
  const modal = document.getElementById('image-modal')
  if (!modal) return
  modalImages = images || [img]
  modalIndex = index || 0
  setModalImage(img.src, img.alt)
  updateModalCounter()
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  const modal = document.getElementById('image-modal')
  if (!modal) return
  modal.classList.remove('active')
  document.body.style.overflow = ''
}

function prevModal() {
  if (!modalImages.length) return
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length
  setModalImage(modalImages[modalIndex]?.src || '', modalImages[modalIndex]?.alt || '')
  updateModalCounter()
}

function nextModal() {
  if (!modalImages.length) return
  modalIndex = (modalIndex + 1) % modalImages.length
  setModalImage(modalImages[modalIndex]?.src || '', modalImages[modalIndex]?.alt || '')
  updateModalCounter()
}

function initImageModal() {
  const modal = document.getElementById('image-modal')
  if (!modal) return
  modal.querySelector('.modal-overlay')?.addEventListener('click', closeModal)
  modal.querySelector('.modal-close')?.addEventListener('click', closeModal)
  modal.querySelector('.modal-prev')?.addEventListener('click', prevModal)
  modal.querySelector('.modal-next')?.addEventListener('click', nextModal)
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') prevModal()
    if (e.key === 'ArrowRight') nextModal()
  })
}

/* ── CV Tabs ── */
function initCVTabs() {
  const btns = document.querySelectorAll('.cv-tab-btn')
  if (!btns.length) return

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab')
      btns.forEach(b => {
        b.classList.remove('active', 'bg-primary')
        b.style.color = ''
      })
      document.querySelectorAll('.cv-tab-content').forEach(c => c.classList.remove('active'))
      btn.classList.add('active', 'bg-primary')
      document.getElementById(target)?.classList.add('active')
    })
  })
}

/* ── Image fallback for broken client logos ── */
window.imgFallback = function(img) {
  const cell = img.closest('.client-card') || img.closest('.bento-cell')
  if (!cell) return
  cell.classList.add('logo-failed')
  const name = cell.querySelector('.client-name') || cell.querySelector('.bento-name')
  if (name) {
    name.textContent = img.alt || 'Cliente'
  }
  img.style.display = 'none'
}

/* ── Datos de los clientes para el Spothub ── */
const CLIENTS_DATA = {
  'Infonavit': {
    description: 'Institución gubernamental que otorga créditos para que los trabajadores puedan adquirir una vivienda, construir o mejorar su hogar. Infonavit es el principal organismo de financiamiento hipotecario en México, brindando soluciones de vivienda accesibles para los trabajadores formales.',
    url: 'https://portalmx.infonavit.org.mx/',
    tags: ['Hipotecario', 'Gobierno']
  },
  'FOVISSSTE': {
    description: 'Fondo de la Vivienda del ISSSTE, organismo que ofrece créditos hipotecarios y soluciones de vivienda a los trabajadores al servicio del Estado, contribuyendo a mejorar su calidad de vida mediante financiamientos accesibles y transparentes.',
    url: 'https://www.gob.mx/fovissste',
    tags: ['Hipotecario', 'Gobierno']
  },
  'IPEJAL': {
    description: 'Instituto de Pensiones del Estado de Jalisco, encargado de administrar las pensiones y prestaciones de los trabajadores del estado. Ofrece servicios financieros y crediticios a sus derechohabientes en la región.',
    url: 'https://ipejal.jalisco.gob.mx/',
    tags: ['Pensiones', 'Gobierno Estatal']
  },
  'ISSFAM': {
    description: 'Instituto de Seguridad Social para las Fuerzas Armadas Mexicanas, organismo que proporciona seguridad social, créditos hipotecarios y prestaciones a los miembros del ejército, fuerza aérea y armada de México.',
    url: 'https://www.gob.mx/issfam',
    tags: ['Hipotecario', 'Seguridad Social']
  },
  'BIM': {
    description: 'Banco Inmobiliario Mexicano, institución financiera especializada en el sector inmobiliario que ofrece soluciones de crédito y financiamiento para la adquisición, construcción y desarrollo de proyectos de vivienda en México.',
    url: 'https://bim.mx/',
    tags: ['Financiero', 'Inmobiliario']
  },
  'DBA System': {
    description: 'Empresa de tecnología especializada en soluciones de software y sistemas de información para el sector notarial y legal, ofreciendo plataformas digitales que optimizan la gestión documental y los procesos administrativos.',
    url: 'https://www.dbasystem.org/',
    tags: ['Tecnología', 'Software Legal']
  },
  'Óptimo Futuro': {
    description: 'Sociedad de inversión especializada en el ahorro para el retiro y planeación financiera, ayudando a las personas a construir un patrimonio sólido y garantizar su bienestar económico a largo plazo.',
    url: 'https://optimofuturo.com/',
    tags: ['Inversión', 'Retiro']
  },
  'Hogares SM': {
    description: 'Desarrolladora inmobiliaria comprometida con la creación de viviendas de calidad en el sur de México. Ofrece soluciones habitacionales integrales con diseños modernos, plusvalía y financiamiento accesible.',
    url: 'https://hogares-sm.com/',
    tags: ['Desarrolladora', 'Vivienda']
  },
  'Casa Administraciones': {
    description: 'Empresa especializada en la administración de propiedades y condominios, brindando servicios profesionales de gestión inmobiliaria, cobranza, mantenimiento y asesoría legal para propietarios y copropietarios.',
    url: 'https://www.casaadministraciones.com/',
    tags: ['Administración', 'Inmobiliaria']
  },
  'ION Financiera': {
    description: 'Institución financiera que ofrece soluciones de crédito y servicios financieros flexibles para personas y empresas, destacando por su atención personalizada, rapidez en la aprobación y condiciones competitivas.',
    url: 'https://www.ion.com.mx/',
    tags: ['Financiero', 'Crédito']
  }
}

/* ── Estado global del carrusel ── */
let carouselState = {
  currentIndex: 0,
  totalCards: 0,
  autoInterval: null,
  isPaused: false,
  clientNames: []
}

/* ─═ CARRUSEL DE CLIENTES ═─
     Carrusel horizontal con transform JS, auto-play,
     loop infinito mediante clonación de tarjetas,
     y sidebar navegable. Click en una card abre el
     drawer con la info del cliente.
  ── */

// Funciones globales (accesibles desde navigateSpothub)
function carouselStopAuto() {
  if (window.__carouselStop) window.__carouselStop()
}
function carouselStartAuto() {
  if (window.__carouselStart) window.__carouselStart()
}
function carouselResetAuto() {
  carouselStopAuto()
  carouselStartAuto()
}

function initClientsCarousel() {
  const track = document.getElementById('carouselTrack')
  const prevBtn = document.getElementById('carouselPrev')
  const nextBtn = document.getElementById('carouselNext')
  const dotsContainer = document.getElementById('carouselDots')
  const carousel = document.getElementById('clientsCarousel')
  if (!track) return

  const cards = Array.from(track.querySelectorAll('.client-card'))
  if (!cards.length) return

  const originalCount = cards.length
  carouselState.totalCards = originalCount
  carouselState.clientNames = cards.map(c => c.getAttribute('data-client'))
  carouselState.originalTotal = originalCount

  // ── Obtener gap del track ──
  function getGap() {
    const style = window.getComputedStyle(track)
    return parseFloat(style.gap) || 16
  }

  // ── Obtener ancho de scroll por tarjeta ──
  function getCardStep() {
    if (!cards.length) return 200
    return cards[0].offsetWidth + getGap()
  }

  // ── Clonar tarjetas para loop infinito ──
  cards.forEach(card => {
    const clone = card.cloneNode(true)
    clone.classList.remove('active-card')
    const origIdx = parseInt(card.getAttribute('data-index')) || 0
    clone.setAttribute('data-index', origIdx + originalCount)
    track.appendChild(clone)
  })

  const allCards = Array.from(track.querySelectorAll('.client-card'))

  // ── Crear dots (solo para originales) ──
  if (dotsContainer) {
    cards.forEach((_, i) => {
      const dot = document.createElement('button')
      dot.className = `carousel-dot${i === 0 ? ' active' : ''}`
      dot.setAttribute('aria-label', `Ir a ${cards[i].getAttribute('data-client') || `cliente ${i + 1}`}`)
      dot.addEventListener('click', () => {
        pauseAuto()
        goTo(i)
        scheduleResume(4000)
      })
      dotsContainer.appendChild(dot)
    })
  }

  // ── Estado interno ──
  let currentIndex = 0
  let autoTimer = null
  let teleportTimer = null
  let resumeTimer = null
  let isPaused = false

  // ── goTo — ir a un índice específico con animación ──
  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, originalCount - 1))
    const step = getCardStep()
    const offset = -(currentIndex * step)
    track.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    track.style.transform = `translateX(${offset}px)`
    updateDots()
    updateActiveCard()
  }

  function go(dir) {
    const next = (currentIndex + dir + originalCount) % originalCount
    goTo(next)
  }

  // ── Actualizar dots ──
  function updateDots() {
    if (!dotsContainer) return
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex)
    })
  }

  // ── Actualizar card activa (el glow) ──
  function updateActiveCard() {
    allCards.forEach(c => {
      const idx = parseInt(c.getAttribute('data-index')) || 0
      c.classList.toggle('active-card', idx === currentIndex)
    })
  }

  // ── Auto-play con loop infinito ──
  function startAuto() {
    stopAuto()
    if (isPaused) return

    function tick() {
      const nextIdx = currentIndex + 1
      const step = getCardStep()
      const offset = -(nextIdx * step)

      track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      track.style.transform = `translateX(${offset}px)`

      currentIndex = nextIdx

      // Si pasamos el set original, hacer un teleport silencioso al inicio
      if (currentIndex >= originalCount) {
        clearTimeout(teleportTimer)
        teleportTimer = setTimeout(() => {
          currentIndex = 0
          track.style.transition = 'none'
          track.style.transform = 'translateX(0px)'
          // Forzar reflow
          void track.offsetHeight
          teleportTimer = null
        }, 800)
      }

      const logicalIdx = currentIndex % originalCount
      updateDots()
      allCards.forEach(c => {
        const idx = parseInt(c.getAttribute('data-index')) || 0
        c.classList.toggle('active-card', idx === logicalIdx || idx === currentIndex)
      })

      autoTimer = setTimeout(tick, 3500)
    }

    // Iniciar ciclo — primer movimiento más rápido (1.5s) para no verse estático al cargar
    autoTimer = setTimeout(tick, 1500)
  }

  function stopAuto() {
    clearTimeout(autoTimer)
    clearTimeout(teleportTimer)
    autoTimer = null
    teleportTimer = null
  }

  function pauseAuto() {
    isPaused = true
    stopAuto()
  }

  function scheduleResume(delay) {
    clearTimeout(resumeTimer)
    resumeTimer = setTimeout(() => {
      isPaused = false
      startAuto()
    }, delay)
  }

  // Exponer funciones para uso global
  window.__carouselStop = stopAuto
  window.__carouselStart = startAuto
  window.__carouselGoTo = goTo
  window.__carouselGetIndex = () => currentIndex

  // ── Click en flechas ──
  prevBtn?.addEventListener('click', () => {
    pauseAuto()
    go(-1)
    scheduleResume(4000)
  })
  nextBtn?.addEventListener('click', () => {
    pauseAuto()
    go(1)
    scheduleResume(4000)
  })

  // ── Click en cards: abrir sidebar (event delegation en el track)
  //     Usamos delegación para cubrir tanto tarjetas originales como clonadas.
  track.addEventListener('click', (e) => {
    const card = e.target.closest('.client-card')
    if (!card) return

    const clientName = card.getAttribute('data-client')
    const rawIndex = parseInt(card.getAttribute('data-index')) || 0
    // Normalizar índice: si es un clon, usar el índice lógico
    const logicalIndex = rawIndex >= originalCount ? rawIndex - originalCount : rawIndex
    const data = CLIENTS_DATA[clientName]
    if (!data) return

    const img = card.querySelector('.client-logo')
    const logoFailed = card.classList.contains('logo-failed')
    const logoSrc = img && !logoFailed ? img.getAttribute('src') : ''

    goTo(logicalIndex)
    openSpothub(clientName, data.description, data.url, logoSrc, logicalIndex)
  })

  // ── Pausa en hover ──
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      pauseAuto()
    })
    carousel.addEventListener('mouseleave', () => {
      scheduleResume(0)
    })
  }

  // ── Touch swipe support ──
  let touchStartX = 0
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
    pauseAuto()
  }, { passive: true })
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50) {
      if (diff > 0) go(1)
      else go(-1)
    }
    scheduleResume(4000)
  }, { passive: true })

  // ── Resize handler ──
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      stopAuto()
      goTo(currentIndex)
      if (!isPaused) startAuto()
    }, 200)
  })

  // ── Inicializar ──
  goTo(0)
  startAuto()
}

/* ─═ SPOTHUB DRAWER ═─ */

function openSpothub(name, description, url, logoSrc, index) {
  const drawer = document.getElementById('spothubDrawer')
  const overlay = document.getElementById('spothubOverlay')
  if (!drawer || !overlay) return

  carouselState.currentIndex = index != null ? index : 0

  populateSpothubContent(name, description, url, logoSrc)

  // Abrir
  drawer.classList.add('active')
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

/* ── Poblar contenido del sidebar ── */
function populateSpothubContent(name, description, url, logoSrc) {
  const titleEl = document.getElementById('spothubTitle')
  const descEl = document.getElementById('spothubDesc')
  const linkEl = document.getElementById('spothubLink')
  const logoEl = document.getElementById('spothubLogo')
  const tagsEl = document.getElementById('spothubTags')
  const counterEl = document.getElementById('spothubCounter')

  if (counterEl) {
    counterEl.textContent = `${carouselState.currentIndex + 1} / ${carouselState.totalCards}`
  }

  if (titleEl) titleEl.textContent = name
  if (descEl) descEl.textContent = description

  if (linkEl) {
    if (url && url !== '#') {
      linkEl.href = url
      linkEl.style.display = 'inline-flex'
    } else {
      linkEl.style.display = 'none'
    }
  }

  // Logo
  const logoWrap = document.querySelector('.spothub-logo-wrap')
  if (logoEl && logoWrap) {
    if (logoSrc) {
      logoEl.src = logoSrc
      logoEl.alt = name || ''
      logoWrap.style.display = ''
    } else {
      logoEl.src = ''
      logoWrap.style.display = 'none'
    }
  }

  // Tags
  if (tagsEl) {
    const data = CLIENTS_DATA[name]
    const tags = data?.tags || []
    tagsEl.innerHTML = tags.map(t => `<span class="spothub-tag">${t}</span>`).join('')
  }

}

// buildSpothubStrip removed — navigation is now via 1/10 counter + arrows

/* ── Navegar entre clientes desde el sidebar ── */
function navigateSpothub(dir) {
  const names = carouselState.clientNames
  if (!names.length) return

  const current = typeof window.__carouselGetIndex === 'function' ? window.__carouselGetIndex() : carouselState.currentIndex
  let newIndex = (current + dir + names.length) % names.length

  const clientName = names[newIndex]
  const data = CLIENTS_DATA[clientName]
  if (!data) return

  // Encontrar la card correspondiente para obtener el logo
  const track = document.getElementById('carouselTrack')
  let logoSrc = ''
  if (track) {
    const card = track.querySelector(`.client-card[data-client="${clientName}"]`)
    if (card) {
      const img = card.querySelector('.client-logo')
      const logoFailed = card.classList.contains('logo-failed')
      if (img && !logoFailed) logoSrc = img.getAttribute('src')
    }
  }

  // Actualizar contenido del sidebar con animación
  const content = document.getElementById('spothubContent')
  content?.classList.add('spothub-content-transition')

  populateSpothubContent(clientName, data.description, data.url, logoSrc)

  // Sincronizar carrusel: mover a la tarjeta correspondiente
  if (typeof window.__carouselGoTo === 'function') {
    window.__carouselGoTo(newIndex)
  }
  carouselState.currentIndex = newIndex

  // Reset auto-play
  carouselResetAuto()

  // Quitar clase de animación después
  setTimeout(() => content?.classList.remove('spothub-content-transition'), 600)
}

/* ── Touch swipe support for drawer ── */
let spothubTouchStartX = 0
let spothubTouchEndX = 0

/* ── Close Spothub ── */
function closeSpothub() {
  const drawer = document.getElementById('spothubDrawer')
  const overlay = document.getElementById('spothubOverlay')

  if (!drawer || !overlay) return

  drawer.classList.remove('active')
  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

/* ── Inicializar Spothub ── */
function initSpothub() {
  const closeBtn = document.getElementById('spothubClose')
  const overlay = document.getElementById('spothubOverlay')
  const navPrev = document.getElementById('spothubNavPrev')
  const navNext = document.getElementById('spothubNavNext')

  if (closeBtn) closeBtn.addEventListener('click', closeSpothub)
  if (overlay) overlay.addEventListener('click', closeSpothub)
  if (navPrev) navPrev.addEventListener('click', () => navigateSpothub(-1))
  if (navNext) navNext.addEventListener('click', () => navigateSpothub(1))

  // ── Swipe support en el drawer ──
  const drawer = document.getElementById('spothubDrawer')
  if (drawer) {
    drawer.addEventListener('touchstart', (e) => {
      spothubTouchStartX = e.changedTouches[0].screenX
    }, { passive: true })

    drawer.addEventListener('touchend', (e) => {
      spothubTouchEndX = e.changedTouches[0].screenX
      const threshold = 60
      const diff = spothubTouchStartX - spothubTouchEndX
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          navigateSpothub(1)  // swipe left → next
        } else {
          navigateSpothub(-1) // swipe right → previous
        }
      }
    }, { passive: true })
  }

  // Escape + flechas desde el sidebar
  document.addEventListener('keydown', (e) => {
    const drawer = document.getElementById('spothubDrawer')
    if (!drawer || !drawer.classList.contains('active')) return

    if (e.key === 'Escape') {
      closeSpothub()
      return
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      navigateSpothub(-1)
      return
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      navigateSpothub(1)
      return
    }
  })
}

/* ── Scroll Reveal (legacy) ── */
function initScrollReveal() {
  const elms = document.querySelectorAll('.reveal-legacy')
  if (!elms.length) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    })
  }, { threshold: 0.15 })
  elms.forEach(el => observer.observe(el))
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const top = target.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  })
}

/* ── Testimonial Modal (click-to-expand) ── */
function initTestimonialModal() {
  const modal = document.getElementById('testimonialModal')
  if (!modal) return

  const overlay = document.getElementById('testimonialModalOverlay')
  const closeBtn = document.getElementById('testimonialModalClose')
  const prevBtn = document.getElementById('testimonialModalPrev')
  const nextBtn = document.getElementById('testimonialModalNext')

  let currentIndex = 0
  let cards = []

  function refreshCards() {
    cards = document.querySelectorAll('.testimonial-trigger')
  }

  function openModal(index) {
    refreshCards()
    if (!cards.length) return
    currentIndex = Math.max(0, Math.min(index, cards.length - 1))
    const card = cards[currentIndex]
    if (!card) return

    const isFeatured = card.classList.contains('testimonial-featured')
    let quote, author, source, initial, stars, googleLink

    if (isFeatured) {
      const contentEl = card.querySelector('.testimonial-featured-content')
      quote = contentEl?.querySelector('p')?.textContent?.trim() || ''
      author = contentEl?.querySelector('h4')?.textContent?.trim() || ''
      const sourceEl = contentEl?.querySelector('.text-gray-400')
      source = sourceEl?.textContent?.trim() || 'Google'
      const avatarEl = contentEl?.querySelector('.rounded-full')
      initial = avatarEl?.textContent?.trim() || '?'
      stars = contentEl?.querySelectorAll('.fa-star')?.length || 5
      const linkEl = contentEl?.querySelector('a[href*="google"]')
      googleLink = linkEl?.getAttribute('href') || ''
    } else {
      quote = card.querySelector('p')?.textContent?.trim() || ''
      author = card.querySelector('h4')?.textContent?.trim() || ''
      const sourceEl = card.querySelector('.text-gray-400')
      source = sourceEl?.textContent?.trim() || 'Google'
      const avatarEl = card.querySelector('.rounded-full')
      initial = avatarEl?.textContent?.trim() || '?'
      stars = card.querySelectorAll('.fa-star')?.length || 5
      googleLink = ''
    }

    buildModalContent({ quote, author, source, initial, stars, googleLink })
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  function buildModalContent(data) {
    const starsEl = document.getElementById('testimonialModalStars')
    const quoteEl = document.getElementById('testimonialModalQuote')
    const avatarEl = document.getElementById('testimonialModalAvatar')
    const nameEl = document.getElementById('testimonialModalName')
    const sourceEl = document.getElementById('testimonialModalSource')
    const counterEl = document.getElementById('testimonialModalCounter')
    const linkEl = document.getElementById('testimonialModalLink')

    if (starsEl) {
      let html = ''
      for (let i = 0; i < (data.stars || 5); i++) {
        html += '<i class="fas fa-star text-amber-400" style="font-size:1.2rem"></i>'
      }
      starsEl.innerHTML = html
    }

    if (quoteEl) quoteEl.textContent = data.quote
    if (avatarEl) avatarEl.textContent = data.initial || '?'
    if (nameEl) nameEl.textContent = data.author
    if (sourceEl) sourceEl.textContent = data.source
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${cards.length}`

    if (linkEl) {
      if (data.googleLink) {
        linkEl.href = data.googleLink
        linkEl.style.display = 'inline-flex'
      } else {
        linkEl.style.display = 'none'
      }
    }
  }

  function closeModal() {
    modal.classList.remove('active')
    document.body.style.overflow = ''
  }

  function prevTestimonial() {
    refreshCards()
    if (!cards.length) return
    const prev = (currentIndex - 1 + cards.length) % cards.length
    openModal(prev)
  }

  function nextTestimonial() {
    refreshCards()
    if (!cards.length) return
    const next = (currentIndex + 1) % cards.length
    openModal(next)
  }

  // ── Click on testimonial cards ──
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.testimonial-trigger')
    if (!trigger) return
    refreshCards()
    const index = Array.from(cards).indexOf(trigger)
    if (index !== -1) openModal(index)
  })

  // ── Close handlers ──
  overlay?.addEventListener('click', closeModal)
  closeBtn?.addEventListener('click', closeModal)

  // ── Navigation ──
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    prevTestimonial()
  })
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation()
    nextTestimonial()
  })

  // ── Keyboard ──
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') prevTestimonial()
    if (e.key === 'ArrowRight') nextTestimonial()
  })

  // ── Touch swipe on modal container ──
  const container = modal.querySelector('.testimonial-modal-container')
  if (container) {
    let touchStartX = 0
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX
    }, { passive: true })
    container.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextTestimonial()
        else prevTestimonial()
      }
    }, { passive: true })
  }
}

/* ── Hero Parallax ── */
function initHeroParallax() {
  const parallax = document.querySelector('.hero-parallax')
  if (!parallax) return

  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const offset = scrolled * 0.25
        parallax.style.transform = `translateY(${offset}px) scale(1.1)`
        ticking = false
      })
      ticking = true
    }
  })
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const nombre = data.get('nombre')
    const email = data.get('email')
    const telefono = data.get('telefono') || 'No proporcionado'
    const asunto = data.get('asunto')
    const mensaje = data.get('mensaje')

    const body = `Nuevo mensaje desde notaria80gdl.mx\n\nDATOS DEL CONTACTO:\n- Nombre: ${nombre}\n- Email: ${email}\n- Teléfono: ${telefono}\n- Asunto: ${asunto}\n\nMENSAJE:\n${mensaje}\n\n---\nEste mensaje fue enviado desde el formulario de contacto de notaria80gdl.mx`

    window.location.href = `mailto:notaria80gdl@hotmail.com?subject=Consulta Web: ${asunto}&body=${encodeURIComponent(body)}`

    const btn = form.querySelector('button[type="submit"]')
    if (btn) {
      const orig = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-check"></i> Mensaje Enviado'
      btn.classList.add('bg-gradient-to-br', 'from-primary', 'to-primary-dark')
      setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('bg-gradient-to-br', 'from-primary', 'to-primary-dark') }, 3000)
    }
    form.reset()
  })
}
