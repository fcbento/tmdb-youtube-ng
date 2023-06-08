const API = {
  baseURL: 'https://api.themoviedb.org/3',
  photoURL: 'https://image.tmdb.org/t/p/w500'
}

export const environment = {
  production: false,
  firebase: {
    apiKey: "apiKey",
    authDomain: "authDomain",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId"
  },
  tmdb: {
    apiKey: 'apiKey',
    accessToken: 'accessToken'
  },
  API
};