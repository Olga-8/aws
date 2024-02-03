import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-north-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-north-1.amazonaws.com/dev',
    import: 'https://.execute-api.eu-north-1.amazonaws.com/dev',
    bff: 'https://.execute-api.eu-north-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-north-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
