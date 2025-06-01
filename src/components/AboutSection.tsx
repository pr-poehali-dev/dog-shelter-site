import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              О приюте "Лапки Добра"
            </h2>
            <p className="text-gray-600 mb-8">
              Наш приют основан в 2019 году. За 5 лет работы мы помогли более
              чем 200 питомцам обрести любящие семьи.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <Icon
                    name="Home"
                    className="text-blue-600 mx-auto mb-2"
                    size={24}
                  />
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    200+
                  </div>
                  <div className="text-gray-600 text-sm">Собак нашли дом</div>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <Icon
                    name="Users"
                    className="text-blue-600 mx-auto mb-2"
                    size={24}
                  />
                  <div className="text-xl font-bold text-gray-900 mb-1">15</div>
                  <div className="text-gray-600 text-sm">Волонтеров</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={16}
                />
                <div>
                  <div className="font-medium text-gray-900">
                    Полная ветеринарная помощь
                  </div>
                  <div className="text-gray-600 text-sm">
                    Все собаки привиты и чипированы
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={16}
                />
                <div>
                  <div className="font-medium text-gray-900">
                    Поддержка после усыновления
                  </div>
                  <div className="text-gray-600 text-sm">
                    Консультации и помощь
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={16}
                />
                <div>
                  <div className="font-medium text-gray-900">
                    Образовательные программы
                  </div>
                  <div className="text-gray-600 text-sm">
                    Уроки ответственного обращения
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=400&fit=crop"
              alt="Приют для собак"
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
