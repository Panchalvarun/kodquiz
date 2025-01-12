import React, { useState } from 'react'
import './Quiz.css'
import {data} from '../../data'



// import { data } from '../../data'



export default function Quiz() {
const [index, setIndex] = useState(0);
const [question, setQuestion] = useState(data[index]);
const [isLastPage, setIsLastPage] = useState(false);
const [score, setScore]=useState(0);

const [lock, setLock]=useState(false);


function nextQuestion()
{
  setLock(false)
  if(index < data.length-1)
    {
      setIndex(index + 1)
      setQuestion(data[index+1])
    }else{
      setIsLastPage(true)
    }
  }

  function checkAnswer(e,ans)
  {
    if(lock === false)
      {

  if(ans === question.ans)
    {
      setScore(score+1);
      e.target.classList.add('correct');
    }else{
      e.target.classList.add('incorrect');
    }
    setLock(true);
   }
  }

    if(isLastPage === true)
      {
        return(
          <h2>Quiz score={score}</h2>
        )
      }

    

  return (
    <div className='quiz'>
       
         <h1>Kod Quiz</h1>
         
         <h3>{question.question}</h3>
         <ul>
            <li onClick={(e)=>{checkAnswer('1')}}>{question.option1}</li>
            <li onClick={(e)=>{checkAnswer('2')}}>{question.option2}</li>
            <li onClick={(e)=>{checkAnswer('3')}}>{question.option3}</li>
            <li onClick={(e)=>{checkAnswer('4')}}>{question.option4}</li>
         </ul>
         <button id='bt' onClick={nextQuestion}>Next</button>
         
         <div id='qs'>Question: {index + 1} of {data.length}</div>
        
         
    </div>
  )
}
