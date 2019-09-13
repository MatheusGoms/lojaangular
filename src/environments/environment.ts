// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyA045Z1EL8W5KgNeDuxTMVZnhuugQllNG0",
    authDomain: "loja-angularjs.firebaseapp.com",
    databaseURL: "https://loja-angularjs.firebaseio.com",
    projectId: "loja-angularjs",
    storageBucket: "",
    messagingSenderId: "168669948189",
    appId: "1:168669948189:web:482cbecfe8500d213699f4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
