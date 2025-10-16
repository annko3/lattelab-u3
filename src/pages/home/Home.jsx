import React from "react";
import cafePersons from "../../assets/images/cafePersons.png";

function Home() {
  return (
    <main>
      <section className="flex flex-col bg-background text-brown-dark items-center text-center">
        <h1 className="font-bold text-4xl mb-5 text-brown-dark">
          Bienvenidos a <span className="text-brown-pink">Lattelab</span>
        </h1>
        <p>
          Nacimos con la idea de ofrecer un espacio acogedor, donde cada cliente
          pueda encontrar desde un café clásico hasta preparaciones únicas
          hechas con granos seleccionados y tostados de manera artesanal.
        </p>
        <p className="italic mt-4">
          "Un café, una charla y un momento para ti"
        </p>
        <div className="flex flex-row gap-3 mt-4">
          <a
            href="/menu"
            className="bg-[#a9745c] text-white p-2 rounded-xl hover:bg-brown-medium"
          >
            Ver Menú
          </a>
          <a
            href="/contact#contact-form"
            className="border-1 border-[#a9745c] text-[#a9745c] p-2 rounded-xl hover:bg-[#a9745c] hover:text-white"
          >
            Contáctanos
          </a>
        </div>

        <img src={cafePersons} className="w-150 mt-4" />
      </section>

      <section className="bg-background-alt text-brown-dark">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">
          ¿Por qué elegir <span className="text-brown-pink">Lattelab</span>?
        </h2>
        <p>
          No solo es café... es vivir una experiencia. En Lattelab trabajamos
          para que cada cliente se sienta como en casa y se lleve un buen
          recuerdo.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-center p-10 text-center">
            <svg
              fill="#A9745C"
              width="64px"
              height="64px"
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
                {" "}
                <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,120,64Zm32,0a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,152,64Zm96,56v8a40.04613,40.04613,0,0,1-37.50781,39.91455A96.65441,96.65441,0,0,1,183.46387,208H208a8,8,0,0,1,0,16H156.8208c-.0376.00049-.07568.00586-.11279.00586-.02832,0-.05615-.00537-.08447-.00586H83.15869c-.04541-.001-.09033.00146-.13574,0H32a8,8,0,0,1,0-16H56.53613A96.31957,96.31957,0,0,1,24,136V88a8.00008,8.00008,0,0,1,8-8H208A40.04521,40.04521,0,0,1,248,120Zm-16,0a24.03806,24.03806,0,0,0-16-22.624V136a95.32337,95.32337,0,0,1-1.20312,15.01367A24.039,24.039,0,0,0,232,128Z"></path>{" "}
              </g>
            </svg>
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">
              Café fresco y de calidad
            </h3>
            <p>
              Usamos granos seleccionados y tostados de forma artesanal para que
              cada taza sea única.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center p-10 text-center">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 4.5C7 2.01472 9.01472 0 11.5 0H15V3.5C15 5.98528 12.9853 8 10.5 8H8V15H7V11H4.5C2.01472 11 0 8.98528 0 6.5V3H3.5C4.91363 3 6.17502 3.65183 7 4.67133V4.5ZM8.14648 6.14642L11.1465 3.14642L11.8536 3.85353L8.85359 6.85353L8.14648 6.14642ZM6.14648 9.85353L3.14648 6.85353L3.85359 6.14642L6.85359 9.14642L6.14648 9.85353Z"
                  fill="#A9745C"
                ></path>{" "}
              </g>
            </svg>
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">
              Compromiso con el medio ambiente
            </h3>
            <p>Priorizamos empaques ecológicos y prácticas sostenibles.</p>
          </div>
          <div className="flex flex-col justify-between items-center p-10 text-center">
            <svg
              fill="#A9745C"
              width="64px"
              height="64px"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M 28.0000 27.1257 C 31.1936 27.1257 33.9415 24.2737 33.9415 20.5602 C 33.9415 16.8912 31.1787 14.1729 28.0000 14.1729 C 24.8213 14.1729 22.0584 16.9506 22.0584 20.5898 C 22.0584 24.2737 24.8064 27.1257 28.0000 27.1257 Z M 10.9029 27.4673 C 13.6658 27.4673 16.0722 24.9718 16.0722 21.7485 C 16.0722 18.5548 13.6509 16.1930 10.9029 16.1930 C 8.1401 16.1930 5.7040 18.6143 5.7188 21.7782 C 5.7188 24.9718 8.1252 27.4673 10.9029 27.4673 Z M 45.0970 27.4673 C 47.8748 27.4673 50.2811 24.9718 50.2811 21.7782 C 50.2811 18.6143 47.8599 16.1930 45.0970 16.1930 C 42.3491 16.1930 39.9278 18.5548 39.9278 21.7485 C 39.9278 24.9718 42.3342 27.4673 45.0970 27.4673 Z M 2.6143 40.8806 L 13.9035 40.8806 C 12.3586 38.6376 14.2451 34.1220 17.4387 31.6562 C 15.7899 30.5570 13.6658 29.7400 10.8881 29.7400 C 4.1889 29.7400 0 34.6864 0 38.8010 C 0 40.1379 .7427 40.8806 2.6143 40.8806 Z M 53.3856 40.8806 C 55.2723 40.8806 56 40.1379 56 38.8010 C 56 34.6864 51.8113 29.7400 45.1119 29.7400 C 42.3342 29.7400 40.2102 30.5570 38.5613 31.6562 C 41.7549 34.1220 43.6414 38.6376 42.0966 40.8806 Z M 18.6568 40.8806 L 37.3283 40.8806 C 39.6604 40.8806 40.4925 40.2122 40.4925 38.9050 C 40.4925 35.0726 35.6944 29.7845 27.9851 29.7845 C 20.2907 29.7845 15.4928 35.0726 15.4928 38.9050 C 15.4928 40.2122 16.3247 40.8806 18.6568 40.8806 Z"></path>
              </g>
            </svg>
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">
              Ambiente acogedor
            </h3>
            <p>
              Un espacio diseñado para relajarte, estudiar o compartir con
              amigos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
