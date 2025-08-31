"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X, Trophy } from "lucide-react";

// Tipo de datos para los toreros
interface Torero {
  id: number;
  name: string;
  image: string;
  especialidad: string;
  nacimiento: string;
  estilo: string;
  formacion: string;
  trayectoria: string;
  logros: string[];
  tip: string;
  nombreCompleto?: string;
  apodo?: string;
}

export default function Home() {
  const [selectedTorero, setSelectedTorero] = useState<Torero | null>(null);

  // === DATA ===
  const toreros: Torero[] = [
    {
      id: 1,
      name: "David Martínez",
      image: "/images/matador-1.jpg",
      especialidad: "Matador de Toros (Colombia)",
      nacimiento: "Cali, Colombia, 1989",
      estilo: "Clásico y elegante, con gran temple",
      formacion: "Escuela Taurina Jerónimo Pimentel, alternativa en Sogamoso (2015)",
      trayectoria: "Ha toreado en plazas de Colombia, México, Ecuador y Perú",
      logros: [
        "Reconocido por su dominio técnico y control en los tres tercios",
        "Triunfador en plazas importantes de América",
      ],
      tip: "Ideal para faenas largas y de lucimiento",
    },
    {
      id: 2,
      name: "Samuel Calderón",
      image: "/images/matador-2.jpg",
      especialidad: "Matador de Toros (Perú)",
      nombreCompleto: "Brayan Samuel Calderón Serna",
      nacimiento: "Apurímac, Perú",
      estilo: "Técnico y valiente, con entrega total",
      formacion: "Escuela Taurina de Acho, alternativa en Chalhuanca (2023)",
      trayectoria: "Ha participado en ferias de Perú, Colombia, México y Ecuador",
      logros: [
        "Cortes de orejas y triunfos en festivales peruanos",
        "Reconocido por su profesionalismo y constancia",
      ],
      tip: "Su combinación de técnica y arrojo genera faenas emocionantes",
    },
    {
      id: 3,
      name: "Cristhian Ramos",
      image: "/images/matador-3.jpg",
      especialidad: "Novillero/Matador de Toros (Perú, Macusani)",
      nombreCompleto: "Cristhian Ramos Hancco",
      apodo: "El Niño de Macusani",
      nacimiento: "Macusani, Puno, Perú",
      estilo: "Joven, valiente y decidido, con buena conexión con el público local",
      formacion: "Universidad Nacional del Altiplano de Puno",
      trayectoria: "Participaciones en plazas de Puno y Macusani",
      logros: [
        "Ganador de un concurso local en 2018",
        "Corte de orejas en su debut con picadores",
      ],
      tip: "Su juventud y arrojo prometen gran proyección futura",
    },
  ];

  const novilleros = [
    { name: "Antony Barra", img: "/images/novillero-1.jpg", descripcion: "Promesa del toreo nacional con gran proyección internacional." },
    { name: "Albert Chui", img: "/images/novillero-2.jpg", descripcion: "Joven torero con técnica excepcional y gran temple." },
  ];

  const ganaderias = [
    { name: "Checayani", image: "/images/ganaderia-1.jpg" },
    { name: "Rural Alianza", image: "/images/ganaderia-2.jpg" },
    { name: "Las Nieves", image: "/images/ganaderia-3.jpg" },
    { name: "Las Mercedes de Cupi", image: "/images/ganaderia-4.jpg" },
  ];

  return (

    
    <div className="font-serif bg-white text-red-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-lg sm:text-xl font-bold tracking-wide">
            Fiesta Taurina Ayaviri 2025
          </h1>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#toreros" className="hover:text-red-400 transition-colors">Toreros</a>
            <a href="#novilleros" className="hover:text-red-400 transition-colors">Novilleros</a>
            <a href="#ganaderias" className="hover:text-red-400 transition-colors">Ganaderías</a>
            <a href="#programa" className="hover:text-red-400 transition-colors">Programa</a>
            <a href="#buffos" className="hover:text-red-400 transition-colors">Buffos</a>
          </nav>
        </div>
      </header>
      {/* HERO */}
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center pt-20"
        style={{ backgroundImage: "url('/images/PlazadeAyaviri (1).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            ¡Gran Corrida de Toros en Ayaviri!
          </h1>
          <p className="text-lg sm:text-2xl mb-6">
            13 de septiembre – Fiesta en honor a la Virgen de Altagracia
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg">
            Una tarde de tradición, cultura y alegría que une a nuestro pueblo.
          </p>
        </motion.div>
      </section>

      {/* Figuras del Ruedo */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-12">
          Figuras del Ruedo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {toreros.map((torero) => (
            <Card
              key={torero.id}
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedTorero(torero)}
            >
              <CardContent className="p-4">
                <img
                  src={torero.image}
                  alt={torero.name}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
                />
                <h3 className="text-xl sm:text-2xl mt-4 font-semibold">
                  {torero.name}
                </h3>
                <p className="text-sm text-red-600 mt-2">{torero.especialidad}</p>
                <p className="text-sm text-gray-600 mt-1">Haz clic para ver biografía</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Novilleros */}
      <section className="py-20 bg-red-50 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-12">
          Novilleros
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg px-4">
          Jóvenes promesas que se lucirán en la arena con todo su valor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {novilleros.map((novillero, i) => (
            <Card
              key={i}
              className="rounded-2xl bg-white shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <CardContent className="p-4">
                <img
                  src={novillero.img}
                  alt={novillero.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <h3 className="text-xl font-semibold text-red-600 mt-4">
                  {novillero.name}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{novillero.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ganaderías */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-12">
          Ganaderías Invitadas
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-base sm:text-lg px-4">
          Desde nuestros campos llegan los mejores ejemplares para esta gran
          fiesta taurina.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {ganaderias.map((ganaderia, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <CardContent className="p-4">
                <img
                  src={ganaderia.image}
                  alt={ganaderia.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="text-lg sm:text-xl font-semibold mt-4">
                  {`Ganadería ${ganaderia.name}`}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Programa del Evento */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-12 text-center">
            Programa Oficial
          </h2>
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Viernes 12 de septiembre */}
            <Card className="rounded-2xl shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6">
                <div className="bg-red-700 text-white p-4 -m-6 mb-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold text-center">
                    Viernes 12 de septiembre 2025
                  </h3>
                </div>
               
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                      6:00 p.m.
                    </div>
                    <p className="text-gray-700">
                      Recepción de invitados y familiares en la Av. Mariscal Castilla N° 167,
                      local de eventos <span className="font-bold text-red-700">&quot;KOLLPAPATA&quot;</span>.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                      8:00 p.m.
                    </div>
                    <p className="text-gray-700">
                      Tradicional toro <span className="font-bold text-red-700">VELAKUY</span>
                      en el ruedo de toros Lucho Coronado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Sábado 13 de septiembre */}
            <Card className="rounded-2xl shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6">
                <div className="bg-yellow-600 text-white p-4 -m-6 mb-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold text-center">
                    Sábado 13 de septiembre 2025
                  </h3>
                </div>
               
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      5:00 a.m.
                    </div>
                    <p className="text-gray-700">
                      Alba de 21 &quot;camaretazos&quot; en el cerro Kolqueparque.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      6:00 a.m.
                    </div>
                    <p className="text-gray-700">
                      Desayuno ofrecido por los Alferados 2025.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      7:00 a.m.
                    </div>
                    <p className="text-gray-700">
                      Solemne misa de la tercera tarde taurina, celebrada en la catedral San Francisco de Asís.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      8:00 a.m.
                    </div>
                    <p className="text-gray-700">
                      Recepción de invitados, familiares, autoridades y pueblo en general en el local &quot;KOLLPAPATA&quot;.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      11:30 a.m.
                    </div>
                    <p className="text-gray-700">
                      Almuerzo ofrecido por los Alferados 2025.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold min-w-fit">
                      12:30 p.m.
                    </div>
                    <p className="text-gray-700 font-medium">
                      Entrada de la tercera tarde taurina a la plaza de toros Lucho Coronado,
                      con tradicional paseo de &quot;enjalmas&quot;.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold min-w-fit">
                      1:00 p.m.
                    </div>
                    <p className="text-gray-700 font-bold">
                      🎯 Inicio de la tercera tarde taurina.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      3:30 p.m.
                    </div>
                    <p className="text-gray-700">
                      Entrega de cargo al nuevo alferado 2026.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      5:30 p.m.
                    </div>
                    <p className="text-gray-700">
                      Final de la tarde taurina y entrega de escapularios.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      6:30 p.m.
                    </div>
                    <p className="text-gray-700">
                      &quot;Kacharparti&quot;.
                    </p>
                  </div>
                 
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold min-w-fit">
                      7:00 p.m.
                    </div>
                    <p className="text-gray-700">
                      🎉 Gran Remate bailable a la usanza ayavireña en el local de KOLLPAPATA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
         
          <div className="text-center mt-8">
            <p className="text-lg text-red-700 font-semibold bg-white px-6 py-3 rounded-full shadow-md inline-block">
              📍 Plaza de Toros Lucho Coronado - Ayaviri
            </p>
          </div>
        </div>
      </section>


      {/* Buffos */}
      <section className="py-20 bg-yellow-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8">
          Buffos
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4">
          La alegría y las risas estarán aseguradas con{" "}
          <span className="font-bold">Los Reyes del Ruedo de Ayacucho</span>,
          acompañados por las vacas de Santiago.
        </p>
        <img
          src="/images/buffos.jpeg"
          alt="Buffos"
          className="mx-auto w-56 sm:w-64 md:w-80 rounded-xl shadow-lg"
        />
      </section>


      {/* Invitación final */}
      <section className="py-20 bg-red-700 text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          ¡Te esperamos en la Plaza de Toros de Ayaviri!
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg mb-6">
          Ven con tu familia y amigos a vivir la emoción de nuestra fiesta en
          honor a la Virgen de Altagracia.  
          Una tradición que late en el corazón del pueblo.
        </p>
        <p className="text-lg font-semibold">📅 13 de septiembre de 2025</p>
      </section>


      {/* Footer */}
<footer className="bg-black text-white py-6 text-center px-4">
  <p className="text-xs text-gray-400">
    © 2025 Fiesta Taurina Ayaviri – En honor a la Virgen de Altagracia
  </p>
</footer>


      {/* Modal de Biografía */}
      <AnimatePresence>
        {selectedTorero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTorero(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto font-serif"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedTorero(null)}
                  className="absolute top-4 right-4 z-10 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={selectedTorero.image}
                        alt={selectedTorero.name}
                        className="w-full rounded-xl object-cover"
                      />
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-3xl font-bold text-red-800 mb-2">
                        🎴 {selectedTorero.name}
                      </h3>
                      <p className="text-red-600 font-semibold mb-4 text-lg">
                        {selectedTorero.especialidad}
                      </p>

                      {selectedTorero.nombreCompleto && (
                        <p className="text-sm mb-2">
                          <span className="font-semibold text-red-700">
                            Nombre completo:
                          </span>{" "}
                          {selectedTorero.nombreCompleto}
                        </p>
                      )}

                      {selectedTorero.apodo && (
                        <p className="text-sm mb-2">
                          <span className="font-semibold text-red-700">Apodo:</span>{" "}
                          {selectedTorero.apodo}
                        </p>
                      )}

                      <p className="text-sm mb-3">
                        <span className="font-semibold text-red-700">Nacimiento:</span>{" "}
                        {selectedTorero.nacimiento}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-red-800 mb-2">
                            🎨 Estilo
                          </h4>
                          <p className="text-sm text-gray-700 italic bg-red-50 p-2 rounded">
                            {selectedTorero.estilo}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-red-800 mb-2">
                            🎓 Formación
                          </h4>
                          <p className="text-sm text-gray-700">{selectedTorero.formacion}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-red-800 mb-2">
                            🌎 Trayectoria
                          </h4>
                          <p className="text-sm text-gray-700">{selectedTorero.trayectoria}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                            <Trophy className="mr-2" size={18} />
                            Logros Destacados
                          </h4>
                          <ul className="space-y-1">
                            {selectedTorero.logros.map((logro, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                <span>{logro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                          <h4 className="text-lg font-bold text-red-800 mb-1">
                            💡 Tip para el aficionado
                          </h4>
                          <p className="text-sm text-gray-700 italic">{selectedTorero.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
