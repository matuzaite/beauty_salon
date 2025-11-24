import React from "react";
import "./styles.scss";

const Services = () => {
  const services = [
    { id: 1, name: "Kirpimas", priceFrom: 15 },
    { id: 2, name: "Dažymas", priceFrom: 40 },
    { id: 3, name: "Plaukų atstatymas", priceFrom: 25 },
    { id: 4, name: "Grožio procedūros", priceFrom: 30 },
    { id: 5, name: "Manikiūras", priceFrom: 20 },
    { id: 6, name: "Pedikiūras", priceFrom: 25 },
    { id: 7, name: "Antakių korekcija", priceFrom: 10 },
    { id: 8, name: "Makiažas", priceFrom: 35 },
  ];

  return (
    <div id="services" className="services services-list-wrapper">
      <h2>Paslaugos</h2>
      <ul className="services-list" aria-label="Paslaugų kainos">
        {services.map((s) => (
          <li key={s.id} className="service-line">
            <span className="service-name">{s.name}</span>
            <span className="service-price">nuo {s.priceFrom} €</span>
          </li>
        ))}
      </ul>
      <p className="services-note">
        * Kainos gali kisti priklausomai nuo plaukų būklės ir pageidavimų.
      </p>
    </div>
  );
};
export default Services;
