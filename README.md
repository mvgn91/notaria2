# Notaría Pública #80 — Sitio Web Institucional

Sitio web profesional, elegante e institucional para la **Notaría Pública #80** en Guadalajara, Jalisco. Titular: Maestra María Enriqueta Ortiz Guerrero.

El sitio debe transmitir **confianza, seguridad jurídica y cercanía**.
Cada decisión de diseño e ingeniería debe apoyar este objetivo.

**Producción:** [notaria80gdl.mx](https://notaria80gdl.mx)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework SSG | Astro 6 |
| Build Tool | Vite 8 |
| CSS Framework | Tailwind CSS 4 |
| Tipografía | Fraunces (display) + Inter (texto) |
| Iconografía | Font Awesome 6 |
| Hosting | Vercel (CDN + SSL + deploys automáticos) |
| Legacy Fallback | HTML5 estático + CSS3 + Vanilla JS |

---

## Estado del proyecto

| Fase | Progreso |
|------|----------|
| Fase 0: Fundación (idea + PRD) | ✅ 100% |
| Fase 1: Arquitectura Técnica | ✅ 100% |
| Fase 2: Diseño Visual (tokens → Tailwind) | ✅ 100% |
| Fase 3: Sprint 1 — Páginas principales | ✅ 100% |
| Fase 4: Sprint 2 — Motor + Calidad | ✅ 100% |
| Fase 5: Despliegue + SEO | ✅ 100% |

**Lighthouse:** Pendiente de auditoría formal

---

## MVGN

Este proyecto sigue el sistema **MVGN** (Model-View-Guardian-Nexus).
Documentación completa del ciclo de vida en `docs/`:

| Doc | Contenido |
|-----|-----------|
| `00_idea.md` | Idea original y filosofía del producto |
| `01_prd.md` | Product Requirements Document (RF + RNF) |
| `02_architecture.md` | Arquitectura, ADRs, stack, routing |
| `03_tasks.md` | Desglose de tareas (12/12 completadas) |
| `04_changelog.md` | Historial de cambios |
| `05_lessons_learned.md` | Lecciones aprendidas |
| `06_state_report.md` | Estado actual del proyecto |

Capas del sistema MVGN en `.mvgn/`: contract, kernel, rules, engine, recovery, authority.

---

## Estructura

```
/
├── .mvgn/                    # Capas del sistema MVGN
├── docs/                     # Documentación del ciclo de vida
├── prompts/                  # Prompts especializados para IA
├── tools/                    # CLI de MVGN
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base (header, footer, meta)
│   ├── pages/
│   │   ├── index.astro       # Inicio (Hero, servicios, clientes, testimonios)
│   │   ├── nosotros.astro    # Nosotros (historia, titular, misión/visión)
│   │   ├── servicios.astro   # Servicios (catálogo notarial completo)
│   │   └── ubicacion.astro   # Contacto (mapa, formulario, datos)
│   ├── styles/
│   │   └── main.css          # Estilos globales + Tailwind
│   └── js/
│       └── main.js           # Interactividad (splash, nav, carrusel, scroll)
├── public/                   # Assets estáticos (imágenes, favicon, manifest)
├── public_html/              # Versión estática HTML fallback
├── index.html                # Página principal (static fallback)
├── servicios.html            # Servicios (static fallback)
├── nosotros.html             # Nosotros (static fallback)
├── ubicacion.html            # Contacto (static fallback)
├── astro.config.mjs
├── vite.config.js
├── vercel.json
└── package.json
```

---

## Páginas

| Página | Ruta | Prioridad |
|--------|------|-----------|
| Inicio | `/` | P0 |
| Nosotros | `/nosotros` | P0 |
| Servicios | `/servicios` | P0 |
| Contacto | `/ubicacion` | P0 |

---

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build estático (Astro) |
| `npm run preview` | Previsualizar build |
| `.\tools\mvgn.ps1 start` | Inicializar sesión MVGN |
| `.\tools\mvgn.ps1 state` | Ver estado del sistema MVGN |
| `.\tools\mvgn.ps1 context` | Exportar contexto MVGN |

---

## Información de contacto

| Dato | Detalle |
|------|---------|
| **Notaría** | Notaría Pública #80 |
| **Titular** | Maestra María Enriqueta Ortiz Guerrero |
| **Dirección** | C. Pablo Villaseñor 125, Ladrón de Guevara, 44600 Guadalajara, Jal. |
| **Teléfonos** | 33 1983 3354, 33 1983 3355, 33 3630 6433 |
| **Email** | notaria80gdl@hotmail.com |
| **Horarios** | Lunes a Viernes 9:00 AM – 5:00 PM |
| **WhatsApp** | [33 1170 4104](https://wa.me/523311704104) |

---

## Licencia

MIT — MVGN Labs

---

Desarrollado con el sistema [MVGN](https://github.com/mvgn91)
