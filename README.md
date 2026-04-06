# 📡 GHOST_WRITER // CONTENT_GEN_TERMINAL

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.5-db--pink.svg)](#)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com)

**GhostWriter** es una herramienta utilitaria de alto rendimiento diseñada para desarrolladores y diseñadores que buscan generar texto de relleno (*dummy text*) con una experiencia de usuario de nivel terminal. Supera al Lorem Ipsum tradicional ofreciendo diccionarios temáticos (Tech, Marketing, Legal) y múltiples formatos de exportación.

[Ver Demo en Vivo](#) ---

## ⚡ SYSTEM_FEATURES

- **Multi-Dictionary Engine**: Genera contenido basado en contextos reales (Protocolos Tech, Copys de Marketing o Legal).
- **Real-Time Reactivity**: Los parámetros de párrafos y longitud se sincronizan al instante sin recargar la página.
- **Format Switcher**: Exporta instantáneamente a `TEXT_PLAIN`, `HTML_SOURCE` o un `JSON_PAYLOAD` listo para APIs.
- **Persistent Visual Mode**: Sistema de modo oscuro/claro con persistencia en `localStorage` y detección de preferencia de OS.
- **Brutalist UI**: Interfaz inspirada en terminales de monitoreo de red, optimizada para la eficiencia.

## 🛠️ TECH_STACK

- **Core**: Vanilla JavaScript (ES6+ Modules)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Play CDN / Browser-first)
- **Typography**: JetBrains Mono
- **Architecture**: Modular Utility-First (Engine / Storage / UI)

## 📁 PROJECT_STRUCTURE

```text
/ghostwriter
├── index.html          # Punto de entrada y estructura semántica
├── src/
│   └── js/
│       ├── app.js      # Orquestador de UI y eventos
│       ├── engine.js   # Lógica core de generación de texto
│       └── storage.js  # Persistencia de preferencias del sistema
└── README.md
