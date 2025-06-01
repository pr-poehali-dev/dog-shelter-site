import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Готовы подарить дом четвероногому другу? Приезжайте к нам или
            позвоните.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <CardHeader>
              <Icon
                name="MapPin"
                className="text-blue-600 mx-auto mb-2"
                size={24}
              />
              <CardTitle className="text-lg">Наш адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
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
                className="text-blue-600 mx-auto mb-2"
                size={24}
              />
              <CardTitle className="text-lg">Телефоны</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
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
                className="text-blue-600 mx-auto mb-2"
                size={24}
              />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                info@lapkidobra.ru
                <br />
                adoption@lapkidobra.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-4">Время посещений</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="font-medium mb-1">Будние дни</div>
              <div>10:00 - 17:00</div>
            </div>
            <div>
              <div className="font-medium mb-1">Выходные</div>
              <div>9:00 - 18:00</div>
            </div>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Записаться на встречу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
