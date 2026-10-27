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

## v1.0.0 — 24/06/2026

- Implementación inicial del sitio web
- 4 páginas: Inicio, Nosotros, Servicios, Contacto
- Integración con WhatsApp
- Splash screen animado
- SEO básico (meta tags, Open Graph)
- Detección de dispositivo móvil
- Despliegue en Vercel con dominio notaria80gdl.mx
- Versión estática HTML fallback en public_html/
