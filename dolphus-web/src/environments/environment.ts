// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const SERVER_IP = 'http://169.231.102.113:5000/';

export const environment = {
  production: false,

  LOGIN_URL: SERVER_IP + '',
  TRANSAC_URL: SERVER_IP + 'transaction',
  ITEMS_URL: SERVER_IP + 'items',
  ADD_URL: SERVER_IP + 'add',
  CONFIRM_URL: SERVER_IP + 'confirm',
  BUY_URL: SERVER_IP + 'buy',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
