# Notaría Pública #80 - Archivos de Despliegue

## 📁 Estructura de Archivos

Esta carpeta contiene todos los archivos necesarios para desplegar el sitio web de la Notaría Pública #80.

### Estructura de Carpetas:
```
notaria80-deploy/
├── index.html              # Página principal (desktop)
├── nosotros.html           # Página "Nosotros"
├── servicios.html          # Página "Servicios Notariales"
├── ubicacion.html          # Página "Contacto/Ubicación"
├── mobile/
│   └── index.html          # Versión móvil del sitio
├── src/
│   ├── js/                 # Archivos JavaScript
│   │   ├── main.js         # Script principal desktop
│   │   ├── mobile.js       # Script principal móvil
│   │   ├── mobile-detection.js  # Detección de dispositivos
│   │   └── splash.js       # Pantalla de carga móvil
│   └── styles/             # Archivos CSS
│       ├── main.css        # Estilos principales desktop
│       ├── mobile.css      # Estilos móviles
│       └── splash.css      # Estilos de pantalla de carga
├── public/                 # Recursos públicos
│   ├── favicon.svg         # Favicon SVG
│   ├── logo notaria 80 verde.png  # Logo principal
│   └── site.webmanifest    # Manifest para PWA
└── assets/
    └── images/             # Imágenes de clientes y recursos
        ├── Logo_INFONAVIT.svg
        ├── FOVISSTE.svg
        ├── BIM BANCO INMOBILIARIO MEXICANO.png
        ├── IPEJAL.png
        ├── ION LOGO.png
        ├── DBA SYSTEM.png
        ├── casa administraciones png transparente.png
        ├── OPTIMO FUTURO.webp
        └── issfam-seeklogo.png
```

## 🚀 Instrucciones de Despliegue

### 1. Subir al FTP
1. Comprimir esta carpeta `notaria80-deploy` en un archivo ZIP
2. Subir el contenido de la carpeta al directorio raíz de tu hosting
3. Asegúrate de que la estructura de carpetas se mantenga intacta

### 2. Configuración del Servidor
- **Página principal**: `index.html`
- **Versión móvil**: `mobile/index.html`
- **Dominio**: Configurar para que apunte a la carpeta raíz

### 3. 🔄 Detección Automática de Dispositivos
El sitio **detecta automáticamente** el tipo de dispositivo y muestra la versión correspondiente:

- **Dispositivos móviles** (≤768px o user agent móvil): Redirige automáticamente a `/mobile/`
- **Dispositivos desktop** (>768px): Muestra la versión desktop en `/`
- **Cambio manual**: Los usuarios pueden cambiar entre versiones usando los botones en el header

**Archivo de prueba**: `TEST-DETECTION.html` - Úsalo para verificar que la detección funcione correctamente

### 4. 🎬 Splash Screen (Pantalla de Carga)
El sitio incluye una pantalla de carga mejorada que se muestra automáticamente:

- **Primera visita por sesión**: Se muestra el splash screen
- **Navegación en la misma sesión**: No se muestra (se recuerda con sessionStorage)
- **Cerrar y reabrir navegador**: Se reinicia y vuelve a mostrar el splash
- **Duración**: Mínimo 3.5 segundos + tiempo de carga de recursos
- **Diseño mejorado**: Gradiente verde, animaciones suaves, efectos de partículas
- **Solo en páginas principales**: index.html y mobile/index.html
- **Coordinación con detección móvil**: El splash se muestra antes de redirigir a móvil

### 5. Verificación Post-Despliegue
- [ ] Verificar que `index.html` carga correctamente
- [ ] Verificar que `mobile/index.html` carga correctamente
- [ ] Verificar que todas las imágenes se cargan
- [ ] Verificar que los estilos CSS se aplican correctamente
- [ ] Verificar que los scripts JavaScript funcionan
- [ ] Probar la detección automática de dispositivos móviles

### 6. URLs de Acceso
- **Desktop**: `https://tudominio.com/`
- **Móvil**: `https://tudominio.com/mobile/`
- **Páginas específicas**:
  - Nosotros: `https://tudominio.com/nosotros.html`
  - Servicios: `https://tudominio.com/servicios.html`
  - Contacto: `https://tudominio.com/ubicacion.html`

## 📱 Características del Sitio

### Versión Desktop
- Diseño responsivo moderno
- Navegación intuitiva
- Secciones: Inicio, Nosotros, Servicios, Contacto
- Carrusel de clientes
- Footer con información de contacto

### Versión Móvil
- Diseño optimizado para móviles
- Pantalla de carga (splash screen)
- Navegación táctil
- Galería circular de servicios
- Testimonios deslizables
- Botón para cambiar a versión desktop

## 🔧 Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript vanilla
- Font Awesome (íconos)
- Google Fonts (tipografías)
- Diseño responsivo

## 📞 Información de Contacto
- **Notaría Pública #80**
- **Titular**: Maestra María Enriqueta Ortiz Guerrero
- **Ubicación**: C. Pablo Villaseñor 125, Ladrón de Guevara, 44600 Guadalajara, Jal.
- **Teléfonos**: 33 1983 3354, 33 1983 3355, 33 3630 6433
- **Email**: notaria80gdl@hotmail.com
- **Horarios**: Lunes a Viernes 9:00 AM – 5:00 PM

---
*Desarrollado por MVGN Labs*
