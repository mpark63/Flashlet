import { type NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Deck, type Flashcard } from "../../utils/commonTypes";
import FlashcardJSX from "../../components/FlashcardJSX";
import Header from "../../components/Header";
import { selectCurrentDeck, selectCurrentUser, selectFlashcards, updateCurrentDeck, updateCurrentFlashcards } from "../../slices/appSlice";
import { getAPI } from "../../utils/assets";
import axios from "axios";

const DeckPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  
  // redux setup 
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const deck = useSelector(selectCurrentDeck);
  const flashcards = useSelector(selectFlashcards); 

  const [index, setIndex] = useState<number>(0); 
  const [total, setTotal] = useState<number>(flashcards.length); 
  
  useEffect(() => {
    // make new deck 
    if (!id) return; 
    axios.get(getAPI(window) + `/decks/${id}`).then((res) => {
      const newDeck: Deck = res.data.data.deck; 
      const newFlashcards: Flashcard[] = res.data.data.flashcards; 
      dispatch(updateCurrentDeck(newDeck));
      dispatch(updateCurrentFlashcards(newFlashcards));
      setTotal(newFlashcards.length);
    }); 
  }, [id])

  useEffect(() => {
    if (index !== 0) {
      setIndex(index - 1); 
      setTotal(flashcards.length);
    }
  }, [flashcards.length])

  const addFlashcard = async () => {
    const index = flashcards.length; 
    const body: any = {
      question: `Have a question?`, 
      answer: `Here's the answer!`, 
      deckId: deck._id, 
      userId: user._id
    }
    const res: any = await axios.post(getAPI(window) + `/flashcards`, body); 
    const flashcard: Flashcard = res.data.data; 
    const newFlashcards = [...flashcards, flashcard]; 
    dispatch(updateCurrentFlashcards(newFlashcards)); 
    setTotal(total+1); 
    setIndex(index); 
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1); 
    }
  }

  const next = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1); 
    }
  }

  return (
    <>
      <Head>
        <title>Deck</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header /> 
        <div className="items-center justify-center">
          <div className="container flex items-center justify-center gap-12 px-16 py-4 text-white">
            { index+1 } / { total }
          </div>

          <div className="container flex items-center justify-center gap-12 px-16 py-4 ">
            { flashcards.length > 0 ? (
              <FlashcardJSX flashcard={flashcards[index]} />
            ) : null}
          </div>

          <div className="container flex items-center justify-center gap-12 px-16 py-16">
            <div 
              className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
              onClick={prev}
            >
              <h1 className='text-white'> prev </h1>
            </div>
            <div 
              className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
              onClick={addFlashcard}
            >
              <h3 className="text-2xl font-bold">New flashcard +</h3>
            </div>
            <div 
              className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
              onClick={next}
            >
              <h1 className='text-white'> next </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DeckPage;
