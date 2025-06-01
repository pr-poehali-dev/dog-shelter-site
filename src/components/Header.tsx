import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-900">Лапки Добра</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">
              Наши питомцы
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              О приюте
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Контакты
            </a>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
