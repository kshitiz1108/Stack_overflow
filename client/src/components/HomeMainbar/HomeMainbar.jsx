import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './Questionslist'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {
    const location  = useLocation()
   const user = 12;
   const navigate = useNavigate();
    const questions = useSelector(state => state.questionsReducer)
    console.log({questions})

//     var questions = [{
//         id:1,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
//     {
//         id:2,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
//     {
//         id:3,
//         votes:3,
//         noofAnswers:2,
//         Title:"What is a function",
//         Body:"It meant to be ",
//         Tags:["java","node js","react js","mongo db"],
//         userPosted: "Kshitiz",
//         askedon: "july 3"
//     },
// ]
const checkAuth = () => {
    if(user === null){
        alert("Please login or signup first")
        navigate('/Auth')
    }
    else{
        navigate('/AskQuestion')
    }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
                questions.data === null ? <h1>Loading....</h1> :
                <>
                    <p>{questions.data.length} questions</p>
                    <QuestionList questions={questions.data}/>
                </>
            }
        
      </div>
    </div>
  )
}

export default HomeMainbar