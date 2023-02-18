import Link from 'next/link';
import { type FC } from 'react';
import { type Deck } from '../utils/commonTypes'
import { useDispatch, useSelector } from 'react-redux';
import { getAPI } from '../utils/assets';
import axios from 'axios';
import { updateCurrentDeck, updateCurrentFlashcards } from '../slices/appSlice';

const DeckJSX: FC<{
  deck: Deck | undefined
}> = ({ deck }) => {
  const dispatch = useDispatch(); 

  const handleExisting = async () => {
    // make new deck 
    const res = await axios.get(getAPI(window) + `/decks/${deck._id}`); 
    const deckObj: Deck = res.data.data; 
    dispatch(updateCurrentDeck(deckObj));
    dispatch(updateCurrentFlashcards(deckObj.flashcardIds));
  }

  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        onClick={handleExisting}
        href={ deck ? `/deck/${deck._id}` : "/deck/sample"}
      >
        { deck ? (
          <>
            <h3 className="text-2xl font-bold">{deck.name}</h3>
            <h1 className="text-s font">{deck.description}</h1>
          </>
        ) : (
          <h3 className="text-2xl font-bold">Sample deck ~</h3>
        ) }
      </Link>
    </>
  )
}

export default DeckJSX
