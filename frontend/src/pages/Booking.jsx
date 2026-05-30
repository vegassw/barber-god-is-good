import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Scissors, ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar } from '../components/ui/calendar';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { barbers, services, generateAvailableSlots } from '../mock';
import { useToast } from '../hooks/use-toast';

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const getAvailableTimes = () => {
    if (!selectedDate) return [];
    return generateAvailableSlots(selectedDate);
  };

  const handleConfirmBooking = () => {
    if (!customerName || !customerPhone || !customerEmail) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Reserva Confirmada!",
      description: `Tu cita con ${selectedBarber.name} ha sido agendada`,
    });

    setTimeout(() => navigate('/'), 2000);
  };

  const canProceedToNextStep = () => {
    if (step === 1) return selectedBarber !== null;
    if (step === 2) return selectedService !== null;
    if (step === 3) return selectedDate !== null && selectedTime !== null;
    return false;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Button 
            onClick={() => step === 1 ? navigate('/') : setStep(step - 1)} 
            variant="outline" 
            className="border-amber-500/30 text-white hover:bg-amber-500/10 mb-6 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 1 ? 'Volver' : 'Anterior'}
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            Reserva Tu <span className="gradient-text">Cita</span>
          </h1>
          <p className="text-gray-400 text-lg">Completa los pasos para agendar</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div 
                    animate={{
                      scale: step >= stepNum ? [1, 1.1, 1] : 1,
                      backgroundColor: step >= stepNum ? '#d4af37' : '#27272a'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-black"
                  >
                    {step > stepNum ? <Check className="w-7 h-7" /> : stepNum}
                  </motion.div>
                  <p className={`mt-3 text-sm font-medium ${
                    step >= stepNum ? 'text-amber-500' : 'text-gray-600'
                  }`}>
                    {stepNum === 1 && 'Barbero'}
                    {stepNum === 2 && 'Servicio'}
                    {stepNum === 3 && 'Fecha'}
                    {stepNum === 4 && 'Confirmar'}
                  </p>
                </div>
                {stepNum < 4 && (
                  <motion.div 
                    animate={{ 
                      backgroundColor: step > stepNum ? '#d4af37' : '#27272a',
                      scaleX: step > stepNum ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1 flex-1 mx-3 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Barber */}
          {step === 1 && (
            <motion.div key="step1" {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Selecciona tu Barbero</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {barbers.map((barber) => (
                  <motion.div
                    key={barber.id}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      onClick={() => setSelectedBarber(barber)}
                      className={`cursor-pointer smooth-transition overflow-hidden ${
                        selectedBarber?.id === barber.id
                          ? 'glass border-amber-500 shadow-lg shadow-amber-500/20'
                          : 'glass border-amber-500/10 hover:border-amber-500/30'
                      }`}
                    >
                      <div className="relative h-64">
                        <img 
                          src={barber.image} 
                          alt={barber.name} 
                          className="w-full h-full object-cover"
                        />
                        {selectedBarber?.id === barber.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 bg-amber-500 rounded-full p-2"
                          >
                            <Check className="w-5 h-5 text-black" />
                          </motion.div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                          <p className="text-amber-500 text-sm">{barber.experience}</p>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <div className="flex flex-wrap gap-2">
                          {barber.specialties.slice(0, 2).map((specialty, idx) => (
                            <span key={idx} className="text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Service */}
          {step === 2 && (
            <motion.div key="step2" {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Selecciona tu Servicio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      onClick={() => setSelectedService(service)}
                      className={`cursor-pointer smooth-transition ${
                        selectedService?.id === service.id
                          ? 'glass border-amber-500 shadow-lg shadow-amber-500/20'
                          : 'glass border-amber-500/10 hover:border-amber-500/30'
                      }`}
                    >
                      <CardHeader>
                        {service.popular && (
                          <span className="text-xs bg-amber-500 text-black px-2 py-1 rounded-full w-fit mb-2 font-semibold">
                            Más Popular
                          </span>
                        )}
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription className="text-gray-400">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-3xl font-bold gradient-text">${service.price.toLocaleString('es-CL')}</p>
                            <p className="text-sm text-gray-500 mt-1 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {service.duration}
                            </p>
                          </div>
                          {selectedService?.id === service.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center"
                            >
                              <Check className="w-6 h-6 text-black" />
                            </motion.div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div key="step3" {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Fecha y Hora</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="glass border-amber-500/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-amber-500" />
                      Selecciona una Fecha
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setSelectedTime(null); // Reset time when date changes
                      }}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border border-amber-500/20"
                    />
                  </CardContent>
                </Card>

                <Card className="glass border-amber-500/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-amber-500" />
                      Horarios Disponibles
                    </CardTitle>
                    <CardDescription>
                      {selectedDate 
                        ? selectedDate.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })
                        : 'Selecciona primero una fecha'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!selectedDate ? (
                      <div className="text-center py-12">
                        <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                        <p className="text-gray-500">Selecciona una fecha</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-3">
                        {getAvailableTimes().map((time) => (
                          <motion.div key={time} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              onClick={() => setSelectedTime(time)}
                              variant={selectedTime === time ? "default" : "outline"}
                              className={`w-full ${selectedTime === time
                                ? "bg-amber-500 text-black hover:bg-amber-600"
                                : "border-amber-500/30 hover:bg-amber-500/10"
                              }`}
                            >
                              {time}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div key="step4" {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Confirma tu Reserva</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="glass border-amber-500/10">
                  <CardHeader>
                    <CardTitle>Resumen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 glass rounded-xl">
                      <div className="flex items-center mb-2">
                        <User className="w-5 h-5 text-amber-500 mr-3" />
                        <p className="font-semibold">Barbero</p>
                      </div>
                      <p className="text-gray-400 ml-8">{selectedBarber?.name}</p>
                      <p className="text-amber-500 text-sm ml-8">{selectedBarber?.experience}</p>
                    </div>
                    <div className="p-4 glass rounded-xl">
                      <div className="flex items-center mb-2">
                        <Scissors className="w-5 h-5 text-amber-500 mr-3" />
                        <p className="font-semibold">Servicio</p>
                      </div>
                      <p className="text-gray-400 ml-8">{selectedService?.name}</p>
                      <p className="text-amber-500 font-bold ml-8">${selectedService?.price.toLocaleString('es-CL')}</p>
                    </div>
                    <div className="p-4 glass rounded-xl">
                      <div className="flex items-center mb-2">
                        <CalendarIcon className="w-5 h-5 text-amber-500 mr-3" />
                        <p className="font-semibold">Fecha y Hora</p>
                      </div>
                      <p className="text-gray-400 ml-8">
                        {selectedDate?.toLocaleDateString('es-CL', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-amber-500 font-semibold ml-8">{selectedTime}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-amber-500/10">
                  <CardHeader>
                    <CardTitle>Tus Datos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">Nombre Completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="glass border-amber-500/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+56 9 1234 5678"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="glass border-amber-500/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="glass border-amber-500/20 text-white"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        onClick={handleConfirmBooking}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-6 text-lg rounded-full glow"
                        size="lg"
                      >
                        <Check className="w-5 h-5 mr-2" />
                        Confirmar Reserva
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-end"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setStep(step + 1)}
                disabled={!canProceedToNextStep()}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 rounded-full disabled:opacity-50"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Booking;
