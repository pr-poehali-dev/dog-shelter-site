import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const dogs = [
  {
    id: 1,
    name: "Рекс",
    age: "2 года",
    breed: "Немецкая овчарка",
    personality: ["Активный", "Умный", "Преданный"],
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
    description:
      "Рекс — энергичный и преданный пес, который станет отличным компаньоном для активной семьи.",
  },
  {
    id: 2,
    name: "Луна",
    age: "1.5 года",
    breed: "Лабрадор",
    personality: ["Дружелюбная", "Игривая", "Ласковая"],
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    description:
      "Луна обожает детей и других животных. Идеальный выбор для большой семьи.",
  },
  {
    id: 3,
    name: "Барон",
    age: "4 года",
    breed: "Хаски",
    personality: ["Спокойный", "Мудрый", "Защитник"],
    image:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop",
    description:
      "Барон — опытный и спокойный пес, который станет надежным охранником дома.",
  },
  {
    id: 4,
    name: "Белла",
    age: "6 месяцев",
    breed: "Мопс",
    personality: ["Веселая", "Любопытная", "Маленькая"],
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=300&fit=crop",
    description:
      "Белла — маленький комочек счастья, который подарит радость любой семье.",
  },
  {
    id: 5,
    name: "Макс",
    age: "3 года",
    breed: "Ретривер",
    personality: ["Добрый", "Терпеливый", "Семейный"],
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    description:
      "Макс идеально подходит для семей с детьми. Очень терпеливый и добрый.",
  },
  {
    id: 6,
    name: "Зара",
    age: "2.5 года",
    breed: "Бордер-колли",
    personality: ["Умная", "Активная", "Обучаемая"],
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
    description:
      "Зара — невероятно умная собака, которая быстро учится и любит интеллектуальные игры.",
  },
];

const DogGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши <span className="text-purple-600">питомцы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с замечательными собаками, которые ищут свой дом.
            Каждый из них имеет уникальный характер и готов стать вашим лучшим
            другом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <Card key={dog.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white">
                    {dog.age}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {dog.name}
                  <Icon name="Heart" className="text-red-500" size={18} />
                </CardTitle>
                <p className="text-sm text-gray-600">{dog.breed}</p>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{dog.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.personality.map((trait) => (
                    <Badge key={trait} variant="outline" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Познакомиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogGallery;
