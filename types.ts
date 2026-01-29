export enum AppRoutes {
  HOME = '/',
  ABOUT = '/chi-siamo',
  BDL = '/ball-dont-lie',
  OPEN_RIVIERA = '/open-riviera',
  PADEL_TOUR = '/island-padel-tour',
  WIP = '/work-in-progress'
}

export const COLORS = {
  primary: '#FF6B35', // Orange
  accent: '#E53E3E', // Red
  secondary: '#4A90E2', // Sea Blue
  background: '#F7FAFC', // Light BG
  dark: '#1A202C', // Text Dark
  white: '#FFFFFF'
};

export interface NavItem {
  label: string;
  path: AppRoutes;
}