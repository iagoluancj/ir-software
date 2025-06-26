
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, RotateCcw } from "lucide-react";



interface QuizQuestionProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: number) => void;
  selectedAnswer: number | null;
  onRestart: () => void;
}

const options = [
  { label: "Sempre", value: 5, color: "bg-green-500" },
  { label: "Frequentemente", value: 4, color: "bg-blue-500" },
  { label: "De vez em quando", value: 3, color: "bg-yellow-500" },
  { label: "Raramente", value: 2, color: "bg-orange-500" },
  { label: "Nunca", value: 1, color: "bg-red-500" },
];

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  onRestart
}: QuizQuestionProps) => {
  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="bg-white max-w-3xl w-full shadow-xl animate-fade-in flex flex-col">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">
              Pergunta {questionNumber} de {totalQuestions}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(progress)}% concluído
            </span>
          </div>
          <Progress value={progress} className="mb-6" />
          <CardTitle className=" text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            {question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {options.map((option) => (
            <Button
              key={option.value}
              variant={selectedAnswer === option.value ? "default" : "outline"}
              className={`cursor-pointer bg-white w-full p-6 text-left justify-start text-base font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${selectedAnswer === option.value
                ? "bg-gray-800 text-white shadow-lg"
                : "hover:bg-gray-50"
                }`}
              onClick={() => onAnswer(option.value)}
            >
              <div className="flex items-center space-x-3 w-full">
                <div className={`w-4 h-4 rounded-full ${option.color} opacity-70`}></div>
                <span className={`flex-1 ${selectedAnswer === option.value ? "text-white" : "text-black"
                  }`}>{option.label}</span>
                {selectedAnswer === option.value && (
                  <CheckCircle className="w-5 h-5 text-white" />
                )}
              </div>
            </Button>
          ))}
        </CardContent>
        <Button
          onClick={onRestart}
          variant="outline"
          className="bg-gray-800 cursor-pointer flex-1 m-2 py-3 font-medium hover:bg-gray-50 hover:text-gray-800
          "
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Refazer Quiz
        </Button>
      </Card>
    </div>
  );
};

export default QuizQuestion;
