import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь <span className="text-purple-600">с нами</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы подарить дом четвероногому другу? Приезжайте к нам или
            позвоните — мы поможем выбрать идеального питомца для вашей семьи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6">
            <CardHeader>
              <Icon
                name="MapPin"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <CardTitle>Наш адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                ул. Добрых Сердец, 15
                <br />
                Москва, 123456
                <br />
                Метро "Сокольники"
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <Icon
                name="Phone"
                className="text-orange-500 mx-auto mb-4"
                size={32}
              />
              <CardTitle>Телефоны</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                +7 (495) 123-45-67
                <br />
                +7 (925) 987-65-43
                <br />
                Ежедневно 9:00-18:00
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <Icon
                name="Mail"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                info@lapkidobra.ru
                <br />
                adoption@lapkidobra.ru
                <br />
                volunteer@lapkidobra.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Время посещений</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="font-semibold mb-2">Будние дни</div>
              <div className="opacity-90">10:00 - 17:00</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Выходные</div>
              <div className="opacity-90">9:00 - 18:00</div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            <Icon name="Calendar" size={20} />
            Записаться на встречу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
