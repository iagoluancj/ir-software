
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart } from "lucide-react";

import "@/styles/App.css";
import "@/styles/index.css";

import copasapng from '../../src/app/assets/logocopasa.png';
import ericksonpng from '../../src/app/assets/logoerickson.png';

import Image from "next/image";

interface QuizWelcomeProps {
  onStart: () => void;
}

const QuizWelcome = ({ onStart }: QuizWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl animate-fade-in bg-white">
        <div className="flex justify-between gap-2 mt-5 ml-5 mr-5">
          <div className={`p-0  bg-gradient-to-r `}>
            <Image src={copasapng} alt="" className=" w-25" />
          </div>
          <div className={`p-0 bg-gradient-to-r `}>
            <Image src={ericksonpng} alt="" className="w-35" />
          </div>
        </div>
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="w-16 h-16 text-blue-600" />
              <Heart className="w-8 h-8 text-pink-500 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
            Quiz de Inteligência Emocional
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 leading-relaxed">
            Descubra seu nível de inteligência emocional através de 20 perguntas cuidadosamente elaboradas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-amber-800">
                  Importante: A precisão do resultado depende da sua sinceridade
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Responda com base em como você realmente é – não em como gostaria de ser.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>20 perguntas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>5-10 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Resultado imediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Análise detalhada</span>
            </div>
          </div>

          <Button
            onClick={onStart}
            className="cursor-pointer w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Iniciar Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizWelcome;
