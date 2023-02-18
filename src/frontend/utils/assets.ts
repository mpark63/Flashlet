import { Flashcard } from "./commonTypes";


export const getAPI = (window) =>
  window.location.href.includes('http://localhost:3000')
    ? 'http://localhost:4567' : 'https://flashlet-api.onrender.com'; 
