import "./styles.scss";

const Contact = () => {
  const professionals = [
    {
      id: 1,
      name: "Ligita",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
      whatsapp: "+370 XXX XXX XX",
      facebook: "https://facebook.com/ligita",
    },
    {
      id: 2,
      name: "Nijole",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
      whatsapp: "+370 XXX XXX XX",
      facebook: "https://facebook.com/nijole",
    },
    {
      id: 3,
      name: "Daiva",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
      whatsapp: "+370 XXX XXX XX",
      facebook: "https://facebook.com/daiva",
    },
    {
      id: 4,
      name: "Egle",
      position: "Vizažiste",
      phone: "+370 XXX XXX XX",
      whatsapp: "+370 XXX XXX XX",
      facebook: "https://facebook.com/egle",
    },
  ];

  return (
    <div className="contact-container">
      <h1>Our Professionals</h1>
      <p>Meet our talented team of beauty professionals</p>
      <div className="professionals-grid">
        {professionals.map((professional) => (
          <div key={professional.id} className="professional-card">
            <div className="card-header">
              <h2>{professional.name}</h2>
              <p className="position">{professional.position}</p>
            </div>
            <div className="card-content">
              <div className="contact-item">
                <span className="label">Phone:</span>
                <a href={`tel:${professional.phone}`}>{professional.phone}</a>
              </div>
              <div className="contact-item">
                <span className="label">WhatsApp:</span>
                <a
                  href={`https://wa.me/${professional.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {professional.whatsapp}
                </a>
              </div>
              <div className="contact-item">
                <span className="label">Facebook:</span>
                <a
                  href={professional.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
