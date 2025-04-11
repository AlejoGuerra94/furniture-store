export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  ENDPOINTS: {
    LOGIN: '/auth/login',
  }
};