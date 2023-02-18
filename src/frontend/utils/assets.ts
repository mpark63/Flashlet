import { Flashcard } from "./commonTypes";


export const getAPI = (window) =>
  window.location.href.includes('http://localhost:3000')
    ? 'http://localhost:4567' : 'http://localhost:4567'; 

export const sampleDeck: Flashcard[] = [
  {
    _id: 'mars', 
    deckId: 'planets', 
    question: '4th planet from the sun', 
    answer: 'mars'
  }, 
  {
    _id: 'neptune', 
    deckId: 'planets', 
    question: '8th planet from the sun', 
    answer: 'neptune'
  }, 
  {
    _id: 'venus', 
    deckId: 'planets', 
    question: '2nd planet from the sun', 
    answer: 'venus'
  }, 
  {
    _id: 'uranus', 
    deckId: 'planets', 
    question: '7th planet from the sun', 
    answer: 'uranus'
  }
]
