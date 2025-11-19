import "./styles.scss";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Kirpimas",
      image:
        "https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Dažymas",
      image:
        "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Plaukų atstatymas",
      image:
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Grožio procedūros",
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="services">
      <h2>Mūsų Paslaugos</h2>
      <div className="services-grid">
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
  );
};
export default Services;
