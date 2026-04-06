// src/js/storage.js
export const storage = {
    setTheme(mode) {
        if (mode === 'system') {
            localStorage.removeItem('theme');
        } else {
            localStorage.theme = mode;
        }
        this.applyTheme();
    },

    applyTheme() {
        const isDark = localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.documentElement.classList.toggle('dark', isDark);
        return isDark;
    }
};