import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from '@azure/msal-browser';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;


export const b2cPolicies = {
  names: {
    signIn: 'B2C_1_signin',
    passwordReset: 'B2C_1_resetpassword',
  },
  authorities: {
    signIn: {
      authority:
        'https://energiemain.b2clogin.com/energiemain.onmicrosoft.com/B2C_1_signin',
    },
    passwordReset: {
      authority:
        'https://energiemain.b2clogin.com/energiemain.onmicrosoft.com/B2C_1_resetpassword',
    }
  },
  authorityDomain: 'https://energiemain.b2clogin.com',
};


export const msalConfig: Configuration = {
  auth: {
      clientId: '7f69728d-1ec1-4a22-83c9-c2dc40ab3d4f', 
      authority: b2cPolicies.authorities.signIn.authority,
      knownAuthorities: [b2cPolicies.authorityDomain], 
      redirectUri: '/',
  },
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage, 
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};


export const protectedResources = {
  todoListApi: {
    endpoint: 'https://localhost:5001',
    scopes: [
      'https://energiemain.onmicrosoft.com/energy',
    ],
  },
};


export const loginRequest = {
  scopes: ['email'],
};