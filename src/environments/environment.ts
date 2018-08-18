// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
  firebase: {
    apiKey: "AIzaSyDp1lVgJiD3wuQY7aneTJbbAgi-kspXBhI",
    authDomain: "remainder-94ad1.firebaseapp.com",
    databaseURL: "https://remainder-94ad1.firebaseio.com",
    projectId: "remainder-94ad1",
    storageBucket: "remainder-94ad1.appspot.com",
    messagingSenderId: "865495224124"
  }
};
