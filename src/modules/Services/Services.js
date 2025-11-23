import React from "react";
import "./styles.scss";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Kirpimas",
      image:
        "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Dažymas",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/hair-colour-damage-185350768-16x9_0.jpg?VersionId=dq4Cp7L4jeR4oJ9ZvMsP2YJDNTzu2ibY&size=690:388",
    },
    {
      id: 3,
      name: "Plaukų atstatymas",
      image:
        "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Grožio procedūros",
      image:
        "https://martinocartier.com/blog/wp-content/uploads/2022/08/Depositphotos_76546271_S.jpg",
    },
  ];

  // Static layout — no JS-driven animation needed

  return (
    <div id="services" className="services">
      <h2>Paslaugos</h2>
      <div className="scroller">
        <div className="scroller-inner">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
