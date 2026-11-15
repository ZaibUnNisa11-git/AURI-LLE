import appConfig from '../config/appConfig';

export const sendCustomerMessage = async (message, context = {}) => {
  if (!appConfig.chatbot.enabled || !appConfig.chatbot.webhookUrl) {
    return {
      ok: false,
      status: 'disabled',
      message: 'The chatbot is not enabled yet. The n8n integration will be connected in a future stage.'
    };
  }

  const payload = {
    message,
    context,
    source: 'aurielle-frontend',
    timestamp: new Date().toISOString()
  };

  const response = await fetch(appConfig.chatbot.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Unable to send message to chatbot webhook');
  }

  return response.json();
};

export default sendCustomerMessage;
