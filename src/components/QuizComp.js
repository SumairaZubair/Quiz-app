import React, { useState } from 'react'

const QuizComp = () => {

    const Questions = [
        {
            question: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            question: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        }, {
            question: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        }, {
            question: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        }]
    // console.log(Questions)
    const [currQ, setCurrQ] = useState(0) // for questions
    const [score, setScore] = useState(0)    // for score
    const [showScore, setShowScore] = useState(false)
    const HandleResponse=(isCorrect)=>{
         if(isCorrect){
            setScore(score+1)
         }
         const nextQues = currQ+1;
         if(nextQues<Questions.length){
            setCurrQ(nextQues);
         }
         else{
            setShowScore(true)
         }
    }
    const resetQuiz=()=>{
        setCurrQ(0)
        setScore(0)
       setShowScore(false)
    }
    return (
        <div className='main'>
            {showScore ? (<div className='result'>you have{score}out of {Questions.length}
            <>
              <button className='play' type='submit' onClick={resetQuiz}>Play Again</button>
            </>
            
            </div>) : (<>
                <div>
                    <div>
                        <span>{currQ +1}/{Questions.length}</span>
                    </div>
                    <div className='question'>
                        {Questions[currQ].question}
                    </div>
                    <div>
                        {Questions[currQ].answerOptions.map((ans) => (
                            <button  className='answer' onClick={() => HandleResponse(ans.isCorrect)}>{ans.answerText}</button>
                        ))}
                    </div>
                </div>
            </>)}
        </div>

    )

}

export default QuizComp