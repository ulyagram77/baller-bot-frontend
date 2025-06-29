export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  FEATURES: '/features',
  NOT_FOUND: '*',
} as const;

export const menuLinks = [
  { text: 'Home', href: ROUTES.HOME },
  { text: 'Features', href: ROUTES.FEATURES },
  { text: 'About', href: ROUTES.ABOUT },
];
