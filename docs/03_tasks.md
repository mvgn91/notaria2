# 03 — Tasks

> Desglose de tareas ejecutadas y pendientes — Notaría Pública #80

## Fase completada — v1.0.0 / v1.1.0 / v1.1.1 / v1.2.0 (historial)

| ID | Descripción | Estado | Prioridad | Dependencias | Ref PRD | Ref Arq |
|----|------------|--------|-----------|-------------|---------|---------|
| T-001 | Crear estructura del proyecto Astro + Vite + Tailwind | Completada | Alta | — | RF-01 | ADR-01, ADR-02 |
| T-002 | Implementar layout base (Header, Footer, navegación) | Completada | Alta | T-001 | RF-01, RF-07 | ADR-01 |
| T-003 | Implementar splash screen animado | Completada | Media | T-001 | RF-06 | — |
| T-004 | Crear página principal (Hero, servicios, carrusel, testimonios) | Completada | Alta | T-002 | RF-01 | — |
| T-005 | Crear página "Nosotros" (historia, titular, misión/visión) | Completada | Alta | T-002 | RF-02 | — |
| T-006 | Crear página "Servicios" (catálogo completo) | Completada | Alta | T-002 | RF-03 | — |
| T-007 | Crear página "Contacto/Ubicación" (mapa, formulario, datos) | Completada | Alta | T-002 | RF-04 | — |
| T-008 | Integrar WhatsApp flotante y enlaces directos | Completada | Alta | T-001 | RF-05 | — |
| T-009 | Implementar detección de dispositivo móvil + redirección | Completada | Media | T-001 | RF-08 | — |
| T-010 | SEO básico (meta tags, Open Graph, sitemap) | Completada | Alta | T-004, T-005, T-006, T-007 | RNF-03 | — |
| T-011 | Desplegar en Vercel con dominio personalizado | Completada | Alta | T-004, T-005, T-006, T-007 | RNF-06 | — |
| T-012 | Crear versión estática HTML fallback (public_html/) | Completada | Baja | T-004, T-005, T-006, T-007 | — | ADR-03 |
| T-013 | Crear README.md y documentación completa del proyecto | Completada | Alta | T-012 | — | — |
| T-014 | Migrar repositorio a GitHub (github.com/mvgn91/NOTARIA) | Completada | Alta | T-013 | — | — |

**Resumen fase previa:** 14/14 tareas completadas

---

## Nueva fase — Overhaul Notaría Pública #80 (estado actual)

> Estado del sistema: `READY_TO_BUILD` — modo `FAST` — overhaul de diseño basado en sitio actual, rescatando lo mejor del prototipo cliente y referencias del rubro (notariapublica11.mx, pitblado.com, hafnialaw.com). Sin tocar contenidos, logos ni colores.

| ID | Descripción | Estado | Prioridad | Dependencias | Ref PRD | Ref Arq |
|----|------------|--------|-----------|-------------|---------|---------|
| T-015 | Análisis comparativo: prototipo cliente vs sitio actual — brechas y oportunidades | Completada | Alta | — | RF-01 a RF-09 | — |
| T-016 | Análisis de referencias del rubro — tokens de diseño y patrones UX (pitblado.com, hafnialaw.com, notariapublica11.mx) | Completada | Alta | T-015 | RNF-01, RNF-02 | — |
| T-017 | Definir propuesta de diseño overhaul (estructura, wireframes, motion) manteniendo contenidos, logos y colores | Completada | Alta | T-016 | RF-01 a RF-09 | ADR-01, ADR-02 |
| T-018 | Rediseñar página Inicio: servicios destacados 3→6, aliados, testimonios (sección de métricas descartada por el operador) | Completada | Alta | T-017 | RF-01, RF-09 | — |
| T-019 | Rediseñar página Nosotros: perfil titular, valores institucionales, numeración editorial | Completada | Alta | T-017 | RF-02 | — |
| T-020 | Rediseñar página Servicios: catálogo con sub-detalles, proceso paso a paso | Completada | Alta | T-017 | RF-03 | — |
| T-021 | Rediseñar página Contacto/Ubicación: mapa, formulario, CTA WhatsApp/teléfono, horarios, acción rápida | Completada | Alta | T-017 | RF-04 | — |
| T-022 | Implementar nuevos tokens de diseño (tipografía, espaciado, componentes, motion) | Completada | Media | T-017 | RNF-01, RNF-04 | — |
| T-023 | Optimizar rendimiento (Lighthouse), SEO y accesibilidad | Completada | Alta | T-018 a T-021 | RNF-02, RNF-03 | — |
| T-025 | Rediseñar hero de Inicio: eslogan editorial, CTA crema/WhatsApp, retícula institucional, fondo sin imágenes externas | Completada | Alta | T-018 | RF-01 | — |
| T-026 | Integrar Threads (React Bits) en la hero como capa de motion WebGL2 | Completada | Alta | T-025 | RNF-01, RNF-02 | ADR-01 |
| T-027 | Infraestructura React (@astrojs/react 7 + React 19) y corrección de scripts dev/preview (apuntaban a Vite estático) | Completada | Alta | T-026 | RNF-01 | — |
| T-028 | Consolidar código legado: retirar index.html/nosotros.html/servicios.html/ubicacion.html de raíz y public_html/ (no se despliegan) | Pendiente | Media | T-027 | — | — |
| T-024 | Desplegar overhaul en producción (Vercel) y verificar | Pendiente | Alta | T-023, T-026 | RNF-06 | — |

**Resumen nueva fase:** 12 / 14 tareas completadas

**Regla:** No ejecutar tareas sin criterios de aceptación definidos y sin transitar el estado en `06_state_report.md`.
