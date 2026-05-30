import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Star, MapPin, Phone, Mail, Scissors, ArrowRight, Sparkles, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { barberShopInfo, services, barbers, testimonials, gallery, products } from '../mock';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const categories = ['all', 'fade', 'corte', 'barba', 'combo', 'diseño'];
  
  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-40 glass"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Scissors className="w-7 h-7 text-amber-500" />
            <span className="text-2xl font-bold tracking-tight">{barberShopInfo.name}</span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-12">
            {['Inicio', 'Servicios', 'Barberos', 'Galería', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-gray-400 hover:text-white smooth-transition"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => navigate('/reservar')} 
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 smooth-transition"
            >
              Reservar
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge className="mb-8 bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-amber-500" />
              {barberShopInfo.rating} • {barberShopInfo.totalReviews} Reseñas
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter"
          >
            <span className="gradient-text">{barberShopInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl md:text-4xl text-gray-400 mb-4 font-light"
          >
            {barberShopInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto"
          >
            Una experiencia única donde el estilo y la excelencia se encuentran
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => navigate('/reservar')} 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-7 rounded-full smooth-transition glow-hover"
              >
                Reservar Mi Cita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amber-500/30 text-white hover:bg-amber-500/10 text-lg px-10 py-7 rounded-full smooth-transition"
                onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Experiencia <span className="gradient-text">Premium</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Más que un corte, una experiencia completa de cuidado personal
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {barberShopInfo.amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-2xl smooth-transition premium-card text-center"
              >
                <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{amenity.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400">
              Servicios profesionales con los mejores estándares
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Card className="glass border-amber-500/10 hover:border-amber-500/30 smooth-transition h-full premium-card">
                  <CardHeader>
                    {service.popular && (
                      <Badge className="w-fit mb-4 bg-amber-500 text-black font-semibold">
                        Más Popular
                      </Badge>
                    )}
                    <CardTitle className="text-2xl mb-3">{service.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-4xl font-bold gradient-text">
                          ${service.price.toLocaleString('es-CL')}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">{service.duration}</p>
                      </div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button 
                          onClick={() => navigate('/reservar')} 
                          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full"
                        >
                          <Calendar className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barberos" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Maestros <span className="gradient-text">Barberos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Profesionales apasionados por su arte
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Card className="glass border-amber-500/10 hover:border-amber-500/30 smooth-transition overflow-hidden premium-card">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={barber.image} 
                      alt={barber.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1">{barber.name}</h3>
                      <p className="text-amber-500 text-sm">{barber.experience}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {barber.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="border-amber-500/30 text-amber-500">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => navigate('/reservar')} 
                        className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full"
                      >
                        Reservar con {barber.name}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Galería</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Nuestros mejores trabajos
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.div key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setSelectedCategory(cat)}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    className={selectedCategory === cat 
                      ? "bg-amber-500 text-black hover:bg-amber-600 rounded-full" 
                      : "border-amber-500/30 text-white hover:bg-amber-500/10 rounded-full"}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <Badge className="bg-amber-500 text-black">{item.category}</Badge>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-yellow-500/20 to-amber-600/20" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            ¿Listo para tu <span className="gradient-text">Transformación</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Reserva tu cita y experimenta el mejor servicio de barbería en Santiago
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => navigate('/reservar')} 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-12 py-8 rounded-full glow smooth-transition"
            >
              Reservar Ahora
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Visítanos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="glass border-amber-500/10 mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Dirección</p>
                      <p className="text-gray-400">{barberShopInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Teléfono</p>
                      <p className="text-gray-400">{barberShopInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-400">{barberShopInfo.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 lg:h-full rounded-2xl overflow-hidden glass"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8544987699806!2d-70.71905!3d-33.36155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIxJzQxLjYiUyA3MMKwNDMnMDguNiJX!5e0!3m2!1sen!2scl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-amber-500/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scissors className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-bold">{barberShopInfo.name}</span>
            </div>
            <p className="text-gray-500">
              © 2026 God is Good Barbería. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
