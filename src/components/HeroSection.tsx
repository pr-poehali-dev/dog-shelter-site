import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Подари дом <span className="text-purple-600">четвероногому</span>{" "}
              другу
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Каждая собака заслуживает любящую семью. В нашем приюте живут
              более 50 питомцев, которые мечтают о теплом доме и заботливых
              хозяевах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
              >
                <Icon name="Heart" size={20} />
                Усыновить питомца
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Play" size={20} />
                Виртуальная экскурсия
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">питомцев ждут дом</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  200+
                </div>
                <div className="text-gray-600">счастливых семей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-gray-600">лет работы</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=500&fit=crop"
              alt="Счастливая собака"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Icon name="Users" className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold">Бесплатное усыновление</div>
                  <div className="text-sm text-gray-600">
                    Полная ветпомощь включена
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
