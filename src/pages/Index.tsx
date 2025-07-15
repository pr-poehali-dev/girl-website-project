import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            WomenClub
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-500 transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-700 hover:text-red-500 transition-colors">Портфолио</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            Присоединиться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Женский Клуб
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Место силы, вдохновения и роста для современных женщин
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-lg px-8 py-3">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Начать путь
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-purple-300 hover:bg-purple-50">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Наши Услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Развивайся вместе с нами в атмосфере поддержки и вдохновения
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-red-50 to-pink-50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Нетворкинг</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-lg">
                Знакомства с единомышленницами, деловые связи и дружеские отношения
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Обучение</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-lg">
                Мастер-классы, семинары и курсы для личностного и профессионального роста
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Поддержка</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-lg">
                Психологическая поддержка, коучинг и менторство в кругу понимающих женщин
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Наши Достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Истории успеха участниц клуба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center">
                <Icon name="Trophy" size={48} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">500+ Участниц</h3>
                <p className="text-gray-600">Активное сообщество успешных женщин</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center">
                <Icon name="Star" size={48} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">100+ Мероприятий</h3>
                <p className="text-gray-600">Проведено за прошлый год</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
                <Icon name="Zap" size={48} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">50+ Спикеров</h3>
                <p className="text-gray-600">Эксперты различных областей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Свяжитесь с Нами
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы присоединиться к нашему сообществу? Напишите нам!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600">hello@womenclub.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-lg px-12 py-4">
            <Icon name="Send" className="mr-2" size={20} />
            Написать нам
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
            WomenClub
          </div>
          <p className="text-gray-400 mb-6">Место силы для современных женщин</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;