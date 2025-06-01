import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Подари дом четвероногому другу
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              В нашем приюте живут более 50 питомцев, которые мечтают о теплом
              доме и заботливых хозяевах.
            </p>

            <div className="flex gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Heart" size={16} />
                Усыновить питомца
              </Button>
              <Button variant="outline">Виртуальная экскурсия</Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">питомцев ждут дом</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">счастливых семей</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-gray-600">лет работы</div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=400&fit=crop"
              alt="Счастливая собака"
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
