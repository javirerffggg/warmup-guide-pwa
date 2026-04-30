# 🔥 Guía de Calentamiento Dinámico — PWA

App web progresiva (PWA) con la rutina de calentamiento dinámico y activación sin equipo.

## Instalación en iPhone 13 Pro Max

1. Abre la app en **Safari** (obligatorio en iOS)
2. Toca el botón **Compartir** (⬆️ cuadrado con flecha)
3. Selecciona **"Añadir a la pantalla de inicio"**
4. Dale un nombre y confirma

Una vez instalada, funciona **completamente sin conexión** gracias al Service Worker.

## Características

- ✅ Funciona offline (Service Worker + Cache API)
- ✅ Instalable como app nativa en iOS y Android
- ✅ Diseño adaptado al notch y Safe Areas del iPhone
- ✅ Status bar transparente con `black-translucent`
- ✅ Navegación por pestañas para cada grupo de días
- ✅ Diseño oscuro premium optimizado para móvil

## Estructura

```
├── index.html       # App principal
├── manifest.json    # Manifiesto PWA
├── sw.js            # Service Worker (cache-first)
└── icons/
    ├── icon.svg     # Icono SVG
    ├── icon-180.png # Apple Touch Icon (iOS)
    ├── icon-192.png # Android / Chrome
    └── icon-512.png # Splash / PWA
```

## Despliegue

Despliega en [Vercel](https://vercel.com) o GitHub Pages para obtener HTTPS (requerido para PWA).
