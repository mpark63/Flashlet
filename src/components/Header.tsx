import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentDeck,
  selectDecks,
  updateCurrentDeck,
  updateDecks,
} from '../slices/appSlice'
import { getAPI } from '../utils/assets'

const Header = () => {
  const deck = useSelector(selectCurrentDeck)
  const decks = useSelector(selectDecks)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (deck) {
      axios
        .patch(getAPI(window) + `/decks/${deck._id}`, { name, description })
        .then((res) => {
          const newDeck = res.data.data
          dispatch(updateCurrentDeck(newDeck))
          let newDecks = decks.filter((d) => d._id != deck._id)
          newDecks = [...newDecks, newDeck]
          dispatch(updateDecks(newDecks))
        })
    }
  }, [name, description])

  return (
    <div className="container flex flex-row items-center px-4 py-4 ">
      <Link
        className="align-top max-w-xs flex flex-col gap-4 rounded-xl p-4 text-white text-center hover:bg-white/20 cursor-pointer"
        href={`/dashboard`}
      >
        <h3 className="text-3xl font-extrabold">Flashlet</h3>
      </Link>
      {deck ? (
        <>
          <div className="align-top max-w-xs flex flex-col gap-4 rounded-xl p-4 text-white text-center">
            <h3 className="text-xl font-extrabold"> / </h3>
          </div>
          <textarea
            className="align-top max-w-xs flex flex-col gap-4 rounded-xl p-4 text-white text-xl text-center bg-[#2e026d] hover:bg-white/20"
            defaultValue={deck.name}
            onBlur={(e) => setName(e.target.value)}
            rows={1}
          />
          <div className="align-top max-w-xs flex flex-col gap-4 rounded-xl p-4 text-white text-center">
            <h3 className="text-xl font-extrabold"> / </h3>
          </div>
          <textarea
            className="align-top max-w-2xl flex flex-col gap-4 rounded-xl p-4 text-white text-center bg-[#2e026d] hover:bg-white/20"
            defaultValue={deck.description}
            onBlur={(e) => setDescription(e.target.value)}
            rows={1}
            cols={100}
          />
        </>
      ) : null}
    </div>
  )
}

export default Header
