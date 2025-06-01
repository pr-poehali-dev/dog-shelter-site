import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Heart" className="text-blue-400" size={24} />
              <span className="text-xl font-bold">Лапки Добра</span>
            </div>
            <p className="text-gray-400 text-sm">
              Приют для бездомных собак, где каждый питомец получает любовь и
              заботу.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-3">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white">
                  Наши питомцы
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  О приюте
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-3">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                ул. Добрых Сердец, 15
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                info@lapkidobra.ru
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Лапки Добра. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
