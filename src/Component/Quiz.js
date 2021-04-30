import React ,{useState}from 'react';
import { getToken, getUser, removeUserSession } from '../Action/Action';
import '../css/Quiz.css';
import {  useHistory } from 'react-router-dom';
function Quiz(props){
	const token = getToken();
    const user=getUser();
	let history=useHistory();
if(token==null){
history.push("./")

}





const handleLogout = () => {
       
	//   removeUserSession();
	removeUserSession(); 
	 
	history.push('/')

	  
	}


	function Restart(){
		window.location.reload();

	}





	 
	
	const questions = [
		{id:1,
			questionText: 'MS-Word is an example of',
			answerOptions: [
				{ answerText: ' An operating system', isCorrect: false },
				{ answerText: 'A processing device', isCorrect: false },
				{ answerText: 'Application software', isCorrect: true },
				{ answerText: 'An input device', isCorrect: false },
			],
		},
		{id:2,
			questionText: 'A computer cannot "boot" if it does not have the',
			answerOptions: [
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Loader', isCorrect: false },
				{ answerText: ' Operating system', isCorrect: true },
				{ answerText: 'Assembler', isCorrect: false },
			],
		},
		{id:3,
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{id:4,
			questionText: 'The working principle of a washing machine is',
			answerOptions: [
				{ answerText: 'reverse osmosis', isCorrect: false },
				{ answerText: 'diffusion', isCorrect: false },
				{ answerText: 'centrifugation', isCorrect: true },
				{ answerText: 'dialysis', isCorrect: false },
			],
		},

		{id:5,
			questionText: 'For which of the following disciplines is Nobel Prize awarded?',
			answerOptions: [
				{ answerText: 'Physics and Chemistry', isCorrect: false },
				{ answerText: 'Physiology or Medicine', isCorrect: false },
				{ answerText: 'Literature, Peace and Economics', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},

		{id:6,
			questionText: 'Galileo was an Italian astronomer who',
			answerOptions: [
				{ answerText: 'developed the telescope', isCorrect: false },
				{ answerText: 'discovered four satellites of Jupiter', isCorrect: false },
				{ answerText: 'discovered that the movement of pendulum produces a regular time measurement', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},


		{id:7,
			questionText: 'First China War was fought between',
			answerOptions: [
				{ answerText: 'China and Britain', isCorrect: true },
				{ answerText: 'China and France', isCorrect: false },
				{ answerText: 'China and Egypt', isCorrect: false },
				{ answerText: 'China and Greek', isCorrect: false },
			],
		},

		{id:8,
			questionText: 'Fire temple is the place of worship of which of the following religion?',
			answerOptions: [
				{ answerText: 'Taoism', isCorrect: false },
				{ answerText: 'Judaism', isCorrect: false },
				{ answerText: 'Zoroastrianism (Parsi Religion)', isCorrect: true },
				{ answerText: 'Shintoism', isCorrect: false },
			],
		},


		{id:9,
			questionText: '	Headquarters of UNO are situated at',
			answerOptions: [
				{ answerText: 'New York, USA', isCorrect: true },
				{ answerText: 'Hague (Netherlands)', isCorrect: false },
				{ answerText: 'Geneva', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
			],
		},

		{id:10,
			questionText: '	Fathometer is used to measure',
			answerOptions: [
				{ answerText: 'Earthquakes', isCorrect: false },
				{ answerText: 'Rainfall', isCorrect: false },
				{ answerText: 'Ocean depth', isCorrect: true },
				{ answerText: 'Sound intensity', isCorrect: false },
			],
		},
	];


	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [key, setKey] = useState(0);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			alert('Congratulations, the answer is correct')
		}
		else{

			alert('Sorry, the answer is incorrect')
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
   
return (
<>

Welcome {user}

<button className='logout_button' onClick={handleLogout} value="Logout" >Logout</button>
{showScore ? (
				<div className=''>
				<p className="score-section"	>You scored {score} out of {questions.length}</p>
					<br/>
				
					<button className="restart_button" onClick={Restart}> Try Again</button>
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quiz_button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
<div>



</div>
</>

);


}

export default Quiz;
