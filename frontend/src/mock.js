// Mock data para God is Good Barbería

export const barberShopInfo = {
  name: "God is Good",
  tagline: "Donde el estilo se encuentra con la excelencia",
  address: "General San Martín 23, Quilicura, Santiago",
  phone: "+56 9 1234 5678",
  email: "contacto@godisgoodbarber.cl",
  rating: 5.0,
  totalReviews: 24,
  hours: {
    lunes: "9:00 AM - 8:00 PM",
    martes: "9:00 AM - 8:00 PM",
    miercoles: "9:00 AM - 8:00 PM",
    jueves: "9:00 AM - 8:00 PM",
    viernes: "9:00 AM - 9:00 PM",
    sabado: "9:00 AM - 9:00 PM",
    domingo: "10:00 AM - 6:00 PM"
  },
  amenities: [
    { name: "Estacionamiento", icon: "parking" },
    { name: "Wi-Fi Gratis", icon: "wifi" },
    { name: "Apto para Niños", icon: "child" },
    { name: "Tarjetas de Crédito", icon: "credit-card" },
    { name: "Bebidas de Cortesía", icon: "coffee" },
    { name: "Ambiente Premium", icon: "star" }
  ]
};

export const services = [
  {
    id: 1,
    name: "Corte de Cabello Adulto",
    price: 15000,
    duration: "60 min",
    description: "Corte profesional con consultoría de estilo, lavado y acabado premium",
    popular: true
  },
  {
    id: 2,
    name: "Corte de Cabello Niño",
    price: 10000,
    duration: "60 min",
    description: "Corte especial para niños con atención paciente y ambiente amigable",
    popular: true
  },
  {
    id: 3,
    name: "Corte y Barba",
    price: 17000,
    duration: "60 min",
    description: "Servicio completo: corte de cabello + perfilado y recorte de barba",
    popular: true
  },
  {
    id: 4,
    name: "Afeitado de Barba",
    price: 7000,
    duration: "30 min",
    description: "Afeitado clásico con toalla caliente y productos premium",
    popular: false
  },
  {
    id: 5,
    name: "Perfilado de Barba",
    price: 5000,
    duration: "20 min",
    description: "Perfilado y delineado profesional de barba",
    popular: false
  },
  {
    id: 6,
    name: "Diseño y Líneas",
    price: 3000,
    duration: "15 min",
    description: "Diseños creativos y líneas precisas",
    popular: false
  }
];

export const barbers = [
  {
    id: 1,
    name: "Jesús",
    specialties: ["Fades", "Cortes Clásicos", "Barbas"],
    experience: "8 años",
    description: "Maestro barbero especializado en fades y cortes clásicos. Su precisión y atención al detalle lo hacen uno de los favoritos.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 18
  },
  {
    id: 2,
    name: "Alexander",
    specialties: ["Cortes Niños", "Diseños Creativos", "Paciencia"],
    experience: "5 años",
    description: "Especialista en cortes infantiles. Su paciencia y dedicación hacen que los niños se sientan cómodos y seguros.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 12
  },
  {
    id: 3,
    name: "Diego",
    specialties: ["Fade Moderno", "Barbas Estilizadas", "Tendencias"],
    experience: "6 años",
    description: "Experto en tendencias modernas y técnicas innovadoras. Si buscas un look vanguardista, Diego es tu barbero.",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 15
  },
  {
    id: 4,
    name: "Matías",
    specialties: ["Cortes Ejecutivos", "Afeitado Clásico", "Detalles"],
    experience: "7 años",
    description: "Especialista en cortes ejecutivos y afeitado tradicional. Perfecto para el profesional que busca elegancia.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 14
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jose",
    service: "Corte cabello y barba",
    barber: "Jesús",
    rating: 5,
    comment: "Recomendado totalmente excelente servicio",
    date: "Febrero 2026"
  },
  {
    id: 2,
    name: "Caro",
    service: "Alexander",
    barber: "Alexander",
    rating: 5,
    comment: "Alexander es 100% dedicado, sobre todo con los niños, es muy paciente, lo recomiendo",
    date: "Febrero 2026"
  },
  {
    id: 3,
    name: "Lucas",
    service: "Corte y barba",
    barber: "Jesús",
    rating: 5,
    comment: "Impecable",
    date: "Diciembre 2025"
  },
  {
    id: 4,
    name: "Pablo",
    service: "Corte de cabello (adulto)",
    barber: "Jesús",
    rating: 5,
    comment: "El mejor barbero",
    date: "Octubre 2025"
  },
  {
    id: 5,
    name: "Amaro",
    service: "Corte de cabello (adulto)",
    barber: "Jesús",
    rating: 5,
    comment: "Exelente servicio barbería limpia y el mejor barbero",
    date: "Julio 2025"
  },
  {
    id: 6,
    name: "Matias",
    service: "Corte de cabello (adulto)",
    barber: "Jesús",
    rating: 5,
    comment: "Un excelente servicio, buen ambiente y local 10/10",
    date: "Junio 2025"
  }
];

export const gallery = [
  {
    id: 1,
    title: "Fade Clásico",
    category: "fade",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Corte Ejecutivo",
    category: "corte",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Barba Estilizada",
    category: "barba",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Fade Moderno",
    category: "fade",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Corte y Barba",
    category: "combo",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Diseño Creativo",
    category: "diseño",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop"
  }
];

export const products = [
  {
    id: 1,
    name: "Pomada Mate",
    price: 12000,
    description: "Fijación fuerte con acabado mate natural",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Aceite para Barba",
    price: 15000,
    description: "Hidratación y brillo para barba saludable",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Cera Modeladora",
    price: 10000,
    description: "Control y definición para cualquier estilo",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Shampoo Premium",
    price: 18000,
    description: "Limpieza profunda con ingredientes naturales",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop"
  }
];

// Horarios disponibles para el sistema de reservas (mockup)
export const availableSlots = {
  "2026-08-25": ["10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
  "2026-08-26": ["9:00", "10:00", "11:00", "15:00", "16:00", "18:00"],
  "2026-08-27": ["9:00", "12:00", "13:00", "14:00", "17:00", "18:00"],
  "2026-08-28": ["10:00", "11:00", "12:00", "15:00", "16:00", "17:00"],
  "2026-08-29": ["9:00", "10:00", "14:00", "15:00", "16:00", "18:00"],
  "2026-08-30": ["10:00", "11:00", "12:00", "14:00", "16:00", "17:00"]
};
