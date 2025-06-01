import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-orange-500" size={28} />
            <span className="text-2xl font-bold text-gray-900">
              Лапки Добра
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#gallery"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Наши питомцы
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              О приюте
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
