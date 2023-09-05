import React from 'react'
import Question from './Question'
const Questions = ({questions}) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question)=>{
            const {id, title, info} = question;
            return(
                <Question key={id} {...question}></Question>
            )
        })}
    </section>
  )
}

export default Questions