
"use client"

import "@/styles/App.css";
import "@/styles/index.css";

import { useState } from "react";
import QuizWelcome from "@/components/QuizWelcome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";

const questions = [
    "Você sabe identificar as emoções que sente?",
    "Você sabe se acalmar quando se sente inquieto ou chateado?",
    "Você define metas a longo prazo?",
    "Você procura entendimento mútuo nas questões?",
    "Você é um bom ouvinte?",
    "Você persiste na busca por seus objetivos, apesar dos obstáculos?",
    "Você consegue admitir facilmente que cometeu um erro?",
    "Você sabe suas qualidades e defeitos?",
    "Você promove conversas difíceis para resolver problemas?",
    "Você tenta enxergar as situações pela perspectiva dos outros?",
    "Você tem ânimo para atingir seus objetivos?",
    "Você consegue pensar claramente quando está sob pressão?",
    "Você utiliza as críticas para crescer?",
    "Você acha fácil ler as emoções dos outros?",
    "Você lida com pessoas e situações difíceis com delicadeza?",
    "Você se orienta pelos seus valores e objetivos?",
    "Você supera facilmente o sentimento de frustração?",
    "Você reconhece como seu comportamento afeta os outros?",
    "Você consegue ouvir sem julgar?",
    "Você presta atenção aos seus relacionamentos?"
];

// Mapping questions to emotional intelligence pillars (for internal use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const questionPillars = {
    // Autoconsciência
    1: "Autoconsciência", 8: "Autoconsciência", 13: "Autoconsciência", 18: "Autoconsciência",
    // Autorregulação  
    2: "Autorregulação", 7: "Autorregulação", 12: "Autorregulação", 17: "Autorregulação",
    // Automotivação
    3: "Automotivação", 6: "Automotivação", 11: "Automotivação", 16: "Automotivação",
    // Empatia
    4: "Empatia", 10: "Empatia", 14: "Empatia", 19: "Empatia",
    // Habilidades Sociais
    5: "Habilidades Sociais", 9: "Habilidades Sociais", 15: "Habilidades Sociais", 20: "Habilidades Sociais"
};

type QuizState = "welcome" | "quiz" | "results";

const Index = () => {
    const [quizState, setQuizState] = useState<QuizState>("welcome");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleStartQuiz = () => {
        setQuizState("quiz");
        setCurrentQuestion(0);
        setSelectedAnswer(null);
    };

    const handleAnswer = (score: number) => {
        setSelectedAnswer(score);

        // Small delay for better UX
        setTimeout(() => {
            const newAnswers = [...answers];
            newAnswers[currentQuestion] = score;
            setAnswers(newAnswers);

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setQuizState("results");
            }
        }, 300);
    };

    const handleRestart = () => {
        setQuizState("welcome");
        setCurrentQuestion(0);
        setAnswers(new Array(questions.length).fill(0));
        setSelectedAnswer(null);
    };

    const totalScore = answers.reduce((sum, score) => sum + score, 0);

    console.log("Current quiz state:", quizState);
    console.log("Current question:", currentQuestion + 1);
    console.log("Answers so far:", answers);
    console.log("Total score:", totalScore);

    if (quizState === "welcome") {
        return <QuizWelcome onStart={handleStartQuiz} />;
    }

    if (quizState === "quiz") {
        return (
            <QuizQuestion
                question={questions[currentQuestion]}
                questionNumber={currentQuestion + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                onRestart={handleRestart}
            />
        );
    }

    return <QuizResults totalScore={totalScore} onRestart={handleRestart} />;
};

export default Index;
