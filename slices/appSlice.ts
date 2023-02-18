import { Deck, Flashcard, User } from '../utils/commonTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../appStore/store';

type AppSlice = {
  currentUser: User;
  currentDecks: Deck[]; 
  currentDeck: Deck; 
  currentFlashcards: Flashcard[]
};

const initialState: AppSlice = {
  currentUser: {
    _id: "guest", 
    deckIds: []
  },
  currentDecks: [], 
  currentDeck: null,
  currentFlashcards: [], 
};

// Not being used as we can update database when user adds course, and call the reusable update user function for any updates to display
// function addNewCourse(state: any, action: PayloadAction<NewCourse>) {}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateCurrentUser: (state: any, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    }, 
    updateDecks: (state: any, action: PayloadAction<Deck[]>) => {
      state.currentDecks = action.payload;
    }, 
    updateCurrentDeck: (state: any, action: PayloadAction<Deck>) => {
      state.currentDeck = action.payload; 
    }, 
    updateCurrentFlashcards: (state: any, action: PayloadAction<Flashcard[]>) => {
      state.currentFlashcards = action.payload; 
    }
  },
});

export const {
  updateCurrentUser,
  updateDecks, 
  updateCurrentDeck,
  updateCurrentFlashcards
} = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Please make a selector for each state :)
export const selectCurrentUser = (state: RootState) => state.app.currentUser;
export const selectCurrentDeck = (state: RootState) => state.app.currentDeck;
export const selectDecks = (state: RootState) => state.app.currentDecks;
export const selectFlashcards = (state: RootState) => state.app.currentFlashcards;

export default appSlice.reducer;
