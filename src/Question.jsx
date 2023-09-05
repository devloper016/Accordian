import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react'
const Question = ({id,title,info}) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
        <header>
            <h5>{title}</h5>
            <button className="question-btn" type='button' onClick={()=>{setShowInfo(!showInfo)}}>{showInfo ?<AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}</button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question