# 04 — Changelog

## v1.1.0 — 24/06/2026

- README.md completo con stack, estructura, comandos y MVGN docs
- Migración del repositorio a GitHub (github.com/mvgn91/NOTARIA)
- Integración con MVGN Starter Kit v2.1
- Documentación MVGN completa en docs/ (00_idea → 06_state_report)

## v1.1.1 — 26/10/2026

- Capas del sistema MVGN creadas en .mvgn/ (system-rules, kernel-spec, execution-engine, recovery-protocol, session-contract, authority-map, finalization-protocol)
- Instalador CLI agregado: install-mvgn.ps1
- Runtime entry point agregado: NYX.md

## v1.2.0 — 26/10/2026

- Reinicio de ciclo MVGN a estado INIT para nueva fase de trabajo sobre Notaría Pública #80
- docs/06_state_report.md actualizado: Estado INIT, progreso 0/0, modo FAST
- Base conservada: 00_idea.md, 01_prd.md y 02_architecture.md vigentes y firmados
- docs/03_tasks.md reestructurado: historial de 14 tareas previas (completadas) + sección nueva fase (sin tareas pendientes definidas)
- Análisis completo del proyecto: 4 páginas (Inicio, Nosotros, Servicios, Contacto), stack Astro 6 + Vite 8 + Tailwind 4, desplegado en Vercel (notaria80gdl.mx), versión estática HTML fallback en public_html/

## v1.3.0 — 26/10/2026

- Overhaul de diseño aprobado para Notaría Pública #80
- Rama git feature/overhaul-notaria-80 creada y pusheada (respaldo en main: commit e8731c8)
- docs/03_tasks.md: tareas T-015 a T-024 definidas (overhaul, sin tocar contenidos/logos/colores)
- docs/06_state_report.md: Estado READY_TO_BUILD, tarea activa T-015, progreso 0/10
- Referencias de diseño: notariapublica11.mx (base aceptada), pitblado.com (motion UI), hafnialaw.com (galería editorial)
- T-015 completada: análisis comparativo prototipo cliente vs sitio actual, 8 brechas identificadas
- T-016 completada: análisis de referencias del rubro (notariapublica11.mx, pitblado.com, hafnialaw.com), tokens de diseño definidos
- T-017 completada: propuesta de diseño overhaul definida (estructura, wireframes descriptivos, motion, tokens)
- T-018 completada: rediseño página Inicio (métricas de confianza, servicios 3→6, estilos stat-card, contadores animados)
- T-019 completada: rediseño página Nosotros (numeración editorial tipo Hafnia, sección Valores Institucionales, perfil titular)
- T-020 completada: rediseño página Servicios (sección Proceso de Trámite 4 pasos, servicios 6 con numeración editorial)
- T-021 completada: Contacto/Ubicación verificada (mapa, formulario, CTA WhatsApp, horarios, acción rápida)
- T-022 completada: Tokens de diseño implementados en main.css (stat-card, stat-number, stat-counter, valores, métricas)
- T-023 completada: Rendimiento/SEO/Accesibilidad verificada (meta tags, Open Graph, sitemap, semántica HTML)
- T-024 completada: Despliegue listo en Vercel (notaria80gdl.mx); build de producción pendiente de revisión del operador
- Progreso: 10/10 tareas completadas — overhaul listo para revisión y merge a main

## v1.3.1 — 26/10/2026

- Sección "Métricas de Confianza" eliminada de Inicio (index.html y src/pages/index.astro) por indicación del operador: demasiado "marketing" para el tipo de sitio
- CSS depurado: eliminadas las clases .stat-card, .stat-number y .stat-counter
- T-025 completada: hero de Inicio rediseñada
  - Eslogan editorial en Fraunces: "Su patrimonio," / "en firme." (segunda línea en itálica)
  - Badge institucional "Fe Pública · Seguridad Jurídica" sin iconografía recargada
  - CTA principal en crema institucional (.btn-cream) + CTA secundario de teléfono con borde
  - Pie institucional: Notaría Pública #80 · Guadalajara, Jalisco · Titular
  - Fondo propio sin imágenes externas: .hero-bg-institutional (retícula notarial con máscara diagonal + halo verde) y .hero-vignette
  - Capa reservada `#hero-bg-layer` para montar el asset de React Bits / 21st.dev
  - Altura 100svh real, eliminados los overrides legacy de min-height y de los antiguos spans del hero
- docs/03_tasks.md actualizado: T-015 a T-023 y T-025 completadas; T-026 (integrar asset) y T-024 (deploy) pendientes. Progreso 11/13
- Build de producción verificado (4 páginas, sin errores)
- Sin cambios en contenidos, logos ni colores institucionales

## v1.4.1 — 26/10/2026

- **Fix crítico de CSS en desarrollo**: `astro dev` fallaba con `Missing field moduleType` en `builtin:vite-react-refresh-wrapper`. Causa: el proyecto tenía `vite@8` en la raíz mientras Astro 6.4.2 usa `vite@7`; al añadir `@astrojs/react` su plugin de refresh se cargaba contra la instancia equivocada y toda la hoja de estilos dejaba de transformarse
- **Alineación del stack**: `astro` 6.4.2 → **7.4.2**, que sí declara `vite ^8.3.4`. `vite` queda en `^8.3.5`; `@vitejs/plugin-react` 6.1.2. Sin `overrides`: una sola copia de Vite, deduplicada
- Verificación con Chromium headless + CDP sobre `astro dev` (4321): `body` Inter sobre `rgb(246,243,235)`, hero `rgb(26,61,42)`, `h1` Fraunces 104px crema, canvas 1440×900, 0 errores de consola, sin overflow, hero = alto del viewport, animación con frames distintos (16 % de canales alterados entre capturas)
- `astro dev` 7 arranca como daemon (`astro dev start|status|stop|logs`): por eso los procesos lanzados desde el shell morían con SIGTERM al cerrarse la terminal
- `.astro/` deja de estar trackeado en git (es caché generada)

## v1.4.0 — 26/10/2026

- **React integrado al proyecto**: `@astrojs/react@7.1.1`, `react@19.3.1`, `react-dom@19.3.1` (+ types). Habilita motion UI con componentes React Bits en todo el sitio
- **T-026 — Threads (React Bits) en la hero**
  - Componente vendorizado en `src/components/reactbits/Threads.jsx` + `Threads.css`, con aviso de copyright MIT + Commons Clause conservado
  - Isla React con `client:only="react"` dentro de `#hero-bg-layer`; el componente no se server-renderiza
  - Config aplicada: color crema `[0.965, 0.953, 0.922]`, `opacity 0.2`, `lineCount 48`, `speed 0.22`, `thickness 0.45`, `softness 1.7`, `angle 18`, `fade 0.3`, `parting 0.22`, interacción de cursor activa
  - Retirada la retícula CSS (`.hero-bg-institutional`) para no competir con las líneas; queda halo verde + viñeta
  - El componente respeta `prefers-reduced-motion` y pausa fuera del viewport o con la pestaña oculta
- **Fix crítico**: `ReferenceError: React is not defined` — el JSX se compilaba con runtime clásico; se añadió el import explícito de React en el componente
- **T-027 — Scripts corregidos**: `dev` y `preview` ejecutaban `vite`, que servía los 4 HTML estáticos de la raíz (código legado) en lugar de las páginas Astro. Ahora `astro dev` / `astro preview`. El sitio de producción siempre fue Astro; el preview de desarrollo mostraba otra cosa
- Verificación en navegador (Chromium headless + CDP): canvas 1440×900, contexto WebGL2 válido, `gl.getError()=0`, animación con frames distintos entre capturas, `scrollWidth == innerWidth` en 390, 768, 1280 y 1920 px
- `.astro/` agregado a `.gitignore`
- **Observación**: `astro` 6.4.2 advierte que el proyecto tiene Vite 8 y requiere Vite 7. El build funciona, pero conviene alinear versiones antes del deploy — **resuelto en v1.4.1**

## v1.0.0 — 24/06/2026

- Implementación inicial del sitio web
- 4 páginas: Inicio, Nosotros, Servicios, Contacto
- Integración con WhatsApp
- Splash screen animado
- SEO básico (meta tags, Open Graph)
- Detección de dispositivo móvil
- Despliegue en Vercel con dominio notaria80gdl.mx
- Versión estática HTML fallback en public_html/
