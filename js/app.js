// src/js/app.js
import { generateGhostText } from './engine.js';
import { storage } from './storage.js'; 

// Elements
const el = {
    output: document.getElementById('output'),
    pCount: document.getElementById('pCount'),
    pCountVal: document.getElementById('pCountValue'),
    wCount: document.getElementById('wCount'),
    wCountVal: document.getElementById('wCountValue'),
    textStyle: document.getElementById('textStyle'),
    copyBtn: document.getElementById('copyBtn'),
    themeToggle: document.getElementById('themeToggle'),
    formatBtns: document.querySelectorAll('.format-btn'),
    themeToggle: document.getElementById('themeToggle'),
};

let currentFormat = 'text';

// 1. Aplicar tema guardado al cargar la página (Inmediato)
const initTheme = () => {
  storage.applyTheme();
};

// 2. Manejo del click en el Toggle
el.themeToggle.addEventListener('click', () => {
    // Leemos el estado actual del DOM
    const isDark = document.documentElement.classList.contains('dark');
    
    // Si tiene la clase 'dark', el siguiente estado debe ser 'light'
    const nextTheme = isDark ? 'light' : 'dark';
    
    // El método setTheme de tu storage ya hace el toggle y guarda en localStorage
    storage.setTheme(nextTheme);
    
    console.log("Tema actualizado a:", nextTheme);
});

// Actualizar la visualización de los valores de los sliders
const updateSliderLabels = () => {
    el.pCountVal.textContent = el.pCount.value;
    el.wCountVal.textContent = el.wCount.value;
};

// Función principal para actualizar el texto
const refreshText = () => {
    updateSliderLabels();

    const text = generateGhostText({
        paragraphCount: parseInt(el.pCount.value),
        wordCountPerSentence: parseInt(el.wCount.value),
        style: el.textStyle.value,
        format: currentFormat
    });

    // Añadir una pequeña animación de "fade-in" al cambiar el texto
    el.output.classList.add('opacity-0');
    setTimeout(() => {
        el.output.textContent = text;
        el.output.classList.remove('opacity-0');
        el.output.classList.add('transition-opacity', 'duration-300', 'opacity-100');
    }, 150);
};

// Eventos de los sliders (cambio en tiempo real para mejor UX)
el.pCount.addEventListener('input', refreshText);
el.wCount.addEventListener('input', refreshText);
el.textStyle.addEventListener('change', refreshText);

// Eventos de los botones de formato (Pestañas)
el.formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Estética de pestañas activas
        el.formatBtns.forEach(b => {
            b.classList.remove('border-db-pink', 'text-db-pink', 'font-semibold');
            b.classList.add('border-transparent', 'text-slate-500');
        });
        btn.classList.add('border-db-pink', 'text-db-pink', 'font-semibold');
        btn.classList.remove('border-transparent', 'text-slate-500');

        currentFormat = btn.dataset.format;
        refreshText();
    });
});

// Evento Copiar
el.copyBtn.addEventListener('click', () => {
    const textToCopy = el.output.textContent;
    navigator.clipboard.writeText(textToCopy);

    // Feedback visual profesional
    const span = el.copyBtn.querySelector('span');
    const originalText = span.textContent;
    span.textContent = '¡Copiado!';
    el.copyBtn.classList.add('bg-green-100', 'dark:bg-green-900', 'text-green-700', 'dark:text-green-300');
    
    setTimeout(() => {
        span.textContent = originalText;
        el.copyBtn.classList.remove('bg-green-100', 'dark:bg-green-900', 'text-green-700', 'dark:text-green-300');
    }, 2000);
});



// Inicialización
initTheme();
refreshText();