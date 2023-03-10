import axios from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router"; 
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, updateCurrentUser, updateDecks } from "../slices/appSlice";
import { getAPI } from "../utils/assets";
import { Deck, User } from "../utils/commonTypes";

const Home: NextPage = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [input, setInput] = useState<string>("guest"); 
  const dispatch = useDispatch();
  const router = useRouter()

  const handleSubmit = async () => {
    // API get user event.target.value 
    const retrieved = await axios.get(getAPI(window) + `/users/${input}`); 
    const user: User = retrieved.data.data; 
    const decks: Deck[] = user.deckIds; 
    // updateDecks 
    dispatch(updateCurrentUser(user)); 
    dispatch(updateDecks(decks)); 
    router.push('/dashboard')
  }

  const handleGuest = () => {
    const guestUser: User = {
      _id: "guest", 
      deckIds: []
    }
    dispatch(updateCurrentUser(guestUser));
  }

  return (
    <>
      <Head>
        <title>Flashlet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Flashlet
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/dashboard"
              onClick={handleGuest}
            >
              <h3 className="text-2xl font-bold">Guest →</h3>
              <div className="text-lg">
                Start making flashcards, no sign up required.
              </div>
            </Link>
            <div onClick={() => setLogin(true)} className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer">
              { login ? 
                <>
                  <h3 className="text-2xl font-bold">Username:</h3>
                  <input className="text-black text-center" type="text" onChange={(e) => setInput(e.target.value)} /> 
                  <div
                    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                  >
                    <button onClick={handleSubmit}>login</button>  
                  </div>
                </>
                : 
                <>
                  <h3 className="text-2xl font-bold">Login →</h3>
                  <div className="text-lg">
                    Login to view your saved flashcard decks.
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
