import Link from 'next/link';
import { type FC } from 'react';
import { Flashcard, type Deck } from '../utils/commonTypes'
import { useDispatch, useSelector } from 'react-redux';
import { getAPI } from '../utils/assets';
import axios from 'axios';
import { selectCurrentUser, updateCurrentDeck, updateCurrentFlashcards } from '../slices/appSlice';
import { useRouter } from "next/router"; 

const DeckJSX: FC<{
  deck: Deck | undefined
}> = ({ deck }) => {
  const dispatch = useDispatch(); 
  const router = useRouter();
  const user = useSelector(selectCurrentUser);

  const handleExisting = async () => {
    // make new deck 
    const res = await axios.get(getAPI(window) + `/decks/${deck._id}`); 
    const deckObj: Deck = res.data.data.deck; 
    const flashcards: Flashcard[] = res.data.data.flashcards;
    dispatch(updateCurrentDeck(deckObj));
    dispatch(updateCurrentFlashcards(flashcards));
    router.push(`/deck/${deckObj._id}`)
  }

  const handleSample = async () => {
    // make new deck 
    const res = await axios.post(getAPI(window) + `/decks`, {
      name: "Sample Deck", 
      description: "A planetary starter...", 
      userId: user._id
    })
    const deckObj: Deck = res.data.data.deck; 
    const flashcards: Flashcard[] = res.data.data.flashcards; 
    dispatch(updateCurrentDeck(deckObj));
    dispatch(updateCurrentFlashcards(flashcards));
    router.push(`/deck/${deckObj._id}`)
  }

  return (
    <>
      <div
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
        onClick={deck ? handleExisting : handleSample}
      >
        { deck ? (
          <>
            <h3 className="text-2xl font-bold">{deck.name}</h3>
            <h1 className="text-s font">{deck.description}</h1>
          </>
        ) : (
          <h3 className="text-2xl font-bold">Sample deck ~</h3>
        ) }
      </div>
    </>
  )
}

export default DeckJSX
