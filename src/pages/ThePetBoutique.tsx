import { useState } from 'react';
import { SEO } from '../components/SEO';
import {
  Scissors,
  ShoppingBag,
  Car,
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Star,
  Heart,
  ChevronDown,
  ChevronUp,
  Instagram,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export function ThePetBoutique() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'O que é o banho Low Stress?',
      answer: 'O Banho Low Stress é muito mais do que apenas um banho comum. É uma abordagem holística para o cuidado e bem-estar dos pets, baseada no respeito por suas necessidades emocionais e físicas. Nosso objetivo é proporcionar a melhor experiência possível, tanto em termos de higiene quanto de relaxamento. Na The Pet by 7Pet, acreditamos que cada pet merece um tratamento especial.'
    },
    {
      question: 'Como Funciona o banho Low Stress?',
      answer: 'Utilizamos técnicas especiais de contenção sem trauma, produtos de qualidade, ambiente climatizado e profissionais treinados para lidar com pets de todos os temperamentos. O processo inclui avaliação do comportamento do pet, preparação do ambiente adequado e execução do serviço com paciência e carinho.'
    },
    {
      question: 'Quais serviços vocês oferecem?',
      answer: 'Oferecemos Banhos Low Stress, Tosas (higiênica, tesoura e máquina), Hidratações, Desembolos, Estéticas e cuidados de beleza para Cães e Gatos. Também temos Leva e Traz, Delivery de produtos e Veterinário em casa.'
    },
    {
      question: 'Preciso agendar com antecedência?',
      answer: 'Sim, recomendamos agendar com pelo menos 2-3 dias de antecedência para garantir o melhor horário para você e seu pet. Para fins de semana e feriados, sugerimos agendar com uma semana de antecedência.'
    },
    {
      question: 'Vocês atendem pets agressivos?',
      answer: 'Sim! Nossa equipe é treinada em técnicas de manejo Low Stress justamente para lidar com pets mais ansiosos ou medrosos. Nunca usamos violência ou força bruta. Se necessário, fazemos adaptações no procedimento para garantir o bem-estar do pet.'
    },
    {
      question: 'Quanto tempo dura o banho?',
      answer: 'O tempo varia conforme o porte e pelagem do pet, mas em média: Cães pequenos 1h-1h30, médios 1h30-2h, grandes 2h-3h. Gatos costumam levar entre 1h-2h. O importante é que não apressamos o processo - o conforto do pet é prioridade.'
    }
  ];

  const services = [
    {
      icon: Scissors,
      title: '7Pet SPA',
      subtitle: 'Estética, Banho e Tosa',
      image: 'https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/2_1_s.jpg',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: ShoppingBag,
      title: '7Pet Shop',
      subtitle: 'Alimentação e Produtos',
      image: 'https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/2_2_s.jpg',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Car,
      title: '7Pet Transp.',
      subtitle: 'O melhor Leva & Traz',
      image: 'https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/2_4_s.jpg',
      color: 'from-orange-400 to-amber-500'
    },
    {
      icon: Stethoscope,
      title: '7Pet Vet',
      subtitle: 'Super Veterinários',
      image: 'https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/2_3_s.jpg',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      name: 'Mariana Silva',
      pet: 'Luna (Poodle)',
      text: 'A equipe da The Pet é incrível! Minha Luna era super medrosa de pet shops, mas aqui ela se sente em casa. O banho low stress fez toda diferença!',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      pet: 'Thor (Golden)',
      text: 'Profissionais extremamente competentes e carinhosos. O serviço de leva e traz me ajuda muito no dia a dia. Recomendo de olhos fechados!',
      rating: 5
    },
    {
      name: 'Ana Paula',
      pet: 'Mimi (Gata Persa)',
      text: 'Finalmente encontrei um lugar onde minha gata é tratada com o cuidado que ela merece. O banho de gato deles é impecável!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="The Pet by 7Pet - Boutique e SPA"
        description="Petshop Boutique, Spa Banho e Tosa, Transportes e Tudo para Pets - The Pet by 7Pet. Banho Low Stress para cães e gatos."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#ff5757]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/1_m.jpg"
            alt="The Pet by 7Pet"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5757]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl animate-reveal-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white font-semibold">The Pet by 7Pet</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight font-heading">
              O petshop <span className="text-yellow-200">preferido</span> pelos pets e pais de pets!
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl font-body">
              Banho Low Stress, Tosa, SPA e muito mais para o seu melhor amigo
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511983966451"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-yellow-200 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Agende seu horário
              </a>
              <a
                href="#servicos"
                className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/30 transition-all duration-300"
              >
                Conheça nossos serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Pacotes Banner */}
      <section className="bg-[#0a3d3d] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-xl md:text-2xl font-body text-center md:text-left">
              Conheça os nossos pacotes de serviços para o SPA The Pet by 7Pet!
            </p>
            <a
              href="https://7pet.com.br/lojathepetby7pet/pacotes/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-200 transition-all whitespace-nowrap"
            >
              Pacotes e Assinaturas
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-20 bg-[#0a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-reveal-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body">{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Novidades Section */}
      <section className="py-20 bg-[#0a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-reveal-up">
              <img
                src="https://cdn.bitrix24.site/bitrix/images/landing/krayt/pet_service/3_m.jpg"
                alt="Novidades The Pet"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="text-center lg:text-left animate-reveal-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-8 font-heading">
                Novidades!!!
              </h2>
              <div className="space-y-4 text-white text-xl font-body">
                <p className="flex items-center gap-3 justify-center lg:justify-start">
                  <Car className="w-6 h-6 text-yellow-300" />
                  <span className="font-bold">Leva e Traz para seu Pet</span>
                </p>
                <p className="flex items-center gap-3 justify-center lg:justify-start">
                  <ShoppingBag className="w-6 h-6 text-yellow-300" />
                  <span className="font-bold">Delivery de produtos</span>
                </p>
                <p className="flex items-center gap-3 justify-center lg:justify-start">
                  <Stethoscope className="w-6 h-6 text-yellow-300" />
                  <span className="font-bold">Veterinário em casa</span>
                </p>
              </div>
              <a
                href="https://wa.me/5511983966451"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-white/10 border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300"
              >
                Agende seu serviço!
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7Pet SPA Section */}
      <section className="py-20 bg-[#ffeebb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a3d3d] mb-6 font-heading">
              7Pet SPA
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                Banho Low Stress para Cães e Gatos na The Pet by 7Pet
              </p>
              <p className="text-xl text-gray-600 font-body">
                O Máximo de Conforto e Tranquilidade para Você e Seu Pet!
              </p>
              <p className="text-gray-600 mt-4 font-body leading-relaxed">
                Na The Pet by 7Pet, acreditamos que a experiência do banho e tosa deve ser um momento de relaxamento e mimos para seu pet, longe de qualquer estresse ou desconforto. É por isso que oferecemos o inovador serviço de "Banho Low Stress", projetado para proporcionar o máximo de conforto e tranquilidade aos cães e gatos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cães */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-reveal-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://cdn.bitrix24.com.br/b15698247/landing/b0b/b0b02a414a928d39169f5696957ae3fe/how_to_bathe_dog_1587137329_2x_1x_jpg"
                  alt="Banho para Cães"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#0a3d3d] mb-6 text-center font-heading">Cães</h3>
                <ul className="space-y-3 text-center text-gray-700 font-body">
                  <li className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    Banhos Low Stress
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Scissors className="w-4 h-4 text-pink-500" />
                    Tosas (higiênica, tesoura e máquina)
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    Hidratações
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Scissors className="w-4 h-4 text-pink-500" />
                    Desembolos
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    Estéticas e Beleza
                  </li>
                </ul>
              </div>
            </div>

            {/* Gatos */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-reveal-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://cdn.bitrix24.com.br/b15698247/landing/6a0/6a09809b8319f28696761ef35c794bb5/86938155-girl-washes-her-pet-cat-in-a-bathtub-beautiful-tabby-cat-taking-a-shower_1x.jpg"
                  alt="Banho para Gatos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#0a3d3d] mb-6 text-center font-heading">Gatos</h3>
                <ul className="space-y-3 text-center text-gray-700 font-body">
                  <li className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    Banhos Low Stress
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Scissors className="w-4 h-4 text-pink-500" />
                    Tosas (higiênica, tesoura e máquina)
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    Hidratações
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Scissors className="w-4 h-4 text-pink-500" />
                    Desembolos
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    Estéticas e Beleza
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-[#ff5757]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-heading animate-reveal-up">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden animate-reveal-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800 font-body pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#ff5757] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-gray-600 font-body leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a3d3d] text-center mb-16 font-heading animate-reveal-up">
            O que dizem de nós
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-reveal-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 font-body italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900 font-heading">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-body">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contato" className="py-20 bg-[#0a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
                Onde estamos
              </h2>
              <div className="space-y-6 text-white font-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Endereço</p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Av.+Hildebrando+de+Lima%2C+52+-+Km+18%2C+Osasco+-+SP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-yellow-300 transition-colors block group/addr"
                    >
                      Av. Hildebrando de Lima, 52, Km 18<br />
                      Osasco - SP
                      <span className="block text-xs mt-1 text-yellow-300/60 group-hover/addr:text-yellow-300 transition-colors flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Ver no Google Maps
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Horário de Funcionamento</p>
                    <p className="text-white/80">
                      De Terça a sabado: das 09:00 as 18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Contato</p>
                    <p className="text-white/80">11 98396-6451</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com/Thpet.Oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">@Thpet.Oficial</span>
                </a>
              </div>
            </div>

            <div className="animate-reveal-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.053245464188!2d-46.790934!3d-23.5348082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017777777777%3A0x7777777777777777!2sAv.%20Hildebrando%20de%20Lima%2C%2052%20-%20Km%2018%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização The Pet by 7Pet"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-[#ff5757]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Agende agora!
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body">
            Seu pet merece o melhor tratamento. Entre em contato e agende um horário.
          </p>
          <a
            href="https://wa.me/5511983966451"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-200 transition-all duration-300 hover:-translate-y-1 shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
