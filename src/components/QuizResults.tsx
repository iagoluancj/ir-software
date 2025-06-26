

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Share2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import copasapng from '../../src/app/assets/copasa-removebg-preview.png';
import ericksonpng from '../../src/app/assets/logoerickson.png';


interface QuizResultsProps {
  totalScore: number;
  onRestart: () => void;
}

const getResultData = (score: number) => {
  if (score >= 80) {
    return {
      title: "Inteligência Emocional Extremamente Alta... ou Muito Baixa",
      description: "Paradoxo da alta/baixa autoconsciência",
      message: "Você obteve uma pontuação muito alta, o que pode indicar duas possibilidades: ou você possui uma inteligência emocional verdadeiramente excepcional, ou pode estar com dificuldades de autoconsciência, respondendo como gostaria de ser ao invés de como realmente é. Pessoas com altíssima inteligência emocional frequentemente se avaliam de forma mais crítica. Reflita sobre suas respostas com sinceridade.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    };
  } else if (score >= 60) {
    return {
      title: "Bom Nível de Inteligência Emocional",
      description: "Você está no caminho certo!",
      message: "Parabéns! Você demonstra um bom nível de inteligência emocional. Consegue identificar e gerenciar suas emoções na maioria das situações, além de ter boa capacidade de compreender os outros. Continue desenvolvendo essas habilidades através da prática consciente e da reflexão sobre suas interações diárias.",
      color: "from-green-500 to-blue-500",
      bgColor: "bg-green-50"
    };
  } else if (score >= 40) {
    return {
      title: "Inteligência Emocional em Desenvolvimento",
      description: "Há espaço para crescimento",
      message: "Sua inteligência emocional ainda tem um potencial significativo de desenvolvimento. Você já possui algumas habilidades emocionais, mas pode se beneficiar de maior autoconhecimento e prática nas áreas de autorregulação e empatia. Considere buscar livros, cursos ou coaching para aprimorar essas competências tão importantes.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    };
  } else {
    return {
      title: "Inteligência Emocional Precisa de Atenção",
      description: "É hora de investir no seu desenvolvimento emocional",
      message: "Seus resultados indicam que há muito espaço para crescimento na sua inteligência emocional. Isso não é uma crítica, mas uma oportunidade! Comece trabalhando o autoconhecimento, pratique a pausa antes de reagir e busque compreender melhor as emoções - suas e dos outros. Considere buscar ajuda profissional para acelerar esse desenvolvimento.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    };
  }
};

const QuizResults = ({ totalScore, onRestart }: QuizResultsProps) => {
  const result = getResultData(totalScore);

  const handleShare = () => {
    const text = `Acabei de fazer o Quiz de Inteligência Emocional e obtive ${totalScore} pontos! ${result.title}`;
    if (navigator.share) {
      navigator.share({
        title: 'Quiz de Inteligência Emocional',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      toast.success("Resultado copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">

      <Card className="bg-white max-w-4xl w-full shadow-xl animate-fade-in">
        <div className="flex justify-center gap-5 sm:justify-between items-center mt-5 ml-5 mr-5 flex-wrap">
          <div className="p-1  flex items-center ">
            <Image src={copasapng} alt="Logo Copasa" className="w-15" />
            <span className="text-blue-600 font-bold text-3xl">Copasa</span>
          </div>
          <div className={`p-1  flex h-full`}>
            <Image src={ericksonpng} alt="" className="w-35" />
          </div>
        </div>
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full bg-gradient-to-r ${result.color}`}>
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
            Seu Resultado
          </CardTitle>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-5xl font-bold text-blue-600">{totalScore}</span>
            <div className="text-left">
              <div className="text-lg text-gray-500">de 100 pontos</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className={`${result.bgColor} border-l-4 border-current p-6 rounded-r-lg`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {result.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-3">
              {result.description}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {result.message}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm ">
            <h4 className="font-semibold text-gray-800 mb-3">Pilares da Inteligência Emocional Avaliados:</h4>
            <div className="flex flex-col md:flex-row flex-wrap gap-1 justify-between text-gray-800 text-sm ">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Autoconsciência</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Autorregulação</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Automotivação</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>Empatia</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Habilidades Sociais</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onRestart}
              variant="outline"
              className="bg-gray-800 cursor-pointer flex-1 py-3 font-medium hover:bg-gray-50 hover:text-gray-800
          "            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Refazer Quiz
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="cursor-pointer flex-1 py-3 font-medium bg-gradient-to-r hover:outline-gray-800 hover:text-gray-800 from-blue-600 to-indigo-600 hover:from-white hover:to-white"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar Resultado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResults;
