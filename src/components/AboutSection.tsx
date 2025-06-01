import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О приюте <span className="text-orange-500">"Лапки Добра"</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наш приют основан в 2019 году с простой, но важной миссией — дать
              каждой бездомной собаке шанс на счастливую жизнь. За 5 лет работы
              мы помогли более чем 200 питомцам обрести любящие семьи.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Icon
                    name="Home"
                    className="text-purple-600 mx-auto mb-4"
                    size={32}
                  />
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    200+
                  </div>
                  <div className="text-gray-600">Собак нашли дом</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Icon
                    name="Users"
                    className="text-orange-500 mx-auto mb-4"
                    size={32}
                  />
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    15
                  </div>
                  <div className="text-gray-600">Волонтеров</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Полная ветеринарная помощь
                  </div>
                  <div className="text-gray-600">
                    Все собаки привиты, чипированы и стерилизованы
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Поддержка после усыновления
                  </div>
                  <div className="text-gray-600">
                    Консультации и помощь в адаптации питомца
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon
                  name="CheckCircle"
                  className="text-green-500 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Образовательные программы
                  </div>
                  <div className="text-gray-600">
                    Уроки ответственного обращения с животными
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop"
              alt="Приют для собак"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <Icon name="Award" className="mx-auto mb-2" size={32} />
                <div className="font-bold">Лучший приют</div>
                <div className="text-sm opacity-90">города 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
