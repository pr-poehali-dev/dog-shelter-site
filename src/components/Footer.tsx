import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Heart" className="text-orange-500" size={28} />
              <span className="text-2xl font-bold">Лапки Добра</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Приют для бездомных собак, где каждый питомец получает любовь и
              заботу, пока не найдет свою семью.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Facebook" size={20} />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Instagram" size={20} />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Youtube" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Наши питомцы
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О приюте
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Как помочь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Волонтерство
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                ул. Добрых Сердец, 15
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@lapkidobra.ru
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Лапки Добра. Все права защищены. Создано с ❤️ для наших
            четвероногих друзей.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
