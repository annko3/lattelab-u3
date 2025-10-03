import React from "react";
import latte from "../../assets/images/latte.png";
import TeamCard from "../../components/TeamCard";

function Contact() {
  return (
    <main>
      <section className="px-[5%] bg-brown-dark text-background py-[54px]">
        <div className="flex flex-col gap-[1rem] text-center items-center">
          <h1 className="text-4xl font-bold">¡Dejanos endulzarte el día!</h1>
          <p className="leading-7">
            ¿Tienes preguntas sobre nuestros productos? ¿Quieres agendar un
            evento? ¿O simplemente quieres compartir tu opinión sobre nuestro
            café? ¡Nos encantaría saber de ti!
          </p>
          <img
            className="w-[40%] rounded-3xl"
            src={latte}
            alt="Latte art coffee cup"
          />
        </div>
      </section>

      <section className="px-[5%] bg-background-alt py-[54px] text-center">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">Métodos de contacto</h2>
        <div className="grid gap-[2rem] justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">Reservas y pedidos</h3>
              <p className="text-red font-bold">pedidos@lattelab.com</p>
              <p>
                Para reservas de mesa o pedidos especiales, respondemos en una hora.
              </p>
            </div>
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">Eventos y grupos</h3>
              <p className="text-red font-bold">eventos@lattelab.com</p>
              <p>
                ¿Quieres celebrar un cumpleaños o una reunión en nuestro local? Cuéntanos tu idea.
              </p>
            </div>

            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Proveedores y asociaciones
              </h3>
              <p className="text-red font-bold">proveedores@lattelab.com</p>
              <p>
                Para granjas, panaderías y marcas interesadas en trabajar con nosotros.
              </p>
            </div>
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">Únete a nuestro equipo</h3>
              <p className="text-red font-bold">empleos@lattelab.com</p>
              <p>Envía tu CV si quieres unirte a nuestro equipo.</p>
            </div>
          </div>
          <div
            className="bg-white border-2 border-brown-pink p-[2rem] rounded-2xl w-full "
            id="contact-social"
          >
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">Redes sociales</h3>

            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram: @lattelab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn: LatteLab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              Twitter: @lattelab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                fill="#7b5232"
                width="22px"
                height="22px"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M224,72a44.04978,44.04978,0,0,1-44-44,12,12,0,0,0-12-12H128a12,12,0,0,0-12,12V156a16,16,0,1,1-22.85107-14.46631,12.0001,12.0001,0,0,0,6.85058-10.83886L100,89.05569a11.99969,11.99969,0,0,0-14.10352-11.814A80.00515,80.00515,0,1,0,180,156l-.00049-29.32812A107.476,107.476,0,0,0,224,136a12,12,0,0,0,12-12V84A12,12,0,0,0,224,72Zm-12,39.15381a83.22823,83.22823,0,0,1-36.99268-14.91211,12,12,0,0,0-19.00781,9.74121L156,156a56,56,0,1,1-80-50.63965l-.00049,18.64795A39.99736,39.99736,0,1,0,140,156V40h17.06006A68.19054,68.19054,0,0,0,212,94.94Z"></path>{" "}
                </g>
              </svg>
              TikTok: @lattelab
            </p>
            <p>Siguenos para promociones y nuestro proceso artesanal.</p>
          </div>
        </div>
      </section>

      <section className="px-[5%] bg-background py-[54px] text-center">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">Contacte directamente con nuestro equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamCard
            name="Nicole Reyes"
            role="Fundador y chef ejecutivo"
            description="Especialista en repostería artesanal y mezclas de café."
            instagram="https://www.instagram.com/sar_ji.3/"
          />

          <TeamCard
            name="Samira Viña"
            role="Gerente general"
            description="Maneja reservas de eventos y experiencias grupales."
            instagram=""
          />

          <TeamCard
            name="Esthefany Quispe"
            role="Maestro barista"
            description="Experto en métodos de extracción y arte latte."
            instagram="https://www.instagram.com/blumwind/"
          />

          <TeamCard
            name="Tatiana Marín"
            role="Panadero creativo"
            description="Diseña nuestros postres y panes frescos diarios."
            instagram="https://www.instagram.com/tatianxs.__/"
          />

          <TeamCard
            name="Dayana Arellano"
            role="Director de Experiencia"
            description="Gestiona programas de retroalimentación y fidelización."
            instagram="https://www.instagram.com/abixx_1975?igsh=MXcxcDhwbzEzN2JhdQ%3D%3"
          />

          <TeamCard
            name="Noelia Garcia"
            role="Director de Recursos Humanos"
            description="Gestiona el talento, el desarrollo organizacional y el clima del equipo."
            instagram=""
          />
        </div>
      </section>

      <section className="px-[5%] bg-background-alt py-[54px] text-center">
        <div className="flex flex-col sm:flex-row gap-[3rem] justify-center items-start">
          <div>
            <h2 className="font-bold text-3xl mb-5 text-brown-dark">Preguntas frecuentes</h2>
            <p>Encuentra respuestas a tus preguntas aquí:</p>
          </div>
          <div className="grid grid-rows-3 gap-[2rem]">
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">¿Se permiten mascotas?</h3>
              <p>
                Sí, tenemos una <span className="font-bold text-red">terraza donde se admiten mascotas</span>.Por favor, usen correa.
              </p>
            </div>
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">¿Ofrecen descuentos para estudiantes?</h3>
              <p>
                ¡Claro! Muestra tu credencial de estudiante y 
                <span className="font-bold text-red">obtén un 15% de descuento</span> de lunes a jueves.
              </p>
            </div>
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">¿Puedo pedir una tarta personalizada?</h3>
              <p>
                Sí, con <span className="font-bold text-red">48 horas de antelación</span>.Consulta nuestra carta de repostería.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] bg-background py-[54px] text-center">
        <div class="mx-[40px] bg-[#ffffff] rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-[40px] p-6">
          <div class="flex flex-col gap-3 sm:w-1/2 w-full">
            <h2 className="font-bold text-3xl mb-5 text-[#5e3c23]">Contactanos</h2>
            <p>
              ¿Tienes alguna pregunta sobre nuestro menú, quieres hacer una
              reserva o dejarnos una sugerencia? Escríbenos a través del
              formulario y estaremos encantados de responderte lo antes posible.
              ¡Gracias por pensar en nosotros para acompañar tus mejores
              momentos con LatteLab!
            </p>
            <p>
              <i class="fa fa-phone"></i>999 888 777
            </p>
            <p>
              <i class="fa fa-envelope"></i> email@latteab.com
            </p>
            <p>
              <i class="fa fa-map-marked"></i> Av. Café #123, Lima
            </p>
          </div>

          <form action="#" autocomplete="off" className="flex flex-col gap-4 sm:w-1/2 w-full">
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              required
              className="p-[12px] border-1 border-[#ccc] rounded-xl"
            />
            <input
              type="email"
              placeholder="Ingresa tu correo"
              name="email"
              required
              className="p-[12px] border-1 border-[#ccc] rounded-xl"
            />
            <textarea placeholder="Ingresa tu mensaje" className="p-[12px] border-1 border-[#ccc] h-[120px] rounded-xl"></textarea>
            <button
              type="submit"
              name="enviar"
              value="enviar mensaje"
              className="bg-[#a96f4b] text-white p-[12px] font-bold rounded-xl"
            >
              Enviar Mensaje{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
