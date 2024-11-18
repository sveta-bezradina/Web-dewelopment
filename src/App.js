import React, {useState} from 'react';
import './App.css';
import Authorisation from "./components/Authorisation";
import QuizForm from "./components/QuizForm";
import Result from "./components/Result";
import { useQuestions } from "./components/QuestionsHook"; 

const App = () => {
    const [user, setUser] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [submitted, setSubmitted] = useState(false);
  
    const { randomQuestions, answers, handleAnswer, calculateScore } = useQuestions(5);

    const handleLogin = () => {
        if (user.trim()) {
          setLoggedIn(true);
        }
      };
    
      const handleSubmit = () => {
        setSubmitted(true);
      };
  
      if (!loggedIn) {
        return <Authorisation user={user} setUser={setUser} onLogin={handleLogin} />;
      }
    
      if (submitted) {
        return <Result userName={user} questions={randomQuestions} answers={answers} score={calculateScore()} />;
      }
    
      return (
        <QuizForm
          questions={randomQuestions}
          answers={answers}
          onAnswerChange={handleAnswer}
          onSubmit={handleSubmit}
        />
      );
};

export default App;

