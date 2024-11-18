import { useState, useEffect } from "react";

const QUESTIONS = [
    { question: "Столиця України?", options: ["Київ", "Львів", "Одеса", "Харків"], correct: "Київ" },
    { question: "5 + 7 = ?", options: ["10", "11", "12", "13"], correct: "12" },
    { question: "Найбільший океан?", options: ["Атлантичний", "Індійський", "Тихий", "Арктичний"], correct: "Тихий" },
    { question: "Яка планета найбільша?", options: ["Земля", "Марс", "Юпітер", "Сатурн"], correct: "Юпітер" },
    { question: "Яка країна виготовляє автомобілі Tesla?", options: ["Японія", "США", "Китай", "Німеччина"], correct: "США" },
    { question: "Скільки континентів на Землі?", options: ["5", "6", "7", "8"], correct: "7" },
    { question: "Який найвищий гірський пік?", options: ["Кіліманджаро", "Еверест", "Альпи", "Анди"], correct: "Еверест" },
    { question: "Яка тварина є символом WWF?", options: ["Тигр", "Ведмідь", "Панда", "Слон"], correct: "Панда" },
    { question: "Найшвидший сухопутний хижак?", options: ["Лев", "Гепард", "Вовк", "Гієна"], correct: "Гепард" },
    { question: "Скільки годин у добі?", options: ["12", "24", "36", "48"], correct: "24" },
    { question: "Який хімічний символ води?", options: ["HO", "H2O", "O2H", "HHO"], correct: "H2O" },
    { question: "Яке число йде після 9?", options: ["8", "10", "11", "12"], correct: "10" },
    { question: "Яке дерево дає жолуді?", options: ["Береза", "Ялина", "Дуб", "Сосна"], correct: "Дуб" },
    { question: "Скільки кольорів у веселці?", options: ["5", "6", "7", "8"], correct: "7" },
    { question: "Яка столиця Франції?", options: ["Берлін", "Мадрид", "Париж", "Рим"], correct: "Париж" },
    { question: "Який найменший птах?", options: ["Колібрі", "Голуб", "Горобець", "Лелека"], correct: "Колібрі" },
    { question: "Яка країна вигадала піцу?", options: ["Франція", "Італія", "Іспанія", "Німеччина"], correct: "Італія" },
    { question: "Скільки океанів у світі?", options: ["3", "4", "5", "6"], correct: "5" },
    { question: "Яка тварина може змінювати колір?", options: ["Крокодил", "Камелеон", "Ігуана", "Черепаха"], correct: "Камелеон" },
    { question: "Яке найдовше слово?", options: ["Електроенцефалографія", "Інфраструктура", "Математика", "Космонавтика"], correct: "Електроенцефалографія" },
];
  

const getRandomQuestions = (questions, count) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const useQuestions = (count = 5) => {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
  
    useEffect(() => {
      setRandomQuestions(getRandomQuestions(QUESTIONS, count));
    }, [count]);
  
    const handleAnswer = (index, answer) => {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [index]: answer }));
    };
  
    const calculateScore = () => {
      return randomQuestions.reduce((score, question, index) => {
        return score + (answers[index] === question.correct ? 1 : 0);
      }, 0);
    };
  
    return { randomQuestions, answers, handleAnswer, calculateScore };
}; 