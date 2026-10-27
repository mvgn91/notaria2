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

## v1.0.0 — 24/06/2026

- Implementación inicial del sitio web
- 4 páginas: Inicio, Nosotros, Servicios, Contacto
- Integración con WhatsApp
- Splash screen animado
- SEO básico (meta tags, Open Graph)
- Detección de dispositivo móvil
- Despliegue en Vercel con dominio notaria80gdl.mx
- Versión estática HTML fallback en public_html/
