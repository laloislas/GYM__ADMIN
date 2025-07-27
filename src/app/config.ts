export interface AppSettings {
  dir: 'ltr' | 'rtl';
  theme: string;
  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
  boxed: boolean;
  horizontal: boolean;
  activeTheme: string;
  language: string;
  cardBorder: boolean;
  navPos: 'side' | 'top';
  showSettingsButton: boolean; // Nueva propiedad para controlar el icono de configuración
}

export const defaults: AppSettings = {
  dir: 'ltr',
  theme: 'dark',
  sidenavOpened: false,
  sidenavCollapsed: false,
  boxed: true,
  horizontal: false,
  cardBorder: false,
  activeTheme: 'cyan_theme',
  language: 'en-us',
  navPos: 'side',
  showSettingsButton: false, // Por defecto, el icono estará oculto
};
