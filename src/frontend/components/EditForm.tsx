import { FC } from 'react'

const EditForm: FC<{
  question: string
  answer: string
  updateQuestion: Function
  updateAnswer: Function
}> = ({ question, answer, updateQuestion, updateAnswer }) => {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-4">
      <textarea
        className="flex w-full text-3xl rounded-xl bg-white/10 p-4 text-white text-center hover:bg-white/20"
        defaultValue={question}
        onChange={updateQuestion}
        rows={2}
        cols={40}
      />
      <textarea
        className="flex w-full text-3xl rounded-xl bg-white/10 p-4 text-white text-center hover:bg-white/20"
        defaultValue={answer}
        onChange={updateAnswer}
        rows={4}
        cols={40}
      />
    </div>
  )
}

export default EditForm
