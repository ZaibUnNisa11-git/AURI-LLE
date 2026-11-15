export const appConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  chatbot: {
    enabled: import.meta.env.VITE_CHATBOT_ENABLED === 'true',
    webhookUrl: import.meta.env.VITE_CHATBOT_WEBHOOK_URL || '',
    defaultName: 'AURIÈLLE Concierge'
  },
  app: {
    name: 'AURIÈLLE',
    environment: import.meta.env.MODE || 'development'
  }
};

export default appConfig;
