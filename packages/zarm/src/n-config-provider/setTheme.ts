import type { Theme } from './interface';

export const themes = {
  '--theme-primary-lighter': '#303030',
  '--color-text': 'rgba(255, 255, 255, 0.85)',
  '--color-text-inverse': 'rgba(255, 255, 255, 0.8)',
  '--color-text-placeholder': 'rgba(255, 255, 255, 0.3)',
  '--color-text-disabled': '#666',
  '--border-color': '#3a3b3d',
  '--opacity-mask': '0.7',
  '--activity-indicator-path-color': 'var(--border-color)',
  '--action-sheet-background': '#1b1c1e',
  '--action-sheet-active-background': '#363738',
  '--alert-button-background': '#2b2c2d',
  '--alert-button-active-background': '#363738',
  '--button-default-background': '#393939',
  '--button-default-border': 'transparent',
  '--button-default-color': 'rgba(255, 255, 255, 0.85)',
  '--button-default-active-background': 'rgba(255, 255, 255, 0.2)',
  '--button-default-active-border': 'transparent',
  '--button-default-active-color': '#fff',
  '--calendar-background': 'transparent',
  '--calendar-week-bar-background': '#303030',
  '--za-list-item-background': '#1C1C1E',
  '--za-list-item-active-background': '#363738',
  '--za-list-item-arrow-color': '#666',
  '--za-list-item-separator-color': 'rgba(84, 84, 88, 0.65)',
  '--za-list-item-info-text-color': 'rgba(235, 235, 245, 0.6)',
  '--za-list-item-after-text-color': 'rgba(235, 235, 245, 0.6)',
  '--za-checkbox-background': 'transparent',
  '--za-checkbox-border-color': 'rgb(72, 72, 74)',
  '--za-checkbox-disabled-background': '#333',
  '--za-checkbox-disabled-border-color': 'rgba(72, 72, 74, 0.7)',
  '--za-checkbox-disabled-text-color': 'rgba(255, 255, 255, 0.3)',
  '--za-checkbox-disabled-marker-color': 'rgba(255, 255, 255, 0.2)',
  '--za-radio-background': 'transparent',
  '--za-radio-border-color': 'rgb(72, 72, 74)',
  '--za-radio-disabled-background': '#333',
  '--za-radio-disabled-border-color': 'rgba(72, 72, 74, 0.7)',
  '--za-radio-disabled-text-color': 'rgba(255, 255, 255, 0.3)',
  '--za-radio-disabled-marker-color': 'rgba(255, 255, 255, 0.2)',
  '--collapse-arrow-color': '#666',
  '--collapse-arrow-disabled-color': '#333',
  '--confirm-button-background': '#2b2c2d',
  '--confirm-button-active-background': '#363738',
  '--keyboard-background': '#000',
  '--keyboard-item-background': 'rgba(255, 255, 255, 0.1)',
  '--loading-background': '#2b2c2d',
  '--modal-background': '#2b2c2d',
  '--modal-close-color': 'rgba(255, 255, 255, 0.3)',
  '--modal-close-active-color': 'rgba(255, 255, 255, 0.65)',
  '--nav-bar-color': '#1b1c1e',
  '--panel-body-background': '#1b1c1e',
  '--picker-background': '#000',
  '--picker-header-background': '#1b1c1e',
  '--picker-mask-background-start': 'rgba(0, 0, 0, 0.4)',
  '--picker-mask-background-end': 'rgba(0, 0, 0, 0.8)',
  '--progress-background': 'var(--border-color)',
  '--search-bar-background': '#1b1c1e',
  '--search-bar-inner-background': '#000',
  '--slider-line-dot-color': 'var(--border-color)',
  '--za-switch-background': 'rgba(120, 120, 128, 0.32)',
  '--stack-picker-background': '#000',
  '--stack-picker-shadow': 'none',
  '--stepper-input-background': '#000',
  '--tabbar-background': '#1b1c1e',
  '--toast-background': '#2b2c2d',
  '--tooltip-background': '#5b5c60',
} as const;

const setTheme = (value: Theme = 'light') => {
  document.body.setAttribute('data-theme', value);
  Object.keys(themes).forEach((key) => {
    value === 'dark'
      ? document.documentElement.style.setProperty(key, themes[key])
      : document.documentElement.style.removeProperty(key);
  });
};

export default setTheme;
