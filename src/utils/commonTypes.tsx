export type Deck = {
  _id: string
  name: string
  description: string
  flashcardIds: Flashcard[]
}

export type Flashcard = {
  _id: string
  deckId: string
  question: string
  answer: string
}

export type User = {
  _id: string
  deckIds: Deck[]
}
