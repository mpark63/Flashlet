import axios from 'axios';
import { useEffect, useState, type FC } from 'react'
import { selectFlashcards, updateCurrentFlashcards } from '../slices/appSlice';
import { getAPI } from '../utils/assets';
import { type Flashcard } from '../utils/commonTypes'
import EditForm from './EditForm';
import { useDispatch, useSelector } from 'react-redux';

const FlashcardJSX: FC<{
  flashcard: Flashcard, 
}> = ({ flashcard }) => {
  const [text, setText] = useState<string>(flashcard.question); 
  const [question, setQuestion] = useState<string>(flashcard.question); 
  const [answer, setAnswer] = useState<string>(flashcard.answer); 
  const [editMode, setEditMode] = useState<boolean>(false); 
  const flashcards = useSelector(selectFlashcards); 
  const dispatch = useDispatch();

  useEffect(() => {
    setText(flashcard.question);
  }, [flashcard]); 
  
  const flip = () => {
    if (text === question) {
      setText(answer); 
    } else {
      setText(question); 
    }
  }

  const toggle = async (event) => {
    if (editMode) { 
      setText(question);
      await axios.patch(getAPI(window) + `/flashcards/${flashcard._id}`, {
        question, 
        answer 
      }); 
    }
    setEditMode(!editMode);
  }

  const updateQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value); 
  }

  const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }

  const handleDelete = async (event) => {
    await axios.delete(getAPI(window) + `/flashcards/${flashcard._id}`); 
    const newFlashcards = flashcards.filter((f) => f._id != flashcard._id);
    dispatch(updateCurrentFlashcards(newFlashcards)); 
  }

  return (
    <>
      <div 
        className="flex flex-col w-full h-80 rounded-xl text-center justify-center bg-white/10 p-4 text-white hover:bg-white/20 cursor-help"
        onClick={flip}
      >
        { !editMode ? 
          <h1 className="text-5xl p-4">{text}</h1> : 
          <EditForm 
            question={flashcard.question} 
            answer={flashcard.answer} 
            updateQuestion={updateQuestion} 
            updateAnswer={updateAnswer} 
          />
        }   
      </div>
      <div className='flex flex-col gap-5'>
        <div 
          className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
          onClick={toggle}
        >
          <h1 className='text-white text-center'> { !editMode ? "edit" : "save" } </h1>
        </div>
        <div 
          className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer"
          onClick={handleDelete}
        >
          <h1 className='text-white'>delete</h1>
        </div>
      </div>
    </>
  )
}

export default FlashcardJSX
