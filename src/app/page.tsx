"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-serif bg-white text-red-900">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
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
          {["David Martínez", "Samuel Calderón", "Cristina Ramos"].map(
            (name, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <CardContent className="p-4">
                  <img
                    src={`/images/matador-${i + 1}.jpg`}
                    alt={name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
                  />
                  <h3 className="text-xl sm:text-2xl mt-4 font-semibold">
                    {name}
                  </h3>
                </CardContent>
              </Card>
            )
          )}
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
          {[
            { name: "Antony Barra", img: "/images/novillero-1.jpg" },
            { name: "Albert Chui", img: "/images/novillero-2.jpg" },
          ].map((novillero, i) => (
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
          {["Checayani", "Rural Alianza", "Las Nieves", "Las Mercedes de Cupi"].map(
            (name, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
              >
                <CardContent className="p-4">
                  <img
                    src={`/images/ganaderia-${i + 1}.jpg`}
                    alt={name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mt-4">
                    {`Ganadería ${name}`}
                  </h3>
                </CardContent>
              </Card>
            )
          )}
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
      <footer className="bg-black text-white py-10 text-center px-4">
        <p className="mb-4">Contacto: info@corridadetorosayaviri.com</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-red-500">Facebook</a>
          <a href="#" className="hover:text-red-500">Instagram</a>
          <a href="#" className="hover:text-red-500">WhatsApp</a>
        </div>
        <p className="text-sm">
          © 2025 Fiesta Taurina Ayaviri – En honor a la Virgen de Altagracia
        </p>
      </footer>
    </div>
  );
}
